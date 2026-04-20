import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Locale, localizePath, localizedUrl } from "@/lib/i18n"
import { absoluteUrl, siteConfig } from "@/lib/site"

type FeaturePageProps = {
  locale: Locale
  title: string
  eyebrow: string
  description: string
  heroImage: string
  heroAlt: string
  primaryKeyword: string
  benefits: string[]
  useCases: string[]
  faqs: Array<{ question: string; answer: string }>
  relatedLinks: Array<{ href: string; label: string }>
  slug: string
}

export function SeoFeaturePage({
  locale,
  title,
  eyebrow,
  description,
  heroImage,
  heroAlt,
  primaryKeyword,
  benefits,
  useCases,
  faqs,
  relatedLinks,
  slug,
}: FeaturePageProps) {
  const routePath = `/${slug}`
  const pageUrl = localizedUrl(locale, routePath)
  const copy = {
    en: {
      readPlanningGuides: "Read planning guides",
      whyUse: "Why use Solora for",
      whatYouCanPlan: "What you can plan",
      faq: "FAQ",
      faqHeading: "Questions people ask before choosing a",
      relatedGuides: "Related guides",
    },
    es: {
      readPlanningGuides: "Leer guías de planificación",
      whyUse: "Por qué usar Solora para",
      whatYouCanPlan: "Qué puedes planificar",
      faq: "Preguntas frecuentes",
      faqHeading: "Preguntas que la gente hace antes de elegir una",
      relatedGuides: "Guías relacionadas",
    },
    fr: {
      readPlanningGuides: "Lire les guides de planification",
      whyUse: "Pourquoi utiliser Solora pour",
      whatYouCanPlan: "Ce que vous pouvez planifier",
      faq: "FAQ",
      faqHeading: "Questions que les gens se posent avant de choisir une",
      relatedGuides: "Guides associés",
    },
    it: {
      readPlanningGuides: "Leggi le guide di pianificazione",
      whyUse: "Perché usare Solora per",
      whatYouCanPlan: "Cosa puoi pianificare",
      faq: "FAQ",
      faqHeading: "Domande che le persone fanno prima di scegliere una",
      relatedGuides: "Guide correlate",
    },
    de: {
      readPlanningGuides: "Planungs-Guides lesen",
      whyUse: "Warum Solora für",
      whatYouCanPlan: "Was du planen kannst",
      faq: "FAQ",
      faqHeading: "Fragen, die Menschen stellen, bevor sie eine",
      relatedGuides: "Verwandte Guides",
    },
    pt: {
      readPlanningGuides: "Ler guias de planejamento",
      whyUse: "Por que usar o Solora para",
      whatYouCanPlan: "O que você pode planejar",
      faq: "FAQ",
      faqHeading: "Perguntas que as pessoas fazem antes de escolher um",
      relatedGuides: "Guias relacionados",
    },
    zh: {
      readPlanningGuides: "阅读规划指南",
      whyUse: "为什么用 Solora 来规划",
      whatYouCanPlan: "你可以规划什么",
      faq: "常见问题",
      faqHeading: "人们在选择这类工具前会问的问题",
      relatedGuides: "相关指南",
    },
  }[locale]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#190908] via-[#1E140F] to-[#201B14] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: title,
            url: pageUrl,
            description,
            about: primaryKeyword,
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
              logo: {
                "@type": "ImageObject",
                url: absoluteUrl(siteConfig.icon),
              },
            },
          }),
        }}
      />

      <SiteHeader locale={locale} currentPath={routePath} />

      <main className="container mx-auto max-w-7xl px-4 py-10 md:py-16">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <Badge className="border-[#E6786E]/20 bg-[#E6786E]/15 text-[#F4B4AE]">{eyebrow}</Badge>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-[#E6786E] text-white hover:bg-[#D4695F]"
                asChild
              >
                <Link href={siteConfig.appStoreUrl} target="_blank" rel="noopener noreferrer">
                  {locale === "pt"
                    ? "Baixar na App Store"
                    : locale === "zh"
                      ? "前往 App Store 下载"
                      : "Download on the App Store"}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                asChild
              >
                <Link href={localizePath(locale, "/blog")}>{copy.readPlanningGuides}</Link>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl">
            <img src={heroImage} alt={heroAlt} className="aspect-[16/10] w-full rounded-2xl object-cover" />
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card className="border-white/10 bg-white/5">
            <CardContent className="space-y-4 p-6 md:p-8">
              <h2 className="text-2xl font-bold">
                {copy.whyUse} {primaryKeyword.toLowerCase()}?
              </h2>
              <ul className="space-y-3 text-white/75">
                {benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5">
            <CardContent className="space-y-4 p-6 md:p-8">
              <h2 className="text-2xl font-bold">{copy.whatYouCanPlan}</h2>
              <ul className="space-y-3 text-white/75">
                {useCases.map((useCase) => (
                  <li key={useCase}>{useCase}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mt-12 space-y-6" aria-labelledby="faq-heading">
          <div className="space-y-3">
            <Badge className="border-white/10 bg-white/10 text-white">{copy.faq}</Badge>
            <h2 id="faq-heading" className="text-3xl font-bold">
              {copy.faqHeading} {primaryKeyword.toLowerCase()}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <Card key={faq.question} className="border-white/10 bg-white/5">
                <CardContent className="space-y-3 p-6">
                  <h3 className="text-xl font-bold">{faq.question}</h3>
                  <p className="leading-relaxed text-white/75">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <Badge className="border-white/10 bg-white/10 text-white">{copy.relatedGuides}</Badge>
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
      </main>

      <SiteFooter locale={locale} />
    </div>
  )
}
