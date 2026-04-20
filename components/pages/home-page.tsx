"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Apple, Bell, Camera, ChevronRight, Cloud, MapPin, Moon, Star, Sun, Waves, Watch } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Locale, localizePath, localizedUrl } from "@/lib/i18n"
import { getEvergreenBlogPosts } from "@/lib/blog-posts"
import { featurePageSlugs, getFeaturePageContent, getHomeContent, getUiDictionary } from "@/lib/marketing-content"
import { absoluteUrl, siteConfig } from "@/lib/site"

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

type HomePageProps = {
  locale: Locale
}

export function HomePage({ locale }: HomePageProps) {
  const [currentScreen, setCurrentScreen] = useState(0)
  const content = getHomeContent(locale)
  const ui = getUiDictionary(locale)
  const evergreenPosts = getEvergreenBlogPosts(locale)

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
        <SiteHeader locale={locale} currentPath="/" />

        <main>
          <section className="container mx-auto px-4 py-4 md:py-8 lg:py-10">
            <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="order-2 space-y-5 lg:order-1">
                <div className="space-y-4">
                  <span className="block text-3xl font-bold text-[#E6786E] md:text-4xl lg:text-5xl">Solora</span>
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
                    <div className="flex" role="img" aria-label="5 star rating">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                      ))}
                    </div>
                    <span>{content.ratingLabel}</span>
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
                        {onboardingScreens.map((screen, index) => (
                          <div
                            key={screen.id}
                            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                              index === currentScreen
                                ? "translate-x-0 opacity-100"
                                : index < currentScreen
                                  ? "-translate-x-full opacity-0"
                                  : "translate-x-full opacity-0"
                            }`}
                          >
                            <img
                              src={`/${screen.image}`}
                              alt={screen.alt}
                              className="h-full w-full rounded-[1.3rem] object-cover"
                              loading={index === 0 ? "eager" : "lazy"}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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
                          <img src={`/screenshot-${id}.jpg`} alt={`Solora screenshot ${id}`} className="h-full w-full object-cover" loading="lazy" />
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
                        <Link href={localizePath(locale, `/${slug}`)} className="inline-flex items-center gap-2 font-medium text-[#E6786E]">
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
                      <Link href={localizePath(locale, `/blog/${post.id}`)} className="inline-flex items-center gap-2 font-medium text-[#E6786E]">
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
                    <div className="flex items-center gap-2">
                      <div className="flex" role="img" aria-label="5 star rating">
                        {[...Array(5)].map((_, index) => (
                          <Star key={index} className="h-5 w-5 fill-white text-white" aria-hidden="true" />
                        ))}
                      </div>
                      <span>+1000</span>
                    </div>
                    <div>{ui.freeDownload}</div>
                    <div>{ui.iosPlatformsShort}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter locale={locale} />
      </div>
    </>
  )
}
