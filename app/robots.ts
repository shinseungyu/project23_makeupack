import type { MetadataRoute } from 'next';

// 약관·처리방침은 페이지에서 noindex 를 준다. 여기서 Disallow 하면 크롤러가 noindex 를 못 읽어
// 외부 링크만으로 URL 이 색인될 수 있어서 막지 않는다
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://makeupcost.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
