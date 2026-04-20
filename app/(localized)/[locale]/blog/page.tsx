import type { Metadata } from "next"

import { BlogIndexPage } from "@/components/pages/blog-index-page"
import { assertLocale } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/metadata"
import { getBlogIndexContent } from "@/lib/marketing-content"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: rawLocale } = await params
  const locale = assertLocale(rawLocale)

  return buildPageMetadata({
    locale,
    path: "/blog",
    title: getBlogIndexContent(locale).title,
    description: getBlogIndexContent(locale).description,
    ogImageAlt: "Solora blog cover image",
  })
}

export default async function LocalizedBlogIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: rawLocale } = await params
  const locale = assertLocale(rawLocale)

  return <BlogIndexPage locale={locale} />
}
