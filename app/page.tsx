"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Apple, Camera, Bell, ChevronRight, Cloud, Sun, Moon, Watch, MapPin, Waves } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

import { Oswald } from "next/font/google"

const oswald = Oswald({ subsets: ["latin"] })

const onboardingScreens = [
  {
    id: 1,
    image: "onboarding-1.jpg",
    alt: "Solora main screen showing sunrise and sunset quality ratings with detailed day lights schedule",
  },
  {
    id: 2,
    image: "onboarding-2.jpg",
    alt: "Forecasts Anywhere screen showing personalized weather summaries for Madrid and Reykjavik with aurora predictions",
  },
  {
    id: 3,
    image: "onboarding-3.jpg",
    alt: "Celestial Trackers screen showing AR tracking of sun, moon, and Milky Way with map and sky visualization",
  },
  {
    id: 4,
    image: "onboarding-4.jpg",
    alt: "Moon Phases screen showing lunar cycle tracking with interactive calendar and full moon details",
  },
  {
    id: 5,
    image: "onboarding-5.jpg",
    alt: "Upcoming events screen showing astronomical events including supermoon, solar eclipse, and meteor shower",
  },
  {
    id: 6,
    image: "onboarding-6.jpg",
    alt: "Milky Way Calendar screen showing visibility calendar and galactic center appearance details",
  },
  {
    id: 7,
    image: "onboarding-7.jpg",
    alt: "Reminders screen showing smart notifications for magical sunset, supermoon, and aurora alerts",
  },
  {
    id: 8,
    image: "onboarding-8.jpg",
    alt: "Widgets and Watch screen showing comprehensive forecast widgets and Barcelona weather summary",
  },
  {
    id: 9,
    image: "onboarding-9.jpg",
    alt: "Aurora Forecasts screen showing KP index, probability metrics, and real-time northern lights prediction map",
  },
]

