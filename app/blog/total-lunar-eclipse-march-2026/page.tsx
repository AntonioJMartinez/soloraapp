import type { Metadata } from "next"

import { BlogArticleTemplate } from "@/components/blog-article-template"
import { siteConfig } from "@/lib/site"

const title = "Total Lunar Eclipse March 2-3, 2026: Blood Moon Viewing Guide"
const description =
  "Use this guide to plan the March 2-3, 2026 total lunar eclipse with timing strategy, visibility expectations, and blood moon photography ideas."

export const metadata: Metadata = {
  title: `${title} | Solora Blog`,
  description,
  keywords: ["March 2026 lunar eclipse", "blood moon 2026", "total lunar eclipse March 2026", "lunar eclipse photography"],
  openGraph: {
    title,
    description,
    type: "article",
    url: "https://solora.app/blog/total-lunar-eclipse-march-2026",
    images: [{ url: "https://solora.app/total-lunar-eclipse-september-2025.jpg", width: 1200, height: 630, alt: "Blood moon planning for March 2026" }],
    publishedTime: "2026-01-12T00:00:00.000Z",
    authors: ["Antonio Jose Martinez Sanchez"],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/total-lunar-eclipse-september-2025.jpg"], creator: siteConfig.twitterHandle },
  alternates: { canonical: "/blog/total-lunar-eclipse-march-2026" },
}

export default function TotalLunarEclipseMarch2026Page() {
  return (
    <BlogArticleTemplate
      slug="total-lunar-eclipse-march-2026"
      title={title}
      description={description}
      category="Astronomy"
      readTime="9 min read"
      image="total-lunar-eclipse-september-2025.jpg"
      imageAlt="Blood moon style lunar eclipse image for March 2026 guide"
      publishedDate="2026-01-12T00:00:00.000Z"
      articleSection="Astronomy"
      wordCount={2600}
      sections={[
        {
          heading: "A strong start to the 2026 eclipse calendar",
          paragraphs: [
            "The March 2-3, 2026 total lunar eclipse gives sky watchers an early headline event and gives photographers a clean reason to start building a spring sky calendar.",
            "Lunar eclipses are easier than solar eclipses from a safety perspective, but timing, weather, and composition still make a big difference in the final result.",
          ],
        },
        {
          heading: "What makes total lunar eclipses so photogenic",
          paragraphs: [
            "During totality, the moon often shifts into the orange-red range that gives rise to the phrase blood moon. The slower pace of the event compared with a solar eclipse makes it ideal for both visual observation and more deliberate photography.",
            "That also means you can choose between close telephoto moon images and wider compositions that place the eclipsed moon into a landscape.",
          ],
        },
        {
          heading: "Planning checklist for the March 2026 eclipse",
          paragraphs: [],
          bullets: [
            "Check local moonrise and moonset timing, not just global eclipse timing.",
            "Use cloud cover and visibility forecasts in the final 48 hours.",
            "Decide whether you want a close-up frame or a foreground-driven composition.",
            "Bring a stable tripod and enough battery for a longer session.",
          ],
        },
        {
          heading: "How this eclipse connects to the rest of 2026",
          paragraphs: [
            "March is not a one-off event month. It sets up the broader 2026 astronomy story, which later includes a total solar eclipse, a deep partial lunar eclipse in late August, and the usual major meteor showers.",
            "That makes this a strong internal-linking article for the rest of the year.",
          ],
        },
      ]}
      ctaTitle="Track the blood moon with better local timing"
      ctaDescription="Use Solora for eclipse reminders, moon timing, and forecast context before totality."
      relatedLinks={[
        { href: "/blog/partial-lunar-eclipse-august-2026", label: "August 2026 partial eclipse" },
        { href: "/blog/astronomical-events-2026", label: "Astronomical events 2026" },
        { href: "/moon-phase-calendar-app", label: "Moon phase calendar app" },
      ]}
    />
  )
}
