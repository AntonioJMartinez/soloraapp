import { Locale } from "@/lib/i18n"

// Interactive hub for the August 12, 2026 total solar eclipse article.
// Times are local (CEST) expressed as decimal minutes since midnight.
// Figures follow the official IGN municipality examples already cited in the
// article; times marked approx must be confirmed on the IGN table.

export const eclipseHubSlug = "total-solar-eclipse-august-2026"

export type EclipseSpotId =
  | "palencia"
  | "leon"
  | "aranda"
  | "burgos"
  | "soria"
  | "calamocha"
  | "zaragoza"
  | "coruna"
  | "palma"

export type EclipseSpot = {
  id: EclipseSpotId
  lon: number
  lat: number
  region: string
  totalitySeconds: number
  sunAltitude: number
  /** First contact (partial begins), decimal minutes local time */
  c1: number
  /** Maximum eclipse, decimal minutes local time */
  max: number
  /** Local sunset, decimal minutes */
  sunset: number
  /** Explicit fourth contact when known; otherwise derived as max + (max - c1) */
  c4?: number
  /** 1-5 August clear-sky climatology score from the IGN cloud map */
  climate: 1 | 2 | 3 | 4 | 5
  horizon: "plain" | "sea"
  approx: boolean
  /** Exact official display strings when available (IGN) */
  official?: Partial<Record<"c1" | "c2" | "max" | "c3" | "sunset", string>>
  guideHref?: string
}

export const eclipseSpots: EclipseSpot[] = [
  {
    id: "palencia",
    lon: -4.53,
    lat: 42.01,
    region: "Castilla y León",
    totalitySeconds: 102,
    sunAltitude: 9,
    c1: 1172,
    max: 1229,
    sunset: 1281,
    climate: 4,
    horizon: "plain",
    approx: true,
  },
  {
    id: "leon",
    lon: -5.57,
    lat: 42.6,
    region: "Castilla y León",
    totalitySeconds: 105,
    sunAltitude: 10,
    c1: 1172,
    max: 1228,
    sunset: 1283,
    climate: 4,
    horizon: "plain",
    approx: true,
  },
  {
    id: "aranda",
    lon: -3.69,
    lat: 41.67,
    region: "Castilla y León",
    totalitySeconds: 103,
    sunAltitude: 8,
    c1: 1173,
    max: 1229,
    sunset: 1278,
    climate: 4,
    horizon: "plain",
    approx: true,
  },
  {
    id: "burgos",
    lon: -3.7,
    lat: 42.34,
    region: "Castilla y León",
    totalitySeconds: 104,
    sunAltitude: 8,
    c1: 1173,
    max: 1229,
    sunset: 1280,
    climate: 4,
    horizon: "plain",
    approx: true,
    official: { c1: "19:33", max: "20:29" },
    guideHref: "/eclipse-solar-2026-burgos",
  },
  {
    id: "soria",
    lon: -2.47,
    lat: 41.77,
    region: "Castilla y León",
    totalitySeconds: 101,
    sunAltitude: 7,
    c1: 1173,
    max: 1230,
    sunset: 1276,
    climate: 4,
    horizon: "plain",
    approx: true,
  },
  {
    id: "calamocha",
    lon: -1.3,
    lat: 40.92,
    region: "Aragón",
    totalitySeconds: 101,
    sunAltitude: 6,
    c1: 1174,
    max: 1230,
    sunset: 1273,
    climate: 4,
    horizon: "plain",
    approx: true,
  },
  {
    id: "zaragoza",
    lon: -0.88,
    lat: 41.65,
    region: "Aragón",
    totalitySeconds: 83,
    sunAltitude: 6,
    c1: 1174,
    max: 1230,
    sunset: 1272,
    climate: 5,
    horizon: "plain",
    approx: true,
  },
  {
    id: "coruna",
    lon: -8.41,
    lat: 43.36,
    region: "Galicia",
    totalitySeconds: 76,
    sunAltitude: 12,
    c1: 1170.85,
    max: 1228.22,
    sunset: 1284,
    c4: 1282,
    climate: 2,
    horizon: "sea",
    approx: false,
    official: { c1: "19:30:51", c2: "20:27:35", max: "20:28:13", c3: "20:28:51" },
    guideHref: "/eclipse-solar-2026-a-coruna",
  },
  {
    id: "palma",
    lon: 2.65,
    lat: 39.57,
    region: "Illes Balears",
    totalitySeconds: 96,
    sunAltitude: 2,
    c1: 1177.97,
    max: 1231.8,
    sunset: 1249.39,
    climate: 3,
    horizon: "sea",
    approx: false,
    official: { c1: "19:37:58", c2: "20:31:00", max: "20:31:48", c3: "20:32:36", sunset: "20:49:23" },
    guideHref: "/eclipse-solar-2026-palma",
  },
]

export function spotContacts(spot: EclipseSpot) {
  const half = spot.totalitySeconds / 120
  return {
    c1: spot.c1,
    c2: spot.max - half,
    max: spot.max,
    c3: spot.max + half,
    c4: spot.c4 ?? spot.max + (spot.max - spot.c1),
    sunset: spot.sunset,
  }
}

export function formatMinutes(minutes: number): string {
  const total = Math.round(minutes * 60)
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  return `${h}:${String(m).padStart(2, "0")}`
}

/** Maximum eclipse over central Spain: Aug 12, 2026, ~20:29 CEST (18:29 UTC) */
export const eclipseTargetUtcMs = Date.UTC(2026, 7, 12, 18, 27, 35)

type SpotText = { name: string; why: string; risk: string }

