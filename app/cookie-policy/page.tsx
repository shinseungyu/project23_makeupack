import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '쿠키 정책 | 메이크업학원수강료비교',
  robots: { index: false, follow: false },
};

export default function CookiePolicy() {
  return (
    <main style={{ maxWidth: 780, margin: '0 auto', padding: '48px 1rem 80px' }}>
      <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 24 }}>쿠키 정책</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.9 }}>
        본 사이트는 서비스 개선을 위해 쿠키를 사용합니다.<br /><br />
        사용 쿠키: Google Analytics(방문자 통계), Google AdSense(광고 최적화)<br />
        쿠키 거부: 브라우저 설정에서 쿠키를 비활성화할 수 있으나, 일부 기능이 제한될 수 있습니다.<br /><br />
        자세한 내용은 Google의 개인정보처리방침을 참고하세요.
      </p>
    </main>
  );
}
