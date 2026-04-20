import type { Metadata } from "next"

import { assertLocale } from "@/lib/i18n"
import { buildPressKitMetadata, renderPressKitPage } from "@/lib/feature-pages"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: rawLocale } = await params
  const locale = assertLocale(rawLocale)

  return buildPressKitMetadata(locale)
}

export default async function LocalizedPressKitPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: rawLocale } = await params
  const locale = assertLocale(rawLocale)

  return renderPressKitPage(locale)
}
