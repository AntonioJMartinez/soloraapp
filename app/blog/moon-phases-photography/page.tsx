import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowLeft, Download, Moon, Camera } from "lucide-react"
import Link from "next/link"
import { Oswald } from "next/font/google"
import type { Metadata } from "next"

const oswald = Oswald({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Moon Phase Calendar 2025: Best Times for Night Photography | Solora Blog",
  description:
    "Discover the optimal moon phases for different types of night photography in 2025. From new moon for Milky Way shots to full moon for landscape illumination. Complete lunar calendar included.",
  keywords: [
    "moon phases 2025",
    "lunar calendar 2025",
    "moon photography",
    "night photography",
    "full moon dates 2025",
    "new moon photography",
    "supermoon 2025",
    "lunar eclipse 2025",
    "moon phase calendar",
    "astrophotography moon",
  ],
  openGraph: {
    title: "Moon Phase Calendar 2025: Best Times for Night Photography",
    description:
      "Complete guide to moon phases in 2025 for perfect night photography timing. Includes supermoons, eclipses, and optimal shooting dates.",
    type: "article",
    url: "https://solora-app.com/blog/moon-phases-photography",
    images: [
      {
        url: "https://solora-app.com/moon-phases-night-sky-photography.png",
        width: 1200,
        height: 630,
        alt: "Moon phases calendar showing different lunar phases for night photography",
      },
    ],
    publishedTime: "2024-12-12T00:00:00.000Z",
    authors: ["Antonio Jose Martinez Sanchez"],
  },
  alternates: {
    canonical: "/blog/moon-phases-photography",
  },
}

export default function MoonPhasesGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Moon Phase Calendar 2025: Best Times for Night Photography",
            description:
              "Discover the optimal moon phases for different types of night photography in 2025. From new moon for Milky Way shots to full moon for landscape illumination.",
            image: "https://solora-app.com/moon-phases-night-sky-photography.png",
            author: {
              "@type": "Person",
              name: "Antonio Jose Martinez Sanchez",
            },
            publisher: {
              "@type": "Organization",
              name: "Solora",
              logo: {
                "@type": "ImageObject",
                url: "https://solora-app.com/solora-app-icon.png",
              },
            },
            datePublished: "2024-12-12T00:00:00.000Z",
            dateModified: "2024-12-12T00:00:00.000Z",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://solora-app.com/blog/moon-phases-photography",
            },
            articleSection: "Astronomy",
            wordCount: 2800,
            timeRequired: "PT6M",
          }),
        }}
      />

      <div className={`min-h-screen bg-gradient-to-br from-[#190908] via-[#1E140F] to-[#201B14] ${oswald.className}`}>
        {/* Header */}
        <header className="w-full px-4 py-2 md:py-3 bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto flex items-center justify-between max-w-7xl">
            <Link href="/" className="flex items-center gap-2 md:gap-3">
              <img src="/solora-app-icon.png" alt="Solora App Icon" className="w-8 h-8 md:w-10 md:h-10" />
              <span className="text-lg md:text-xl font-bold text-[#E6786E]">Solora</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link href="/" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">
                Home
              </Link>
              <Link href="/blog" className="text-white hover:text-white transition-colors text-sm lg:text-base">
                Blog
              </Link>
              <Link href="/#download" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">
                Download
              </Link>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#E6786E] hover:text-[#D4695F] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <article className="space-y-8">
            <header className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-white/60">
                <Badge variant="outline" className="border-[#E6786E]/30 text-[#E6786E]">
                  Astronomy
                </Badge>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />6 min read
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Moon Phase Calendar 2025: Best Times for Night Photography
              </h1>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Discover the optimal moon phases for different types of night photography in 2025. From new moon for
                Milky Way shots to full moon for landscape illumination, plan your perfect night photography sessions.
              </p>

              <div className="aspect-video overflow-hidden rounded-2xl">
                <img
                  src="/moon-phases-night-sky-photography.png"
                  alt="Moon phases calendar showing different lunar phases for night photography planning"
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-8 text-white/90 leading-relaxed">
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Understanding Moon Phases for Photography
                  </h2>
                  <p className="mb-4">
                    The moon's phase dramatically affects night photography conditions. Each phase offers unique
                    opportunities and challenges, from the complete darkness of new moon perfect for astrophotography to
                    the bright illumination of full moon ideal for landscape photography.
                  </p>
                  <p className="mb-4">
                    Understanding lunar cycles helps you plan photography sessions months in advance, ensuring you're in
                    the right place at the right time for your desired shots.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Moon Phases and Photography Types</h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white/5 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Moon className="w-6 h-6 text-[#E6786E]" />
                        <h3 className="text-lg font-bold text-[#E6786E]">New Moon (0% Illumination)</h3>
                      </div>
                      <p className="text-white/80 mb-3">
                        <strong>Best for:</strong> Milky Way, deep sky objects, meteor showers, aurora photography
                      </p>
                      <p className="text-white/70 text-sm">
                        Darkest skies provide maximum contrast for faint celestial objects. No moonlight interference.
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Moon className="w-6 h-6 text-[#E6786E]" />
                        <h3 className="text-lg font-bold text-[#E6786E]">Crescent Moon (25% Illumination)</h3>
                      </div>
                      <p className="text-white/80 mb-3">
                        <strong>Best for:</strong> Landscape silhouettes, star trails with foreground detail
                      </p>
                      <p className="text-white/70 text-sm">
                        Subtle foreground illumination while maintaining dark skies for stars.
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Moon className="w-6 h-6 text-[#E6786E]" />
                        <h3 className="text-lg font-bold text-[#E6786E]">Half Moon (50% Illumination)</h3>
                      </div>
                      <p className="text-white/80 mb-3">
                        <strong>Best for:</strong> Night landscapes, architectural photography, moon portraits
                      </p>
                      <p className="text-white/70 text-sm">
                        Balanced lighting for foreground and sky. Good compromise for mixed subjects.
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Moon className="w-6 h-6 text-[#E6786E]" />
                        <h3 className="text-lg font-bold text-[#E6786E]">Full Moon (100% Illumination)</h3>
                      </div>
                      <p className="text-white/80 mb-3">
                        <strong>Best for:</strong> Moonlit landscapes, seascapes, snow scenes, moon photography
                      </p>
                      <p className="text-white/70 text-sm">
                        Bright natural lighting creates dramatic shadows and illuminates landscapes like daylight.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">2025 Moon Phase Calendar</h2>
                  <p className="mb-6">
                    Here are the key moon phases for 2025, perfect for planning your night photography sessions:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#E6786E] mb-4">New Moons 2025 (Best for Milky Way)</h3>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <strong>January 29</strong> - Winter Milky Way core
                        </div>
                        <div>
                          <strong>February 28</strong> - Pre-spring astrophotography
                        </div>
                        <div>
                          <strong>March 29</strong> - Spring equinox period
                        </div>
                        <div>
                          <strong>April 27</strong> - Milky Way season begins
                        </div>
                        <div>
                          <strong>May 27</strong> - Peak Milky Way visibility
                        </div>
                        <div>
                          <strong>June 25</strong> - Summer solstice period
                        </div>
                        <div>
                          <strong>July 24</strong> - Best Milky Way month
                        </div>
                        <div>
                          <strong>August 23</strong> - Perseid meteor shower
                        </div>
                        <div>
                          <strong>September 21</strong> - Autumn equinox
                        </div>
                        <div>
                          <strong>October 21</strong> - Fall astrophotography
                        </div>
                        <div>
                          <strong>November 20</strong> - Winter prep
                        </div>
                        <div>
                          <strong>December 19</strong> - Winter solstice
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#E6786E] mb-4">Full Moons 2025 (Best for Landscapes)</h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong>January 13</strong> - Wolf Moon
                        </div>
                        <div>
                          <strong>February 12</strong> - Snow Moon
                        </div>
                        <div>
                          <strong>March 14</strong> - Worm Moon
                        </div>
                        <div>
                          <strong>April 13</strong> - Pink Moon
                        </div>
                        <div>
                          <strong>May 12</strong> - Flower Moon
                        </div>
                        <div>
                          <strong>June 11</strong> - Strawberry Moon
                        </div>
                        <div>
                          <strong>July 10</strong> - Buck Moon
                        </div>
                        <div>
                          <strong>August 9</strong> - Sturgeon Moon
                        </div>
                        <div>
                          <strong>September 7</strong> - Harvest Moon (Partial Eclipse)
                        </div>
                        <div>
                          <strong>October 7</strong> - Hunter's Moon
                        </div>
                        <div>
                          <strong>November 5</strong> - Beaver Moon
                        </div>
                        <div>
                          <strong>December 4</strong> - Cold Moon
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Special Lunar Events 2025</h2>

                  <div className="space-y-4 mb-6">
                    <div className="bg-gradient-to-r from-[#E6786E]/20 to-[#D4695F]/20 rounded-lg p-6 border border-[#E6786E]/30">
                      <h3 className="text-xl font-bold text-[#E6786E] mb-3">
                        Partial Lunar Eclipse - September 7, 2025
                      </h3>
                      <p className="text-white/80 mb-2">
                        The Harvest Moon will experience a partial lunar eclipse, creating a dramatic reddish shadow
                        across part of the moon's surface.
                      </p>
                      <p className="text-white/70 text-sm">
                        <strong>Visibility:</strong> Europe, Africa, Asia, Australia | <strong>Peak:</strong> 18:11 UTC
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#E6786E] mb-3">Supermoons 2025</h3>
                      <p className="text-white/80 mb-3">
                        Supermoons occur when the full moon coincides with the moon's closest approach to Earth,
                        appearing up to 14% larger and 30% brighter.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong>October 7</strong> - Hunter's Supermoon
                        </div>
                        <div>
                          <strong>November 5</strong> - Beaver Supermoon
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Moon Photography Techniques</h2>

                  <div className="bg-white/5 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-bold text-[#E6786E] mb-4">Camera Settings by Moon Phase:</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-white mb-2">New Moon (Milky Way Photography)</h4>
                        <ul className="text-white/80 text-sm space-y-1 ml-4">
                          <li>• ISO: 3200-6400</li>
                          <li>• Aperture: f/2.8 or wider</li>
                          <li>• Shutter: 15-25 seconds (500 rule)</li>
                          <li>• Focus: Manual to infinity</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2">Full Moon (Landscape Photography)</h4>
                        <ul className="text-white/80 text-sm space-y-1 ml-4">
                          <li>• ISO: 100-800</li>
                          <li>• Aperture: f/8-f/11</li>
                          <li>• Shutter: 1-30 seconds</li>
                          <li>• Focus: Hyperfocal distance</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <p className="mb-4">
                    Moon rise and set times vary throughout the month. During full moon, the moon rises at sunset and
                    sets at sunrise. During new moon, it rises and sets with the sun, making it invisible at night.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Planning Your Moon Photography</h2>
                  <p className="mb-4">Successful moon photography requires careful planning:</p>

                  <ul className="list-disc list-inside space-y-2 mb-6 text-white/80">
                    <li>
                      <strong>Check moon rise/set times:</strong> Use apps like PhotoPills, Sun Surveyor, or Solora to
                      plan exact timing
                    </li>
                    <li>
                      <strong>Consider moon position:</strong> The moon's path across the sky changes with seasons and
                      location
                    </li>
                    <li>
                      <strong>Weather planning:</strong> Clear skies are essential - check forecasts days in advance
                    </li>
                    <li>
                      <strong>Location scouting:</strong> Visit locations during daylight to plan compositions
                    </li>
                    <li>
                      <strong>Backup plans:</strong> Have multiple locations ready in case of weather changes
                    </li>
                  </ul>

                  <div className="bg-white/5 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#E6786E] mb-3">Pro Tip:</h3>
                    <p className="text-white/80">
                      The days around new moon (±2 days) are ideal for astrophotography, while the days around full moon
                      (±2 days) provide excellent landscape lighting. Plan your shoots during these windows for best
                      results.
                    </p>
                  </div>
                </section>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#E6786E] via-[#D4695F] to-[#C25A50] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden mt-12">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

              <div className="relative space-y-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Camera className="w-6 h-6" />
                  <Moon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Track Moon Phases & Rise Times</h2>
                <p className="text-lg opacity-90">
                  Get precise moon phase calendars, rise/set times, and photography alerts with Solora
                </p>
                <Button
                  size="lg"
                  className="bg-white text-[#E6786E] hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-white/25 transition-all font-bold"
                  asChild
                >
                  <Link href="/#download">
                    <Download className="w-5 h-5 mr-2" />
                    Download Solora App
                  </Link>
                </Button>
              </div>
            </div>
          </article>
        </main>

        <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 py-12 md:py-16 mt-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="flex items-center gap-3 md:gap-4">
                <img src="/solora-app-icon.png" alt="Solora" className="w-10 h-10 md:w-12 md:h-12" />
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
