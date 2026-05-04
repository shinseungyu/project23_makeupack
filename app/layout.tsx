import type { Metadata } from 'next';
import Script from 'next/script';
import { Geist } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });

const SITE_NAME = '메이크업학원수강료비교';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://makeupcost.com';
const TITLE = '메이크업학원수강료 비교 | 메이크업학원비용·국비지원·가격 총정리 (2026)';
const DESC = '메이크업학원수강료 비교 사이트. 메이크업학원비용·메이크업학원가격·국비지원 메이크업학원 정보를 2026년 최신 기준으로 총정리했습니다. 강남메이크업학원 수강료, 내일배움카드 지원율, 자격증 취득 비용까지 한눈에 비교하고 무료 상담으로 확인하세요.';
const OG_IMAGE = `${SITE_URL}/thumb.webp`;

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESC,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  keywords: [
    '메이크업학원',
    '강남메이크업학원',
    '메이크업학원가격',
    '메이크업학원수강료',
    '메이크업학원비용',
    '국비지원메이크업학원',
    '메이크업학원비',
    '메이크업학원추천',
    '메이크업학원학원비',
    '메이크업학원수강료비교사이트',
    '내일배움카드 메이크업',
    '메이크업 국비지원',
    '메이크업아티스트 학원',
    '웨딩메이크업 학원',
    '메이크업 자격증',
    '미용사 메이크업 자격증',
    '메이크업 취업 학원',
    '메이크업아티스트 되는법',
    '뷰티학원 수강료',
    '메이크업 학원 비교',
    '뷰티아티스트 학원비',
    '메이크업 배우기',
  ],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: '메이크업학원수강료 비교사이트',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: SITE_NAME,
    title: TITLE,
    description: DESC,
    images: [OG_IMAGE],
  },
  authors: [{ name: SITE_NAME }],
  publisher: SITE_NAME,
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, date: false, address: false, email: false },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  other: {
    'google-adsense-account': 'ca-pub-5378247298190063',
    'NaverBot': 'all',
    'Yeti': 'all',
    'googlebot': 'all',
    'subject': '메이크업학원수강료비교사이트',
    'title': TITLE,
    'publisher': SITE_NAME,
    'author': SITE_NAME,
    'Other Agent': SITE_NAME,
    'location': 'South Korea',
    'distribution': 'global',
    'rating': 'general',
    'format-detection': 'telephone=no, date=no, address=no, email=no',
    'itemprop:name': TITLE,
    'itemprop:description': DESC,
    'itemprop:image': OG_IMAGE,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://makeupcost.com';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: SITE_NAME,
        inLanguage: 'ko-KR',
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/qna?q={search_term_string}` },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: SITE_NAME,
        url: `${siteUrl}/`,
        description: '메이크업학원 수강료·국비지원·취업 정보를 비교 제공하는 메이크업 전문 정보 사이트입니다.',
      },
      {
        '@type': 'Service',
        '@id': `${siteUrl}/#service`,
        name: SITE_NAME,
        serviceType: '메이크업학원 수강료 비교 및 상담 서비스',
        areaServed: { '@type': 'Country', name: 'KR' },
        provider: { '@id': `${siteUrl}/#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        url: `${siteUrl}/`,
        name: TITLE,
        inLanguage: 'ko-KR',
        description: DESC,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: ['메이크업학원수강료', '메이크업학원비용', '국비지원 메이크업학원', '내일배움카드 메이크업', '메이크업아티스트 취업', '강남메이크업학원'],
        mainEntity: { '@id': `${siteUrl}/#service` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '홈', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: '국비지원', item: `${siteUrl}/funding` },
          { '@type': 'ListItem', position: 3, name: '해외취업', item: `${siteUrl}/employment` },
          { '@type': 'ListItem', position: 4, name: 'FAQ', item: `${siteUrl}/qna` },
        ],
      },
    ],
  };

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />

        {/* Schema.org microdata */}
        <meta itemProp="name" content={TITLE} />
        <meta itemProp="description" content={DESC} />
        <meta itemProp="image" content={OG_IMAGE} />

        {/* 로봇 — 리치 스니펫 최대 허용 */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="NaverBot" content="all" />
        <meta name="Yeti" content="all" />
        <meta name="naver-site-verification" content="36e9a3d7ff5db494eb24f2315d9e89c8cdd6f12e" />

        {/* 언어 / 지역 — 네이버·구글에 한국 사이트임을 명시 */}
        <meta httpEquiv="content-language" content="ko-KR" />
        <meta name="geo.region" content="KR" />
        <meta name="geo.country" content="KR" />
        <meta name="geo.placename" content="South Korea" />

        {/* 사이트 분류 */}
        <meta name="classification" content="교육, 미용, 뷰티" />
        <meta name="category" content="메이크업학원 교육" />
        <meta name="copyright" content={SITE_NAME} />
        <meta name="revisit-after" content="7 days" />

        {/* OG 이미지 크기·타입 명시 (카카오·네이버 미리보기 품질) */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/webp" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HQ7J0K4PKJ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HQ7J0K4PKJ');
          `}
        </Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5378247298190063"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={geist.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
