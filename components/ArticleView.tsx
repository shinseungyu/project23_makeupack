import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import FormSection from '@/components/FormSection';
import JsonLd from '@/components/JsonLd';
import { PUBLISHED_DATE } from '@/data/seo';
import { type Article, type Block, articlesIn, hrefOf, labelOf } from '@/lib/content';
import { articleLd, breadcrumbLd, collectionLd, faqLd } from '@/lib/jsonld';

/** 문장 안의 [라벨](#글번호) · [라벨](/경로) → 링크 (공개 전 글이면 글자만) */
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return part;
        const href = hrefOf(m[2].startsWith('#') ? Number(m[2].slice(1)) : m[2]);
        return href ? (
          <Link key={i} href={href} style={{ color: 'var(--primary-dark)', fontWeight: 700, textDecoration: 'underline' }}>
            {m[1]}
          </Link>
        ) : (
          m[1]
        );
      })}
    </>
  );
}

/** 목록 항목의 "라벨: 설명" 은 라벨을 굵게 */
function ListItem({ text }: { text: string }) {
  const m = text.match(/^([^:：]{2,28})[:：]\s+(.+)$/);
  if (!m) return <Inline text={text} />;
  return (
    <>
      <strong style={{ color: 'var(--text-primary)' }}>{m[1]}</strong>: <Inline text={m[2]} />
    </>
  );
}

const pStyle = { fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.85, margin: '0 0 14px' };
const listStyle = { margin: '0 0 16px', paddingLeft: 22, display: 'flex', flexDirection: 'column' as const, gap: 8 };
const liStyle = { fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75 };

