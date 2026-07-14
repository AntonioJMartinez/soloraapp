"use client"

import { useState } from "react"
import { LocateFixed } from "lucide-react"

import {
  eclipseCities,
  getEclipseLandingStrings,
  ibizaOutline,
  ignMunicipalityUrl,
  mallorcaOutline,
  menorcaOutline,
  spainOutline,
  totalityCenterline,
  totalityNorthLimit,
  totalitySouthLimit,
  type EclipseCity,
} from "@/lib/eclipse-2026"
import { Locale } from "@/lib/i18n"
import { cn } from "@/lib/utils"

/* Equirectangular projection tuned for Spain (aspect corrected at ~40°N) */
const LON_MIN = -9.9
const LON_MAX = 4.6
const LAT_MIN = 35.7
const LAT_MAX = 44.2
const MAP_W = 1000
const MAP_H = Math.round((MAP_W * ((LAT_MAX - LAT_MIN) / (LON_MAX - LON_MIN))) / Math.cos((40 * Math.PI) / 180))

function project([lat, lon]: [number, number]): [number, number] {
  const x = ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * MAP_W
  const y = ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * MAP_H
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10]
}

function toPath(points: Array<[number, number]>, close = false) {
  const projected = points.map(project)
  const d = projected.map(([x, y], index) => `${index === 0 ? "M" : "L"}${x},${y}`).join(" ")
  return close ? `${d} Z` : d
}

const bandPath = `${toPath(totalityNorthLimit)} ${totalitySouthLimit
  .slice()
  .reverse()
  .map((point, index) => {
    const [x, y] = project(point)
    return `${index === 0 ? "L" : "L"}${x},${y}`
  })
  .join(" ")} Z`

/* Preferred label direction per city so names don't collide on the map */
const labelPlacement: Record<string, "n" | "s" | "e" | "w"> = {
  coruna: "n",
  leon: "n",
  palencia: "s",
  burgos: "n",
  aranda: "s",
  soria: "s",
  zaragoza: "n",
  calamocha: "s",
  palma: "s",
  oviedo: "n",
  bilbao: "n",
  valencia: "e",
  madrid: "s",
  barcelona: "e",
  sevilla: "s",
}

function labelAttrs(placement: "n" | "s" | "e" | "w") {
  switch (placement) {
    case "n":
      return { dx: 0, dy: -14, anchor: "middle" as const }
    case "s":
      return { dx: 0, dy: 24, anchor: "middle" as const }
    case "e":
      return { dx: 14, dy: 5, anchor: "start" as const }
    case "w":
      return { dx: -14, dy: 5, anchor: "end" as const }
  }
}

/* Latitude of a west→east polyline at a given longitude (null outside its range) */
function latAtLon(line: Array<[number, number]>, lon: number): number | null {
  for (let i = 0; i < line.length - 1; i++) {
    const [lat1, lon1] = line[i]
    const [lat2, lon2] = line[i + 1]
    if (lon >= lon1 && lon <= lon2) {
      const t = (lon - lon1) / (lon2 - lon1)
      return lat1 + (lat2 - lat1) * t
    }
  }
  return null
}

function distanceKm(aLat: number, aLon: number, bLat: number, bLon: number) {
  const dLat = (aLat - bLat) * 111
  const dLon = (aLon - bLon) * 111 * Math.cos((aLat * Math.PI) / 180)
  return Math.hypot(dLat, dLon)
}

/* The illustrative band is approximate; treat ± this margin as "on the edge" */
const EDGE_MARGIN_DEG = 0.15

type GeoOutcome = "inside" | "edge" | "outside" | "outOfArea"

type GeoResult = {
  lat: number
  lon: number
  outcome: GeoOutcome
  bandKm?: number
  bandDirection?: "north" | "south"
  nearestId?: string
  nearestKm?: number
}

