import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft, Clock, Download } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { absoluteUrl, siteConfig } from "@/lib/site"

type ArticleSection = {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

type BlogArticleTemplateProps = {
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
  const canonicalUrl = absoluteUrl(`/blog/${slug}`)

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
        <header className="w-full border-b border-white/10 bg-black/20 px-4 py-2 backdrop-blur-md md:py-3">
          <div className="container mx-auto flex max-w-7xl items-center justify-between">
            <Link href="/" className="flex items-center gap-2 md:gap-3">
              <img src="/solora-app-icon.png" alt="Solora App Icon" className="h-8 w-8 md:h-10 md:w-10" />
              <span className="text-lg font-bold text-[#E6786E] md:text-xl">Solora</span>
            </Link>
            <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
              <Link href="/" className="text-sm text-white/80 transition-colors hover:text-white lg:text-base">
                Home
              </Link>
              <Link href="/blog" className="text-sm text-white transition-colors hover:text-white lg:text-base">
                Blog
              </Link>
              <Link href="/#download" className="text-sm text-white/80 transition-colors hover:text-white lg:text-base">
                Download
              </Link>
            </nav>
          </div>
        </header>

        <main className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
          <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-[#E6786E] transition-colors hover:text-[#D4695F]">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
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
                <h2 className="text-2xl font-bold text-white md:text-3xl">Related Guides</h2>
                <div className="flex flex-wrap gap-3">
                  {relatedLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
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
                  <Link href="/#download">
                    <Download className="mr-2 h-5 w-5" />
                    Download Solora App
                  </Link>
                </Button>
              </div>
            </div>
          </article>
        </main>

        <footer className="mt-16 border-t border-white/10 bg-black/40 py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8">
              <div className="flex items-center gap-3 md:gap-4">
                <img src="/solora-app-icon.png" alt="Solora" className="h-10 w-10 md:h-12 md:w-12" />
                <div className="text-center md:text-left">
                  <span className="block text-xl font-bold text-[#E6786E] md:text-2xl">Solora</span>
                  <span className="text-xs text-white/60 md:text-sm">Plan the sky, perfect the moment</span>
                </div>
              </div>

              <div className="space-y-1 text-center md:text-right md:space-y-2">
                <p className="text-sm text-white/80 md:text-base">© {new Date().getFullYear()} {siteConfig.author}</p>
                <p className="text-xs text-white/60 md:text-sm">All rights reserved • Available on App Store</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
