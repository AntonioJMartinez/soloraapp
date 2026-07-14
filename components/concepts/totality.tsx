"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

import { ResponsiveImage } from "@/components/responsive-image"
import { AppStoreButton, ConceptHeader, ConceptNav, PhoneFrame, Reveal, Stars } from "@/components/concepts/shared"

/* Totality reaches northern Spain around 20:29 CEST on August 12, 2026 */
const ECLIPSE_TIME = Date.UTC(2026, 7, 12, 18, 29, 0)

type CountdownParts = { days: string; hours: string; minutes: string; seconds: string }

function useCountdown(target: number): CountdownParts | null {
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    setNow(Date.now())
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  if (now === null) return null

  const diff = Math.max(0, target - now)
  const pad = (value: number) => String(value).padStart(2, "0")

  return {
    days: String(Math.floor(diff / 86_400_000)),
    hours: pad(Math.floor(diff / 3_600_000) % 24),
    minutes: pad(Math.floor(diff / 60_000) % 60),
    seconds: pad(Math.floor(diff / 1000) % 60),
  }
}

function Countdown({ compact = false }: { compact?: boolean }) {
  const parts = useCountdown(ECLIPSE_TIME)
  const units: Array<{ key: keyof CountdownParts; label: string }> = [
    { key: "days", label: "Days" },
    { key: "hours", label: "Hours" },
    { key: "minutes", label: "Minutes" },
    { key: "seconds", label: "Seconds" },
  ]

  return (
    <div className={`flex items-start justify-center ${compact ? "gap-6" : "gap-6 md:gap-12"}`}>
      {units.map((unit) => (
        <div key={unit.key} className="text-center">
          <p
            suppressHydrationWarning
            className={`font-mono font-extralight tabular-nums text-white ${
              compact ? "text-3xl md:text-4xl" : "text-4xl md:text-7xl"
            }`}
          >
            {parts ? parts[unit.key] : "--"}
          </p>
          <p className={`mt-2 uppercase tracking-[0.35em] text-white/40 ${compact ? "text-[9px]" : "text-[10px] md:text-xs"}`}>
            {unit.label}
          </p>
        </div>
      ))}
    </div>
  )
}

function EclipseDisc() {
  return (
    <div className="relative mx-auto h-52 w-52 md:h-80 md:w-80" aria-hidden="true">
      {/* rotating corona rays — gradient + mask, no GPU blur filters */}
      <div
        className="concept-corona-spin absolute -inset-[45%] rounded-full opacity-70"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(255,205,150,0.28) 20deg, transparent 55deg, rgba(255,180,120,0.22) 100deg, transparent 140deg, rgba(255,205,150,0.26) 200deg, transparent 245deg, rgba(255,180,120,0.24) 300deg, transparent 345deg)",
          maskImage: "radial-gradient(circle, transparent 26%, black 38%, rgba(0,0,0,0.4) 52%, transparent 68%)",
          WebkitMaskImage: "radial-gradient(circle, transparent 26%, black 38%, rgba(0,0,0,0.4) 52%, transparent 68%)",
        }}
      />
      {/* breathing glow */}
      <div className="concept-corona absolute -inset-[40%] rounded-full bg-[radial-gradient(circle,rgba(255,210,160,0.5)_28%,rgba(255,170,100,0.24)_42%,rgba(255,150,80,0.1)_55%,transparent_70%)]" />
      {/* the black disc */}
      <div className="absolute inset-0 rounded-full bg-black shadow-[0_0_90px_12px_rgba(255,195,130,0.4)] ring-1 ring-[#FFD9A8]/70" />
    </div>
  )
}

const facts = [
  { value: "1m 44s", label: "of totality on the centerline — day becomes night at sunset" },
  { value: "20:29", label: "local time in northern Spain, with the Sun low over the western horizon" },
  { value: "121 yrs", label: "since mainland Spain last stood inside a total solar eclipse" },
]

const planPoints = [
  "Interactive path maps from A Coruña to Palma",
  "Minute-by-minute local timings for your exact location",
  "Cloud-cover and visibility odds along the path",
  "Safety checklist and photography planning built in",
]

const afterFeatures = [
  { title: "Aurora alerts", body: "KP index and probability warnings before storms peak." },
  { title: "Golden hour", body: "Light-quality scores for every sunrise and sunset." },
  { title: "Moon calendar", body: "Phases, rise and set times, and illumination." },
  { title: "Milky Way windows", body: "Galactic core visibility on your calendar." },
]

