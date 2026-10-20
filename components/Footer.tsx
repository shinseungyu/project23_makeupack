import PrivacyPolicyModal from './PrivacyPolicyModal';
import LegalNoticeModal from './LegalNoticeModal';
import { ARTICLES, ROUTE_CLUSTERS } from '@/lib/content';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--accent)',
      color: 'white',
      padding: '80px 1.5rem',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ fontWeight: 900, fontSize: 16, color: 'var(--primary)', marginBottom: 8 }}>
          메이크업학원수강료비교사이트
        </p>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 24 }}>
          메이크업학원 수강료 · 국비지원 · 자격증 · 취업 · 창업 정보 전문
        </p>
        {/* 주제별 허브와 하위 글 — 모든 페이지에서 서브페이지로 이어지는 내부링크 */}
        <nav aria-label="주제별 정보" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem 1.25rem', flexWrap: 'wrap', maxWidth: 820, margin: '0 auto 16px' }}>
          <a href="/funding" style={footerHub}>국비지원</a>
          {ROUTE_CLUSTERS.map((c) => (
            <a key={c.slug} href={`/${c.slug}`} style={footerHub}>{c.name}</a>
          ))}
        </nav>
        <nav aria-label="인기 글" style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem 1rem', flexWrap: 'wrap', maxWidth: 820, margin: '0 auto 28px' }}>
          {ARTICLES.filter((a) => !a.isHub).map((a) => (
            <a key={a.no} href={a.path} style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>{a.keyword}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: 28 }}>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
            <PrivacyPolicyModal />
          </span>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
            <LegalNoticeModal />
          </span>
        </div>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', lineHeight: 1.8, maxWidth: 600, margin: '0 auto' }}>
          본 사이트는 정보 제공을 목적으로 운영되며, 학원비 및 수강료는 개별 학원의 운영 방침에 따라 실제와 다를 수 있습니다.<br />
          정확한 비용은 반드시 해당 학원 상담을 통해 확인하시기 바랍니다.<br />
          © 2026 메이크업학원수강료비교사이트. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const footerHub = { fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' };
