import type { Metadata } from "next"

import { SeoFeaturePage } from "@/components/seo-feature-page"
import { absoluteUrl, siteConfig } from "@/lib/site"

const title = "Moon Phase Calendar App for Night Photography and Planning"
const description =
  "Use Solora as a moon phase calendar app to track lunar phases, moonrise, moonset, and illumination for night photography, travel, and sky planning."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/moon-phase-calendar-app",
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/moon-phase-calendar-app"),
    type: "website",
    images: [
      {
        url: "/moon-phases-night-sky-photography.png",
        width: 1200,
        height: 630,
        alt: "Moon phase calendar planning preview in Solora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/moon-phases-night-sky-photography.png"],
    creator: siteConfig.twitterHandle,
  },
}

export default function MoonPhaseCalendarAppPage() {
  return (
    <SeoFeaturePage
      slug="moon-phase-calendar-app"
      eyebrow="Moon Phase Planning"
      title={title}
      description={description}
      primaryKeyword="Moon Phase Calendar App"
      heroImage="/moon-phases-night-sky-photography.png"
      heroAlt="Moon phase planning in Solora"
      benefits={[
        "Track new moon, full moon, crescents, and quarter phases in one planning workflow.",
        "See moonrise, moonset, and illumination when timing matters for compositions or dark skies.",
        "Use moonlight as either a creative asset or something to avoid when planning Milky Way sessions.",
      ]}
      useCases={[
        "Night photography around moonlit landscapes or dark-sky windows.",
        "Travel planning for full moons, supermoons, and eclipses.",
        "Choosing the right lunar phase before a Milky Way trip.",
      ]}
      faqs={[
        {
          question: "What should a moon phase calendar app show?",
          answer:
            "A useful moon phase calendar app should show phase, illumination, rise and set times, and enough context to decide whether moonlight helps or hurts your plan. Solora is built for that kind of decision-making.",
        },
        {
          question: "Is new moon always best for photography?",
          answer:
            "New moon is often best for Milky Way and meteor photography, but brighter phases can be better for moonlit landscapes, coastal scenes, and foreground detail.",
        },
        {
          question: "Can Solora help with eclipses too?",
          answer:
            "Yes. Solora also highlights larger astronomical events, which makes it useful beyond daily lunar tracking.",
        },
      ]}
      relatedLinks={[
        { href: "/milky-way-planner", label: "Milky Way planner" },
        { href: "/blog/moon-phases-photography", label: "Moon phase guide" },
        { href: "/blog/total-lunar-eclipse-september-2025", label: "Lunar eclipse guide" },
      ]}
    />
  )
}
