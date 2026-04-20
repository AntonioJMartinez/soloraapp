import { buildFeaturePageMetadata, renderFeaturePage } from "@/lib/feature-pages"

export const metadata = buildFeaturePageMetadata("en", "milky-way-planner")

export default function EnglishMilkyWayPlannerPage() {
  return renderFeaturePage("en", "milky-way-planner")
}
