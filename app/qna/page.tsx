import type { Metadata } from 'next';
import Script from 'next/script';
import QnaClient from './QnaClient';

export const metadata: Metadata = {
  title: '메이크업학원 수강료·국비지원 FAQ | 자주 묻는 질문 총정리 2026',
  description: '메이크업학원 수강료, 국비지원, 환불 규정, 강남 학원 비교, 취업 수입까지 — 등록 전 꼭 알아야 할 질문과 전문가 답변을 한눈에 정리했습니다.',
  alternates: { canonical: '/qna' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '메이크업학원 수강료는 얼마인가요?',
      acceptedAnswer: { '@type': 'Answer', text: '국가자격증반 기준 100~180만원, 아티스트 심화반은 150~250만원 선입니다. 국비지원(내일배움카드) 활용 시 수강료의 45~100%를 지원받아 실부담을 크게 줄일 수 있습니다.' },
    },
    {
      '@type': 'Question',
      name: '메이크업학원 국비지원 받는 방법은?',
      acceptedAnswer: { '@type': 'Answer', text: '국민내일배움카드를 발급받아 HRD-Net에서 메이크업 훈련과정을 신청하면 됩니다. 실업자는 수강료 100% 지원, 재직자는 45~85% 지원됩니다.' },
    },
    {
      '@type': 'Question',
      name: '메이크업학원 수강료 환불이 되나요?',
      acceptedAnswer: { '@type': 'Answer', text: '수강 시작 후 1/3 미만 수강 시 2/3 환불, 1/3~1/2 수강 시 1/2 환불, 1/2 초과 수강 시 환불 불가가 원칙입니다.' },
    },
    {
      '@type': 'Question',
      name: '강남 메이크업학원 수강료가 더 비싼가요?',
      acceptedAnswer: { '@type': 'Answer', text: '강남 메이크업학원 수강료는 지방 대비 20~40% 높은 편이지만, 유명 강사진과 취업 네트워크 면에서 강점이 있습니다.' },
    },
    {
      '@type': 'Question',
      name: '메이크업학원 수강료 총비용 계산 시 재료비도 포함해야 하나요?',
      acceptedAnswer: { '@type': 'Answer', text: '반드시 포함해야 합니다. 재료비 별도형 학원은 실습 재료로 추가 30~80만원이 발생할 수 있으므로 수강료+재료비+응시료 합산 총비용으로 비교해야 합니다.' },
    },
  ],
};

export default function QnaPage() {
  return (
    <>
      <Script
        id="qna-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        strategy="beforeInteractive"
      />
      <QnaClient />
    </>
  );
}
