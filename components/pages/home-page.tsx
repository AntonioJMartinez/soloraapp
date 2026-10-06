"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Apple, Bell, CalendarDays, Camera, ChevronRight, Cloud, MapPin, Moon, Star, Sun, Waves, Watch } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ResponsiveImage } from "@/components/responsive-image"
import { Locale, localizeAvailablePath, localizedUrl } from "@/lib/i18n"
import { getEvergreenBlogPosts } from "@/lib/blog-posts"
import { featurePageSlugs, getFeaturePageContent, getHomeContent, getUiDictionary } from "@/lib/marketing-content"
import { absoluteUrl, siteConfig } from "@/lib/site"
import { getTrackerPageContent, trackerPageSlugs } from "@/lib/tracker-pages"

const onboardingScreens = [
  { id: 1, image: "onboarding-1.jpg", alt: "Solora main screen showing sunrise and sunset quality ratings with day light schedule" },
  { id: 2, image: "onboarding-2.jpg", alt: "Forecast screen showing personalized weather summaries and aurora predictions" },
  { id: 3, image: "onboarding-3.jpg", alt: "Celestial trackers screen showing sun, moon, and Milky Way positions" },
  { id: 4, image: "onboarding-4.jpg", alt: "Moon phases screen showing lunar cycle tracking and calendar" },
  { id: 5, image: "onboarding-5.jpg", alt: "Upcoming events screen showing astronomical events and eclipses" },
  { id: 6, image: "onboarding-6.jpg", alt: "Milky Way calendar screen showing visibility planning" },
  { id: 7, image: "onboarding-7.jpg", alt: "Reminder screen showing smart notifications" },
  { id: 8, image: "onboarding-8.jpg", alt: "Widgets and Apple Watch preview" },
  { id: 9, image: "onboarding-9.jpg", alt: "Aurora forecasts screen showing KP index and probability metrics" },
]

const featureIcons = [Cloud, Sun, Camera, Moon, Star, Bell, Watch, MapPin, Waves]

const momentImages = [
  { image: "golden-hour-sunset-photography.png", label: "Golden hour", metric: "18:28" },
  { image: "moon-phases-night-sky-photography.png", label: "Moonrise", metric: "74%" },
  { image: "northern-lights-aurora-borealis-photography.png", label: "Aurora", metric: "KP 6" },
  { image: "milky-way-galaxy-night-sky-photography.png", label: "Milky Way", metric: "02:10" },
]

const heroSignals = [
  { label: "Sunset quality", value: "Excellent", icon: Sun },
  { label: "Moonlight", value: "Low", icon: Moon },
  { label: "Cloud cover", value: "12%", icon: Cloud },
]

const sunsetCampaign = {
  "en": {
    "badge": "Sunset photography",
    "title": "Will the sunset be worth photographing?",
    "body": "Learn how to read cloud cover, check the horizon and use forecast changes to choose your viewpoint. Start with a practical sunset-quality checklist.",
    "cta": "Read the sunset prediction guide"
  },
  "es": {
    "badge": "Fotografía de atardeceres",
    "title": "¿Merece la pena salir a fotografiar el atardecer?",
    "body": "Aprende a interpretar nubes, horizonte y cambios de previsión para elegir un mirador con una lista práctica.",
    "cta": "Cómo predecir un atardecer"
  },
  "fr": {
    "badge": "Photographie au coucher du soleil",
    "title": "Comment préparer votre prochaine photo au coucher du soleil ?",
    "body": "Consultez les nuages, l’horizon et la météo avant de choisir un point de vue. Guide disponible en anglais et en espagnol.",
    "cta": "Lire le guide en anglais"
  },
  "it": {
    "badge": "Fotografia al tramonto",
    "title": "Come preparare la prossima fotografia al tramonto?",
    "body": "Valuta nuvole, orizzonte e meteo prima di scegliere un punto di osservazione. Guida in inglese e spagnolo.",
    "cta": "Leggi la guida in inglese"
  },
  "de": {
    "badge": "Sonnenuntergang fotografieren",
    "title": "Wie planst du dein nächstes Sonnenuntergangsfoto?",
    "body": "Prüfe Wolken, Horizont und Wetter, bevor du einen Standort auswählst. Der Guide ist auf Englisch und Spanisch verfügbar.",
    "cta": "Guide auf Englisch lesen"
  },
  "pt": {
    "badge": "Fotografia ao pôr do sol",
    "title": "Como planejar sua próxima foto ao pôr do sol?",
    "body": "Confira nuvens, horizonte e previsão antes de escolher o local. Guia disponível em inglês e espanhol.",
    "cta": "Ler o guia em inglês"
  },
  "zh": {
    "badge": "日落摄影",
    "title": "如何规划下一次日落拍摄？",
    "body": "选择拍摄地点前，查看云量、地平线和天气变化。指南提供英语和西班牙语版本。",
    "cta": "阅读英文指南"
  }
} satisfies Record<Locale, { badge: string; title: string; body: string; cta: string }>

