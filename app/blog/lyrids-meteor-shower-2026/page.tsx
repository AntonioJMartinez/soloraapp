import type { Metadata } from "next"

import { BlogArticleTemplate } from "@/components/blog-article-template"
import { siteConfig } from "@/lib/site"

const title = "Lyrids Meteor Shower 2026: Best Time to Watch and Photograph It"
const description =
  "Plan the Lyrids meteor shower in April 2026 with peak-night strategy, dark-sky planning, and practical meteor photography workflow."

export const metadata: Metadata = {
  title: `${title} | Solora Blog`,
  description,
  keywords: ["Lyrids 2026", "Lyrids meteor shower 2026", "meteor shower photography April 2026", "Lyrids peak 2026"],
  openGraph: {
    title,
    description,
    type: "article",
    url: "https://solora.app/blog/lyrids-meteor-shower-2026",
    images: [{ url: "https://solora.app/perseid-meteor-shower-night-sky.png", width: 1200, height: 630, alt: "Meteor shower planning for the 2026 Lyrids" }],
    publishedTime: "2026-02-01T00:00:00.000Z",
    authors: ["Antonio Jose Martinez Sanchez"],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/perseid-meteor-shower-night-sky.png"], creator: siteConfig.twitterHandle },
  alternates: { canonical: "/blog/lyrids-meteor-shower-2026" },
}

export default function LyridsMeteorShower2026Page() {
  return (
    <BlogArticleTemplate
      slug="lyrids-meteor-shower-2026"
      title={title}
      description={description}
      category="Astronomy"
      readTime="7 min read"
      image="perseid-meteor-shower-night-sky.png"
      imageAlt="Meteor shower planning image for the 2026 Lyrids"
      publishedDate="2026-02-01T00:00:00.000Z"
      articleSection="Astronomy"
      wordCount={2100}
      sections={[
        {
          heading: "Why the Lyrids still deserve a spot on your calendar",
          paragraphs: [
            "The Lyrids are not the biggest shower of the year, but they are one of the first strong reasons to plan a spring dark-sky session. That alone makes them useful for photographers eager to get back into night work after winter.",
          ],
        },
        {
          heading: "How to approach the April 22-23 peak",
          paragraphs: [
            "Use the peak as a priority window, but stay flexible within a broader viewing range. Meteor activity, moonlight, and local weather all influence whether the night is actually worth the trip.",
          ],
          bullets: [
            "Choose dark locations away from city glow.",
            "Watch moon phase and moonset timing closely.",
            "Use wide compositions and continuous shooting for more chances.",
          ],
        },
        {
          heading: "What makes spring meteor sessions tricky",
          paragraphs: [
            "Spring weather can be volatile, and that volatility matters more than the headline shower name. Thin cloud, haze, or unstable seeing can erase the value of a promising meteor night faster than most people expect.",
          ],
        },
      ]}
      ctaTitle="Use real conditions for your meteor-shower decision"
      ctaDescription="Check weather, visibility, and moon context in Solora before your next meteor session."
      relatedLinks={[
        { href: "/blog/eta-aquarids-2026", label: "Eta Aquarids 2026" },
        { href: "/blog/perseid-meteor-shower-2026", label: "Perseids 2026" },
        { href: "/milky-way-planner", label: "Milky Way planner" },
      ]}
    />
  )
}
