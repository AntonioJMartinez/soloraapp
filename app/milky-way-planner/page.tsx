import type { Metadata } from "next"

import { SeoFeaturePage } from "@/components/seo-feature-page"
import { absoluteUrl, siteConfig } from "@/lib/site"

const title = "Milky Way Planner for Night Photography and Dark-Sky Trips"
const description =
  "Plan Milky Way photography with Solora by checking moon phases, dark-sky windows, visibility, and broader night-sky conditions before your next trip."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/milky-way-planner",
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/milky-way-planner"),
    type: "website",
    images: [
      {
        url: "/milky-way-galaxy-night-sky-photography.png",
        width: 1200,
        height: 630,
        alt: "Milky Way planning preview in Solora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/milky-way-galaxy-night-sky-photography.png"],
    creator: siteConfig.twitterHandle,
  },
}

export default function MilkyWayPlannerPage() {
  return (
    <SeoFeaturePage
      slug="milky-way-planner"
      eyebrow="Milky Way Planning"
      title={title}
      description={description}
      primaryKeyword="Milky Way Planner"
      heroImage="/milky-way-galaxy-night-sky-photography.png"
      heroAlt="Milky Way visibility planning in Solora"
      benefits={[
        "Plan around dark-sky windows instead of guessing when the moon will interfere.",
        "Use visibility, weather, and night-sky timing to avoid unproductive trips.",
        "Keep multiple locations handy when one dark-sky site looks weak and another looks stronger.",
      ]}
      useCases={[
        "Milky Way and galactic center photography planning.",
        "Night-sky travel around moon-free weekends.",
        "Scouting landscapes for foreground and sky alignment opportunities.",
      ]}
      faqs={[
        {
          question: "What should a Milky Way planner help with?",
          answer:
            "A Milky Way planner should help with dark-sky timing, moon avoidance, and broader visibility context. Solora is designed to support those decisions before you travel.",
        },
        {
          question: "Why do moon phases matter for the Milky Way?",
          answer:
            "Moonlight can wash out the Milky Way and reduce contrast. Solora helps you use moon phase context when deciding which nights are worth the effort.",
        },
        {
          question: "Can Solora help beyond the Milky Way?",
          answer:
            "Yes. Solora also supports sunrise, sunset, moon phases, aurora planning, tides, and broader astronomical event tracking.",
        },
      ]}
      relatedLinks={[
        { href: "/moon-phase-calendar-app", label: "Moon phase calendar app" },
        { href: "/blog/moon-phases-photography", label: "Moon phase guide" },
        { href: "/blog/perseid-meteor-shower-2025", label: "Meteor shower guide" },
      ]}
    />
  )
}
