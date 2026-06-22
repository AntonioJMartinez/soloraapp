import type { MetadataRoute } from "next"

import { blogArticles } from "@/lib/blog-posts"
import { eclipseGuideSlugs } from "@/lib/eclipse-guides"
import { buildLanguageAlternates, getAvailableLocalesForPath, localizedUrl } from "@/lib/i18n"
import { infoPageSlugs } from "@/lib/info-pages"
import { featurePageSlugs } from "@/lib/marketing-content"
import { trackerPageSlugs } from "@/lib/tracker-pages"

export const dynamic = "force-static"

const staticRoutes = [
  "/",
  "/blog",
  "/press-kit",
  ...featurePageSlugs.map((slug) => `/${slug}`),
  ...trackerPageSlugs.map((slug) => `/${slug}`),
  ...infoPageSlugs.map((slug) => `/${slug}`),
]

const priorityBlogSlugs = new Set([
  "total-solar-eclipse-august-2026",
  "astronomical-events-2026",
  "aurora-forecast-2026",
  "total-lunar-eclipse-march-2026",
  "partial-lunar-eclipse-august-2026",
  "moon-photography-calendar-2026",
  "supermoons-2026",
  "golden-hour-photography-guide",
  "moon-phases-photography",
])

export default function sitemap(): MetadataRoute.Sitemap {
  const contentLastModified = new Date("2026-06-09T00:00:00.000Z")

  const staticEntries = staticRoutes.flatMap((route) =>
    getAvailableLocalesForPath(route).map((locale) => ({
      url: localizedUrl(locale, route),
      lastModified: contentLastModified,
      changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "/" ? 1 : route === "/blog" ? 0.9 : 0.8,
      alternates: {
        languages: buildLanguageAlternates(route, getAvailableLocalesForPath(route)),
      },
    })),
  )

  const blogEntries = (["en", "es"] as const).flatMap((locale) =>
    blogArticles.filter((post) => priorityBlogSlugs.has(post.slug)).map((post) => ({
      url: localizedUrl(locale, `/blog/${post.slug}`),
      lastModified: new Date(
        post.slug === "total-solar-eclipse-august-2026" ? "2026-06-09" : post.publishDate,
      ),
      changeFrequency: "monthly" as const,
      priority: post.slug === "total-solar-eclipse-august-2026" ? 0.9 : 0.75,
      alternates: {
        languages: buildLanguageAlternates(`/blog/${post.slug}`, ["en", "es"]),
      },
    })),
  )

  const eclipseGuideEntries = eclipseGuideSlugs.map((slug) => ({
    url: localizedUrl("es", `/${slug}`),
    lastModified: contentLastModified,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }))

  return [...staticEntries, ...blogEntries, ...eclipseGuideEntries]
}
