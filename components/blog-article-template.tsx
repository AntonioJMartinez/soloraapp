import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft, Clock, Download } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Locale, localizePath, localizedUrl } from "@/lib/i18n"
import { getUiDictionary } from "@/lib/marketing-content"
import { absoluteUrl, siteConfig } from "@/lib/site"

type ArticleSection = {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

type BlogArticleTemplateProps = {
  locale: Locale
  title: string
  description: string
  category: string
  readTime: string
  image: string
  imageAlt: string
  publishedDate: string
  modifiedDate?: string
  articleSection: string
  wordCount: number
  slug: string
  sections: ArticleSection[]
  ctaTitle: string
  ctaDescription: string
  relatedLinks?: Array<{ href: string; label: string }>
  extraHeaderContent?: ReactNode
}

export function BlogArticleTemplate({
  locale,
  title,
  description,
  category,
  readTime,
  image,
  imageAlt,
  publishedDate,
  modifiedDate,
  articleSection,
  wordCount,
  slug,
  sections,
  ctaTitle,
  ctaDescription,
  relatedLinks = [],
  extraHeaderContent,
}: BlogArticleTemplateProps) {
  const canonicalUrl = localizedUrl(locale, `/blog/${slug}`)
  const ui = getUiDictionary(locale)
  const routePath = `/blog/${slug}`

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description,
            image: absoluteUrl(`/${image}`),
            author: {
              "@type": "Person",
              name: siteConfig.author,
            },
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
              logo: {
                "@type": "ImageObject",
                url: absoluteUrl(siteConfig.icon),
              },
            },
            datePublished: publishedDate,
            dateModified: modifiedDate ?? publishedDate,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": canonicalUrl,
            },
            articleSection,
            wordCount,
            timeRequired: `PT${Math.max(1, parseInt(readTime, 10) || 1)}M`,
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-[#190908] via-[#1E140F] to-[#201B14] text-white">
        <SiteHeader locale={locale} currentPath={routePath} />

        <main className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
          <Link
            href={localizePath(locale, "/blog")}
            className="mb-8 inline-flex items-center gap-2 text-[#E6786E] transition-colors hover:text-[#D4695F]"
          >
            <ArrowLeft className="h-4 w-4" />
            {ui.backToBlog}
          </Link>

          <article className="space-y-8">
            <header className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-white/60">
                <Badge variant="outline" className="border-[#E6786E]/30 text-[#E6786E]">
                  {category}
                </Badge>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {readTime}
                </div>
              </div>

              <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">{title}</h1>
              <p className="text-lg leading-relaxed text-white/80 md:text-xl">{description}</p>
              {extraHeaderContent}

              <div className="aspect-video overflow-hidden rounded-2xl">
                <img src={`/${image}`} alt={imageAlt} className="h-full w-full object-cover" />
              </div>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-8 text-white/90 leading-relaxed">
                {sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">{section.heading}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets ? (
                      <ul className="mb-4 list-disc list-inside space-y-2 text-white/80">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>
            </div>

            {relatedLinks.length ? (
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white md:text-3xl">{ui.relatedGuides}</h2>
                <div className="flex flex-wrap gap-3">
                  {relatedLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={localizePath(locale, link.href)}
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}

            <div className="relative mt-12 overflow-hidden rounded-2xl bg-gradient-to-br from-[#E6786E] via-[#D4695F] to-[#C25A50] p-8 text-center text-white md:p-12">
              <div className="absolute inset-0 opacity-20" aria-hidden="true"></div>
              <div className="relative space-y-6">
                <h2 className="text-2xl font-bold md:text-3xl">{ctaTitle}</h2>
                <p className="text-lg opacity-90">{ctaDescription}</p>
                <Button
                  size="lg"
                  className="bg-white px-8 py-4 text-lg font-bold text-[#E6786E] shadow-2xl transition-all hover:bg-gray-100 hover:shadow-white/25"
                  asChild
                >
                  <Link href={localizePath(locale, "/#download")}>
                    <Download className="mr-2 h-5 w-5" />
                    {ui.downloadSolora}
                  </Link>
                </Button>
              </div>
            </div>
          </article>
        </main>

        <SiteFooter locale={locale} />
      </div>
    </>
  )
}
