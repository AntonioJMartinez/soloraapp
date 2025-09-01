import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowLeft, Download, Star, Zap, Globe } from "lucide-react"
import Link from "next/link"
import { Oswald } from "next/font/google"
import type { Metadata } from "next"

const oswald = Oswald({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "How to Predict Aurora Activity for Perfect Northern Lights Photos | Solora Blog",
  description:
    "Learn to read KP index, solar wind data, and weather patterns to predict when and where you'll see the northern lights. Includes the best apps and tools for aurora forecasting.",
  keywords: [
    "aurora prediction",
    "northern lights forecast",
    "KP index",
    "aurora photography",
    "northern lights photography",
    "solar activity",
    "geomagnetic storm",
    "aurora borealis",
    "space weather",
    "aurora forecast apps",
  ],
  openGraph: {
    title: "How to Predict Aurora Activity for Perfect Northern Lights Photos",
    description:
      "Master aurora prediction with expert tips on KP index, solar wind data, and weather patterns for perfect northern lights photography.",
    type: "article",
    url: "https://solora.app/blog/aurora-prediction-guide",
    images: [
      {
        url: "https://solora.app/northern-lights-aurora-borealis-photography.png",
        width: 1200,
        height: 630,
        alt: "Northern lights aurora borealis dancing across the night sky",
      },
    ],
    publishedTime: "2024-12-10T00:00:00.000Z",
    authors: ["Antonio Jose Martinez Sanchez"],
  },
  alternates: {
    canonical: "/blog/aurora-prediction-guide",
  },
}

export default function AuroraPredictionGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "How to Predict Aurora Activity for Perfect Northern Lights Photos",
            description:
              "Learn to read KP index, solar wind data, and weather patterns to predict when and where you'll see the northern lights. Includes the best apps and tools.",
            image: "https://solora.app/northern-lights-aurora-borealis-photography.png",
            author: {
              "@type": "Person",
              name: "Antonio Jose Martinez Sanchez",
            },
            publisher: {
              "@type": "Organization",
              name: "Solora",
              logo: {
                "@type": "ImageObject",
                url: "https://solora-app-icon.png",
              },
            },
            datePublished: "2024-12-10T00:00:00.000Z",
            dateModified: "2024-12-10T00:00:00.000Z",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://solora.app/blog/aurora-prediction-guide",
            },
            articleSection: "Aurora",
            wordCount: 3000,
            timeRequired: "PT10M",
          }),
        }}
      />

      <div className={`min-h-screen bg-gradient-to-br from-[#190908] via-[#1E140F] to-[#201B14] ${oswald.className}`}>
        {/* Header */}
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
                  Aurora
                </Badge>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  10 min read
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                How to Predict Aurora Activity for Perfect Northern Lights Photos
              </h1>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Learn to read KP index, solar wind data, and weather patterns to predict when and where you'll see the
                northern lights. Master aurora forecasting with the best apps and tools for perfect northern lights
                photography.
              </p>

              <div className="aspect-video overflow-hidden rounded-2xl">
                <img
                  src="northern-lights-aurora-borealis-photography.png"
                  alt="Northern lights aurora borealis dancing across the night sky with green and purple colors"
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-8 text-white/90 leading-relaxed">
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Understanding Aurora Formation</h2>
                  <p className="mb-4">
                    The aurora borealis (northern lights) occurs when charged particles from the sun interact with
                    Earth's magnetic field and atmosphere. These solar particles, carried by solar wind, create the
                    spectacular light displays we see dancing across the night sky.
                  </p>
                  <p className="mb-4">
                    The intensity and visibility of auroras depend on several factors: solar activity, geomagnetic
                    conditions, weather, light pollution, and your geographic location. Understanding these factors is
                    key to successful aurora prediction and photography.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The KP Index: Your Aurora Compass</h2>
                  <p className="mb-4">
                    The KP index is the most important metric for aurora prediction. It measures geomagnetic activity on
                    a scale from 0 to 9, with higher numbers indicating stronger aurora activity.
                  </p>

                  <div className="bg-white/5 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-bold text-[#E6786E] mb-4">KP Index Scale:</h3>
                    <div className="grid gap-3">
                      <div className="flex items-center justify-between p-3 bg-green-500/20 rounded-lg">
                        <span className="font-bold">KP 0-2</span>
                        <span className="text-white/80">Quiet - Aurora visible only in polar regions</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-yellow-500/20 rounded-lg">
                        <span className="font-bold">KP 3-4</span>
                        <span className="text-white/80">Moderate - Aurora visible in northern Canada, Alaska</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-orange-500/20 rounded-lg">
                        <span className="font-bold">KP 5-6</span>
                        <span className="text-white/80">Strong - Visible in northern US states</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-red-500/20 rounded-lg">
                        <span className="font-bold">KP 7-9</span>
                        <span className="text-white/80">Severe - Visible as far south as mid-US states</span>
                      </div>
                    </div>
                  </div>

                  <p>
                    For most locations in the northern United States and southern Canada, you'll want to watch for KP
                    values of 4 or higher. The higher the KP index, the further south the aurora will be visible.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Solar Wind and Space Weather</h2>
                  <p className="mb-4">
                    Aurora activity is directly linked to solar wind conditions. Key parameters to monitor include:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white/5 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Zap className="w-6 h-6 text-[#E6786E]" />
                        <h3 className="text-lg font-bold text-[#E6786E]">Solar Wind Speed</h3>
                      </div>
                      <p className="text-white/80">
                        Speeds above 400 km/s increase aurora chances. Speeds over 600 km/s often produce strong
                        displays.
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Globe className="w-6 h-6 text-[#E6786E]" />
                        <h3 className="text-lg font-bold text-[#E6786E]">IMF Bz Component</h3>
                      </div>
                      <p className="text-white/80">
                        When the Interplanetary Magnetic Field points south (negative Bz), it enhances aurora activity.
                      </p>
                    </div>
                  </div>

                  <p>
                    Coronal Mass Ejections (CMEs) from the sun can cause geomagnetic storms that produce spectacular
                    aurora displays. These events can be predicted 1-3 days in advance, giving photographers time to
                    plan.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Weather Considerations</h2>
                  <p className="mb-4">
                    Even with perfect geomagnetic conditions, weather can make or break your aurora photography session:
                  </p>

                  <ul className="list-disc list-inside space-y-2 mb-6 text-white/80">
                    <li>
                      <strong>Clear skies:</strong> Essential for aurora visibility - even thin clouds can obscure the
                      display
                    </li>
                    <li>
                      <strong>Low humidity:</strong> Reduces atmospheric haze and improves visibility
                    </li>
                    <li>
                      <strong>Stable air:</strong> Minimizes atmospheric turbulence that can blur aurora details
                    </li>
                    <li>
                      <strong>Cold temperatures:</strong> Often correlate with clearer skies and better visibility
                    </li>
                  </ul>

                  <div className="bg-white/5 rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-bold text-[#E6786E] mb-3">Pro Tip:</h3>
                    <p className="text-white/80">
                      Check cloud forecasts up to 48 hours in advance. Aurora activity can be predicted days ahead, but
                      weather changes quickly. Have backup locations ready in case your primary spot gets clouded over.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Best Aurora Forecasting Tools</h2>
                  <p className="mb-4">
                    Successful aurora hunting requires reliable forecasting tools. Here are the most trusted resources:
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-[#E6786E] mb-2">NOAA Space Weather Prediction Center</h3>
                      <p className="text-white/80">
                        The official source for space weather forecasts, including 3-day KP index predictions and
                        geomagnetic storm warnings.
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-[#E6786E] mb-2">Aurora Forecast Apps</h3>
                      <p className="text-white/80">
                        Mobile apps like Aurora Alerts, My Aurora Forecast, and Solora provide real-time notifications
                        and location-specific predictions.
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-[#E6786E] mb-2">Social Media Communities</h3>
                      <p className="text-white/80">
                        Follow aurora photography groups and local weather services for real-time reports and
                        crowd-sourced observations.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Timing Your Aurora Hunt</h2>
                  <p className="mb-4">
                    Aurora timing involves both geomagnetic activity patterns and optimal viewing hours:
                  </p>

                  <div className="bg-white/5 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-bold text-[#E6786E] mb-3">Best Viewing Times:</h3>
                    <ul className="space-y-2 text-white/80">
                      <li>
                        <strong>Peak Hours:</strong> 10 PM to 2 AM local time (when it's darkest)
                      </li>
                      <li>
                        <strong>Seasonal Timing:</strong> Equinoxes (March and September) often have increased activity
                      </li>
                      <li>
                        <strong>Moon Phase:</strong> New moon provides darkest skies, but quarter moon can help with
                        foreground lighting
                      </li>
                      <li>
                        <strong>Activity Cycles:</strong> Aurora often comes in waves - if you see activity, stay longer
                      </li>
                    </ul>
                  </div>

                  <p>
                    Aurora displays can be unpredictable. Even with perfect forecasts, activity might start earlier or
                    later than predicted. Plan to spend several hours at your location for the best chances of success.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Location and Light Pollution</h2>
                  <p className="mb-4">Your viewing location dramatically affects aurora visibility:</p>

                  <ul className="list-disc list-inside space-y-2 mb-6 text-white/80">
                    <li>
                      <strong>Dark Sky Sites:</strong> Get as far from city lights as possible - even small towns can
                      wash out faint aurora
                    </li>
                    <li>
                      <strong>Northern Horizon:</strong> Ensure you have a clear view to the north (aurora typically
                      appears there first)
                    </li>
                    <li>
                      <strong>Elevation:</strong> Higher elevations often provide clearer skies and better visibility
                    </li>
                    <li>
                      <strong>Safety:</strong> Choose safe, accessible locations - aurora hunting often involves
                      traveling in cold, dark conditions
                    </li>
                  </ul>

                  <div className="bg-white/5 rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-bold text-[#E6786E] mb-3">Geographic Considerations:</h3>
                    <p className="text-white/80">
                      The further north you are, the more aurora activity you'll see. However, strong geomagnetic storms
                      can make aurora visible surprisingly far south. During major storms, aurora has been photographed
                      as far south as Arizona and North Carolina.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Photography Tips for Aurora</h2>
                  <p className="mb-4">
                    Once you've successfully predicted and found aurora activity, here's how to capture it:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-[#E6786E] mb-3">Camera Settings</h3>
                      <ul className="space-y-1 text-white/80 text-sm">
                        <li>• ISO: 1600-6400</li>
                        <li>• Aperture: f/2.8 or wider</li>
                        <li>• Shutter: 8-25 seconds</li>
                        <li>• Focus: Manual to infinity</li>
                        <li>• Format: Always shoot RAW</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-[#E6786E] mb-3">Essential Gear</h3>
                      <ul className="space-y-1 text-white/80 text-sm">
                        <li>• Sturdy tripod</li>
                        <li>• Wide-angle lens</li>
                        <li>• Extra batteries (cold drains them)</li>
                        <li>• Headlamp with red filter</li>
                        <li>• Warm clothing and hand warmers</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#E6786E] via-[#D4695F] to-[#C25A50] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden mt-12">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

              <div className="relative space-y-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <Star className="w-6 h-6 text-yellow-400" />
                  <Star className="w-6 h-6 text-yellow-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Get Aurora Alerts & KP Index Forecasts</h2>
                <p className="text-lg opacity-90">
                  Never miss northern lights again with Solora's AI-powered aurora predictions and instant notifications
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
