import type { MetadataRoute } from "next"

import { blogArticles } from "@/lib/blog-posts"
import { buildLanguageAlternates, locales, localizedUrl } from "@/lib/i18n"
import { featurePageSlugs } from "@/lib/marketing-content"

export const dynamic = "force-static"

const staticRoutes = [
  "/",
  "/blog",
  "/press-kit",
  ...featurePageSlugs.map((slug) => `/${slug}`),
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries = locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: localizedUrl(locale, route),
      lastModified: now,
      changeFrequency: (route === "/" ? "weekly" : "monthly") as const,
      priority: route === "/" ? 1 : route === "/blog" ? 0.9 : 0.8,
      alternates: {
        languages: buildLanguageAlternates(route),
      },
    })),
  )

  const blogEntries = locales.flatMap((locale) =>
    blogArticles.map((post) => ({
      url: localizedUrl(locale, `/blog/${post.slug}`),
      lastModified: new Date(post.publishDate),
      changeFrequency: "monthly" as const,
      priority: 0.75,
      alternates: {
        languages: buildLanguageAlternates(`/blog/${post.slug}`),
      },
    })),
  )

  return [...staticEntries, ...blogEntries]
}
