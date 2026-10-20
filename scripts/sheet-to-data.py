"""
원고 시트(구글 시트 '원고' 탭) → data/articles.json 변환기.

    python scripts/sheet-to-data.py 1-10          # 글번호 1~10 을 받아 articles.json 에 넣는다(기존 글은 유지)
    python scripts/sheet-to-data.py 11-20 --csv 원고.csv   # 내려받은 CSV 로 변환

- 시트 형식: 글번호 | 순서 | 항목 | 내용 (항목 = 메인키워드·서브키워드·제목·요약·도입·H2_n·본문_n·표_n·CTA…)
- 본문 줄: "- " → ul, "1) " → ol, 그 외 → p. 표_n(마크다운 표) → table
- "자주 묻는 질문" 섹션의 Q./A. → faqs (FAQPage 스키마로 나간다)
- 시트 원고는 학원 블로그용이라 마지막 "[학원명] …" 홍보 섹션과 CTA 는 버린다 (이 사이트는 비교·상담 사이트).
  [학원명] 같은 자리표시 줄은 지우고, 남은 줄이 2줄 미만이면 섹션째 뺀다.
  표에서 값이 전부 자리표시([기간] 등)인 열·행은 지운다.
- "'제목 [링크]'", "[○○ 글 링크]" 는 [라벨](#글번호) 로 바꾼다. 실제 URL 은 렌더할 때
  data/plan.json 으로 풀고, 그 글이 아직 공개 전이면 링크 없이 글자만 나간다.
- 제목(title)·H1·description·lead 는 시트 제목을 그대로 쓰지 않고 data/seo.ts 에서 손으로 기획한다.
"""
import csv
import io
import json
import re
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'data' / 'articles.json'
PLAN = json.loads((ROOT / 'data' / 'plan.json').read_text(encoding='utf-8'))
SHEET_CSV = 'https://docs.google.com/spreadsheets/d/1AXgSdWi9G2OLq5ihOYK7wmqbHx7_oVbYoVmzH3lcCIE/export?format=csv&gid=200274158'

PLACEHOLDER = re.compile(r'\[(?!링크\])[^\]]+\]')


def load_rows(csv_path):
    if csv_path:
        text = Path(csv_path).read_text(encoding='utf-8-sig')
    else:
        text = urllib.request.urlopen(SHEET_CSV).read().decode('utf-8-sig')
    posts = {}
    for r in list(csv.reader(io.StringIO(text)))[1:]:
        if len(r) < 4 or not r[0].strip().isdigit():
            continue
        posts.setdefault(int(r[0]), []).append((r[2].strip(), r[3].strip()))
    return posts


def short_title(title):
    return re.split(r'[｜|]', title)[0].strip()


def link_markers(text, titles, keywords):
    """'제목 [링크]' · [키워드 글 링크] → [라벨](#글번호)"""

    def by_title(label):
        norm = re.sub(r'\s', '', label)
        for no, t in titles.items():
            if norm and (norm in re.sub(r'\s', '', t) or re.sub(r'\s', '', short_title(t)) in norm):
                return no
        return None

    def repl_title(m):
        label = m.group(1).strip()
        no = by_title(label)
        return f"'[{label}](#{no})'" if no else f"'{label}'"

    def repl_kw(m):
        kw = re.sub(r'\s', '', m.group(1))
        no = keywords.get(kw)
        return f'[{short_title(titles[no])}](#{no})' if no else m.group(1)

    text = re.sub(r"'([^'\n]+?)\s*\[링크\]'", repl_title, text)
    text = re.sub(r'\[([^\]]+?) 글 링크\]', repl_kw, text)
    return text.replace(' [링크]', '').replace('[링크]', '')


