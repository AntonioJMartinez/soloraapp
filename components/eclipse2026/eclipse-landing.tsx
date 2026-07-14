"use client"

import Link from "next/link"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { Apple, ArrowDown, ChevronRight } from "lucide-react"

import { EclipseMap } from "@/components/eclipse2026/eclipse-map"
import { ResponsiveImage } from "@/components/responsive-image"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import type { ArticleFaq, ArticleSection } from "@/lib/blog-posts"
import { ECLIPSE_UTC, getEclipseLandingStrings } from "@/lib/eclipse-2026"
import { Locale, localizeAvailablePath, localizedUrl } from "@/lib/i18n"
import { getUiDictionary } from "@/lib/marketing-content"
import { absoluteUrl, siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

import "./eclipse-landing.css"

/* Deterministic PRNG so the star field matches between server and client */
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function Stars({ count = 70, seed = 5, className }: { count?: number; seed?: number; className?: string }) {
  const rand = mulberry32(seed)
  const stars = Array.from({ length: count }, () => ({
    left: rand() * 100,
    top: rand() * 100,
    size: rand() * 1.6 + 0.6,
    delay: rand() * 6,
    duration: rand() * 4 + 3,
    opacity: rand() * 0.5 + 0.3,
  }))

  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {stars.map((star, index) => (
        <span
          key={index}
          className="ecl-star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add("is-visible")
            observer.disconnect()
          }
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={cn("ecl-reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

function AppStoreButton({ label, className }: { label: string; className?: string }) {
  return (
    <Link
      href={siteConfig.appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-full bg-[#E6786E] px-8 py-4 text-base font-semibold tracking-wide text-white shadow-[0_18px_50px_-12px_rgba(230,120,110,0.65)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#D4695F] active:scale-[0.98] md:text-lg",
        className,
      )}
    >
      <Apple className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
      {label}
    </Link>
  )
}

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

function Countdown({ labels, compact = false }: { labels: CountdownParts; compact?: boolean }) {
  const parts = useCountdown(ECLIPSE_UTC)
  const units: Array<{ key: keyof CountdownParts }> = [{ key: "days" }, { key: "hours" }, { key: "minutes" }, { key: "seconds" }]

  return (
    <div className={`flex items-start justify-center ${compact ? "gap-6" : "gap-6 md:gap-12"}`}>
      {units.map((unit) => (
        <div key={unit.key} className="text-center">
          <p
            suppressHydrationWarning
            className={`font-mono font-extralight tabular-nums text-white ${compact ? "text-3xl md:text-4xl" : "text-4xl md:text-6xl"}`}
          >
            {parts ? parts[unit.key] : "--"}
          </p>
          <p className={`mt-2 uppercase tracking-[0.35em] text-white/40 ${compact ? "text-[9px]" : "text-[10px] md:text-xs"}`}>
            {labels[unit.key]}
          </p>
        </div>
      ))}
    </div>
  )
}

function EclipseDisc() {
  return (
    <div className="relative mx-auto h-40 w-40 md:h-56 md:w-56" aria-hidden="true">
      <div
        className="ecl-corona-spin absolute -inset-[45%] rounded-full opacity-70"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(255,205,150,0.28) 20deg, transparent 55deg, rgba(255,180,120,0.22) 100deg, transparent 140deg, rgba(255,205,150,0.26) 200deg, transparent 245deg, rgba(255,180,120,0.24) 300deg, transparent 345deg)",
          maskImage: "radial-gradient(circle, transparent 26%, black 38%, rgba(0,0,0,0.4) 52%, transparent 68%)",
          WebkitMaskImage: "radial-gradient(circle, transparent 26%, black 38%, rgba(0,0,0,0.4) 52%, transparent 68%)",
        }}
      />
      <div className="ecl-corona absolute -inset-[40%] rounded-full bg-[radial-gradient(circle,rgba(255,210,160,0.5)_28%,rgba(255,170,100,0.24)_42%,rgba(255,150,80,0.1)_55%,transparent_70%)]" />
      <div className="absolute inset-0 rounded-full bg-black shadow-[0_0_90px_12px_rgba(255,195,130,0.4)] ring-1 ring-[#FFD9A8]/70" />
    </div>
  )
}

type Eclipse2026LandingProps = {
  locale: Locale
  slug: string
  title: string
  description: string
  category: string
  readTime: string
  image: string
  imageAlt: string
  publishedDate: string
  modifiedDate?: string
  wordCount: number
  sections: ArticleSection[]
  faqs?: ArticleFaq[]
  sources?: Array<{ href: string; label: string }>
}

export function Eclipse2026Landing({
  locale,
  slug,
  title,
  description,
  category,
  readTime,
  image,
  imageAlt,
  publishedDate,
  modifiedDate,
  wordCount,
  sections,
  faqs = [],
  sources = [],
}: Eclipse2026LandingProps) {
  const strings = getEclipseLandingStrings(locale)
  const ui = getUiDictionary(locale)
  const canonicalUrl = localizedUrl(locale, `/blog/${slug}`)

  const schemaGraph = [
    {
      "@type": "BlogPosting",
      headline: title,
      description,
      image: absoluteUrl(`/${image}`),
      author: { "@type": "Person", name: siteConfig.author },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        logo: { "@type": "ImageObject", url: absoluteUrl(siteConfig.icon) },
      },
      datePublished: publishedDate,
      dateModified: modifiedDate ?? publishedDate,
      mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
      articleSection: category,
      wordCount,
      timeRequired: `PT${Math.max(1, parseInt(readTime, 10) || 1)}M`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: ui.navHome, item: localizedUrl(locale, "/") },
        { "@type": "ListItem", position: 2, name: ui.navBlog, item: localizedUrl(locale, "/blog") },
        { "@type": "ListItem", position: 3, name: title, item: canonicalUrl },
      ],
    },
    ...(faqs.length
      ? [
          {
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        ]
      : []),
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ "@context": "https://schema.org", "@graph": schemaGraph }),
        }}
      />

      <div className="min-h-screen bg-black text-white">
        <SiteHeader locale={locale} />

        <main>
          {/* Teaser hero */}
          <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-16 md:min-h-[92svh] md:py-20">
            <Stars count={60} seed={5} className="opacity-70" />

            <Reveal>
              <EclipseDisc />
            </Reveal>

            <div className="relative z-10 mt-10 text-center md:mt-12">
              <Reveal delay={150}>
                <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-[#FFD9A8]/80 md:text-xs">{strings.hero.eyebrow}</p>
              </Reveal>
              <Reveal delay={300}>
                <h1 className="ecl-serif mt-5 text-5xl font-light italic tracking-tight md:text-7xl">{strings.hero.title}</h1>
              </Reveal>
              <Reveal delay={450}>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">{strings.hero.subtitle}</p>
              </Reveal>
              <Reveal delay={600}>
                <div className="mt-9">
                  <Countdown labels={strings.countdown} />
                </div>
              </Reveal>
              <Reveal delay={750}>
                <div className="mt-9 flex flex-col items-center gap-4">
                  <AppStoreButton label={strings.hero.cta} />
                  <p className="text-sm text-white/40">{strings.hero.ctaNote}</p>
                  <a
                    href="#eclipse-map"
                    className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
                  >
                    {strings.hero.secondaryCta}
                    <ArrowDown className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Key facts */}
          <section className="border-t border-white/10">
            <div className="mx-auto grid max-w-6xl gap-px md:grid-cols-3">
              {strings.facts.map((fact, index) => (
                <Reveal key={fact.value} delay={index * 120} className="px-8 py-12 text-center md:py-16">
                  <p className="font-mono text-4xl font-extralight tabular-nums text-[#FFD9A8] md:text-5xl">{fact.value}</p>
                  <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-white/55">{fact.label}</p>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Interactive map */}
          <section id="eclipse-map" className="scroll-mt-24 border-t border-white/10 py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-6">
              <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-[#FFD9A8]/80">{strings.map.eyebrow}</p>
                <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">{strings.map.heading}</h2>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/65">{strings.map.intro}</p>
              </Reveal>
              <Reveal delay={200} className="mt-12">
                <EclipseMap locale={locale} />
              </Reveal>
            </div>
          </section>

          {/* Critical information */}
          <section className="border-t border-white/10 py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-6">
              <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-[#FFD9A8]/80">{strings.critical.eyebrow}</p>
                <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">{strings.critical.heading}</h2>
              </Reveal>

              <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2">
                {strings.critical.items.map((item, index) => (
                  <Reveal key={item.title} delay={index * 120}>
                    <p className="font-mono text-5xl font-extralight text-white/15">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-white/65">{item.body}</p>
                  </Reveal>
                ))}
              </div>

              {/* Timeline */}
              <Reveal className="mt-20">
                <h3 className="text-2xl font-bold md:text-3xl">{strings.timeline.heading}</h3>
                <ol className="mt-8 space-y-0">
                  {strings.timeline.events.map((event, index) => (
                    <li key={event.time} className="relative flex gap-6 pb-8 last:pb-0">
                      <div className="flex flex-col items-center">
                        <span className="h-3 w-3 shrink-0 rounded-full bg-[#FFD9A8]" aria-hidden="true" />
                        {index < strings.timeline.events.length - 1 ? (
                          <span className="w-px flex-1 bg-gradient-to-b from-[#FFD9A8]/60 to-[#FFD9A8]/10" aria-hidden="true" />
                        ) : null}
                      </div>
                      <div className="-mt-1.5">
                        <p className="font-mono text-xl font-light tabular-nums text-[#FFD9A8]">{event.time}</p>
                        <p className="mt-1 text-white/70">{event.label}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 max-w-2xl text-xs leading-relaxed text-white/40">{strings.timeline.note}</p>
              </Reveal>
            </div>
          </section>

          {/* Full-bleed photo band */}
          <section className="relative overflow-hidden">
            <div className="relative h-[60vh] min-h-[380px]">
              <ResponsiveImage
                src={`/${image}`}
                alt={imageAlt}
                sizes="100vw"
                width={1024}
                height={1024}
                className="ecl-kenburns h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <Reveal>
                  <p className="ecl-serif max-w-3xl text-center text-3xl font-light italic leading-snug text-white md:text-5xl">
                    {locale === "es" ? (
                      <>
                        &ldquo;La totalidad no se mira.
                        <br />
                        Se vive desde dentro.&rdquo;
                      </>
                    ) : (
                      <>
                        &ldquo;You don&apos;t watch totality.
                        <br />
                        You stand inside it.&rdquo;
                      </>
                    )}
                  </p>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Recommendations */}
          <section className="py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-6">
              <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-[#FFD9A8]/80">{strings.zones.eyebrow}</p>
                <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">{strings.zones.heading}</h2>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/65">{strings.zones.intro}</p>
              </Reveal>

              <div className="mt-12">
                {strings.zones.items.map((zone, index) => (
                  <Reveal key={zone.rank} delay={index * 80}>
                    <div className="grid gap-2 border-t border-white/10 py-7 md:grid-cols-[80px_1fr_1.2fr] md:items-baseline md:gap-8 last:border-b">
                      <p className="font-mono text-3xl font-extralight text-[#FFD9A8]/70">{zone.rank}</p>
                      <h3 className="text-xl font-bold md:text-2xl">{zone.title}</h3>
                      <p className="leading-relaxed text-white/60">{zone.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Safety */}
          <section className="border-t border-white/10 py-20 md:py-28">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.3fr]">
              <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-[#FFD9A8]/80">{strings.safety.eyebrow}</p>
                <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">{strings.safety.heading}</h2>
                <p className="mt-5 text-lg leading-relaxed text-white/65">{strings.safety.lead}</p>
              </Reveal>
              <Reveal delay={150}>
                <ul className="space-y-5">
                  {strings.safety.rules.map((rule) => (
                    <li key={rule} className="flex gap-4 leading-relaxed text-white/80">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD9A8]" aria-hidden="true" />
                      {rule}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 rounded-xl border border-[#E6786E]/30 bg-[#E6786E]/10 p-5 text-sm leading-relaxed text-[#F4B4AE]">
                  {strings.safety.warning}
                </p>
              </Reveal>
            </div>
          </section>

          {/* Solora — lead generation */}
          <section className="relative overflow-hidden border-t border-white/10 py-20 md:py-28">
            <Stars count={40} seed={17} className="opacity-50" />
            <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.2fr_1fr]">
              <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-[#FFD9A8]/80">{strings.app.eyebrow}</p>
                <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">{strings.app.heading}</h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/65">{strings.app.body}</p>
                <ul className="mt-8 space-y-3">
                  {strings.app.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-white/85">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD9A8]" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                  <AppStoreButton label={strings.app.cta} />
                  <p className="text-sm text-white/40">{strings.app.ctaNote}</p>
                </div>
              </Reveal>

              <Reveal delay={200} className="justify-self-center lg:justify-self-end">
                <div className="flex items-end gap-5">
                  <div className="relative w-[150px] md:w-[180px]">
                    <div className="rounded-[2.2rem] border border-white/15 bg-black p-1.5 shadow-[0_50px_140px_-24px_rgba(0,0,0,0.9)]">
                      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.8rem] bg-black">
                        <ResponsiveImage
                          src="/onboarding-3.jpg"
                          alt="Solora celestial trackers screen showing sun, moon, and Milky Way positions"
                          sizes="180px"
                          responsiveWidths={[480, 589]}
                          width={589}
                          height={1280}
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative w-[190px] md:w-[230px]">
                    <div className="rounded-[2.4rem] border border-white/15 bg-black p-2 shadow-[0_50px_140px_-24px_rgba(0,0,0,0.9)]">
                      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.9rem] bg-black">
                        <ResponsiveImage
                          src="/onboarding-5.jpg"
                          alt="Solora upcoming events screen showing astronomical events and eclipses"
                          sizes="230px"
                          responsiveWidths={[480, 589]}
                          width={589}
                          height={1280}
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Full research guide + FAQ + sources */}
          <section className="border-t border-white/10 py-20 md:py-24">
            <div className="mx-auto max-w-4xl px-6">
              <Reveal>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{strings.guide.heading}</h2>
                <p className="mt-4 text-white/60">{strings.guide.intro}</p>
              </Reveal>

              <div className="mt-10 space-y-3">
                {sections.map((section) => (
                  <details key={section.heading} className="group rounded-xl border border-white/10 bg-white/[0.03] open:bg-white/[0.05]">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                      {section.heading}
                      <ChevronRight className="h-5 w-5 shrink-0 text-white/40 transition-transform group-open:rotate-90" aria-hidden="true" />
                    </summary>
                    <div className="space-y-4 px-6 pb-6 leading-relaxed text-white/70">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      {section.bullets ? (
                        <ul className="space-y-2.5">
                          {section.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3">
                              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#FFD9A8]" aria-hidden="true" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {section.table ? (
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                            <caption className="pb-3 text-left text-xs uppercase tracking-widest text-white/40">
                              {section.table.caption}
                            </caption>
                            <thead>
                              <tr className="border-b border-white/20">
                                {section.table.headers.map((header) => (
                                  <th key={header} className="py-2.5 pr-4 font-semibold text-white">
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {section.table.rows.map((row, rowIndex) => (
                                <tr key={rowIndex} className="border-b border-white/10">
                                  {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="py-2.5 pr-4 align-top text-white/70">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : null}
                    </div>
                  </details>
                ))}
              </div>

              {/* City guides */}
              <Reveal className="mt-16">
                <h2 className="text-2xl font-bold md:text-3xl">{strings.guidesHeading}</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {strings.guides.map((guide) => (
                    <Link
                      key={guide.href}
                      href={localizeAvailablePath(locale, guide.href)}
                      className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-[#FFD9A8]/40 hover:bg-white/[0.06]"
                    >
                      <span className="font-medium text-white/85">{guide.label}</span>
                      <ChevronRight className="h-4 w-4 shrink-0 text-[#FFD9A8] transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </Reveal>

              {/* FAQ */}
              {faqs.length ? (
                <Reveal className="mt-16">
                  <h2 className="text-2xl font-bold md:text-3xl">{strings.faqHeading}</h2>
                  <div className="mt-6 space-y-3">
                    {faqs.map((faq) => (
                      <details key={faq.question} className="group rounded-xl border border-white/10 bg-white/[0.03]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold [&::-webkit-details-marker]:hidden">
                          {faq.question}
                          <ChevronRight className="h-5 w-5 shrink-0 text-white/40 transition-transform group-open:rotate-90" aria-hidden="true" />
                        </summary>
                        <p className="px-6 pb-6 leading-relaxed text-white/70">{faq.answer}</p>
                      </details>
                    ))}
                  </div>
                </Reveal>
              ) : null}

              {/* Sources */}
              {sources.length ? (
                <Reveal className="mt-16">
                  <h2 className="text-xl font-bold">{strings.sourcesHeading}</h2>
                  <ul className="mt-4 space-y-2 text-sm">
                    {sources.map((source) => (
                      <li key={source.href}>
                        <a
                          href={source.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/55 underline decoration-white/25 underline-offset-2 transition-colors hover:text-white"
                        >
                          {source.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ) : null}
            </div>
          </section>

          {/* Final call */}
          <section className="relative overflow-hidden border-t border-white/10 py-24 text-center md:py-36">
            <Stars count={50} seed={31} className="opacity-60" />
            <div className="relative z-10 mx-auto max-w-2xl px-6">
              <Reveal>
                <Countdown labels={strings.countdown} compact />
              </Reveal>
              <Reveal delay={200}>
                <h2 className="ecl-serif mt-10 text-4xl font-light italic md:text-6xl">{strings.finalCta.heading}</h2>
                <p className="mx-auto mt-5 max-w-lg leading-relaxed text-white/60">{strings.finalCta.body}</p>
              </Reveal>
              <Reveal delay={350}>
                <div className="mt-10 flex flex-col items-center gap-4">
                  <AppStoreButton label={strings.finalCta.cta} />
                  <p className="text-sm text-white/40">{strings.app.ctaNote}</p>
                </div>
              </Reveal>
            </div>
          </section>
        </main>

        <SiteFooter locale={locale} currentPath={`/blog/${slug}`} />
      </div>
    </>
  )
}
