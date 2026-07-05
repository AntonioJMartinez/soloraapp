"use client"

import { useMemo, useRef, useState } from "react"
import { Compass, LocateFixed, MapPin, Sparkles, Sun } from "lucide-react"

import {
  bandPath,
  centerLinePath,
  clamp,
  IBERIA,
  IBIZA,
  latAt,
  lonAt,
  MALLORCA,
  MAP_H,
  MAP_W,
  MENORCA,
  PORTUGAL_BORDER,
  px,
  py,
  toPath,
} from "@/lib/eclipse-geo"
import {
  compassDirection,
  computeEclipse,
  type EclipseResult,
  formatClock,
} from "@/lib/eclipse-circumstances"
import { EclipseDictionary } from "@/lib/eclipse-experience"

type Point = { lat: number; lon: number; name?: string }

const CITIES: Point[] = [
  { name: "A Coruña", lat: 43.362, lon: -8.412 },
  { name: "León", lat: 42.599, lon: -5.567 },
  { name: "Burgos", lat: 42.344, lon: -3.697 },
  { name: "Bilbao", lat: 43.263, lon: -2.935 },
  { name: "Zaragoza", lat: 41.649, lon: -0.889 },
  { name: "València", lat: 39.47, lon: -0.376 },
  { name: "Palma", lat: 39.57, lon: 2.65 },
  { name: "Madrid", lat: 40.417, lon: -3.704 },
  { name: "Barcelona", lat: 41.385, lon: 2.173 },
  { name: "Sevilla", lat: 37.389, lon: -5.984 },
]

const fmtDuration = (seconds: number) => {
  const s = Math.round(seconds)
  return `${Math.floor(s / 60)}m ${String(s % 60).padStart(2, "0")}s`
}

const accent = (kind: EclipseResult["kind"]) =>
  kind === "total"
    ? { ring: "border-[#E6786E]/60", pin: "#E6786E", glow: "bg-[#E6786E]" }
    : kind === "edge"
      ? { ring: "border-amber-400/60", pin: "#FBBF24", glow: "bg-amber-400" }
      : { ring: "border-sky-400/50", pin: "#60A5FA", glow: "bg-sky-400" }