export default function SoloraLanding() {
  const [currentScreen, setCurrentScreen] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % onboardingScreens.length)
    }, 3000) // Change screen every 3 seconds

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
            name: "Solora - Plan the Sky, Perfect the Moment",
            description: "Track sunrises, sunsets, moon phases, eclipses, and celestial events with precision",
            url: "https://solora.app",
            mainEntity: {
              "@type": "MobileApplication",
              name: "Solora - Atardecer & Amanecer",
              applicationCategory: "UtilitiesApplication",
              operatingSystem: ["iOS", "iPadOS", "watchOS", "macOS"],
              downloadUrl: "https://apps.apple.com/es/app/atardecer-amanecer-solora/id6502008343?platform=iphone",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                ratingCount: "1000",
                bestRating: "5",
                worstRating: "1",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Person",
                name: "Antonio Jose Martinez Sanchez",
              },
              publisher: {
                "@type": "Organization",
                name: "Antonio Jose Martinez Sanchez",
              },
              datePublished: "2024-01-01",
              dateModified: "2024-12-19",
              inLanguage: "en-US",
              screenshot: onboardingScreens.map((screen) => `https://solora.app${screen.image}`),
              featureList: [
                "AI Sky & Weather Forecasts",
                "Golden Hour & Night Sky Planning",
                "Celestial Trackers with AR",
                "Moon Phases & Calendar",
                "Astronomical Events Tracking",
                "Smart Reminders & Alerts",
                "Widgets & Apple Watch Support",
                "Unlimited Locations Worldwide",
                "Marine & Tides Information",
              ],
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://solora.app",
                },
              ],
            },
            potentialAction: {
              "@type": "DownloadAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://apps.apple.com/es/app/atardecer-amanecer-solora/id6502008343?platform=iphone",
                actionPlatform: ["http://schema.org/IOSPlatform", "http://schema.org/MacOSPlatform"],
              },
            },
          }),
        }}
      />
      <div className={`min-h-screen bg-gradient-to-br from-[#190908] via-[#1E140F] to-[#201B14] ${oswald.className}`}>
        {/* Header */}
        <header
          className="w-full px-4 py-2 md:py-3 bg-black/20 backdrop-blur-md border-b border-white/10"
          role="banner"
        >
          <div className="container mx-auto flex items-center justify-between max-w-7xl">
            <div className="flex items-center gap-2 md:gap-3">
              <img
                src="/solora-app-icon.png"
                alt="Solora App - Astronomical Events Tracker Icon"
                className="w-8 h-8 md:w-10 md:h-10"
              />
              <span className="text-lg md:text-xl font-bold text-[#E6786E]">Solora</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 lg:gap-8" role="navigation" aria-label="Main navigation">
              <Link href="#features" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">
                Features
              </Link>
              <Link href="/blog" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">
                Blog
              </Link>
              <Link href="#download" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">
                Download
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <main>
          <section className="container mx-auto px-4 py-2 sm:py-4 md:py-6 lg:py-8" role="main">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 xl:gap-16 items-center max-w-7xl mx-auto">
              <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
                <div className="space-y-3 md:space-y-4">
                  <span className="text-[#E6786E] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold block">
                    Solora
                  </span>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight">
                    <span className="text-[#EDF4F7] block">Plan the sky,</span>
                    <span className="text-[#EDF4F7] block w-full min-w-max tracking-wide whitespace-nowrap">
                      perfect the moment
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed">
                    The best AI forecasts for sunsets, weathers, moons, night skies, milky way, northern lights, tides
                    and more.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Button
                    size="lg"
                    className="bg-[#E6786E] hover:bg-[#D4695F] text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-xl md:rounded-2xl shadow-2xl hover:shadow-[#E6786E]/25 transition-all group w-full sm:w-auto"
                    asChild
                  >
                    <Link
                      href="https://apps.apple.com/es/app/atardecer-amanecer-solora/id6502008343?platform=iphone"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Download Solora app from Apple App Store"
                    >
                      <Apple className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" aria-hidden="true" />
                      Download on App Store
                      <ChevronRight
                        className="w-4 h-4 md:w-5 md:h-5 ml-1 md:ml-2 group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                    </Link>
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <div className="flex" role="img" aria-label="5 star rating">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <span>+1000 Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Apple className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />
                    <span>iOS, watchOS, iPadOS, macOS</span>
                  </div>
                </div>
              </div>

              <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[168px] sm:max-w-[196px] md:max-w-[210px] lg:max-w-[240px] xl:max-w-[280px] mx-auto lg:mx-0" style={{ maxHeight: '70vh' }}>
                  {/* Phone mockup with animated onboarding screens */}
                  <div className="bg-black rounded-[2rem] md:rounded-[2.5rem] p-1.5 md:p-2 shadow-2xl">
                    <div className="bg-black rounded-[1.5rem] md:rounded-[2rem] p-0.5 md:p-1">
                      <div className="bg-black rounded-[1.2rem] md:rounded-[1.5rem] aspect-[9/19.5] flex items-center justify-center overflow-hidden relative">
                        {/* Animated onboarding screens */}
                        <div className="relative w-full h-full">
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
                                src={`/${screen.image}` || "/placeholder.svg"}
                                alt={screen.alt}
                                className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.3rem]"
                                loading={index === 0 ? "eager" : "lazy"}
                                fetchPriority={index === 0 ? "high" : "low"}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section
            id="features"
            className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-32"
            aria-labelledby="features-heading"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16 lg:mb-20">
                <Badge
                  variant="secondary"
                  className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-3 py-1.5 md:px-4 md:py-2 text-sm"
                >
                  Powerful Features
                </Badge>
                <h2 id="features-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Everything for
                  <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                    {" "}
                    Perfect Timing
                  </span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-4xl mx-auto px-4">
                  Advanced astronomical calculations, beautiful visualizations, and smart notifications to help you
                  capture nature's most spectacular moments
                </p>
              </div>

              {/* Screenshots moved here - below Perfect Timing text */}
              <div className="mb-16 md:mb-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" role="list">
                  {[
                    {
                      id: 1,
                      alt: "Solora App notifications and widgets interface showing smart alerts for celestial events",
                    },
                    { id: 2, alt: "Moon phase calendar in Solora App displaying detailed lunar cycles and supermoons" },
                    {
                      id: 3,
                      alt: "Milky Way visibility tracking interface showing astronomical conditions and sky quality",
                    },
                    {
                      id: 4,
                      alt: "Aurora forecast maps in Solora App with Kp index tracking and northern lights predictions",
                    },
                  ].map((screenshot) => (
                    <div
                      key={screenshot.id}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl md:rounded-3xl p-3 md:p-4 shadow-2xl"
                      role="listitem"
                      style={{ maxHeight: '75vh' }}
                    >
                      <div className="bg-black rounded-xl md:rounded-2xl p-1.5 md:p-2">
                        <div className="rounded-lg md:rounded-xl aspect-[9/19.5] overflow-hidden h-full">
                          <img
                            src={`/screenshot-${screenshot.id}.jpg`}
                            alt={screenshot.alt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" role="list">
                {[
                  {
                    icon: Cloud,
                    title: "Complete Sky & Weather Forecasts Anywhere",
                    description:
                      "Complete forecasts for clouds, rain, wind, visibility and temperature — anywhere you shoot.",
                    gradient: "from-[#E6786E] to-[#D4695F]",
                  },
                  {
                    icon: Sun,
                    title: "Personalized forecasts summaries to plan in advance",
                    description:
                      "Personalized sunrise/sunset quality and night‑sky visibility so you can plan the best moments.",
                    gradient: "from-[#E6786E] to-[#D4695F]",
                  },
                  {
                    icon: Camera,
                    title: "Track the position of Sun, Moon and Milky Way",
                    description: "See Sun, Moon and Milky Way positions and alignments in AR to plan compositions.",
                    gradient: "from-[#E6786E] to-[#D4695F]",
                  },
                  {
                    icon: Moon,
                    title: "Track lunar cycles with precision",
                    description: "Next phases, rise/set times and illumination for precise planning.",
                    gradient: "from-[#E6786E] to-[#D4695F]",
                  },
                  {
                    icon: Star,
                    title: "Keep posted on the next astronomical events",
                    description:
                      "Upcoming eclipses, meteor showers, supermoons and planetary events — all in one place.",
                    gradient: "from-[#E6786E] to-[#D4695F]",
                  },
                  {
                    icon: Bell,
                    title: "Don't miss the best moments with smart alerts",
                    description:
                      "Alerts for golden hour, moonrise/set, tides, events, daily summaries and nearby conditions.",
                    gradient: "from-[#E6786E] to-[#D4695F]",
                  },
                  {
                    icon: Watch,
                    title: "Every forecast at a glance",
                    description: "Widgets & Apple Watch integration for Home, Lock Screen and Watch access.",
                    gradient: "from-[#E6786E] to-[#D4695F]",
                  },
                  {
                    icon: MapPin,
                    title: "Track and compare worldwide locations",
                    description:
                      "Unlimited locations with quick switching to track and compare your favorite spots worldwide.",
                    gradient: "from-[#E6786E] to-[#D4695F]",
                  },
                  {
                    icon: Waves,
                    title: "Marine & Tides for coastal planning",
                    description: "Tide timing and wave conditions for coastal shoots and water planning.",
                    gradient: "from-[#E6786E] to-[#D4695F]",
                  },
                ].map((feature, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group"
                    role="listitem"
                  >
                    <CardContent className="p-6 md:p-8 text-center space-y-4 md:space-y-6">
                      <div
                        className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                        aria-hidden="true"
                      >
                        <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{feature.title}</h3>
                      <p className="text-sm md:text-base text-white/70 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>


          {/* Download CTA Section */}
          <section
            id="download"
            className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-32"
            aria-labelledby="download-heading"
          >
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-[#E6786E] via-[#D4695F] to-[#C25A50] rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-20 text-center text-white relative overflow-hidden">
                {/* Background decoration */}
                <div
                  className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"
                  aria-hidden="true"
                ></div>

                <div className="relative max-w-4xl mx-auto space-y-6 md:space-y-8">
                  <div className="space-y-3 md:space-y-4">
                    <h2 id="download-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                      Never miss a good sky moment
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl opacity-90">
                      Download now and start planning with the best AI forecasts
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                    <Button
                      size="lg"
                      className="bg-white text-[#E6786E] hover:bg-gray-100 px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl rounded-xl md:rounded-2xl shadow-2xl hover:shadow-white/25 transition-all font-bold group w-full sm:w-auto"
                      asChild
                    >
                      <Link
                        href="https://apps.apple.com/es/app/atardecer-amanecer-solora/id6502008343?platform=iphone"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Download Solora app from Apple App Store"
                      >
                        <Apple className="w-6 h-6 md:w-7 md:h-7 mr-2 md:mr-3" aria-hidden="true" />
                        Download Solora
                        <ChevronRight
                          className="w-5 h-5 md:w-6 md:h-6 ml-1 md:ml-2 group-hover:translate-x-1 transition-transform"
                          aria-hidden="true"
                        />
                      </Link>
                    </Button>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 text-sm sm:text-base md:text-lg opacity-90">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="flex" role="img" aria-label="5 star rating">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-white text-white" aria-hidden="true" />
                        ))}
                      </div>
                      <span>+1000</span>
                    </div>
                    <div>Free Download</div>
                    <div>iOS & iPad</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 py-12 md:py-16" role="contentinfo">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="flex items-center gap-3 md:gap-4">
                <img src="/solora-app-icon.png" alt="Solora App Icon" className="w-10 h-10 md:w-12 md:h-12" />
                <div className="text-center md:text-left">
                  <span className="text-xl md:text-2xl font-bold text-[#E6786E] block">Solora</span>
                  <span className="text-white/60 text-xs md:text-sm">Plan the sky, perfect the moment</span>
                </div>
              </div>

              <div className="text-center md:text-right space-y-1 md:space-y-2">
                <p className="text-white/80 text-sm md:text-base">
                  © {new Date().getFullYear()} Antonio Jose Martinez Sanchez
                </p>
                <p className="text-white/60 text-xs md:text-sm">All rights reserved • Available on App Store</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
