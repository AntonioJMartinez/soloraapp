"use client"

import { ResponsiveImage } from "@/components/responsive-image"
import { AppStoreButton, ConceptNav, PhoneFrame, Reveal } from "@/components/concepts/shared"

const scenes = [
  {
    id: "scene-01",
    slate: "Scene 01 · Ext. Coastline — Golden Hour",
    timecode: "TC 05:47:12",
    title: "Scout the light before you leave home.",
    body: "Solora rates every sunrise and sunset in advance — light quality, cloud cover, visibility — so you only drive out for the shots worth shooting.",
    image: "/golden-hour-sunset-photography.png",
    imageAlt: "Golden hour sunset over calm water with a sailboat",
    phone: "/onboarding-1.jpg",
    phoneAlt: "Solora main screen showing sunrise and sunset quality ratings",
  },
  {
    id: "scene-02",
    slate: "Scene 02 · Ext. Headland — Storm Front",
    timecode: "TC 17:20:03",
    title: "Read the weather like a cinematographer.",
    body: "Personalized forecast summaries for clouds, rain, wind, and visibility — anywhere on Earth. Know when drama is coming, and where to point the camera.",
    image: "/dramatic-storm-clouds-weather-photography.png",
    imageAlt: "Dramatic storm clouds gathering over a landscape",
    phone: "/onboarding-2.jpg",
    phoneAlt: "Solora forecast screen showing personalized weather summaries",
  },
  {
    id: "scene-03",
    slate: "Scene 03 · Ext. Desert — Moonrise",
    timecode: "TC 21:33:44",
    title: "Block the Moon's entrance to the frame.",
    body: "Rise and set times, azimuths, phases and illumination — mapped to your horizon so the Moon hits its mark, every night, weeks in advance.",
    image: "/moon-phases-night-sky-photography.png",
    imageAlt: "Sequence of moon phases across a night sky",
    phone: "/onboarding-4.jpg",
    phoneAlt: "Solora moon phases screen showing lunar cycle tracking",
  },
  {
    id: "scene-04",
    slate: "Scene 04 · Ext. Mountains — The Galaxy",
    timecode: "TC 00:12:58",
    title: "The Milky Way keeps a schedule. Now you have it.",
    body: "Core visibility windows, dark-sky nights, meteor shower peaks, and AR trackers that point your lens at the show before it starts.",
    image: "/milky-way-galaxy-night-sky-photography.png",
    imageAlt: "The Milky Way rising over a mountain valley",
    phone: "/onboarding-6.jpg",
    phoneAlt: "Solora Milky Way calendar screen showing visibility planning",
  },
  {
    id: "scene-05",
    slate: "Scene 05 · Ext. Tundra — Aurora",
    timecode: "TC 02:41:19",
    title: "The finale gets a five-alarm call sheet.",
    body: "KP index, aurora probability, and alerts that wake you before the storm peaks — delivered to your iPhone and your wrist.",
    image: "/northern-lights-aurora-borealis-photography.png",
    imageAlt: "Green and purple aurora borealis swirling over a snowy valley",
    phone: "/onboarding-9.jpg",
    phoneAlt: "Solora aurora forecast screen showing KP index and probability",
  },
]

const storyboard = [
  { src: "/onboarding-1.jpg", alt: "Sunrise and sunset quality ratings" },
  { src: "/onboarding-2.jpg", alt: "Personalized weather forecast summaries" },
  { src: "/onboarding-3.jpg", alt: "Sun, moon, and Milky Way trackers" },
  { src: "/onboarding-4.jpg", alt: "Moon phase calendar" },
  { src: "/onboarding-5.jpg", alt: "Upcoming astronomical events" },
  { src: "/onboarding-6.jpg", alt: "Milky Way visibility calendar" },
  { src: "/onboarding-7.jpg", alt: "Smart reminders" },
  { src: "/onboarding-8.jpg", alt: "Widgets and Apple Watch" },
  { src: "/onboarding-9.jpg", alt: "Aurora forecasts and KP index" },
]

const credits = [
  { label: "Starring", value: "The Sun · The Moon · The Milky Way · The Aurora" },
  { label: "Supporting cast", value: "Meteor showers, eclipses, tides & twilight" },
  { label: "Location scout", value: "Solora" },
  { label: "Directed by", value: "You" },
]

