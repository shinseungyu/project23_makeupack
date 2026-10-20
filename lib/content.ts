/**
 * 서브페이지(원고 글) 데이터 모델과 조회 함수.
 *
 * data/plan.json      : 도메인 전략 — 클러스터와 글번호별 URL (원고 40개 전체)
 * data/articles.json  : 원고 본문 (scripts/sheet-to-data.py 가 시트에서 생성)
 * data/seo.ts         : 공개한 글의 h1·title·description·lead (손으로 기획)
 *
 * 세 곳에 모두 있는 글만 공개된다. 클러스터 허브(/academy 등)는 plan 의 hub 글이 공개되면 그 글을 쓰고,
 * 아니면 공개된 하위 글 목록 페이지가 된다.
 */
import plan from '@/data/plan.json';
import articlesJson from '@/data/articles.json';
import { SEO } from '@/data/seo';

export type TableBlock = { head: string[]; rows: string[][] };
export type Block = { p: string } | { ul: string[] } | { ol: string[] } | { table: TableBlock };
export type Section = { h2: string; blocks: Block[] };
export type Faq = { q: string; a: string };

export type ArticleBody = {
  no: number;
  keyword: string;
  subKeywords: string[];
  sheetTitle: string;
  summary: string;
  intro: string[];
  sections: Section[];
  faqs: Faq[];
};

export type ArticleSeo = {
  h1: string;
  title: string;
  description: string;
  lead: string;
  subKeywords?: string[];
  facts?: { label: string; value: string }[];
  /** 클러스터 밖으로 보내는 내부링크: 글번호 또는 "/funding" 같은 기존 페이지 경로 */
  related?: (number | string)[];
};

export type Cluster = { slug: string; name: string; hub: number | 'static' | null };

export type Article = ArticleBody &
  ArticleSeo & {
    cluster: Cluster;
    slug: string;
    path: string;
    volume: number | null;
    isHub: boolean;
  };

const BODIES = new Map((articlesJson as ArticleBody[]).map((a) => [a.no, a]));

export const CLUSTERS = plan.clusters as Cluster[];

const pathOf = (cluster: string, slug: string) => (slug ? `/${cluster}/${slug}` : `/${cluster}`);

/** 공개된 글 (plan + 본문 + SEO 가 모두 있는 글), 검색량 순 */
export const ARTICLES: Article[] = plan.articles
  .filter((p) => BODIES.has(p.no) && SEO[p.no])
  .map((p) => {
    const body = BODIES.get(p.no)!;
    const seo = SEO[p.no];
    const cluster = CLUSTERS.find((c) => c.slug === p.cluster)!;
    return {
      ...body,
      ...seo,
      subKeywords: seo.subKeywords ?? body.subKeywords,
      cluster,
      slug: p.slug,
      path: pathOf(p.cluster, p.slug),
      volume: p.volume,
      isHub: p.slug === '',
    };
  })
  .sort((a, b) => (b.volume ?? 0) - (a.volume ?? 0));

export const getArticle = (cluster: string, slug: string) =>
  ARTICLES.find((a) => a.cluster.slug === cluster && a.slug === slug);

export const articlesIn = (cluster: string) => ARTICLES.filter((a) => a.cluster.slug === cluster);

/** 허브 URL 이 열리는 클러스터: 허브 글이 공개됐거나 공개된 하위 글이 있는 곳. funding 은 기존 정적 페이지 */
export const ROUTE_CLUSTERS = CLUSTERS.filter((c) => c.hub !== 'static' && articlesIn(c.slug).length > 0);

/** 허브 글이 없는 클러스터의 목록 페이지 소개 */
export const CLUSTER_INTRO: Record<string, { h1: string; title: string; description: string; lead: string }> = {
  makeup: {
    h1: '메이크업 방법 — 픽서·스모키·웨딩 메이크업 하는 법 모음',
    title: '메이크업 하는 법 모음 | 픽서 사용법·스모키·웨딩 메이크업',
    description: '메이크업 픽서 사용법, 스모키 메이크업, 웨딩 메이크업처럼 상황별 메이크업 방법을 한곳에 모았습니다.',
    lead: '데일리 메이크업의 지속력부터 특별한 날의 메이크업까지, 순서와 요령을 주제별로 정리한 글을 모았습니다.',
  },
  'special-makeup': {
    h1: '분장·페인팅 배우기 — 페이스페인팅·바디페인팅·특수분장 정보 모음',
    title: '분장·페인팅 배우기 | 페이스페인팅·바디페인팅·특수분장',
    description: '페이스페인팅, 바디페인팅, 특수분장처럼 메이크업에서 확장되는 분장·페인팅 분야의 재료와 기법, 배우는 방법을 모았습니다.',
    lead: '분장과 페인팅은 메이크업 기초 위에 재료와 표현 기법을 더해 배우는 분야입니다. 입문용 기법부터 진로까지 주제별로 정리했습니다.',
  },
  career: {
    h1: '뷰티 진로·창업 — 메이크업 아티스트 진로와 뷰티샵 창업 정보 모음',
    title: '뷰티 진로·창업 가이드 | 메이크업 아티스트 진로·샵 창업',
    description: '메이크업 아티스트 진로부터 뷰티샵 창업 준비까지, 뷰티 분야에서 일하는 방법과 준비 과정을 정리했습니다.',
    lead: '자격증을 딴 뒤 어떤 일을 할 수 있는지, 진로별로 필요한 준비와 현실적인 경로를 정리했습니다.',
  },
};

/** 본문 링크 [라벨](#글번호) 의 실제 경로. 공개 전 글이면 null */
export function hrefOf(ref: number | string): string | null {
  if (typeof ref === 'string') return ref;
  return ARTICLES.find((a) => a.no === ref)?.path ?? null;
}

/** 기존 정적 페이지 이름 (관련 링크 라벨용) */
export const STATIC_PAGES: Record<string, string> = {
  '/': '메이크업학원 수강료 비교',
  '/funding': '메이크업학원 국비지원 완벽 가이드',
  '/employment': '메이크업 자격증 취득 후 해외취업',
  '/guide': '메이크업학원 선택 체크리스트',
  '/qna': '메이크업학원 자주 묻는 질문',
  '/board': '수강료·후기 정보게시판',
};

export function labelOf(ref: number | string): string {
  if (typeof ref === 'string') return STATIC_PAGES[ref] ?? ref;
  const a = ARTICLES.find((x) => x.no === ref);
  return a ? a.h1.split(' — ')[0] : '';
}
