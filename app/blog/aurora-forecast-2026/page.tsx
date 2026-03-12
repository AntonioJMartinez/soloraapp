import type { Metadata } from "next"

import { BlogArticleTemplate } from "@/components/blog-article-template"
import { siteConfig } from "@/lib/site"

const title = "Aurora Forecast 2026: Is Solar Cycle 25 Still Good for Northern Lights Photography?"
const description =
  "Use this 2026 aurora outlook to understand why Solar Cycle 25 still matters, how to think about aurora demand after recent peaks, and what photographers should plan around."

export const metadata: Metadata = {
  title: `${title} | Solora Blog`,
  description,
  keywords: ["aurora forecast 2026", "solar cycle 25 aurora", "northern lights photography 2026", "KP index 2026"],
  openGraph: {
    title,
    description,
    type: "article",
    url: "https://solora.app/blog/aurora-forecast-2026",
    images: [{ url: "https://solora.app/northern-lights-aurora-borealis-photography.png", width: 1200, height: 630, alt: "Aurora forecast and solar cycle 25 planning for 2026" }],
    publishedTime: "2026-01-18T00:00:00.000Z",
    authors: ["Antonio Jose Martinez Sanchez"],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/northern-lights-aurora-borealis-photography.png"], creator: siteConfig.twitterHandle },
  alternates: { canonical: "/blog/aurora-forecast-2026" },
}

export default function AuroraForecast2026Page() {
  return (
    <BlogArticleTemplate
      slug="aurora-forecast-2026"
      title={title}
      description={description}
      category="Aurora"
      readTime="9 min read"
      image="northern-lights-aurora-borealis-photography.png"
      imageAlt="Aurora forecast and northern lights planning image for 2026"
      publishedDate="2026-01-18T00:00:00.000Z"
      articleSection="Aurora"
      wordCount={2600}
      sections={[
        {
          heading: "Why aurora interest should stay elevated in 2026",
          paragraphs: [
            "Recent years pushed aurora interest back into the mainstream, and 2026 should still benefit from that momentum. NOAA has said Solar Cycle 25 likely reached its highest sunspot number in more than two decades, which keeps aurora-related content relevant even as individual storm intensity varies.",
            "That does not mean every night is good. It means the category remains attractive, and forecast interpretation matters even more.",
          ],
        },
        {
          heading: "How to think about aurora planning in 2026",
          paragraphs: [],
          bullets: [
            "Do not treat KP index as the only decision signal.",
            "Use cloud cover and local darkness as hard filters before travel.",
            "Plan by region and flexibility, not by a single forecast screenshot.",
            "Keep backup locations ready when conditions shift at the last minute.",
          ],
        },
        {
          heading: "What photographers should optimize for",
          paragraphs: [
            "Aurora photographers care about more than visibility. They need composition windows, horizon direction, foreground options, travel time, and enough confidence that a location is worth the effort. That is why a planning app can be more useful than a single-purpose alert tool.",
          ],
        },
        {
          heading: "Best internal angles for Solora content",
          paragraphs: [
            "This article naturally supports other pages about KP interpretation, weather-based sky planning, moon phases for dark conditions, and night-sky trip planning. It is a strong hub page for future aurora updates throughout 2026.",
          ],
        },
      ]}
      ctaTitle="Use forecasts, not hype, to plan aurora nights"
      ctaDescription="Track aurora-friendly windows with local weather and sky context in Solora."
      relatedLinks={[
        { href: "/blog/aurora-prediction-guide", label: "Aurora prediction guide" },
        { href: "/aurora-forecast-app", label: "Aurora forecast app" },
        { href: "/blog/weather-patterns-sky-photography", label: "Weather guide" },
      ]}
    />
  )
}