function evaluateLocation(lat: number, lon: number): GeoResult {
  const north = latAtLon(totalityNorthLimit, lon)
  const south = latAtLon(totalitySouthLimit, lon)

  if (north === null || south === null) {
    return { lat, lon, outcome: "outOfArea" }
  }

  let nearestId: string | undefined
  let nearestKm = Infinity
  for (const city of eclipseCities) {
    if (city.kind !== "data") continue
    const km = distanceKm(lat, lon, city.lat, city.lon)
    if (km < nearestKm) {
      nearestKm = km
      nearestId = city.id
    }
  }

  const northGap = north - lat
  const southGap = lat - south

  if (northGap > 0 && southGap > 0) {
    const onEdge = Math.min(northGap, southGap) < EDGE_MARGIN_DEG
    return { lat, lon, outcome: onEdge ? "edge" : "inside", nearestId, nearestKm }
  }

  if (Math.min(Math.abs(northGap), Math.abs(southGap)) < EDGE_MARGIN_DEG) {
    return { lat, lon, outcome: "edge", nearestId, nearestKm }
  }

  const bandDirection = lat > north ? "south" : "north"
  const bandKm = Math.max(5, Math.round((lat > north ? lat - north : south - lat) * 111))
  return { lat, lon, outcome: "outside", bandKm, bandDirection, nearestId, nearestKm }
}

type GeoState =
  | { status: "idle" }
  | { status: "locating" }
  | { status: "error"; kind: "denied" | "unavailable" | "unsupported" }
  | { status: "done"; result: GeoResult }

type EclipseMapProps = {
  locale: Locale
}

