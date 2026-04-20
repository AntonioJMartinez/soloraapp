import { buildFeaturePageMetadata, renderFeaturePage } from "@/lib/feature-pages"

export const metadata = buildFeaturePageMetadata("en", "moon-phase-calendar-app")

export default function EnglishMoonPhasePage() {
  return renderFeaturePage("en", "moon-phase-calendar-app")
}
