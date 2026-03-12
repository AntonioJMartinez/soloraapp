import type { Metadata } from "next"

import { BlogArticleTemplate } from "@/components/blog-article-template"
import { siteConfig } from "@/lib/site"

const title = "Perseid Meteor Shower 2026: Peak Dates, Moon Conditions, and Camera Settings"
const description =
  "Plan the Perseid meteor shower for August 2026 with peak-night timing, moon-condition strategy, dark-sky planning, and camera settings for better meteor photos."

export const metadata: Metadata = {
  title: `${title} | Solora Blog`,
  description,
  keywords: ["Perseid 2026", "Perseid meteor shower 2026", "meteor shower August 2026", "Perseid photography"],
  openGraph: {
    title,
    description,
    type: "article",
    url: "https://solora.app/blog/perseid-meteor-shower-2026",
    images: [{ url: "https://solora.app/perseid-meteor-shower-night-sky.png", width: 1200, height: 630, alt: "Perseid meteor shower planning for 2026" }],
    publishedTime: "2026-02-08T00:00:00.000Z",
    authors: ["Antonio Jose Martinez Sanchez"],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/perseid-meteor-shower-night-sky.png"], creator: siteConfig.twitterHandle },
  alternates: { canonical: "/blog/perseid-meteor-shower-2026" },
}

export default function PerseidMeteorShower2026Page() {
  return (
    <BlogArticleTemplate
      slug="perseid-meteor-shower-2026"
      title={title}
      description={description}
      category="Astronomy"
      readTime="9 min read"
      image="perseid-meteor-shower-night-sky.png"
      imageAlt="Perseid meteor shower planning image for 2026"
      publishedDate="2026-02-08T00:00:00.000Z"
      articleSection="Astronomy"
      wordCount={2600}
      sections={[
        {
          heading: "Why the Perseids remain the default meteor-shower target",
          paragraphs: [
            "The Perseids are still the most dependable mainstream meteor-shower topic because they combine recognizable branding, strong annual search demand, and a high chance that readers will actually travel for them.",
          ],
        },
        {
          heading: "What matters most in August 2026",
          paragraphs: [
            "Peak dates are important, but moon conditions and weather will decide whether the Perseids are truly worth the effort in your area. That is especially relevant in 2026, when other major August astronomy events will compete for attention.",
          ],
          bullets: [
            "Check the peak night first, then compare surrounding nights.",
            "Pay attention to moonrise and moonset, not just illumination percentage.",
            "Choose a wide dark-sky composition unless you have a specific foreground target.",
          ],
        },
        {
          heading: "Camera settings that still work",
          paragraphs: [
            "Meteor photography still comes down to a wide, fast lens, high ISO, and repeated exposures. The difference between average and strong results is often more about location and persistence than about changing gear.",
          ],
        },
        {
          heading: "Why this post should link with eclipse coverage",
          paragraphs: [
            "Because the 2026 total solar eclipse also happens in August, this article becomes part of a broader seasonal cluster. That gives the blog a stronger August topical footprint than a single event page alone.",
          ],
        },
      ]}
      ctaTitle="Plan the Perseids with dark-sky and moon context"
      ctaDescription="Use Solora to decide which August night actually gives you the best chance at meteor photos."
      relatedLinks={[
        { href: "/blog/total-solar-eclipse-august-2026", label: "Total solar eclipse 2026" },
        { href: "/blog/geminids-meteor-shower-2026", label: "Geminids 2026" },
        { href: "/milky-way-planner", label: "Milky Way planner" },
      ]}
    />
  )
}
