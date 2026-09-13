import Link from "next/link"
import {
  Apple,
  BrainCircuit,
  Eye,
  Layers3,
  MapPin,
  Search,
  Sparkles,
  Watch,
  Workflow,
} from "lucide-react"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { siteConfig } from "@/lib/site"

const planningSignals = [
  "Sunrise and sunset quality",
  "Golden hour, blue hour, and twilight",
  "Moon phases and visibility",
  "Milky Way and night-sky conditions",
  "Aurora and astronomical events",
  "Clouds, rain, wind, air quality, tides, and waves",
]

const systemFeatures = [
  {
    icon: Workflow,
    title: "Six smarter App Shortcuts",
    body: "Ask Siri about twilight, current conditions, sunrise or sunset quality, the Moon, the night sky, and saved places—without navigating through the app.",
  },
  {
    icon: Search,
    title: "Every saved place, searchable",
    body: "IndexedEntity and Core Spotlight give locations stable identities, useful metadata, and deep links that open the exact forecast from system search.",
  },
  {
    icon: BrainCircuit,
    title: "Intelligence grounded in the forecast",
    body: "When Apple Intelligence is available, Foundation Models turn verified Solora data into concise planning guidance. Deterministic summaries remain ready everywhere else.",
  },
  {
    icon: Watch,
    title: "Timely on Apple Watch",
    body: "On watchOS 27, Tonight with Solora uses Widget Relevance to surface twilight and Milky Way windows when they are most useful.",
  },
]

