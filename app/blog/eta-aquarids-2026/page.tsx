import type { Metadata } from "next"

import { BlogArticleTemplate } from "@/components/blog-article-template"
import { siteConfig } from "@/lib/site"

const title = "Eta Aquarids 2026: Best Meteor Shower for Southern Latitudes?"
const description =
  "Plan for the Eta Aquarids meteor shower in May 2026 with dark-sky strategy, viewing windows, and photography ideas for one of the most interesting showers of spring."

export const metadata: Metadata = {
  title: `${title} | Solora Blog`,
  description,
  keywords: ["Eta Aquarids 2026", "meteor shower May 2026", "Eta Aquarids photography", "southern latitude meteor shower"],
  openGraph: {
    title,
    description,
    type: "article",
    url: "https://solora.app/blog/eta-aquarids-2026",
    images: [{ url: "https://solora.app/perseid-meteor-shower-night-sky.png", width: 1200, height: 630, alt: "Eta Aquarids meteor shower planning for 2026" }],
    publishedTime: "2026-02-05T00:00:00.000Z",
    authors: ["Antonio Jose Martinez Sanchez"],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/perseid-meteor-shower-night-sky.png"], creator: siteConfig.twitterHandle },
  alternates: { canonical: "/blog/eta-aquarids-2026" },
}

export default function EtaAquarids2026Page() {
  return (
    <BlogArticleTemplate
      slug="eta-aquarids-2026"
      title={title}
      description={description}
      category="Astronomy"
      readTime="7 min read"
      image="perseid-meteor-shower-night-sky.png"
      imageAlt="Eta Aquarids meteor shower planning image for 2026"
      publishedDate="2026-02-05T00:00:00.000Z"
      articleSection="Astronomy"
      wordCount={2100}
      sections={[
        {
          heading: "Why the Eta Aquarids are underrated",
          paragraphs: [
            "The Eta Aquarids often live in the shadow of the Perseids and Geminids, but they remain one of the most compelling meteor topics of spring, especially for observers in southern latitudes and low-light locations.",
          ],
        },
        {
          heading: "How to plan the May 5-6 peak",
          paragraphs: [
            "Treat the peak as a narrow opportunity, but do not ignore the broader viewing window around it. A night with better moon and weather conditions can easily outperform a technically higher-activity night with poor visibility.",
          ],
          bullets: [
            "Aim for a dark eastern or southeastern sky before dawn.",
            "Keep expectations realistic if local weather is unstable.",
            "Use the same continuous-shooting workflow you would use for Perseids.",
          ],
        },
        {
          heading: "Where Solora fits into meteor planning",
          paragraphs: [
            "Meteor posts are not just about radiant names and hourly rates. They are about whether the sky will actually be usable. That is the decision Solora helps people make with forecast and moon context.",
          ],
        },
      ]}
      ctaTitle="Use dark-sky timing that matches your location"
      ctaDescription="Plan Eta Aquarids viewing with local forecast context, not generic meteor headlines."
      relatedLinks={[
        { href: "/blog/lyrids-meteor-shower-2026", label: "Lyrids 2026" },
        { href: "/blog/perseid-meteor-shower-2026", label: "Perseids 2026" },
        { href: "/moon-phase-calendar-app", label: "Moon phase calendar app" },
      ]}
    />
  )
}
