"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, CloudSun, Compass, LocateFixed, MapPin, Sparkles, Sun, Timer } from "lucide-react"

import { compassDirection, computeEclipse, type EclipseResult, formatClock } from "@/lib/eclipse-circumstances"
import {
  EclipseDictionary,
  EclipseSpot,
  eclipseSpots,
  formatMinutes,
  spotContacts,
} from "@/lib/eclipse-experience"
import { Locale, localizeAvailablePath } from "@/lib/i18n"
import {
  bandPath,
  centerLinePath,
  IBERIA,
  IBIZA,
  latAt,
  lonAt,
  MADRID,
  MALLORCA,
  MAP_H,
  MAP_W,
  MENORCA,
  PORTUGAL_BORDER,
  clamp,
  px,
  py,
  sweepTimeLabel,
  toPath,
  umbraPointAt,
} from "@/lib/eclipse-geo"

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
// Shadow clock: auto-sweeping umbra
// ---------------------------------------------------------------------------

const SWEEP_LOOP_MS = 14000

function useUmbraFraction() {
  const [fraction, setFraction] = useState(0.3)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }
    let raf = 0
    let start: number | null = null
    const step = (timestamp: number) => {
      if (start === null) {
        start = timestamp
      }
      setFraction((0.3 + (timestamp - start) / SWEEP_LOOP_MS) % 1)
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  return fraction
}

const fmtDuration = (seconds: number) =>
  `${Math.floor(seconds / 60)}m ${String(Math.round(seconds) % 60).padStart(2, "0")}s`

type CustomKind = "total" | "edge" | "partial"
const kindAccent = (kind: CustomKind) =>
  kind === "total"
    ? { ring: "border-[#E6786E]/50", pin: "#E6786E", badge: "bg-[#E6786E]" }
    : kind === "edge"
      ? { ring: "border-amber-400/50", pin: "#FBBF24", badge: "bg-amber-500/80" }
      : { ring: "border-sky-400/40", pin: "#60A5FA", badge: "bg-sky-500/80" }

