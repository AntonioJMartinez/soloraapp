"use client"

import { ChevronDown } from "lucide-react"

import { ResponsiveImage } from "@/components/responsive-image"
import { AppStoreButton, ConceptHeader, ConceptNav, PhoneFrame, Reveal, Stars } from "@/components/concepts/shared"

const acts = [
  {
    id: "golden-hour",
    kicker: "Act I — Golden Hour",
    time: "05:47",
    title: "First light, computed.",
    body: "Solora scores every sunrise and sunset before it happens — cloud cover, visibility, and light quality for the exact spot where you'll stand. No more waking at five for a grey sky.",
    points: ["Sunrise & sunset quality ratings", "Golden and blue hour timers", "Hyperlocal cloud and fog forecasts"],
    image: "/golden-hour-sunset-photography.png",
    imageAlt: "Golden hour sunset over calm water with a sailboat",
    phone: "/onboarding-1.jpg",
    phoneAlt: "Solora main screen showing sunrise and sunset quality ratings",
  },
  {
    id: "moon",
    kicker: "Act II — Moonrise",
    time: "21:33",
    title: "Know the Moon like a local.",
    body: "Every phase, rise and set time, and illumination percentage — mapped to your horizon. Plan moonrise compositions weeks ahead, or find the darkest night for the stars.",
    points: ["Full lunar calendar and phases", "Moonrise & moonset azimuths", "Illumination for dark-sky planning"],
    image: "/moon-phases-night-sky-photography.png",
    imageAlt: "Sequence of moon phases across a night sky",
    phone: "/onboarding-4.jpg",
    phoneAlt: "Solora moon phases screen showing lunar cycle tracking",
  },
  {
    id: "milky-way",
    kicker: "Act III — The Galaxy",
    time: "00:12",
    title: "The Milky Way, on your calendar.",
    body: "Galactic core visibility windows, meteor shower peaks, and AR trackers that point your lens at the sky's main event — before it happens, not after.",
    points: ["Milky Way visibility calendar", "Meteor showers & eclipse alerts", "Map + AR sky trackers"],
    image: "/perseid-meteor-shower-night-sky.png",
    imageAlt: "Perseid meteor shower streaking across a starry sky",
    phone: "/onboarding-6.jpg",
    phoneAlt: "Solora Milky Way calendar screen showing visibility planning",
  },
  {
    id: "aurora",
    kicker: "Act IV — The Storm",
    time: "02:41",
    title: "When the sky catches fire.",
    body: "KP index, aurora probability, and smart alerts that wake you before the storm peaks — not after your feed fills with everyone else's photos.",
    points: ["Aurora forecasts & KP index", "Alerts before the peak", "Works on iPhone, iPad & Apple Watch"],
    image: "/northern-lights-aurora-borealis-photography.png",
    imageAlt: "Green and purple aurora borealis swirling over a snowy valley",
    phone: "/onboarding-9.jpg",
    phoneAlt: "Solora aurora forecast screen showing KP index and probability",
  },
]

const marqueeWords = ["Sunrise", "Golden Hour", "Moonrise", "Milky Way", "Aurora", "Eclipses", "Meteor Showers", "Tides"]

export function OneSkyConcept() {
  return (
    <div className="bg-black text-white antialiased">
      <ConceptHeader />

      {/* Hero — one full-bleed night sky */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ResponsiveImage
            src="/milky-way-galaxy-night-sky-photography.png"
            alt=""
            sizes="100vw"
            width={1024}
            height={1024}
            className="concept-kenburns h-full w-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black" />
        </div>
        <Stars count={70} seed={11} />

        <div className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-32 text-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.45em] text-[#F4B4AE] md:text-sm">
              Solora — your personal observatory
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
              The sky is putting
              <br />
              on a show.
              <br />
              <span className="bg-gradient-to-r from-[#F8C9A0] via-[#F4B4AE] to-[#E6786E] bg-clip-text text-transparent">
                Never miss it again.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
              Sunrises, golden hour, moon phases, the Milky Way, aurora storms and eclipses — forecast, timed, and
              delivered to your pocket before they happen.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <div className="mt-10 flex flex-col items-center gap-4">
              <AppStoreButton />
              <p className="text-sm text-white/50">Free · No account needed · iPhone, iPad, Apple Watch &amp; Mac</p>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/50" aria-hidden="true">
          <ChevronDown className="concept-cue h-6 w-6" />
        </div>
      </section>

      {/* Marquee strip */}
      <div className="overflow-hidden border-y border-white/10 bg-black py-5" aria-hidden="true">
        <div className="concept-marquee flex w-max items-center gap-10 whitespace-nowrap text-sm uppercase tracking-[0.4em] text-white/35">
          {[...marqueeWords, ...marqueeWords].map((word, index) => (
            <span key={index} className="flex items-center gap-10">
              {word} <span className="text-[#E6786E]">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* The four acts of one night */}
      {acts.map((act, index) => (
        <section key={act.id} className="relative flex min-h-screen items-center overflow-hidden py-28">
          <div className="absolute inset-0">
            <ResponsiveImage
              src={act.image}
              alt={act.imageAlt}
              sizes="100vw"
              width={1024}
              height={1024}
              className="concept-kenburns h-full w-full object-cover opacity-80"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/25 to-black" />
            <div
              className={
                index % 2 === 0
                  ? "absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-transparent"
                  : "absolute inset-0 bg-gradient-to-l from-black/75 via-black/20 to-transparent"
              }
            />
          </div>

          <div
            className={`relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_1fr] ${
              index % 2 === 1 ? "lg:[direction:rtl]" : ""
            }`}
          >
            <Reveal className="lg:[direction:ltr]">
              <p className="text-xs font-medium uppercase tracking-[0.45em] text-[#F4B4AE]">{act.kicker}</p>
              <p className="mt-6 font-mono text-6xl font-thin tabular-nums text-white/30 md:text-8xl">{act.time}</p>
              <h2 className="mt-4 max-w-xl text-4xl font-bold tracking-tight md:text-6xl">{act.title}</h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{act.body}</p>
              <ul className="mt-8 space-y-3">
                {act.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-white/85">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E6786E]" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200} className="justify-self-center lg:justify-self-end lg:[direction:ltr]">
              <PhoneFrame
                src={act.phone}
                alt={act.phoneAlt}
                className={`w-[230px] md:w-[280px] ${index % 2 === 0 ? "rotate-2" : "-rotate-2"}`}
              />
            </Reveal>
          </div>
        </section>
      ))}

      {/* Final call to action */}
      <section className="relative overflow-hidden py-32 text-center md:py-44">
        <Stars count={90} seed={23} />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_at_bottom,rgba(230,120,110,0.28),transparent_65%)]"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <Reveal>
            <img
              src="/solora-app-icon.png"
              alt="Solora app icon"
              className="mx-auto h-24 w-24 rounded-[1.6rem] shadow-[0_30px_80px_-16px_rgba(230,120,110,0.6)]"
            />
          </Reveal>
          <Reveal delay={150}>
            <h2 className="mt-10 text-4xl font-bold tracking-tight md:text-6xl">
              Tonight, the sky won&apos;t wait.
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 text-lg leading-relaxed text-white/70 md:text-xl">
              Join the photographers, stargazers, and aurora hunters who plan the sky instead of chasing it. Free on
              the App Store.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <div className="mt-10 flex flex-col items-center gap-4">
              <AppStoreButton />
              <p className="text-sm text-white/45">Free download · iPhone, iPad, Apple Watch &amp; Mac</p>
            </div>
          </Reveal>
        </div>
      </section>

      <ConceptNav current="one-sky" />
    </div>
  )
}
