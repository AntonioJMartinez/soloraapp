import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { HomePage } from "@/components/pages/home-page"
import { assertLocale, defaultLocale } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/metadata"
import { getHomeContent } from "@/lib/marketing-content"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: rawLocale } = await params
  const locale = assertLocale(rawLocale)

  return buildPageMetadata({
    locale,
    path: "/",
    title: getHomeContent(locale).title,
    description: getHomeContent(locale).description,
    ogImageAlt: "Solora astronomical planning app preview",
  })
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: rawLocale } = await params
  const locale = assertLocale(rawLocale)

  if (locale === defaultLocale) {
    notFound()
  }

  return <HomePage locale={locale} />
}
