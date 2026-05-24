import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import FormSection from '@/components/FormSection';

export const metadata: Metadata = {
  title: '메이크업학원 국비지원 완벽 가이드 | 내일배움카드 신청방법',
  description: '메이크업학원 국비지원(내일배움카드) 신청 자격, 지원 금액, 훈련장려금, 자비부담 계산법, 신청 방법까지 2026년 기준으로 총정리했습니다. 재직자·실업자 모두 최대 500만원 지원 가능합니다.',
  alternates: { canonical: '/funding' },
};

export default function FundingPage() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '60px 1.5rem 120px' }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', textDecoration: 'none', fontSize: 13, fontWeight: 700, marginBottom: 40 }}>
        <ChevronLeft size={16} /> 홈으로 돌아가기
      </Link>

      {/* 히어로 */}
      <div style={{ background: 'var(--accent)', borderRadius: 32, padding: '60px 40px', marginBottom: 60, color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: 'var(--primary)', fontWeight: 900, fontSize: 12, letterSpacing: '0.05em', marginBottom: 20 }}>2026년 정부 지원 혜택</p>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 950, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 20 }}>
            메이크업 교육의 <span style={{ color: 'var(--primary)' }}>경제적 자유.</span><br />
            국비지원 완벽 가이드
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 17, lineHeight: 1.7, maxWidth: 560, marginBottom: 40 }}>
            내일배움카드 수강료 지원부터 훈련장려금까지 — 메이크업학원 국비지원의 모든 것을 한 페이지에 정리했습니다.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {['최대 500만원 지원', '45~100% 감면', '훈련장려금 월 최대 11.6만원'].map((t, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 12, padding: '12px 20px', fontSize: 14, fontWeight: 700 }}>{t}</div>
            ))}
          </div>
        </div>
        <div style={{ position: 'absolute', right: -50, top: -50, width: 200, height: 200, background: 'var(--primary)', opacity: 0.05, borderRadius: '50%' }}></div>
      </div>

      <div style={{ marginBottom: 60 }}>
        <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 8, textAlign: 'center' }}>메이크업학원 수강료·국비지원 더 궁금하신가요?</h3>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 20, textAlign: 'center' }}>
          전문 상담사가 1:1로 맞춤 수강료 정보와 국비지원 혜택을 안내해 드립니다.
        </p>
        <FormSection />
      </div>

      {/* 지원 자격 */}
      <section style={{ marginBottom: 72 }}>
        <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 12, letterSpacing: '-0.02em' }}>메이크업학원 국비지원 신청 자격 확인</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
          메이크업학원 수강료 국비지원(국민내일배움카드)은 재직자·실업자·특수고용직·프리랜서·예비 창업자 등 대부분의 경제활동 인구가 신청할 수 있습니다.
          단, 공무원·사립학교 교직원·졸업 예정이 아닌 재학생은 일부 제한이 있습니다.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
          {[
            { title: '재직자', badge: '소득 무관', desc: '월 소득 무관 신청 가능. 지원율 45~85%. 훈련 기간 중 재직 유지 시 혜택 지속.' },
            { title: '실업자·구직자', badge: '우대 지원', desc: '취업을 희망하는 실업자. 100% 지원 과정이 많고, 훈련장려금 추가 지급 가능.' },
            { title: '특수고용직·프리랜서', badge: '특별 자격', desc: '고용보험 미가입자도 특별 자격으로 신청 가능. 소득 증빙 서류 필요.' },
            { title: '예비 창업자', badge: '창업 연계', desc: '뷰티샵 창업 준비 중인 자영업자·예비 창업자 포함. 창업 교육 과정 연계 가능.' },
          ].map((item, i) => (
            <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 24, padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <p style={{ fontWeight: 800, fontSize: 16 }}>{item.title}</p>
                <span style={{ background: 'var(--primary-light)', color: 'var(--primary-dark)', fontSize: 11, fontWeight: 800, padding: '2px 10px', borderRadius: 50 }}>{item.badge}</span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 지원 금액 상세 */}
      <section style={{ marginBottom: 72 }}>
        <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 12, letterSpacing: '-0.02em' }}>메이크업학원 수강료 국비지원 금액 상세 계산</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
          메이크업학원 수강료 국비지원 금액은 훈련 과정의 심사 등급과 본인 유형(재직자·실업자)에 따라 달라집니다.
          수강료의 자비부담 비율과 훈련장려금을 합산하면 실제 메이크업학원 비용 부담을 정확히 계산할 수 있습니다.
        </p>
        <div style={{ overflowX: 'auto', marginBottom: 20 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, background: 'var(--bg-card)', borderRadius: 20, overflow: 'hidden', border: '1px solid var(--border-color)' }}>
            <thead>
              <tr style={{ background: 'var(--primary-light)' }}>
                <th style={{ padding: '14px 18px', textAlign: 'left', fontWeight: 800, color: 'var(--primary-dark)' }}>구분</th>
                <th style={{ padding: '14px 18px', textAlign: 'center', fontWeight: 800, color: 'var(--primary-dark)' }}>수강료 지원율</th>
                <th style={{ padding: '14px 18px', textAlign: 'center', fontWeight: 800, color: 'var(--primary-dark)' }}>훈련장려금</th>
                <th style={{ padding: '14px 18px', textAlign: 'center', fontWeight: 800, color: '#16a34a' }}>예시: 150만원 과정 자비부담</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: '실업자 (취업지원 1유형)', rate: '100%', allowance: '월 11.6만원', self: '0원' },
                { type: '실업자 (일반)', rate: '80%', allowance: '월 11.6만원', self: '약 30만원' },
                { type: '재직자 (저소득층·우선지원)', rate: '85%', allowance: '없음', self: '약 22만원' },
                { type: '재직자 (일반)', rate: '45~85%', allowance: '없음', self: '약 22~82만원' },
              ].map((row, i) => (
                <tr key={i} style={{ borderTop: '1px solid var(--border-color)', background: i % 2 === 0 ? 'white' : 'var(--bg-main)' }}>
                  <td style={{ padding: '14px 18px', fontWeight: 600 }}>{row.type}</td>
                  <td style={{ padding: '14px 18px', textAlign: 'center', color: '#16a34a', fontWeight: 700 }}>{row.rate}</td>
                  <td style={{ padding: '14px 18px', textAlign: 'center', color: 'var(--text-secondary)' }}>{row.allowance}</td>
                  <td style={{ padding: '14px 18px', textAlign: 'center', fontWeight: 700 }}>{row.self}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.7 }}>
          ※ 훈련장려금은 출석률 80% 이상인 실업자 참여자에게 지급됩니다. 재직자에게는 훈련장려금이 별도 지급되지 않습니다.<br />
          ※ 카드 한도(최대 500만원)는 3년간 사용 가능하며, 잔여 한도 내에서 복수 과정 수강이 가능합니다.
        </p>
      </section>

      {/* 신청 프로세스 */}
      <section style={{ marginBottom: 72, background: 'var(--primary-light)', borderRadius: 32, padding: '50px 40px' }}>
        <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 12 }}>메이크업학원 국비지원 신청 단계별 안내</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8, marginBottom: 36 }}>
          메이크업학원 수강료 국비지원 카드 발급부터 수강 시작까지 보통 2~4주가 소요됩니다. 아래 순서대로 진행하면 빠짐없이 처리할 수 있습니다.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { step: '01', title: '카드 발급 신청', period: '1~5일', desc: '고용24(www.work.go.kr) 온라인 또는 가까운 고용센터 방문 신청. 재직자는 회사 재직증명서, 실업자는 고용보험 이력 확인 후 발급. 카드 도착까지 평균 2~5일.' },
            { step: '02', title: '훈련 과정 탐색', period: '자율', desc: 'HRD-Net(www.hrd.go.kr)에서 "메이크업" 또는 "미용사" 검색. 거주지 반경·수강료·훈련 시간·훈련기관 평점을 필터링해 비교. 훈련기관 평점 A등급 이상 추천.' },
            { step: '03', title: '학원 방문 및 상담', period: '1~2일', desc: '2~3곳 직접 방문해 강사 포트폴리오, 소수정예 여부, 재료비 포함 여부, 보강 정책을 확인. 카드로 결제하면 자비부담금만 납부. 영수증은 꼭 보관.' },
            { step: '04', title: '출석 관리 & 장려금 수령', period: '수강 기간', desc: '출석률 80% 이상 유지 필수. 결석 시 보강 가능 여부 사전 확인. 실업자는 매월 HRD-Net에서 훈련장려금(월 최대 11.6만원) 신청 가능.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 20, paddingBottom: i < 3 ? 32 : 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 40, height: 40, background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 13, fontWeight: 900, flexShrink: 0 }}>{item.step}</div>
                {i < 3 && <div style={{ width: 2, flex: 1, background: 'rgba(197,160,89,0.25)', marginTop: 8 }}></div>}
              </div>
              <div style={{ paddingTop: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: 17, fontWeight: 800, margin: 0 }}>{item.title}</h3>
                  <span style={{ background: 'white', border: '1px solid var(--border-color)', fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', padding: '2px 10px', borderRadius: 50 }}>{item.period}</span>
                </div>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 신청 시 주의사항 */}
      <section style={{ marginBottom: 72 }}>
        <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 12, letterSpacing: '-0.02em' }}>메이크업학원 국비지원 신청 전 꼭 알아야 할 주의사항</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>
          메이크업학원 수강료 국비지원을 받다가 중도 포기하거나 출석률 미달 시 환수 페널티가 발생할 수 있습니다.
          아래 사항을 반드시 숙지하고 신청하세요.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { icon: '⚠️', title: '출석률 80% 미만 시', desc: '수료 인정이 안 되며, 일부 과정에서는 지원금 환수 대상이 될 수 있습니다. 질병·사고의 경우 출석 인정 서류(진단서 등)를 반드시 제출하세요.' },
            { icon: '⚠️', title: '동일 훈련 과정 중복 수강 제한', desc: '같은 훈련과정을 2회 이상 중복 수강하면 2회차부터 자비부담이 증가합니다. 과정 선택 전 이미 이수한 과정과의 유사성을 확인하세요.' },
            { icon: '📋', title: '등록 전 NCS 기반 훈련과정 확인', desc: '모든 국비지원 과정은 NCS(국가직무능력표준) 기반으로 구성되어 있어 커리큘럼이 유사합니다. 훈련기관 평점과 수료율이 더 중요한 선택 기준입니다.' },
            { icon: '📋', title: '재직자 사업주 훈련과 혼동 주의', desc: '사업주가 직원을 위해 신청하는 "사업주 훈련"은 별도 제도입니다. 개인 신청 내일배움카드와 다르므로 혼동하지 마세요. 재직자는 반드시 본인 명의 내일배움카드로 신청해야 합니다.' },
          ].map((item, i) => (
            <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 16, padding: '20px 24px', display: 'flex', gap: 16 }}>
              <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
              <div>
                <p style={{ fontWeight: 800, fontSize: 15, marginBottom: 6 }}>{item.title}</p>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: 72 }}>
        <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 12 }}>메이크업학원 수강료 국비지원 자주 묻는 질문</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>
          메이크업학원 수강료 국비지원 신청 과정에서 자주 발생하는 궁금증을 정리했습니다.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { q: '이미 다른 과정을 들었는데 또 들을 수 있나요?', a: '네, 카드 잔액이 남아있다면 추가 수강이 가능합니다. 다만 동일 분야 중복 수강은 자비부담 비율이 높아질 수 있으므로, 신청 전 고용센터에 중복 수강 가능 여부를 확인하는 것이 좋습니다.' },
            { q: '자부담금이 아예 없는 경우도 있나요?', a: '취업지원제도 1유형 참여자(실업자 중 특별 사유 해당자)나 기초생활수급자의 경우 수강료가 100% 지원되어 자비 부담이 없는 경우가 많습니다. 고용센터 상담을 통해 본인 유형을 확인하세요.' },
            { q: '카드 발급 후 언제까지 써야 하나요?', a: '국민내일배움카드는 발급일로부터 5년간 유효합니다. 한도(최대 500만원)는 5년 이내에 사용하면 되며, 잔여 한도는 이월됩니다. 미사용 잔액이 있더라도 5년 경과 시 소멸되므로 유효기간 내 활용하세요.' },
            { q: '훈련장려금은 얼마를 받을 수 있나요?', a: '2026년 기준 훈련장려금은 출석률 80% 이상의 실업자 참여자에게 월 최대 116,000원이 지급됩니다. 3개월 과정 수강 시 최대 348,000원을 추가로 받을 수 있습니다. 매월 HRD-Net에서 직접 신청해야 하며 자동 지급이 아닙니다.' },
          ].map((faq, i) => (
            <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 20, padding: '24px 28px' }}>
              <p style={{ fontWeight: 900, fontSize: 16, marginBottom: 10, color: 'var(--text-primary)' }}>Q. {faq.q}</p>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 관련 정보 */}
      <section style={{ marginBottom: 48, background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 24, padding: '28px 32px' }}>
        <p style={{ fontSize: 12, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.1em', marginBottom: 16 }}>함께 보면 좋은 정보</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {[
            { href: '/guide', label: '학원 선택 체크리스트' },
            { href: '/employment', label: '자격증 취득 후 해외취업' },
            { href: '/qna', label: '국비지원 자주 묻는 질문' },
            { href: '/board', label: '수강료·후기 게시판' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{ background: 'var(--primary-light)', color: 'var(--primary-dark)', fontSize: 13, fontWeight: 700, padding: '8px 18px', borderRadius: 50, textDecoration: 'none' }}>
              {label} →
            </Link>
          ))}
        </div>
      </section>

      <div style={{ textAlign: 'center' }}>
        <Link href="/#consulting" style={{
          display: 'inline-block',
          background: 'var(--primary)',
          color: 'white',
          fontWeight: 800,
          fontSize: 16,
          padding: '18px 48px',
          borderRadius: 16,
          textDecoration: 'none',
          boxShadow: '0 10px 30px rgba(197, 160, 89, 0.2)'
        }}>
          내게 맞는 국비과정 무료 상담받기
        </Link>
      </div>
    </main>
  );
}
