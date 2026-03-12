import type { Metadata } from "next"

import { SeoFeaturePage } from "@/components/seo-feature-page"
import { absoluteUrl, siteConfig } from "@/lib/site"

const title = "Golden Hour Photography App for Better Sunrise and Sunset Timing"
const description =
  "Track golden hour, blue hour, weather, and visibility with Solora so you can plan better sunrise and sunset photography sessions."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/golden-hour-photography-app",
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/golden-hour-photography-app"),
    type: "website",
    images: [
      {
        url: "/golden-hour-sunset-photography.png",
        width: 1200,
        height: 630,
        alt: "Golden hour planning preview in Solora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/golden-hour-sunset-photography.png"],
    creator: siteConfig.twitterHandle,
  },
}

export default function GoldenHourPhotographyAppPage() {
  return (
    <SeoFeaturePage
      slug="golden-hour-photography-app"
      eyebrow="Golden Hour Planning"
      title={title}
      description={description}
      primaryKeyword="Golden Hour Photography App"
      heroImage="/golden-hour-sunset-photography.png"
      heroAlt="Golden hour sky photography planning in Solora"
      benefits={[
        "Plan both golden hour and blue hour instead of relying on rough sunrise and sunset estimates.",
        "Use forecast context to judge whether soft light will actually translate into strong shooting conditions.",
        "Get ready earlier for fast-changing light windows at dawn and dusk.",
      ]}
      useCases={[
        "Portrait sessions that need softer directional light.",
        "Landscape and travel photography during high-color sky windows.",
        "Scouting compositions before the best light arrives.",
      ]}
      faqs={[
        {
          question: "Why is golden hour timing different every day?",
          answer:
            "Golden hour depends on solar angle, which shifts by date and location. Solora helps you account for those changes instead of assuming the same light window each day.",
        },
        {
          question: "Does weather still matter during golden hour?",
          answer:
            "Absolutely. Great timing can still fail if cloud cover, haze, or visibility are poor. Solora combines timing with forecast context so you can make better calls.",
        },
        {
          question: "Can Solora help with blue hour too?",
          answer:
            "Yes. Solora is useful for photographers planning the transition periods around sunrise and sunset, including blue hour conditions.",
        },
      ]}
      relatedLinks={[
        { href: "/sunrise-sunset-app", label: "Sunrise & sunset app" },
        { href: "/blog/golden-hour-photography-guide", label: "Golden hour guide" },
        { href: "/blog/weather-patterns-sky-photography", label: "Weather guide" },
      ]}
    />
  )
}
