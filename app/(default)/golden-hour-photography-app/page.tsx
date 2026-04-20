import { buildFeaturePageMetadata, renderFeaturePage } from "@/lib/feature-pages"

export const metadata = buildFeaturePageMetadata("en", "golden-hour-photography-app")

export default function EnglishGoldenHourPage() {
  return renderFeaturePage("en", "golden-hour-photography-app")
}
