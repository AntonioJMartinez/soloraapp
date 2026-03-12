import type { Metadata } from "next"

import { BlogArticleTemplate } from "@/components/blog-article-template"
import { siteConfig } from "@/lib/site"

const title = "Astronomical Events Calendar 2026: Eclipses, Meteor Showers, Supermoons, and Best Nights to Shoot"
const description =
  "Plan 2026 with the biggest astronomy events for photographers and sky watchers, including eclipses, meteor showers, supermoons, aurora-friendly periods, and the best seasonal night-sky windows."

export const metadata: Metadata = {
  title: `${title} | Solora Blog`,
  description,
  keywords: [
    "astronomical events 2026",
    "astronomy calendar 2026",
    "meteor showers 2026",
    "eclipses 2026",
    "supermoons 2026",
    "night sky events 2026",
  ],
  openGraph: {
    title,
    description,
    type: "article",
    url: "https://solora.app/blog/astronomical-events-2026",
    images: [{ url: "https://solora.app/solar-eclipse-astronomical-event.png", width: 1200, height: 630, alt: "Astronomical events planning for 2026" }],
    publishedTime: "2026-01-05T00:00:00.000Z",
    authors: ["Antonio Jose Martinez Sanchez"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/solar-eclipse-astronomical-event.png"],
    creator: siteConfig.twitterHandle,
  },
  alternates: { canonical: "/blog/astronomical-events-2026" },
}

export default function AstronomicalEvents2026Page() {
  return (
    <BlogArticleTemplate
      slug="astronomical-events-2026"
      title={title}
      description={description}
      category="Astronomy"
      readTime="12 min read"
      image="solar-eclipse-astronomical-event.png"
      imageAlt="Astronomical events and eclipse planning graphic for 2026"
      publishedDate="2026-01-05T00:00:00.000Z"
      articleSection="Astronomy"
      wordCount={3200}
      sections={[
        {
          heading: "The biggest sky events to plan around in 2026",
          paragraphs: [
            "For Solora users, 2026 is a strong year because it combines a headline solar eclipse with multiple lunar eclipses, the usual reliable meteor showers, and enough moon-phase variety to keep both landscape and astrophotography calendars busy.",
            "If you want one article to anchor your 2026 planning, this is the one. It helps you decide which dates deserve travel, which nights just need local scouting, and where Solora fits into the workflow.",
          ],
        },
        {
          heading: "The 2026 events worth marking first",
          paragraphs: ["Start your calendar with the events most likely to drive travel, alerts, and premium planning sessions."],
          bullets: [
            "March 2-3, 2026: Total lunar eclipse",
            "April 22-23, 2026: Lyrids meteor shower peak",
            "May 5-6, 2026: Eta Aquarids meteor shower peak",
            "August 12, 2026: Total solar eclipse",
            "August 12-13, 2026: Perseid meteor shower peak",
            "August 27-28, 2026: Deep partial lunar eclipse",
            "December 13-14, 2026: Geminids meteor shower peak",
          ],
        },
        {
          heading: "Why photographers should plan by season, not by single event",
          paragraphs: [
            "Single-event posts are useful, but the best planning comes from clustering dates. Spring gives you a lunar eclipse and early meteor activity. Summer brings the total solar eclipse and one of the year's biggest meteor nights. Late summer and autumn work well for moonrise, Milky Way shoulder season, and the August partial lunar eclipse.",
            "That is also why an annual calendar post matters for SEO. It captures broad discovery traffic, then feeds internal links into the more specific event pages.",
          ],
        },
        {
          heading: "How to use Solora alongside the 2026 calendar",
          paragraphs: [
            "Use the yearly event list to set expectations, then use Solora for the decision that matters: whether a location is actually worth going to on a given date.",
          ],
          bullets: [
            "Set reminders for eclipse and meteor-shower windows.",
            "Check moon phase and illumination before dark-sky trips.",
            "Compare locations when cloud cover makes your first choice weak.",
            "Use sunrise, sunset, and golden-hour forecasts for the non-astronomy nights between major events.",
          ],
        },
      ]}
      ctaTitle="Keep the 2026 sky calendar in your pocket"
      ctaDescription="Use Solora to turn big annual astronomy dates into practical go-or-no-go shooting decisions."
      relatedLinks={[
        { href: "/blog/total-solar-eclipse-august-2026", label: "Total solar eclipse 2026" },
        { href: "/blog/total-lunar-eclipse-march-2026", label: "March 2026 blood moon" },
        { href: "/blog/perseid-meteor-shower-2026", label: "Perseids 2026" },
      ]}
    />
  )
}