export type EclipseDictionary = {
  eyebrow: string
  hubTitle: string
  hubSubtitle: string
  aboutTitle: string
  aboutBody: string
  checkSubtitle: string
  checkUseLocation: string
  checkLocating: string
  checkGeoError: string
  verdictTotal: string
  verdictEdge: string
  verdictPartial: string
  verdictSet: string
  labelObscuration: string
  labelDirection: string
  labelMagnitude: string
  checkPartialEnds: string
  checkNote: string
  statDate: string
  statFirstContact: string
  statTotalityWindow: string
  statMaxDuration: string
  countdownTitle: string
  countdownNote: string
  countdownPast: string
  days: string
  hours: string
  minutes: string
  seconds: string
  mapTitle: string
  mapSubtitle: string
  bandLabel: string
  centerLabel: string
  sweepLabel: string
  outsideLabel: string
  mapDisclaimer: string
  spotsTitle: string
  spotsSubtitle: string
  detailPartial: string
  detailTotalityBegins: string
  detailMax: string
  detailTotalityEnds: string
  detailSunset: string
  detailDuration: string
  detailAltitude: string
  detailClimate: string
  detailWhy: string
  detailRisk: string
  detailGuide: string
  approxNote: string
  spots: Record<EclipseSpotId, SpotText>
}

const en: EclipseDictionary = {
  eyebrow: "Interactive guide",
  hubTitle: "Total Solar Eclipse · August 12, 2026",
  hubSubtitle:
    "Explore the path of totality across Spain, follow the shadow's clock on the map and compare the best places to watch.",
  aboutTitle: "What is it?",
  aboutBody:
    "A total solar eclipse — the first visible from mainland Spain in over a century. Near sunset on August 12, 2026, the Moon fully covers the Sun along a path sweeping from Galicia to the Balearic Islands, briefly turning day to twilight. Outside that path, most of Spain sees a deep partial eclipse.",
  checkSubtitle: "Tap the map, use your location or pick a city to get exact times, the Sun's height and whether you are inside totality.",
  checkUseLocation: "Use my location",
  checkLocating: "Locating…",
  checkGeoError: "Couldn't get your location — tap the map instead.",
  verdictTotal: "You're in the path of totality",
  verdictEdge: "You're right on the edge of the path",
  verdictPartial: "Partial eclipse only here",
  verdictSet: "The Sun sets before the eclipse peaks",
  labelObscuration: "Sun covered",
  labelDirection: "Look toward",
  labelMagnitude: "Magnitude",
  checkPartialEnds: "Partial ends",
  checkNote: "Estimated from NASA orbital elements. Confirm your municipality's official times on the IGN table, and never look at the Sun without ISO 12312-2 protection outside totality.",
  statDate: "Wed · Aug 12, 2026",
  statFirstContact: "Partial begins ~19:30",
  statTotalityWindow: "Totality ~20:27–20:33",
  statMaxDuration: "Up to 1m 45s of totality",
  countdownTitle: "Countdown to totality over Spain",
  countdownNote: "Maximum eclipse around 20:28–20:32 local time, low over the western horizon.",
  countdownPast: "Totality has passed — relive the event and plan the next one below.",
  days: "days",
  hours: "hours",
  minutes: "min",
  seconds: "sec",
  mapTitle: "Where the shadow travels",
  mapSubtitle: "The Moon's shadow enters through Galicia and leaves via the Balearic Islands in about five minutes. Tap a marker to inspect it.",
  bandLabel: "Path of totality (~290 km wide)",
  centerLabel: "Center line — longest totality",
  sweepLabel: "Shadow sweeps west → east, ~20:27 to ~20:32",
  outsideLabel: "Madrid — deep partial, no totality",
  mapDisclaimer:
    "Stylized map for orientation. Confirm the exact limits and your municipality's official times on the IGN eclipse table.",
  spotsTitle: "The best places, ranked",
  spotsSubtitle: "Research-based ranking combining official IGN geometry with August cloud climatology.",
  detailPartial: "Partial eclipse begins",
  detailTotalityBegins: "Totality begins",
  detailMax: "Maximum eclipse",
  detailTotalityEnds: "Totality ends",
  detailSunset: "Sunset",
  detailDuration: "Totality",
  detailAltitude: "Sun altitude",
  detailClimate: "Clear-sky odds (Aug climatology)",
  detailWhy: "Why choose it",
  detailRisk: "Main risk",
  detailGuide: "Read the full local guide",
  approxNote: "~ approximate times — confirm your exact municipality on the official IGN table.",
  spots: {
    palencia: {
      name: "Palencia · Tierra de Campos",
      why: "Best overall balance: open plains and favorable inland climatology.",
      risk: "Crowding and still-unconfirmed viewing-site logistics.",
    },
    leon: {
      name: "León plain",
      why: "Longest totality here and one of the highest inland Sun positions.",
      risk: "Western mountain horizon must be checked from your exact site.",
    },
    aranda: {
      name: "Aranda de Duero",
      why: "Near the center line, accessible and inside the favorable northern Meseta.",
      risk: "Local terrain, traffic and few famous viewpoints.",
    },
    burgos: {
      name: "Burgos",
      why: "104 seconds of totality from a well-connected northern base.",
      risk: "Sun at only 8°: any hill or building can block totality.",
    },
    soria: {
      name: "Soria",
      why: "Center-line geometry and official serviced observation areas.",
      risk: "Lower Sun and convective cloud near the mountains.",
    },
    calamocha: {
      name: "Calamocha · Monreal del Campo",
      why: "Favorable Aragón climatology and official observation sites.",
      risk: "Very low Sun, heat, haze and terrain.",
    },
    zaragoza: {
      name: "Zaragoza · Ebro valley",
      why: "Lowest average August cloud and strong transport capacity.",
      risk: "Shorter totality, urban crowding, heat and haze.",
    },
    coruna: {
      name: "A Coruña",
      why: "Highest Sun of the main bases, with more horizon margin.",
      risk: "Atlantic low cloud, fog and coastal layers.",
    },
    palma: {
      name: "Palma · west Mallorca",
      why: "Dramatic sea-horizon composition at sunset.",
      risk: "Sun at 2°: haze or any horizon obstacle is decisive.",
    },
  },
}

