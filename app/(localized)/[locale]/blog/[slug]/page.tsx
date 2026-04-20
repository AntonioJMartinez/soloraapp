import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { BlogArticleTemplate } from "@/components/blog-article-template"
import { blogArticles, getBlogArticle } from "@/lib/blog-posts"
import { assertLocale, localizedLocales } from "@/lib/i18n"
import { buildArticleMetadata } from "@/lib/metadata"

export function generateStaticParams() {
  return localizedLocales.flatMap((locale) => blogArticles.map((article) => ({ locale, slug: article.slug })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params
  const locale = assertLocale(rawLocale)
  const article = getBlogArticle(locale, slug)

  if (!article) {
    notFound()
  }

  return buildArticleMetadata({
    locale,
    path: `/blog/${slug}`,
    title: `${article.title} | Solora Blog`,
    description: article.description,
    ogImage: `/${article.image}`,
    ogImageAlt: article.imageAlt,
    publishedTime: `${article.publishDate}T00:00:00.000Z`,
  })
}

export default async function LocalizedArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale: rawLocale, slug } = await params
  const locale = assertLocale(rawLocale)
  const article = getBlogArticle(locale, slug)

  if (!article) {
    notFound()
  }

  return (
    <BlogArticleTemplate
      locale={locale}
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
