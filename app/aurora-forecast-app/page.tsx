import type { Metadata } from "next"

import { SeoFeaturePage } from "@/components/seo-feature-page"
import { absoluteUrl, siteConfig } from "@/lib/site"

const title = "Aurora Forecast App for Northern Lights Planning"
const description =
  "Use Solora as an aurora forecast app to track KP index, visibility context, and weather signals before you head out for northern lights photography."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/aurora-forecast-app",
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/aurora-forecast-app"),
    type: "website",
    images: [
      {
        url: "/northern-lights-aurora-borealis-photography.png",
        width: 1200,
        height: 630,
        alt: "Aurora forecast planning preview in Solora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/northern-lights-aurora-borealis-photography.png"],
    creator: siteConfig.twitterHandle,
  },
}

export default function AuroraForecastAppPage() {
  return (
    <SeoFeaturePage
      slug="aurora-forecast-app"
      eyebrow="Aurora Forecasting"
      title={title}
      description={description}
      primaryKeyword="Aurora Forecast App"
      heroImage="/northern-lights-aurora-borealis-photography.png"
      heroAlt="Aurora forecast planning in Solora"
      benefits={[
        "Track the forecast signals that matter before committing to an aurora shoot.",
        "Combine aurora planning with location, weather, and night-sky context in one app.",
        "Reduce wasted trips by checking conditions before you travel or stay out late.",
      ]}
      useCases={[
        "Northern lights photography in changing weather.",
        "Trip planning for dark locations with better visibility odds.",
        "Short-notice aurora sessions when timing is critical.",
      ]}
      faqs={[
        {
          question: "What makes a useful aurora forecast app?",
          answer:
            "An aurora forecast app should help you interpret geomagnetic activity alongside local conditions like cloud cover and darkness. Solora is designed to support the full planning decision, not just show a single number.",
        },
        {
          question: "Is KP index enough on its own?",
          answer:
            "No. KP index matters, but visibility, weather, location, and timing are just as important. Solora helps you combine those factors before leaving home.",
        },
        {
          question: "Can Solora help photographers more than casual viewers?",
          answer:
            "Yes. Solora is especially useful for people who need to plan composition, travel, and timing around aurora opportunities.",
        },
      ]}
      relatedLinks={[
        { href: "/blog/aurora-prediction-guide", label: "Aurora prediction guide" },
        { href: "/milky-way-planner", label: "Milky Way planner" },
        { href: "/blog/weather-patterns-sky-photography", label: "Weather guide" },
      ]}
    />
  )
}
