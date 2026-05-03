import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: '메이크업학원 선택 가이드 | 후회 없는 학원 등록 전 체크리스트 2026',
  description: '메이크업학원 등록 전 반드시 확인해야 할 5가지 기준(강사 경력, 소수정예, 재료비, 취업 연계, 국비지원)을 상세히 안내합니다. 수강료 낭비 없이 올바른 학원을 선택하는 완벽 가이드입니다.',
  alternates: { canonical: '/guide' },
};

export default function GuidePage() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '60px 1.5rem 120px' }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', textDecoration: 'none', fontSize: 13, fontWeight: 700, marginBottom: 40 }}>
        <ChevronLeft size={16} /> 홈으로 돌아가기
      </Link>

      <section className="animate-fadeInUp" style={{ marginBottom: 80 }}>
        <h1 style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 950, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 24 }}>
          현명한 아티스트의<br />
          <span style={{ color: 'var(--primary)' }}>학원 선택 기준.</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 18, lineHeight: 1.7, maxWidth: 640, fontWeight: 500 }}>
          수강료만 보고 결정하는 것은 가장 위험한 선택입니다. 교육의 질과 미래 가치를 결정하는 5가지 핵심 지표를 확인하세요.
        </p>
      </section>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 40, marginBottom: 80 }}>
        {[
          { 
            title: '01. 강사의 현장 포트폴리오', 
            desc: '단순 강의 경력이 아닌, 실제 방송·웨딩·화보 현장에서 활발히 활동 중인 강사인지 확인하세요. 현장의 트렌드는 오직 현직자만이 가르칠 수 있습니다.',
            accent: 'var(--primary-light)'
          },
          { 
            title: '02. 실질적인 수강 인원', 
            desc: '15명 이상의 대형 반은 개별 피드백이 불가능합니다. 8명 이하의 소수정예 수업인지, 실기 보강 시스템이 갖춰져 있는지 체크하세요.',
            accent: 'var(--bg-card)'
          },
          { 
            title: '03. 재료비 및 소모품 투명성', 
            desc: '저렴한 수강료 뒤에 고가의 재료 패키지 강매가 숨어있을 수 있습니다. 재료 제공 범위와 브랜드, 본인 지참 가능 여부를 확인하세요.',
            accent: 'var(--bg-card)'
          },
          { 
            title: '04. 취업 네트워킹 시스템', 
            desc: '학원이 보유한 협력 업체(방송사, 샵, 스튜디오) 리스트와 실제 수료생들의 취업처를 데이터로 확인하는 것이 가장 확실합니다.',
            accent: 'var(--accent)',
            color: 'white'
          },
          { 
            title: '05. 국비지원 승인 여부', 
            desc: 'HRD-Net 정식 등록 학원은 국가가 최소한의 품질을 보증한다는 의미입니다. 지원금 혜택을 통해 경제적 부담을 줄일 수 있는지도 중요합니다.',
            accent: 'var(--bg-card)'
          },
        ].map((item, i) => (
          <div key={i} style={{ 
            background: item.accent, 
            color: item.color || 'inherit',
            borderRadius: 32, 
            padding: '40px', 
            border: item.accent === 'var(--bg-card)' ? '1px solid var(--border-color)' : 'none',
            display: 'flex',
            gap: 24,
            alignItems: 'flex-start'
          }}>
            <CheckCircle2 size={24} style={{ color: item.color ? 'var(--primary)' : 'var(--primary)', flexShrink: 0, marginTop: 4 }} />
            <div>
              <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12 }}>{item.title}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.8, opacity: 0.8 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 관련 정보 */}
      <section style={{ marginBottom: 32, background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 24, padding: '28px 32px' }}>
        <p style={{ fontSize: 12, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.1em', marginBottom: 16 }}>함께 보면 좋은 정보</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {[
            { href: '/funding', label: '국비지원으로 수강료 절감' },
            { href: '/employment', label: '자격증 취득 후 해외취업' },
            { href: '/qna', label: '등록 전 자주 묻는 질문' },
            { href: '/board', label: '수강 후기·정보 게시판' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{ background: 'var(--primary-light)', color: 'var(--primary-dark)', fontSize: 13, fontWeight: 700, padding: '8px 18px', borderRadius: 50, textDecoration: 'none' }}>
              {label} →
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--primary-light)', borderRadius: 32, padding: '50px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}>전문가의 조언이 필요하신가요?</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: 16, marginBottom: 32 }}>
          현재 상황(나이, 경력, 목표)에 맞는 최적의 학원 커리큘럼을 무료로 분석해 드립니다.
        </p>
        <Link href="/#consulting" style={{
          display: 'inline-block',
          background: 'var(--accent)',
          color: 'white',
          fontWeight: 800,
          fontSize: 16,
          padding: '16px 40px',
          borderRadius: 16,
          textDecoration: 'none'
        }}>
          1:1 맞춤 가이드 신청하기
        </Link>
      </section>
    </main>
  );
}
