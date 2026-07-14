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

export function getEclipseLandingStrings(locale: Locale): EclipseLandingStrings {
  return locale === "es" ? es : en
}