type HomePageProps = {
  locale: Locale
}

export function HomePage({ locale }: HomePageProps) {
  const [currentScreen, setCurrentScreen] = useState(0)
  const content = getHomeContent(locale)
  const ui = getUiDictionary(locale)
  const evergreenPosts = getEvergreenBlogPosts(locale)
  const sunset = sunsetCampaign[locale]
  const activeOnboardingScreen = onboardingScreens[currentScreen]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % onboardingScreens.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

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
            url: localizedUrl(locale, "/"),
            inLanguage: locale,
            mainEntity: {
              "@type": "MobileApplication",
              name: siteConfig.name,
              applicationCategory: "UtilitiesApplication",
              operatingSystem: ["iOS", "iPadOS", "watchOS", "macOS"],
              downloadUrl: siteConfig.appStoreUrl,
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Person",
                name: siteConfig.author,
              },
              screenshot: onboardingScreens.map((screen) => absoluteUrl(`/${screen.image}`)),
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-[#190908] via-[#1E140F] to-[#201B14]">
        <SiteHeader locale={locale} />

        <main>
          <section className="container mx-auto px-4 py-4 md:py-8 lg:py-10">
            <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="order-2 space-y-5 lg:order-1">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold leading-tight text-[#EDF4F7] md:text-5xl lg:text-7xl">
                    <span className="block">{content.heroHeadingLine1}</span>
                    <span className="block">{content.heroHeadingLine2}</span>
                  </h1>
                  <p className="text-lg leading-relaxed text-white/80 md:text-xl">{content.heroBody}</p>
                  <p className="max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">{content.heroSubbody}</p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="w-full rounded-2xl bg-[#E6786E] px-8 py-6 text-lg text-white shadow-2xl transition-all hover:bg-[#D4695F] hover:shadow-[#E6786E]/25 sm:w-auto"
                    asChild
                  >
                    <Link href={siteConfig.appStoreUrl} target="_blank" rel="noopener noreferrer">
                      <Apple className="mr-3 h-6 w-6" aria-hidden="true" />
                      {ui.downloadOnAppStore}
                      <ChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>

                <div className="flex flex-col gap-3 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    <span>{ui.freeDownload}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Apple className="h-4 w-4" aria-hidden="true" />
                    <span>{ui.iosPlatformsLong}</span>
                  </div>
                </div>
              </div>

              <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
                <div className="relative mx-auto w-full max-w-[220px] lg:mx-0 lg:max-w-[280px]" style={{ maxHeight: "70vh" }}>
                  <div className="rounded-[2.2rem] bg-black p-2 shadow-2xl">
                    <div className="rounded-[1.8rem] bg-black p-1">
                      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.5rem] bg-black">
                        <ResponsiveImage
                          key={activeOnboardingScreen.id}
                          src={`/${activeOnboardingScreen.image}`}
                          alt={activeOnboardingScreen.alt}
                          sizes="(min-width: 1024px) 280px, 220px"
                          responsiveWidths={[480, 589]}
                          width={589}
                          height={1280}
                          className="absolute inset-0 h-full w-full rounded-[1.3rem] object-cover"
                          loading="eager"
                          decoding="async"
                          fetchPriority="high"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 py-8 md:py-12">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#E6786E]/25 bg-gradient-to-r from-[#E6786E]/20 via-white/5 to-purple-500/10 p-6 md:p-10">
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                <div className="space-y-4">
                  <Badge className="border-[#E6786E]/30 bg-[#E6786E]/20 text-[#F4B4AE]">{sunset.badge}</Badge>
                  <h2 className="max-w-4xl text-3xl font-bold text-white md:text-5xl">{sunset.title}</h2>
                  <p className="max-w-3xl text-lg leading-relaxed text-white/75">{sunset.body}</p>
                </div>
                <Button size="lg" className="bg-[#E6786E] text-white hover:bg-[#D4695F]" asChild>
                  <Link href={localizeAvailablePath(locale, "/blog/sunset-quality-prediction-guide")}>
                    {sunset.cta}
                    <ChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 py-10 md:py-16">
            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
              {content.planningCards.map((card) => (
                <Card key={card.title} className="border-white/10 bg-white/5 backdrop-blur-sm">
                  <CardContent className="space-y-4 p-6 md:p-8">
                    <Badge variant="secondary" className="border-white/10 bg-white/10 text-white">
                      {card.badge}
                    </Badge>
                    <h2 className="text-2xl font-bold text-white md:text-3xl">{card.title}</h2>
                    <p className="leading-relaxed text-white/75">{card.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="features" className="container mx-auto px-4 py-12 md:py-20 lg:py-28">
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 space-y-4 text-center md:mb-16">
                <Badge variant="secondary" className="border-purple-500/30 bg-purple-500/20 px-4 py-2 text-sm text-purple-300">
                  {content.featuresBadge}
                </Badge>
                <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                  {content.featuresHeading}
                  <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                    {" "}
                    {content.featuresHeadingAccent}
                  </span>
                </h2>
                <p className="mx-auto max-w-4xl text-lg text-white/70">{content.featuresDescription}</p>
              </div>

              <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                {[1, 2, 3, 4].map((id) => (
                  <div key={id} className="w-full" style={{ maxHeight: "75vh" }}>
                    <div className="rounded-[2rem] bg-black p-1.5 shadow-2xl">
                      <div className="rounded-[1.6rem] bg-black p-1">
                        <div className="aspect-[9/19.5] overflow-hidden rounded-[1.3rem] bg-black">
                          <ResponsiveImage
                            src={`/screenshot-${id}.jpg`}
                            alt={`Solora screenshot ${id}`}
                            sizes="(min-width: 768px) 22vw, 46vw"
                            width={1206}
                            height={2622}
                            className="h-full w-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {content.features.map((feature, index) => {
                  const Icon = featureIcons[index]
                  return (
                    <Card key={feature.title} className="group border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                      <CardContent className="space-y-5 p-6 text-center md:p-8">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#E6786E] to-[#D4695F] shadow-2xl transition-transform duration-300 group-hover:scale-110">
                          <Icon className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white md:text-2xl">{feature.title}</h3>
                        <p className="leading-relaxed text-white/70">{feature.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 py-12 md:py-20">
            <div className="mx-auto max-w-7xl space-y-8">
              <div className="max-w-3xl space-y-4">
                <Badge variant="secondary" className="border-white/10 bg-white/10 text-white">
                  {content.clustersBadge}
                </Badge>
                <h2 className="text-3xl font-bold text-white md:text-5xl">{content.clustersHeading}</h2>
                <p className="text-lg text-white/70">{content.clustersDescription}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {featurePageSlugs.map((slug) => {
                  const page = getFeaturePageContent(slug, locale)

                  return (
                    <Card key={slug} className="border-white/10 bg-white/5 transition-colors hover:bg-white/10">
                      <CardContent className="space-y-4 p-6">
                        <h3 className="text-2xl font-bold text-white">{page.primaryKeyword}</h3>
                        <p className="leading-relaxed text-white/70">{page.description}</p>
                        <Link href={localizeAvailablePath(locale, `/${slug}`)} className="inline-flex items-center gap-2 font-medium text-[#E6786E]">
                          {content.clustersCta}
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  )
                })}
                {trackerPageSlugs.map((slug) => {
                  const page = getTrackerPageContent(slug, locale)

                  return (
                    <Card key={slug} className="border-[#E6786E]/20 bg-[#E6786E]/5 transition-colors hover:bg-[#E6786E]/10">
                      <CardContent className="space-y-4 p-6">
                        <Badge variant="outline" className="border-[#E6786E]/30 text-[#F4B4AE]">
                          {page.eyebrow}
                        </Badge>
                        <h3 className="text-2xl font-bold text-white">{page.primaryKeyword}</h3>
                        <p className="leading-relaxed text-white/70">{page.description}</p>
                        <Link href={localizeAvailablePath(locale, `/${slug}`)} className="inline-flex items-center gap-2 font-medium text-[#E6786E]">
                          {content.clustersCta}
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 py-12 md:py-20">
            <div className="mx-auto max-w-7xl space-y-8">
              <div className="max-w-3xl space-y-4">
                <Badge variant="secondary" className="border-white/10 bg-white/10 text-white">
                  {content.evergreenBadge}
                </Badge>
                <h2 className="text-3xl font-bold text-white md:text-5xl">{content.evergreenHeading}</h2>
                <p className="text-lg text-white/70">{content.evergreenDescription}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {evergreenPosts.map((post) => (
                  <Card key={post.id} className="border-white/10 bg-white/5 transition-colors hover:bg-white/10">
                    <CardContent className="space-y-4 p-6">
                      <Badge variant="outline" className="border-[#E6786E]/30 text-[#E6786E]">
                        {post.category}
                      </Badge>
                      <h3 className="text-2xl font-bold text-white">{post.title}</h3>
                      <p className="leading-relaxed text-white/70">{post.excerpt}</p>
                      <Link href={localizeAvailablePath(locale, `/blog/${post.id}`)} className="inline-flex items-center gap-2 font-medium text-[#E6786E]">
                        {content.evergreenCta}
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="download" className="container mx-auto px-4 py-12 md:py-20 lg:py-28">
            <div className="mx-auto max-w-6xl">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#E6786E] via-[#D4695F] to-[#C25A50] p-8 text-center text-white md:p-12 lg:p-20">
                <div className="relative mx-auto max-w-4xl space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold md:text-5xl lg:text-6xl">{content.downloadHeading}</h2>
                    <p className="text-xl opacity-90 md:text-2xl">{content.downloadBody}</p>
                  </div>

                  <Button
                    size="lg"
                    className="rounded-2xl bg-white px-12 py-6 text-xl font-bold text-[#E6786E] shadow-2xl transition-all hover:bg-gray-100 hover:shadow-white/25"
                    asChild
                  >
                    <Link href={siteConfig.appStoreUrl} target="_blank" rel="noopener noreferrer">
                      <Apple className="mr-3 h-7 w-7" aria-hidden="true" />
                      {ui.downloadSolora}
                      <ChevronRight className="ml-2 h-6 w-6" aria-hidden="true" />
                    </Link>
                  </Button>

                  <div className="flex flex-col items-center justify-center gap-6 text-lg opacity-90 sm:flex-row sm:gap-12">
                    <div>{ui.freeDownload}</div>
                    <div>{ui.iosPlatformsShort}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter locale={locale} currentPath="/" />
      </div>
    </>
  )
}
