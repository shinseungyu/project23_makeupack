import type { Metadata } from 'next';
import { PUBLISHED_DATE } from '@/data/seo';
import type { Article } from '@/lib/content';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://makeupcost.com';
const SITE_NAME = '메이크업학원수강료비교';
const OG_IMAGE = `${SITE_URL}/thumb.webp`;

/**
 * 페이지 공통 메타: canonical·og·twitter 를 그 페이지 URL·제목으로 맞춘다.
 * (layout 의 openGraph 를 그대로 물려받으면 og:title·og:url 이 전부 홈으로 나간다)
 */
export function pageMetadata(title: string, description: string, path: string, extra: Partial<Metadata> = {}): Metadata {
  const ogTitle = path === '/' ? title : `${title} | ${SITE_NAME}`;
  return {
    title: path === '/' ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url: `${SITE_URL}${path === '/' ? '/' : path}`,
      siteName: SITE_NAME,
      locale: 'ko_KR',
      type: 'website',
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title: ogTitle, description, images: [OG_IMAGE] },
    ...extra,
  };
}

export function articleMetadata(a: Article): Metadata {
  const meta = pageMetadata(a.title, a.description, a.path, { keywords: [a.keyword, ...(a.subKeywords ?? [])] });
  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      type: 'article',
      publishedTime: PUBLISHED_DATE,
      modifiedTime: PUBLISHED_DATE,
    },
  };
}