export function IOS27Page() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#030916] text-white selection:bg-[#ff8b72]/30">
      <SiteHeader locale="en" />

      <main>
        <section className="relative border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(45,104,197,0.34),transparent_34%),radial-gradient(circle_at_15%_10%,rgba(230,120,110,0.16),transparent_28%)]" />
          <div className="relative mx-auto grid min-h-[84vh] max-w-7xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.1fr_0.75fr] lg:gap-20 lg:py-16">
            <div className="max-w-3xl">
              <p className="mb-7 text-sm font-semibold uppercase tracking-[0.22em] text-[#ff9a83]">
                Solora 2.0 · iOS 27
              </p>
              <h1 className="text-balance text-6xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-[6.7rem]">
                Plan skies smarter.
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-relaxed text-[#c8d3e6] md:text-2xl">
                A new version and a new app experience—redesigned around the moment you decide whether the sky is worth chasing.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href={siteConfig.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3 font-semibold text-[#071226] transition hover:bg-[#ffe7df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <Apple className="mr-2 h-5 w-5" aria-hidden="true" />
                  View on the App Store
                </Link>
                <span className="text-sm leading-relaxed text-white/60">
                  Created independently by a landscape photographer
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[400px] lg:mr-4 lg:max-w-[330px]">
              <div className="absolute -inset-10 rounded-[4rem] bg-blue-400/10 blur-3xl" />
              <img
                src="/ios27/solora-2-hero.png"
                alt="Solora 2.0 on iOS 27 showing a personalized sky forecast"
                width={853}
                height={1844}
                className="relative h-auto w-full rounded-[2rem] shadow-[0_40px_120px_rgba(0,0,0,0.55)]"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div className="order-2 mx-auto w-full max-w-[430px] lg:order-1">
              <img
                src="/ios27/solora-2-home.png"
                alt="The redesigned Solora Home screen running on iOS 27"
                width={1206}
                height={2622}
                className="h-auto w-full rounded-[2rem] shadow-[0_30px_90px_rgba(13,70,153,0.25)]"
              />
              <p className="mt-4 text-center text-xs text-white/45">Untouched in-app capture on iOS 27</p>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff9a83]">A redesigned Home</p>
              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Your planning signals, in your order.
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#b9c7dd]">
                Solora 2.0 brings the place, forecast, sky quality, Moon, and regional outlook into one calm view. New SwiftUI reorderable containers let each person move forecast cards directly and keep the signals they trust closest.
              </p>
              <div className="mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                {planningSignals.map((signal) => (
                  <div key={signal} className="flex items-start gap-3 border-t border-white/10 pt-4 text-white/80">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#ff9a83]" aria-hidden="true" />
                    <span>{signal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#07142b]">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#88afff]">iOS and iPadOS 27</p>
                <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  The whole sky forecast before Solora opens.
                </h2>
                <p className="mt-7 text-lg leading-relaxed text-[#bdc9de]">
                  The new extra-large portrait widget combines twilight quality, the Moon, weather, marine conditions, and night visibility in one glanceable surface. It is a complete planning dashboard shaped for the new portrait widget family on iPhone and iPad.
                </p>
                <div className="mt-9 flex items-center gap-4 text-white/75">
                  <Layers3 className="h-7 w-7 text-[#88afff]" aria-hidden="true" />
                  <span>Built with SwiftUI and WidgetKit for the newest system surfaces.</span>
                </div>
              </div>
              <img
                src="/ios27/solora-2-event.png"
                alt="A glass number 27 floating over a clear blue twilight sky"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-[2rem] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff9a83]">Siri, Shortcuts, Spotlight, intelligence</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              The right answer, wherever planning begins.
            </h2>
          </div>

          <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
            {systemFeatures.map(({ icon: Icon, title, body }, index) => (
              <article key={title} className="grid gap-5 py-9 md:grid-cols-[72px_0.75fr_1.25fr] md:items-start md:gap-8 md:py-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.06] text-[#ff9a83]">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
                  <span className="sr-only">Feature {index + 1}: </span>{title}
                </h3>
                <p className="max-w-2xl text-lg leading-relaxed text-[#aebdd3]">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[linear-gradient(135deg,#142a54_0%,#08152c_48%,#250f18_100%)]">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
            <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff9a83]">One Apple ecosystem</p>
                <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  Native tools working as one forecast.
                </h2>
                <p className="mt-7 text-lg leading-relaxed text-[#c0ccdf]">
                  Solora combines Apple frameworks with proprietary sky-quality predictions so weather and astronomy become one clear decision—not a wall of charts.
                </p>
              </div>
              <div className="grid gap-x-12 gap-y-9 sm:grid-cols-2">
                {[
                  ["WeatherKit", "High-resolution weather conditions and forecasts."],
                  ["MapKit", "Regional maps for comparing sky quality and conditions."],
                  ["ARKit", "In-context paths for the Sun, Moon, and night sky."],
                  ["Vision", "On-device assistance for understanding sky photography."],
                  ["SwiftData", "Fast, private persistence for places and preferences."],
                  ["WatchConnectivity", "A continuous planning experience between iPhone and Apple Watch."],
                ].map(([title, body]) => (
                  <div key={title}>
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                    <p className="mt-2 leading-relaxed text-[#aebdd3]">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-28 text-center md:px-8 md:py-40">
          <Eye className="mx-auto h-10 w-10 text-[#ff9a83]" aria-hidden="true" />
          <h2 className="mt-8 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Built to help more people look up.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-[#b9c7dd] md:text-xl">
            Solora is made by an independent landscape photographer who wanted to know when a sunrise, sunset, Moon, or night sky would truly be worth the trip. Version 2.0 makes that answer more personal, more glanceable, and more deeply integrated across Apple devices.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-white/60">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" aria-hidden="true" /> 26 App Store locales</span>
            <span>VoiceOver and Dynamic Type</span>
            <span>Reduce Motion support</span>
            <span>iOS 17 compatibility retained</span>
          </div>
          <Link
            href={siteConfig.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex min-h-12 items-center justify-center rounded-full bg-[#e6786e] px-8 py-3 font-semibold text-white transition hover:bg-[#f18c82] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6786e]"
          >
            <Apple className="mr-2 h-5 w-5" aria-hidden="true" />
            Discover Solora
          </Link>
        </section>
      </main>

      <SiteFooter locale="en" currentPath="/ios27" />
    </div>
  )
}
