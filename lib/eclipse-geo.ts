// Shared map geometry for the eclipse hub (animated path map + location
// checker). Equirectangular projection over the Iberian Peninsula and the
// Balearics. The totality band and centre line are COMPUTED from the NASA
// Besselian elements (see scripts in lib/eclipse-circumstances.ts), so the
// drawn path matches the per-location calculator exactly.

export const MAP_W = 720
export const MAP_H = 520
const LON_MIN = -10.2
const LON_MAX = 4.6
const LAT_MIN = 35.9
const LAT_MAX = 44.6

export const px = (lon: number) => ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * MAP_W
export const py = (lat: number) => ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * MAP_H
export const lonAt = (x: number) => LON_MIN + (x / MAP_W) * (LON_MAX - LON_MIN)
export const latAt = (y: number) => LAT_MAX - (y / MAP_H) * (LAT_MAX - LAT_MIN)

export type LonLat = [number, number]

export function toPath(points: LonLat[], close = false) {
  const d = points
    .map(([lon, lat], index) => `${index === 0 ? "M" : "L"}${px(lon).toFixed(1)},${py(lat).toFixed(1)}`)
    .join(" ")
  return close ? `${d} Z` : d
}

// Stylized Iberian Peninsula coastline (clockwise from Fisterra)
export const IBERIA: LonLat[] = [
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

export const PORTUGAL_BORDER: LonLat[] = [
  [-8.87, 41.86], [-8.2, 42.05], [-7.6, 41.85], [-6.6, 41.9], [-6.2, 41.3], [-6.8, 40.5],
  [-6.93, 39.6], [-7.05, 38.7], [-7.4, 37.17],
]

export const MALLORCA: LonLat[] = [
  [2.35, 39.57], [2.75, 39.35], [3.24, 39.35], [3.47, 39.66], [3.15, 39.9], [2.7, 39.85],
]
export const MENORCA: LonLat[] = [[3.83, 39.95], [4.1, 39.88], [4.32, 39.98], [4.05, 40.08]]
export const IBIZA: LonLat[] = [[1.22, 38.88], [1.45, 38.83], [1.62, 39.0], [1.35, 39.08]]

// Totality limits computed from the Besselian elements (mag ≥ 1 boundary).
export const BAND_NORTH: LonLat[] = [
  [-9.2, 45.98], [-8.7, 45.98], [-8.2, 45.98], [-7.7, 45.98], [-7.2, 45.68], [-6.7, 45.34],
  [-6.2, 45.02], [-5.7, 44.72], [-5.2, 44.42], [-4.7, 44.12], [-4.2, 43.84], [-3.7, 43.58],
  [-3.2, 43.32], [-2.7, 43.06], [-2.2, 42.8], [-1.7, 42.56], [-1.2, 42.34], [-0.7, 42.12],
  [-0.2, 41.9], [0.3, 41.68], [0.8, 41.48], [1.3, 41.28], [1.8, 41.08], [2.3, 40.9],
  [2.8, 40.72], [3.3, 40.56], [3.8, 40.38],
]
export const BAND_SOUTH: LonLat[] = [
  [-9.2, 43.22], [-8.7, 42.92], [-8.2, 42.64], [-7.7, 42.36], [-7.2, 42.1], [-6.7, 41.84],
  [-6.2, 41.58], [-5.7, 41.34], [-5.2, 41.1], [-4.7, 40.86], [-4.2, 40.64], [-3.7, 40.42],
  [-3.2, 40.2], [-2.7, 40.0], [-2.2, 39.8], [-1.7, 39.6], [-1.2, 39.4], [-0.7, 39.22],
  [-0.2, 39.04], [0.3, 38.88], [0.8, 38.72], [1.3, 38.54], [1.8, 38.4], [2.3, 38.24],
  [2.8, 38.1], [3.3, 37.96], [3.8, 37.82],
]
export const CENTER_LINE: LonLat[] = [
  [-9.2, 45.06], [-8.7, 44.74], [-8.2, 44.42], [-7.7, 44.1], [-7.2, 43.8], [-6.7, 43.52],
  [-6.2, 43.24], [-5.7, 42.96], [-5.2, 42.7], [-4.7, 42.44], [-4.2, 42.18], [-3.7, 41.94],
  [-3.2, 41.7], [-2.7, 41.48], [-2.2, 41.26], [-1.7, 41.04], [-1.2, 40.82], [-0.7, 40.62],
  [-0.2, 40.44], [0.3, 40.24], [0.8, 40.06], [1.3, 39.88], [1.8, 39.7], [2.3, 39.54],
  [2.8, 39.38], [3.3, 39.22], [3.8, 39.06],
]

export const bandPath = `${toPath(BAND_NORTH)} ${BAND_SOUTH.slice()
  .reverse()
  .map(([lon, lat]) => `L${px(lon).toFixed(1)},${py(lat).toFixed(1)}`)
  .join(" ")} Z`

export const centerLinePath = toPath(CENTER_LINE)

// Projected centre-line points; x increases monotonically west → east.
const CL_POINTS = CENTER_LINE.map(([lon, lat]) => ({ x: px(lon), y: py(lat) }))
export const CL_X0 = CL_POINTS[0].x
export const CL_X1 = CL_POINTS[CL_POINTS.length - 1].x

export function umbraPointAt(fraction: number) {
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

// Local time (CEST) of the shadow centre across the map: umbra reaches the
// Atlantic edge ~20:26:30 and leaves past Menorca ~20:33:00.
const SWEEP_START_MIN = 1226.5
const SWEEP_END_MIN = 1233.0

export function sweepTimeLabel(fraction: number) {
  const totalSeconds = Math.round((SWEEP_START_MIN + (SWEEP_END_MIN - SWEEP_START_MIN) * fraction) * 60)
  const h = Math.floor(totalSeconds / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60
  return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
}

export const MADRID: LonLat = [-3.7, 40.42]

export const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))
