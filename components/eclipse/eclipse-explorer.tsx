"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, CloudSun, Sun, Timer } from "lucide-react"

import {
  EclipseDictionary,
  EclipseSpot,
  eclipseSpots,
  formatMinutes,
  spotContacts,
} from "@/lib/eclipse-experience"
import { Locale, localizeAvailablePath } from "@/lib/i18n"

// ---------------------------------------------------------------------------
// Map projection (simple equirectangular over the Iberian Peninsula)
// ---------------------------------------------------------------------------

const MAP_W = 720
const MAP_H = 520
const LON_MIN = -10.2
const LON_MAX = 4.6
const LAT_MIN = 35.9
const LAT_MAX = 44.6

const px = (lon: number) => ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * MAP_W
const py = (lat: number) => ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * MAP_H

type LonLat = [number, number]

function toPath(points: LonLat[], close = false) {
  const d = points
    .map(([lon, lat], index) => `${index === 0 ? "M" : "L"}${px(lon).toFixed(1)},${py(lat).toFixed(1)}`)
    .join(" ")
  return close ? `${d} Z` : d
}

// Stylized Iberian Peninsula coastline (clockwise from Fisterra)
const IBERIA: LonLat[] = [
  [-9.29, 43.05], [-8.87, 43.34], [-8.3, 43.43], [-8.06, 43.66], [-7.68, 43.79], [-7.0, 43.6],
  [-6.2, 43.6], [-5.4, 43.55], [-4.7, 43.45], [-3.8, 43.49], [-3.02, 43.44], [-2.35, 43.37],
  [-1.79, 43.39], [-1.4, 43.28], [-0.7, 42.92], [0.0, 42.7], [0.66, 42.86], [1.73, 42.5],
  [2.55, 42.45], [3.04, 42.47], [3.32, 42.32], [2.78, 41.9], [2.17, 41.35], [1.03, 41.06],
  [0.72, 40.6], [0.03, 40.05], [-0.32, 39.45], [0.2, 38.73], [-0.51, 38.2], [-0.76, 37.85],
  [-1.3, 37.56], [-1.85, 36.95], [-2.19, 36.73], [-3.5, 36.7], [-4.42, 36.71], [-5.17, 36.3],
  [-5.6, 36.01], [-6.04, 36.19], [-6.29, 36.53], [-6.95, 37.22], [-7.4, 37.17], [-8.2, 37.12],
  [-8.99, 37.02], [-8.8, 37.9], [-8.78, 38.45], [-9.2, 38.7], [-9.42, 38.75], [-9.35, 39.35],
  [-9.0, 39.6], [-8.9, 40.15], [-8.75, 40.65], [-8.68, 41.15], [-8.87, 41.6], [-8.87, 41.86],
  [-8.72, 42.24], [-9.03, 42.6],
]

const PORTUGAL_BORDER: LonLat[] = [
  [-8.87, 41.86], [-8.2, 42.05], [-7.6, 41.85], [-6.6, 41.9], [-6.2, 41.3], [-6.8, 40.5],
  [-6.93, 39.6], [-7.05, 38.7], [-7.4, 37.17],
]

const MALLORCA: LonLat[] = [
  [2.35, 39.57], [2.75, 39.35], [3.24, 39.35], [3.47, 39.66], [3.15, 39.9], [2.7, 39.85],
]
const MENORCA: LonLat[] = [[3.83, 39.95], [4.1, 39.88], [4.32, 39.98], [4.05, 40.08]]
const IBIZA: LonLat[] = [[1.22, 38.88], [1.45, 38.83], [1.62, 39.0], [1.35, 39.08]]

const BAND_NORTH: LonLat[] = [
  [-10.2, 44.9], [-8, 44.3], [-6, 44.0], [-4, 43.6], [-2, 43.5], [0, 42.9], [2, 42.0], [4.6, 40.6],
]
const BAND_SOUTH: LonLat[] = [
  [-10.2, 42.3], [-8, 41.9], [-6, 41.4], [-4.5, 41.05], [-3, 40.6], [-1, 39.9], [0.5, 39.4],
  [1.5, 38.85], [3, 38.3], [4.6, 37.8],
]
const CENTER_LINE: LonLat[] = [
  [-10.2, 43.6], [-8, 43.15], [-6, 42.6], [-3.7, 41.9], [-1.3, 41.0], [0.8, 40.2], [3.0, 39.4], [4.6, 38.9],
]

