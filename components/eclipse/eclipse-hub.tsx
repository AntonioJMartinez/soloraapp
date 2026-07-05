import { CalendarDays, Clock, Sparkles, Timer } from "lucide-react"

import { EclipseCountdown } from "@/components/eclipse/eclipse-countdown"
import { EclipseExplorer } from "@/components/eclipse/eclipse-explorer"
import { getEclipseDictionary } from "@/lib/eclipse-experience"
import { Locale } from "@/lib/i18n"

/** Countdown banner rendered at the very top of the article page */
export function EclipseCountdownBanner({ locale }: { locale: Locale }) {
  const dict = getEclipseDictionary(locale)
  return <EclipseCountdown dict={dict} />
}

export function EclipseHub({ locale }: { locale: Locale }) {
  const dict = getEclipseDictionary(locale)

  const stats = [
    { icon: CalendarDays, label: dict.statDate },
    { icon: Clock, label: dict.statFirstContact },
    { icon: Sparkles, label: dict.statTotalityWindow },
    { icon: Timer, label: dict.statMaxDuration },
  ]

  return (
    <section aria-label={dict.hubTitle} className="not-prose my-4 space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "Total Solar Eclipse over Spain",
            description:
              "Total solar eclipse crossing northern Spain and the Balearic Islands near sunset on August 12, 2026.",
            startDate: "2026-08-12T19:30:00+02:00",
            endDate: "2026-08-12T21:25:00+02:00",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            isAccessibleForFree: true,
            location: {
              "@type": "Place",
              name: "Northern Spain and the Balearic Islands",
              address: { "@type": "PostalAddress", addressCountry: "ES" },
            },
          }),
        }}
      />

      <div className="overflow-hidden rounded-3xl border border-[#E6786E]/30 bg-gradient-to-b from-[#150B14] via-[#120A10] to-transparent p-5 md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E6786E]">{dict.eyebrow}</p>
        <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">{dict.hubTitle}</h2>
        <p className="mt-2 max-w-3xl text-white/70">{dict.hubSubtitle}</p>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <span
                key={stat.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm text-white/85"
              >
                <Icon className="h-4 w-4 text-[#F4B7A8]" />
                {stat.label}
              </span>
            )
          })}
        </div>

        <div
          id="eclipse-about"
          className="mt-6 scroll-mt-24 rounded-2xl border border-[#E6786E]/25 bg-black/30 p-5 md:p-6"
        >
          <h3 className="text-lg font-bold text-white md:text-xl">{dict.aboutTitle}</h3>
          <p className="mt-2 max-w-3xl text-white/80 md:text-lg md:leading-relaxed">{dict.aboutBody}</p>
        </div>

        <div className="mt-6">
          <EclipseExplorer locale={locale} dict={dict} />
        </div>
      </div>

      <div id="eclipse-article" className="scroll-mt-24" />
    </section>
  )
}