const es: EclipseDictionary = {
  eyebrow: "Guía interactiva",
  hubTitle: "Eclipse solar total · 12 de agosto de 2026",
  hubSubtitle:
    "Explora la franja de totalidad sobre España, sigue el reloj de la sombra en el mapa y compara los mejores lugares para verlo.",
  aboutTitle: "¿Qué es?",
  aboutBody:
    "Un eclipse solar total, el primero visible desde la España peninsular en más de un siglo. Cerca del atardecer del 12 de agosto de 2026, la Luna cubre por completo el Sol a lo largo de una franja que va de Galicia a Baleares y convierte el día en penumbra durante unos segundos. Fuera de esa franja, casi toda España verá un eclipse parcial profundo.",
  checkSubtitle: "Toca el mapa, usa tu ubicación o elige una ciudad para ver horarios exactos, la altura del Sol y si estás dentro de la totalidad.",
  checkUseLocation: "Usar mi ubicación",
  checkLocating: "Localizando…",
  checkGeoError: "No se pudo obtener tu ubicación: toca el mapa.",
  verdictTotal: "Estás en la franja de totalidad",
  verdictEdge: "Estás justo en el borde de la franja",
  verdictPartial: "Aquí solo se verá parcial",
  verdictSet: "El Sol se pone antes del máximo",
  labelObscuration: "Sol cubierto",
  labelDirection: "Mira hacia",
  labelMagnitude: "Magnitud",
  checkPartialEnds: "Fin del parcial",
  checkNote: "Estimado a partir de los elementos orbitales de la NASA. Confirma los horarios oficiales de tu municipio en la tabla del IGN y nunca mires al Sol sin protección ISO 12312-2 fuera de la totalidad.",
  statDate: "Miércoles · 12 ago 2026",
  statFirstContact: "Parcial desde ~19:30",
  statTotalityWindow: "Totalidad ~20:27–20:33",
  statMaxDuration: "Hasta 1m 45s de totalidad",
  countdownTitle: "Cuenta atrás para la totalidad en España",
  countdownNote: "Máximo del eclipse entre las 20:28 y las 20:32 hora local, bajo sobre el horizonte oeste.",
  countdownPast: "La totalidad ya ha pasado: revive el evento y planifica el siguiente más abajo.",
  days: "días",
  hours: "horas",
  minutes: "min",
  seconds: "seg",
  mapTitle: "Por dónde pasa la sombra",
  mapSubtitle: "La sombra de la Luna entra por Galicia y sale por Baleares en unos cinco minutos. Toca un marcador para inspeccionarlo.",
  bandLabel: "Franja de totalidad (~290 km de ancho)",
  centerLabel: "Línea central: totalidad más larga",
  sweepLabel: "La sombra barre de oeste a este, ~20:27 a ~20:32",
  outsideLabel: "Madrid: parcial profundo, sin totalidad",
  mapDisclaimer:
    "Mapa estilizado orientativo. Confirma los límites exactos y los horarios oficiales de tu municipio en la tabla del IGN.",
  spotsTitle: "Los mejores lugares, ordenados",
  spotsSubtitle: "Ranking basado en la geometría oficial del IGN y la climatología de nubosidad de agosto.",
  detailPartial: "Empieza el eclipse parcial",
  detailTotalityBegins: "Empieza la totalidad",
  detailMax: "Máximo del eclipse",
  detailTotalityEnds: "Termina la totalidad",
  detailSunset: "Puesta de Sol",
  detailDuration: "Totalidad",
  detailAltitude: "Altura del Sol",
  detailClimate: "Probabilidad de cielo despejado (climatología de agosto)",
  detailWhy: "Por qué elegirlo",
  detailRisk: "Riesgo principal",
  detailGuide: "Lee la guía local completa",
  approxNote: "~ horarios aproximados: confirma tu municipio exacto en la tabla oficial del IGN.",
  spots: {
    palencia: {
      name: "Palencia · Tierra de Campos",
      why: "El mejor equilibrio global: llanuras abiertas y climatología interior favorable.",
      risk: "Aglomeraciones y logística de miradores aún sin confirmar.",
    },
    leon: {
      name: "Llanura de León",
      why: "La totalidad más larga y uno de los Soles más altos del interior.",
      risk: "Comprueba el horizonte montañoso del oeste desde tu punto exacto.",
    },
    aranda: {
      name: "Aranda de Duero",
      why: "Cerca de la línea central, accesible y dentro de la Meseta norte favorable.",
      risk: "Relieve local, tráfico y pocos miradores conocidos.",
    },
    burgos: {
      name: "Burgos",
      why: "104 segundos de totalidad desde una base norte bien conectada.",
      risk: "Sol a solo 8°: cualquier loma o edificio puede tapar la totalidad.",
    },
    soria: {
      name: "Soria",
      why: "Geometría de línea central y zonas oficiales de observación con servicios.",
      risk: "Sol más bajo y nubes convectivas cerca de las sierras.",
    },
    calamocha: {
      name: "Calamocha · Monreal del Campo",
      why: "Climatología favorable de Aragón y puntos oficiales de observación.",
      risk: "Sol muy bajo, calor, calima y relieve.",
    },
    zaragoza: {
      name: "Zaragoza · valle del Ebro",
      why: "La menor nubosidad media de agosto y gran capacidad de transporte.",
      risk: "Totalidad más corta, aglomeración urbana, calor y calima.",
    },
    coruna: {
      name: "A Coruña",
      why: "El Sol más alto de las grandes bases, con más margen de horizonte.",
      risk: "Nubes bajas atlánticas, niebla y capas costeras.",
    },
    palma: {
      name: "Palma · oeste de Mallorca",
      why: "Composición dramática con horizonte de mar al atardecer.",
      risk: "Sol a 2°: la calima o cualquier obstáculo del horizonte es decisivo.",
    },
  },
}

