import type { Metadata } from "next"

import { DirectorsCutConcept } from "@/components/concepts/directors-cut"

export const metadata: Metadata = {
  title: "Concept C — Director's Cut | Solora landing concepts",
  description: "Cinematic landing concept: letterboxed film editorial with scenes, timecodes, and credits.",
  robots: { index: false, follow: false },
}

export default function DirectorsCutConceptPage() {
  return <DirectorsCutConcept />
}
