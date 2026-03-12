import type { Metadata } from "next"

import { BlogArticleTemplate } from "@/components/blog-article-template"
import { siteConfig } from "@/lib/site"

const title = "Total Solar Eclipse August 12, 2026: Best Viewing Locations, Path Map, and Photography Tips"
const description =
  "Plan for the August 12, 2026 total solar eclipse with path highlights, travel planning notes, weather strategy, and practical photography advice for one of the decade's biggest sky events."

export const metadata: Metadata = {
  title: `${title} | Solora Blog`,
  description,
  keywords: ["total solar eclipse 2026", "August 12 2026 eclipse", "eclipse path 2026", "solar eclipse photography", "Spain eclipse 2026"],
  openGraph: {
    title,
    description,
    type: "article",
    url: "https://solora.app/blog/total-solar-eclipse-august-2026",
    images: [{ url: "https://solora.app/solar-eclipse-astronomical-event.png", width: 1200, height: 630, alt: "Total solar eclipse planning for August 2026" }],
    publishedTime: "2026-01-10T00:00:00.000Z",
    authors: ["Antonio Jose Martinez Sanchez"],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/solar-eclipse-astronomical-event.png"], creator: siteConfig.twitterHandle },
  alternates: { canonical: "/blog/total-solar-eclipse-august-2026" },
}

export default function TotalSolarEclipseAugust2026Page() {
  return (
    <BlogArticleTemplate
      slug="total-solar-eclipse-august-2026"
      title={title}
      description={description}
      category="Astronomy"
      readTime="12 min read"
      image="solar-eclipse-astronomical-event.png"
      imageAlt="Total solar eclipse planning graphic for August 12, 2026"
      publishedDate="2026-01-10T00:00:00.000Z"
      articleSection="Astronomy"
      wordCount={3300}
      sections={[
        {
          heading: "Why the August 12, 2026 eclipse matters",
          paragraphs: [
            "The total solar eclipse on August 12, 2026 is the obvious flagship astronomy event of the year. It is the kind of date that drives travel, location scouting, content planning, and long-lead SEO interest months in advance.",
            "For Solora readers, it also fits a practical planning mindset: a headline event still depends on local weather, horizon quality, and logistics. The path matters, but so does your backup plan.",
          ],
        },
        {
          heading: "Where the path of totality gets interesting",
          paragraphs: [
            "This eclipse draws extra attention because parts of Europe are involved, including Spain, which makes it especially relevant to regional travel and photography planning audiences. Iceland and Greenland are also central talking points when discussing the path.",
            "Even outside totality, large partial phases can still justify scouting and outreach content, but the strongest travel demand will naturally cluster around the totality corridor.",
          ],
        },
        {
          heading: "How to plan an eclipse trip like a photographer",
          paragraphs: [],
          bullets: [
            "Choose more than one candidate location before the week of the event.",
            "Track weather trends early, but make the final call much closer to eclipse day.",
            "Scout foreground options if you want more than a tight solar close-up.",
            "Separate safety planning from photography planning. Eye protection is non-negotiable.",
          ],
        },
        {
          heading: "Photography strategy for eclipse day",
          paragraphs: [
            "The best eclipse photos are usually the result of a simple, tested plan. Do not overcomplicate capture flow on the day itself. Decide in advance whether you want a telephoto corona shot, a landscape scene, or a sequence composite.",
            "Also decide whether you want to experience totality with your eyes or spend it running a sequence. That tradeoff is worth settling before you travel.",
          ],
        },
      ]}
      ctaTitle="Plan the 2026 eclipse with forecast context"
      ctaDescription="Use Solora for the weather, visibility, and location decisions around your eclipse trip."
      relatedLinks={[
        { href: "/blog/astronomical-events-2026", label: "Astronomical events 2026" },
        { href: "/blog/weather-patterns-sky-photography", label: "Weather patterns guide" },
        { href: "/sunrise-sunset-app", label: "Sunrise & sunset planning" },
      ]}
    />
  )
}