const fr: EclipseDictionary = {
  ...en,
  eyebrow: "Guide interactif",
  hubTitle: "Éclipse solaire totale · 12 août 2026",
  hubSubtitle:
    "Explorez la bande de totalité sur l'Espagne, suivez l'horloge de l'ombre sur la carte et comparez les meilleurs lieux d'observation.",
  aboutTitle: "Qu'est-ce que c'est ?",
  aboutBody:
    "Une éclipse solaire totale — la première visible depuis l'Espagne continentale depuis plus d'un siècle. Près du coucher du soleil, le 12 août 2026, la Lune couvre entièrement le Soleil le long d'une bande allant de la Galice aux Baléares, transformant brièvement le jour en crépuscule. Ailleurs, la majeure partie de l'Espagne voit une éclipse partielle profonde.",
  checkSubtitle: "Touchez la carte, utilisez votre position ou choisissez une ville pour connaître horaires exacts, hauteur du Soleil et si vous êtes dans la totalité.",
  checkUseLocation: "Utiliser ma position",
  checkLocating: "Localisation…",
  checkGeoError: "Position indisponible — touchez la carte.",
  verdictTotal: "Vous êtes dans la bande de totalité",
  verdictEdge: "Vous êtes juste au bord de la bande",
  verdictPartial: "Éclipse partielle seulement ici",
  verdictSet: "Le Soleil se couche avant le maximum",
  labelObscuration: "Soleil couvert",
  labelDirection: "Regardez vers",
  labelMagnitude: "Magnitude",
  checkPartialEnds: "Fin de la partielle",
  checkNote: "Estimation d'après les éléments orbitaux de la NASA. Confirmez les horaires officiels de votre commune sur la table de l'IGN, et ne regardez jamais le Soleil sans protection ISO 12312-2 hors totalité.",
  statDate: "Mercredi · 12 août 2026",
  statFirstContact: "Phase partielle dès ~19h30",
  statTotalityWindow: "Totalité ~20h27–20h33",
  statMaxDuration: "Jusqu'à 1min 45s de totalité",
  countdownTitle: "Compte à rebours vers la totalité en Espagne",
  countdownNote: "Maximum de l'éclipse vers 20h28–20h32 heure locale, bas sur l'horizon ouest.",
  countdownPast: "La totalité est passée — revivez l'événement et préparez le prochain ci-dessous.",
  days: "jours",
  hours: "heures",
  minutes: "min",
  seconds: "sec",
  mapTitle: "Le trajet de l'ombre",
  mapSubtitle: "L'ombre de la Lune entre par la Galice et sort par les Baléares en cinq minutes environ. Touchez un repère pour l'inspecter.",
  bandLabel: "Bande de totalité (~290 km de large)",
  centerLabel: "Ligne centrale — totalité la plus longue",
  sweepLabel: "L'ombre balaie d'ouest en est, ~20h27 à ~20h32",
  outsideLabel: "Madrid — partielle profonde, pas de totalité",
  mapDisclaimer:
    "Carte stylisée d'orientation. Confirmez les limites exactes et les horaires officiels de votre commune sur la table de l'IGN.",
  spotsTitle: "Les meilleurs lieux, classés",
  spotsSubtitle: "Classement fondé sur la géométrie officielle de l'IGN et la climatologie nuageuse d'août.",
  detailPartial: "Début de la phase partielle",
  detailTotalityBegins: "Début de la totalité",
  detailMax: "Maximum de l'éclipse",
  detailTotalityEnds: "Fin de la totalité",
  detailSunset: "Coucher du soleil",
  detailDuration: "Totalité",
  detailAltitude: "Hauteur du Soleil",
  detailClimate: "Chances de ciel dégagé (climatologie d'août)",
  detailWhy: "Pourquoi le choisir",
  detailRisk: "Risque principal",
  detailGuide: "Lire le guide local complet",
  approxNote: "~ horaires approximatifs — confirmez votre commune exacte sur la table officielle de l'IGN.",
  spots: {
    palencia: {
      name: "Palencia · Tierra de Campos",
      why: "Meilleur équilibre global : plaines ouvertes et climatologie intérieure favorable.",
      risk: "Affluence et logistique des sites encore incertaine.",
    },
    leon: {
      name: "Plaine de León",
      why: "Totalité la plus longue et Soleil parmi les plus hauts de l'intérieur.",
      risk: "Vérifiez l'horizon montagneux à l'ouest depuis votre site exact.",
    },
    aranda: {
      name: "Aranda de Duero",
      why: "Près de la ligne centrale, accessible, dans la Meseta nord favorable.",
      risk: "Relief local, trafic et peu de points de vue connus.",
    },
    burgos: {
      name: "Burgos",
      why: "104 secondes de totalité depuis une base nord bien reliée.",
      risk: "Soleil à 8° : toute colline ou tout bâtiment peut masquer la totalité.",
    },
    soria: {
      name: "Soria",
      why: "Ligne centrale et zones d'observation officielles aménagées.",
      risk: "Soleil plus bas et nuages convectifs près des montagnes.",
    },
    calamocha: {
      name: "Calamocha · Monreal del Campo",
      why: "Climatologie favorable de l'Aragon et sites officiels d'observation.",
      risk: "Soleil très bas, chaleur, brume et relief.",
    },
    zaragoza: {
      name: "Saragosse · vallée de l'Èbre",
      why: "Nébulosité d'août la plus faible et bons transports.",
      risk: "Totalité plus courte, foule urbaine, chaleur et brume.",
    },
    coruna: {
      name: "La Corogne",
      why: "Soleil le plus haut des grandes bases, plus de marge d'horizon.",
      risk: "Nuages bas atlantiques, brouillard et couches côtières.",
    },
    palma: {
      name: "Palma · ouest de Majorque",
      why: "Composition spectaculaire sur horizon marin au couchant.",
      risk: "Soleil à 2° : brume ou tout obstacle d'horizon est décisif.",
    },
  },
}

