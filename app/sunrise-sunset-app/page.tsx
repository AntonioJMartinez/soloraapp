import type { Metadata } from "next"

import { SeoFeaturePage } from "@/components/seo-feature-page"
import { absoluteUrl, siteConfig } from "@/lib/site"

const title = "Sunrise & Sunset App for Photography Planning"
const description =
  "Use Solora to plan sunrise and sunset photography with timing, cloud cover, visibility, weather, and location comparisons before you travel."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sunrise-sunset-app",
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/sunrise-sunset-app"),
    type: "website",
    images: [
      {
        url: "/cover.jpg",
        width: 1600,
        height: 900,
        alt: "Sunrise and sunset planning preview in Solora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/cover.jpg"],
    creator: siteConfig.twitterHandle,
  },
}

export default function SunriseSunsetAppPage() {
  return (
    <SeoFeaturePage
      slug="sunrise-sunset-app"
      eyebrow="Sunrise & Sunset Planning"
      title={title}
      description={description}
      primaryKeyword="Sunrise & Sunset App"
      heroImage="/cover.jpg"
      heroAlt="Solora sunrise and sunset forecast screen"
      benefits={[
        "See sunrise, sunset, dawn, dusk, and changing daylight at your chosen location.",
        "Check cloud cover, visibility, and weather so you do not rely on time alone.",
        "Compare multiple locations when one horizon looks weak and another looks promising.",
      ]}
      useCases={[
        "Landscape photography at sunrise or sunset.",
        "Travel planning for dawn viewpoints and sunset lookouts.",
        "Daily outdoor planning when light quality matters.",
      ]}
      faqs={[
        {
          question: "What makes a good sunrise or sunset app?",
          answer:
            "A useful sunrise and sunset app combines exact timing with forecast context like cloud cover, visibility, and horizon conditions. Solora is built around that planning workflow.",
        },
        {
          question: "Can Solora help me compare locations?",
          answer:
            "Yes. Solora is designed for tracking and comparing favorite spots so you can quickly switch between locations before deciding where to shoot.",
        },
        {
          question: "Is Solora only for photographers?",
          answer:
            "No. Photographers are a core audience, but hikers, outdoor planners, sailors, and travelers also benefit from accurate dawn and dusk planning.",
        },
      ]}
      relatedLinks={[
        { href: "/golden-hour-photography-app", label: "Golden hour planning" },
        { href: "/blog/golden-hour-photography-guide", label: "Golden hour guide" },
        { href: "/moon-phase-calendar-app", label: "Moon phase calendar app" },
      ]}
    />
  )
}