const bandPath = `${toPath(BAND_NORTH)} ${BAND_SOUTH.slice()
  .reverse()
  .map(([lon, lat]) => `L${px(lon).toFixed(1)},${py(lat).toFixed(1)}`)
  .join(" ")} Z`

const centerLinePath = toPath(CENTER_LINE)

// Projected centerline points; x increases monotonically west → east,
// so the umbra position can be parameterized by an x fraction.
const CL_POINTS = CENTER_LINE.map(([lon, lat]) => ({ x: px(lon), y: py(lat) }))
const CL_X0 = CL_POINTS[0].x
const CL_X1 = CL_POINTS[CL_POINTS.length - 1].x

function umbraPointAt(fraction: number) {
  const x = CL_X0 + (CL_X1 - CL_X0) * fraction
  for (let i = 0; i < CL_POINTS.length - 1; i++) {
    const a = CL_POINTS[i]
    const b = CL_POINTS[i + 1]
    if (x >= a.x && x <= b.x) {
      const t = (x - a.x) / (b.x - a.x)
      return { x, y: a.y + (b.y - a.y) * t }
    }
  }
  return CL_POINTS[CL_POINTS.length - 1]
}

// Local time of the shadow's center along the sweep: the umbra crosses
// A Coruña around 20:28 and Palma around 20:32 (IGN examples).
const SWEEP_START_MIN = 1226.5 // ~20:26:30 entering the Atlantic edge of the map
const SWEEP_END_MIN = 1233.0 // ~20:33:00 leaving past Menorca

