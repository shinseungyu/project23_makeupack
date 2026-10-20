import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleView, { ArticleCards, Breadcrumbs } from '@/components/ArticleView';
import JsonLd from '@/components/JsonLd';
import FormSection from '@/components/FormSection';
import { articleMetadata, pageMetadata } from '@/lib/article-meta';
import { breadcrumbLd, collectionLd } from '@/lib/jsonld';
import { CLUSTER_INTRO, ROUTE_CLUSTERS, articlesIn, getArticle } from '@/lib/content';

// 허브 글이 공개된 클러스터는 그 글이 허브가 되고, 아니면 공개된 하위 글 목록 페이지가 된다
export const dynamicParams = false;

export function generateStaticParams() {
  return ROUTE_CLUSTERS.map((c) => ({ cluster: c.slug }));
}

type Props = { params: Promise<{ cluster: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cluster } = await params;
  const hub = getArticle(cluster, '');
  if (hub) return articleMetadata(hub);
  const intro = CLUSTER_INTRO[cluster];
  if (!intro) return {};
  return pageMetadata(intro.title, intro.description, `/${cluster}`);
}

export default async function ClusterPage({ params }: Props) {
  const { cluster: slug } = await params;
  const cluster = ROUTE_CLUSTERS.find((c) => c.slug === slug);
  if (!cluster) notFound();

  const hub = getArticle(slug, '');
  if (hub) return <ArticleView article={hub} />;

  const intro = CLUSTER_INTRO[slug];
  const trail = [
    { name: '홈', path: '/' },
    { name: cluster.name, path: `/${slug}` },
  ];
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 1.5rem 120px' }}>
      <JsonLd
        data={[
          breadcrumbLd(trail),
          collectionLd({ name: intro.h1, description: intro.description, path: `/${slug}`, items: articlesIn(slug).map((a) => ({ name: a.h1.split(' — ')[0], path: a.path })) }),
        ]}
      />
      <Breadcrumbs trail={trail} />
      <header style={{ background: 'var(--accent)', borderRadius: 32, padding: 'clamp(36px, 6vw, 56px) clamp(24px, 5vw, 40px)', marginBottom: 48, color: 'white' }}>
        <p style={{ color: 'var(--primary)', fontWeight: 900, fontSize: 12, letterSpacing: '0.05em', marginBottom: 16 }}>{cluster.name}</p>
        <h1 style={{ fontSize: 'clamp(24px, 4.4vw, 36px)', fontWeight: 950, lineHeight: 1.3, letterSpacing: '-0.03em', marginBottom: 20 }}>{intro.h1}</h1>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 16, lineHeight: 1.8, margin: 0 }}>{intro.lead}</p>
      </header>
      <ArticleCards title={`${cluster.name} 글 모음`} items={articlesIn(slug)} />
      <section>
        <h2 style={{ fontSize: 19, fontWeight: 800, marginBottom: 8, textAlign: 'center' }}>메이크업학원 수강료·국비지원 무료 상담</h2>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 20, textAlign: 'center' }}>
          목표와 일정에 맞는 과정, 수강료, 국비지원 가능 여부를 상담사가 1:1로 안내해 드립니다.
        </p>
        <FormSection />
      </section>
    </main>
  );
}
