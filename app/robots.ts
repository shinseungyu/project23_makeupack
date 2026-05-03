import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://makeuphakwon.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/privacy-policy', '/terms-of-service', '/cookie-policy'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