export function TotalityConcept() {
  return (
    <div className="bg-black text-white antialiased">
      <ConceptHeader ctaLabel="Get Solora" />

      {/* Teaser hero */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-28">
        <Stars count={60} seed={5} className="opacity-70" />

        <Reveal>
          <EclipseDisc />
        </Reveal>

        <div className="relative z-10 mt-12 text-center md:mt-16">
          <Reveal delay={150}>
            <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-[#FFD9A8]/80 md:text-xs">
              12 · 08 · 2026 — Northern Spain
            </p>
          </Reveal>
          <Reveal delay={300}>
            <h1 className="concept-serif mt-6 text-5xl font-light italic tracking-tight md:text-8xl">
              Darkness, at sunset.
            </h1>
          </Reveal>
          <Reveal delay={450}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
              The first total solar eclipse over mainland Spain since 1905. Solora tells you exactly where to stand —
              and when to look up.
            </p>
          </Reveal>
          <Reveal delay={600}>
            <div className="mt-12">
              <Countdown />
            </div>
          </Reveal>
          <Reveal delay={750}>
            <div className="mt-12 flex flex-col items-center gap-4">
              <AppStoreButton label="Get Solora — free" />
              <p className="text-sm text-white/40">iPhone · iPad · Apple Watch · Mac</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The facts */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-px overflow-hidden md:grid-cols-3">
          {facts.map((fact, index) => (
            <Reveal key={fact.value} delay={index * 120} className="px-8 py-14 text-center md:py-20">
              <p className="font-mono text-4xl font-extralight tabular-nums text-[#FFD9A8] md:text-6xl">{fact.value}</p>
              <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-white/55">{fact.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Full-bleed photo band */}
      <section className="relative overflow-hidden">
        <div className="relative h-[70vh] min-h-[420px]">
          <ResponsiveImage
            src="/solar-eclipse-astronomical-event.png"
            alt="Total solar eclipse with glowing corona over dark mountains"
            sizes="100vw"
            width={1024}
            height={1024}
            className="concept-kenburns h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <Reveal>
              <p className="concept-serif max-w-3xl text-center text-3xl font-light italic leading-snug text-white md:text-5xl">
                &ldquo;You don&apos;t watch totality.
                <br />
                You stand inside it.&rdquo;
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The plan */}
      <section className="relative py-28 md:py-40">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-[#FFD9A8]/80">The plan</p>
            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Two minutes of totality.
              <br />
              <span className="text-white/50">Zero minutes of doubt.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
              Miss the path by a few kilometres and you miss everything. Solora puts the eclipse — and every
              astronomical event after it — on your map, on your clock, and on your wrist.
            </p>
            <ul className="mt-8 space-y-3">
              {planPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-white/85">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD9A8]" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <AppStoreButton label="Download Solora" />
              <Link
                href="/blog/total-solar-eclipse-august-2026"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
              >
                Read the 2026 Spain guide
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={200} className="justify-self-center lg:justify-self-end">
            <PhoneFrame
              src="/onboarding-5.jpg"
              alt="Solora upcoming events screen showing astronomical events and eclipses"
              className="w-[240px] md:w-[300px]"
            />
          </Reveal>
        </div>
      </section>

      {/* After totality */}
      <section className="border-t border-white/10 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-center font-mono text-[11px] uppercase tracking-[0.5em] text-white/40">
              And every night after
            </p>
          </Reveal>
          <div className="mt-14 grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {afterFeatures.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 120}>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-relaxed text-white/55">{feature.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final call */}
      <section className="relative overflow-hidden border-t border-white/10 py-28 text-center md:py-40">
        <Stars count={50} seed={31} className="opacity-60" />
        <div className="relative z-10 mx-auto max-w-2xl px-6">
          <Reveal>
            <Countdown compact />
          </Reveal>
          <Reveal delay={200}>
            <h2 className="concept-serif mt-10 text-4xl font-light italic md:text-6xl">Be in the path.</h2>
          </Reveal>
          <Reveal delay={350}>
            <div className="mt-10 flex flex-col items-center gap-4">
              <AppStoreButton label="Get Solora — free" />
              <p className="text-sm text-white/40">Free on the App Store · No account needed</p>
            </div>
          </Reveal>
        </div>
      </section>

      <ConceptNav current="totality" />
    </div>
  )
}