export function EclipseLocationChecker({ dict }: { dict: EclipseDictionary }) {
  const [point, setPoint] = useState<Point>(CITIES[1]) // León — a clear totality example
  const [locating, setLocating] = useState(false)
  const [geoError, setGeoError] = useState(false)
  const svgRef = useRef<SVGSVGElement>(null)

  const result = useMemo(() => computeEclipse(point.lat, point.lon), [point])
  const c = result.contacts
  const col = accent(result.kind)

  const pinX = clamp(px(point.lon), 6, MAP_W - 6)
  const pinY = clamp(py(point.lat), 6, MAP_H - 6)

  const pickFromEvent = (clientX: number, clientY: number) => {
    const svg = svgRef.current
    if (!svg) return
    const rect = svg.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * MAP_W
    const y = ((clientY - rect.top) / rect.height) * MAP_H
    setPoint({ lat: latAt(y), lon: lonAt(x) })
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
        setPoint({ lat: pos.coords.latitude, lon: pos.coords.longitude })
      },
      () => {
        setLocating(false)
        setGeoError(true)
      },
      { enableHighAccuracy: false, timeout: 10000 },
    )
  }

  const verdict =
    !result.visible
      ? dict.verdictSet
      : result.kind === "total"
        ? dict.verdictTotal
        : result.kind === "edge"
          ? dict.verdictEdge
          : dict.verdictPartial

  const timeRows: Array<{ label: string; value: number; highlight?: boolean }> = [
    { label: dict.detailPartial, value: c.c1 },
    ...(c.c2 != null ? [{ label: dict.detailTotalityBegins, value: c.c2 }] : []),
    { label: dict.detailMax, value: c.max, highlight: true },
    ...(c.c3 != null ? [{ label: dict.detailTotalityEnds, value: c.c3 }] : []),
    { label: dict.checkPartialEnds, value: c.c4 },
  ]

  const showsTotality = result.kind === "total" || (result.kind === "edge" && result.totalitySeconds > 0)

  return (
    <div id="eclipse-checker" className="scroll-mt-24 rounded-2xl border border-white/10 bg-black/40 p-4 md:p-5">
      <h3 className="text-xl font-bold text-white md:text-2xl">{dict.checkTitle}</h3>
      <p className="mt-1 text-sm text-white/60">{dict.checkSubtitle}</p>

      <div className="mt-4 grid gap-5 md:grid-cols-[3fr_2fr]">
        {/* Interactive map */}
        <div>
          <svg
            ref={svgRef}
            viewBox={`0 0 ${MAP_W} ${MAP_H}`}
            className="block w-full cursor-crosshair rounded-xl border border-white/10 bg-gradient-to-b from-[#0A1122] to-[#141021]"
            role="img"
            aria-label={dict.checkTitle}
            onClick={(e) => pickFromEvent(e.clientX, e.clientY)}
          >
            <defs>
              <linearGradient id="check-band" x1="0" y1="0" x2="1" y2="0.35">
                <stop offset="0%" stopColor="rgba(230,120,110,0.34)" />
                <stop offset="55%" stopColor="rgba(196,110,150,0.26)" />
                <stop offset="100%" stopColor="rgba(150,110,220,0.32)" />
              </linearGradient>
            </defs>

            <path d={toPath(IBERIA, true)} fill="#211712" stroke="rgba(255,255,255,0.22)" strokeWidth="1.4" strokeLinejoin="round" />
            <path d={toPath(MALLORCA, true)} fill="#211712" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" strokeLinejoin="round" />
            <path d={toPath(MENORCA, true)} fill="#211712" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" strokeLinejoin="round" />
            <path d={toPath(IBIZA, true)} fill="#211712" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" strokeLinejoin="round" />
            <path d={toPath(PORTUGAL_BORDER)} fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1" strokeDasharray="3 4" />

            <path d={bandPath} fill="url(#check-band)" stroke="rgba(244,183,168,0.4)" strokeWidth="1" strokeDasharray="6 5" />
            <path d={centerLinePath} fill="none" stroke="#F4B7A8" strokeWidth="1.5" strokeDasharray="9 7" opacity="0.7" />

            {CITIES.map((city) => (
              <circle
                key={city.name}
                cx={px(city.lon)}
                cy={py(city.lat)}
                r="2.5"
                fill="rgba(255,255,255,0.4)"
              />
            ))}

            {/* Selected pin */}
            <g pointerEvents="none">
              <circle cx={pinX} cy={pinY} r="16" fill={col.pin} opacity="0.18">
                <animate attributeName="r" values="10;20;10" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0;0.3" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <path
                d={`M${pinX},${pinY} C${pinX - 9},${pinY - 13} ${pinX - 8},${pinY - 28} ${pinX},${pinY - 28} C${pinX + 8},${pinY - 28} ${pinX + 9},${pinY - 13} ${pinX},${pinY} Z`}
                fill={col.pin}
                stroke="white"
                strokeWidth="1.2"
              />
              <circle cx={pinX} cy={pinY - 20} r="4.5" fill="#1a1013" />
            </g>
          </svg>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={locate}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#E6786E] px-3.5 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#D4695F]"
            >
              <LocateFixed className="h-4 w-4" />
              {locating ? dict.checkLocating : dict.checkUseLocation}
            </button>
            {CITIES.map((city) => (
              <button
                key={city.name}
                type="button"
                onClick={() => setPoint(city)}
                aria-pressed={point.name === city.name}
                className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                  point.name === city.name
                    ? "border-[#E6786E]/60 bg-[#E6786E]/15 text-white"
                    : "border-white/15 bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {city.name}
              </button>
            ))}
          </div>
          {geoError ? <p className="mt-2 text-xs text-amber-300/90">{dict.checkGeoError}</p> : null}
        </div>

        {/* Result panel */}
        <div className={`flex flex-col rounded-xl border ${col.ring} bg-black/30 p-4`}>
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-white/50">
            <MapPin className="h-3.5 w-3.5" />
            {point.name ?? `${point.lat.toFixed(3)}, ${point.lon.toFixed(3)}`}
          </div>
          <h4 className="mt-1.5 text-lg font-bold leading-tight text-white">{verdict}</h4>

          {result.visible ? (
            <>
              <div className="mt-3 flex items-end gap-4">
                {showsTotality ? (
                  <div>
                    <div className="text-3xl font-bold tabular-nums text-[#F4B7A8]">
                      {fmtDuration(result.totalitySeconds)}
                    </div>
                    <div className="text-xs text-white/50">{dict.detailDuration}</div>
                  </div>
                ) : (
                  <div>
                    <div className="text-3xl font-bold tabular-nums text-sky-300">
                      {Math.round(result.obscuration * 100)}%
                    </div>
                    <div className="text-xs text-white/50">{dict.labelObscuration}</div>
                  </div>
                )}
                <div className="flex flex-col gap-1 pb-1 text-xs text-white/60">
                  <span className="inline-flex items-center gap-1.5">
                    <Sun className="h-3.5 w-3.5 text-[#F4B7A8]" />
                    {dict.detailAltitude}: {result.altitudeDeg.toFixed(1)}°
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Compass className="h-3.5 w-3.5 text-[#F4B7A8]" />
                    {dict.labelDirection}: {compassDirection(result.azimuthDeg)} ({Math.round(result.azimuthDeg)}°)
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-[#F4B7A8]" />
                    {dict.labelMagnitude}: {result.magnitude.toFixed(3)}
                  </span>
                </div>
              </div>

              <dl className="mt-4 grid grid-cols-2 gap-2">
                {timeRows.map((row) => (
                  <div
                    key={row.label}
                    className={`rounded-lg border px-2.5 py-2 ${
                      row.highlight ? "border-[#E6786E]/50 bg-[#E6786E]/15" : "border-white/10 bg-black/30"
                    }`}
                  >
                    <dt className="text-[10px] uppercase tracking-wide text-white/45">{row.label}</dt>
                    <dd className="font-mono text-base font-bold tabular-nums text-white">{formatClock(row.value)}</dd>
                  </div>
                ))}
              </dl>
            </>
          ) : (
            <p className="mt-3 text-sm text-white/70">
              {dict.detailAltitude}: {result.altitudeDeg.toFixed(1)}° · {dict.detailMax} {formatClock(c.max)}
            </p>
          )}

          <p className="mt-4 text-[11px] leading-relaxed text-white/40">{dict.checkNote}</p>
        </div>
      </div>
    </div>
  )
}
