import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"

const exportDirectory = "out"
const sitemapPath = join(exportDirectory, "sitemap.xml")

if (!existsSync(sitemapPath)) {
  throw new Error("Missing out/sitemap.xml. Run the production build before validating SEO.")
}

const sitemap = readFileSync(sitemapPath, "utf8")
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
const issues = []

for (const url of sitemapUrls) {
  const { pathname } = new URL(url)
  const htmlPath = pathname === "/" ? join(exportDirectory, "index.html") : join(exportDirectory, pathname, "index.html")

  if (!existsSync(htmlPath)) {
    issues.push(`${url}: exported HTML is missing`)
    continue
  }

  const html = readFileSync(htmlPath, "utf8")
  const canonicals = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map((match) => match[1])

  if (canonicals.length !== 1) {
    issues.push(`${url}: expected one canonical link, found ${canonicals.length}`)
  } else if (canonicals[0] !== url) {
    issues.push(`${url}: canonical points to ${canonicals[0]}`)
  }

  if (/<meta name="robots" content="[^"]*noindex/i.test(html)) {
    issues.push(`${url}: sitemap URL is marked noindex`)
  }

  if (/window\.location\.replace|solora-locale-redirected/.test(html)) {
    issues.push(`${url}: automatic locale redirect found`)
  }

  for (const match of html.matchAll(/href="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
    const href = match[1]
    const looksLikeFile = /\.[a-z0-9]+$/i.test(href)

    if (href !== "/" && !href.endsWith("/") && !looksLikeFile) {
      issues.push(`${url}: internal link omits trailing slash (${href})`)
    }
  }
}

if (issues.length > 0) {
  console.error(`SEO validation failed with ${issues.length} issue(s):`)
  for (const issue of issues) {
    console.error(`- ${issue}`)
  }
  process.exitCode = 1
} else {
  console.log(`SEO validation passed for ${sitemapUrls.length} canonical sitemap URLs.`)
}
