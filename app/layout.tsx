import type { Metadata } from 'next';
import Script from 'next/script';
import { Geist } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import BottomForm from '@/components/BottomForm';
import { HOME_DESC as DESC, HOME_TITLE as TITLE, SITE_NAME, SITE_URL } from '@/lib/site';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });

const OG_IMAGE = `${SITE_URL}/thumb.webp`;

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESC,
  metadataBase: new URL(SITE_URL),
  // canonical 은 페이지마다 따로 준다 (여기 두면 canonical 없는 페이지·404 가 전부 홈을 가리킨다)
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
  // 페이지에서 noindex 를 주면 이 값이 통째로 바뀐다. robots 메타 태그를 head 에 따로 쓰지 않는다
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  formatDetection: { telephone: false, date: false, address: false, email: false },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  other: {
    'google-adsense-account': 'ca-pub-5378247298190063',
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
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: SITE_NAME,
        url: `${siteUrl}/`,
        description: '메이크업학원 수강료·국비지원·취업 정보를 비교 제공하는 메이크업 전문 정보 사이트입니다.',
      },
    ],
  };

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* 사이트 공통 스키마. 홈 전용 WebPage·Service 는 app/page.tsx 에 있다.
            next/script 로 넣으면 JS 실행 후에만 생겨 네이버가 못 읽으므로 일반 script 로 넣는다 */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
        <BottomForm />
      </body>
    </html>
  );
}
