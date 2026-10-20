import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleView from '@/components/ArticleView';
import { articleMetadata } from '@/lib/article-meta';
import { ARTICLES, getArticle } from '@/lib/content';

// /funding 하위 글은 app/funding/[slug] 가 맡는다 (정적 /funding 페이지가 우선하기 때문)
export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.filter((a) => !a.isHub && a.cluster.slug !== 'funding').map((a) => ({ cluster: a.cluster.slug, slug: a.slug }));
}

type Props = { params: Promise<{ cluster: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cluster, slug } = await params;
  const article = getArticle(cluster, slug);
  return article ? articleMetadata(article) : {};
}

export default async function ArticlePage({ params }: Props) {
  const { cluster, slug } = await params;
  const article = getArticle(cluster, slug);
  if (!article) notFound();
  return <ArticleView article={article} />;
}
