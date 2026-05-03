import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '이용약관 | 메이크업학원수강료비교',
  robots: { index: false, follow: false },
};

export default function TermsOfService() {
  return (
    <main style={{ maxWidth: 780, margin: '0 auto', padding: '48px 1rem 80px' }}>
      <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 24 }}>이용약관</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.9 }}>
        본 사이트는 메이크업학원 수강료 및 관련 정보를 제공하는 정보 서비스입니다.<br /><br />
        본 사이트에서 제공하는 수강료 정보는 참고용이며, 실제 학원비는 학원 사정에 따라 달라질 수 있습니다.<br />
        사이트 내 정보를 이용한 결과에 대해 본 사이트는 책임을 지지 않습니다.<br /><br />
        저작권: 본 사이트의 모든 콘텐츠는 저작권법의 보호를 받습니다. 무단 복제 및 배포를 금합니다.
      </p>
    </main>
  );
}