const it: EclipseDictionary = {
  ...en,
  eyebrow: "Guida interattiva",
  hubTitle: "Eclissi solare totale · 12 agosto 2026",
  hubSubtitle:
    "Esplora la fascia di totalità sulla Spagna, segui l'orologio dell'ombra sulla mappa e confronta i posti migliori per osservarla.",
  aboutTitle: "Che cos'è?",
  aboutBody:
    "Un'eclissi solare totale — la prima visibile dalla Spagna continentale da oltre un secolo. Verso il tramonto del 12 agosto 2026, la Luna copre completamente il Sole lungo una fascia che va dalla Galizia alle Baleari, trasformando per pochi secondi il giorno in penombra. Fuori da quella fascia, gran parte della Spagna vedrà un'eclissi parziale profonda.",
  checkSubtitle: "Tocca la mappa, usa la tua posizione o scegli una città per orari esatti, altezza del Sole e se sei dentro la totalità.",
  checkUseLocation: "Usa la mia posizione",
  checkLocating: "Localizzazione…",
  checkGeoError: "Posizione non disponibile: tocca la mappa.",
  verdictTotal: "Sei nella fascia di totalità",
  verdictEdge: "Sei proprio sul bordo della fascia",
  verdictPartial: "Qui solo eclissi parziale",
  verdictSet: "Il Sole tramonta prima del massimo",
  labelObscuration: "Sole coperto",
  labelDirection: "Guarda verso",
  labelMagnitude: "Magnitudine",
  checkPartialEnds: "Fine parziale",
  checkNote: "Stima dagli elementi orbitali della NASA. Conferma gli orari ufficiali del tuo comune sulla tabella IGN e non guardare mai il Sole senza protezione ISO 12312-2 fuori dalla totalità.",
  statDate: "Mercoledì · 12 ago 2026",
  statFirstContact: "Fase parziale da ~19:30",
  statTotalityWindow: "Totalità ~20:27–20:33",
  statMaxDuration: "Fino a 1m 45s di totalità",
  countdownTitle: "Conto alla rovescia per la totalità in Spagna",
  countdownNote: "Massimo dell'eclissi verso le 20:28–20:32 ora locale, basso sull'orizzonte ovest.",
  countdownPast: "La totalità è passata — rivivi l'evento e pianifica il prossimo qui sotto.",
  days: "giorni",
  hours: "ore",
  minutes: "min",
  seconds: "sec",
  mapTitle: "Dove passa l'ombra",
  mapSubtitle: "L'ombra della Luna entra dalla Galizia ed esce dalle Baleari in circa cinque minuti. Tocca un segnaposto per esaminarlo.",
  bandLabel: "Fascia di totalità (~290 km di larghezza)",
  centerLabel: "Linea centrale — totalità più lunga",
  sweepLabel: "L'ombra corre da ovest a est, ~20:27 alle ~20:32",
  outsideLabel: "Madrid — parziale profonda, niente totalità",
  mapDisclaimer:
    "Mappa stilizzata orientativa. Conferma i limiti esatti e gli orari ufficiali del tuo comune sulla tabella dell'IGN.",
  spotsTitle: "I posti migliori, in classifica",
  spotsSubtitle: "Classifica basata sulla geometria ufficiale IGN e sulla climatologia delle nubi di agosto.",
  detailPartial: "Inizio eclissi parziale",
  detailTotalityBegins: "Inizio totalità",
  detailMax: "Massimo dell'eclissi",
  detailTotalityEnds: "Fine totalità",
  detailSunset: "Tramonto",
  detailDuration: "Totalità",
  detailAltitude: "Altezza del Sole",
  detailClimate: "Probabilità di cielo sereno (climatologia di agosto)",
  detailWhy: "Perché sceglierlo",
  detailRisk: "Rischio principale",
  detailGuide: "Leggi la guida locale completa",
  approxNote: "~ orari approssimativi — conferma il tuo comune esatto sulla tabella ufficiale IGN.",
  spots: {
    palencia: {
      name: "Palencia · Tierra de Campos",
      why: "Miglior equilibrio complessivo: pianure aperte e climatologia interna favorevole.",
      risk: "Affollamento e logistica dei punti di osservazione da confermare.",
    },
    leon: {
      name: "Pianura di León",
      why: "Totalità più lunga e Sole tra i più alti dell'interno.",
      risk: "Controlla l'orizzonte montuoso a ovest dal tuo punto esatto.",
    },
    aranda: {
      name: "Aranda de Duero",
      why: "Vicino alla linea centrale, accessibile, nella Meseta nord favorevole.",
      risk: "Terreno locale, traffico e pochi punti panoramici noti.",
    },
    burgos: {
      name: "Burgos",
      why: "104 secondi di totalità da una base nord ben collegata.",
      risk: "Sole a soli 8°: qualsiasi collina o edificio può coprire la totalità.",
    },
    soria: {
      name: "Soria",
      why: "Linea centrale e aree di osservazione ufficiali attrezzate.",
      risk: "Sole più basso e nubi convettive vicino ai monti.",
    },
    calamocha: {
      name: "Calamocha · Monreal del Campo",
      why: "Climatologia favorevole dell'Aragona e siti ufficiali di osservazione.",
      risk: "Sole molto basso, caldo, foschia e rilievi.",
    },
    zaragoza: {
      name: "Saragozza · valle dell'Ebro",
      why: "Minima nuvolosità media di agosto e ottimi trasporti.",
      risk: "Totalità più breve, folla urbana, caldo e foschia.",
    },
    coruna: {
      name: "A Coruña",
      why: "Sole più alto tra le basi principali, più margine d'orizzonte.",
      risk: "Nubi basse atlantiche, nebbia e strati costieri.",
    },
    palma: {
      name: "Palma · ovest di Maiorca",
      why: "Composizione spettacolare sull'orizzonte marino al tramonto.",
      risk: "Sole a 2°: foschia o qualsiasi ostacolo all'orizzonte è decisivo.",
    },
  },
}