// Computed circumstances panel for a tapped or geolocated point
function CustomDetail({
  dict,
  custom,
  result,
}: {
  dict: EclipseDictionary
  custom: CustomPoint
  result: EclipseResult
}) {
  const col = kindAccent(result.kind === "none" ? "partial" : result.kind)
  const c = result.contacts
  const verdict = !result.visible
    ? dict.verdictSet
    : result.kind === "total"
      ? dict.verdictTotal
      : result.kind === "edge"
        ? dict.verdictEdge
        : dict.verdictPartial
  const showsTotality = result.kind === "total" || (result.kind === "edge" && result.totalitySeconds > 0)
  const timeRows: Array<{ label: string; value: number; highlight?: boolean }> = [
    { label: dict.detailPartial, value: c.c1 },
    ...(c.c2 != null ? [{ label: dict.detailTotalityBegins, value: c.c2 }] : []),
    { label: dict.detailMax, value: c.max, highlight: true },
    ...(c.c3 != null ? [{ label: dict.detailTotalityEnds, value: c.c3 }] : []),
    { label: dict.checkPartialEnds, value: c.c4 },
  ]

  return (
    <div className={`rounded-2xl border ${col.ring} bg-gradient-to-br from-white/[0.04] via-black/30 to-black/40 p-5 md:p-6`}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-white/50">
            <MapPin className="h-3.5 w-3.5" />
            {custom.lat.toFixed(3)}, {custom.lon.toFixed(3)}
          </div>
          <h3 className="mt-1 text-2xl font-bold text-white">{verdict}</h3>
        </div>
        {result.visible ? (
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className={`rounded-full ${col.badge} px-3 py-1 font-bold text-white`}>
              {showsTotality
                ? `${dict.detailDuration}: ${fmtDuration(result.totalitySeconds)}`
                : `${dict.labelObscuration}: ${Math.round(result.obscuration * 100)}%`}
            </span>
            <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-white/85">
              {dict.detailAltitude}: {result.altitudeDeg.toFixed(1)}°
            </span>
          </div>
        ) : null}
      </div>

      {result.visible ? (
        <>
          <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {timeRows.map((row) => (
              <div
                key={row.label}
                className={`rounded-xl border px-3 py-3 ${
                  row.highlight ? "border-[#E6786E]/50 bg-[#E6786E]/15" : "border-white/10 bg-black/30"
                }`}
              >
                <dt className="text-[11px] uppercase tracking-wide text-white/50">{row.label}</dt>
                <dd className="mt-1 font-mono text-lg font-bold tabular-nums text-white">{formatClock(row.value)}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-white/60">
            <span className="inline-flex items-center gap-1.5">
              <Compass className="h-3.5 w-3.5 text-[#F4B7A8]" />
              {dict.labelDirection}: {compassDirection(result.azimuthDeg)} ({Math.round(result.azimuthDeg)}°)
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#F4B7A8]" />
              {dict.labelMagnitude}: {result.magnitude.toFixed(3)}
            </span>
          </div>
        </>
      ) : (
        <p className="mt-3 text-sm text-white/70">
          {dict.detailAltitude}: {result.altitudeDeg.toFixed(1)}° · {dict.detailMax} {formatClock(c.max)}
        </p>
      )}

      <p className="mt-4 text-[11px] leading-relaxed text-white/40">{dict.checkNote}</p>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Explorer: one map that both tells the story and checks any location
// ---------------------------------------------------------------------------

type CustomPoint = { lat: number; lon: number }

export function EclipseExplorer({ locale, dict }: { locale: Locale; dict: EclipseDictionary }) {
  const [selectedId, setSelectedId] = useState<EclipseSpot["id"]>("palencia")
  const [custom, setCustom] = useState<CustomPoint | null>(null)
  const [locating, setLocating] = useState(false)
  const [geoError, setGeoError] = useState(false)
  const svgRef = useRef<SVGSVGElement>(null)

  const fraction = useUmbraFraction()
  const umbra = umbraPointAt(fraction)
  const clockX = clamp(umbra.x, 56, MAP_W - 56)

  const selected = eclipseSpots.find((spot) => spot.id === selectedId) ?? eclipseSpots[0]
  const contacts = spotContacts(selected)
  const text = dict.spots[selected.id]

  const selectSpot = (id: EclipseSpot["id"]) => {
    setCustom(null)
    setSelectedId(id)
  }

  const pickFromMap = (clientX: number, clientY: number) => {
    const svg = svgRef.current
    if (!svg) {
      return
    }
    const rect = svg.getBoundingClientRect()
    if (!rect.width || !rect.height) {
      return
    }
    const x = ((clientX - rect.left) / rect.width) * MAP_W
    const y = ((clientY - rect.top) / rect.height) * MAP_H
    const lat = latAt(y)
    const lon = lonAt(x)
    if (Number.isFinite(lat) && Number.isFinite(lon)) {
      setCustom({ lat, lon })
    }
  }

  const locate = () => {
    if (!navigator.geolocation) {
      setGeoError(true)
      return
    }
    setLocating(true)
    setGeoError(false)
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocating(false)
        setCustom({ lat: pos.coords.latitude, lon: pos.coords.longitude })
      },
      () => {
        setLocating(false)
        setGeoError(true)
      },
      { enableHighAccuracy: false, timeout: 10000 },
    )
  }

  const detailTimes: Array<{ label: string; value: string }> = [
    { label: dict.detailPartial, value: selected.official?.c1 ?? `~${formatMinutes(contacts.c1)}` },
    { label: dict.detailTotalityBegins, value: selected.official?.c2 ?? `~${formatMinutes(contacts.c2)}` },
    { label: dict.detailMax, value: selected.official?.max ?? `~${formatMinutes(contacts.max)}` },
    { label: dict.detailTotalityEnds, value: selected.official?.c3 ?? `~${formatMinutes(contacts.c3)}` },
    { label: dict.detailSunset, value: selected.official?.sunset ?? `~${formatMinutes(contacts.sunset)}` },
  ]

  const customResult = custom ? computeEclipse(custom.lat, custom.lon) : null
  const pin = custom ? { x: clamp(px(custom.lon), 8, MAP_W - 8), y: clamp(py(custom.lat), 8, MAP_H - 8) } : null

  return (
    <div className="space-y-6">
      {/* Ranked places — horizontal scroll */}
      <div id="eclipse-spots" className="scroll-mt-24">
        <h3 className="text-xl font-bold text-white md:text-2xl">{dict.spotsTitle}</h3>
        <p className="mt-1 text-sm text-white/60">{dict.spotsSubtitle}</p>
        <ol className="mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 [-webkit-overflow-scrolling:touch] [scrollbar-color:#E6786E_transparent] [scrollbar-width:thin]">
          {eclipseSpots.map((spot, index) => {
            const isSelected = !custom && spot.id === selectedId
            return (
              <li key={spot.id} className="snap-start">
                <button
                  type="button"
                  onClick={() => selectSpot(spot.id)}
                  aria-pressed={isSelected}
                  className={`flex h-full w-44 shrink-0 flex-col gap-2.5 rounded-xl border p-3 text-left transition-colors ${
                    isSelected
                      ? "border-[#E6786E]/60 bg-[#E6786E]/15"
                      : "border-white/10 bg-white/[0.03] hover:bg-white/[0.07]"
                  }`}
                >
                  <div className="flex items-start gap-2">
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
                    <span className="min-h-[2.5rem] flex-1 text-sm font-semibold leading-tight text-white">
                      {dict.spots[spot.id].name}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5 text-xs text-white/60">
                    <span className="inline-flex items-center gap-1.5">
                      <Timer className="h-3.5 w-3.5 text-[#F4B7A8]" />
                      {Math.floor(spot.totalitySeconds / 60)}m {String(spot.totalitySeconds % 60).padStart(2, "0")}s
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Sun className="h-3.5 w-3.5 text-[#F4B7A8]" />
                      {spot.sunAltitude}°
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CloudSun className="h-3.5 w-3.5 text-[#F4B7A8]" />
                      <Dots score={spot.climate} label={dict.detailClimate} />
                    </span>
                  </div>
                </button>
              </li>
            )
          })}
        </ol>
      </div>

      {/* Full-width path map */}
      <div id="eclipse-map" className="scroll-mt-24">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#0A1122] to-[#141021] p-4 md:p-5">
          <h3 className="text-xl font-bold text-white md:text-2xl">{dict.mapTitle}</h3>
          <p className="mt-1 text-sm text-white/60">{dict.mapSubtitle}</p>

          <svg
            ref={svgRef}
            viewBox={`0 0 ${MAP_W} ${MAP_H}`}
            className="mt-4 block w-full cursor-crosshair"
            role="img"
            aria-label={dict.mapTitle}
            onClick={(event) => pickFromMap(event.clientX, event.clientY)}
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
              const isSelected = !custom && spot.id === selectedId
              return (
                <g
                  key={spot.id}
                  onClick={(event) => {
                    event.stopPropagation()
                    selectSpot(spot.id)
                  }}
                  className="cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  aria-label={dict.spots[spot.id].name}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault()
                      selectSpot(spot.id)
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

            {/* Custom / geolocated pin */}
            {pin && customResult ? (
              <g pointerEvents="none">
                <circle cx={pin.x} cy={pin.y} r="15" fill={kindAccent(customResult.kind === "none" ? "partial" : customResult.kind).pin} opacity="0.2">
                  <animate attributeName="r" values="9;18;9" dur="2.4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0;0.3" dur="2.4s" repeatCount="indefinite" />
                </circle>
                <path
                  d={`M${pin.x},${pin.y} C${pin.x - 9},${pin.y - 13} ${pin.x - 8},${pin.y - 27} ${pin.x},${pin.y - 27} C${pin.x + 8},${pin.y - 27} ${pin.x + 9},${pin.y - 13} ${pin.x},${pin.y} Z`}
                  fill={kindAccent(customResult.kind === "none" ? "partial" : customResult.kind).pin}
                  stroke="white"
                  strokeWidth="1.2"
                />
                <circle cx={pin.x} cy={pin.y - 19} r="4.2" fill="#1a1013" />
              </g>
            ) : null}

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
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={locate}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#E6786E] px-3.5 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#D4695F]"
            >
              <LocateFixed className="h-4 w-4" />
              {locating ? dict.checkLocating : dict.checkUseLocation}
            </button>
            <span className="text-xs text-white/55">{dict.checkSubtitle}</span>
          </div>
          {geoError ? <p className="mt-2 text-xs text-amber-300/90">{dict.checkGeoError}</p> : null}
          <p className="mt-2 text-[11px] leading-relaxed text-white/40">{dict.mapDisclaimer}</p>
        </div>
      </div>

      {/* Location details: computed for a custom point, curated for a preset spot */}
      {custom && customResult ? (
        <CustomDetail dict={dict} custom={custom} result={customResult} />
      ) : (
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
      )}
    </div>
  )
}
