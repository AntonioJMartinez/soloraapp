import { Locale } from "@/lib/i18n"

export const eclipse2026Slug = "total-solar-eclipse-august-2026"

/* Totality crosses northern Spain around 20:27-20:32 local time (CEST) */
export const ECLIPSE_UTC = Date.UTC(2026, 7, 12, 18, 29, 0)

export const ignMunicipalityUrl = "https://eclipses.ign.es/eclipse-total-sol-de-12-de-agosto-2026.html"

export type EclipseCityKind = "data" | "path" | "edge" | "partial"

export type EclipseCity = {
  id: string
  name: string
  lat: number
  lon: number
  kind: EclipseCityKind
  totality?: string
  sunAltitude?: string
  maxTime?: string
}

/*
 * Duration and Sun-altitude figures are municipality examples from the official
 * IGN table (see lib/blog-posts.ts research); times marked with ≈ are
 * approximations within the official 20:27-20:33 window.
 */
export const eclipseCities: EclipseCity[] = [
  { id: "coruna", name: "A Coruña", lat: 43.37, lon: -8.4, kind: "data", totality: "1m 16s", sunAltitude: "12°", maxTime: "20:28" },
  { id: "leon", name: "León", lat: 42.6, lon: -5.57, kind: "data", totality: "1m 45s", sunAltitude: "10°", maxTime: "≈20:29" },
  { id: "palencia", name: "Palencia", lat: 42.01, lon: -4.53, kind: "data", totality: "1m 42s", sunAltitude: "9°", maxTime: "≈20:29" },
  { id: "burgos", name: "Burgos", lat: 42.34, lon: -3.7, kind: "data", totality: "1m 44s", sunAltitude: "8°", maxTime: "20:29" },
  { id: "aranda", name: "Aranda de Duero", lat: 41.67, lon: -3.69, kind: "data", totality: "1m 43s", sunAltitude: "8°", maxTime: "≈20:29" },
  { id: "soria", name: "Soria", lat: 41.77, lon: -2.46, kind: "data", totality: "1m 41s", sunAltitude: "7°", maxTime: "≈20:30" },
  { id: "zaragoza", name: "Zaragoza", lat: 41.65, lon: -0.88, kind: "data", totality: "1m 23s", sunAltitude: "6°", maxTime: "≈20:30" },
  { id: "calamocha", name: "Calamocha", lat: 40.92, lon: -1.3, kind: "data", totality: "1m 41s", sunAltitude: "6°", maxTime: "≈20:30" },
  { id: "palma", name: "Palma", lat: 39.57, lon: 2.65, kind: "data", totality: "1m 36s", sunAltitude: "2°", maxTime: "20:32" },
  { id: "oviedo", name: "Oviedo", lat: 43.36, lon: -5.85, kind: "path" },
  { id: "bilbao", name: "Bilbao", lat: 43.26, lon: -2.93, kind: "path" },
  { id: "valencia", name: "València", lat: 39.47, lon: -0.38, kind: "edge" },
  { id: "madrid", name: "Madrid", lat: 40.42, lon: -3.7, kind: "partial" },
  { id: "barcelona", name: "Barcelona", lat: 41.38, lon: 2.17, kind: "partial" },
  { id: "sevilla", name: "Sevilla", lat: 37.39, lon: -5.98, kind: "partial" },
]

/*
 * Simplified geometry for the illustrative map, as [lat, lon] pairs.
 * The totality band is approximate — the UI must always point to the IGN
 * municipality table for exact limits and contact times.
 */
export const spainOutline: Array<[number, number]> = [
  [43.79, -7.68], [43.66, -8.06], [43.37, -8.4], [43.19, -9.02], [42.91, -9.27], [42.55, -9.08], [42.23, -8.86], [41.87, -8.87],
  [41.94, -8.16], [41.8, -6.62], [41.03, -6.93], [40.26, -6.95], [39.66, -7.04], [39.4, -7.31], [38.9, -7.26], [38.42, -7.3], [37.55, -7.46], [37.17, -7.4],
  [36.96, -6.38], [36.53, -6.3], [36.01, -5.61], [36.11, -5.34], [36.51, -4.89], [36.71, -4.42], [36.75, -3.52], [36.83, -2.46], [36.72, -2.19], [37.24, -1.77],
  [37.58, -0.98], [37.63, -0.71], [38.34, -0.48], [38.73, 0.15], [39.47, -0.33], [39.98, 0.02], [40.36, 0.4], [40.72, 0.87], [41.11, 1.25], [41.38, 2.18],
  [41.68, 2.8], [42.29, 3.28], [42.44, 3.17],
  [42.35, 2.02], [42.6, 1.44], [42.79, 0.66], [42.75, -0.31], [42.92, -1.28], [43.34, -1.79],
  [43.32, -1.99], [43.38, -3.02], [43.47, -3.81], [43.42, -4.75], [43.56, -5.68], [43.66, -5.85], [43.55, -6.53], [43.56, -7.04], [43.68, -7.6],
]

export const mallorcaOutline: Array<[number, number]> = [
  [39.58, 2.33], [39.88, 2.98], [39.93, 3.21], [39.71, 3.46], [39.3, 3.19], [39.27, 2.99], [39.45, 2.7], [39.53, 2.45],
]

export const menorcaOutline: Array<[number, number]> = [
  [39.98, 3.82], [40.07, 4.1], [39.99, 4.3], [39.88, 4.15], [39.93, 3.95],
]

export const ibizaOutline: Array<[number, number]> = [
  [38.92, 1.21], [39.1, 1.5], [38.97, 1.62], [38.86, 1.4],
]

export const totalityCenterline: Array<[number, number]> = [
  [44.3, -9.9], [43.6, -7.3], [42.9, -5.8], [42.3, -4.2], [41.9, -3.0], [41.4, -1.6], [40.9, -0.3], [40.3, 1.4], [39.8, 2.9], [39.5, 4.6],
]

export const totalityNorthLimit: Array<[number, number]> = [
  [45.6, -9.9], [44.9, -7.3], [44.2, -5.8], [43.7, -4.2], [43.4, -2.9], [42.75, -1.5], [42.15, -0.3], [41.55, 1.4], [41.0, 2.9], [40.7, 4.6],
]

export const totalitySouthLimit: Array<[number, number]> = [
  [41.6, -9.9], [41.3, -7.3], [41.2, -5.8], [40.9, -4.2], [40.55, -3.0], [40.05, -1.6], [39.6, -0.3], [38.85, 1.4], [38.4, 2.9], [38.15, 4.6],
]

type CityCopy = { why: string; risk: string }

type EclipseLandingStrings = {
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    cta: string
    ctaNote: string
    secondaryCta: string
  }
  countdown: { days: string; hours: string; minutes: string; seconds: string }
  facts: Array<{ value: string; label: string }>
  map: {
    eyebrow: string
    heading: string
    intro: string
    legendBand: string
    legendCenterline: string
    legendCity: string
    legendPartial: string
    disclaimer: string
    disclaimerLink: string
    panel: {
      totality: string
      sunAltitude: string
      maxEclipse: string
      why: string
      risk: string
      pathNoData: string
      edgeNote: string
      partialNote: string
      appHook: string
    }
    locate: {
      button: string
      locating: string
      privacy: string
      inside: string
      insideBody: string
      edge: string
      edgeBody: string
      outside: string
      outsideBody: string
      north: string
      south: string
      outOfArea: string
      outOfAreaBody: string
      nearest: string
      denied: string
      unavailable: string
      unsupported: string
      you: string
    }
  }
  cities: Record<string, CityCopy>
  critical: {
    eyebrow: string
    heading: string
    items: Array<{ title: string; body: string }>
  }
  timeline: {
    heading: string
    events: Array<{ time: string; label: string }>
    note: string
  }
  zones: {
    eyebrow: string
    heading: string
    intro: string
    items: Array<{ rank: string; title: string; body: string }>
  }
  safety: {
    eyebrow: string
    heading: string
    lead: string
    rules: string[]
    warning: string
  }
  app: {
    eyebrow: string
    heading: string
    body: string
    bullets: string[]
    cta: string
    ctaNote: string
  }
  guide: { heading: string; intro: string }
  quote: { line1: string; line2: string }
  visibility: {
    eyebrow: string
    heading: string
    body: string
    points: string[]
    travel: string
  }
  faqHeading: string
  sourcesHeading: string
  guidesHeading: string
  guides: Array<{ href: string; label: string }>
  finalCta: { heading: string; body: string; cta: string }
}