const de: EclipseDictionary = {
  ...en,
  eyebrow: "Interaktiver Guide",
  hubTitle: "Totale Sonnenfinsternis · 12. August 2026",
  hubSubtitle:
    "Erkunde den Totalitätspfad über Spanien, folge der Schatten-Uhr auf der Karte und vergleiche die besten Beobachtungsorte.",
  aboutTitle: "Was ist das?",
  aboutBody:
    "Eine totale Sonnenfinsternis — die erste seit über einem Jahrhundert vom spanischen Festland aus sichtbar. Kurz vor Sonnenuntergang am 12. August 2026 bedeckt der Mond die Sonne vollständig entlang eines Pfades von Galicien bis zu den Balearen und verwandelt den Tag für Sekunden in Dämmerung. Außerhalb dieses Pfades erlebt der Großteil Spaniens eine tiefe partielle Finsternis.",
  checkSubtitle: "Tippe auf die Karte, nutze deinen Standort oder wähle eine Stadt für genaue Zeiten, Sonnenhöhe und ob du in der Totalität bist.",
  checkUseLocation: "Meinen Standort verwenden",
  checkLocating: "Wird lokalisiert…",
  checkGeoError: "Standort nicht verfügbar — tippe auf die Karte.",
  verdictTotal: "Du bist im Totalitätspfad",
  verdictEdge: "Du bist genau am Rand des Pfads",
  verdictPartial: "Hier nur partielle Finsternis",
  verdictSet: "Die Sonne geht vor dem Maximum unter",
  labelObscuration: "Sonne bedeckt",
  labelDirection: "Blick nach",
  labelMagnitude: "Magnitude",
  checkPartialEnds: "Partielle endet",
  checkNote: "Geschätzt aus NASA-Bahnelementen. Bestätige die offiziellen Zeiten deiner Gemeinde in der IGN-Tabelle und schau außerhalb der Totalität nie ohne ISO-12312-2-Schutz in die Sonne.",
  statDate: "Mittwoch · 12. Aug 2026",
  statFirstContact: "Partiell ab ~19:30",
  statTotalityWindow: "Totalität ~20:27–20:33",
  statMaxDuration: "Bis zu 1m 45s Totalität",
  countdownTitle: "Countdown zur Totalität über Spanien",
  countdownNote: "Maximum der Finsternis gegen 20:28–20:32 Ortszeit, tief über dem Westhorizont.",
  countdownPast: "Die Totalität ist vorbei — unten kannst du das Ereignis nacherleben und das nächste planen.",
  days: "Tage",
  hours: "Std",
  minutes: "Min",
  seconds: "Sek",
  mapTitle: "Wo der Schatten entlangzieht",
  mapSubtitle: "Der Mondschatten tritt über Galicien ein und verlässt Spanien über die Balearen — in rund fünf Minuten. Tippe auf einen Marker.",
  bandLabel: "Totalitätspfad (~290 km breit)",
  centerLabel: "Zentrallinie — längste Totalität",
  sweepLabel: "Der Schatten zieht von West nach Ost, ~20:27 bis ~20:32",
  outsideLabel: "Madrid — tiefe partielle Phase, keine Totalität",
  mapDisclaimer:
    "Stilisierte Orientierungskarte. Genaue Grenzen und offizielle Zeiten deiner Gemeinde in der IGN-Tabelle prüfen.",
  spotsTitle: "Die besten Orte im Ranking",
  spotsSubtitle: "Ranking auf Basis der offiziellen IGN-Geometrie und der August-Wolkenklimatologie.",
  detailPartial: "Partielle Phase beginnt",
  detailTotalityBegins: "Totalität beginnt",
  detailMax: "Maximum der Finsternis",
  detailTotalityEnds: "Totalität endet",
  detailSunset: "Sonnenuntergang",
  detailDuration: "Totalität",
  detailAltitude: "Sonnenhöhe",
  detailClimate: "Chance auf klaren Himmel (August-Klimatologie)",
  detailWhy: "Warum hierhin",
  detailRisk: "Hauptrisiko",
  detailGuide: "Zum ausführlichen lokalen Guide",
  approxNote: "~ ungefähre Zeiten — prüfe deine genaue Gemeinde in der offiziellen IGN-Tabelle.",
  spots: {
    palencia: {
      name: "Palencia · Tierra de Campos",
      why: "Beste Gesamtbalance: offene Ebenen und günstige Klimatologie im Landesinneren.",
      risk: "Andrang und noch unbestätigte Logistik der Beobachtungsplätze.",
    },
    leon: {
      name: "Ebene von León",
      why: "Längste Totalität und eine der höchsten Sonnenpositionen im Binnenland.",
      risk: "Bergiger Westhorizont muss vom genauen Standort geprüft werden.",
    },
    aranda: {
      name: "Aranda de Duero",
      why: "Nahe der Zentrallinie, gut erreichbar, in der günstigen Nordmeseta.",
      risk: "Lokales Gelände, Verkehr und wenige bekannte Aussichtspunkte.",
    },
    burgos: {
      name: "Burgos",
      why: "104 Sekunden Totalität von einem gut angebundenen Standort im Norden.",
      risk: "Sonne nur 8° hoch: jeder Hügel oder jedes Gebäude kann die Totalität verdecken.",
    },
    soria: {
      name: "Soria",
      why: "Zentrallinie und offizielle, betreute Beobachtungszonen.",
      risk: "Tiefere Sonne und Quellwolken nahe der Berge.",
    },
    calamocha: {
      name: "Calamocha · Monreal del Campo",
      why: "Günstige Klimatologie Aragóns und offizielle Beobachtungsplätze.",
      risk: "Sehr tiefe Sonne, Hitze, Dunst und Gelände.",
    },
    zaragoza: {
      name: "Saragossa · Ebrotal",
      why: "Geringste mittlere Bewölkung im August und starke Verkehrsanbindung.",
      risk: "Kürzere Totalität, städtischer Andrang, Hitze und Dunst.",
    },
    coruna: {
      name: "A Coruña",
      why: "Höchste Sonne der großen Standorte, mehr Horizontspielraum.",
      risk: "Atlantische tiefe Wolken, Nebel und Küstenschichten.",
    },
    palma: {
      name: "Palma · West-Mallorca",
      why: "Spektakuläre Komposition über dem Meereshorizont bei Sonnenuntergang.",
      risk: "Sonne bei 2°: Dunst oder jedes Hindernis am Horizont ist entscheidend.",
    },
  },
}