export function DirectorsCutConcept() {
  return (
    <div className="bg-[#0A0705] text-white antialiased">
      {/* Letterbox bars */}
      <div className="fixed inset-x-0 top-0 z-[55] flex h-9 items-center justify-between bg-black px-4 font-mono text-[9px] uppercase tracking-[0.35em] text-white/40 md:h-12 md:px-8 md:text-[10px]">
        <span>Solora — a sky-planning picture</span>
        <span className="hidden sm:inline">Anamorphic 2.39:1</span>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-[55] flex h-9 items-center justify-between bg-black px-4 font-mono text-[9px] uppercase tracking-[0.35em] text-white/40 md:h-12 md:px-8 md:text-[10px]">
        <span>Now showing — App Store</span>
        <span className="hidden sm:inline">TC 05:47:12:24</span>
      </div>

      {/* Film grain */}
      <div className="concept-grain" aria-hidden="true" />

      {/* Title sequence */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ResponsiveImage
            src="/golden-hour-sunset-photography.png"
            alt=""
            sizes="100vw"
            width={1024}
            height={1024}
            className="concept-pan h-full w-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-[#0A0705]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.75))]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.6em] text-white/60 md:text-xs">
              Solora presents
            </p>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight md:text-8xl">
              Nature performs.
              <br />
              <span className="concept-serif font-light italic text-[#F4B4AE]">You direct.</span>
            </h1>
          </Reveal>
          <Reveal delay={400}>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/75">
              The planning app for photographers and sky watchers who treat every sunrise like a premiere — and never
              miss a shot they could have planned.
            </p>
          </Reveal>
          <Reveal delay={600}>
            <div className="mt-10 flex flex-col items-center gap-4">
              <AppStoreButton label="Get your ticket — free" />
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/45">
                iPhone · iPad · Watch · Mac
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Scenes */}
      <div className="mx-auto max-w-6xl space-y-28 px-5 py-28 md:space-y-40 md:px-8 md:py-36">
        {scenes.map((scene, index) => (
          <section key={scene.id}>
            <Reveal>
              <div className="flex items-baseline justify-between gap-4 border-t border-white/15 pt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/45 md:text-xs">
                <span>{scene.slate}</span>
                <span className="shrink-0 tabular-nums">{scene.timecode}</span>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative mt-8 overflow-hidden rounded-lg md:rounded-xl">
                <div className="aspect-[16/10] sm:aspect-[21/9]">
                  <ResponsiveImage
                    src={scene.image}
                    alt={scene.imageAlt}
                    sizes="(min-width: 1152px) 1088px, 100vw"
                    width={1024}
                    height={1024}
                    className="concept-kenburns h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              </div>
            </Reveal>

            <div
              className={`mt-10 flex flex-col gap-10 md:flex-row md:items-center md:gap-16 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <Reveal delay={250} className="md:flex-1">
                <h2 className="max-w-xl text-3xl font-bold tracking-tight md:text-5xl">{scene.title}</h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">{scene.body}</p>
              </Reveal>
              <Reveal delay={350} className="self-center md:self-auto">
                <PhoneFrame
                  src={scene.phone}
                  alt={scene.phoneAlt}
                  className={`w-[190px] md:w-[220px] ${index % 2 === 0 ? "-rotate-2" : "rotate-2"}`}
                />
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      {/* Storyboard rail */}
      <section className="border-t border-white/10 py-24 md:py-32">
        <Reveal className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-white/45 md:text-xs">
            <span>The storyboard — nine screens, one app</span>
            <span aria-hidden="true">Drag →</span>
          </div>
        </Reveal>
        <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 md:px-8 [scrollbar-width:thin]">
          {storyboard.map((frame, index) => (
            <div key={frame.src} className="snap-center">
              <PhoneFrame
                src={frame.src}
                alt={`Solora app screen: ${frame.alt}`}
                className="w-[180px] shrink-0 md:w-[210px]"
                sizes="210px"
              />
              <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">
                {String(index + 1).padStart(2, "0")} — {frame.alt}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Credits roll */}
      <section className="border-t border-white/10 py-28 text-center md:py-40">
        <div className="mx-auto max-w-2xl space-y-14 px-6">
          {credits.map((credit, index) => (
            <Reveal key={credit.label} delay={index * 120}>
              <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/40">{credit.label}</p>
              <p className="concept-serif mt-3 text-2xl font-light italic text-white md:text-4xl">{credit.value}</p>
            </Reveal>
          ))}

          <Reveal delay={500}>
            <div className="border-t border-white/10 pt-14">
              <img
                src="/solora-app-icon.png"
                alt="Solora app icon"
                className="mx-auto h-20 w-20 rounded-[1.4rem] shadow-[0_30px_80px_-16px_rgba(230,120,110,0.55)]"
              />
              <h2 className="mt-8 text-3xl font-bold tracking-tight md:text-5xl">Now showing. Free.</h2>
              <p className="mt-4 text-lg text-white/65">No trailers. No account. Just the sky, on schedule.</p>
              <div className="mt-8 flex flex-col items-center gap-4">
                <AppStoreButton label="Download on the App Store" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Spacer above bottom letterbox bar */}
      <div className="h-12" aria-hidden="true" />

      <ConceptNav current="directors-cut" />
    </div>
  )
}
