"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight, CloudSun, Pause, Play, Sun, Timer } from "lucide-react"

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

// Fixed star field for the simulator (static so SSR and client match)
const STARS: Array<[number, number, number]> = [
  [40, 30, 1.4], [110, 70, 1], [180, 24, 1.6], [240, 90, 1], [300, 40, 1.2], [360, 110, 1],
  [420, 30, 1.5], [470, 80, 1], [530, 50, 1.3], [600, 100, 1], [650, 26, 1.6], [710, 70, 1.1],
  [760, 40, 1.3], [80, 130, 1], [200, 150, 1.2], [330, 170, 1], [500, 140, 1.2], [620, 160, 1],
  [730, 130, 1.4], [150, 200, 1], [430, 200, 1.1], [560, 190, 1], [690, 210, 1.2], [270, 60, 1],
]

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

function mixColor(a: [number, number, number], b: [number, number, number], t: number) {
  const c = a.map((channel, index) => Math.round(channel + (b[index] - channel) * t))
  return `rgb(${c[0]},${c[1]},${c[2]})`
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
// Simulator
// ---------------------------------------------------------------------------

function EclipseSimulator({ spot, dict, spotName }: { spot: EclipseSpot; dict: EclipseDictionary; spotName: string }) {
  const contacts = useMemo(() => spotContacts(spot), [spot])
  const rangeStart = contacts.c1 - 12
  const rangeEnd = Math.max(contacts.sunset + 8, Math.min(contacts.c4, contacts.sunset + 30) + 6)

  const [time, setTime] = useState(contacts.c2 - 6)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    setTime(spotContacts(spot).c2 - 6)
    setPlaying(false)
  }, [spot])

  useEffect(() => {
    if (!playing) {
      return
    }
    const timer = setInterval(() => {
      setTime((current) => {
        const nearMax = Math.abs(current - contacts.max) < 3
        return Math.min(rangeEnd, current + (nearMax ? 0.06 : 0.4))
      })
    }, 40)
    return () => clearInterval(timer)
  }, [playing, contacts.max, rangeEnd])

  useEffect(() => {
    if (time >= rangeEnd && playing) {
      setPlaying(false)
    }
  }, [time, rangeEnd, playing])

  // --- Geometry ---------------------------------------------------------
  const W = 800
  const H = 340
  const horizonY = 264
  const pxPerDeg = 9
  const sunR = 26
  const moonR = 27.5

  const altitude = spot.sunAltitude * ((contacts.sunset - time) / (contacts.sunset - contacts.max))
  const progress = clamp((time - rangeStart) / (rangeEnd - rangeStart), 0, 1)
  const sunX = 320 + progress * 150
  const sunY = horizonY - altitude * pxPerDeg

  const s =
    time <= contacts.max
      ? clamp((time - contacts.max) / (contacts.max - contacts.c1), -1.15, 0)
      : clamp((time - contacts.max) / (contacts.c4 - contacts.max), 0, 1.15)
  const moonX = sunX + s * (sunR + moonR) * 0.95
  const moonY = sunY + s * (sunR + moonR) * 0.35

  const coverage = clamp(1 - Math.abs(s), 0, 1)
  const isTotality = time >= contacts.c2 && time <= contacts.c3
  const isDiamond = !isTotality && coverage > 0.982 && altitude > 0
  const sunUp = altitude > -0.5

  const eclipseDark = isTotality ? 1 : Math.pow(coverage, 5)
  const twilight = clamp((time - contacts.sunset) / 20, 0, 1) * 0.75
  const darkness = clamp(Math.max(eclipseDark, twilight), 0, 1)

  const skyTop = mixColor([86, 128, 188], [6, 7, 20], darkness)
  const skyMid = mixColor([224, 152, 116], [26, 20, 44], darkness)
  const skyGlow = mixColor([255, 196, 140], [64, 36, 54], darkness)
  const starOpacity = clamp((darkness - 0.72) / 0.28, 0, 1)

  const phase =
    !sunUp
      ? dict.phaseSet
      : isTotality
        ? dict.phaseTotality
        : isDiamond
          ? dict.phaseDiamond
          : time < contacts.c1
            ? dict.phaseBefore
            : time <= contacts.c3
              ? dict.phasePartial
              : time <= contacts.c4
                ? dict.phaseEnding
                : dict.phaseBefore

  const jumpPoints = [
    { label: `C1 · ${formatMinutes(contacts.c1)}`, value: contacts.c1 },
    { label: `☀︎ ${formatMinutes(contacts.c2)}`, value: contacts.c2 - 1.5 },
    { label: `● ${formatMinutes(contacts.max)}`, value: contacts.max },
    { label: `↓ ${formatMinutes(contacts.sunset)}`, value: contacts.sunset - 1 },
  ]

  // The last visible sliver of photosphere sits on the sun's rim opposite the moon's center
  const diamondAngle = Math.atan2(moonY - sunY, moonX - sunX)
  const diamondX = sunX - Math.cos(diamondAngle) * sunR
  const diamondY = sunY - Math.sin(diamondAngle) * sunR

  return (
    <div id="eclipse-simulator" className="scroll-mt-24 rounded-2xl border border-white/10 bg-black/40 p-4 md:p-6">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-white md:text-2xl">{dict.simTitle}</h3>
          <p className="mt-1 text-sm text-white/60">
            {dict.simSubtitle} <span className="font-semibold text-[#F4B7A8]">{spotName}</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-sm tabular-nums text-white/90">
            {dict.simLocalTime} {formatMinutes(time)}
          </span>
          <button
            type="button"
            onClick={() => {
              if (!playing && time >= rangeEnd - 0.5) {
                setTime(rangeStart)
              }
              setPlaying((value) => !value)
            }}
            className="inline-flex items-center gap-2 rounded-full bg-[#E6786E] px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#D4695F]"
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {playing ? dict.simPause : dict.simPlay}
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/10">
        <svg viewBox={`0 0 ${W} ${H}`} className="block w-full" role="img" aria-label={phase}>
          <defs>
            <linearGradient id="sim-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={skyTop} />
              <stop offset="62%" stopColor={skyMid} />
              <stop offset="100%" stopColor={skyGlow} />
            </linearGradient>
            <radialGradient id="sim-corona" cx="50%" cy="50%" r="50%">
              <stop offset="30%" stopColor="rgba(255,255,255,0.95)" />
              <stop offset="55%" stopColor="rgba(220,228,255,0.4)" />
              <stop offset="100%" stopColor="rgba(200,215,255,0)" />
            </radialGradient>
            <radialGradient id="sim-sunglow" cx="50%" cy="50%" r="50%">
              <stop offset="35%" stopColor="rgba(255,214,150,0.9)" />
              <stop offset="100%" stopColor="rgba(255,180,110,0)" />
            </radialGradient>
            <radialGradient id="sim-diamond" cx="50%" cy="50%" r="50%">
              <stop offset="20%" stopColor="rgba(255,255,255,1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>

          <rect x="0" y="0" width={W} height={horizonY} fill="url(#sim-sky)" />

          {STARS.map(([x, y, r]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fill="white" opacity={starOpacity * 0.9} />
          ))}

          {sunUp ? (
            <g>
              {!isTotality ? (
                <circle cx={sunX} cy={sunY} r={sunR * 2.4} fill="url(#sim-sunglow)" opacity={1 - darkness * 0.85} />
              ) : null}
              {isTotality ? <circle cx={moonX} cy={moonY} r={moonR * 2.6} fill="url(#sim-corona)" /> : null}
              <circle cx={sunX} cy={sunY} r={sunR} fill="#FFE3B0" />
              <circle cx={moonX} cy={moonY} r={moonR} fill={isTotality ? "#05060F" : mixColor([16, 14, 24], [5, 6, 15], darkness)} />
              {isDiamond ? <circle cx={diamondX} cy={diamondY} r={16} fill="url(#sim-diamond)" /> : null}
            </g>
          ) : null}

          {/* Horizon */}
          {spot.horizon === "sea" ? (
            <g>
              <rect x="0" y={horizonY} width={W} height={H - horizonY} fill={mixColor([24, 34, 54], [4, 6, 14], darkness)} />
              <rect x="0" y={horizonY} width={W} height="2.5" fill={mixColor([255, 200, 150], [90, 70, 100], darkness)} opacity="0.7" />
              {sunUp && altitude < 6 ? (
                <rect
                  x={sunX - 30}
                  y={horizonY + 4}
                  width="60"
                  height={H - horizonY - 8}
                  fill="url(#sim-sunglow)"
                  opacity={0.25 * (1 - darkness)}
                />
              ) : null}
            </g>
          ) : (
            <g>
              <rect x="0" y={horizonY} width={W} height={H - horizonY} fill={mixColor([26, 18, 14], [6, 5, 8], darkness)} />
              <path
                d={`M0,${horizonY} L90,${horizonY - 12} L190,${horizonY - 2} L300,${horizonY - 16} L430,${horizonY - 4} L560,${horizonY - 14} L680,${horizonY - 3} L800,${horizonY - 10} L800,${H} L0,${H} Z`}
                fill={mixColor([20, 14, 11], [5, 4, 7], darkness)}
              />
            </g>
          )}

          {/* Phase caption inside the scene */}
          <text
            x={W / 2}
            y={H - 18}
            textAnchor="middle"
            className="fill-white"
            opacity="0.85"
            fontSize="15"
            fontWeight={isTotality ? 700 : 500}
          >
            {phase}
          </text>
        </svg>
      </div>

      <div className="mt-4">
        <input
          type="range"
          min={rangeStart}
          max={rangeEnd}
          step={0.05}
          value={time}
          onChange={(event) => {
            setPlaying(false)
            setTime(Number(event.target.value))
          }}
          aria-label={dict.simLocalTime}
          className="w-full accent-[#E6786E]"
        />
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {jumpPoints.map((point) => (
            <button
              key={point.label}
              type="button"
              onClick={() => {
                setPlaying(false)
                setTime(point.value)
              }}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs tabular-nums text-white/75 transition-colors hover:bg-white/10 hover:text-white"
            >
              {point.label}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-white/50">⚠️ {dict.simSafety}</p>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Explorer (map + ranking + detail + simulator)
// ---------------------------------------------------------------------------

export function EclipseExplorer({ locale, dict }: { locale: Locale; dict: EclipseDictionary }) {
  const [selectedId, setSelectedId] = useState<EclipseSpot["id"]>("palencia")
  const selected = eclipseSpots.find((spot) => spot.id === selectedId) ?? eclipseSpots[0]
  const contacts = spotContacts(selected)
  const text = dict.spots[selected.id]

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

          <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className="mt-4 block w-full" role="img" aria-label={dict.mapTitle}>
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

            {/* Traveling umbra */}
            <g className="motion-reduce:hidden" opacity="0.55">
              <circle r="62" fill="url(#map-umbra)">
                <animateMotion dur="9s" repeatCount="indefinite" path={centerLinePath} />
              </circle>
            </g>

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
                    className={isSelected ? "fill-white" : "fill-white"}
                    opacity={isSelected ? 1 : 0.75}
                  >
                    {dict.spots[spot.id].name.split(" · ")[0]}
                  </text>
                </g>
              )
            })}
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
          <p className="mt-2 text-[11px] leading-relaxed text-white/40">{dict.mapDisclaimer}</p>
        </div>

        {/* Ranked list */}
        <div className="rounded-2xl border border-white/10 bg-black/40 p-4 md:p-5">
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

      <EclipseSimulator spot={selected} dict={dict} spotName={text.name} />
    </div>
  )
}