function sweepTimeLabel(fraction: number) {
  const totalSeconds = Math.round((SWEEP_START_MIN + (SWEEP_END_MIN - SWEEP_START_MIN) * fraction) * 60)
  const h = Math.floor(totalSeconds / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60
  return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
}

const MADRID: LonLat = [-3.7, 40.42]

// Per-spot label placement so names stay readable on the map
const LABEL_OFFSETS: Record<string, { dx: number; dy: number; anchor: "start" | "middle" | "end" }> = {
  coruna: { dx: -2, dy: -14, anchor: "middle" },
  leon: { dx: 0, dy: -14, anchor: "middle" },
  palencia: { dx: -13, dy: 4, anchor: "end" },
  burgos: { dx: 12, dy: -12, anchor: "start" },
  aranda: { dx: -12, dy: 20, anchor: "end" },
  soria: { dx: 12, dy: 20, anchor: "start" },
  calamocha: { dx: -6, dy: 24, anchor: "middle" },
  zaragoza: { dx: 14, dy: -8, anchor: "start" },
  palma: { dx: 0, dy: 26, anchor: "middle" },
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

// ---------------------------------------------------------------------------
// Ratings helpers
// ---------------------------------------------------------------------------

function durationScore(seconds: number) {
  return seconds >= 100 ? 5 : seconds >= 95 ? 4 : seconds >= 85 ? 3 : 2
}

function altitudeScore(degrees: number) {
  return degrees >= 11 ? 5 : degrees >= 9 ? 4 : degrees >= 7 ? 3 : degrees >= 4 ? 2 : 1
}

function Dots({ score, label }: { score: number; label: string }) {
  return (
    <span className="inline-flex items-center gap-1" title={label} aria-label={`${label}: ${score}/5`}>
      {[1, 2, 3, 4, 5].map((step) => (
        <span
          key={step}
          className={`h-1.5 w-1.5 rounded-full ${step <= score ? "bg-[#E6786E]" : "bg-white/15"}`}
        />
      ))}
    </span>
  )
}

// ---------------------------------------------------------------------------
// Shadow clock: auto-sweeping umbra, scrubbable with the pointer
// ---------------------------------------------------------------------------

const SWEEP_LOOP_MS = 14000

function useUmbraFraction(manual: number | null) {
  const [auto, setAuto] = useState(0.3)
  const lastFraction = useRef(0.3)

  useEffect(() => {
    if (manual !== null) {
      // Remember the scrub position so the sweep resumes from there
      lastFraction.current = manual
      return
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }
    let raf = 0
    let start: number | null = null
    const base = lastFraction.current
    const step = (timestamp: number) => {
      if (start === null) {
        start = timestamp
      }
      const next = (base + (timestamp - start) / SWEEP_LOOP_MS) % 1
      lastFraction.current = next
      setAuto(next)
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [manual])

  return manual ?? auto
}

// ---------------------------------------------------------------------------
// Explorer (map + ranking + detail)
// ---------------------------------------------------------------------------

export function EclipseExplorer({ locale, dict }: { locale: Locale; dict: EclipseDictionary }) {
  const [selectedId, setSelectedId] = useState<EclipseSpot["id"]>("palencia")
  const [manualFraction, setManualFraction] = useState<number | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  const fraction = useUmbraFraction(manualFraction)
  const umbra = umbraPointAt(fraction)
  const clockX = clamp(umbra.x, 56, MAP_W - 56)

  const selected = eclipseSpots.find((spot) => spot.id === selectedId) ?? eclipseSpots[0]
  const contacts = spotContacts(selected)
  const text = dict.spots[selected.id]

  const scrubTo = (clientX: number) => {
    const svg = svgRef.current
    if (!svg) {
      return
    }
    const rect = svg.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * MAP_W
    setManualFraction(clamp((x - CL_X0) / (CL_X1 - CL_X0), 0, 1))
  }

  const detailTimes: Array<{ label: string; value: string }> = [
    { label: dict.detailPartial, value: selected.official?.c1 ?? `~${formatMinutes(contacts.c1)}` },
    { label: dict.detailTotalityBegins, value: selected.official?.c2 ?? `~${formatMinutes(contacts.c2)}` },
    { label: dict.detailMax, value: selected.official?.max ?? `~${formatMinutes(contacts.max)}` },
    { label: dict.detailTotalityEnds, value: selected.official?.c3 ?? `~${formatMinutes(contacts.c3)}` },
    { label: dict.detailSunset, value: selected.official?.sunset ?? `~${formatMinutes(contacts.sunset)}` },
  ]

  return (
    <div className="space-y-6">
      {/* Map + ranked list */}
      <div id="eclipse-map" className="scroll-mt-24 grid gap-6 lg:grid-cols-[3fr_2fr]">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#0A1122] to-[#141021] p-4 md:p-5">
          <h3 className="text-xl font-bold text-white md:text-2xl">{dict.mapTitle}</h3>
          <p className="mt-1 text-sm text-white/60">{dict.mapSubtitle}</p>

          <svg
            ref={svgRef}
            viewBox={`0 0 ${MAP_W} ${MAP_H}`}
            className="mt-4 block w-full cursor-crosshair touch-pan-y"
            role="img"
            aria-label={dict.mapTitle}
            onPointerMove={(event) => scrubTo(event.clientX)}
            onPointerDown={(event) => scrubTo(event.clientX)}
            onPointerLeave={() => setManualFraction(null)}
          >
            <defs>
              <linearGradient id="map-band" x1="0" y1="0" x2="1" y2="0.35">
                <stop offset="0%" stopColor="rgba(230,120,110,0.34)" />
                <stop offset="55%" stopColor="rgba(196,110,150,0.26)" />
                <stop offset="100%" stopColor="rgba(150,110,220,0.32)" />
              </linearGradient>
              <radialGradient id="map-umbra" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(0,0,0,0.85)" />
                <stop offset="60%" stopColor="rgba(5,5,15,0.45)" />
                <stop offset="100%" stopColor="rgba(5,5,15,0)" />
              </radialGradient>
            </defs>

            {/* Land */}
            <path d={toPath(IBERIA, true)} fill="#211712" stroke="rgba(255,255,255,0.22)" strokeWidth="1.4" strokeLinejoin="round" />
            <path d={toPath(MALLORCA, true)} fill="#211712" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" strokeLinejoin="round" />
            <path d={toPath(MENORCA, true)} fill="#211712" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" strokeLinejoin="round" />
            <path d={toPath(IBIZA, true)} fill="#211712" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" strokeLinejoin="round" />
            <path d={toPath(PORTUGAL_BORDER)} fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1" strokeDasharray="3 4" />

            {/* Totality band */}
            <path d={bandPath} fill="url(#map-band)" stroke="rgba(244,183,168,0.35)" strokeWidth="1" strokeDasharray="6 5" />
            <path d={centerLinePath} fill="none" stroke="#F4B7A8" strokeWidth="2" strokeDasharray="10 7" opacity="0.75" />

            {/* Sweep time labels */}
            <text x={px(-9.6)} y={py(43.9)} fontSize="13" fontWeight="700" className="fill-[#F4B7A8]" opacity="0.9">
              ~20:27
            </text>
            <text x={px(2.6)} y={py(38.65)} fontSize="13" fontWeight="700" className="fill-[#F4B7A8]" opacity="0.9">
              ~20:32
            </text>

            {/* Madrid (outside) */}
            <g opacity="0.65">
              <circle cx={px(MADRID[0])} cy={py(MADRID[1])} r="4" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.4" />
              <text x={px(MADRID[0]) + 9} y={py(MADRID[1]) + 4} fontSize="11" className="fill-white" opacity="0.65">
                Madrid
              </text>
            </g>

            {/* Spots */}
            {eclipseSpots.map((spot) => {
              const cx = px(spot.lon)
              const cy = py(spot.lat)
              const offset = LABEL_OFFSETS[spot.id]
              const isSelected = spot.id === selectedId
              return (
                <g
                  key={spot.id}
                  onClick={() => setSelectedId(spot.id)}
                  className="cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  aria-label={dict.spots[spot.id].name}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault()
                      setSelectedId(spot.id)
                    }
                  }}
                >
                  <circle cx={cx} cy={cy} r="16" fill="transparent" />
                  {isSelected ? (
                    <>
                      <circle cx={cx} cy={cy} r="12" fill="none" stroke="#E6786E" strokeWidth="1.5" opacity="0.8">
                        <animate attributeName="r" values="9;16;9" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx={cx} cy={cy} r="7" fill="#E6786E" stroke="white" strokeWidth="1.5" />
                    </>
                  ) : (
                    <circle cx={cx} cy={cy} r="5.5" fill="#F4B7A8" stroke="rgba(0,0,0,0.5)" strokeWidth="1" opacity="0.9" />
                  )}
                  <text
                    x={cx + offset.dx}
                    y={cy + offset.dy}
                    fontSize="12"
                    fontWeight={isSelected ? 700 : 500}
                    textAnchor={offset.anchor}
                    className="fill-white"
                    opacity={isSelected ? 1 : 0.75}
                  >
                    {dict.spots[spot.id].name.split(" · ")[0]}
                  </text>
                </g>
              )
            })}

            {/* Traveling umbra with its clock */}
            <g pointerEvents="none">
              <circle cx={umbra.x} cy={umbra.y} r="62" fill="url(#map-umbra)" opacity="0.55" />
              <line
                x1={clockX}
                y1={umbra.y - 58}
                x2={umbra.x}
                y2={umbra.y - 18}
                stroke="rgba(244,183,168,0.5)"
                strokeWidth="1"
              />
              <rect x={clockX - 46} y={umbra.y - 88} width="92" height="30" rx="15" fill="rgba(5,5,12,0.8)" stroke="rgba(244,183,168,0.45)" strokeWidth="1" />
              <text
                x={clockX}
                y={umbra.y - 67}
                textAnchor="middle"
                fontSize="16"
                fontWeight="700"
                className="fill-[#F4B7A8]"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {sweepTimeLabel(fraction)}
              </text>
            </g>
          </svg>

          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-white/60">
            <span className="inline-flex items-center gap-2">
              <span className="inline-block h-2.5 w-5 rounded-sm bg-gradient-to-r from-[#E6786E]/40 to-[#9670DC]/40" />
              {dict.bandLabel}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="inline-block h-0.5 w-5 border-t-2 border-dashed border-[#F4B7A8]" />
              {dict.centerLabel}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-black shadow-[0_0_6px_2px_rgba(0,0,0,0.8)] ring-1 ring-white/25" />
              {dict.sweepLabel}
            </span>
          </div>
          <p className="mt-2 text-xs text-[#F4B7A8]/80">{dict.scrubHint}</p>
          <p className="mt-2 text-[11px] leading-relaxed text-white/40">{dict.mapDisclaimer}</p>
        </div>

        {/* Ranked list */}
        <div id="eclipse-spots" className="scroll-mt-24 rounded-2xl border border-white/10 bg-black/40 p-4 md:p-5">
          <h3 className="text-xl font-bold text-white md:text-2xl">{dict.spotsTitle}</h3>
          <p className="mt-1 text-sm text-white/60">{dict.spotsSubtitle}</p>
          <ol className="mt-4 space-y-2">
            {eclipseSpots.map((spot, index) => {
              const isSelected = spot.id === selectedId
              return (
                <li key={spot.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(spot.id)}
                    aria-pressed={isSelected}
                    className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-colors ${
                      isSelected
                        ? "border-[#E6786E]/60 bg-[#E6786E]/15"
                        : "border-white/10 bg-white/[0.03] hover:bg-white/[0.07]"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                        index === 0
                          ? "bg-[#E6786E] text-white"
                          : index < 3
                            ? "bg-[#E6786E]/30 text-[#F4B7A8]"
                            : "bg-white/10 text-white/60"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-white">{dict.spots[spot.id].name}</span>
                      <span className="mt-0.5 flex items-center gap-3 text-xs text-white/55">
                        <span className="inline-flex items-center gap-1">
                          <Timer className="h-3 w-3" />
                          {Math.floor(spot.totalitySeconds / 60)}m {String(spot.totalitySeconds % 60).padStart(2, "0")}s
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Sun className="h-3 w-3" />
                          {spot.sunAltitude}°
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <CloudSun className="h-3 w-3" />
                          <Dots score={spot.climate} label={dict.detailClimate} />
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>
      </div>

      {/* Detail panel for the selected spot */}
      <div className="rounded-2xl border border-[#E6786E]/25 bg-gradient-to-br from-[#E6786E]/10 via-black/30 to-black/40 p-5 md:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white">{text.name}</h3>
            <p className="mt-0.5 text-sm text-white/55">{selected.region}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="rounded-full bg-[#E6786E] px-3 py-1 font-bold text-white">
              {dict.detailDuration}: {Math.floor(selected.totalitySeconds / 60)}m{" "}
              {String(selected.totalitySeconds % 60).padStart(2, "0")}s
            </span>
            <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-white/85">
              {dict.detailAltitude}: {selected.sunAltitude}°
            </span>
          </div>
        </div>

        <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {detailTimes.map((entry, index) => (
            <div
              key={entry.label}
              className={`rounded-xl border px-3 py-3 ${
                index === 2 ? "border-[#E6786E]/50 bg-[#E6786E]/15" : "border-white/10 bg-black/30"
              }`}
            >
              <dt className="text-[11px] uppercase tracking-wide text-white/50">{entry.label}</dt>
              <dd className="mt-1 font-mono text-lg font-bold tabular-nums text-white">{entry.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-black/25 p-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-[#F4B7A8]">{dict.detailWhy}</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-white/85">{text.why}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/25 p-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/60">{dict.detailRisk}</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-white/85">{text.risk}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4 text-xs text-white/60">
            <span className="inline-flex items-center gap-2">
              {dict.detailClimate}: <Dots score={selected.climate} label={dict.detailClimate} />
            </span>
            <span className="inline-flex items-center gap-2">
              {dict.detailDuration}: <Dots score={durationScore(selected.totalitySeconds)} label={dict.detailDuration} />
            </span>
            <span className="inline-flex items-center gap-2">
              {dict.detailAltitude}: <Dots score={altitudeScore(selected.sunAltitude)} label={dict.detailAltitude} />
            </span>
          </div>
          {selected.guideHref ? (
            <Link
              href={localizeAvailablePath(locale, selected.guideHref)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E6786E] transition-colors hover:text-[#F4B7A8]"
            >
              {dict.detailGuide}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
        {selected.approx ? <p className="mt-3 text-[11px] text-white/40">{dict.approxNote}</p> : null}
      </div>
    </div>
  )
}
