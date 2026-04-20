import { buildFeaturePageMetadata, renderFeaturePage } from "@/lib/feature-pages"

export const metadata = buildFeaturePageMetadata("en", "sunrise-sunset-app")

export default function EnglishSunriseSunsetPage() {
  return renderFeaturePage("en", "sunrise-sunset-app")
}
