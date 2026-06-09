import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Locale, localizePath, localizedUrl } from "@/lib/i18n"
import { siteConfig } from "@/lib/site"

export type EclipseGuideSection = {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

type EclipseGuidePageProps = {
  locale: Locale
  slug: string
  title: string
  description: string
  eyebrow: string
  sections: EclipseGuideSection[]
  sources: Array<{ href: string; label: string }>
}

export function EclipseGuidePage({
  locale,
  slug,
  title,
  description,
  eyebrow,
  sections,
  sources,
}: EclipseGuidePageProps) {
  const routePath = `/${slug}`
  const copy =
    locale === "es"
      ? {
          updated: "Actualizado: 9 de junio de 2026",
          sources: "Fuentes oficiales",
          mainGuide: "Guía principal del eclipse",
          tracker: "Planificar con el tracker solar",
          download: "Descargar Solora",
        }
      : {
          updated: "Updated: June 9, 2026",
          sources: "Official sources",
          mainGuide: "Main eclipse guide",
          tracker: "Plan with the Sun tracker",
          download: "Download Solora",
        }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#190908] via-[#1E140F] to-[#201B14] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: title,
                description,
                datePublished: "2026-06-09",
                dateModified: "2026-06-09",
                mainEntityOfPage: localizedUrl(locale, routePath),
                author: { "@type": "Person", name: siteConfig.author },
                publisher: { "@type": "Organization", name: siteConfig.name },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Solora", item: localizedUrl(locale, "/") },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: copy.mainGuide,
                    item: localizedUrl(locale, "/blog/total-solar-eclipse-august-2026"),
                  },
                  { "@type": "ListItem", position: 3, name: title, item: localizedUrl(locale, routePath) },
                ],
              },
            ],
          }),
        }}
      />

      <SiteHeader locale={locale} />

      <main className="container mx-auto max-w-4xl px-4 py-10 md:py-16">
        <article className="space-y-10">
          <header className="space-y-5">
            <Badge className="border-[#E6786E]/20 bg-[#E6786E]/15 text-[#F4B4AE]">{eyebrow}</Badge>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
            <p className="text-lg leading-relaxed text-white/75 md:text-xl">{description}</p>
            <p className="text-sm text-white/50">{copy.updated}</p>
          </header>

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-2xl font-bold md:text-3xl">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-white/80">
                    {paragraph}
                  </p>
                ))}
                {section.bullets?.length ? (
                  <ul className="list-disc space-y-2 pl-6 text-white/75">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <section className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">{copy.sources}</h2>
            <ul className="space-y-3">
              {sources.map((source) => (
                <li key={source.href}>
                  <Link href={source.href} target="_blank" rel="noopener noreferrer" className="text-[#F4B4AE] hover:underline">
                    {source.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="flex flex-col gap-3 rounded-3xl bg-gradient-to-br from-[#E6786E] to-[#C25A50] p-7 sm:flex-row sm:flex-wrap">
            <Button asChild className="bg-white text-[#C25A50] hover:bg-white/90">
              <Link href={localizePath(locale, "/blog/total-solar-eclipse-august-2026")}>{copy.mainGuide}</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10">
              <Link href={localizePath(locale, "/sun-tracker-app")}>{copy.tracker}</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10">
              <Link href={siteConfig.appStoreUrl} target="_blank" rel="noopener noreferrer">
                {copy.download}
              </Link>
            </Button>
          </section>
        </article>
      </main>

      <SiteFooter locale={locale} currentPath="/" />
    </div>
  )
}
