import type { Metadata } from "next"

import { BlogArticleTemplate } from "@/components/blog-article-template"
import { siteConfig } from "@/lib/site"

const title = "Partial Lunar Eclipse August 27-28, 2026: How to Photograph the 96% Eclipse"
const description =
  "Plan the August 27-28, 2026 deep partial lunar eclipse with moon timing, forecast strategy, and practical photography ideas for an event that behaves almost like a total eclipse."

export const metadata: Metadata = {
  title: `${title} | Solora Blog`,
  description,
  keywords: ["August 2026 partial lunar eclipse", "96% lunar eclipse", "partial lunar eclipse photography", "August 27 2026 eclipse"],
  openGraph: {
    title,
    description,
    type: "article",
    url: "https://solora.app/blog/partial-lunar-eclipse-august-2026",
    images: [{ url: "https://solora.app/partial-lunar-eclipse-september-2025.png", width: 1200, height: 630, alt: "Deep partial lunar eclipse planning for August 2026" }],
    publishedTime: "2026-01-14T00:00:00.000Z",
    authors: ["Antonio Jose Martinez Sanchez"],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/partial-lunar-eclipse-september-2025.png"], creator: siteConfig.twitterHandle },
  alternates: { canonical: "/blog/partial-lunar-eclipse-august-2026" },
}

export default function PartialLunarEclipseAugust2026Page() {
  return (
    <BlogArticleTemplate
      slug="partial-lunar-eclipse-august-2026"
      title={title}
      description={description}
      category="Astronomy"
      readTime="8 min read"
      image="partial-lunar-eclipse-september-2025.png"
      imageAlt="Deep partial lunar eclipse planning image for August 2026"
      publishedDate="2026-01-14T00:00:00.000Z"
      articleSection="Astronomy"
      wordCount={2400}
      sections={[
        {
          heading: "Why this partial eclipse will get more attention than usual",
          paragraphs: [
            "Not all partial lunar eclipses are equal. A very deep partial eclipse can look dramatically more interesting than a minor partial event, which is why the August 27-28, 2026 eclipse deserves a dedicated guide.",
            "For many viewers, an eclipse approaching 96 percent coverage behaves more like a near-total show than a subtle shadow event.",
          ],
        },
        {
          heading: "How to shoot a deep partial eclipse",
          paragraphs: [
            "This type of eclipse works especially well for before-and-after comparisons and progression sequences. The growing shadow can create stronger contrast than a typical partial event, especially when photographed with a longer lens.",
          ],
          bullets: [
            "Use a telephoto lens if your goal is lunar detail.",
            "Try a sequence composite if you want to show the full progression.",
            "Keep ISO and shutter flexible because brightness changes through the event.",
          ],
        },
        {
          heading: "What to monitor before eclipse night",
          paragraphs: [
            "Your final decision should still come down to local conditions. Cloud cover, haze, and moon altitude matter more than the eclipse headline alone.",
            "This is where Solora-style planning is valuable: you want event timing and local forecast context in the same workflow.",
          ],
        },
        {
          heading: "How it fits into the 2026 eclipse sequence",
          paragraphs: [
            "Late August comes just after the 2026 total solar eclipse and close to Perseid-season attention. Publishing this page also helps you keep a sustained 2026 astronomy narrative alive after the solar-eclipse peak.",
          ],
        },
      ]}
      ctaTitle="Use local forecast context for eclipse night"
      ctaDescription="Plan the August 2026 eclipse with moon timing, weather, and location comparisons in Solora."
      relatedLinks={[
        { href: "/blog/total-lunar-eclipse-march-2026", label: "March 2026 blood moon" },
        { href: "/blog/astronomical-events-2026", label: "Astronomical events 2026" },
        { href: "/blog/perseid-meteor-shower-2026", label: "Perseids 2026" },
      ]}
    />
  )
}
