import type { Metadata } from "next"

import { buildEclipseGuideMetadata, renderEclipseGuide } from "@/lib/eclipse-guides"
import { assertLocale } from "@/lib/i18n"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return buildEclipseGuideMetadata(assertLocale(locale), "fotografiar-eclipse-solar-2026-seguridad")
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return renderEclipseGuide(assertLocale(locale), "fotografiar-eclipse-solar-2026-seguridad")
}
