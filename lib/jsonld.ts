/**
 * 페이지별 구조화 데이터(JSON-LD) 빌더.
 * 사이트 공통 WebSite·Organization 은 app/layout.tsx, 홈 전용 WebPage·Service 는 app/page.tsx 에 있다.
 * 여기 빌더는 모두 그 @id(#website, #organization)를 참조한다.
 */
import { SITE_NAME, SITE_URL } from '@/lib/site';

export type Crumb = { name: string; path: string };

const abs = (path: string) => `${SITE_URL}${path === '/' ? '/' : path}`;
const OG_IMAGE = `${SITE_URL}/thumb.webp`;

export function breadcrumbLd(trail: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, item: abs(t.path) })),
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

/** 정보 글 (Article / BlogPosting) */
export function articleLd(o: {
  type?: 'Article' | 'BlogPosting';
  headline: string;
  description: string;
  path: string;
  section?: string;
  keywords?: string[];
  datePublished: string;
  dateModified?: string;
}) {
  const url = abs(o.path);
  return {
    '@context': 'https://schema.org',
    '@type': o.type ?? 'Article',
    '@id': `${url}#article`,
    headline: o.headline,
    description: o.description,
    inLanguage: 'ko-KR',
    ...(o.section && { articleSection: o.section }),
    ...(o.keywords && { keywords: o.keywords.join(', ') }),
    image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
    datePublished: o.datePublished,
    dateModified: o.dateModified ?? o.datePublished,
    author: { '@type': 'Organization', name: SITE_NAME, url: `${SITE_URL}/` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    isPartOf: { '@id': `${SITE_URL}/#website` },
  };
}

/** 글 목록 페이지 (허브·게시판) */
export function collectionLd(o: { name: string; description: string; path: string; items: { name: string; path: string }[] }) {
  const url = abs(o.path);
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#webpage`,
    url,
    name: o.name,
    description: o.description,
    inLanguage: 'ko-KR',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: o.items.length,
      itemListElement: o.items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, url: abs(it.path) })),
    },
  };
}
