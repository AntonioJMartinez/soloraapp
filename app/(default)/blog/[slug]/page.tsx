import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { BlogArticleTemplate } from "@/components/blog-article-template"
import { blogArticles, getBlogArticle } from "@/lib/blog-posts"
import { buildArticleMetadata } from "@/lib/metadata"

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getBlogArticle("en", slug)

  if (!article) {
    notFound()
  }

  return buildArticleMetadata({
    locale: "en",
    path: `/blog/${slug}`,
    title: `${article.title} | Solora Blog`,
    description: article.description,
    ogImage: `/${article.image}`,
    ogImageAlt: article.imageAlt,
    publishedTime: `${article.publishDate}T00:00:00.000Z`,
  })
}

export default async function EnglishArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getBlogArticle("en", slug)

  if (!article) {
    notFound()
  }

  return (
    <BlogArticleTemplate
      locale="en"
      slug={article.slug}
      title={article.title}
      description={article.description}
      category={article.category}
      readTime={article.readTime}
      image={article.image}
      imageAlt={article.imageAlt}
      publishedDate={`${article.publishDate}T00:00:00.000Z`}
      articleSection={article.category}
      wordCount={article.wordCount}
      sections={article.sections}
      ctaTitle={article.ctaTitle}
      ctaDescription={article.ctaDescription}
      relatedLinks={article.relatedLinks}
    />
  )
}
