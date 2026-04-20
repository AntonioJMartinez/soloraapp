import { buildPressKitMetadata, renderPressKitPage } from "@/lib/feature-pages"

export const metadata = buildPressKitMetadata("en")

export default function EnglishPressKitPage() {
  return renderPressKitPage("en")
}