def parse_lines(text):
    blocks = []
    for line in [l.strip() for l in text.split('\n') if l.strip()]:
        if line.startswith('- '):
            kind, body = 'ul', line[2:].strip()
        elif re.match(r'^\d+\)\s', line):
            kind, body = 'ol', re.sub(r'^\d+\)\s*', '', line)
        else:
            blocks.append({'p': line})
            continue
        if blocks and kind in blocks[-1]:
            blocks[-1][kind].append(body)
        else:
            blocks.append({kind: [body]})
    return blocks


def parse_table(text):
    rows = [
        [c.strip() for c in l.strip().strip('|').split('|')]
        for l in text.split('\n')
        if l.strip().startswith('|') and not re.match(r'^\|\s*-', l.strip())
    ]
    head = rows[0]
    # 값 칸이 전부 자리표시([가격] 등)인 행은 지운다
    body = [r for r in rows[1:] if not all(PLACEHOLDER.fullmatch(c) for c in r[1:])]
    keep = [i for i in range(len(head)) if not all(PLACEHOLDER.fullmatch(r[i]) for r in body if i < len(r))]
    return {'head': [head[i] for i in keep], 'rows': [[r[i] for i in keep if i < len(r)] for r in body]}


def parse_faqs(text):
    faqs, q = [], None
    for line in [l.strip() for l in text.split('\n') if l.strip()]:
        if line.startswith('Q.'):
            q = line[2:].strip()
        elif line.startswith('A.') and q:
            faqs.append({'q': q, 'a': line[2:].strip()})
            q = None
    return faqs


def convert(no, items, titles, keywords):
    d = dict(items)
    plan = next(a for a in PLAN['articles'] if a['no'] == no)
    sections, faqs = [], []
    n = 1
    while f'H2_{n}' in d:
        h2 = d[f'H2_{n}']
        body = link_markers(d.get(f'본문_{n}', ''), titles, keywords)
        table = d.get(f'표_{n}')
        n += 1
        if '[학원명]' in h2:
            continue
        if '자주 묻는 질문' in h2:
            faqs = parse_faqs(body)
            continue
        lines = [l for l in body.split('\n') if l.strip() and not PLACEHOLDER.search(re.sub(r'\[[^\]]*\]\(#\d+\)', '', l))]
        if PLACEHOLDER.search(body) and len(lines) < 2:
            continue
        blocks = parse_lines('\n'.join(lines))
        if table:
            blocks.append({'table': parse_table(table)})
        sections.append({'h2': h2, 'blocks': blocks})
    return {
        'no': no,
        'keyword': plan['keyword'],
        'subKeywords': [s.strip() for s in d.get('서브키워드', '').split(',') if s.strip()],
        'sheetTitle': d.get('제목', ''),
        'summary': d.get('요약', ''),
        'intro': [l.strip() for l in d.get('도입', '').split('\n') if l.strip()],
        'sections': sections,
        'faqs': faqs,
    }


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    a, _, b = sys.argv[1].partition('-')
    wanted = range(int(a), int(b or a) + 1)
    csv_path = sys.argv[sys.argv.index('--csv') + 1] if '--csv' in sys.argv else None

    posts = load_rows(csv_path)
    titles = {no: dict(items).get('제목', '') for no, items in posts.items()}
    keywords = {re.sub(r'\s', '', dict(items).get('메인키워드', '')): no for no, items in posts.items()}

    data = json.loads(OUT.read_text(encoding='utf-8')) if OUT.exists() else []
    by_no = {x['no']: x for x in data}
    for no in wanted:
        if no not in posts:
            print(f'{no}: 시트에 없음')
            continue
        by_no[no] = convert(no, posts[no], titles, keywords)
        art = by_no[no]
        print(f"{no} {art['keyword']}: 섹션 {len(art['sections'])} · FAQ {len(art['faqs'])}")
    OUT.write_text(json.dumps(sorted(by_no.values(), key=lambda x: x['no']), ensure_ascii=False, indent=1) + '\n', encoding='utf-8')


if __name__ == '__main__':
    main()
