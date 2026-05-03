import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '개인정보처리방침 | 메이크업학원수강료비교',
  robots: { index: false, follow: false },
};

export default function PrivacyPolicy() {
  return (
    <main style={{ maxWidth: 780, margin: '0 auto', padding: '48px 1rem 80px' }}>
      <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 24 }}>개인정보처리방침</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.9 }}>
        본 사이트(메이크업학원수강료비교사이트)는 이용자의 개인정보를 소중히 여기며, 개인정보보호법 및 관련 법령을 준수합니다.<br /><br />
        수집하는 개인정보: 상담 신청 시 이름, 연락처 등 최소한의 정보만 수집합니다.<br />
        수집 목적: 메이크업학원 관련 맞춤 상담 제공<br />
        보유 기간: 목적 달성 후 즉시 파기<br />
        제3자 제공: 이용자 동의 없이 제3자에게 제공하지 않습니다.<br /><br />
        문의: 홈페이지 상담 신청 페이지를 통해 연락 주시기 바랍니다.
      </p>
    </main>
  );
}