const pt: EclipseDictionary = {
  eyebrow: "Guia interativo",
  hubTitle: "Eclipse solar total · 12 de agosto de 2026",
  hubSubtitle:
    "Explore a faixa de totalidade pela Espanha, acompanhe o relógio da sombra no mapa e compare os melhores locais para observar.",
  aboutTitle: "O que é?",
  aboutBody:
    "Um eclipse solar total — o primeiro visível da Espanha continental em mais de um século. Perto do pôr do sol de 12 de agosto de 2026, a Lua cobre totalmente o Sol ao longo de uma faixa que vai da Galiza às Ilhas Baleares, transformando o dia em penumbra por alguns segundos. Fora dessa faixa, a maior parte da Espanha vê um eclipse parcial profundo.",
  checkSubtitle:
    "Toque no mapa, use sua localização ou escolha uma cidade para ver horários exatos, a altura do Sol e se você está dentro da totalidade.",
  checkUseLocation: "Usar minha localização",
  checkLocating: "Localizando…",
  checkGeoError: "Não foi possível obter sua localização — toque no mapa.",
  verdictTotal: "Você está na faixa de totalidade",
  verdictEdge: "Você está bem na borda da faixa",
  verdictPartial: "Aqui só haverá eclipse parcial",
  verdictSet: "O Sol se põe antes do máximo",
  labelObscuration: "Sol coberto",
  labelDirection: "Olhe para",
  labelMagnitude: "Magnitude",
  checkPartialEnds: "Fim do parcial",
  checkNote:
    "Estimado a partir dos elementos orbitais da NASA. Confirme os horários oficiais do seu município na tabela do IGN e nunca olhe para o Sol sem proteção ISO 12312-2 fora da totalidade.",
  statDate: "Qua · 12 ago 2026",
  statFirstContact: "Parcial começa ~19:30",
  statTotalityWindow: "Totalidade ~20:27–20:33",
  statMaxDuration: "Até 1m 45s de totalidade",
  countdownTitle: "Contagem regressiva para a totalidade na Espanha",
  countdownNote: "Máximo do eclipse por volta das 20:28–20:32 (hora local), baixo sobre o horizonte oeste.",
  countdownPast: "A totalidade já passou — reviva o evento e planeje o próximo abaixo.",
  days: "dias",
  hours: "horas",
  minutes: "min",
  seconds: "seg",
  mapTitle: "Por onde passa a sombra",
  mapSubtitle:
    "A sombra da Lua entra pela Galiza e sai pelas Ilhas Baleares em cerca de cinco minutos. Toque num marcador para inspecioná-lo.",
  bandLabel: "Faixa de totalidade (~290 km de largura)",
  centerLabel: "Linha central — totalidade mais longa",
  sweepLabel: "A sombra varre de oeste para leste, ~20:27 a ~20:32",
  outsideLabel: "Madri — parcial profundo, sem totalidade",
  mapDisclaimer:
    "Mapa estilizado para orientação. Confirme os limites exatos e os horários oficiais do seu município na tabela de eclipses do IGN.",
  spotsTitle: "Os melhores locais, classificados",
  spotsSubtitle: "Classificação baseada na geometria oficial do IGN e na climatologia de nuvens de agosto.",
  detailPartial: "Início do eclipse parcial",
  detailTotalityBegins: "Início da totalidade",
  detailMax: "Máximo do eclipse",
  detailTotalityEnds: "Fim da totalidade",
  detailSunset: "Pôr do sol",
  detailDuration: "Totalidade",
  detailAltitude: "Altura do Sol",
  detailClimate: "Chance de céu limpo (climatologia de agosto)",
  detailWhy: "Por que escolher",
  detailRisk: "Risco principal",
  detailGuide: "Ler o guia local completo",
  approxNote: "~ horários aproximados — confirme seu município exato na tabela oficial do IGN.",
  spots: {
    palencia: {
      name: "Palencia · Tierra de Campos",
      why: "Melhor equilíbrio geral: planícies abertas e climatologia interior favorável.",
      risk: "Aglomeração e logística dos pontos de observação ainda não confirmada.",
    },
    leon: {
      name: "Planície de León",
      why: "A totalidade mais longa e uma das maiores alturas do Sol no interior.",
      risk: "Verifique o horizonte montanhoso a oeste a partir do seu ponto exato.",
    },
    aranda: {
      name: "Aranda de Duero",
      why: "Perto da linha central, acessível e dentro da favorável Meseta norte.",
      risk: "Relevo local, tráfego e poucos miradouros conhecidos.",
    },
    burgos: {
      name: "Burgos",
      why: "104 segundos de totalidade a partir de uma base norte bem conectada.",
      risk: "Sol a apenas 8°: qualquer colina ou edifício pode bloquear a totalidade.",
    },
    soria: {
      name: "Soria",
      why: "Geometria de linha central e áreas oficiais de observação com serviços.",
      risk: "Sol mais baixo e nuvens convectivas perto das montanhas.",
    },
    calamocha: {
      name: "Calamocha · Monreal del Campo",
      why: "Climatologia favorável de Aragão e pontos oficiais de observação.",
      risk: "Sol muito baixo, calor, névoa e relevo.",
    },
    zaragoza: {
      name: "Saragoça · vale do Ebro",
      why: "A menor nebulosidade média de agosto e grande capacidade de transporte.",
      risk: "Totalidade mais curta, aglomeração urbana, calor e névoa.",
    },
    coruna: {
      name: "A Corunha",
      why: "O Sol mais alto das principais bases, com mais margem de horizonte.",
      risk: "Nuvens baixas atlânticas, nevoeiro e camadas costeiras.",
    },
    palma: {
      name: "Palma · oeste de Maiorca",
      why: "Composição dramática com horizonte marítimo ao pôr do sol.",
      risk: "Sol a 2°: névoa ou qualquer obstáculo no horizonte é decisivo.",
    },
  },
}

