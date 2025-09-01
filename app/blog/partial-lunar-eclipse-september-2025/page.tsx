import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowLeft, Download, Moon, Camera, Globe } from "lucide-react"
import Link from "next/link"
import { Oswald } from "next/font/google"
import type { Metadata } from "next"

const oswald = Oswald({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Partial Lunar Eclipse September 7, 2025: Photography Guide | Solora Blog",
  description:
    "Complete guide to photographing the partial lunar eclipse on September 7, 2025. Timing, visibility maps, camera settings, and techniques for capturing this rare celestial event.",
  keywords: [
    "partial lunar eclipse september 2025",
    "lunar eclipse photography",
    "september 7 2025 eclipse",
    "eclipse photography guide",
    "lunar eclipse timing",
    "eclipse visibility map",
    "moon eclipse camera settings",
    "harvest moon eclipse",
    "eclipse photography tips",
    "lunar eclipse 2025",
  ],
  openGraph: {
    title: "Partial Lunar Eclipse September 7, 2025: Photography Guide",
    description:
      "Master lunar eclipse photography with our complete guide to the September 7, 2025 partial lunar eclipse. Timing, settings, and techniques.",
    type: "article",
    url: "https://solora.app/blog/partial-lunar-eclipse-september-2025",
    images: [
      {
        url: "https://solora.app/partial-lunar-eclipse-september-2025.png",
        width: 1200,
        height: 630,
        alt: "Partial lunar eclipse showing Earth's shadow crossing the moon",
      },
    ],
    publishedTime: "2024-12-20T00:00:00.000Z",
    authors: ["Antonio Jose Martinez Sanchez"],
  },
  alternates: {
    canonical: "/blog/partial-lunar-eclipse-september-2025",
  },
}

export default function PartialLunarEclipseSeptember2025() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Partial Lunar Eclipse September 7, 2025: Photography Guide",
            description:
              "Complete guide to photographing the partial lunar eclipse on September 7, 2025. Timing, visibility maps, camera settings, and techniques.",
            image: "https://solora.app/partial-lunar-eclipse-september-2025.png",
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
            datePublished: "2024-12-20T00:00:00.000Z",
            dateModified: "2024-12-20T00:00:00.000Z",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://solora.app/blog/partial-lunar-eclipse-september-2025",
            },
            articleSection: "Astronomy",
            wordCount: 2900,
            timeRequired: "PT8M",
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
                  <Clock className="w-4 h-4" />8 min read
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Partial Lunar Eclipse September 7, 2025: Photography Guide
              </h1>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                On September 7, 2025, the Harvest Moon will experience a partial lunar eclipse visible across Europe,
                Africa, Asia, and Australia. Learn how to photograph this spectacular celestial event with perfect
                timing and camera settings.
              </p>

              <div className="aspect-video overflow-hidden rounded-2xl">
                <img
                  src="partial-lunar-eclipse-september-2025.png"
                  alt="Partial lunar eclipse showing Earth's shadow crossing the moon with reddish coloration"
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-8 text-white/90 leading-relaxed">
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What is a Partial Lunar Eclipse?</h2>
                  <p className="mb-4">
                    A partial lunar eclipse occurs when Earth passes between the Sun and Moon, casting its shadow on
                    part of the lunar surface. Unlike a total lunar eclipse, only a portion of the Moon enters Earth's
                    umbra (the darkest part of the shadow), creating a dramatic bite-shaped shadow across the Moon.
                  </p>
                  <p className="mb-4">
                    During the September 7, 2025 eclipse, approximately 8.4% of the Moon's diameter will be covered by
                    Earth's umbra, creating a subtle but noticeable darkening and reddish coloration on the affected
                    portion of the lunar surface.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Eclipse Timing and Phases</h2>

                  <div className="bg-gradient-to-r from-[#E6786E]/20 to-[#D4695F]/20 rounded-lg p-6 border border-[#E6786E]/30 mb-6">
                    <h3 className="text-xl font-bold text-[#E6786E] mb-4">September 7, 2025 Eclipse Timeline (UTC):</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                        <span className="font-bold">Penumbral Eclipse Begins:</span>
                        <span className="text-white/80">16:40 UTC</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                        <span className="font-bold">Partial Eclipse Begins:</span>
                        <span className="text-white/80">17:27 UTC</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-[#E6786E]/20 rounded-lg border border-[#E6786E]/50">
                        <span className="font-bold">Maximum Eclipse:</span>
                        <span className="text-white">18:11 UTC</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                        <span className="font-bold">Partial Eclipse Ends:</span>
                        <span className="text-white/80">18:56 UTC</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                        <span className="font-bold">Penumbral Eclipse Ends:</span>
                        <span className="text-white/80">19:43 UTC</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-bold text-[#E6786E] mb-3">Eclipse Duration:</h3>
                    <ul className="space-y-2 text-white/80">
                      <li>
                        <strong>Total Duration:</strong> 3 hours 3 minutes (penumbral phase)
                      </li>
                      <li>
                        <strong>Partial Phase:</strong> 1 hour 29 minutes
                      </li>
                      <li>
                        <strong>Maximum Coverage:</strong> 8.4% of Moon's diameter
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Visibility and Geographic Coverage</h2>
                  <p className="mb-4">
                    The September 7, 2025 partial lunar eclipse will be visible from a large portion of the Eastern
                    Hemisphere, offering excellent viewing opportunities for millions of observers.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white/5 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Globe className="w-6 h-6 text-[#E6786E]" />
                        <h3 className="text-lg font-bold text-[#E6786E]">Full Visibility</h3>
                      </div>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• Europe (entire continent)</li>
                        <li>• Africa (entire continent)</li>
                        <li>• Asia (most regions)</li>
                        <li>• Australia (entire continent)</li>
                        <li>• Middle East</li>
                        <li>• Indian Ocean region</li>
                      </ul>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Globe className="w-6 h-6 text-[#E6786E]" />
                        <h3 className="text-lg font-bold text-[#E6786E]">Partial Visibility</h3>
                      </div>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• Eastern North America (moonrise during eclipse)</li>
                        <li>• Western Asia (moonset during eclipse)</li>
                        <li>• Eastern South America (partial visibility)</li>
                        <li>• Antarctica (limited regions)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-bold text-[#E6786E] mb-3">Local Timing Conversion:</h3>
                    <p className="text-white/80 mb-3">
                      Convert the UTC times above to your local time zone. The eclipse will be best viewed when the Moon
                      is high in the sky during the partial phase (17:27 - 18:56 UTC).
                    </p>
                    <p className="text-white/70 text-sm">
                      <strong>Example:</strong> In London (BST), maximum eclipse occurs at 19:11 local time, perfect for
                      evening viewing.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Photography Equipment and Settings</h2>

                  <div className="bg-white/5 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-bold text-[#E6786E] mb-4">Recommended Camera Settings:</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-white mb-2">Before Eclipse (Bright Moon):</h4>
                        <ul className="text-white/80 text-sm space-y-1">
                          <li>
                            • <strong>ISO:</strong> 100-400
                          </li>
                          <li>
                            • <strong>Aperture:</strong> f/8-f/11
                          </li>
                          <li>
                            • <strong>Shutter:</strong> 1/125 - 1/250s
                          </li>
                          <li>
                            • <strong>Focus:</strong> Manual to infinity
                          </li>
                          <li>
                            • <strong>White Balance:</strong> Daylight
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2">During Eclipse (Dimmed Moon):</h4>
                        <ul className="text-white/80 text-sm space-y-1">
                          <li>
                            • <strong>ISO:</strong> 800-3200
                          </li>
                          <li>
                            • <strong>Aperture:</strong> f/5.6-f/8
                          </li>
                          <li>
                            • <strong>Shutter:</strong> 1-4 seconds
                          </li>
                          <li>
                            • <strong>Focus:</strong> Manual (don't change)
                          </li>
                          <li>
                            • <strong>White Balance:</strong> Tungsten/Warm
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-[#E6786E] mb-3">Essential Equipment:</h3>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• DSLR or mirrorless camera</li>
                        <li>• Telephoto lens (200-600mm)</li>
                        <li>• Sturdy tripod</li>
                        <li>• Remote shutter release</li>
                        <li>• Extra batteries</li>
                        <li>• Fast memory cards</li>
                      </ul>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-[#E6786E] mb-3">Optional Gear:</h3>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• Teleconverter (1.4x or 2x)</li>
                        <li>• Wide-angle lens for landscape shots</li>
                        <li>• Red flashlight</li>
                        <li>• Folding chair</li>
                        <li>• Weather protection</li>
                        <li>• Smartphone with eclipse app</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Photography Techniques</h2>

                  <div className="space-y-6 mb-6">
                    <div className="bg-white/5 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Camera className="w-6 h-6 text-[#E6786E]" />
                        <h3 className="text-lg font-bold text-[#E6786E]">Close-up Moon Photography</h3>
                      </div>
                      <p className="text-white/80 mb-3">
                        Use a telephoto lens (400mm+) to capture detailed shots of the eclipse progression. Take shots
                        every 5-10 minutes to document the shadow's movement across the lunar surface.
                      </p>
                      <p className="text-white/70 text-sm">
                        <strong>Tip:</strong> Use live view and zoom in to achieve precise manual focus on lunar
                        craters.
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Moon className="w-6 h-6 text-[#E6786E]" />
                        <h3 className="text-lg font-bold text-[#E6786E]">Eclipse Sequence Composite</h3>
                      </div>
                      <p className="text-white/80 mb-3">
                        Create a composite image showing the eclipse progression by taking photos at regular intervals
                        and combining them in post-processing. This creates a stunning visual timeline of the event.
                      </p>
                      <p className="text-white/70 text-sm">
                        <strong>Technique:</strong> Keep your camera in the exact same position and use identical
                        framing for each shot.
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Globe className="w-6 h-6 text-[#E6786E]" />
                        <h3 className="text-lg font-bold text-[#E6786E]">Landscape Eclipse Photography</h3>
                      </div>
                      <p className="text-white/80 mb-3">
                        Include foreground elements like landmarks, trees, or buildings to create context and scale. Use
                        a wide-angle lens and focus stack if necessary to keep both foreground and moon sharp.
                      </p>
                      <p className="text-white/70 text-sm">
                        <strong>Planning:</strong> Scout locations in advance and use apps to predict the moon's
                        position relative to your foreground.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Weather and Location Planning</h2>
                  <p className="mb-4">
                    Clear skies are essential for eclipse photography. Start monitoring weather forecasts at least a
                    week before the event and have backup locations ready.
                  </p>

                  <div className="bg-white/5 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-bold text-[#E6786E] mb-4">Location Selection Criteria:</h3>
                    <ul className="space-y-2 text-white/80">
                      <li>
                        <strong>Clear Eastern Sky:</strong> The moon will be in the eastern sky during the eclipse
                      </li>
                      <li>
                        <strong>Minimal Light Pollution:</strong> Darker locations provide better contrast and color
                      </li>
                      <li>
                        <strong>High Elevation:</strong> Mountains or hills offer clearer atmospheric conditions
                      </li>
                      <li>
                        <strong>Safe Access:</strong> Choose locations that are safe to access in the evening
                      </li>
                      <li>
                        <strong>Weather Backup:</strong> Have multiple locations within driving distance
                      </li>
                    </ul>
                  </div>

                  <p className="mb-4">
                    The eclipse occurs during the Harvest Moon, which will be quite bright even during the partial
                    phase. This makes it visible even from urban areas, though rural locations will provide better
                    photographic opportunities.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Post-Processing Tips</h2>
                  <p className="mb-4">
                    Eclipse photography often requires careful post-processing to bring out the subtle details and
                    colors of the event:
                  </p>

                  <ul className="list-disc list-inside space-y-2 mb-6 text-white/80">
                    <li>
                      <strong>Highlight Recovery:</strong> Use graduated adjustments to balance the bright and shadowed
                      portions of the moon
                    </li>
                    <li>
                      <strong>Color Enhancement:</strong> Carefully enhance the reddish tones in the eclipsed portion
                      without oversaturating
                    </li>
                    <li>
                      <strong>Noise Reduction:</strong> Apply noise reduction to higher ISO shots while preserving lunar
                      surface details
                    </li>
                    <li>
                      <strong>Sharpening:</strong> Use masking to sharpen only the lunar surface, not the dark sky
                    </li>
                    <li>
                      <strong>Sequence Alignment:</strong> Use Photoshop's auto-align layers for creating composite
                      sequences
                    </li>
                  </ul>

                  <div className="bg-white/5 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#E6786E] mb-3">Color Grading Tips:</h3>
                    <p className="text-white/80">
                      The eclipsed portion of the moon often appears copper-red due to Earth's atmosphere refracting
                      sunlight. Enhance these warm tones subtly while maintaining the natural silver-white color of the
                      uneclipsed portion.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Safety and Viewing Tips</h2>
                  <p className="mb-4">
                    Unlike solar eclipses, lunar eclipses are completely safe to view with the naked eye, binoculars, or
                    telescopes. No special filters are required.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-[#E6786E] mb-3">Viewing Safety:</h3>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• No eye protection needed</li>
                        <li>• Safe to view directly</li>
                        <li>• Binoculars enhance the experience</li>
                        <li>• Telescopes show surface details</li>
                        <li>• Photography is completely safe</li>
                      </ul>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-[#E6786E] mb-3">Comfort Tips:</h3>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• Dress warmly for evening viewing</li>
                        <li>• Bring a reclining chair</li>
                        <li>• Use red flashlight to preserve night vision</li>
                        <li>• Have snacks and warm drinks</li>
                        <li>• Invite friends and family to share the experience</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#E6786E] via-[#D4695F] to-[#C25A50] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden mt-12">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

              <div className="relative space-y-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Moon className="w-6 h-6" />
                  <Camera className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Get Eclipse Alerts & Timing</h2>
                <p className="text-lg opacity-90">
                  Never miss a lunar eclipse with precise timing alerts, visibility maps, and photography tips from
                  Solora
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
