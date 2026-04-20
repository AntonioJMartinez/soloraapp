import Link from "next/link"
import { Apple, Download } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Locale, localizedUrl } from "@/lib/i18n"
import { getPressKitContent, getUiDictionary } from "@/lib/marketing-content"
import { siteConfig } from "@/lib/site"

type PressKitPageProps = {
  locale: Locale
}

export function PressKitPage({ locale }: PressKitPageProps) {
  const content = getPressKitContent(locale)
  const ui = getUiDictionary(locale)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: content.title,
            description: content.description,
            url: localizedUrl(locale, "/press-kit"),
            inLanguage: locale,
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-[#190908] via-[#1E140F] to-[#201B14]">
        <SiteHeader locale={locale} currentPath="/press-kit" />

        <main className="container mx-auto max-w-7xl px-4 py-8 md:py-12">
          <section className="mb-16 space-y-8 text-center md:mb-20">
            <Badge variant="secondary" className="border-[#E6786E]/30 bg-[#E6786E]/20 px-4 py-2 text-sm text-[#F4B4AE]">
              {content.heroBadge}
            </Badge>
            <h1 className="text-4xl font-bold text-white md:text-6xl lg:text-7xl">
              {content.heroHeading}{" "}
              <span className="bg-gradient-to-r from-[#E6786E] to-[#D4695F] bg-clip-text text-transparent">{content.heroHeadingAccent}</span>
            </h1>
            <p className="mx-auto max-w-4xl text-xl leading-relaxed text-white/80 md:text-2xl">{content.heroBody}</p>
          </section>

          <section className="mb-16 md:mb-20">
            <div className="text-center">
              <img src="/soloraBento.jpg" alt="Solora press image" className="mx-auto w-full max-w-4xl rounded-2xl shadow-2xl" />
            </div>
          </section>

          <section className="mb-16 md:mb-20">
            <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
              <CardContent className="space-y-6 p-8 text-center md:p-12">
                <h2 className="text-3xl font-bold text-white md:text-4xl">{content.aboutHeading}</h2>
                {content.aboutBody.map((paragraph) => (
                  <p key={paragraph} className="mx-auto max-w-4xl text-lg leading-relaxed text-white/80">
                    {paragraph}
                  </p>
                ))}
                <div className="flex flex-wrap justify-center gap-2">
                  {content.aboutTags.map((tag) => (
                    <Badge key={tag} className="border-[#E6786E]/30 bg-[#E6786E]/20 text-[#E6786E]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16 md:mb-20">
            <div className="mb-12 space-y-4 text-center md:mb-16">
              <Badge variant="secondary" className="border-blue-500/30 bg-blue-500/20 px-4 py-2 text-sm text-blue-300">
                {content.whatsNewBadge}
              </Badge>
              <h2 className="text-3xl font-bold text-white md:text-5xl">{content.whatsNewHeading}</h2>
              <p className="mx-auto max-w-4xl text-xl text-white/70">{content.whatsNewBody}</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {content.features.map((feature) => (
                <Card key={feature.title} className="border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                  <CardContent className="space-y-5 p-8">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#E6786E] to-[#D4695F]" />
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                    <p className="leading-relaxed text-white/70">{feature.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16 md:mb-20">
            <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="mb-12 space-y-6 text-center">
                  <h2 className="text-3xl font-bold text-white md:text-4xl">{content.resourcesHeading}</h2>
                  <p className="mx-auto max-w-3xl text-lg text-white/80">{content.resourcesBody}</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {content.resourceCards.map((card) => (
                    <Button key={card.title} variant="outline" size="lg" className="h-auto flex-col space-y-2 border-white/20 bg-white/10 p-6 text-white hover:bg-white/20" asChild>
                      <a href={card.href} download={card.download}>
                        <Download className="h-6 w-6" />
                        <span className="text-lg font-bold">{card.title}</span>
                        <span className="text-center text-sm text-white/70">{card.description}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="rounded-3xl bg-gradient-to-br from-[#E6786E] via-[#D4695F] to-[#C25A50] p-8 text-center text-white md:p-12">
              <div className="mx-auto max-w-3xl space-y-6">
                <h2 className="text-3xl font-bold md:text-4xl">{content.downloadHeading}</h2>
                <p className="text-lg opacity-90 md:text-xl">{content.downloadBody}</p>
                <Button size="lg" className="bg-white px-10 py-6 text-lg font-bold text-[#E6786E] hover:bg-gray-100" asChild>
                  <Link href={siteConfig.appStoreUrl} target="_blank" rel="noopener noreferrer">
                    <Apple className="mr-2 h-5 w-5" />
                    {ui.downloadOnAppStore}
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter locale={locale} />
      </div>
    </>
  )
}
