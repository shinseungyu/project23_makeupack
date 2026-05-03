import Link from 'next/link';
import Image from 'next/image';
import postsData from '@/data/posts.json';
import FormSection from '@/components/FormSection';

export default function HomePage() {
  const recentPosts = postsData.slice(0, 3);

  return (
    <main style={{ background: 'var(--bg-main)', minHeight: '100vh', paddingBottom: '100px' }}>

      {/* ── 히어로 (bg.webp 배경) ── */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: 580, display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Image src="/bg.webp" alt="메이크업학원 수강료 비교 — 국비지원·강남·자격증 정보" fill style={{ objectFit: 'cover' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,6,3,0.62)' }} />
        <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 780, margin: '0 auto', padding: '100px 1.5rem 80px' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(197,160,89,0.18)',
            color: 'var(--primary)',
            fontSize: 11,
            fontWeight: 900,
            padding: '6px 20px',
            borderRadius: 50,
            letterSpacing: '0.2em',
            marginBottom: 24,
            textTransform: 'uppercase' as const,
            border: '1px solid rgba(197,160,89,0.3)',
          }}>
            2026년 최신 기준
          </span>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(26px, 5vw, 50px)',
            fontWeight: 950,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: 14,
          }}>
            메이크업학원수강료 비교
          </h1>
          <p style={{
            color: 'var(--primary)',
            fontSize: 'clamp(13px, 2vw, 18px)',
            fontWeight: 700,
            marginBottom: 18,
            letterSpacing: '-0.01em',
          }}>
            메이크업학원비용·국비지원·가격 총정리 2026
          </p>
          <p style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: 15,
            lineHeight: 1.7,
            maxWidth: 560,
            margin: '0 auto 36px',
            fontWeight: 500,
          }}>
            메이크업학원 수강료 비교부터 국비지원·강남 학원 추천·자격증 취득까지<br />
            2026년 최신 기준으로 메이크업 교육의 모든 정보를 한눈에 확인하세요.
          </p>
          <FormSection />
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* ── 메이크업학원이란? ── */}
        <section style={{ marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 10 }}>기초 정보</p>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 8, letterSpacing: '-0.02em' }}>메이크업학원이란?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>메이크업 교육 기관의 개설 과정과 커리큘럼, 수강료 구조를 한눈에 파악하세요.</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.9, marginBottom: 20 }}>
            <strong>메이크업학원</strong>은 피부 표현, 색채 이론, 뷰티 메이크업, 웨딩 메이크업, 방송·무대 분장, 속눈썹 연장 등
            메이크업 전반의 이론과 실기를 전문적으로 교육하는 기관입니다.
            단순한 화장 기술을 넘어 피부 분석, 고객 상담, 포트폴리오 제작까지 실무에 필요한 모든 역량을 체계적으로 익힐 수 있습니다.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.9, marginBottom: 20 }}>
            교육 과정은 크게 <strong>국가자격증 취득반</strong>, <strong>민간자격증반</strong>, <strong>아티스트 심화반</strong>, <strong>속눈썹 연장 전문반</strong>으로 나뉩니다.
            처음 메이크업을 접하는 초보자부터 이미 현장 경험이 있는 분들을 위한 심화 과정까지 수준별 커리큘럼이 운영됩니다.
            수료 후에는 메이크업샵, 웨딩홀, 방송국, 연예기획사, 특수분장, 화장품 회사, 프리랜서 등 다양한 분야로 진출할 수 있습니다.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.9, marginBottom: 20 }}>
            수업은 강사가 1:1로 기술을 전수하는 방식이 기본이며, 실습 위주의 소수정예 수업을 통해 빠른 기술 습득이 가능합니다.
            자격증 시험을 위한 필기·실기 집중 연습부터 실제 촬영·웨딩 현장 투입을 위한 실전 트레이닝까지 목표에 맞게 커리큘럼을 구성할 수 있습니다.
          </p>

          {/* 국비지원 안내 */}
          <div style={{ background: 'var(--primary-light)', borderRadius: 16, padding: '20px 24px', borderLeft: '4px solid var(--primary)' }}>
            <p style={{ fontWeight: 800, fontSize: 15, marginBottom: 8, color: 'var(--primary-dark)' }}>내일배움카드(국비카드) 소지자 할인 안내</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8 }}>
              저희 학원은 국비카드로 수업을 직접 결제하는 HRD-Net 등록 훈련기관은 아닙니다.
              다만 <strong>내일배움카드 소지자에게는 별도 할인 혜택을 즉시 제공</strong>해 드리고 있습니다.
              카드를 사용하지 않아도 소지만 하셔도 혜택을 받으실 수 있으니, 상담 시 꼭 말씀해 주세요.
            </p>
          </div>
        </section>

        {/* ── 수강료 비교 벤토 그리드 (Bento Grid) ── */}
        <section style={{ marginBottom: 100 }}>
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 10 }}>수강료 현황</p>
            <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 8 }}>과정별 수강료 데이터</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7 }}>
              실제 수강생 데이터와 학원별 공시 비용을 바탕으로 분석한 과정별 평균 비용입니다. <span style={{ background: 'var(--primary-light)', padding: '2px 12px', borderRadius: 50, fontSize: 13, fontWeight: 700, color: 'var(--primary-dark)' }}>2026. 05 업데이트</span>
            </p>
          </div>

          <div className="bento-grid">
            <div className="bento-item" style={{ gridColumn: 'span 2', background: 'var(--primary-light)', borderColor: 'transparent' }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{ color: 'var(--primary-dark)', fontWeight: 900, fontSize: 12 }}>추천 과정</span>
                <h3 style={{ fontSize: 24, fontWeight: 900, marginTop: 12, marginBottom: 8 }}>국가자격증 기초반</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 15, marginBottom: 24 }}>미용사(메이크업) 자격증 취득의 정석.<br />탄탄한 기초와 합격 보장 커리큘럼.</p>
                <div style={{ fontSize: 32, fontWeight: 950, color: 'var(--primary-dark)' }}>90~130<span style={{ fontSize: 18, fontWeight: 700 }}>만원</span></div>
              </div>
              <div style={{ position: 'absolute', right: -20, bottom: -20, width: 140, height: 140, background: 'var(--primary)', opacity: 0.1, borderRadius: '50%' }}></div>
            </div>

            <div className="bento-item" style={{ gridColumn: 'span 2', background: 'var(--accent)', color: 'white' }}>
              <span style={{ color: 'var(--primary)', fontWeight: 900, fontSize: 12 }}>국비지원 활용</span>
              <h3 style={{ fontSize: 24, fontWeight: 900, marginTop: 12, marginBottom: 8 }}>국비지원 활용 과정</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, marginBottom: 24 }}>내일배움카드 활용 시 자부담 최소화.<br />최대 100% 지원 혜택을 누리세요.</p>
              <div style={{ fontSize: 32, fontWeight: 950, color: 'var(--primary)' }}>0~45<span style={{ fontSize: 18, fontWeight: 700, color: 'white' }}>만원</span></div>
            </div>

            <div className="bento-item">
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>웨딩·뷰티 심화</h3>
              <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--primary)', marginBottom: 12 }}>150~220만</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: 13 }}>화보·웨딩 현장 실무 테크닉 전수 및 포트폴리오 완성 과정.</p>
            </div>

            <div className="bento-item">
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>방송·무대 분장</h3>
              <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--primary)', marginBottom: 12 }}>180~280만</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: 13 }}>특수 분장 및 캐릭터 메이크업 전문 강사진의 밀착 지도.</p>
            </div>

            <div className="bento-item" style={{ gridColumn: 'span 2', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>기타 단기 특강</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 13 }}>퍼스널 컬러, 데일리 셀프 메이크업 등</p>
              </div>
              <div style={{ fontSize: 20, fontWeight: 900, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>20~50<span style={{ fontSize: 14 }}>만원</span></div>
            </div>
          </div>
        </section>

        {/* ── 학원 선택 체크리스트 (Editorial Style) ── */}
        <section style={{ marginBottom: 100 }}>
          <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 10, textAlign: 'center' }}>학원 선택 가이드</p>
          <h2 style={{ fontSize: 28, fontWeight: 900, textAlign: 'center', marginBottom: 12 }}>실패 없는 학원 선택을 위한 가이드</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8, textAlign: 'center', maxWidth: 600, margin: '0 auto 40px' }}>
            메이크업학원 등록 전 반드시 확인해야 할 4가지 핵심 체크포인트입니다. 수강료만큼 중요한 교육 품질과 취업 지원 시스템을 꼼꼼히 따져보세요.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
            {[
              { title: '현장 실무 중심 강사진', desc: '자격증 합격을 넘어 현장에서 바로 통하는 노하우를 가진 방송·웨딩 현직 강사인지 확인하세요.' },
              { title: '1:1 밀착 피드백 시스템', desc: '학원당 수강생 수를 확인하세요. 소수정예(8인 이하) 수업이 실력 향상에 가장 효율적입니다.' },
              { title: '추가 비용 투명성', desc: '수강료 외 재료비, 모델비, 시험 응시료 등 숨은 비용이 없는지 꼼꼼히 따져봐야 합니다.' },
              { title: '취업 및 창업 지원', desc: '단순 교육 종료가 아닌, 포트폴리오 제작부터 업체 매칭까지 책임지는 시스템을 갖췄는지 확인하세요.' },
            ].map((item, i) => (
              <div key={i} style={{ borderLeft: '4px solid var(--primary)', paddingLeft: 24 }}>
                <div style={{ color: 'var(--primary)', fontSize: 14, fontWeight: 900, marginBottom: 8 }}>체크포인트 0{i + 1}</div>
                <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link href="/guide" style={{ color: 'var(--primary)', fontWeight: 800, fontSize: 15, textDecoration: 'none', borderBottom: '2px solid var(--primary)', paddingBottom: 2 }}>
              5가지 체크리스트 전체 보기 →
            </Link>
          </div>
        </section>

        {/* ── 커리큘럼 ── */}
        <section style={{ marginBottom: 100 }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 10 }}>커리큘럼</p>
            <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 12 }}>개설 과정 안내</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 16, maxWidth: 560, margin: '0 auto' }}>
              목표에 맞는 과정을 선택하세요. 자격증 취득부터 전문 아티스트 데뷔까지 단계별로 준비할 수 있습니다.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              {
                badge: '국가자격증',
                title: '메이크업 국가자격증 과정',
                desc: '한국산업인력관리공단에서 시행하는 미용사(메이크업) 국가기술자격증 취득을 준비하는 과정입니다. 자격 검정 기준에 준하는 필기와 실기 과제를 집중 교육합니다.',
                contents: ['필기검정이론', '웨딩·한복·내추럴 메이크업', '시대별 메이크업', '캐릭터 분장', '속눈썹 익스텐션 & 수염'],
                cert: '미용사(메이크업) 국가자격증',
                jobs: ['메이크업샵', '방송국 분장사', '웨딩홀', '교육강사', '연예인 기획사(엔터)', '영화·특수분장사', '뷰티컨설턴트', '프리랜서', '화장품 브랜드샵', '연극·뮤지컬·오페라 분장사'],
                color: 'var(--primary-light)',
                accentColor: 'var(--primary-dark)',
              },
              {
                badge: '민간자격증',
                title: '메이크업 민간자격증 1급·2급·3급',
                desc: '메이크업에 대한 전체적인 이론적 지식과 테마에 따른 뷰티 메이크업 실무 능력을 교육하고, 단계별 자격증 취득을 위한 전반적인 교육을 실시합니다.',
                contents: ['메이크업 자격증 이론', '레벨별(3급→2급→1급) 실기 실습', '뷰티 메이크업 테마 표현'],
                cert: '메이크업 3급 / 2급 / 1급',
                jobs: ['방송국 에이전시 및 광고회사', '화장품 회사', '미용실·뷰티샵', '교육강사', '웨딩샵', '영화·연예인 기획사', '연극·뮤지컬·오페라', '뷰티컨설턴트', '특수분장사', '프리랜서'],
                color: '#fff8f0',
                accentColor: '#c2710c',
              },
              {
                badge: '전문가 과정',
                title: '메이크업 아티스트 과정',
                desc: '메이크업 아티스트로서 기본적으로 익혀야 할 기초 베이스 표현부터 시즌별 트렌드, 웨딩 본식·촬영, 아나운서·스튜어디스 메이크업 등 다양한 테크닉과 활동 영역 전반을 교육합니다.',
                contents: ['기초 뷰티 메이크업', '웨딩 본식 & 촬영 메이크업', '패션·방송·연예 메이크업', '광고 메이크업', '포트폴리오 제작'],
                cert: '프로 메이크업 Diploma 수료증',
                jobs: ['방송국·광고회사', '화장품 회사', '뷰티샵', '교육강사', '웨딩샵', '영화·연예기획사', '연극·뮤지컬', '뷰티컨설턴트', '특수분장사', '프리랜서', '뷰티 유튜버'],
                color: 'var(--accent)',
                accentColor: 'var(--primary)',
                isDark: true,
              },
              {
                badge: '뷰티 특화',
                title: '속눈썹 연장 전문 과정',
                desc: '특수모를 이용하여 한 가닥씩 연결하는 속눈썹 연장 기법을 집중 교육합니다. 풍성하고 긴 속눈썹 연출로 자신의 속눈썹처럼 자연스럽게 표현하는 전문 기술을 습득합니다.',
                contents: ['속눈썹 연장 이론 교육', 'JC컬·C컬 연장술', '속눈썹 펌 이론 및 실습', '속눈썹 교정 펌'],
                cert: '속눈썹 연장 2급 / 1급',
                jobs: ['속눈썹 연장 샵', '네일샵', '토탈 뷰티 살롱', '메이크업샵', '화장품 회사', '교육강사'],
                color: '#f0f9ff',
                accentColor: '#0369a1',
              },
            ].map((course, i) => (
              <div key={i} style={{
                background: course.color,
                borderRadius: 28,
                padding: '40px',
                color: course.isDark ? 'white' : 'inherit',
              }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: 20 }}>
                  <span style={{
                    background: course.isDark ? 'rgba(255,255,255,0.15)' : 'white',
                    color: course.isDark ? 'var(--primary)' : course.accentColor,
                    fontSize: 11, fontWeight: 900, padding: '4px 14px', borderRadius: 50,
                    textTransform: 'uppercase' as const, letterSpacing: '0.08em'
                  }}>{course.badge}</span>
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12, letterSpacing: '-0.02em' }}>{course.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 28, color: course.isDark ? 'rgba(255,255,255,0.7)' : 'var(--text-secondary)', maxWidth: 700 }}>{course.desc}</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 900, color: course.isDark ? 'var(--primary)' : course.accentColor, marginBottom: 12 }}>주요 내용</p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
                      {course.contents.map((c, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: course.isDark ? 'rgba(255,255,255,0.85)' : 'var(--text-secondary)' }}>
                          <span style={{ color: course.isDark ? 'var(--primary)' : course.accentColor, fontWeight: 700, fontSize: 16 }}>·</span>{c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 900, color: course.isDark ? 'var(--primary)' : course.accentColor, marginBottom: 12 }}>취득 자격증 / 수료</p>
                    <p style={{ fontSize: 14, fontWeight: 700, marginBottom: 20, color: course.isDark ? 'white' : 'var(--text-primary)' }}>{course.cert}</p>
                    <p style={{ fontSize: 12, fontWeight: 900, color: course.isDark ? 'var(--primary)' : course.accentColor, marginBottom: 10 }}>진출 분야</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 6 }}>
                      {course.jobs.map((job, j) => (
                        <span key={j} style={{
                          background: course.isDark ? 'rgba(255,255,255,0.1)' : 'white',
                          border: `1px solid ${course.isDark ? 'rgba(255,255,255,0.2)' : 'var(--border-color)'}`,
                          fontSize: 12, fontWeight: 600, padding: '3px 10px', borderRadius: 50,
                          color: course.isDark ? 'rgba(255,255,255,0.85)' : 'var(--text-secondary)'
                        }}>{job}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ── 상담 폼 (Premium Form) ── */}
        <section id="consulting" style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: 32,
          padding: '60px 40px',
          marginBottom: 100
        }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 10 }}>무료 상담</p>
            <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 12 }}>1:1 맞춤 상담 신청</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 16 }}>
              목표와 예산을 알려주시면 가장 적합한 메이크업학원과 국비지원 방법을 전문가가 직접 안내해 드립니다.
            </p>
          </div>
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <FormSection />
            <p style={{ marginTop: 16, fontSize: 13, color: 'var(--text-muted)', textAlign: 'center' }}>
              * 상담 신청 시 2026 메이크업 취업 가이드북을 무료로 증정합니다.
            </p>
          </div>
        </section>

        {/* ── 메이크업학원 가격 비교표 ── */}
        <section style={{ marginBottom: 100 }}>
          <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 10 }}>수강료 비교</p>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 8, letterSpacing: '-0.02em' }}>메이크업학원 가격·수강료 지역별 비교표 (2026)</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
            메이크업학원 가격은 지역·과정·강사 수준에 따라 큰 차이가 납니다. 아래 비교표를 참고하여 예산에 맞는 학원을 선택하세요.
            국비지원 적용 시 <strong>메이크업학원비</strong>를 최대 100%까지 절감할 수 있습니다.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, background: 'var(--bg-card)', borderRadius: 20, overflow: 'hidden', border: '1px solid var(--border-color)' }}>
              <thead>
                <tr style={{ background: 'var(--primary-light)' }}>
                  <th style={{ padding: '14px 18px', textAlign: 'left', fontWeight: 800, color: 'var(--primary-dark)' }}>과정</th>
                  <th style={{ padding: '14px 18px', textAlign: 'center', fontWeight: 800, color: 'var(--primary-dark)' }}>강남·수도권</th>
                  <th style={{ padding: '14px 18px', textAlign: 'center', fontWeight: 800, color: 'var(--primary-dark)' }}>지방</th>
                  <th style={{ padding: '14px 18px', textAlign: 'center', fontWeight: 800, color: '#16a34a' }}>국비지원 시</th>
                  <th style={{ padding: '14px 18px', textAlign: 'center', fontWeight: 800, color: 'var(--primary-dark)' }}>기간</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { course: '국가자격증 기초반', seoul: '120~180만원', local: '90~130만원', funded: '0~45만원', period: '3~4개월' },
                  { course: '웨딩·브라이덜반', seoul: '180~280만원', local: '140~200만원', funded: '30~80만원', period: '4~6개월' },
                  { course: '방송·무대 분장반', seoul: '220~350만원', local: '180~260만원', funded: '미적용 多', period: '5~8개월' },
                  { course: '민간자격증 1~3급', seoul: '80~150만원', local: '60~110만원', funded: '0~40만원', period: '2~4개월' },
                  { course: '속눈썹 연장 전문반', seoul: '60~100만원', local: '40~80만원', funded: '0~30만원', period: '1~2개월' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: '1px solid var(--border-color)', background: i % 2 === 0 ? 'white' : 'var(--bg-main)' }}>
                    <td style={{ padding: '14px 18px', fontWeight: 700 }}>{row.course}</td>
                    <td style={{ padding: '14px 18px', textAlign: 'center', color: 'var(--text-secondary)' }}>{row.seoul}</td>
                    <td style={{ padding: '14px 18px', textAlign: 'center', color: 'var(--text-secondary)' }}>{row.local}</td>
                    <td style={{ padding: '14px 18px', textAlign: 'center', color: '#16a34a', fontWeight: 700 }}>{row.funded}</td>
                    <td style={{ padding: '14px 18px', textAlign: 'center', color: 'var(--text-muted)' }}>{row.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 10 }}>※ 위 메이크업학원 수강료는 참고용이며, 실제 학원비는 학원 정책에 따라 다를 수 있습니다. 국비지원은 내일배움카드 적용 기준입니다.</p>
        </section>

        {/* ── 강남 메이크업학원 섹션 ── */}
        <section style={{ marginBottom: 100 }}>
          <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 10 }}>지역별 학원 정보</p>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 8, letterSpacing: '-0.02em' }}>강남 메이크업학원 — 수도권 학원을 선택해야 하는 이유와 기준</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
            강남 메이크업학원은 메이크업 취업을 목표로 하는 분들에게 특히 유리한 환경을 제공합니다.
            강남·홍대·청담 등 수도권 학원의 특징과 선택 기준을 정리했습니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {[
              {
                title: '업계 네트워크',
                icon: '🔗',
                desc: '강남·청담 지역 학원은 웨딩홀, 방송사, 화보 스튜디오와의 직접 협력 채널이 많아 수료 후 취업 연계 속도가 빠릅니다.',
                highlight: '취업 연계율 높음',
              },
              {
                title: '현직 강사 비율',
                icon: '🎨',
                desc: '강남권 학원은 현직 웨딩·방송 메이크업아티스트가 강사로 활동하는 비율이 높아 최신 트렌드를 실습에서 바로 배울 수 있습니다.',
                highlight: '트렌드 빠름',
              },
              {
                title: '수강료 차이',
                icon: '💰',
                desc: '강남 메이크업학원 가격은 동일 과정 기준 지방보다 20~40% 높습니다. 하지만 재료비 포함·보강 무료·취업 지원 등 실질 혜택을 고려하면 가성비가 나쁘지 않습니다.',
                highlight: '지방 대비 20~40% 高',
              },
              {
                title: '강남 학원 선택 기준',
                icon: '✅',
                desc: '① 수료생 취업 실적 데이터 확인 ② 강사 현장 포트폴리오 ③ 소수정예 여부 ④ 무료 체험 수업 진행 여부 ⑤ 국비지원 과정 병행 여부',
                highlight: '5가지 체크포인트',
              },
            ].map((item, i) => (
              <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 20, padding: '24px' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <p style={{ fontWeight: 800, fontSize: 15, marginBottom: 6 }}>{item.title}</p>
                <span style={{ display: 'inline-block', background: 'var(--primary-light)', color: 'var(--primary-dark)', fontSize: 11, fontWeight: 700, padding: '2px 10px', borderRadius: 50, marginBottom: 10 }}>{item.highlight}</span>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SEO 본문 ── */}
        <section style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 28, padding: '48px 40px', marginBottom: 100 }}>
          <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 10 }}>심층 가이드</p>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 20, letterSpacing: '-0.02em' }}>
            메이크업학원 수강료 완벽 가이드 — 비용·국비지원·추천까지 2026 총정리
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.9, marginBottom: 32 }}>
            메이크업아티스트를 목표로 하는 분들이 가장 먼저 마주하는 고민은 <strong>메이크업학원 수강료</strong>입니다.
            같은 "자격증반"이라도 강사 경력, 수업 인원, 재료 제공 여부에 따라 품질 차이가 크기 때문에
            단순 학원비 비교만으로는 올바른 선택을 하기 어렵습니다. 이 가이드에서는 2026년 기준 메이크업학원 수강료 평균부터
            국비지원 활용법, 강남 메이크업학원 선택 기준까지 핵심 정보만 정리합니다.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>메이크업학원비 평균 — 과정별 수강료 비교</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.9, marginBottom: 28 }}>
            2026년 기준 <strong>메이크업학원 수강료</strong>는 과정과 지역에 따라 크게 다릅니다.
            국가자격증 기초반은 수도권 기준 120~180만원, 지방은 90~130만원 선이 평균입니다.
            웨딩·브라이덜 심화반은 180~280만원, 방송·무대 특수 메이크업은 220~350만원에 달합니다.
            <strong>국비지원(내일배움카드)</strong>을 활용하면 동일 과정을 0~45만원에 수강할 수 있어,
            학원 등록 전 반드시 HRD-Net에서 국비 적용 가능 여부를 확인하는 것이 중요합니다.{' '}
            <Link href="/board" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>과정별 수강료 상세 정보 →</Link>
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>국비지원 메이크업학원 — 내일배움카드 활용법</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.9, marginBottom: 28 }}>
            <strong>국비지원 메이크업학원</strong>은 고용노동부 HRD-Net에 등록된 훈련기관으로, 국민내일배움카드를 통해
            수강료의 45~100%를 지원받을 수 있습니다. 재직자, 실업자, 특수고용직·프리랜서 모두 신청 가능하며,
            1인당 최대 500만원 한도 내에서 복수 과정도 수강할 수 있습니다. 국비지원 학원은 대형 반(15~30명) 운영이 많으므로,
            소수정예 실습 환경을 원한다면 사비 학원과 비교해 선택하는 것이 좋습니다.{' '}
            <Link href="/funding" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>국비지원 신청 방법 전체 가이드 →</Link>
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>강남 메이크업학원 추천 기준</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.9, marginBottom: 28 }}>
            <strong>강남 메이크업학원</strong>은 웨딩홀·방송사·화보 스튜디오 등 업계 네트워크가 탄탄하고,
            현직 아티스트 강사진 비율이 높다는 장점이 있습니다. 다만 동일 과정 대비 수강료가 지방보다 20~40% 높으므로,
            취업과 포트폴리오 제작이 목표라면 강남권 학원이 유리하고, 단순 자격증 취득이 목적이라면
            국비지원 지방 학원도 충분합니다. 학원 선택 시 ① 현직 강사 경력 ② 소수정예 여부 ③ 취업 연계 실적을 반드시 확인하세요.{' '}
            <Link href="/qna" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>학원 선택 FAQ 더보기 →</Link>
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>메이크업 국가자격증 취득 후 진로</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.9 }}>
            미용사(메이크업) 국가자격증을 취득하면 메이크업샵, 방송국 분장사, 웨딩홀, 연예인 기획사,
            화장품 브랜드샵, 특수분장사, 교육강사 등 다양한 분야로 진출할 수 있습니다.
            신입 메이크업아티스트의 평균 월 급여는 웨딩 분야 기준 180~230만원이며,
            경력 3년 이상 실장급은 350~500만원, 프리랜서 전문가는 월 수입 제한 없이 활동할 수 있습니다.
            1인 뷰티샵 창업 시에는 초기 투자 2,500~4,000만원으로 월 600만원 이상의 수익을 기대할 수 있습니다.{' '}
            <Link href="/employment" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>해외취업 가이드 보기 →</Link>
          </p>
        </section>

        {/* ── FAQ & 게시판 ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 40 }}>
          <section>
            <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 8 }}>최신 정보</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900 }}>최신 정보 게시판</h2>
              <Link href="/board" style={{ fontSize: 14, color: 'var(--primary)', fontWeight: 700 }}>전체보기</Link>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
              메이크업학원 수강료·국비지원·자격증·취업 관련 최신 정보를 확인하세요.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {recentPosts.map((post) => (
                <Link key={post.id} href={`/board?id=${post.id}`} style={{ 
                  padding: '20px', 
                  background: 'white', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: 20,
                  display: 'block'
                }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', marginBottom: 8, display: 'block' }}>{post.category}</span>
                  <p style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-primary)' }}>{post.title}</p>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 8 }}>FAQ</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900 }}>자주 묻는 질문</h2>
              <Link href="/qna" style={{ fontSize: 14, color: 'var(--primary)', fontWeight: 700 }}>더보기</Link>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
              메이크업학원 수강료, 국비지원, 환불 등 등록 전 가장 많이 묻는 질문과 답변을 정리했습니다.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { q: '비전공자도 취업이 가능한가요?', a: '네, 메이크업 분야는 실무 능력과 포트폴리오가 핵심입니다. 체계적인 커리큘럼을 통해 6개월 내외로 전문가 데뷔가 가능합니다.' },
                { q: '재료비는 별도인가요?', a: '학원마다 정책이 다릅니다. 재료 세트가 포함된 경우와 별도 구매해야 하는 경우가 있으니 반드시 상담 시 확인이 필요합니다.' },
              ].map((faq, i) => (
                <div key={i} style={{ padding: '20px', background: 'var(--accent-light)', borderRadius: 20 }}>
                  <p style={{ fontWeight: 800, fontSize: 15, marginBottom: 8 }}>Q. {faq.q}</p>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

      </div>
    </main>
  );
}
