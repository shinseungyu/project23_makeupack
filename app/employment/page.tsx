import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import FormSection from '@/components/FormSection';

export const metadata: Metadata = {
  title: '메이크업아티스트 해외취업 가이드 | 일본·호주·캐나다·미국 취업',
  description: '메이크업아티스트 해외취업 준비 방법을 총정리했습니다. 일본·호주·캐나다·미국 취업 비자, 자격증 인정 여부, 예상 급여, 워킹홀리데이 활용법까지 2026년 최신 기준으로 안내합니다.',
  alternates: { canonical: '/employment' },
};

export default function EmploymentPage() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '60px 1.5rem 120px' }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', textDecoration: 'none', fontSize: 13, fontWeight: 700, marginBottom: 40 }}>
        <ChevronLeft size={16} /> 홈으로 돌아가기
      </Link>

      {/* 히어로 */}
      <div style={{ background: 'var(--accent)', borderRadius: 32, padding: '60px 40px', marginBottom: 60, color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: 'var(--primary)', fontWeight: 900, fontSize: 12, letterSpacing: '0.05em', marginBottom: 20 }}>2026년 해외취업 최신 정보</p>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 40px)', fontWeight: 950, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 20 }}>
            메이크업아티스트로<br />
            <span style={{ color: 'var(--primary)' }}>세계 무대에 서다.</span><br />
            해외취업 완벽 가이드
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, lineHeight: 1.7, maxWidth: 560, marginBottom: 40 }}>
            일본·호주·캐나다·미국에서 메이크업아티스트로 활동하는 구체적인 방법을 안내합니다. 비자 종류, 자격증 인정 여부, 예상 급여까지 한눈에 확인하세요.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {['일본·호주·캐나다·미국', '워킹홀리데이 활용', '자격증 인정 정보'].map((t, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 12, padding: '12px 20px', fontSize: 14, fontWeight: 700 }}>{t}</div>
            ))}
          </div>
        </div>
        <div style={{ position: 'absolute', right: -50, top: -50, width: 200, height: 200, background: 'var(--primary)', opacity: 0.05, borderRadius: '50%' }}></div>
      </div>

      <div style={{ marginBottom: 60 }}>
        <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 8, textAlign: 'center' }}>해외취업 준비, 어디서부터 시작할지 모르겠다면?</h3>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 20, textAlign: 'center' }}>
          목표 국가와 비자 조건, 추천 학원까지 1:1 무료 상담으로 맞춤 정보를 받아보세요.
        </p>
        <FormSection />
      </div>

      {/* 왜 해외취업인가 */}
      <section style={{ marginBottom: 80 }}>
        <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16, letterSpacing: '-0.02em' }}>메이크업학원 수료 후 해외취업, 왜 지금인가?</h2>
        <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24 }}>
          메이크업학원 수강료 100~200만원을 투자해 국가자격증을 취득한 뒤, 국내 취업에 머물지 않고 해외 무대로 시야를 넓히는 메이크업아티스트가 늘고 있습니다.
          국내 메이크업학원 수강료 투자 대비 해외 취업 수입은 국내의 1.5~3배 수준이며, K-뷰티 트렌드 확산으로 한국 메이크업아티스트에 대한 해외 수요가 꾸준히 높아지고 있습니다.
          해외 취업은 단순히 수입을 높이는 것을 넘어, 글로벌 포트폴리오를 쌓고 귀국 후 몸값을 올리는 전략적 선택이 됩니다.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {[
            { label: '일본 K-뷰티 수요', value: '매년 30% 성장', sub: '한국식 피부 표현 기술 인기' },
            { label: '호주 평균 연봉', value: 'AUD 55,000~', sub: '한화 약 5,000만원 이상' },
            { label: '캐나다 메이크업', value: 'CAD 45,000~', sub: '영화·방송 산업 수요 높음' },
            { label: '미국 뷰티 시장', value: '$100B 규모', sub: '웨딩·화보·필름 분야 활발' },
          ].map((item, i) => (
            <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 20, padding: '24px' }}>
              <p style={{ fontSize: 11, fontWeight: 800, color: 'var(--primary)', marginBottom: 8 }}>{item.label}</p>
              <p style={{ fontSize: 22, fontWeight: 950, letterSpacing: '-0.02em', marginBottom: 6 }}>{item.value}</p>
              <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 국가별 취업 가이드 */}
      <section style={{ marginBottom: 80 }}>
        <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 32, letterSpacing: '-0.02em' }}>메이크업학원 수료 후 국가별 해외취업 완전 가이드</h2>

        {[
          {
            country: '🇯🇵 일본',
            badge: '가장 현실적인 첫 해외취업지',
            intro: '일본은 언어 장벽이 낮고, K-뷰티 트렌드 덕분에 한국인 메이크업아티스트에 대한 수요가 높습니다. 도쿄·오사카 웨딩샵, 뷰티살롱, 방송국 등 다양한 현장에서 취업이 가능합니다.',
            items: [
              { label: '추천 비자', value: '기술·인문지식·국제업무 비자, 워킹홀리데이(30세 이하)' },
              { label: '자격증 인정', value: '한국 미용사(메이크업) 자격증은 일본에서 직접 인정되지 않으나, 포트폴리오와 실기 능력으로 취업 가능' },
              { label: '예상 급여', value: '월 20~30만엔 (한화 180~270만원), 프리랜서는 건당 1~3만엔' },
              { label: '주요 취업 분야', value: '웨딩샵, 뷰티살롱, 패션잡지, 방송·CF' },
            ],
            tip: '일본어 능력시험(JLPT) N3 이상이면 취업 기회가 크게 늘어납니다. 워킹홀리데이로 먼저 경험을 쌓고 취업 비자로 전환하는 루트가 현실적입니다.',
          },
          {
            country: '🇦🇺 호주',
            badge: '워킹홀리데이 활용 최적지',
            intro: '호주는 워킹홀리데이 비자(30세 이하)를 통해 합법적으로 취업하며 경험을 쌓을 수 있는 최적의 환경입니다. 시드니·멜버른·브리즈번의 뷰티 살롱, 방송 스튜디오, 웨딩 업계에서 꾸준한 수요가 있습니다.',
            items: [
              { label: '추천 비자', value: '워킹홀리데이(WHV 417), 기술이민(482·186) 비자' },
              { label: '자격증 인정', value: 'Certificate III/IV in Beauty Therapy 취득 시 현지 취업·이민 유리, 한국 자격증은 직접 인정 안됨' },
              { label: '예상 급여', value: '시급 AUD 25~35 (한화 2.3~3.2만원), 연봉 기준 AUD 50,000~70,000' },
              { label: '주요 취업 분야', value: '데이스파, 메디컬 에스테틱, 웨딩, 영화·TV 프로덕션' },
            ],
            tip: '호주 현지 TAFE(직업학교)에서 Certificate 과정을 이수하면 영주권 취득 가능 직종에 포함되어 장기 거주 전략으로 활용할 수 있습니다.',
          },
          {
            country: '🇨🇦 캐나다',
            badge: '영화·방송 메이크업아티스트의 성지',
            intro: '캐나다 밴쿠버는 할리우드 북부라고 불릴 만큼 영화·드라마 제작이 활발합니다. 영화·방송·광고 분야 메이크업아티스트 수요가 특히 높으며, IATSE(영화산업 노조) 가입 시 높은 수입을 기대할 수 있습니다.',
            items: [
              { label: '추천 비자', value: '워킹홀리데이(IEC), LMIA 취업 비자, Express Entry 기술이민' },
              { label: '자격증 인정', value: '주(州)마다 상이. BC주는 별도 라이선스 없이 취업 가능, 온타리오는 일부 자격 필요' },
              { label: '예상 급여', value: '시급 CAD 25~45, 영화 현장 일일 페이 CAD 400~800' },
              { label: '주요 취업 분야', value: '영화·TV 프로덕션, 광고 촬영, 웨딩, 뷰티 살롱' },
            ],
            tip: '밴쿠버 영화 산업에 진입하려면 현지 메이크업아티스트 조합(IATSE Local 891)에 등록하는 것이 중요합니다. 먼저 워킹홀리데이로 입국해 현장 경험을 쌓는 것을 추천합니다.',
          },
          {
            country: '🇺🇸 미국',
            badge: '높은 진입 장벽, 최고의 보상',
            intro: '미국은 진입 장벽이 높지만 성공 시 보상이 가장 큽니다. LA·뉴욕의 영화·방송·패션 업계는 세계 최고 수준의 메이크업아티스트를 필요로 합니다. O-1 비자(특출난 능력자)나 EB 이민 비자 경로를 준비하는 것이 현실적입니다.',
            items: [
              { label: '추천 비자', value: 'J-1 교환방문(인턴십), O-1 특기자 비자, H-1B(제한적)', },
              { label: '자격증 인정', value: '주(州)마다 코스메톨로지 라이선스 요구 여부 상이. 뉴욕·캘리포니아는 별도 국가 시험 필요' },
              { label: '예상 급여', value: '신입 연봉 USD 35,000~55,000, 경력자 USD 80,000+, 할리우드 전문직 USD 150,000 이상' },
              { label: '주요 취업 분야', value: '할리우드 영화, 뮤직비디오, 런웨이·패션위크, 방송국' },
            ],
            tip: '미국 진출을 목표로 한다면 국내에서 탄탄한 포트폴리오를 먼저 구축하고, 국제 뷰티 대회 수상 경력을 쌓아두면 O-1 비자 신청에 유리합니다.',
          },
        ].map((country, i) => (
          <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 24, padding: '36px', marginBottom: 24 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>{country.country}</h3>
                <span style={{ background: 'var(--primary-light)', color: 'var(--primary-dark)', fontSize: 12, fontWeight: 800, padding: '4px 12px', borderRadius: 50 }}>{country.badge}</span>
              </div>
            </div>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24 }}>{country.intro}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginBottom: 20 }}>
              {country.items.map((item, j) => (
                <div key={j} style={{ background: 'var(--bg-main)', borderRadius: 14, padding: '16px' }}>
                  <p style={{ fontSize: 11, fontWeight: 800, color: 'var(--text-muted)', marginBottom: 6 }}>{item.label}</p>
                  <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.5 }}>{item.value}</p>
                </div>
              ))}
            </div>
            <div style={{ background: 'var(--primary-light)', borderRadius: 12, padding: '16px 20px', borderLeft: '3px solid var(--primary)' }}>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--primary-dark)' }}>Tip.</strong> {country.tip}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* 해외취업 준비 로드맵 */}
      <section style={{ marginBottom: 80, background: 'var(--primary-light)', borderRadius: 32, padding: '50px 40px' }}>
        <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 12, letterSpacing: '-0.02em' }}>메이크업학원 수강료 투자부터 해외취업까지 준비 로드맵</h2>
        <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
          메이크업학원 수강료 투자 → 국가자격증 취득 → 포트폴리오 구축 → 해외 진출까지, 준비 순서가 중요합니다. 아래 단계를 따라 체계적으로 준비하세요.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { step: '01', title: '메이크업학원 수강료 투자 — 자격증 취득 및 포트폴리오 구축', period: '6~12개월', desc: '메이크업학원 수강료 100~200만원을 투자해 미용사(메이크업) 국가자격증을 취득하고, 웨딩·화보·뷰티 분야의 다양한 포트폴리오를 쌓습니다. 국비지원을 활용하면 메이크업학원 수강료 부담을 크게 줄일 수 있습니다. SNS(인스타그램) 영문 포트폴리오를 운영하면 해외 채용 담당자에게 노출될 수 있습니다.' },
            { step: '02', title: '목표 국가 언어·문화 학습', period: '6개월~', desc: '일본어(JLPT N3↑), 영어(OPIc IM↑)를 준비합니다. 언어 실력은 현지 취업의 핵심 경쟁력입니다. 특히 고객과 소통이 많은 웨딩·뷰티살롱 분야에서는 현지어 능력이 채용에 결정적인 영향을 미칩니다.' },
            { step: '03', title: '워킹홀리데이 또는 인턴십으로 현장 경험', period: '1~2년', desc: '목표 국가에서 워킹홀리데이 또는 단기 인턴십 비자로 입국해 현장 경험을 쌓습니다. 현지 살롱이나 스튜디오에서 일하며 포트폴리오를 강화하고 현지 네트워크를 형성하는 것이 핵심입니다.' },
            { step: '04', title: '정규 취업 비자 또는 기술이민 전환', period: '목표 달성 후', desc: '현장 경험과 현지 고용주의 지원을 바탕으로 장기 취업 비자(기술이민, LMIA 등)를 신청합니다. 일부 국가에서는 현지 자격증 취득이 이민에 유리하게 작용하므로, 체류 중 자격 취득을 병행하세요.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 20, paddingBottom: i < 3 ? 32 : 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 40, height: 40, background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 13, fontWeight: 900, flexShrink: 0 }}>{item.step}</div>
                {i < 3 && <div style={{ width: 2, flex: 1, background: 'var(--border-color)', marginTop: 8 }}></div>}
              </div>
              <div style={{ paddingTop: 8, paddingBottom: i < 3 ? 16 : 0 }}>
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

      {/* 해외취업 FAQ */}
      <section style={{ marginBottom: 80 }}>
        <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 32, letterSpacing: '-0.02em' }}>메이크업아티스트 해외취업 자주 묻는 질문</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { q: '한국 미용사(메이크업) 자격증이 해외에서도 인정되나요?', a: '직접 인정은 대부분의 국가에서 되지 않습니다. 그러나 자격증은 기술 수준의 증거로 포트폴리오와 함께 제출하면 채용에 긍정적으로 작용합니다. 호주·캐나다처럼 현지 자격증 취득이 필요한 국가도 있으므로, 목표 국가의 자격 요건을 미리 확인하세요.' },
            { q: '영어를 잘 못해도 해외취업이 가능한가요?', a: '일본 취업이라면 일본어를 우선 준비하면 됩니다. 영어권 국가는 기본 소통이 가능한 수준이라도 시작할 수 있으나, 고객 응대가 있는 직종에서는 언어 실력이 경쟁력입니다. 현장 작업 중심의 영화·방송 메이크업은 기술이 우선시되므로 영어가 부족해도 진입이 가능한 편입니다.' },
            { q: '워킹홀리데이 나이 제한이 지났다면 어떻게 하나요?', a: '31세 이상이라면 워킹홀리데이 대신 취업 비자(LMIA, 기술이민 등)나 학생 비자(현지 학교 입학)를 통해 체류하며 취업 기회를 모색할 수 있습니다. 현지 학교의 Certificate 과정을 이수하면 학생 비자로 파트타임 근무가 가능하고, 졸업 후 취업 비자로 전환할 수 있습니다.' },
            { q: '국내 학원을 졸업한 뒤 바로 해외취업이 가능한가요?', a: '가능은 하지만 국내 현장 경험이 최소 1~2년 있으면 해외 취업 성공률이 크게 높아집니다. 포트폴리오의 다양성과 품질이 핵심이므로, 국내에서 다양한 분야(웨딩, 화보, 방송)의 경험을 쌓은 뒤 도전하는 것을 권장합니다.' },
          ].map((faq, i) => (
            <div key={i} style={{ background: 'white', border: '1px solid var(--border-color)', borderRadius: 20, padding: '28px 30px' }}>
              <p style={{ fontWeight: 900, fontSize: 16, marginBottom: 12, color: 'var(--text-primary)' }}>Q. {faq.q}</p>
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
            { href: '/funding', label: '국비지원으로 수강료 절감' },
            { href: '/guide', label: '학원 선택 체크리스트' },
            { href: '/qna', label: '자주 묻는 질문' },
            { href: '/board', label: '해외취업 후기 게시판' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{ background: 'var(--primary-light)', color: 'var(--primary-dark)', fontSize: 13, fontWeight: 700, padding: '8px 18px', borderRadius: 50, textDecoration: 'none' }}>
              {label} →
            </Link>
          ))}
        </div>
      </section>

      {/* 하단 CTA */}
      <div style={{ background: 'linear-gradient(to bottom right, #ede9fe, #fef3c7)', borderRadius: 24, padding: '40px', textAlign: 'center' }}>
        <h4 style={{ fontSize: 20, fontWeight: 900, marginBottom: 10 }}>해외취업 준비, 어디서부터 시작할지 모르겠다면?</h4>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 24, lineHeight: 1.7 }}>
          목표 국가와 비자 조건, 추천 학원까지 1:1 무료 상담으로 맞춤 정보를 받아보세요.
        </p>
        <Link href="/#consulting" style={{ display: 'inline-block', background: 'var(--primary)', color: 'white', fontWeight: 700, fontSize: 15, padding: '14px 36px', borderRadius: 50, textDecoration: 'none' }}>
          무료 상담 신청하기
        </Link>
      </div>
    </main>
  );
}
