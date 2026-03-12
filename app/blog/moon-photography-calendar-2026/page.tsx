import type { Metadata } from "next"

import { BlogArticleTemplate } from "@/components/blog-article-template"
import { siteConfig } from "@/lib/site"

const title = "Moon Photography Calendar 2026: Best Full Moons, Dark Skies, and Milky Way Windows"
const description =
  "Plan moon photography and dark-sky travel in 2026 with a practical calendar approach that combines full moons, moon-free nights, and seasonal Milky Way opportunities."

export const metadata: Metadata = {
  title: `${title} | Solora Blog`,
  description,
  keywords: ["moon photography calendar 2026", "full moon dates 2026", "dark sky calendar 2026", "Milky Way windows 2026"],
  openGraph: {
    title,
    description,
    type: "article",
    url: "https://solora.app/blog/moon-photography-calendar-2026",
    images: [{ url: "https://solora.app/moon-phases-night-sky-photography.png", width: 1200, height: 630, alt: "Moon photography calendar for 2026" }],
    publishedTime: "2026-02-12T00:00:00.000Z",
    authors: ["Antonio Jose Martinez Sanchez"],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/moon-phases-night-sky-photography.png"], creator: siteConfig.twitterHandle },
  alternates: { canonical: "/blog/moon-photography-calendar-2026" },
}

export default function MoonPhotographyCalendar2026Page() {
  return (
    <BlogArticleTemplate
      slug="moon-photography-calendar-2026"
      title={title}
      description={description}
      category="Photography"
      readTime="8 min read"
      image="moon-phases-night-sky-photography.png"
      imageAlt="Moon photography calendar planning image for 2026"
      publishedDate="2026-02-12T00:00:00.000Z"
      articleSection="Photography"
      wordCount={2300}
      sections={[
        {
          heading: "Why moon planning is bigger than full moon dates",
          paragraphs: [
            "Photographers usually search for full moon dates first, but the better planning workflow also tracks moon-free nights, quarter phases, moonrise timing, and how lunar brightness affects the rest of the sky.",
            "That is what makes a moon photography calendar useful rather than decorative.",
          ],
        },
        {
          heading: "How to use one calendar for two different goals",
          paragraphs: [],
          bullets: [
            "Use bright moon phases for moonrise and moonlit landscape work.",
            "Use new moon windows for Milky Way and meteor sessions.",
            "Treat quarter phases as flexible middle ground for mixed foreground and sky work.",
          ],
        },
        {
          heading: "Where this fits into the Solora content system",
          paragraphs: [
            "This page bridges several topics at once: supermoons, eclipses, dark-sky planning, and Milky Way timing. It is a natural hub page that can support several seasonal campaigns across the year.",
          ],
        },
      ]}
      ctaTitle="Use a moon calendar that supports real shooting decisions"
      ctaDescription="Track moon phases, moonrise, and dark-sky windows in Solora before every night session."
      relatedLinks={[
        { href: "/blog/supermoons-2026", label: "Supermoons 2026" },
        { href: "/blog/moon-phases-photography", label: "Moon phase guide" },
        { href: "/milky-way-planner", label: "Milky Way planner" },
      ]}
    />
  )
}
