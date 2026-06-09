import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Locale, localizeAvailablePath, localizedUrl } from "@/lib/i18n"
import { siteConfig } from "@/lib/site"

export type InfoPageSection = {
  heading: string
  paragraphs: string[]
  links?: Array<{ href: string; label: string; external?: boolean }>
}

type InfoPageProps = {
  locale: Locale
  slug: string
  eyebrow: string
  title: string
  description: string
  updated: string
  sections: InfoPageSection[]
}

export function InfoPage({ locale, slug, eyebrow, title, description, updated, sections }: InfoPageProps) {
  const routePath = `/${slug}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#190908] via-[#1E140F] to-[#201B14] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: title,
            description,
            url: localizedUrl(locale, routePath),
            inLanguage: locale,
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
            },
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
            <p className="text-sm text-white/50">{updated}</p>
          </header>

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-2xl font-bold md:text-3xl">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-white/75">
                    {paragraph}
                  </p>
                ))}
                {section.links?.length ? (
                  <div className="flex flex-wrap gap-3">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.external ? link.href : localizeAvailablePath(locale, link.href)}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[#F4B4AE] transition-colors hover:bg-white/10"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </article>
      </main>

      <SiteFooter locale={locale} currentPath={routePath} />
    </div>
  )
}
