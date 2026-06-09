import type { Metadata } from "next"
import { assertLocale } from "@/lib/i18n"
import { buildInfoPageMetadata, renderInfoPage } from "@/lib/info-pages"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return buildInfoPageMetadata(assertLocale(locale), "privacy")
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return renderInfoPage(assertLocale(locale), "privacy")
}
