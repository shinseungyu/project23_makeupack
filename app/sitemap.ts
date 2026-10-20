import type { MetadataRoute } from 'next';
import postsData from '@/data/posts.json';
import { PUBLISHED_DATE } from '@/data/seo';
import { ARTICLES, ROUTE_CLUSTERS } from '@/lib/content';

/** 홈·정적 페이지를 마지막으로 고친 날. 해당 페이지를 수정하면 함께 바꾼다 */
const SITE_UPDATED = '2026-10-20';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://makeupcost.com';
  // 빌드할 때마다 바뀌는 new Date() 대신 실제 수정일을 쓴다 (매번 바뀌면 lastmod 를 신뢰하지 않게 된다)
  const now = new Date(SITE_UPDATED);
  const published = new Date(PUBLISHED_DATE);

  // 클러스터 허브 (/academy, /license …). 허브 글이 있으면 그 글이 허브다
  const hubUrls = ROUTE_CLUSTERS.map((c) => ({
    url: `${baseUrl}/${c.slug}`,
    lastModified: published,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // 하위 글: 검색량이 큰 글에 더 높은 우선순위
  const articleUrls = ARTICLES.filter((a) => !a.isHub).map((a) => ({
    url: `${baseUrl}${a.path}`,
    lastModified: published,
    changeFrequency: 'monthly' as const,
    priority: (a.volume ?? 0) >= 10000 ? 0.8 : (a.volume ?? 0) >= 1000 ? 0.7 : 0.6,
  }));

  const postUrls = postsData.map(post => ({
    url: `${baseUrl}/board?id=${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/funding`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...hubUrls,
    ...articleUrls,
    { url: `${baseUrl}/guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/employment`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/qna`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/board`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    ...postUrls,
  ];
}
