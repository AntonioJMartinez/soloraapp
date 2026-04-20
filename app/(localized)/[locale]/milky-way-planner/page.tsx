import type { Metadata } from "next"

import { assertLocale } from "@/lib/i18n"
import { buildFeaturePageMetadata, renderFeaturePage } from "@/lib/feature-pages"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params
  return buildFeaturePageMetadata(assertLocale(rawLocale), "milky-way-planner")
}

export default async function LocalizedMilkyWayPlannerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params
  return renderFeaturePage(assertLocale(rawLocale), "milky-way-planner")
}