const en: EclipseLandingStrings = {
  hero: {
    eyebrow: "12 · 08 · 2026 — Northern Spain & the Balearics",
    title: "Darkness, at sunset.",
    subtitle:
      "The first total solar eclipse over mainland Spain since 1905 crosses the country near sunset. This guide shows you the path, the times, and exactly how to be standing in the right place.",
    cta: "Plan it with Solora — free",
    ctaNote: "iPhone · iPad · Apple Watch · Mac",
    secondaryCta: "See the path of totality",
  },
  countdown: { days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" },
  facts: [
    { value: "20:27", label: "totality begins in Galicia — the shadow exits over the Balearics around 20:33" },
    { value: "1m 45s", label: "of darkness on the northern plains, the longest totality in Spain" },
    { value: "2°–12°", label: "Sun altitude during totality — a clear western horizon decides everything" },
  ],
  map: {
    eyebrow: "The path",
    heading: "Where the shadow will pass",
    intro:
      "The Moon's shadow enters over Galicia, sweeps across the northern half of the peninsula and leaves past Mallorca — all in about six minutes. Tap a city to compare totality duration, Sun altitude and the local trade-offs.",
    legendBand: "Path of totality (approximate)",
    legendCenterline: "Centerline — longest darkness",
    legendCity: "City inside the path",
    legendPartial: "Partial eclipse only",
    disclaimer:
      "Illustrative band based on official IGN examples. Exact limits and contact times change by municipality — always confirm your spot in the official IGN table.",
    disclaimerLink: "IGN municipality table",
    panel: {
      totality: "Totality",
      sunAltitude: "Sun altitude",
      maxEclipse: "Max eclipse",
      why: "Why here",
      risk: "Main risk",
      pathNoData: "Inside the path of totality. Check the IGN table for exact local times.",
      edgeNote: "On the very edge of the path — some northern areas may graze totality. Verify your exact spot with the IGN before committing.",
      partialNote: "Outside the path: a deep partial eclipse only. To experience darkness you must travel into the band.",
      appHook: "Compare weather and horizons for spots like this in Solora.",
    },
    locate: {
      button: "Check my location",
      locating: "Locating…",
      privacy: "Your location never leaves your device.",
      inside: "You're inside the path of totality",
      insideBody: "Based on the approximate band — confirm your municipality in the official IGN table.",
      edge: "You're right on the edge of the band",
      edgeBody: "A few kilometres decide everything here. Verify your exact spot in the official IGN table before eclipse day.",
      outside: "You're outside the path — deep partial only",
      outsideBody: "The band of totality is roughly {km} km to the {direction}. To experience darkness, plan a trip into the band.",
      north: "north",
      south: "south",
      outOfArea: "You're outside the map area",
      outOfAreaBody: "This checker covers Spain and the Balearics. On August 12, 2026 the path of totality crosses northern Spain.",
      nearest: "Nearest reference city",
      denied: "Location access was denied. Enable it in your browser settings, or compare the cities manually.",
      unavailable: "We couldn't determine your location. Please try again.",
      unsupported: "Your browser doesn't support geolocation. Compare the cities manually.",
      you: "You",
    },
  },
  cities: {
    coruna: {
      why: "The highest Sun of the main options (≈12°), with more margin over the horizon before sunset.",
      risk: "Atlantic low cloud, fog and coastal layers — keep an inland alternative ready.",
    },
    leon: {
      why: "The longest totality in Spain with one of the highest inland Sun positions.",
      risk: "The western mountain horizon must be checked from your exact site.",
    },
    palencia: {
      why: "Best overall balance: open Tierra de Campos plains and favorable inland climatology.",
      risk: "Crowding — final viewing-site logistics are still being confirmed.",
    },
    burgos: {
      why: "Essentially on the centerline, inside the region official sources rank best in Spain.",
      risk: "The Sun sits at ≈8°: any low ridge, building or tree line can steal totality.",
    },
    aranda: {
      why: "Center-line corridor, accessible, inside the favorable northern Meseta.",
      risk: "Local terrain, traffic and limited famous viewpoints.",
    },
    soria: {
      why: "Center-line geometry with official serviced observation areas already announced.",
      risk: "Lower Sun and convective cloud near the mountain systems.",
    },
    zaragoza: {
      why: "Among the lowest average August cloud in the path, with strong transport capacity.",
      risk: "Shorter totality, urban crowding, heat and haze.",
    },
    calamocha: {
      why: "Favorable Aragón climatology and official observation sites.",
      risk: "Very low Sun (≈6°), heat, haze and terrain.",
    },
    palma: {
      why: "A potentially dramatic sea-horizon composition with ≈1m 36s of totality.",
      risk: "The Sun is at just ≈2°: haze, ships or the smallest horizon obstruction is decisive.",
    },
  },
  critical: {
    eyebrow: "Critical information",
    heading: "Four things that decide your eclipse",
    items: [
      {
        title: "Be inside the band — not near it",
        body: "A 99% partial eclipse is nothing like totality. Madrid and Barcelona stay outside; even a few kilometres decide whether day becomes night for you.",
      },
      {
        title: "The west horizon is everything",
        body: "Totality happens with the Sun only 2°–12° high. A hill, a building, a tree line or sea haze can hide the entire show even under a clear sky. Scout your spot in advance at the same hour.",
      },
      {
        title: "Certified eye protection, always",
        body: "ISO 12312-2 eclipse glasses for every partial phase, and a certified solar filter on the front of any lens. Remove them only while the bright surface is completely covered — inside the path only.",
      },
      {
        title: "Plan for crowds and heat",
        body: "Mid-August, one road to many viewpoints, saturated mobile networks. Arrive hours early, park legally, carry water and offline navigation, and keep a backup site.",
      },
    ],
  },
  timeline: {
    heading: "The evening, minute by minute",
    events: [
      { time: "19:31", label: "First contact — the Moon starts biting the Sun (A Coruña)" },
      { time: "20:27", label: "Totality begins in Galicia" },
      { time: "20:29", label: "Darkness over Burgos and the northern plains" },
      { time: "20:32", label: "Totality ends over Palma" },
      { time: "≈21:22", label: "Last partial phases fade as the Sun sets" },
    ],
    note: "Local times, mainland Spain & Balearics. Contact times shift by municipality — confirm yours on the IGN table.",
  },
  zones: {
    eyebrow: "Recommendations",
    heading: "Where to go, ranked",
    intro:
      "Research conclusion from official IGN geometry and August cloud climatology: aim for the northern Meseta, then adapt to the forecast in the final days.",
    items: [
      {
        rank: "01",
        title: "Palencia & Tierra de Campos — best overall",
        body: "Flat horizons, ≈1m 42s of totality, Sun near 9° and favorable inland climatology.",
      },
      {
        rank: "02",
        title: "Aranda de Duero – Soria corridor — best centerline",
        body: "≈1m 41–43s of totality with growing official eclipse infrastructure and serviced sites.",
      },
      {
        rank: "03",
        title: "Aragón (Calamocha, Monreal) — lowest cloud odds",
        body: "Official observation sites and favorable climatology, but the Sun sits at only ≈6°.",
      },
      {
        rank: "04",
        title: "A Coruña & northern Galicia — highest Sun",
        body: "≈11–12° of Sun altitude buys horizon margin, at the price of real Atlantic cloud risk.",
      },
      {
        rank: "05",
        title: "Western Mallorca — the specialist shot",
        body: "≈1m 36s over a sea horizon, but at 2° altitude every detail of the horizon matters.",
      },
    ],
  },
  safety: {
    eyebrow: "Safety",
    heading: "Look up — without losing your eyes",
    lead: "Except during the brief total phase, never look at the Sun without specialized protection. This is the one rule with no exceptions.",
    rules: [
      "Use eclipse glasses certified to ISO 12312-2 for every partial phase — ordinary sunglasses never qualify.",
      "Put a certified solar filter on the FRONT of any camera lens, telescope or binoculars. Never look through unfiltered optics.",
      "Inside the path only: remove protection when the bright surface is completely covered, and replace it the instant it reappears.",
      "Inspect filters before use; discard anything scratched or damaged. Supervise children at all times.",
    ],
    warning: "Outside the path of totality there is no safe moment to look at the Sun unprotected — the entire event requires filters.",
  },
  app: {
    eyebrow: "Your eclipse HQ",
    heading: "Solora turns this plan into alerts, maps and forecasts",
    body: "The eclipse is one evening. Getting it right is weeks of small decisions — which region, which field, which backup. Solora keeps them all in one place.",
    bullets: [
      "Track the eclipse alongside every 2026 sky event, with reminders before the moments that matter",
      "Preview the Sun's exact direction and altitude from any candidate spot — before you drive there",
      "Compare cloud cover, visibility and haze across your saved locations as August 12 approaches",
      "Golden hour, moon phases, Milky Way and aurora planning for every night after the eclipse",
    ],
    cta: "Download Solora — free",
    ctaNote: "Free on the App Store · No account needed",
  },
  guide: {
    heading: "The full research guide",
    intro: "Everything below comes from the complete guide: official geometry, climatology, logistics and photography planning.",
  },
  quote: { line1: "“You don't watch totality.", line2: "You stand inside it.”" },
  visibility: {
    eyebrow: "Beyond Spain",
    heading: "Where else can you see it?",
    body: "Spain is the headline act, but the Moon's shadow travels a long road on August 12, 2026 — and most of Europe gets at least a deep partial eclipse near sunset.",
    points: [
      "Totality also crosses Greenland and western Iceland — including Reykjavík, with up to ≈2 minutes of darkness and a higher Sun",
      "Most of Europe sees a deep partial eclipse: roughly 90% coverage in France and Portugal, 55–75% in Germany, 40–70% in Italy",
      "The extreme northeast of Portugal touches the edge of the band near Bragança",
      "Eastern North America catches a partial eclipse right at sunset",
    ],
    travel: "Wherever you start from, the band across northern Spain is the most accessible totality — that's what this page is for.",
  },
  faqHeading: "Frequently asked questions",
  sourcesHeading: "Official sources",
  guidesHeading: "City-by-city planning guides",
  guides: [
    { href: "/eclipse-solar-2026-a-coruna", label: "A Coruña — times, horizon and plan" },
    { href: "/eclipse-solar-2026-burgos", label: "Burgos — 104 seconds on the centerline" },
    { href: "/eclipse-solar-2026-palma", label: "Palma — totality over the sea at 2°" },
    { href: "/fotografiar-eclipse-solar-2026-seguridad", label: "Photographing the eclipse safely" },
  ],
  finalCta: {
    heading: "Be in the path.",
    body: "One minute and forty-four seconds. No second chances until 2053 — plan it like it matters.",
    cta: "Get Solora — free",
  },
}

const es: EclipseLandingStrings = {
  hero: {
    eyebrow: "12 · 08 · 2026 — Norte de España y Baleares",
    title: "Oscuridad, al atardecer.",
    subtitle:
      "El primer eclipse solar total sobre la España peninsular desde 1905 cruzará el país cerca del atardecer. Esta guía te enseña la franja, los horarios y cómo estar exactamente en el lugar correcto.",
    cta: "Planifícalo con Solora — gratis",
    ctaNote: "iPhone · iPad · Apple Watch · Mac",
    secondaryCta: "Ver la franja de totalidad",
  },
  countdown: { days: "Días", hours: "Horas", minutes: "Minutos", seconds: "Segundos" },
  facts: [
    { value: "20:27", label: "empieza la totalidad en Galicia — la sombra sale por Baleares hacia las 20:33" },
    { value: "1m 45s", label: "de oscuridad en las llanuras del norte, la totalidad más larga de España" },
    { value: "2°–12°", label: "altura del Sol durante la totalidad — un horizonte oeste limpio lo decide todo" },
  ],
  map: {
    eyebrow: "La franja",
    heading: "Por dónde pasará la sombra",
    intro:
      "La sombra de la Luna entra por Galicia, recorre la mitad norte peninsular y sale pasada Mallorca — todo en unos seis minutos. Toca una ciudad para comparar duración de la totalidad, altura del Sol y sus pros y contras.",
    legendBand: "Franja de totalidad (aproximada)",
    legendCenterline: "Línea central — máxima oscuridad",
    legendCity: "Ciudad dentro de la franja",
    legendPartial: "Solo eclipse parcial",
    disclaimer:
      "Franja ilustrativa basada en ejemplos oficiales del IGN. Los límites y contactos exactos cambian por municipio — confirma siempre tu punto en la tabla oficial del IGN.",
    disclaimerLink: "Tabla municipal del IGN",
    panel: {
      totality: "Totalidad",
      sunAltitude: "Altura del Sol",
      maxEclipse: "Máximo",
      why: "Por qué aquí",
      risk: "Riesgo principal",
      pathNoData: "Dentro de la franja de totalidad. Consulta la tabla del IGN para los horarios exactos.",
      edgeNote: "En el borde mismo de la franja — algunas zonas del norte podrían rozar la totalidad. Verifica tu punto exacto con el IGN antes de decidir.",
      partialNote: "Fuera de la franja: solo eclipse parcial profundo. Para vivir la oscuridad tienes que desplazarte dentro de la banda.",
      appHook: "Compara meteorología y horizontes de puntos como este en Solora.",
    },
    locate: {
      button: "Comprobar mi ubicación",
      locating: "Localizando…",
      privacy: "Tu ubicación no sale de tu dispositivo.",
      inside: "Estás dentro de la franja de totalidad",
      insideBody: "Según la franja aproximada — confirma tu municipio en la tabla oficial del IGN.",
      edge: "Estás justo en el borde de la franja",
      edgeBody: "Aquí unos pocos kilómetros lo deciden todo. Verifica tu punto exacto en la tabla oficial del IGN antes del eclipse.",
      outside: "Estás fuera de la franja — solo verás un eclipse parcial",
      outsideBody: "La franja de totalidad queda a unos {km} km al {direction}. Para vivir la oscuridad, planifica desplazarte dentro de la franja.",
      north: "norte",
      south: "sur",
      outOfArea: "Tu ubicación queda fuera del área del mapa",
      outOfAreaBody: "Este comprobador cubre España y Baleares. El 12 de agosto de 2026 la franja de totalidad cruza el norte de España.",
      nearest: "Ciudad de referencia más cercana",
      denied: "Se denegó el acceso a la ubicación. Actívalo en tu navegador o compara las ciudades manualmente.",
      unavailable: "No pudimos determinar tu ubicación. Inténtalo de nuevo.",
      unsupported: "Tu navegador no admite geolocalización. Compara las ciudades manualmente.",
      you: "Tú",
    },
  },
  cities: {
    coruna: {
      why: "El Sol más alto de las opciones principales (≈12°), con más margen sobre el horizonte antes del ocaso.",
      risk: "Nube baja atlántica, niebla y capas costeras — ten preparada una alternativa interior.",
    },
    leon: {
      why: "La totalidad más larga de España con una de las mayores alturas solares del interior.",
      risk: "Hay que comprobar el perfil montañoso hacia el oeste desde tu punto exacto.",
    },
    palencia: {
      why: "El mejor equilibrio general: llanuras abiertas de Tierra de Campos y climatología interior favorable.",
      risk: "Aglomeraciones — la logística de los puntos definitivos sigue en desarrollo.",
    },
    burgos: {
      why: "Prácticamente en la línea central, dentro de la región mejor valorada oficialmente en España.",
      risk: "El Sol estará a ≈8°: cualquier loma, edificio o arbolado puede robarte la totalidad.",
    },
    aranda: {
      why: "Corredor de línea central, accesible y dentro del norte favorable de la Meseta.",
      risk: "Relieve local, tráfico y miradores con capacidad limitada.",
    },
    soria: {
      why: "Geometría central con zonas oficiales de observación con servicios ya anunciadas.",
      risk: "Sol más bajo y nubes convectivas cerca de los sistemas montañosos.",
    },
    zaragoza: {
      why: "De las menores nubosidades medias de agosto dentro de la franja, con gran capacidad de transporte.",
      risk: "Totalidad más corta, aglomeración urbana, calor y calima.",
    },
    calamocha: {
      why: "Climatología favorable de Aragón y puntos de observación oficiales.",
      risk: "Sol muy bajo (≈6°), calor, calima y relieve.",
    },
    palma: {
      why: "Una composición potencialmente espectacular sobre el mar con ≈1m 36s de totalidad.",
      risk: "El Sol estará a solo ≈2°: la calima, un barco o el mínimo obstáculo del horizonte es decisivo.",
    },
  },
  critical: {
    eyebrow: "Información crítica",
    heading: "Cuatro cosas que deciden tu eclipse",
    items: [
      {
        title: "Estar dentro de la franja — no cerca",
        body: "Un eclipse parcial del 99% no se parece en nada a la totalidad. Madrid y Barcelona quedan fuera; unos pocos kilómetros deciden si el día se convierte en noche para ti.",
      },
      {
        title: "El horizonte oeste lo es todo",
        body: "La totalidad ocurre con el Sol a solo 2°–12° de altura. Una colina, un edificio, una línea de árboles o la bruma marina pueden ocultar todo el espectáculo incluso con cielo despejado. Explora tu punto con antelación a la misma hora.",
      },
      {
        title: "Protección ocular certificada, siempre",
        body: "Gafas de eclipse ISO 12312-2 durante todas las fases parciales, y filtro solar certificado delante de cualquier objetivo. Retíralos solo mientras la superficie brillante esté completamente cubierta — y solo dentro de la franja.",
      },
      {
        title: "Cuenta con multitudes y calor",
        body: "Mediados de agosto, una carretera hacia muchos miradores, redes móviles saturadas. Llega con horas de margen, aparca legalmente, lleva agua y navegación sin conexión, y guarda un punto alternativo.",
      },
    ],
  },
  timeline: {
    heading: "La tarde, minuto a minuto",
    events: [
      { time: "19:31", label: "Primer contacto — la Luna empieza a morder el Sol (A Coruña)" },
      { time: "20:27", label: "Comienza la totalidad en Galicia" },
      { time: "20:29", label: "Oscuridad sobre Burgos y las llanuras del norte" },
      { time: "20:32", label: "Termina la totalidad sobre Palma" },
      { time: "≈21:22", label: "Las últimas fases parciales se apagan con la puesta de Sol" },
    ],
    note: "Hora oficial peninsular y de Baleares. Los contactos cambian por municipio — confirma el tuyo en la tabla del IGN.",
  },
  zones: {
    eyebrow: "Recomendaciones",
    heading: "Dónde ir, por orden",
    intro:
      "Conclusión de la investigación con geometría oficial del IGN y climatología de nubosidad de agosto: apunta al norte de la Meseta y ajusta con la previsión en los últimos días.",
    items: [
      {
        rank: "01",
        title: "Palencia y Tierra de Campos — mejor equilibrio",
        body: "Horizontes llanos, ≈1m 42s de totalidad, Sol cerca de 9° y climatología interior favorable.",
      },
      {
        rank: "02",
        title: "Corredor Aranda de Duero – Soria — mejor centralidad",
        body: "≈1m 41–43s de totalidad con infraestructura oficial creciente y zonas con servicios.",
      },
      {
        rank: "03",
        title: "Aragón (Calamocha, Monreal) — menos nubes de media",
        body: "Puntos oficiales de observación y climatología favorable, pero con el Sol a solo ≈6°.",
      },
      {
        rank: "04",
        title: "A Coruña y norte de Galicia — el Sol más alto",
        body: "≈11–12° de altura solar dan margen de horizonte, a cambio de un riesgo atlántico real de nubes.",
      },
      {
        rank: "05",
        title: "Oeste de Mallorca — la foto especializada",
        body: "≈1m 36s sobre horizonte marino, pero a 2° de altura cada detalle del horizonte importa.",
      },
    ],
  },
  safety: {
    eyebrow: "Seguridad",
    heading: "Mira al cielo — sin perder la vista",
    lead: "Salvo durante la breve fase total, nunca mires al Sol sin protección especializada. Es la única regla sin excepciones.",
    rules: [
      "Usa gafas de eclipse certificadas ISO 12312-2 durante todas las fases parciales — unas gafas de sol normales nunca sirven.",
      "Coloca un filtro solar certificado DELANTE de cualquier objetivo, telescopio o prismáticos. Nunca mires por óptica sin filtrar.",
      "Solo dentro de la franja: retira la protección cuando la superficie brillante esté completamente cubierta y vuelve a ponerla en cuanto reaparezca.",
      "Inspecciona los filtros antes de usarlos; descarta cualquiera rayado o dañado. Supervisa a los menores en todo momento.",
    ],
    warning: "Fuera de la franja de totalidad no existe ningún momento seguro para mirar al Sol sin protección — todo el evento requiere filtros.",
  },
  app: {
    eyebrow: "Tu cuartel general del eclipse",
    heading: "Solora convierte este plan en alertas, mapas y previsiones",
    body: "El eclipse es una tarde. Acertar son semanas de pequeñas decisiones — qué región, qué campo, qué alternativa. Solora las reúne todas en un solo lugar.",
    bullets: [
      "Sigue el eclipse junto a todos los eventos astronómicos de 2026, con recordatorios antes de los momentos clave",
      "Previsualiza la dirección y altura exactas del Sol desde cualquier punto candidato — antes de conducir hasta allí",
      "Compara nubosidad, visibilidad y calima entre tus ubicaciones guardadas según se acerca el 12 de agosto",
      "Hora dorada, fases lunares, Vía Láctea y auroras para todas las noches después del eclipse",
    ],
    cta: "Descargar Solora — gratis",
    ctaNote: "Gratis en el App Store · Sin cuenta",
  },
  guide: {
    heading: "La guía completa de la investigación",
    intro: "Todo lo siguiente procede de la guía completa: geometría oficial, climatología, logística y planificación fotográfica.",
  },
  quote: { line1: "«La totalidad no se mira.", line2: "Se vive desde dentro.»" },
  visibility: {
    eyebrow: "Más allá de España",
    heading: "¿Dónde más se verá?",
    body: "España es el plato fuerte, pero la sombra de la Luna recorre un largo camino el 12 de agosto de 2026 — y casi toda Europa verá al menos un eclipse parcial profundo cerca del atardecer.",
    points: [
      "La totalidad también cruza Groenlandia y el oeste de Islandia — incluida Reikiavik, con hasta ≈2 minutos de oscuridad y el Sol más alto",
      "La mayor parte de Europa verá un parcial profundo: en torno al 90 % en Francia y Portugal, 55–75 % en Alemania, 40–70 % en Italia",
      "El extremo nororiental de Portugal toca el borde de la franja cerca de Braganza",
      "El este de Norteamérica verá un eclipse parcial justo al ponerse el Sol",
    ],
    travel: "Vengas de donde vengas, la franja del norte de España es la totalidad más accesible — para eso es esta página.",
  },
  faqHeading: "Preguntas frecuentes",
  sourcesHeading: "Fuentes oficiales",
  guidesHeading: "Guías de planificación ciudad a ciudad",
  guides: [
    { href: "/eclipse-solar-2026-a-coruna", label: "A Coruña — horarios, horizonte y plan" },
    { href: "/eclipse-solar-2026-burgos", label: "Burgos — 104 segundos en la línea central" },
    { href: "/eclipse-solar-2026-palma", label: "Palma — totalidad sobre el mar a 2°" },
    { href: "/fotografiar-eclipse-solar-2026-seguridad", label: "Fotografiar el eclipse con seguridad" },
  ],
  finalCta: {
    heading: "Ponte en la franja.",
    body: "Un minuto y cuarenta y cuatro segundos. Sin segunda oportunidad hasta 2053 — planifícalo como se merece.",
    cta: "Consigue Solora — gratis",
  },
}

const fr: EclipseLandingStrings = {
  hero: {
    eyebrow: "12 · 08 · 2026 — Nord de l'Espagne et Baléares",
    title: "L'obscurité, au coucher du soleil.",
    subtitle:
      "La première éclipse totale de Soleil sur l'Espagne continentale depuis 1905 traversera le pays près du coucher du soleil. Ce guide vous montre la bande de totalité, les horaires et comment être exactement au bon endroit.",
    cta: "Planifiez-la avec Solora — gratuit",
    ctaNote: "iPhone · iPad · Apple Watch · Mac",
    secondaryCta: "Voir la bande de totalité",
  },
  countdown: { days: "Jours", hours: "Heures", minutes: "Minutes", seconds: "Secondes" },
  facts: [
    { value: "20:27", label: "la totalité commence en Galice — l'ombre repart par les Baléares vers 20:33" },
    { value: "1m 45s", label: "d'obscurité sur les plaines du nord, la totalité la plus longue d'Espagne" },
    { value: "2°–12°", label: "hauteur du Soleil pendant la totalité — un horizon ouest dégagé décide de tout" },
  ],
  map: {
    eyebrow: "La bande",
    heading: "Où passera l'ombre",
    intro:
      "L'ombre de la Lune entre par la Galice, traverse la moitié nord de la péninsule et ressort après Majorque — le tout en six minutes environ. Touchez une ville pour comparer la durée de totalité, la hauteur du Soleil et les compromis locaux.",
    legendBand: "Bande de totalité (approximative)",
    legendCenterline: "Ligne centrale — obscurité maximale",
    legendCity: "Ville dans la bande",
    legendPartial: "Éclipse partielle seulement",
    disclaimer:
      "Bande illustrative basée sur les exemples officiels de l'IGN. Les limites et contacts exacts varient selon la commune — confirmez toujours votre lieu dans le tableau officiel de l'IGN.",
    disclaimerLink: "Tableau municipal de l'IGN",
    panel: {
      totality: "Totalité",
      sunAltitude: "Hauteur du Soleil",
      maxEclipse: "Maximum",
      why: "Pourquoi ici",
      risk: "Risque principal",
      pathNoData: "Dans la bande de totalité. Consultez le tableau de l'IGN pour les horaires locaux exacts.",
      edgeNote:
        "À la limite même de la bande — certaines zones au nord peuvent frôler la totalité. Vérifiez votre lieu exact auprès de l'IGN avant de décider.",
      partialNote: "Hors de la bande : éclipse partielle profonde seulement. Pour vivre l'obscurité, il faut se déplacer dans la bande.",
      appHook: "Comparez la météo et les horizons de lieux comme celui-ci dans Solora.",
    },
    locate: {
      button: "Vérifier ma position",
      locating: "Localisation…",
      privacy: "Votre position ne quitte jamais votre appareil.",
      inside: "Vous êtes dans la bande de totalité",
      insideBody: "Selon la bande approximative — confirmez votre commune dans le tableau officiel de l'IGN.",
      edge: "Vous êtes juste au bord de la bande",
      edgeBody: "Ici, quelques kilomètres décident de tout. Vérifiez votre lieu exact dans le tableau officiel de l'IGN avant le jour J.",
      outside: "Vous êtes hors de la bande — partielle profonde seulement",
      outsideBody: "La bande de totalité se trouve à environ {km} km au {direction}. Pour vivre l'obscurité, prévoyez un déplacement dans la bande.",
      north: "nord",
      south: "sud",
      outOfArea: "Votre position est hors de la zone de la carte",
      outOfAreaBody: "Ce vérificateur couvre l'Espagne et les Baléares. Le 12 août 2026, la bande de totalité traverse le nord de l'Espagne.",
      nearest: "Ville de référence la plus proche",
      denied: "L'accès à la position a été refusé. Activez-le dans votre navigateur ou comparez les villes manuellement.",
      unavailable: "Impossible de déterminer votre position. Réessayez.",
      unsupported: "Votre navigateur ne prend pas en charge la géolocalisation. Comparez les villes manuellement.",
      you: "Vous",
    },
  },
  cities: {
    coruna: {
      why: "Le Soleil le plus haut des options principales (≈12°), avec plus de marge au-dessus de l'horizon avant le coucher.",
      risk: "Nuages bas atlantiques, brouillard et couches côtières — gardez une alternative à l'intérieur des terres.",
    },
    leon: {
      why: "La totalité la plus longue d'Espagne avec l'une des plus grandes hauteurs de Soleil de l'intérieur.",
      risk: "Le relief montagneux vers l'ouest doit être vérifié depuis votre site exact.",
    },
    palencia: {
      why: "Le meilleur équilibre global : plaines ouvertes de Tierra de Campos et climatologie intérieure favorable.",
      risk: "Affluence — la logistique des sites définitifs est encore en cours de confirmation.",
    },
    burgos: {
      why: "Pratiquement sur la ligne centrale, dans la région la mieux classée officiellement en Espagne.",
      risk: "Le Soleil est à ≈8° : la moindre crête, un bâtiment ou une rangée d'arbres peut voler la totalité.",
    },
    aranda: {
      why: "Corridor de ligne centrale, accessible, dans le nord favorable de la Meseta.",
      risk: "Relief local, trafic et points de vue renommés limités.",
    },
    soria: {
      why: "Géométrie centrale avec des zones d'observation officielles avec services déjà annoncées.",
      risk: "Soleil plus bas et nuages convectifs près des systèmes montagneux.",
    },
    zaragoza: {
      why: "Parmi les nébulosités moyennes d'août les plus faibles de la bande, avec une grande capacité de transport.",
      risk: "Totalité plus courte, affluence urbaine, chaleur et brume.",
    },
    calamocha: {
      why: "Climatologie favorable de l'Aragon et sites d'observation officiels.",
      risk: "Soleil très bas (≈6°), chaleur, brume et relief.",
    },
    palma: {
      why: "Une composition potentiellement spectaculaire au-dessus de la mer avec ≈1m 36s de totalité.",
      risk: "Le Soleil n'est qu'à ≈2° : la brume, un navire ou le moindre obstacle à l'horizon est décisif.",
    },
  },
  critical: {
    eyebrow: "Informations essentielles",
    heading: "Quatre choses qui décident de votre éclipse",
    items: [
      {
        title: "Être dans la bande — pas à côté",
        body: "Une éclipse partielle à 99 % n'a rien à voir avec la totalité. Madrid et Barcelone restent en dehors ; quelques kilomètres décident si le jour devient nuit pour vous.",
      },
      {
        title: "L'horizon ouest fait tout",
        body: "La totalité se produit avec un Soleil à seulement 2°–12° de hauteur. Une colline, un bâtiment, une rangée d'arbres ou la brume de mer peut cacher tout le spectacle même sous un ciel dégagé. Repérez votre site à l'avance, à la même heure.",
      },
      {
        title: "Protection oculaire certifiée, toujours",
        body: "Lunettes d'éclipse ISO 12312-2 pour toutes les phases partielles, et filtre solaire certifié à l'avant de tout objectif. Ne les retirez que lorsque la surface brillante est complètement couverte — et uniquement dans la bande.",
      },
      {
        title: "Prévoyez foule et chaleur",
        body: "Mi-août, une route vers de nombreux points de vue, réseaux mobiles saturés. Arrivez des heures à l'avance, stationnez légalement, emportez de l'eau et une navigation hors ligne, et gardez un site de repli.",
      },
    ],
  },
  timeline: {
    heading: "La soirée, minute par minute",
    events: [
      { time: "19:31", label: "Premier contact — la Lune commence à mordre le Soleil (La Corogne)" },
      { time: "20:27", label: "La totalité commence en Galice" },
      { time: "20:29", label: "Obscurité sur Burgos et les plaines du nord" },
      { time: "20:32", label: "La totalité se termine au-dessus de Palma" },
      { time: "≈21:22", label: "Les dernières phases partielles s'éteignent au coucher du Soleil" },
    ],
    note: "Heure locale de l'Espagne continentale et des Baléares. Les contacts varient selon la commune — confirmez le vôtre dans le tableau de l'IGN.",
  },
  zones: {
    eyebrow: "Recommandations",
    heading: "Où aller, dans l'ordre",
    intro:
      "Conclusion de la recherche à partir de la géométrie officielle de l'IGN et de la climatologie nuageuse d'août : visez le nord de la Meseta, puis adaptez-vous aux prévisions des derniers jours.",
    items: [
      {
        rank: "01",
        title: "Palencia et Tierra de Campos — meilleur équilibre",
        body: "Horizons plats, ≈1m 42s de totalité, Soleil vers 9° et climatologie intérieure favorable.",
      },
      {
        rank: "02",
        title: "Corridor Aranda de Duero – Soria — meilleure centralité",
        body: "≈1m 41–43s de totalité avec une infrastructure officielle croissante et des zones avec services.",
      },
      {
        rank: "03",
        title: "Aragon (Calamocha, Monreal) — moins de nuages en moyenne",
        body: "Sites d'observation officiels et climatologie favorable, mais avec un Soleil à seulement ≈6°.",
      },
      {
        rank: "04",
        title: "La Corogne et le nord de la Galice — le Soleil le plus haut",
        body: "≈11–12° de hauteur solaire donnent de la marge d'horizon, contre un vrai risque atlantique de nuages.",
      },
      {
        rank: "05",
        title: "Ouest de Majorque — la photo de spécialiste",
        body: "≈1m 36s au-dessus d'un horizon marin, mais à 2° de hauteur chaque détail de l'horizon compte.",
      },
    ],
  },
  safety: {
    eyebrow: "Sécurité",
    heading: "Levez les yeux — sans perdre la vue",
    lead: "Sauf pendant la brève phase totale, ne regardez jamais le Soleil sans protection spécialisée. C'est la seule règle sans exception.",
    rules: [
      "Utilisez des lunettes d'éclipse certifiées ISO 12312-2 pour toutes les phases partielles — de simples lunettes de soleil ne suffisent jamais.",
      "Placez un filtre solaire certifié à l'AVANT de tout objectif, télescope ou jumelles. Ne regardez jamais à travers une optique non filtrée.",
      "Uniquement dans la bande : retirez la protection quand la surface brillante est complètement couverte, et remettez-la dès qu'elle réapparaît.",
      "Inspectez les filtres avant usage ; jetez tout filtre rayé ou endommagé. Surveillez les enfants en permanence.",
    ],
    warning: "Hors de la bande de totalité, il n'existe aucun moment sûr pour regarder le Soleil sans protection — tout l'événement exige des filtres.",
  },
  app: {
    eyebrow: "Votre QG de l'éclipse",
    heading: "Solora transforme ce plan en alertes, cartes et prévisions",
    body: "L'éclipse dure une soirée. La réussir, ce sont des semaines de petites décisions — quelle région, quel champ, quel plan B. Solora les réunit au même endroit.",
    bullets: [
      "Suivez l'éclipse avec tous les événements célestes de 2026, avec des rappels avant les moments clés",
      "Prévisualisez la direction et la hauteur exactes du Soleil depuis n'importe quel lieu candidat — avant de prendre la route",
      "Comparez nébulosité, visibilité et brume entre vos lieux enregistrés à l'approche du 12 août",
      "Heure dorée, phases de la Lune, Voie lactée et aurores pour toutes les nuits après l'éclipse",
    ],
    cta: "Télécharger Solora — gratuit",
    ctaNote: "Gratuit sur l'App Store · Sans compte",
  },
  guide: {
    heading: "Le guide complet de la recherche",
    intro: "Tout ce qui suit provient du guide complet : géométrie officielle, climatologie, logistique et préparation photo.",
  },
  quote: { line1: "« La totalité ne se regarde pas.", line2: "Elle se vit de l'intérieur. »" },
  visibility: {
    eyebrow: "Depuis la France",
    heading: "Et depuis la France ?",
    body: "Le 12 août 2026, la France verra une éclipse partielle profonde en toute fin de journée, avec un Soleil très bas à l'ouest — spectaculaire, mais sans la nuit en plein jour de la totalité.",
    points: [
      "Éclipse partielle d'environ 80–92 % selon les régions, autour de 20 h 10 – 20 h 35 (heure de Paris)",
      "Le sud-ouest est le plus favorisé ; un horizon ouest parfaitement dégagé est indispensable",
      "La totalité passe juste de l'autre côté des Pyrénées : le nord de l'Espagne est à quelques heures de route",
      "L'ouest de l'Islande (dont Reykjavík) vit aussi la totalité, jusqu'à ≈2 minutes",
    ],
    travel: "Le déplacement le plus simple : rejoindre la bande en Espagne — Bilbao, Burgos ou Saragosse.",
  },
  faqHeading: "Questions fréquentes",
  sourcesHeading: "Sources officielles",
  guidesHeading: "Guides de préparation ville par ville",
  guides: [
    { href: "/eclipse-solar-2026-a-coruna", label: "La Corogne — horaires, horizon et plan" },
    { href: "/eclipse-solar-2026-burgos", label: "Burgos — 104 secondes sur la ligne centrale" },
    { href: "/eclipse-solar-2026-palma", label: "Palma — totalité au-dessus de la mer à 2°" },
    { href: "/fotografiar-eclipse-solar-2026-seguridad", label: "Photographier l'éclipse en toute sécurité" },
  ],
  finalCta: {
    heading: "Soyez dans la bande.",
    body: "Une minute quarante-quatre secondes. Pas de seconde chance avant 2053 — préparez-la comme il se doit.",
    cta: "Obtenez Solora — gratuit",
  },
}

const it: EclipseLandingStrings = {
  hero: {
    eyebrow: "12 · 08 · 2026 — Nord della Spagna e Baleari",
    title: "L'oscurità, al tramonto.",
    subtitle:
      "La prima eclissi totale di Sole sulla Spagna continentale dal 1905 attraverserà il paese verso il tramonto. Questa guida ti mostra la fascia di totalità, gli orari e come trovarti esattamente nel punto giusto.",
    cta: "Pianificala con Solora — gratis",
    ctaNote: "iPhone · iPad · Apple Watch · Mac",
    secondaryCta: "Vedi la fascia di totalità",
  },
  countdown: { days: "Giorni", hours: "Ore", minutes: "Minuti", seconds: "Secondi" },
  facts: [
    { value: "20:27", label: "la totalità inizia in Galizia — l'ombra esce dalle Baleari verso le 20:33" },
    { value: "1m 45s", label: "di buio sulle pianure del nord, la totalità più lunga di Spagna" },
    { value: "2°–12°", label: "altezza del Sole durante la totalità — un orizzonte ovest libero decide tutto" },
  ],
  map: {
    eyebrow: "La fascia",
    heading: "Dove passerà l'ombra",
    intro:
      "L'ombra della Luna entra dalla Galizia, attraversa la metà nord della penisola ed esce oltre Maiorca — tutto in circa sei minuti. Tocca una città per confrontare durata della totalità, altezza del Sole e i pro e contro locali.",
    legendBand: "Fascia di totalità (approssimativa)",
    legendCenterline: "Linea centrale — buio massimo",
    legendCity: "Città dentro la fascia",
    legendPartial: "Solo eclissi parziale",
    disclaimer:
      "Fascia illustrativa basata sugli esempi ufficiali dell'IGN. Limiti e contatti esatti cambiano per comune — conferma sempre il tuo punto nella tabella ufficiale dell'IGN.",
    disclaimerLink: "Tabella comunale dell'IGN",
    panel: {
      totality: "Totalità",
      sunAltitude: "Altezza del Sole",
      maxEclipse: "Massimo",
      why: "Perché qui",
      risk: "Rischio principale",
      pathNoData: "Dentro la fascia di totalità. Consulta la tabella dell'IGN per gli orari locali esatti.",
      edgeNote:
        "Proprio sul bordo della fascia — alcune zone a nord potrebbero sfiorare la totalità. Verifica il tuo punto esatto con l'IGN prima di decidere.",
      partialNote: "Fuori dalla fascia: solo un'eclissi parziale profonda. Per vivere il buio devi spostarti dentro la fascia.",
      appHook: "Confronta meteo e orizzonti di punti come questo in Solora.",
    },
    locate: {
      button: "Controlla la mia posizione",
      locating: "Localizzazione…",
      privacy: "La tua posizione non lascia mai il tuo dispositivo.",
      inside: "Sei dentro la fascia di totalità",
      insideBody: "In base alla fascia approssimativa — conferma il tuo comune nella tabella ufficiale dell'IGN.",
      edge: "Sei proprio sul bordo della fascia",
      edgeBody: "Qui pochi chilometri decidono tutto. Verifica il tuo punto esatto nella tabella ufficiale dell'IGN prima del giorno dell'eclissi.",
      outside: "Sei fuori dalla fascia — solo parziale profonda",
      outsideBody: "La fascia di totalità è a circa {km} km a {direction}. Per vivere il buio, pianifica uno spostamento dentro la fascia.",
      north: "nord",
      south: "sud",
      outOfArea: "La tua posizione è fuori dall'area della mappa",
      outOfAreaBody: "Questo strumento copre Spagna e Baleari. Il 12 agosto 2026 la fascia di totalità attraversa il nord della Spagna.",
      nearest: "Città di riferimento più vicina",
      denied: "Accesso alla posizione negato. Attivalo nel browser o confronta le città manualmente.",
      unavailable: "Non siamo riusciti a determinare la tua posizione. Riprova.",
      unsupported: "Il tuo browser non supporta la geolocalizzazione. Confronta le città manualmente.",
      you: "Tu",
    },
  },
  cities: {
    coruna: {
      why: "Il Sole più alto tra le opzioni principali (≈12°), con più margine sopra l'orizzonte prima del tramonto.",
      risk: "Nubi basse atlantiche, nebbia e strati costieri — tieni pronta un'alternativa nell'interno.",
    },
    leon: {
      why: "La totalità più lunga di Spagna con una delle maggiori altezze del Sole dell'interno.",
      risk: "Il profilo montuoso verso ovest va verificato dal tuo punto esatto.",
    },
    palencia: {
      why: "Il miglior equilibrio complessivo: pianure aperte di Tierra de Campos e climatologia interna favorevole.",
      risk: "Affollamento — la logistica dei punti definitivi è ancora in via di conferma.",
    },
    burgos: {
      why: "Praticamente sulla linea centrale, nella regione meglio valutata ufficialmente in Spagna.",
      risk: "Il Sole è a ≈8°: qualsiasi crinale basso, edificio o filare di alberi può rubarti la totalità.",
    },
    aranda: {
      why: "Corridoio di linea centrale, accessibile, nel nord favorevole della Meseta.",
      risk: "Rilievo locale, traffico e punti panoramici noti limitati.",
    },
    soria: {
      why: "Geometria centrale con aree di osservazione ufficiali con servizi già annunciate.",
      risk: "Sole più basso e nubi convettive vicino ai sistemi montuosi.",
    },
    zaragoza: {
      why: "Tra le nuvolosità medie di agosto più basse della fascia, con grande capacità di trasporto.",
      risk: "Totalità più corta, affollamento urbano, caldo e foschia.",
    },
    calamocha: {
      why: "Climatologia favorevole dell'Aragona e punti di osservazione ufficiali.",
      risk: "Sole molto basso (≈6°), caldo, foschia e rilievo.",
    },
    palma: {
      why: "Una composizione potenzialmente spettacolare sul mare con ≈1m 36s di totalità.",
      risk: "Il Sole è a soli ≈2°: la foschia, una nave o il minimo ostacolo all'orizzonte è decisivo.",
    },
  },
  critical: {
    eyebrow: "Informazioni critiche",
    heading: "Quattro cose che decidono la tua eclissi",
    items: [
      {
        title: "Stare dentro la fascia — non vicino",
        body: "Un'eclissi parziale al 99 % non assomiglia per niente alla totalità. Madrid e Barcellona restano fuori; pochi chilometri decidono se il giorno diventa notte per te.",
      },
      {
        title: "L'orizzonte ovest è tutto",
        body: "La totalità avviene con il Sole a soli 2°–12° di altezza. Una collina, un edificio, una fila di alberi o la foschia marina possono nascondere l'intero spettacolo anche con cielo sereno. Sopralluogo in anticipo, alla stessa ora.",
      },
      {
        title: "Protezione oculare certificata, sempre",
        body: "Occhiali da eclissi ISO 12312-2 per tutte le fasi parziali, e filtro solare certificato davanti a qualsiasi obiettivo. Toglili solo quando la superficie brillante è completamente coperta — e solo dentro la fascia.",
      },
      {
        title: "Metti in conto folla e caldo",
        body: "Metà agosto, una strada verso molti punti panoramici, reti mobili sature. Arriva con ore di anticipo, parcheggia legalmente, porta acqua e navigazione offline, e tieni un punto di riserva.",
      },
    ],
  },
  timeline: {
    heading: "La sera, minuto per minuto",
    events: [
      { time: "19:31", label: "Primo contatto — la Luna inizia a mordere il Sole (A Coruña)" },
      { time: "20:27", label: "La totalità inizia in Galizia" },
      { time: "20:29", label: "Buio su Burgos e le pianure del nord" },
      { time: "20:32", label: "La totalità finisce sopra Palma" },
      { time: "≈21:22", label: "Le ultime fasi parziali si spengono al tramonto" },
    ],
    note: "Ora locale di Spagna continentale e Baleari. I contatti cambiano per comune — conferma il tuo nella tabella dell'IGN.",
  },
  zones: {
    eyebrow: "Raccomandazioni",
    heading: "Dove andare, in ordine",
    intro:
      "Conclusione della ricerca su geometria ufficiale dell'IGN e climatologia delle nubi di agosto: punta al nord della Meseta, poi adattati alle previsioni degli ultimi giorni.",
    items: [
      {
        rank: "01",
        title: "Palencia e Tierra de Campos — miglior equilibrio",
        body: "Orizzonti piatti, ≈1m 42s di totalità, Sole verso i 9° e climatologia interna favorevole.",
      },
      {
        rank: "02",
        title: "Corridoio Aranda de Duero – Soria — migliore centralità",
        body: "≈1m 41–43s di totalità con infrastrutture ufficiali in crescita e aree con servizi.",
      },
      {
        rank: "03",
        title: "Aragona (Calamocha, Monreal) — meno nubi in media",
        body: "Punti di osservazione ufficiali e climatologia favorevole, ma con il Sole a soli ≈6°.",
      },
      {
        rank: "04",
        title: "A Coruña e la Galizia del nord — il Sole più alto",
        body: "≈11–12° di altezza solare danno margine d'orizzonte, in cambio di un vero rischio atlantico di nubi.",
      },
      {
        rank: "05",
        title: "Ovest di Maiorca — lo scatto da specialisti",
        body: "≈1m 36s su un orizzonte marino, ma a 2° di altezza ogni dettaglio dell'orizzonte conta.",
      },
    ],
  },
  safety: {
    eyebrow: "Sicurezza",
    heading: "Guarda il cielo — senza perdere la vista",
    lead: "Tranne durante la breve fase totale, non guardare mai il Sole senza protezione specializzata. È l'unica regola senza eccezioni.",
    rules: [
      "Usa occhiali da eclissi certificati ISO 12312-2 per tutte le fasi parziali — i normali occhiali da sole non bastano mai.",
      "Monta un filtro solare certificato DAVANTI a qualsiasi obiettivo, telescopio o binocolo. Non guardare mai attraverso ottiche non filtrate.",
      "Solo dentro la fascia: togli la protezione quando la superficie brillante è completamente coperta, e rimettila appena riappare.",
      "Ispeziona i filtri prima dell'uso; scarta qualsiasi filtro graffiato o danneggiato. Sorveglia sempre i bambini.",
    ],
    warning: "Fuori dalla fascia di totalità non esiste alcun momento sicuro per guardare il Sole senza protezione — l'intero evento richiede filtri.",
  },
  app: {
    eyebrow: "Il tuo quartier generale dell'eclissi",
    heading: "Solora trasforma questo piano in avvisi, mappe e previsioni",
    body: "L'eclissi dura una sera. Riuscirci sono settimane di piccole decisioni — quale regione, quale campo, quale riserva. Solora le riunisce in un unico posto.",
    bullets: [
      "Segui l'eclissi insieme a tutti gli eventi celesti del 2026, con promemoria prima dei momenti chiave",
      "Anteprima di direzione e altezza esatte del Sole da qualsiasi punto candidato — prima di metterti in viaggio",
      "Confronta nuvolosità, visibilità e foschia tra i tuoi luoghi salvati man mano che si avvicina il 12 agosto",
      "Ora dorata, fasi lunari, Via Lattea e aurore per tutte le notti dopo l'eclissi",
    ],
    cta: "Scarica Solora — gratis",
    ctaNote: "Gratis sull'App Store · Senza account",
  },
  guide: {
    heading: "La guida completa della ricerca",
    intro: "Tutto ciò che segue proviene dalla guida completa: geometria ufficiale, climatologia, logistica e pianificazione fotografica.",
  },
  quote: { line1: "«La totalità non si guarda.", line2: "Si vive da dentro.»" },
  visibility: {
    eyebrow: "Dall'Italia",
    heading: "E dall'Italia?",
    body: "Il 12 agosto 2026 l'Italia vedrà un'eclissi parziale bassa sull'orizzonte, poco prima del tramonto — suggestiva, ma senza la notte improvvisa della totalità.",
    points: [
      "Eclissi parziale di circa il 40–70 % a seconda della regione, tra le 20:00 e le 20:30 circa",
      "Il nord-ovest è il più favorito; in molte zone il Sole tramonta durante l'eclissi",
      "Serve un orizzonte ovest completamente libero: il Sole sarà bassissimo",
      "La totalità attraversa il nord della Spagna e l'ovest dell'Islanda (fino a ≈2 minuti, Reykjavík inclusa)",
    ],
    travel: "Il viaggio più semplice: un volo per Bilbao, Saragozza o Palma, dentro la fascia.",
  },
  faqHeading: "Domande frequenti",
  sourcesHeading: "Fonti ufficiali",
  guidesHeading: "Guide di pianificazione città per città",
  guides: [
    { href: "/eclipse-solar-2026-a-coruna", label: "A Coruña — orari, orizzonte e piano" },
    { href: "/eclipse-solar-2026-burgos", label: "Burgos — 104 secondi sulla linea centrale" },
    { href: "/eclipse-solar-2026-palma", label: "Palma — totalità sul mare a 2°" },
    { href: "/fotografiar-eclipse-solar-2026-seguridad", label: "Fotografare l'eclissi in sicurezza" },
  ],
  finalCta: {
    heading: "Mettiti nella fascia.",
    body: "Un minuto e quarantaquattro secondi. Nessuna seconda occasione fino al 2053 — pianificala come merita.",
    cta: "Scarica Solora — gratis",
  },
}

const de: EclipseLandingStrings = {
  hero: {
    eyebrow: "12 · 08 · 2026 — Nordspanien und Balearen",
    title: "Dunkelheit, bei Sonnenuntergang.",
    subtitle:
      "Die erste totale Sonnenfinsternis über dem spanischen Festland seit 1905 zieht nahe dem Sonnenuntergang über das Land. Dieser Guide zeigt dir den Pfad, die Zeiten und wie du genau am richtigen Ort stehst.",
    cta: "Plane sie mit Solora — kostenlos",
    ctaNote: "iPhone · iPad · Apple Watch · Mac",
    secondaryCta: "Den Pfad der Totalität ansehen",
  },
  countdown: { days: "Tage", hours: "Stunden", minutes: "Minuten", seconds: "Sekunden" },
  facts: [
    { value: "20:27", label: "die Totalität beginnt in Galicien — der Schatten verlässt Spanien über die Balearen gegen 20:33" },
    { value: "1m 45s", label: "Dunkelheit über den nördlichen Ebenen, die längste Totalität Spaniens" },
    { value: "2°–12°", label: "Sonnenhöhe während der Totalität — ein freier Westhorizont entscheidet alles" },
  ],
  map: {
    eyebrow: "Der Pfad",
    heading: "Wo der Schatten entlangzieht",
    intro:
      "Der Schatten des Mondes kommt über Galicien herein, zieht über die Nordhälfte der Halbinsel und verlässt sie hinter Mallorca — alles in etwa sechs Minuten. Tippe auf eine Stadt, um Totalitätsdauer, Sonnenhöhe und die lokalen Abwägungen zu vergleichen.",
    legendBand: "Pfad der Totalität (ungefähr)",
    legendCenterline: "Zentrallinie — längste Dunkelheit",
    legendCity: "Stadt im Pfad",
    legendPartial: "Nur partielle Finsternis",
    disclaimer:
      "Illustrativer Verlauf auf Basis offizieller IGN-Beispiele. Exakte Grenzen und Kontaktzeiten ändern sich je Gemeinde — bestätige deinen Ort immer in der offiziellen IGN-Tabelle.",
    disclaimerLink: "IGN-Gemeindetabelle",
    panel: {
      totality: "Totalität",
      sunAltitude: "Sonnenhöhe",
      maxEclipse: "Maximum",
      why: "Warum hier",
      risk: "Hauptrisiko",
      pathNoData: "Innerhalb des Pfads der Totalität. Exakte Ortszeiten in der IGN-Tabelle prüfen.",
      edgeNote:
        "Direkt am Rand des Pfads — einige Gebiete im Norden könnten die Totalität streifen. Prüfe deinen exakten Ort beim IGN, bevor du dich festlegst.",
      partialNote: "Außerhalb des Pfads: nur eine tiefe partielle Finsternis. Um die Dunkelheit zu erleben, musst du in den Pfad reisen.",
      appHook: "Vergleiche Wetter und Horizonte für Orte wie diesen in Solora.",
    },
    locate: {
      button: "Meinen Standort prüfen",
      locating: "Wird geortet…",
      privacy: "Dein Standort verlässt nie dein Gerät.",
      inside: "Du bist im Pfad der Totalität",
      insideBody: "Basierend auf dem ungefähren Verlauf — bestätige deine Gemeinde in der offiziellen IGN-Tabelle.",
      edge: "Du bist direkt am Rand des Pfads",
      edgeBody: "Hier entscheiden wenige Kilometer über alles. Prüfe deinen exakten Ort vor dem Finsternistag in der offiziellen IGN-Tabelle.",
      outside: "Du bist außerhalb des Pfads — nur partiell",
      outsideBody: "Der Pfad der Totalität liegt etwa {km} km im {direction}. Um die Dunkelheit zu erleben, plane eine Fahrt in den Pfad.",
      north: "Norden",
      south: "Süden",
      outOfArea: "Dein Standort liegt außerhalb des Kartenbereichs",
      outOfAreaBody: "Dieser Check deckt Spanien und die Balearen ab. Am 12. August 2026 durchquert der Pfad der Totalität Nordspanien.",
      nearest: "Nächstgelegene Referenzstadt",
      denied: "Standortzugriff wurde verweigert. Aktiviere ihn im Browser oder vergleiche die Städte manuell.",
      unavailable: "Standort konnte nicht bestimmt werden. Bitte erneut versuchen.",
      unsupported: "Dein Browser unterstützt keine Geolokalisierung. Vergleiche die Städte manuell.",
      you: "Du",
    },
  },
  cities: {
    coruna: {
      why: "Die höchste Sonne der Hauptoptionen (≈12°), mit mehr Spielraum über dem Horizont vor Sonnenuntergang.",
      risk: "Atlantische tiefe Wolken, Nebel und Küstenschichten — halte eine Alternative im Landesinneren bereit.",
    },
    leon: {
      why: "Die längste Totalität Spaniens mit einer der höchsten Sonnenstände des Binnenlands.",
      risk: "Der westliche Bergrand muss vom exakten Standort aus geprüft werden.",
    },
    palencia: {
      why: "Die beste Gesamtbalance: offene Ebenen der Tierra de Campos und günstige Binnenklimatologie.",
      risk: "Andrang — die Logistik der endgültigen Beobachtungsorte wird noch bestätigt.",
    },
    burgos: {
      why: "Praktisch auf der Zentrallinie, in der offiziell am besten bewerteten Region Spaniens.",
      risk: "Die Sonne steht bei ≈8°: jeder niedrige Rücken, jedes Gebäude, jede Baumreihe kann die Totalität stehlen.",
    },
    aranda: {
      why: "Zentrallinien-Korridor, gut erreichbar, im günstigen Norden der Meseta.",
      risk: "Lokales Gelände, Verkehr und wenige bekannte Aussichtspunkte.",
    },
    soria: {
      why: "Zentrale Geometrie mit bereits angekündigten offiziellen Beobachtungszonen mit Service.",
      risk: "Tiefere Sonne und konvektive Bewölkung nahe der Gebirgssysteme.",
    },
    zaragoza: {
      why: "Mit die geringste mittlere August-Bewölkung im Pfad, dazu starke Verkehrsanbindung.",
      risk: "Kürzere Totalität, städtischer Andrang, Hitze und Dunst.",
    },
    calamocha: {
      why: "Günstige Klimatologie Aragóns und offizielle Beobachtungsorte.",
      risk: "Sehr tiefe Sonne (≈6°), Hitze, Dunst und Gelände.",
    },
    palma: {
      why: "Eine potenziell dramatische Komposition über dem Meer mit ≈1m 36s Totalität.",
      risk: "Die Sonne steht nur bei ≈2°: Dunst, ein Schiff oder das kleinste Hindernis am Horizont ist entscheidend.",
    },
  },
  critical: {
    eyebrow: "Kritische Informationen",
    heading: "Vier Dinge, die deine Finsternis entscheiden",
    items: [
      {
        title: "Im Pfad stehen — nicht daneben",
        body: "Eine 99%-partielle Finsternis ist nichts im Vergleich zur Totalität. Madrid und Barcelona bleiben außerhalb; wenige Kilometer entscheiden, ob für dich aus Tag Nacht wird.",
      },
      {
        title: "Der Westhorizont ist alles",
        body: "Die Totalität findet bei nur 2°–12° Sonnenhöhe statt. Ein Hügel, ein Gebäude, eine Baumreihe oder Seedunst kann das ganze Schauspiel verbergen — selbst bei klarem Himmel. Erkunde deinen Ort vorab zur selben Uhrzeit.",
      },
      {
        title: "Zertifizierter Augenschutz, immer",
        body: "ISO-12312-2-Finsternisbrillen für alle partiellen Phasen und ein zertifizierter Sonnenfilter vorn am Objektiv. Nur abnehmen, solange die helle Oberfläche vollständig bedeckt ist — und nur innerhalb des Pfads.",
      },
      {
        title: "Mit Menschenmengen und Hitze rechnen",
        body: "Mitte August, eine Straße zu vielen Aussichtspunkten, überlastete Mobilfunknetze. Komm Stunden früher, parke legal, nimm Wasser und Offline-Navigation mit und halte einen Ausweichort bereit.",
      },
    ],
  },
  timeline: {
    heading: "Der Abend, Minute für Minute",
    events: [
      { time: "19:31", label: "Erster Kontakt — der Mond beginnt, die Sonne anzuknabbern (A Coruña)" },
      { time: "20:27", label: "Die Totalität beginnt in Galicien" },
      { time: "20:29", label: "Dunkelheit über Burgos und den nördlichen Ebenen" },
      { time: "20:32", label: "Die Totalität endet über Palma" },
      { time: "≈21:22", label: "Die letzten partiellen Phasen verlöschen mit dem Sonnenuntergang" },
    ],
    note: "Ortszeit des spanischen Festlands und der Balearen. Kontaktzeiten variieren je Gemeinde — bestätige deine in der IGN-Tabelle.",
  },
  zones: {
    eyebrow: "Empfehlungen",
    heading: "Wohin, der Reihe nach",
    intro:
      "Fazit der Recherche aus offizieller IGN-Geometrie und August-Wolkenklimatologie: Ziel auf die nördliche Meseta, dann in den letzten Tagen an die Vorhersage anpassen.",
    items: [
      {
        rank: "01",
        title: "Palencia & Tierra de Campos — beste Gesamtwahl",
        body: "Flache Horizonte, ≈1m 42s Totalität, Sonne bei etwa 9° und günstige Binnenklimatologie.",
      },
      {
        rank: "02",
        title: "Korridor Aranda de Duero – Soria — beste Zentrallinie",
        body: "≈1m 41–43s Totalität mit wachsender offizieller Infrastruktur und Zonen mit Service.",
      },
      {
        rank: "03",
        title: "Aragón (Calamocha, Monreal) — geringste Wolkenchancen",
        body: "Offizielle Beobachtungsorte und günstige Klimatologie, aber die Sonne steht nur bei ≈6°.",
      },
      {
        rank: "04",
        title: "A Coruña & Nordgalicien — die höchste Sonne",
        body: "≈11–12° Sonnenhöhe schaffen Horizontreserve, um den Preis eines realen atlantischen Wolkenrisikos.",
      },
      {
        rank: "05",
        title: "West-Mallorca — der Spezialisten-Shot",
        body: "≈1m 36s über einem Meereshorizont, aber bei 2° Höhe zählt jedes Detail des Horizonts.",
      },
    ],
  },
  safety: {
    eyebrow: "Sicherheit",
    heading: "Schau nach oben — ohne dein Augenlicht zu riskieren",
    lead: "Außer während der kurzen totalen Phase niemals ohne spezialisierte Schutzausrüstung in die Sonne schauen. Das ist die eine Regel ohne Ausnahmen.",
    rules: [
      "Nutze ISO-12312-2-zertifizierte Finsternisbrillen für alle partiellen Phasen — normale Sonnenbrillen reichen nie.",
      "Setze einen zertifizierten Sonnenfilter VORN auf jedes Objektiv, Teleskop oder Fernglas. Nie durch ungefilterte Optik schauen.",
      "Nur innerhalb des Pfads: Schutz abnehmen, wenn die helle Oberfläche vollständig bedeckt ist, und sofort wieder aufsetzen, sobald sie wieder erscheint.",
      "Filter vor Gebrauch prüfen; zerkratzte oder beschädigte aussortieren. Kinder durchgehend beaufsichtigen.",
    ],
    warning: "Außerhalb des Pfads der Totalität gibt es keinen sicheren Moment, ungeschützt in die Sonne zu schauen — das gesamte Ereignis erfordert Filter.",
  },
  app: {
    eyebrow: "Dein Finsternis-Hauptquartier",
    heading: "Solora macht aus diesem Plan Alarme, Karten und Prognosen",
    body: "Die Finsternis dauert einen Abend. Sie zu treffen sind Wochen kleiner Entscheidungen — welche Region, welches Feld, welcher Plan B. Solora bündelt sie an einem Ort.",
    bullets: [
      "Verfolge die Finsternis mit allen Himmelsereignissen 2026, mit Erinnerungen vor den entscheidenden Momenten",
      "Sieh Richtung und Höhe der Sonne von jedem Kandidatenort vorab — bevor du losfährst",
      "Vergleiche Bewölkung, Sicht und Dunst zwischen deinen gespeicherten Orten, je näher der 12. August rückt",
      "Goldene Stunde, Mondphasen, Milchstraße und Polarlichter für jede Nacht nach der Finsternis",
    ],
    cta: "Solora laden — kostenlos",
    ctaNote: "Kostenlos im App Store · Kein Konto nötig",
  },
  guide: {
    heading: "Der vollständige Recherche-Guide",
    intro: "Alles Folgende stammt aus dem vollständigen Guide: offizielle Geometrie, Klimatologie, Logistik und Fotoplanung.",
  },
  quote: { line1: "„Die Totalität schaut man nicht an.", line2: "Man steht mitten in ihr.“" },
  visibility: {
    eyebrow: "Aus Deutschland",
    heading: "Und aus Deutschland?",
    body: "Am 12. August 2026 sieht Deutschland am späten Abend eine partielle Finsternis tief über dem Westhorizont — eindrucksvoll, aber ohne die plötzliche Nacht der Totalität.",
    points: [
      "Partielle Finsternis von grob 55–75 % je nach Region, etwa zwischen 20:00 und 20:30 Uhr",
      "Der Westen ist begünstigt; im Osten geht die Sonne teils noch während der Finsternis unter",
      "Ein völlig freier Westhorizont ist Pflicht — die Sonne steht extrem tief",
      "Die Totalität kreuzt Nordspanien und West-Island (bis zu ≈2 Minuten, inklusive Reykjavík)",
    ],
    travel: "Die einfachste Reise: ein Flug nach Bilbao oder Saragossa, mitten in den Pfad.",
  },
  faqHeading: "Häufige Fragen",
  sourcesHeading: "Offizielle Quellen",
  guidesHeading: "Planungsguides Stadt für Stadt",
  guides: [
    { href: "/eclipse-solar-2026-a-coruna", label: "A Coruña — Zeiten, Horizont und Plan" },
    { href: "/eclipse-solar-2026-burgos", label: "Burgos — 104 Sekunden auf der Zentrallinie" },
    { href: "/eclipse-solar-2026-palma", label: "Palma — Totalität über dem Meer bei 2°" },
    { href: "/fotografiar-eclipse-solar-2026-seguridad", label: "Die Finsternis sicher fotografieren" },
  ],
  finalCta: {
    heading: "Steh im Pfad.",
    body: "Eine Minute und vierundvierzig Sekunden. Keine zweite Chance bis 2053 — plane sie, als würde es zählen.",
    cta: "Hol dir Solora — kostenlos",
  },
}

const pt: EclipseLandingStrings = {
  hero: {
    eyebrow: "12 · 08 · 2026 — Norte da Espanha e Baleares",
    title: "Escuridão, ao pôr do sol.",
    subtitle:
      "O primeiro eclipse solar total sobre a Espanha continental desde 1905 cruzará o país perto do pôr do sol. Este guia mostra a faixa de totalidade, os horários e como estar exatamente no lugar certo.",
    cta: "Planeje com a Solora — grátis",
    ctaNote: "iPhone · iPad · Apple Watch · Mac",
    secondaryCta: "Ver a faixa de totalidade",
  },
  countdown: { days: "Dias", hours: "Horas", minutes: "Minutos", seconds: "Segundos" },
  facts: [
    { value: "20:27", label: "a totalidade começa na Galiza — a sombra sai pelas Baleares por volta das 20:33" },
    { value: "1m 45s", label: "de escuridão nas planícies do norte, a totalidade mais longa da Espanha" },
    { value: "2°–12°", label: "altura do Sol durante a totalidade — um horizonte oeste limpo decide tudo" },
  ],
  map: {
    eyebrow: "A faixa",
    heading: "Por onde passará a sombra",
    intro:
      "A sombra da Lua entra pela Galiza, percorre a metade norte da península e sai depois de Maiorca — tudo em cerca de seis minutos. Toque numa cidade para comparar a duração da totalidade, a altura do Sol e os prós e contras locais.",
    legendBand: "Faixa de totalidade (aproximada)",
    legendCenterline: "Linha central — escuridão máxima",
    legendCity: "Cidade dentro da faixa",
    legendPartial: "Apenas eclipse parcial",
    disclaimer:
      "Faixa ilustrativa baseada em exemplos oficiais do IGN. Limites e contatos exatos mudam por município — confirme sempre o seu local na tabela oficial do IGN.",
    disclaimerLink: "Tabela municipal do IGN",
    panel: {
      totality: "Totalidade",
      sunAltitude: "Altura do Sol",
      maxEclipse: "Máximo",
      why: "Por que aqui",
      risk: "Risco principal",
      pathNoData: "Dentro da faixa de totalidade. Consulte a tabela do IGN para os horários locais exatos.",
      edgeNote:
        "Na própria borda da faixa — algumas zonas ao norte podem roçar a totalidade. Verifique o seu ponto exato com o IGN antes de decidir.",
      partialNote: "Fora da faixa: apenas um eclipse parcial profundo. Para viver a escuridão é preciso deslocar-se para dentro da faixa.",
      appHook: "Compare o tempo e os horizontes de locais como este na Solora.",
    },
    locate: {
      button: "Verificar minha localização",
      locating: "Localizando…",
      privacy: "Sua localização nunca sai do seu dispositivo.",
      inside: "Você está dentro da faixa de totalidade",
      insideBody: "Com base na faixa aproximada — confirme seu município na tabela oficial do IGN.",
      edge: "Você está bem na borda da faixa",
      edgeBody: "Aqui poucos quilômetros decidem tudo. Verifique seu ponto exato na tabela oficial do IGN antes do dia do eclipse.",
      outside: "Você está fora da faixa — apenas parcial profundo",
      outsideBody: "A faixa de totalidade fica a cerca de {km} km ao {direction}. Para viver a escuridão, planeje deslocar-se para dentro da faixa.",
      north: "norte",
      south: "sul",
      outOfArea: "Sua localização está fora da área do mapa",
      outOfAreaBody: "Este verificador cobre a Espanha e as Baleares. Em 12 de agosto de 2026 a faixa de totalidade cruza o norte da Espanha.",
      nearest: "Cidade de referência mais próxima",
      denied: "O acesso à localização foi negado. Ative-o no navegador ou compare as cidades manualmente.",
      unavailable: "Não foi possível determinar sua localização. Tente novamente.",
      unsupported: "Seu navegador não suporta geolocalização. Compare as cidades manualmente.",
      you: "Você",
    },
  },
  cities: {
    coruna: {
      why: "O Sol mais alto das opções principais (≈12°), com mais margem sobre o horizonte antes do ocaso.",
      risk: "Nuvens baixas atlânticas, nevoeiro e camadas costeiras — mantenha uma alternativa no interior.",
    },
    leon: {
      why: "A totalidade mais longa da Espanha com uma das maiores alturas do Sol do interior.",
      risk: "O perfil montanhoso a oeste precisa ser verificado do seu ponto exato.",
    },
    palencia: {
      why: "O melhor equilíbrio geral: planícies abertas de Tierra de Campos e climatologia interior favorável.",
      risk: "Aglomeração — a logística dos pontos definitivos ainda está sendo confirmada.",
    },
    burgos: {
      why: "Praticamente na linha central, dentro da região melhor avaliada oficialmente na Espanha.",
      risk: "O Sol estará a ≈8°: qualquer elevação baixa, prédio ou fileira de árvores pode roubar a totalidade.",
    },
    aranda: {
      why: "Corredor de linha central, acessível, no norte favorável da Meseta.",
      risk: "Relevo local, trânsito e mirantes conhecidos limitados.",
    },
    soria: {
      why: "Geometria central com zonas oficiais de observação com serviços já anunciadas.",
      risk: "Sol mais baixo e nuvens convectivas perto dos sistemas montanhosos.",
    },
    zaragoza: {
      why: "Entre as menores nebulosidades médias de agosto dentro da faixa, com grande capacidade de transporte.",
      risk: "Totalidade mais curta, aglomeração urbana, calor e bruma.",
    },
    calamocha: {
      why: "Climatologia favorável de Aragão e pontos de observação oficiais.",
      risk: "Sol muito baixo (≈6°), calor, bruma e relevo.",
    },
    palma: {
      why: "Uma composição potencialmente espetacular sobre o mar com ≈1m 36s de totalidade.",
      risk: "O Sol estará a apenas ≈2°: a bruma, um navio ou o menor obstáculo no horizonte é decisivo.",
    },
  },
  critical: {
    eyebrow: "Informações críticas",
    heading: "Quatro coisas que decidem o seu eclipse",
    items: [
      {
        title: "Estar dentro da faixa — não perto",
        body: "Um eclipse parcial de 99% não se parece em nada com a totalidade. Madri e Barcelona ficam de fora; poucos quilômetros decidem se o dia vira noite para você.",
      },
      {
        title: "O horizonte oeste é tudo",
        body: "A totalidade acontece com o Sol a apenas 2°–12° de altura. Uma colina, um prédio, uma fileira de árvores ou a bruma do mar pode esconder todo o espetáculo mesmo com céu limpo. Explore seu ponto com antecedência, na mesma hora.",
      },
      {
        title: "Proteção ocular certificada, sempre",
        body: "Óculos de eclipse ISO 12312-2 em todas as fases parciais, e filtro solar certificado na frente de qualquer lente. Retire-os apenas enquanto a superfície brilhante estiver completamente coberta — e só dentro da faixa.",
      },
      {
        title: "Conte com multidões e calor",
        body: "Meados de agosto, uma estrada para muitos mirantes, redes móveis saturadas. Chegue com horas de antecedência, estacione legalmente, leve água e navegação offline, e mantenha um ponto alternativo.",
      },
    ],
  },
  timeline: {
    heading: "A tarde, minuto a minuto",
    events: [
      { time: "19:31", label: "Primeiro contato — a Lua começa a morder o Sol (A Coruña)" },
      { time: "20:27", label: "A totalidade começa na Galiza" },
      { time: "20:29", label: "Escuridão sobre Burgos e as planícies do norte" },
      { time: "20:32", label: "A totalidade termina sobre Palma" },
      { time: "≈21:22", label: "As últimas fases parciais se apagam com o pôr do sol" },
    ],
    note: "Hora local da Espanha continental e das Baleares. Os contatos mudam por município — confirme o seu na tabela do IGN.",
  },
  zones: {
    eyebrow: "Recomendações",
    heading: "Aonde ir, por ordem",
    intro:
      "Conclusão da pesquisa com geometria oficial do IGN e climatologia de nuvens de agosto: mire no norte da Meseta e ajuste com a previsão nos últimos dias.",
    items: [
      {
        rank: "01",
        title: "Palencia e Tierra de Campos — melhor equilíbrio",
        body: "Horizontes planos, ≈1m 42s de totalidade, Sol perto de 9° e climatologia interior favorável.",
      },
      {
        rank: "02",
        title: "Corredor Aranda de Duero – Soria — melhor centralidade",
        body: "≈1m 41–43s de totalidade com infraestrutura oficial crescente e zonas com serviços.",
      },
      {
        rank: "03",
        title: "Aragão (Calamocha, Monreal) — menos nuvens em média",
        body: "Pontos oficiais de observação e climatologia favorável, mas com o Sol a apenas ≈6°.",
      },
      {
        rank: "04",
        title: "A Coruña e o norte da Galiza — o Sol mais alto",
        body: "≈11–12° de altura solar dão margem de horizonte, em troca de um risco atlântico real de nuvens.",
      },
      {
        rank: "05",
        title: "Oeste de Maiorca — a foto de especialista",
        body: "≈1m 36s sobre horizonte marinho, mas a 2° de altura cada detalhe do horizonte importa.",
      },
    ],
  },
  safety: {
    eyebrow: "Segurança",
    heading: "Olhe para o céu — sem perder a visão",
    lead: "Exceto durante a breve fase total, nunca olhe para o Sol sem proteção especializada. É a única regra sem exceções.",
    rules: [
      "Use óculos de eclipse certificados ISO 12312-2 em todas as fases parciais — óculos de sol comuns nunca servem.",
      "Coloque um filtro solar certificado na FRENTE de qualquer lente, telescópio ou binóculo. Nunca olhe por óptica sem filtro.",
      "Só dentro da faixa: retire a proteção quando a superfície brilhante estiver completamente coberta e recoloque-a assim que reaparecer.",
      "Inspecione os filtros antes de usar; descarte qualquer um riscado ou danificado. Supervisione as crianças o tempo todo.",
    ],
    warning: "Fora da faixa de totalidade não existe nenhum momento seguro para olhar o Sol sem proteção — o evento inteiro exige filtros.",
  },
  app: {
    eyebrow: "Seu quartel-general do eclipse",
    heading: "A Solora transforma este plano em alertas, mapas e previsões",
    body: "O eclipse é uma tarde. Acertar são semanas de pequenas decisões — qual região, qual campo, qual alternativa. A Solora reúne tudo em um só lugar.",
    bullets: [
      "Acompanhe o eclipse junto a todos os eventos astronômicos de 2026, com lembretes antes dos momentos-chave",
      "Visualize a direção e a altura exatas do Sol de qualquer ponto candidato — antes de dirigir até lá",
      "Compare nebulosidade, visibilidade e bruma entre seus locais salvos à medida que 12 de agosto se aproxima",
      "Hora dourada, fases da Lua, Via Láctea e auroras para todas as noites depois do eclipse",
    ],
    cta: "Baixar a Solora — grátis",
    ctaNote: "Grátis na App Store · Sem conta",
  },
  guide: {
    heading: "O guia completo da pesquisa",
    intro: "Tudo a seguir vem do guia completo: geometria oficial, climatologia, logística e planejamento fotográfico.",
  },
  quote: { line1: "“A totalidade não se assiste.", line2: "Vive-se por dentro.”" },
  visibility: {
    eyebrow: "De Portugal",
    heading: "E de Portugal?",
    body: "Em 12 de agosto de 2026, Portugal verá um eclipse parcial muito profundo ao fim da tarde — e o extremo nordeste toca a própria borda da totalidade.",
    points: [
      "Eclipse parcial de cerca de 85–93% em Portugal continental, por volta das 19:30–20:20 (hora de Lisboa)",
      "Quanto mais a norte e a leste, mais profundo o eclipse; o Sol estará baixo a oeste",
      "O extremo nordeste (região de Bragança) fica na borda da faixa — a poucos quilômetros da totalidade",
      "A totalidade plena fica logo do outro lado da fronteira: Galiza e Castela e Leão",
    ],
    travel: "A viagem mais simples: cruzar a fronteira para Ourense, Zamora ou León — dentro da faixa.",
  },
  faqHeading: "Perguntas frequentes",
  sourcesHeading: "Fontes oficiais",
  guidesHeading: "Guias de planejamento cidade a cidade",
  guides: [
    { href: "/eclipse-solar-2026-a-coruna", label: "A Coruña — horários, horizonte e plano" },
    { href: "/eclipse-solar-2026-burgos", label: "Burgos — 104 segundos na linha central" },
    { href: "/eclipse-solar-2026-palma", label: "Palma — totalidade sobre o mar a 2°" },
    { href: "/fotografiar-eclipse-solar-2026-seguridad", label: "Fotografar o eclipse com segurança" },
  ],
  finalCta: {
    heading: "Esteja na faixa.",
    body: "Um minuto e quarenta e quatro segundos. Sem segunda chance até 2053 — planeje como merece.",
    cta: "Obtenha a Solora — grátis",
  },
}

const zh: EclipseLandingStrings = {
  hero: {
    eyebrow: "2026 · 08 · 12 — 西班牙北部与巴利阿里群岛",
    title: "日落时分,黑暗降临。",
    subtitle:
      "自 1905 年以来首次横跨西班牙本土的日全食,将在临近日落时掠过全国。本指南为你呈现全食带、各地时间,以及如何站在正确的位置。",
    cta: "用 Solora 规划 — 免费",
    ctaNote: "iPhone · iPad · Apple Watch · Mac",
    secondaryCta: "查看全食带",
  },
  countdown: { days: "天", hours: "小时", minutes: "分钟", seconds: "秒" },
  facts: [
    { value: "20:27", label: "全食从加利西亚开始——月影约在 20:33 经巴利阿里群岛离开" },
    { value: "1m 45s", label: "北部平原的黑暗时长,西班牙最长的全食" },
    { value: "2°–12°", label: "全食期间的太阳高度——开阔的西方地平线决定一切" },
  ],
  map: {
    eyebrow: "全食带",
    heading: "月影经过的路线",
    intro:
      "月影从加利西亚进入,横扫伊比利亚半岛北半部,越过马略卡岛离开——全程约六分钟。点击城市即可比较全食时长、太阳高度和当地利弊。",
    legendBand: "全食带(近似)",
    legendCenterline: "中心线——黑暗最久",
    legendCity: "位于带内的城市",
    legendPartial: "仅可见偏食",
    disclaimer: "示意性全食带,基于 IGN 官方示例。精确边界与接触时刻因市镇而异——请务必在 IGN 官方表格中确认你的地点。",
    disclaimerLink: "IGN 市镇表格",
    panel: {
      totality: "全食时长",
      sunAltitude: "太阳高度",
      maxEclipse: "食甚",
      why: "为何选这里",
      risk: "主要风险",
      pathNoData: "位于全食带内。请在 IGN 表格中查询当地精确时间。",
      edgeNote: "正处于全食带边缘——北侧部分区域可能擦过全食。出发前请通过 IGN 核实你的确切位置。",
      partialNote: "位于带外:只能看到深度偏食。想体验黑暗,必须进入全食带。",
      appHook: "在 Solora 中比较这类地点的天气与地平线。",
    },
    locate: {
      button: "检查我的位置",
      locating: "定位中…",
      privacy: "你的位置不会离开你的设备。",
      inside: "你位于全食带内",
      insideBody: "基于近似全食带——请在 IGN 官方表格中确认你所在的市镇。",
      edge: "你正处于全食带边缘",
      edgeBody: "这里几公里就能决定一切。请在日食日前于 IGN 官方表格中核实你的确切位置。",
      outside: "你位于全食带外——仅可见深度偏食",
      outsideBody: "全食带在你以{direction}约 {km} 公里处。想体验黑暗,请计划进入全食带。",
      north: "北",
      south: "南",
      outOfArea: "你的位置在地图范围之外",
      outOfAreaBody: "此工具覆盖西班牙及巴利阿里群岛。2026 年 8 月 12 日,全食带将横跨西班牙北部。",
      nearest: "最近的参考城市",
      denied: "位置权限被拒绝。请在浏览器设置中开启,或手动比较城市。",
      unavailable: "无法获取你的位置,请重试。",
      unsupported: "你的浏览器不支持地理定位。请手动比较城市。",
      you: "你",
    },
  },
  cities: {
    coruna: {
      why: "主要选项中太阳最高(约 12°),日落前在地平线上方有更多余量。",
      risk: "大西洋低云、雾和沿海云层——请准备一个内陆备选地点。",
    },
    leon: {
      why: "西班牙最长的全食,兼具内陆最高的太阳高度之一。",
      risk: "需要从你的确切地点核实西侧山地轮廓。",
    },
    palencia: {
      why: "综合最佳:Tierra de Campos 开阔平原,内陆气候条件有利。",
      risk: "人流拥挤——最终观测点的后勤仍在确认中。",
    },
    burgos: {
      why: "几乎位于中心线上,处于西班牙官方评价最高的区域。",
      risk: "太阳仅约 8° 高:任何低矮山脊、建筑或树列都可能夺走全食。",
    },
    aranda: {
      why: "中心线走廊,交通便利,位于梅塞塔高原有利的北部。",
      risk: "局部地形、交通压力,知名观景点有限。",
    },
    soria: {
      why: "中心线几何位置,已公布配套服务的官方观测区。",
      risk: "太阳更低,山区附近有对流云。",
    },
    zaragoza: {
      why: "带内八月平均云量最少的地区之一,交通承载力强。",
      risk: "全食更短,城市拥挤,炎热和雾霾。",
    },
    calamocha: {
      why: "阿拉贡有利的气候条件和官方观测点。",
      risk: "太阳极低(约 6°),炎热、雾霾和地形。",
    },
    palma: {
      why: "可在海面上拍出极具戏剧性的画面,全食约 1 分 36 秒。",
      risk: "太阳仅约 2° 高:雾霾、船只或地平线上最小的障碍物都是决定性的。",
    },
  },
  critical: {
    eyebrow: "关键信息",
    heading: "决定你日食体验的四件事",
    items: [
      {
        title: "站进带内——而不是带附近",
        body: "99% 的偏食与全食完全是两回事。马德里和巴塞罗那都在带外;几公里就决定了白昼是否为你变成黑夜。",
      },
      {
        title: "西方地平线就是一切",
        body: "全食发生时太阳仅 2°–12° 高。一座小山、一栋建筑、一排树或海上雾气,即使天空晴朗也能挡住整场演出。请提前在同一时刻踩点。",
      },
      {
        title: "始终使用认证的护目装备",
        body: "所有偏食阶段都要佩戴 ISO 12312-2 认证的日食眼镜,任何镜头前都要安装认证的太阳滤镜。只有当明亮日面被完全遮住时才可摘下——且仅限带内。",
      },
      {
        title: "为人流和高温做好准备",
        body: "八月中旬,通往众多观景点的道路有限,移动网络拥堵。请提前数小时到达、合法停车、携带饮水和离线导航,并准备备选地点。",
      },
    ],
  },
  timeline: {
    heading: "当晚,逐分钟",
    events: [
      { time: "19:31", label: "初亏——月亮开始遮掩太阳(拉科鲁尼亚)" },
      { time: "20:27", label: "全食从加利西亚开始" },
      { time: "20:29", label: "黑暗笼罩布尔戈斯和北部平原" },
      { time: "20:32", label: "全食在帕尔马上空结束" },
      { time: "≈21:22", label: "最后的偏食阶段随日落而结束" },
    ],
    note: "西班牙本土及巴利阿里当地时间。接触时刻因市镇而异——请在 IGN 表格中确认。",
  },
  zones: {
    eyebrow: "推荐",
    heading: "去哪里,按优先级",
    intro: "基于 IGN 官方几何数据和八月云量气候学的研究结论:优先选择梅塞塔高原北部,再根据最后几天的预报调整。",
    items: [
      {
        rank: "01",
        title: "帕伦西亚和 Tierra de Campos——综合最佳",
        body: "地平线平坦,全食约 1 分 42 秒,太阳约 9° 高,内陆气候条件有利。",
      },
      {
        rank: "02",
        title: "阿兰达–索里亚走廊——最佳中心线",
        body: "全食约 1 分 41–43 秒,官方日食基础设施不断完善,设有服务区。",
      },
      {
        rank: "03",
        title: "阿拉贡(卡拉莫查、蒙雷亚尔)——云量概率最低",
        body: "官方观测点和有利的气候条件,但太阳仅约 6° 高。",
      },
      {
        rank: "04",
        title: "拉科鲁尼亚和加利西亚北部——太阳最高",
        body: "约 11–12° 的太阳高度带来地平线余量,代价是真实存在的大西洋云量风险。",
      },
      {
        rank: "05",
        title: "马略卡西部——专业摄影之选",
        body: "海平线上约 1 分 36 秒的全食,但太阳仅 2° 高,地平线的每个细节都很重要。",
      },
    ],
  },
  safety: {
    eyebrow: "安全",
    heading: "仰望天空——别让眼睛受伤",
    lead: "除了短暂的全食阶段,绝不能在没有专业防护的情况下直视太阳。这是唯一没有例外的规则。",
    rules: [
      "所有偏食阶段都使用 ISO 12312-2 认证的日食眼镜——普通太阳镜绝对不行。",
      "在任何相机镜头、望远镜或双筒镜的前端安装认证的太阳滤镜。绝不通过未加滤镜的光学设备观看。",
      "仅限带内:当明亮日面被完全遮住时才可摘下防护,日面一旦重现立即戴回。",
      "使用前检查滤镜;有划痕或损坏的一律弃用。全程看护儿童。",
    ],
    warning: "在全食带之外,任何时刻都不能不加防护地直视太阳——整个过程都需要滤镜。",
  },
  app: {
    eyebrow: "你的日食指挥部",
    heading: "Solora 把这份计划变成提醒、地图和预报",
    body: "日食只有一个傍晚,但做对它需要数周的小决定——哪个地区、哪块场地、哪个备选。Solora 把它们汇聚在一处。",
    bullets: [
      "与 2026 年所有天象一起追踪这次日食,并在关键时刻前收到提醒",
      "出发前即可预览太阳在任意候选地点的准确方位与高度",
      "随着 8 月 12 日临近,比较各收藏地点的云量、能见度与雾霾",
      "日食之后的每个夜晚:黄金时刻、月相、银河与极光规划",
    ],
    cta: "下载 Solora — 免费",
    ctaNote: "App Store 免费下载 · 无需账户",
  },
  guide: {
    heading: "完整研究指南",
    intro: "以下内容全部来自完整指南:官方几何数据、气候学、后勤与摄影规划。",
  },
  quote: { line1: "“全食不是用来观看的。", line2: "而是置身其中。”" },
  visibility: {
    eyebrow: "从中国出发",
    heading: "在中国能看到吗?",
    body: "这次日食在中国境内不可见——发生时正值北京时间 8 月 12 日深夜,太阳位于地球另一侧。对中国观测者而言,这是一次值得远行的日食。",
    points: [
      "中国全境不可见,包括偏食阶段",
      "全食带横跨格陵兰、冰岛西部(含雷克雅未克,最长约 2 分钟)和西班牙北部",
      "西班牙的全食发生在日落前,太阳很低,画面极具戏剧性",
      "下一次西班牙境内的日全食要等到 2053 年",
    ],
    travel: "最佳旅行方案:飞往毕尔巴鄂、萨拉戈萨或马略卡,置身全食带内。",
  },
  faqHeading: "常见问题",
  sourcesHeading: "官方来源",
  guidesHeading: "逐城规划指南",
  guides: [
    { href: "/eclipse-solar-2026-a-coruna", label: "拉科鲁尼亚——时间、地平线与计划" },
    { href: "/eclipse-solar-2026-burgos", label: "布尔戈斯——中心线上的 104 秒" },
    { href: "/eclipse-solar-2026-palma", label: "帕尔马——2° 太阳高度的海上全食" },
    { href: "/fotografiar-eclipse-solar-2026-seguridad", label: "安全拍摄日食" },
  ],
  finalCta: {
    heading: "站进全食带。",
    body: "一分四十四秒。2053 年前再无机会——认真规划这一刻。",
    cta: "获取 Solora — 免费",
  },
}

const eclipseLandingStrings: Record<Locale, EclipseLandingStrings> = { en, es, fr, it, de, pt, zh }

export function getEclipseLandingStrings(locale: Locale): EclipseLandingStrings {
  return eclipseLandingStrings[locale] ?? en
}
