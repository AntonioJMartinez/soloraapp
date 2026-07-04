"use client"

import { useEffect, useState } from "react"

import { eclipseTargetUtcMs, EclipseDictionary } from "@/lib/eclipse-experience"

type Remaining = { days: number; hours: number; minutes: number; seconds: number }

function remainingTo(target: number): Remaining | null {
  const diff = target - Date.now()
  if (diff <= 0) {
    return null
  }
  const totalSeconds = Math.floor(diff / 1000)
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}

export function EclipseCountdown({ dict }: { dict: EclipseDictionary }) {
  const [remaining, setRemaining] = useState<Remaining | null | undefined>(undefined)

  useEffect(() => {
    setRemaining(remainingTo(eclipseTargetUtcMs))
    const timer = setInterval(() => setRemaining(remainingTo(eclipseTargetUtcMs)), 1000)
    return () => clearInterval(timer)
  }, [])

  const tiles: Array<{ value: string; label: string }> =
    remaining === undefined
      ? [
          { value: "--", label: dict.days },
          { value: "--", label: dict.hours },
          { value: "--", label: dict.minutes },
          { value: "--", label: dict.seconds },
        ]
      : remaining === null
        ? []
        : [
            { value: String(remaining.days), label: dict.days },
            { value: String(remaining.hours).padStart(2, "0"), label: dict.hours },
            { value: String(remaining.minutes).padStart(2, "0"), label: dict.minutes },
            { value: String(remaining.seconds).padStart(2, "0"), label: dict.seconds },
          ]

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 text-center md:p-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#E6786E]/30 blur-3xl"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
        <div className="mt-4 h-10 w-10 rounded-full bg-black shadow-[0_0_24px_6px_rgba(230,120,110,0.55)]" />
      </div>
      <h3 className="relative mt-12 text-lg font-semibold text-white md:text-xl">{dict.countdownTitle}</h3>
      {remaining === null ? (
        <p className="relative mt-4 text-white/80">{dict.countdownPast}</p>
      ) : (
        <div className="relative mx-auto mt-6 grid max-w-lg grid-cols-4 gap-3">
          {tiles.map((tile) => (
            <div key={tile.label} className="rounded-xl border border-white/10 bg-white/5 px-2 py-4">
              <div className="font-mono text-3xl font-bold tabular-nums text-[#F4B7A8] md:text-4xl" suppressHydrationWarning>
                {tile.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-white/50">{tile.label}</div>
            </div>
          ))}
        </div>
      )}
      <p className="relative mt-5 text-sm text-white/60">{dict.countdownNote}</p>
    </div>
  )
}
