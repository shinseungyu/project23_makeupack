import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleView from '@/components/ArticleView';
import { articleMetadata } from '@/lib/article-meta';
import { articlesIn, getArticle } from '@/lib/content';

export const dynamicParams = false;

export function generateStaticParams() {
  return articlesIn('funding').map((a) => ({ slug: a.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle('funding', slug);
  return article ? articleMetadata(article) : {};
}

export default async function FundingArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle('funding', slug);
  if (!article) notFound();
  return <ArticleView article={article} />;
}
