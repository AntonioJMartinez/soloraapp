import { buildEclipseGuideMetadata, renderEclipseGuide } from "@/lib/eclipse-guides"

export const metadata = buildEclipseGuideMetadata("en", "eclipse-solar-2026-a-coruna")
export default function Page() {
  return renderEclipseGuide("en", "eclipse-solar-2026-a-coruna")
}