function BlockView({ block }: { block: Block }) {
  if ('p' in block) return <p style={pStyle}><Inline text={block.p} /></p>;
  if ('ul' in block)
    return (
      <ul style={listStyle}>
        {block.ul.map((t, i) => <li key={i} style={liStyle}><ListItem text={t} /></li>)}
      </ul>
    );
  if ('ol' in block)
    return (
      <ol style={listStyle}>
        {block.ol.map((t, i) => <li key={i} style={liStyle}><ListItem text={t} /></li>)}
      </ol>
    );
  return (
    <div style={{ overflowX: 'auto', margin: '8px 0 20px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
        <thead>
          <tr style={{ background: 'var(--primary-light)' }}>
            {block.table.head.map((h, i) => (
              <th key={i} style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 800, color: 'var(--primary-dark)', whiteSpace: 'nowrap' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.table.rows.map((row, i) => (
            <tr key={i} style={{ borderTop: '1px solid var(--border-color)', background: i % 2 === 0 ? 'white' : 'var(--bg-main)' }}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: '12px 16px', lineHeight: 1.6, fontWeight: j === 0 ? 700 : 400, color: j === 0 ? 'var(--text-primary)' : 'var(--text-secondary)', minWidth: j === 0 ? 110 : 140 }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Breadcrumbs({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <nav aria-label="breadcrumb" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 32 }}>
      {trail.map((t, i) => (
        <span key={t.path} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          {i > 0 && <ChevronRight size={14} />}
          {i < trail.length - 1 ? (
            <Link href={t.path} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>{t.name}</Link>
          ) : (
            <span style={{ color: 'var(--text-secondary)' }}>{t.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

/** 같은 클러스터 글 카드 목록 (허브·목록 페이지와 글 하단에서 같이 쓴다) */
export function ArticleCards({ title, items }: { title: string; items: Article[] }) {
  if (items.length === 0) return null;
  return (
    <section style={{ marginBottom: 56 }}>
      <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 18, letterSpacing: '-0.02em' }}>{title}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
        {items.map((a) => (
          <Link key={a.no} href={a.path} style={{ display: 'block', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 18, padding: '20px 22px', textDecoration: 'none' }}>
            <p style={{ fontSize: 12, fontWeight: 800, color: 'var(--primary)', marginBottom: 8 }}>{a.cluster.name}</p>
            <p style={{ fontSize: 15.5, fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.45, marginBottom: 8 }}>{a.h1.split(' — ')[0]}</p>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{a.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function ArticleView({ article }: { article: Article }) {
  const { cluster } = article;
  const clusterPath = `/${cluster.slug}`;
  const trail = [
    { name: '홈', path: '/' },
    ...(article.isHub ? [] : [{ name: cluster.name, path: clusterPath }]),
    { name: article.keyword, path: article.path },
  ];
  const siblings = articlesIn(cluster.slug).filter((a) => a.no !== article.no);
  const related = (article.related ?? [])
    .map((r) => ({ href: hrefOf(r), label: labelOf(r) }))
    .filter((r): r is { href: string; label: string } => !!r.href && !siblings.some((s) => s.path === r.href));

  const ld: object[] = [
    articleLd({
      headline: article.h1,
      description: article.description,
      path: article.path,
      section: cluster.name,
      keywords: [article.keyword, ...(article.subKeywords ?? [])],
      datePublished: PUBLISHED_DATE,
    }),
    breadcrumbLd(trail),
  ];
  if (article.faqs.length > 0) ld.push(faqLd(article.faqs));
  // 허브 글은 같은 주제 글 목록도 함께 알린다
  if (article.isHub && siblings.length > 0)
    ld.push(collectionLd({ name: `${cluster.name} 글 모음`, description: article.description, path: article.path, items: siblings.map((s) => ({ name: s.h1.split(' — ')[0], path: s.path })) }));

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 1.5rem 120px' }}>
      <JsonLd data={ld} />

      <Breadcrumbs trail={trail} />

      {/* 히어로 */}
      <header style={{ background: 'var(--accent)', borderRadius: 32, padding: 'clamp(36px, 6vw, 56px) clamp(24px, 5vw, 40px)', marginBottom: 48, color: 'white' }}>
        <p style={{ color: 'var(--primary)', fontWeight: 900, fontSize: 12, letterSpacing: '0.05em', marginBottom: 16 }}>{cluster.name}</p>
        <h1 style={{ fontSize: 'clamp(24px, 4.4vw, 36px)', fontWeight: 950, lineHeight: 1.3, letterSpacing: '-0.03em', marginBottom: 20 }}>{article.h1}</h1>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 16, lineHeight: 1.8, margin: 0 }}>{article.lead}</p>
        {article.facts && (
          <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10, margin: '28px 0 0' }}>
            {article.facts.map((f) => (
              <div key={f.label} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 14, padding: '12px 16px' }}>
                <dt style={{ fontSize: 11.5, fontWeight: 800, color: 'var(--primary)', marginBottom: 4 }}>{f.label}</dt>
                <dd style={{ fontSize: 14, fontWeight: 700, margin: 0, lineHeight: 1.5 }}>{f.value}</dd>
              </div>
            ))}
          </dl>
        )}
        {/* 메인 히어로처럼 들어오자마자 상담 폼이 보이게 한다 */}
        <div style={{ marginTop: 32 }}>
          <FormSection />
        </div>
      </header>

      {/* 도입 */}
      <section style={{ marginBottom: 40 }}>
        {article.intro.map((t, i) => <p key={i} style={pStyle}>{t}</p>)}
      </section>

      {/* 목차 */}
      <nav aria-label="목차" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 20, padding: '22px 26px', marginBottom: 56 }}>
        <p style={{ fontSize: 13, fontWeight: 900, color: 'var(--primary)', marginBottom: 12 }}>목차</p>
        <ol style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 6 }}>
          {article.sections.map((s, i) => (
            <li key={i} style={{ fontSize: 14 }}>
              <a href={`#s${i + 1}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{s.h2}</a>
            </li>
          ))}
          {article.faqs.length > 0 && (
            <li style={{ fontSize: 14 }}>
              <a href="#faq" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>자주 묻는 질문</a>
            </li>
          )}
        </ol>
      </nav>

      {article.sections.map((s, i) => (
        <section key={i} id={`s${i + 1}`} style={{ marginBottom: 52, scrollMarginTop: 88 }}>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: 900, marginBottom: 16, letterSpacing: '-0.02em', lineHeight: 1.4 }}>{s.h2}</h2>
          {s.blocks.map((b, j) => <BlockView key={j} block={b} />)}
        </section>
      ))}

      {article.faqs.length > 0 && (
        <section id="faq" style={{ marginBottom: 56, scrollMarginTop: 88 }}>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 24px)', fontWeight: 900, marginBottom: 18 }}>{article.keyword} 자주 묻는 질문</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {article.faqs.map((f, i) => (
              <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 20, padding: '22px 26px' }}>
                <h3 style={{ fontWeight: 900, fontSize: 16, marginBottom: 10, color: 'var(--text-primary)' }}>Q. {f.q}</h3>
                <p style={{ fontSize: 14.5, color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 19, fontWeight: 800, marginBottom: 8, textAlign: 'center' }}>메이크업학원 수강료·국비지원 무료 상담</h2>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 20, textAlign: 'center' }}>
          목표와 일정에 맞는 과정, 수강료, 국비지원 가능 여부를 상담사가 1:1로 안내해 드립니다.
        </p>
        <FormSection />
      </section>

      <ArticleCards title={article.isHub ? `${cluster.name} 관련 글` : `${cluster.name} 다른 글`} items={siblings} />

      {(related.length > 0 || !article.isHub) && (
        <section style={{ marginBottom: 48, background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 24, padding: '26px 30px' }}>
          <p style={{ fontSize: 12, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.1em', marginBottom: 14 }}>함께 보면 좋은 정보</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {!article.isHub && cluster.hub !== 'static' && (
              <Link href={clusterPath} style={chip}>{cluster.name} 전체 보기 →</Link>
            )}
            {cluster.hub === 'static' && !article.isHub && (
              <Link href={clusterPath} style={chip}>{labelOf(clusterPath)} →</Link>
            )}
            {related.filter((r) => r.href !== clusterPath).map((r) => (
              <Link key={r.href} href={r.href} style={chip}>{r.label} →</Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

const chip = { background: 'var(--primary-light)', color: 'var(--primary-dark)', fontSize: 13, fontWeight: 700, padding: '8px 18px', borderRadius: 50, textDecoration: 'none' };
