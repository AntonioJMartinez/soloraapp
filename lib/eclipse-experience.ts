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
  navMap: string
  navSpots: string
  navArticle: string
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
  scrubHint: string
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
  navMap: "Path map",
  navSpots: "Best places",
  navArticle: "Full guide",
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
  scrubHint: "Move your finger or cursor across the map to scrub the shadow's clock.",
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
  navMap: "Mapa de la franja",
  navSpots: "Mejores lugares",
  navArticle: "Guía completa",
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
  scrubHint: "Desliza el dedo o el cursor por el mapa para mover el reloj de la sombra.",
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
  navMap: "Carte de la bande",
  navSpots: "Meilleurs lieux",
  navArticle: "Guide complet",
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
  scrubHint: "Glissez le doigt ou le curseur sur la carte pour déplacer l'horloge de l'ombre.",
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
  navMap: "Mappa della fascia",
  navSpots: "Posti migliori",
  navArticle: "Guida completa",
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
  scrubHint: "Scorri il dito o il cursore sulla mappa per muovere l'orologio dell'ombra.",
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
  navMap: "Pfadkarte",
  navSpots: "Beste Orte",
  navArticle: "Kompletter Guide",
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
  scrubHint: "Bewege Finger oder Cursor über die Karte, um die Schatten-Uhr zu steuern.",
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

const dictionaries: Partial<Record<Locale, EclipseDictionary>> = { en, es, fr, it, de }

export function getEclipseDictionary(locale: Locale): EclipseDictionary {
  return dictionaries[locale] ?? en
}
