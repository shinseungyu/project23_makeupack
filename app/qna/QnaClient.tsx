"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function QnaClient() {
  const [openId, setOpenId] = useState<number | null>(1);

  const faqs = [
    {
      id: 1,
      q: '메이크업학원 국가자격증반과 아티스트 심화반, 수강료·커리큘럼 차이는?',
      a: '국가자격증반 수강료는 100~180만원 선이고, 아티스트 심화반은 150~250만원으로 더 높습니다. 취업 목표라면 국가자격증 취득 먼저를 권장합니다. 미용사(메이크업) 국가자격증은 채용 시 우대 요건이 되고, 이후 심화반 수강 시 포트폴리오 완성도가 높아집니다. 이미 현장 경험이 있고 포트폴리오 보완이 목적이라면 아티스트 심화반부터 수강해도 괜찮습니다.'
    },
    {
      id: 2,
      q: '직장인 재직자와 실업자의 메이크업학원 국비지원 차이가 있나요?',
      a: '있습니다. 실업자는 메이크업학원 수강료 100% 지원 과정이 많고 훈련장려금(월 최대 11.6만원)을 추가로 받을 수 있습니다. 재직자는 수강료의 45~85%만 지원되고 훈련장려금은 없습니다. 야간·주말반 수강 시 재직 상태를 유지하면서도 국비지원을 받을 수 있습니다. 지원율은 고용센터에서 본인 유형 조회 후 확인하는 것이 정확합니다.'
    },
    {
      id: 3,
      q: '국비지원 메이크업학원과 사비 학원, 수강료 대비 실력 차이가 있나요?',
      a: '커리큘럼 자체는 비슷하지만 학원 운영 방식에서 차이가 납니다. 국비지원 메이크업학원은 HRD-Net 평점 관리를 위해 수료율을 중시하고 대형 반(15~25명) 운영이 많습니다. 사비 학원은 소수정예(6~10명)로 1:1 피드백이 많아 수강료 대비 실력 향상 속도가 빠릅니다. 비용 절감이 우선이라면 국비 메이크업학원도 충분하지만, 빠른 취업을 원한다면 사비 소수정예 학원이 유리합니다.'
    },
    {
      id: 4,
      q: '메이크업 자격증 없이도 취업이 가능한가요?',
      a: '웨딩·방송·화보 분야는 포트폴리오와 실기 실력을 중심으로 채용합니다. 자격증이 없어도 취업이 가능하지만, 국가자격증(미용사 메이크업)이 있으면 채용 시 우대받는 경우가 많고 신뢰도가 높아집니다. 특히 메이크업샵·뷰티살롱 취업이라면 자격증 보유 여부가 중요하게 작용합니다.'
    },
    {
      id: 5,
      q: '직장인도 메이크업학원에 다닐 수 있나요?',
      a: '대부분의 메이크업학원에서 직장인을 위한 야간반(저녁 7~10시)과 주말반을 운영합니다. 국비지원 과정도 야간반 개설 학원이 있어 수강료 부담을 줄이면서 다닐 수 있습니다. 등록 전 보강 수업 가능 여부, 결석 처리 기준을 확인하세요. 주 2회 야간 수업 기준으로 자격증 과정은 5~6개월 정도 소요됩니다.'
    },
    {
      id: 6,
      q: '메이크업학원 수강료 환불 규정은 어떻게 되나요?',
      a: '메이크업학원 수강료 환불은 「학원의 설립·운영 및 과외교습에 관한 법률 시행령」에 따릅니다. 수강 시작 후 1/3 미만 수강 시 2/3 환불, 1/3~1/2 수강 시 1/2 환불, 1/2 초과 수강 시 환불 불가가 원칙입니다. 국비지원 과정은 환불 시 카드 잔액도 복원되지만 훈련장려금은 이미 지급된 분은 반납해야 합니다.'
    },
    {
      id: 7,
      q: '메이크업학원 수강료 투자 대비 취업 후 수입은 얼마나 되나요?',
      a: '메이크업학원 수강료는 100~200만원 선이지만, 취업 후 수입으로 충분히 회수 가능합니다. 웨딩샵 신입 기준 월 180~230만원이며, 경력 2~3년차 팀장급은 월 280~350만원, 실장급은 350~500만원 수준입니다. 프리랜서 전환 후에는 건당 15~50만원으로 월 수입 상한이 없습니다. 1인샵 창업 성공 시 월 600만원 이상도 현실적이어서 수강료 대비 투자 회수율이 높은 편입니다.'
    },
    {
      id: 8,
      q: '속눈썹 연장 전문반과 메이크업학원 자격증반을 병행할 수 있나요?',
      a: '가능합니다. 속눈썹 연장반은 1~2개월 단기 과정이므로 메이크업학원 자격증반과 시간표 조율이 되면 병행 수강이 가능합니다. 두 과정을 동시에 보유하면 메이크업샵 창업 시 단가를 높일 수 있습니다. 다만 체력적으로 부담이 될 수 있으므로 자격증 시험이 끝난 후 연속 수강하는 방법도 추천합니다.'
    },
    {
      id: 9,
      q: '강남 메이크업학원 수강료가 비싼 만큼 꼭 가야 할까요?',
      a: '강남 메이크업학원 수강료는 지방 대비 20~40% 높은 편이지만, 유명 강사진과 취업 네트워크 면에서 강점이 있습니다. 온라인 후기만 보고 등록했다가 강사 궁합이 맞지 않아 후회하는 사례도 많으므로, 대부분의 강남 학원이 제공하는 1~2회 무료 체험 수업을 반드시 이용하세요. 수강료 대비 가치는 강사 수준과 소수정예 여부로 결정됩니다.'
    },
    {
      id: 10,
      q: '메이크업 포트폴리오는 어떻게 구성해야 취업에 유리한가요?',
      a: '웨딩·내추럴·방송 메이크업 각 3~5컷씩, 총 15~20컷 구성이 기본입니다. 인스타그램에 비포·애프터 형식으로 올리면 온라인 포트폴리오로 활용 가능합니다. 화보 촬영 협업(사진 작가, 헤어 아티스트)을 통해 퀄리티를 높이면 채용 담당자의 주목을 받기 쉽습니다. 메이크업학원 등록 전 포트폴리오 제작 지원 여부를 반드시 확인하세요.'
    },
    {
      id: 11,
      q: '메이크업학원 수강료 총비용 계산법 — 재료비·응시료 포함하면 얼마?',
      a: '메이크업학원 수강료만 보면 안 됩니다. 재료비 포함형 학원은 수강료가 높아 보이지만 실제 총비용이 낮은 경우가 많고, 재료비 별도형은 수강료는 저렴해도 실습용 재료(파운데이션, 브러시, 모델 비용 등)로 추가 30~80만원이 발생합니다. 메이크업학원 비교 시 반드시 "재료비 포함 여부", "자격증 시험 응시료 포함 여부", "보강 수업 비용"까지 합산한 총비용 기준으로 비교하세요.'
    },
  ];

  return (
    <main style={{ maxWidth: 780, margin: '0 auto', padding: '40px 1rem 80px' }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 14, fontWeight: 500, marginBottom: 28 }}>
        <ChevronLeft size={16} /> 홈으로 돌아가기
      </Link>

      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, background: 'var(--primary-light)', borderRadius: 16, marginBottom: 16 }}>
          <HelpCircle size={28} color="var(--primary)" />
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 900, marginBottom: 10 }}>메이크업학원 수강료·국비지원 자주 묻는 질문 (FAQ)</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7 }}>
          메이크업학원 수강료, 국비지원, 취업, 환불 등 등록 전 가장 많이 묻는 질문을 정리했습니다.<br />
          과정 선택부터 강남 학원 비교, 포트폴리오까지 전문가 답변으로 확인하세요.
        </p>
      </div>

      <Link href="/guide" style={{ textDecoration: 'none', display: 'block', marginBottom: 12 }}>
        <div style={{ background: 'linear-gradient(135deg, #92400e 0%, #b45309 100%)', borderRadius: 20, padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <div>
            <p style={{ color: '#fcd34d', fontWeight: 800, fontSize: 11, marginBottom: 4 }}>학원 선택 가이드</p>
            <p style={{ color: 'white', fontWeight: 800, fontSize: 16, lineHeight: 1.3 }}>
              후회 없는 메이크업학원 선택 — 5가지 체크리스트<br />
              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, fontWeight: 600 }}>강사·소수정예·재료비·취업·국비 한눈에 확인 →</span>
            </p>
          </div>
        </div>
      </Link>

      <Link href="/funding" style={{ textDecoration: 'none', display: 'block', marginBottom: 32 }}>
        <div style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #4c1d95 100%)', borderRadius: 20, padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <div>
            <p style={{ color: '#a78bfa', fontWeight: 800, fontSize: 11, marginBottom: 4 }}>국비지원 안내</p>
            <p style={{ color: 'white', fontWeight: 800, fontSize: 16, lineHeight: 1.3 }}>
              메이크업학원 수강료 최대 100% 국비지원 받기<br />
              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, fontWeight: 600 }}>지원 금액·훈련장려금 계산법 한눈에 보기 →</span>
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8, flexShrink: 0, flexWrap: 'wrap' }}>
            {['지원율 계산', '훈련장려금', '무료 상담'].map((t, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: '8px 12px', fontSize: 11, color: 'white', fontWeight: 700, whiteSpace: 'nowrap' }}>{t}</div>
            ))}
          </div>
        </div>
      </Link>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {faqs.map(faq => (
          <div key={faq.id} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 16, overflow: 'hidden' }}>
            <div
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              style={{ padding: '20px 24px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: openId === faq.id ? 'var(--primary-light)' : 'transparent' }}
            >
              <h2 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: openId === faq.id ? 'var(--primary)' : 'var(--text-primary)' }}>
                Q. {faq.q}
              </h2>
              <span style={{ color: openId === faq.id ? 'var(--primary)' : 'var(--text-muted)', flexShrink: 0, marginLeft: 12 }}>
                {openId === faq.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </span>
            </div>
            {openId === faq.id && (
              <div style={{ padding: '20px 24px', borderTop: '1px solid var(--border-color)', fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                <strong style={{ color: 'var(--primary)', marginRight: 8, fontSize: 16 }}>A.</strong>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 관련 정보 */}
      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 24, padding: '24px 28px', marginTop: 32 }}>
        <p style={{ fontSize: 12, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.1em', marginBottom: 14 }}>더 알아보기</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {[
            { href: '/employment', label: '해외취업 가이드' },
            { href: '/guide', label: '학원 선택 체크리스트' },
            { href: '/board', label: '수강 후기·정보 게시판' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{ background: 'var(--primary-light)', color: 'var(--primary-dark)', fontSize: 13, fontWeight: 700, padding: '8px 18px', borderRadius: 50, textDecoration: 'none' }}>
              {label} →
            </Link>
          ))}
        </div>
      </div>

      <div style={{ background: 'linear-gradient(to bottom right, #ede9fe, #fef3c7)', borderRadius: 20, padding: '32px', textAlign: 'center', marginTop: 24 }}>
        <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 8 }}>메이크업학원 수강료·국비지원 더 궁금하신가요?</h3>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 20 }}>
          전문 상담사가 1:1로 맞춤 수강료 정보와 국비지원 혜택을 안내해 드립니다.
        </p>
        <Link href="/#consulting" style={{ display: 'inline-block', background: 'var(--primary)', color: 'white', fontWeight: 700, fontSize: 14, padding: '12px 28px', borderRadius: 50, textDecoration: 'none' }}>
          무료 상담 신청
        </Link>
      </div>
    </main>
  );
}
