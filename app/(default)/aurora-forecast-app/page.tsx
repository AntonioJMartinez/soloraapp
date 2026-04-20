import { buildFeaturePageMetadata, renderFeaturePage } from "@/lib/feature-pages"

export const metadata = buildFeaturePageMetadata("en", "aurora-forecast-app")

export default function EnglishAuroraForecastPage() {
  return renderFeaturePage("en", "aurora-forecast-app")
}
