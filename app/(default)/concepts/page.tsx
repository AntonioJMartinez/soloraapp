import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { ResponsiveImage } from "@/components/responsive-image"

export const metadata: Metadata = {
  title: "Cinematic landing concepts | Solora",
  description: "Three cinematic landing page concepts for the Solora website redesign.",
  robots: { index: false, follow: false },
}

const concepts = [
  {
    slug: "one-sky",
    letter: "A",
    name: "One Sky",
    tagline: "One continuous night, from golden hour to aurora.",
    description:
      "An immersive scroll journey through four acts of a single night. Full-bleed photography, huge typography, and a phone screen for every moment the app can predict.",
    image: "/milky-way-galaxy-night-sky-photography.png",
  },
  {
    slug: "totality",
    letter: "B",
    name: "Totality",
    tagline: "A film-teaser countdown to Spain's 2026 eclipse.",
    description:
      "Near-black minimalism built around one event: a live countdown, a pure-CSS corona, and a single promise — be in the path. The rest of the app plays supporting cast.",
    image: "/solar-eclipse-astronomical-event.png",
  },
  {
    slug: "directors-cut",
    letter: "C",
    name: "Director's Cut",
    tagline: "Letterboxed cinema — nature performs, you direct.",
    description:
      "A film editorial with letterbox bars, animated grain, scene slates and timecodes. Features become scenes, screenshots become the storyboard, and the credits roll into the CTA.",
    image: "/golden-hour-sunset-photography.png",
  },
]

export default function ConceptsIndexPage() {
  return (
    <div className="min-h-screen bg-black px-6 py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Current site
        </Link>

        <h1 className="mt-8 text-4xl font-bold tracking-tight md:text-6xl">Cinematic landing concepts</h1>
        <p className="mt-4 max-w-2xl text-lg text-white/60">
          Three directions for the Solora landing redesign. Each is a fully working page — open one and scroll.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {concepts.map((concept) => (
            <Link
              key={concept.slug}
              href={`/concepts/${concept.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-white/10 transition-all duration-500 hover:border-white/30"
            >
              <div className="relative aspect-[4/5]">
                <ResponsiveImage
                  src={concept.image}
                  alt=""
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  width={1024}
                  height={1024}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <p className="font-mono text-xs uppercase tracking-[0.4em] text-[#F4B4AE]">Concept {concept.letter}</p>
                  <h2 className="mt-3 text-3xl font-bold">{concept.name}</h2>
                  <p className="mt-2 text-base font-medium text-white/85">{concept.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{concept.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#E6786E]">
                    View concept
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
