import type { Metadata } from "next"

import { TotalityConcept } from "@/components/concepts/totality"

export const metadata: Metadata = {
  title: "Concept B — Totality | Solora landing concepts",
  description: "Cinematic landing concept: a film-teaser countdown to Spain's 2026 total solar eclipse.",
  robots: { index: false, follow: false },
}

export default function TotalityConceptPage() {
  return <TotalityConcept />
}
