import type { Metadata } from "next"

import { BlogArticleTemplate } from "@/components/blog-article-template"
import { siteConfig } from "@/lib/site"

const title = "Supermoons in 2026: Dates, Best Times to Watch, and Photo Ideas"
const description =
  "Use this 2026 supermoon guide to plan moonrise photography, city skyline shots, coastal compositions, and travel around the biggest full moons of the year."

export const metadata: Metadata = {
  title: `${title} | Solora Blog`,
  description,
  keywords: ["supermoons 2026", "supermoon dates 2026", "full moon photography 2026", "moonrise photography"],
  openGraph: {
    title,
    description,
    type: "article",
    url: "https://solora.app/blog/supermoons-2026",
    images: [{ url: "https://solora.app/moon-phases-night-sky-photography.png", width: 1200, height: 630, alt: "Supermoon planning and moon photography guide for 2026" }],
    publishedTime: "2026-01-16T00:00:00.000Z",
    authors: ["Antonio Jose Martinez Sanchez"],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/moon-phases-night-sky-photography.png"], creator: siteConfig.twitterHandle },
  alternates: { canonical: "/blog/supermoons-2026" },
}

export default function Supermoons2026Page() {
  return (
    <BlogArticleTemplate
      slug="supermoons-2026"
      title={title}
      description={description}
      category="Astronomy"
      readTime="7 min read"
      image="moon-phases-night-sky-photography.png"
      imageAlt="Moon phase and supermoon planning image for 2026"
      publishedDate="2026-01-16T00:00:00.000Z"
      articleSection="Astronomy"
      wordCount={2200}
      sections={[
        {
          heading: "Why supermoon content performs well every year",
          paragraphs: [
            "Supermoon articles work because they sit at the intersection of mainstream curiosity and photography intent. Casual readers want dates; photographers want moonrise timing, foreground ideas, and location planning.",
            "For Solora, this is a natural acquisition topic because it connects directly to moon phase tracking and forecast-based planning.",
          ],
        },
        {
          heading: "How to plan around the biggest full moons",
          paragraphs: [],
          bullets: [
            "Check moonrise timing instead of focusing only on the date.",
            "Scout a foreground subject before the evening of the full moon.",
            "Watch haze and cloud layers because they shape color and perceived scale.",
            "Decide early whether you want a compressed telephoto look or a wider environmental composition.",
          ],
        },
        {
          heading: "Best supermoon photo ideas for 2026",
          paragraphs: [
            "Moonrise over skyline silhouettes, coastal horizons, mountain ridges, and lighthouse or monument foregrounds are reliable concepts. The strongest images tend to come from pre-scouted alignments rather than improvisation.",
          ],
        },
        {
          heading: "Why a moon phase calendar still matters more than hype terms",
          paragraphs: [
            "The word supermoon can help discovery, but the better long-term planning tool is a full moon and moon-phase calendar. That lets you connect the headline full moons to dark-sky trips, Milky Way sessions, and eclipse windows in the same year.",
          ],
        },
      ]}
      ctaTitle="Turn full moon dates into real shooting plans"
      ctaDescription="Use Solora to track moon phase, moonrise, illumination, and local conditions before every major full moon."
      relatedLinks={[
        { href: "/blog/moon-phases-photography", label: "Moon phase photography guide" },
        { href: "/moon-phase-calendar-app", label: "Moon phase calendar app" },
        { href: "/blog/astronomical-events-2026", label: "Astronomical events 2026" },
      ]}
    />
  )
}
