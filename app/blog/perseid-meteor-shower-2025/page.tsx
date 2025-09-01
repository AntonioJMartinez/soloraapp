import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowLeft, Download, Star, Zap } from "lucide-react"
import Link from "next/link"
import { Oswald } from "next/font/google"
import type { Metadata } from "next"

const oswald = Oswald({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Perseid Meteor Shower 2025: Complete Photography Guide | Solora Blog",
  description:
    "Everything you need to know about the Perseid meteor shower 2025. Peak dates, best viewing times, photography tips, and optimal locations for capturing shooting stars.",
  keywords: [
    "perseid meteor shower 2025",
    "meteor shower photography",
    "shooting stars 2025",
    "perseid peak dates",
    "meteor photography tips",
    "astrophotography meteors",
    "best meteor shower 2025",
    "perseid viewing guide",
    "meteor shower calendar",
    "night sky photography",
  ],
  openGraph: {
    title: "Perseid Meteor Shower 2025: Complete Photography Guide",
    description:
      "Master meteor shower photography with our complete guide to the Perseid meteor shower 2025. Peak dates, camera settings, and best locations.",
    type: "article",
    url: "https://solora.app/blog/perseid-meteor-shower-2025",
    images: [
      {
        url: "https://solora.app/perseid-meteor-shower-night-sky.png",
        width: 1200,
        height: 630,
        alt: "Perseid meteor shower streaking across the night sky with Milky Way",
      },
    ],
    publishedTime: "2024-12-18T00:00:00.000Z",
    authors: ["Antonio Jose Martinez Sanchez"],
  },
  alternates: {
    canonical: "/blog/perseid-meteor-shower-2025",
  },
}

export default function PerseidMeteorShower2025() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Perseid Meteor Shower 2025: Complete Photography Guide",
            description:
              "Everything you need to know about the Perseid meteor shower 2025. Peak dates, best viewing times, photography tips, and optimal locations.",
            image: "https://solora.app/perseid-meteor-shower-night-sky.png",
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
            datePublished: "2024-12-18T00:00:00.000Z",
            dateModified: "2024-12-18T00:00:00.000Z",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://solora.app/blog/perseid-meteor-shower-2025",
            },
            articleSection: "Astronomy",
            wordCount: 2600,
            timeRequired: "PT9M",
          }),
        }}
      />

      <div className={`min-h-screen bg-gradient-to-br from-[#190908] via-[#1E140F] to-[#201B14] ${oswald.className}`}>
        <header className="w-full px-4 py-2 md:py-3 bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto flex items-center justify-between max-w-7xl">
            <Link href="/" className="flex items-center gap-2 md:gap-3">
              <img src="solora-app-icon.png" alt="Solora App Icon" className="w-8 h-8 md:w-10 md:h-10" />
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
                  <Clock className="w-4 h-4" />9 min read
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Perseid Meteor Shower 2025: Complete Photography Guide
              </h1>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                The Perseid meteor shower is one of the most spectacular celestial events of the year. Learn everything
                you need to know about capturing the 2025 Perseid meteor shower, from peak dates to camera settings.
              </p>

              <div className="aspect-video overflow-hidden rounded-2xl">
                <img
                  src="perseid-meteor-shower-night-sky.png"
                  alt="Perseid meteor shower streaking across the night sky with Milky Way visible in background"
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-8 text-white/90 leading-relaxed">
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What Are the Perseid Meteors?</h2>
                  <p className="mb-4">
                    The Perseid meteor shower occurs annually when Earth passes through the debris trail left by Comet
                    Swift-Tuttle. These tiny particles, most no larger than grains of sand, burn up in our atmosphere
                    creating brilliant streaks of light across the night sky.
                  </p>
                  <p className="mb-4">
                    Named after the constellation Perseus, from which they appear to radiate, the Perseids are known for
                    their fast, bright meteors and occasional spectacular fireballs. They're considered one of the best
                    meteor showers for both beginners and experienced observers.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Perseid Meteor Shower 2025 Dates</h2>

                  <div className="bg-gradient-to-r from-[#E6786E]/20 to-[#D4695F]/20 rounded-lg p-6 border border-[#E6786E]/30 mb-6">
                    <h3 className="text-xl font-bold text-[#E6786E] mb-4">Key Dates for 2025:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <strong className="text-white">Activity Period:</strong>
                        <p className="text-white/80">July 17 - August 24, 2025</p>
                      </div>
                      <div>
                        <strong className="text-white">Peak Night:</strong>
                        <p className="text-white/80">August 12-13, 2025</p>
                      </div>
                      <div>
                        <strong className="text-white">Peak Time:</strong>
                        <p className="text-white/80">3:00 AM - 5:00 AM local time</p>
                      </div>
                      <div>
                        <strong className="text-white">Expected Rate:</strong>
                        <p className="text-white/80">60-100 meteors per hour</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-bold text-[#E6786E] mb-3">2025 Viewing Conditions:</h3>
                    <p className="text-white/80 mb-3">
                      The 2025 Perseid peak occurs during a waning gibbous moon (about 79% illuminated), which will set
                      around 3:00 AM local time. This means the best viewing will be in the pre-dawn hours when the sky
                      is darkest.
                    </p>
                    <p className="text-white/70">
                      <strong>Best viewing window:</strong> 3:00 AM - 5:30 AM on August 13, 2025
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where and When to Look</h2>
                  <p className="mb-4">
                    The Perseid radiant (the point from which meteors appear to originate) is located in the
                    constellation Perseus, which rises in the northeast around 10 PM in mid-August.
                  </p>

                  <div className="bg-white/5 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-bold text-[#E6786E] mb-4">Optimal Viewing Strategy:</h3>
                    <ul className="space-y-2 text-white/80">
                      <li>
                        <strong>Direction:</strong> Look northeast, but don't stare directly at Perseus - meteors appear
                        throughout the sky
                      </li>
                      <li>
                        <strong>Best Time:</strong> After midnight, with peak activity between 3-5 AM
                      </li>
                      <li>
                        <strong>Duration:</strong> Plan for at least 2-3 hours of observation
                      </li>
                      <li>
                        <strong>Patience:</strong> Allow 20-30 minutes for your eyes to fully adapt to darkness
                      </li>
                    </ul>
                  </div>

                  <p className="mb-4">
                    While the radiant is in Perseus, meteors can appear anywhere in the sky. The further from the
                    radiant, the longer the meteor trails will appear. This makes wide-field photography particularly
                    effective for capturing multiple meteors.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Photography Techniques</h2>

                  <div className="bg-white/5 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-bold text-[#E6786E] mb-4">Camera Settings for Meteor Photography:</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-white mb-2">Basic Settings:</h4>
                        <ul className="text-white/80 text-sm space-y-1">
                          <li>
                            • <strong>ISO:</strong> 1600-6400
                          </li>
                          <li>
                            • <strong>Aperture:</strong> f/2.8 or wider
                          </li>
                          <li>
                            • <strong>Shutter:</strong> 15-30 seconds
                          </li>
                          <li>
                            • <strong>Focus:</strong> Manual to infinity
                          </li>
                          <li>
                            • <strong>Format:</strong> RAW
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2">Advanced Techniques:</h4>
                        <ul className="text-white/80 text-sm space-y-1">
                          <li>• Use intervalometer for continuous shooting</li>
                          <li>• Take 100-300 shots during peak hours</li>
                          <li>• Consider focus stacking for foreground</li>
                          <li>• Shoot multiple compositions</li>
                          <li>• Monitor battery levels closely</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white/5 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Star className="w-6 h-6 text-[#E6786E]" />
                        <h3 className="text-lg font-bold text-[#E6786E]">Single Exposure Method</h3>
                      </div>
                      <p className="text-white/80 text-sm">
                        Take continuous 20-30 second exposures throughout the night. This method captures meteors as
                        they occur and allows for easy selection of the best shots.
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Zap className="w-6 h-6 text-[#E6786E]" />
                        <h3 className="text-lg font-bold text-[#E6786E]">Composite Method</h3>
                      </div>
                      <p className="text-white/80 text-sm">
                        Combine multiple exposures in post-processing to show many meteors in a single image. Use
                        "lighten" blend mode to merge meteor trails.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Essential Equipment</h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-[#E6786E] mb-3">Must-Have Gear:</h3>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• DSLR or mirrorless camera</li>
                        <li>• Wide-angle lens (14-24mm)</li>
                        <li>• Sturdy tripod</li>
                        <li>• Intervalometer or built-in timer</li>
                        <li>• Extra batteries (cold drains them)</li>
                        <li>• Memory cards with fast write speeds</li>
                      </ul>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-[#E6786E] mb-3">Comfort Items:</h3>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• Reclining chair or blanket</li>
                        <li>• Red flashlight (preserves night vision)</li>
                        <li>• Warm clothing and blankets</li>
                        <li>• Thermos with hot drinks</li>
                        <li>• Snacks for long sessions</li>
                        <li>• Star chart or astronomy app</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Best Locations for Viewing</h2>
                  <p className="mb-4">
                    Dark sky locations away from city lights provide the best meteor viewing experience. Here's what to
                    look for:
                  </p>

                  <ul className="list-disc list-inside space-y-2 mb-6 text-white/80">
                    <li>
                      <strong>Dark Sky Sites:</strong> International Dark-Sky Association certified locations offer
                      optimal conditions
                    </li>
                    <li>
                      <strong>High Elevation:</strong> Mountains and hills provide clearer skies and less atmospheric
                      interference
                    </li>
                    <li>
                      <strong>Open Horizons:</strong> Avoid locations with trees, buildings, or mountains blocking the
                      sky
                    </li>
                    <li>
                      <strong>Safety First:</strong> Choose safe, legal locations with easy access and cell coverage
                    </li>
                  </ul>

                  <div className="bg-white/5 rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-bold text-[#E6786E] mb-3">Location Planning Tips:</h3>
                    <p className="text-white/80">
                      Scout locations during daylight hours. Check weather forecasts up to a week in advance, and have
                      backup locations ready. Consider the moon's position and how it will affect your chosen
                      composition.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Weather Considerations</h2>
                  <p className="mb-4">
                    Weather can make or break your meteor shower experience. Here's what to monitor:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-[#E6786E] mb-3">Ideal Conditions:</h3>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• Clear skies (less than 20% cloud cover)</li>
                        <li>• Low humidity</li>
                        <li>• Stable atmospheric conditions</li>
                        <li>• Light winds</li>
                        <li>• Good visibility (10+ miles)</li>
                      </ul>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-[#E6786E] mb-3">What to Avoid:</h3>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• Overcast or cloudy skies</li>
                        <li>• High humidity or haze</li>
                        <li>• Thunderstorms or precipitation</li>
                        <li>• Strong winds (camera shake)</li>
                        <li>• Temperature inversions</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Post-Processing Tips</h2>
                  <p className="mb-4">
                    Processing meteor shower photos requires specific techniques to bring out the best in your captures:
                  </p>

                  <ul className="list-disc list-inside space-y-2 mb-6 text-white/80">
                    <li>
                      <strong>Noise Reduction:</strong> Use tools like DxO, Topaz, or Lightroom's noise reduction for
                      high ISO shots
                    </li>
                    <li>
                      <strong>Meteor Enhancement:</strong> Carefully increase contrast and clarity on meteor trails
                    </li>
                    <li>
                      <strong>Sky Processing:</strong> Enhance the Milky Way and stars without overdoing it
                    </li>
                    <li>
                      <strong>Composite Creation:</strong> Use Photoshop's "lighten" blend mode to combine multiple
                      meteors
                    </li>
                    <li>
                      <strong>Color Grading:</strong> Enhance the natural colors of meteors (often green, blue, or
                      orange)
                    </li>
                  </ul>
                </section>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#E6786E] via-[#D4695F] to-[#C25A50] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden mt-12">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

              <div className="relative space-y-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="w-6 h-6" />
                  <Zap className="w-6 h-6" />
                  <Star className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Never Miss a Meteor Shower</h2>
                <p className="text-lg opacity-90">
                  Get alerts for peak meteor shower times, weather forecasts, and optimal viewing conditions with Solora
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
                <img src="solora-app-icon.png" alt="Solora" className="w-10 h-10 md:w-12 md:h-12" />
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
