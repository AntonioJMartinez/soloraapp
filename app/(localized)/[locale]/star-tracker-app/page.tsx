import type { Metadata } from "next"
import { assertLocale } from "@/lib/i18n"
import { buildTrackerPageMetadata, renderTrackerPage } from "@/lib/tracker-pages"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return buildTrackerPageMetadata(assertLocale(locale), "star-tracker-app")
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return renderTrackerPage(assertLocale(locale), "star-tracker-app")
}
