import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowLeft, Download } from "lucide-react"
import Link from "next/link"
import { Oswald } from "next/font/google"
import type { Metadata } from "next"

const oswald = Oswald({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ultimate Guide to Golden Hour Photography: Timing, Tips, and Techniques | Solora Blog",
  description:
    "Master golden hour photography with our comprehensive guide. Learn the best times, camera settings, and composition techniques for stunning sunset and sunrise photos using AI forecasts.",
  keywords: [
    "golden hour photography",
    "sunset photography tips",
    "sunrise photography guide",
    "golden hour timing",
    "photography camera settings",
    "golden hour composition",
    "best time for photography",
    "golden hour forecast",
    "photography lighting tips",
    "landscape photography",
  ],
  openGraph: {
    title: "Ultimate Guide to Golden Hour Photography: Timing, Tips, and Techniques",
    description:
      "Master the art of golden hour photography with expert tips on timing, camera settings, and composition techniques.",
    type: "article",
    url: "https://solora-app.com/blog/golden-hour-photography-guide",
    images: [
      {
        url: "https://solora-app.com/golden-hour-sunset-photography.png",
        width: 1200,
        height: 630,
        alt: "Golden hour sunset photography with dramatic sky colors",
      },
    ],
    publishedTime: "2024-12-15T00:00:00.000Z",
    authors: ["Antonio Jose Martinez Sanchez"],
  },
  alternates: {
    canonical: "/blog/golden-hour-photography-guide",
  },
}

export default function GoldenHourGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Ultimate Guide to Golden Hour Photography: Timing, Tips, and Techniques",
            description:
              "Master the art of golden hour photography with our comprehensive guide. Learn the best times, camera settings, and composition techniques for stunning sunset and sunrise photos.",
            image: "https://solora-app.com/golden-hour-sunset-photography.png",
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
            datePublished: "2024-12-15T00:00:00.000Z",
            dateModified: "2024-12-15T00:00:00.000Z",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://solora-app.com/blog/golden-hour-photography-guide",
            },
            articleSection: "Photography",
            wordCount: 2500,
            timeRequired: "PT8M",
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
                  Photography
                </Badge>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />8 min read
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Ultimate Guide to Golden Hour Photography: Timing, Tips, and Techniques
              </h1>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Master the art of golden hour photography with our comprehensive guide. Learn the best times, camera
                settings, and composition techniques for stunning sunset and sunrise photos using AI-powered forecasts.
              </p>

              <div className="aspect-video overflow-hidden rounded-2xl">
                <img
                  src="/golden-hour-sunset-photography.png"
                  alt="Golden hour sunset photography with dramatic sky colors and perfect lighting"
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-8 text-white/90 leading-relaxed">
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What is Golden Hour?</h2>
                  <p className="mb-4">
                    Golden hour, also known as the "magic hour," occurs twice daily when the sun is low on the horizon.
                    This creates soft, warm, diffused light that's perfect for photography. The light during golden hour
                    has a beautiful golden-orange hue that makes everything look magical.
                  </p>
                  <p>
                    Unlike harsh midday sunlight, golden hour light is gentle and flattering, eliminating harsh shadows
                    and creating a natural glow that enhances both landscapes and portraits.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Perfect Timing: When is Golden Hour?
                  </h2>
                  <p className="mb-4">
                    Golden hour timing varies by location, season, and weather conditions. Generally, it occurs:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-white/80">
                    <li>
                      <strong>Morning Golden Hour:</strong> Starts about 15-20 minutes before sunrise and lasts for
                      30-60 minutes after
                    </li>
                    <li>
                      <strong>Evening Golden Hour:</strong> Begins 1-2 hours before sunset and continues for 15-20
                      minutes after
                    </li>
                    <li>
                      <strong>Duration varies:</strong> Longer in winter, shorter in summer; longer at higher latitudes
                    </li>
                  </ul>
                  <p>
                    The key to perfect golden hour photography is accurate timing. Weather conditions, atmospheric
                    clarity, and seasonal changes all affect the quality and duration of golden hour light.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Essential Camera Settings</h2>
                  <p className="mb-4">
                    Golden hour photography requires specific camera settings to capture the warm, soft light
                    effectively:
                  </p>

                  <div className="bg-white/5 rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-bold text-[#E6786E] mb-3">Recommended Settings:</h3>
                    <ul className="space-y-2 text-white/80">
                      <li>
                        <strong>ISO:</strong> Keep low (100-400) to minimize noise
                      </li>
                      <li>
                        <strong>Aperture:</strong> f/8-f/11 for landscapes, f/2.8-f/5.6 for portraits
                      </li>
                      <li>
                        <strong>Shutter Speed:</strong> Adjust based on movement and desired effect
                      </li>
                      <li>
                        <strong>White Balance:</strong> Daylight or slightly warm (3200-4000K)
                      </li>
                      <li>
                        <strong>Focus:</strong> Single-point autofocus or manual focus
                      </li>
                    </ul>
                  </div>

                  <p>
                    Shoot in RAW format to maintain maximum flexibility in post-processing. Golden hour light changes
                    rapidly, so be prepared to adjust settings frequently.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Composition Techniques</h2>
                  <p className="mb-4">
                    Golden hour light enhances any composition, but certain techniques work particularly well:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-[#E6786E] mb-3">Backlighting</h3>
                      <p className="text-white/80">
                        Position your subject between you and the sun to create stunning silhouettes or rim lighting
                        effects.
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-[#E6786E] mb-3">Side Lighting</h3>
                      <p className="text-white/80">
                        Use the sun at a 45-90 degree angle to your subject for dramatic shadows and texture.
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-[#E6786E] mb-3">Foreground Elements</h3>
                      <p className="text-white/80">
                        Include interesting foreground elements to add depth and lead the viewer's eye through the
                        image.
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-[#E6786E] mb-3">Reflections</h3>
                      <p className="text-white/80">
                        Use water, glass, or other reflective surfaces to double the impact of golden hour light.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Weather and Atmospheric Conditions</h2>
                  <p className="mb-4">The quality of golden hour light depends heavily on atmospheric conditions:</p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-white/80">
                    <li>
                      <strong>Clear skies:</strong> Produce clean, consistent golden light but may lack drama
                    </li>
                    <li>
                      <strong>Scattered clouds:</strong> Create the most dramatic and colorful golden hour scenes
                    </li>
                    <li>
                      <strong>Overcast conditions:</strong> Can still produce beautiful soft light, though less golden
                    </li>
                    <li>
                      <strong>Atmospheric haze:</strong> Enhances the warm tones and creates dreamy effects
                    </li>
                  </ul>
                  <p>
                    Understanding weather patterns and atmospheric conditions is crucial for predicting the best golden
                    hour opportunities.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Planning Your Golden Hour Shoot</h2>
                  <p className="mb-4">Successful golden hour photography requires careful planning:</p>

                  <div className="bg-white/5 rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-bold text-[#E6786E] mb-3">Pre-Shoot Checklist:</h3>
                    <ul className="space-y-2 text-white/80">
                      <li>✓ Check sunrise/sunset times for your location</li>
                      <li>✓ Monitor weather forecasts and cloud coverage</li>
                      <li>✓ Scout locations during different times of day</li>
                      <li>✓ Arrive 30-45 minutes before golden hour begins</li>
                      <li>✓ Bring extra batteries (cold weather drains them faster)</li>
                      <li>✓ Use a tripod for sharp images in low light</li>
                    </ul>
                  </div>

                  <p>
                    The best golden hour photos often come from locations you've scouted in advance. Know where the sun
                    will rise or set relative to your composition, and be prepared for rapidly changing light
                    conditions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Common Mistakes to Avoid</h2>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-white/80">
                    <li>Arriving too late - golden hour light changes quickly</li>
                    <li>Over-exposing highlights - preserve the golden tones</li>
                    <li>Ignoring the background - cluttered backgrounds ruin great light</li>
                    <li>Not checking the weather - clouds can make or break your shoot</li>
                    <li>Forgetting about blue hour - the period just after golden hour can be equally beautiful</li>
                  </ul>
                </section>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#E6786E] via-[#D4695F] to-[#C25A50] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden mt-12">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

              <div className="relative space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold">Never Miss Perfect Golden Hour Again</h2>
                <p className="text-lg opacity-90">
                  Get AI-powered golden hour forecasts, weather predictions, and timing alerts with Solora
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
