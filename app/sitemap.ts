import type { MetadataRoute } from "next"

import { blogPosts } from "@/lib/blog-posts"
import { siteConfig } from "@/lib/site"

const staticRoutes = [
  "/",
  "/blog",
  "/press-kit",
  "/sunrise-sunset-app",
  "/golden-hour-photography-app",
  "/moon-phase-calendar-app",
  "/aurora-forecast-app",
  "/milky-way-planner",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "/" : `${route}/`}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly" as const,
    priority: route === "/" ? 1 : route === "/blog" ? 0.9 : 0.8,
  }))

  const blogEntries = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.id}/`,
    lastModified: new Date(post.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }))

  return [...staticEntries, ...blogEntries]
}