const zh: EclipseDictionary = {
  eyebrow: "互动指南",
  hubTitle: "日全食 · 2026年8月12日",
  hubSubtitle: "探索横跨西班牙的全食带，在地图上跟随阴影的时钟，并比较最佳观测地点。",
  aboutTitle: "这是什么？",
  aboutBody:
    "一次日全食——一个多世纪以来西班牙本土首次可见。2026年8月12日临近日落时，月球沿着一条从加利西亚到巴利阿里群岛的路径完全遮住太阳，短暂地将白昼变为暮色。在这条带之外，西班牙大部分地区只能看到很深的日偏食。",
  checkSubtitle: "点击地图、使用你的定位或选择一座城市，即可获取精确时间、太阳高度以及你是否处于全食带内。",
  checkUseLocation: "使用我的定位",
  checkLocating: "定位中…",
  checkGeoError: "无法获取你的定位——请点击地图。",
  verdictTotal: "你在全食带内",
  verdictEdge: "你正好在全食带边缘",
  verdictPartial: "这里只能看到日偏食",
  verdictSet: "太阳在食甚之前落下",
  labelObscuration: "太阳被遮",
  labelDirection: "朝向",
  labelMagnitude: "食分",
  checkPartialEnds: "偏食结束",
  checkNote:
    "根据 NASA 轨道要素估算。请在 IGN 表格中确认你所在市镇的官方时间；在全食阶段之外，切勿在没有 ISO 12312-2 防护的情况下直视太阳。",
  statDate: "周三 · 2026年8月12日",
  statFirstContact: "偏食开始 ~19:30",
  statTotalityWindow: "全食 ~20:27–20:33",
  statMaxDuration: "全食最长约1分45秒",
  countdownTitle: "西班牙全食倒计时",
  countdownNote: "食甚约在当地时间 20:28–20:32，太阳很低，位于西方地平线附近。",
  countdownPast: "全食已经过去——在下方回顾此次事件并规划下一次。",
  days: "天",
  hours: "小时",
  minutes: "分",
  seconds: "秒",
  mapTitle: "阴影经过的路径",
  mapSubtitle: "月球的阴影从加利西亚进入，约五分钟后从巴利阿里群岛离开。点击标记即可查看。",
  bandLabel: "全食带（宽约290公里）",
  centerLabel: "中心线——全食最长",
  sweepLabel: "阴影自西向东扫过，~20:27 至 ~20:32",
  outsideLabel: "马德里——深度偏食，无全食",
  mapDisclaimer: "示意地图仅供定位参考。请在 IGN 日食表中确认精确边界和你所在市镇的官方时间。",
  spotsTitle: "最佳地点排行",
  spotsSubtitle: "结合 IGN 官方几何数据与八月云量气候的研究排名。",
  detailPartial: "偏食开始",
  detailTotalityBegins: "全食开始",
  detailMax: "食甚",
  detailTotalityEnds: "全食结束",
  detailSunset: "日落",
  detailDuration: "全食时长",
  detailAltitude: "太阳高度",
  detailClimate: "晴空概率（八月气候）",
  detailWhy: "推荐理由",
  detailRisk: "主要风险",
  detailGuide: "阅读完整本地指南",
  approxNote: "~ 为近似时间——请在 IGN 官方表格中确认你所在的确切市镇。",
  spots: {
    palencia: {
      name: "帕伦西亚 · 坎波斯地区",
      why: "综合最佳：开阔平原，内陆气候有利。",
      risk: "人群拥挤，观测点安排尚未确定。",
    },
    leon: {
      name: "莱昂平原",
      why: "此处全食最长，且太阳高度在内陆中数一数二。",
      risk: "需从你的确切地点核查西面的山脉地平线。",
    },
    aranda: {
      name: "阿兰达德杜埃罗",
      why: "靠近中心线，交通便利，位于有利的北梅塞塔。",
      risk: "当地地形、交通，且知名观景点不多。",
    },
    burgos: {
      name: "布尔戈斯",
      why: "从交通便利的北部基地可获约104秒全食。",
      risk: "太阳仅8°：任何山丘或建筑都可能遮挡全食。",
    },
    soria: {
      name: "索里亚",
      why: "中心线几何，配有官方服务观测区。",
      risk: "太阳较低，山区附近有对流云。",
    },
    calamocha: {
      name: "卡拉莫查 · 蒙雷亚尔德尔坎波",
      why: "阿拉贡气候有利，设有官方观测点。",
      risk: "太阳很低，炎热、雾霾且地形复杂。",
    },
    zaragoza: {
      name: "萨拉戈萨 · 埃布罗河谷",
      why: "八月平均云量最低，运输能力强。",
      risk: "全食较短，城市拥挤，炎热且有雾霾。",
    },
    coruna: {
      name: "拉科鲁尼亚",
      why: "主要基地中太阳最高，地平线余量更大。",
      risk: "大西洋低云、雾和沿海云层。",
    },
    palma: {
      name: "帕尔马 · 马略卡岛西部",
      why: "日落时以海平线为背景的壮观构图。",
      risk: "太阳仅2°：雾霾或任何地平线障碍都很关键。",
    },
  },
}

const dictionaries: Partial<Record<Locale, EclipseDictionary>> = { en, es, fr, it, de, pt, zh }

export function getEclipseDictionary(locale: Locale): EclipseDictionary {
  return dictionaries[locale] ?? en
}
