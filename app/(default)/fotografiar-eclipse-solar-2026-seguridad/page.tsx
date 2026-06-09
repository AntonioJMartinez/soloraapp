import { buildEclipseGuideMetadata, renderEclipseGuide } from "@/lib/eclipse-guides"

export const metadata = buildEclipseGuideMetadata("en", "fotografiar-eclipse-solar-2026-seguridad")
export default function Page() {
  return renderEclipseGuide("en", "fotografiar-eclipse-solar-2026-seguridad")
}