export function EclipseMap({ locale }: EclipseMapProps) {
  const strings = getEclipseLandingStrings(locale)
  const locate = strings.map.locate
  const [selectedId, setSelectedId] = useState("burgos")
  const [geo, setGeo] = useState<GeoState>({ status: "idle" })
  const selected = eclipseCities.find((city) => city.id === selectedId) ?? eclipseCities[0]
  const selectedCopy = strings.cities[selected.id]

  const centerlineD = toPath(totalityCenterline)

  const markerColor = (city: EclipseCity) => {
    if (city.kind === "partial") return "#8A8A93"
    if (city.kind === "edge") return "#C9A36B"
    return "#FFD9A8"
  }

  const handleLocate = () => {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setGeo({ status: "error", kind: "unsupported" })
      return
    }

    setGeo({ status: "locating" })
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const result = evaluateLocation(position.coords.latitude, position.coords.longitude)
        setGeo({ status: "done", result })
        if ((result.outcome === "inside" || result.outcome === "edge") && result.nearestId) {
          setSelectedId(result.nearestId)
        }
      },
      (error) => {
        setGeo({ status: "error", kind: error.code === error.PERMISSION_DENIED ? "denied" : "unavailable" })
      },
      { timeout: 12000, maximumAge: 300000 },
    )
  }

  const geoResult = geo.status === "done" ? geo.result : null
  const nearestCity = geoResult?.nearestId ? eclipseCities.find((city) => city.id === geoResult.nearestId) : null
  const geoHeadline = geoResult
    ? { inside: locate.inside, edge: locate.edge, outside: locate.outside, outOfArea: locate.outOfArea }[geoResult.outcome]
    : null
  const geoBody = geoResult
    ? geoResult.outcome === "outside"
      ? locate.outsideBody
          .replace("{km}", String(geoResult.bandKm))
          .replace("{direction}", geoResult.bandDirection === "north" ? locate.north : locate.south)
      : { inside: locate.insideBody, edge: locate.edgeBody, outOfArea: locate.outOfAreaBody }[geoResult.outcome as Exclude<GeoOutcome, "outside">]
    : null
  const geoTone =
    geoResult?.outcome === "inside"
      ? "border-[#FFD9A8]/50 bg-[#FFD9A8]/10"
      : geoResult?.outcome === "edge"
        ? "border-[#E6786E]/40 bg-[#E6786E]/10"
        : "border-white/15 bg-white/[0.04]"

  const userPoint = geoResult ? project([geoResult.lat, geoResult.lon]) : null
  const userOnMap =
    userPoint !== null && userPoint[0] >= 12 && userPoint[0] <= MAP_W - 12 && userPoint[1] >= 12 && userPoint[1] <= MAP_H - 12

  return (
    <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-start">
      <div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0908]">
          <svg
            viewBox={`0 0 ${MAP_W} ${MAP_H}`}
            className="h-auto w-full"
            role="img"
            aria-label={strings.map.heading}
          >
            <defs>
              <linearGradient id="ecl-band" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFD9A8" stopOpacity="0.28" />
                <stop offset="55%" stopColor="#E6786E" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#FFD9A8" stopOpacity="0.24" />
              </linearGradient>
              <clipPath id="ecl-map-clip">
                <rect x="0" y="0" width={MAP_W} height={MAP_H} />
              </clipPath>
            </defs>

            <g clipPath="url(#ecl-map-clip)">
              {/* Land masses */}
              {[spainOutline, mallorcaOutline, menorcaOutline, ibizaOutline].map((outline, index) => (
                <path
                  key={index}
                  d={toPath(outline, true)}
                  fill="#171310"
                  stroke="rgba(255,255,255,0.22)"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              ))}

              {/* Path of totality */}
              <path d={bandPath} fill="url(#ecl-band)" stroke="rgba(255,217,168,0.45)" strokeWidth="1.5" strokeDasharray="7 5" />

              {/* Centerline — dashes march west → east like the travelling shadow */}
              <path
                className="ecl-centerline"
                d={centerlineD}
                fill="none"
                stroke="#FFD9A8"
                strokeWidth="2"
                strokeDasharray="3 10"
                strokeLinecap="round"
                opacity="0.9"
              />

              {/* Cities */}
              {eclipseCities.map((city) => {
                const [x, y] = project([city.lat, city.lon])
                const isSelected = city.id === selectedId
                const color = markerColor(city)
                const placement = labelAttrs(labelPlacement[city.id] ?? "n")

                return (
                  <g
                    key={city.id}
                    className="ecl-city"
                    role="button"
                    tabIndex={0}
                    aria-pressed={isSelected}
                    aria-label={city.name}
                    onClick={() => setSelectedId(city.id)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault()
                        setSelectedId(city.id)
                      }
                    }}
                  >
                    {isSelected ? <circle cx={x} cy={y} r={16} fill={color} opacity={0.18} /> : null}
                    <circle
                      cx={x}
                      cy={y}
                      r={city.kind === "data" ? (isSelected ? 8 : 6.5) : 5}
                      fill={city.kind === "partial" ? "transparent" : color}
                      stroke={city.kind === "partial" ? color : "#0B0908"}
                      strokeWidth={city.kind === "partial" ? 2 : 1.5}
                    />
                    <text
                      x={x + placement.dx}
                      y={y + placement.dy}
                      textAnchor={placement.anchor}
                      fontSize="19"
                      fill={isSelected ? "#FFFFFF" : "rgba(255,255,255,0.62)"}
                      fontWeight={isSelected ? 700 : 400}
                      style={{ pointerEvents: "none" }}
                    >
                      {city.name}
                    </text>
                  </g>
                )
              })}

              {/* The visitor's own position */}
              {userOnMap && userPoint ? (
                <g aria-label={locate.you}>
                  <circle cx={userPoint[0]} cy={userPoint[1]} r={14} fill="#7FB5FF" opacity={0.2} />
                  <circle cx={userPoint[0]} cy={userPoint[1]} r={6} fill="#7FB5FF" stroke="#0B0908" strokeWidth={1.5} />
                  <text
                    x={userPoint[0]}
                    y={userPoint[1] - 20}
                    textAnchor="middle"
                    fontSize="19"
                    fontWeight={700}
                    fill="#B8D4FF"
                    style={{ pointerEvents: "none" }}
                  >
                    {locate.you}
                  </text>
                </g>
              ) : null}
            </g>
          </svg>
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/55">
          <span className="flex items-center gap-2">
            <span className="h-3 w-6 rounded-sm border border-[#FFD9A8]/50 bg-[#FFD9A8]/20" aria-hidden="true" />
            {strings.map.legendBand}
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-0 w-6 border-t-2 border-dotted border-[#FFD9A8]" aria-hidden="true" />
            {strings.map.legendCenterline}
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFD9A8]" aria-hidden="true" />
            {strings.map.legendCity}
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full border-2 border-[#8A8A93]" aria-hidden="true" />
            {strings.map.legendPartial}
          </span>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-white/40">
          {strings.map.disclaimer}{" "}
          <a
            href={ignMunicipalityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/30 underline-offset-2 transition-colors hover:text-white/70"
          >
            {strings.map.disclaimerLink}
          </a>
        </p>
      </div>

      {/* Detail panel */}
      <div>
        {/* Geolocation check */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <button
              type="button"
              onClick={handleLocate}
              disabled={geo.status === "locating"}
              className="inline-flex items-center gap-2 rounded-full border border-[#FFD9A8]/50 bg-[#FFD9A8]/10 px-5 py-2.5 text-sm font-semibold text-[#FFD9A8] transition-colors hover:bg-[#FFD9A8]/20 disabled:cursor-wait disabled:opacity-60"
            >
              <LocateFixed className={cn("h-4 w-4", geo.status === "locating" && "animate-spin")} aria-hidden="true" />
              {geo.status === "locating" ? locate.locating : locate.button}
            </button>
            <span className="text-xs text-white/35">{locate.privacy}</span>
          </div>

          {geo.status === "error" ? (
            <p role="status" className="mt-3 rounded-xl border border-[#E6786E]/40 bg-[#E6786E]/10 px-4 py-3 text-sm leading-relaxed text-[#F4B4AE]">
              {{ denied: locate.denied, unavailable: locate.unavailable, unsupported: locate.unsupported }[geo.kind]}
            </p>
          ) : null}

          {geoResult && geoHeadline ? (
            <div role="status" className={cn("mt-3 rounded-xl border px-4 py-3.5", geoTone)}>
              <p className="text-sm font-bold text-white">
                {geoResult.outcome === "inside" ? "✓ " : geoResult.outcome === "outside" ? "✕ " : ""}
                {geoHeadline}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-white/70">{geoBody}</p>
              {(geoResult.outcome === "inside" || geoResult.outcome === "edge") && nearestCity ? (
                <p className="mt-2 text-xs text-white/50">
                  {locate.nearest}: <span className="font-semibold text-[#FFD9A8]">{nearestCity.name}</span>
                  {" · "}
                  {Math.round(geoResult.nearestKm ?? 0)} km
                </p>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2" role="tablist" aria-label={strings.map.heading}>
          {eclipseCities
            .filter((city) => city.kind === "data")
            .map((city) => (
              <button
                key={city.id}
                type="button"
                onClick={() => setSelectedId(city.id)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                  city.id === selectedId
                    ? "border-[#FFD9A8]/70 bg-[#FFD9A8]/15 text-[#FFD9A8]"
                    : "border-white/15 text-white/60 hover:border-white/35 hover:text-white",
                )}
              >
                {city.name}
              </button>
            ))}
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <h3 className="text-2xl font-bold text-white">{selected.name}</h3>

          {selected.kind === "data" && selectedCopy ? (
            <>
              <dl className="mt-5 grid grid-cols-3 gap-3 border-y border-white/10 py-5 text-center">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-white/40">{strings.map.panel.totality}</dt>
                  <dd className="mt-1.5 font-mono text-xl font-light tabular-nums text-[#FFD9A8] md:text-2xl">{selected.totality}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-white/40">{strings.map.panel.sunAltitude}</dt>
                  <dd className="mt-1.5 font-mono text-xl font-light tabular-nums text-[#FFD9A8] md:text-2xl">{selected.sunAltitude}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-white/40">{strings.map.panel.maxEclipse}</dt>
                  <dd className="mt-1.5 font-mono text-xl font-light tabular-nums text-[#FFD9A8] md:text-2xl">{selected.maxTime}</dd>
                </div>
              </dl>

              <div className="mt-5 space-y-4 text-sm leading-relaxed">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">{strings.map.panel.why}</p>
                  <p className="mt-1.5 text-white/80">{selectedCopy.why}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">{strings.map.panel.risk}</p>
                  <p className="mt-1.5 text-white/80">{selectedCopy.risk}</p>
                </div>
              </div>
            </>
          ) : (
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              {selected.kind === "path"
                ? strings.map.panel.pathNoData
                : selected.kind === "edge"
                  ? strings.map.panel.edgeNote
                  : strings.map.panel.partialNote}
            </p>
          )}

          <p className="mt-6 border-t border-white/10 pt-4 text-sm text-[#F4B4AE]">{strings.map.panel.appHook}</p>
        </div>
      </div>
    </div>
  )
}
