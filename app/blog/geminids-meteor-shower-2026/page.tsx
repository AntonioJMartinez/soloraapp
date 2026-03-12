import type { Metadata } from "next"

import { BlogArticleTemplate } from "@/components/blog-article-template"
import { siteConfig } from "@/lib/site"

const title = "Geminids Meteor Shower 2026: Why It May Be the Best Meteor Shower of the Year"
const description =
  "Plan the December 2026 Geminids with peak timing, moon-condition strategy, and camera workflow for one of the strongest meteor showers of the year."

export const metadata: Metadata = {
  title: `${title} | Solora Blog`,
  description,
  keywords: ["Geminids 2026", "Geminid meteor shower 2026", "December meteor shower 2026", "Geminids photography"],
  openGraph: {
    title,
    description,
    type: "article",
    url: "https://solora.app/blog/geminids-meteor-shower-2026",
    images: [{ url: "https://solora.app/perseid-meteor-shower-night-sky.png", width: 1200, height: 630, alt: "Geminids meteor shower planning for 2026" }],
    publishedTime: "2026-02-10T00:00:00.000Z",
    authors: ["Antonio Jose Martinez Sanchez"],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/perseid-meteor-shower-night-sky.png"], creator: siteConfig.twitterHandle },
  alternates: { canonical: "/blog/geminids-meteor-shower-2026" },
}

export default function GeminidsMeteorShower2026Page() {
  return (
    <BlogArticleTemplate
      slug="geminids-meteor-shower-2026"
      title={title}
      description={description}
      category="Astronomy"
      readTime="8 min read"
      image="perseid-meteor-shower-night-sky.png"
      imageAlt="Geminids meteor shower planning image for 2026"
      publishedDate="2026-02-10T00:00:00.000Z"
      articleSection="Astronomy"
      wordCount={2300}
      sections={[
        {
          heading: "Why the Geminids often beat more famous showers",
          paragraphs: [
            "The Geminids are a yearly candidate for best meteor shower because they can produce high rates and strong visual performance late in the year, when many people have already forgotten about spring and summer events.",
          ],
        },
        {
          heading: "How to think about the December 13-14, 2026 peak",
          paragraphs: [
            "Winter meteor sessions demand more from the viewer. Cold, battery drain, and comfort all matter. But that same friction often leads to cleaner skies and stronger dark-sky opportunities when the weather cooperates.",
          ],
          bullets: [
            "Dress for a long stationary session.",
            "Protect batteries from cold.",
            "Keep a simple shooting sequence so you can stay outside longer.",
          ],
        },
        {
          heading: "Why this is a good year-end anchor post",
          paragraphs: [
            "A Geminids page helps the Solora blog close the year with a major event rather than letting astronomy traffic fade after autumn. It is also a strong internal destination from annual calendar and meteor cluster pages.",
          ],
        },
      ]}
      ctaTitle="Use better forecast context for winter meteor nights"
      ctaDescription="Plan Geminids viewing and cold-weather photography sessions with Solora."
      relatedLinks={[
        { href: "/blog/perseid-meteor-shower-2026", label: "Perseids 2026" },
        { href: "/blog/astronomical-events-2026", label: "Astronomical events 2026" },
        { href: "/blog/weather-patterns-sky-photography", label: "Weather guide" },
      ]}
    />
  )
}
