import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowLeft, Download } from "lucide-react"
import Link from "next/link"
import { Oswald } from "next/font/google"
import type { Metadata } from "next"

const oswald = Oswald({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Total Lunar Eclipse September 7, 2025: Your Complete Blood Moon Guide | Solora Blog",
  description:
    "Witness the spectacular total lunar eclipse on September 7, 2025. Get viewing times, visibility maps, and photography tips for this 83-minute blood moon event visible across Asia, Europe, Africa, and Australia.",
  keywords: [
    "total lunar eclipse September 2025",
    "blood moon September 7 2025",
    "lunar eclipse visibility",
    "lunar eclipse photography",
    "September 2025 eclipse timing",
    "corn moon eclipse",
    "astronomy events 2025",
    "lunar eclipse guide",
    "eclipse viewing locations",
    "blood moon photography tips",
  ],
  openGraph: {
    title: "Total Lunar Eclipse September 7, 2025: Your Complete Blood Moon Guide",
    description:
      "Witness the spectacular total lunar eclipse on September 7, 2025. Complete guide with viewing times, visibility maps, and photography tips for this 83-minute blood moon event.",
    type: "article",
    url: "https://solora.app/blog/total-lunar-eclipse-september-2025",
    images: [
      {
        url: "https://solora.app/total-lunar-eclipse-september-2025.jpg",
        width: 1200,
        height: 630,
        alt: "Total lunar eclipse showing the blood moon in deep reddish-orange color against starry night sky",
      },
    ],
    publishedTime: "2025-09-02T00:00:00.000Z",
    authors: ["Antonio Jose Martinez Sanchez"],
  },
  alternates: {
    canonical: "/blog/total-lunar-eclipse-september-2025",
  },
}

export default function TotalLunarEclipseGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Total Lunar Eclipse September 7, 2025: Your Complete Blood Moon Guide",
            description:
              "Witness the spectacular total lunar eclipse on September 7, 2025. Complete guide with viewing times, visibility maps, and photography tips for this 83-minute blood moon event.",
            image: "https://solora.app/total-lunar-eclipse-september-2025.jpg",
            author: {
              "@type": "Person",
              name: "Antonio Jose Martinez Sanchez",
            },
            publisher: {
              "@type": "Organization",
              name: "Solora",
              logo: {
                "@type": "ImageObject",
                url: "https://solora.app/solora-app-icon.png",
              },
            },
            datePublished: "2025-09-02T00:00:00.000Z",
            dateModified: "2025-09-02T00:00:00.000Z",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://solora.app/blog/total-lunar-eclipse-september-2025",
            },
            articleSection: "Astronomy",
            wordCount: 2800,
            timeRequired: "PT10M",
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
          {/* Back to Blog */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#E6786E] hover:text-[#D4695F] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <article className="space-y-8">
            <header className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-white/60">
                <Badge variant="outline" className="border-[#E6786E]/30 text-[#E6786E]">
                  Astronomy
                </Badge>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />10 min read
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Total Lunar Eclipse September 7, 2025: Your Complete Blood Moon Guide
              </h1>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Mark your calendars for September 7, 2025! Witness the spectacular total lunar eclipse that will 
                captivate observers across Asia, Europe, Africa, and Australia. This comprehensive guide covers 
                everything you need to know about viewing and photographing this 83-minute blood moon spectacular.
              </p>

              <div className="aspect-video overflow-hidden rounded-2xl">
                <img
                  src="/total-lunar-eclipse-september-2025.jpg"
                  alt="Total lunar eclipse showing the blood moon in deep reddish-orange color against starry night sky"
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-8 text-white/90 leading-relaxed">
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What Makes This Eclipse Special?</h2>
                  <p className="mb-4">
                    The September 7, 2025 total lunar eclipse is extraordinary for several reasons. With an umbral 
                    magnitude of 1.3638, this will be one of the most spectacular lunar eclipses in recent years, 
                    featuring an exceptionally long totality phase lasting 83 minutes.
                  </p>
                  <p className="mb-4">
                    During totality, the Moon will take on the characteristic deep red-orange color that gives 
                    lunar eclipses their "blood moon" nickname. This dramatic coloring occurs when Earth's 
                    atmosphere filters and refracts sunlight, allowing only the longer red wavelengths to reach 
                    the lunar surface.
                  </p>
                  <p>
                    This eclipse coincides with the full Corn Moon, the traditional name for September's full moon, 
                    named after the time when corn was traditionally harvested.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Eclipse Timeline (UTC)</h2>
                  <p className="mb-4">
                    The lunar eclipse unfolds in several distinct phases, each offering different viewing 
                    experiences:
                  </p>

                  <div className="bg-white/5 rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-bold text-[#E6786E] mb-4">Key Times (September 7, 2025 - UTC)</h3>
                    <ul className="space-y-3 text-white/80">
                      <li>
                        <strong>15:28 UTC</strong> - Penumbral eclipse begins (subtle shadow starts)
                      </li>
                      <li>
                        <strong>16:26 UTC</strong> - Partial eclipse begins (Earth's shadow becomes visible)
                      </li>
                      <li>
                        <strong>17:30 UTC</strong> - Totality begins (Blood Moon phase starts)
                      </li>
                      <li>
                        <strong>18:11 UTC</strong> - Maximum eclipse (deepest red coloration)
                      </li>
                      <li>
                        <strong>18:53 UTC</strong> - Totality ends (Blood Moon phase ends)
                      </li>
                      <li>
                        <strong>19:57 UTC</strong> - Partial eclipse ends
                      </li>
                      <li>
                        <strong>20:55 UTC</strong> - Penumbral eclipse ends
                      </li>
                    </ul>
                  </div>

                  <p>
                    <strong>Total Duration:</strong> The entire eclipse event spans 5 hours and 27 minutes, with 
                    totality lasting an impressive 1 hour and 23 minutes (83 minutes).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Global Visibility: Who Can See It?</h2>
                  <p className="mb-4">
                    This lunar eclipse offers exceptional global visibility, with approximately 77% of the world's 
                    population—about 6.2 billion people—able to witness all or part of the event.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-[#E6786E] mb-3">Best Viewing Regions</h3>
                      <ul className="text-white/80 space-y-2">
                        <li>• Asia (entire eclipse visible)</li>
                        <li>• Western Australia (complete totality)</li>
                        <li>• Eastern Africa (full eclipse)</li>
                        <li>• Europe (partial to total phases)</li>
                        <li>• Central Russia (excellent viewing)</li>
                        <li>• India and China (full totality)</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-[#E6786E] mb-3">Limited or No Visibility</h3>
                      <ul className="text-white/80 space-y-2">
                        <li>• North America (not visible)</li>
                        <li>• South America (not visible)</li>
                        <li>• Western Alaska (partial only)</li>
                        <li>• Eastern Australia (moonset during eclipse)</li>
                        <li>• Western Europe (partial phases only)</li>
                      </ul>
                    </div>
                  </div>

                  <p>
                    The optimal viewing experience will be in regions where the eclipse occurs during local nighttime 
                    hours with the Moon high in the sky.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Photography Tips for the Blood Moon</h2>
                  <p className="mb-4">
                    Capturing a total lunar eclipse presents unique photographic challenges and opportunities. 
                    Here's how to get stunning results:
                  </p>

                  <div className="bg-white/5 rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-bold text-[#E6786E] mb-3">Essential Equipment:</h3>
                    <ul className="space-y-2 text-white/80">
                      <li>
                        <strong>Telephoto lens:</strong> 200mm minimum, 400mm+ preferred for close-ups
                      </li>
                      <li>
                        <strong>Sturdy tripod:</strong> Essential for sharp images during long exposures
                      </li>
                      <li>
                        <strong>Remote shutter:</strong> Reduces camera shake during exposures
                      </li>
                      <li>
                        <strong>Extra batteries:</strong> Cold weather and long exposures drain power quickly
                      </li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-[#E6786E] mb-3">Camera Settings</h3>
                      <ul className="text-white/80 space-y-2">
                        <li><strong>Pre-eclipse:</strong> ISO 100, f/8, 1/250s</li>
                        <li><strong>Partial phases:</strong> ISO 400, f/5.6, 1/60s</li>
                        <li><strong>Totality:</strong> ISO 1600-3200, f/4, 2-8s</li>
                        <li><strong>Format:</strong> Shoot RAW for maximum flexibility</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-[#E6786E] mb-3">Composition Ideas</h3>
                      <ul className="text-white/80 space-y-2">
                        <li>• Multiple exposures showing eclipse progression</li>
                        <li>• Moon with foreground landmarks</li>
                        <li>• Wide-field shots including stars</li>
                        <li>• Close-up details of lunar surface features</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Viewing Preparation</h2>
                  <p className="mb-4">
                    Unlike solar eclipses, lunar eclipses are completely safe to view with the naked eye. No special 
                    filters or protective equipment are needed.
                  </p>

                  <div className="bg-white/5 rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-bold text-[#E6786E] mb-3">What to Bring:</h3>
                    <ul className="space-y-2 text-white/80">
                      <li>✓ Comfortable chair or blanket for extended viewing</li>
                      <li>✓ Warm clothing (September nights can be cool)</li>
                      <li>✓ Red flashlight to preserve night vision</li>
                      <li>✓ Binoculars for enhanced moon surface details</li>
                      <li>✓ Star chart or astronomy app</li>
                      <li>✓ Thermos with hot beverages</li>
                      <li>✓ Camera gear if photographing</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Eclipse Series Context</h2>
                  <p className="mb-4">
                    The September 7, 2025 lunar eclipse is part of an active period for lunar eclipses, being the 
                    second eclipse in an almost-tetrad series:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-white/80">
                    <li>
                      <strong>March 14, 2025:</strong> Total lunar eclipse (first in series)
                    </li>
                    <li>
                      <strong>September 7, 2025:</strong> Total lunar eclipse (this event)
                    </li>
                    <li>
                      <strong>March 3, 2026:</strong> Total lunar eclipse (third in series)
                    </li>
                    <li>
                      <strong>August 28, 2026:</strong> Partial lunar eclipse (series finale)
                    </li>
                  </ul>
                  <p>
                    This makes 2025 and 2026 exceptional years for lunar eclipse enthusiasts, with multiple 
                    opportunities to witness these celestial spectacles.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">For Those Outside the Viewing Zone</h2>
                  <p className="mb-4">
                    If you're located in North or South America where the eclipse won't be visible, don't despair! 
                    Several organizations will provide high-quality live streams of the event:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-white/80">
                    <li>Virtual Telescope Project (Italy) - Free livestream</li>
                    <li>TimeandDate.com - Global coverage with expert commentary</li>
                    <li>NASA's eclipse coverage - Educational content and multiple viewpoints</li>
                    <li>Various astronomy clubs and observatories in viewing regions</li>
                  </ul>
                </section>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#E6786E] via-[#D4695F] to-[#C25A50] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden mt-12">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

              <div className="relative space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold">Never Miss Another Eclipse</h2>
                <p className="text-lg opacity-90">
                  Get eclipse alerts, viewing forecasts, and photography timing with Solora's astronomical event tracking
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

        {/* Footer */}
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