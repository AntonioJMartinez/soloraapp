import type { Metadata } from "next"

import { OneSkyConcept } from "@/components/concepts/one-sky"

export const metadata: Metadata = {
  title: "Concept A — One Sky | Solora landing concepts",
  description: "Cinematic landing concept: one continuous night, from golden hour to aurora.",
  robots: { index: false, follow: false },
}

export default function OneSkyConceptPage() {
  return <OneSkyConcept />
}
