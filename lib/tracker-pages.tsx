import type { Metadata } from "next"

import { SeoFeaturePage } from "@/components/seo-feature-page"
import { Locale } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/metadata"

export const trackerPageSlugs = ["sun-tracker-app", "moon-tracker-app", "star-tracker-app"] as const
export type TrackerPageSlug = (typeof trackerPageSlugs)[number]

type TrackerPageContent = {
  title: string
  description: string
  eyebrow: string
  primaryKeyword: string
  heroAlt: string
  benefits: string[]
  useCases: string[]
  faqs: Array<{ question: string; answer: string }>
  relatedLinks: Array<{ href: string; label: string }>
}

const content: Record<Locale, Record<TrackerPageSlug, TrackerPageContent>> = {
  en: {
    "sun-tracker-app": {
      title: "Sun Tracker App with Map, 3D Terrain and AR Sun Path",
      description: "Track the Sun's direction, altitude, path, sunrise and sunset from any location using map, 3D terrain and augmented reality planning tools.",
      eyebrow: "Sun Path Planning",
      primaryKeyword: "Sun Tracker App",
      heroAlt: "Solora Sun tracker with map and augmented reality path views",
      benefits: ["Follow the Sun's direction and altitude across a selected date.", "Switch between map and AR views and inspect terrain in 2D or realistic 3D.", "Combine the solar path with cloud, visibility, sunrise, sunset and twilight context.", "Move the planning point on the map when scouting a composition away from your current location."],
      useCases: ["Plan where the Sun will appear behind a mountain, building or landscape subject.", "Scout sunrise, sunset, eclipse and golden-hour compositions.", "Compare candidate locations before driving or hiking."],
      faqs: [
        { question: "Does Solora show the Sun path in augmented reality?", answer: "Yes. The implemented Sun tracker includes map and AR views for exploring the Sun's path from the selected place and date." },
        { question: "Can I inspect terrain around the location?", answer: "Yes. The map supports standard, satellite and hybrid styles, including flat and realistic elevation modes." },
        { question: "Is the Sun tracker only for photographers?", answer: "No. It is also useful for eclipse planning, outdoor events, travel, property light checks and general sky observation." },
      ],
      relatedLinks: [{ href: "/sunrise-sunset-app", label: "Sunrise & Sunset App" }, { href: "/golden-hour-photography-app", label: "Golden Hour Planner" }, { href: "/blog/total-solar-eclipse-august-2026", label: "Spain Eclipse 2026 Guide" }],
    },
    "moon-tracker-app": {
      title: "Moon Tracker App with Moon Path, Map and Augmented Reality",
      description: "Track the Moon's direction and path with map and AR views, then combine it with moon phase, illumination, moonrise and moonset planning.",
      eyebrow: "Moon Path Planning",
      primaryKeyword: "Moon Tracker App",
      heroAlt: "Solora Moon tracker showing lunar path planning",
      benefits: ["Preview the Moon's path, direction and position for a selected date and location.", "Switch between map and AR views when scouting a moonrise or moonset composition.", "Combine path planning with phase, illumination, rise and set times.", "Move the observation point to compare foreground alignments from nearby locations."],
      useCases: ["Plan a full Moon behind a skyline, mountain, lighthouse or landmark.", "Find dark windows for Milky Way and meteor photography.", "Prepare moonrise, moonset and lunar-eclipse observation."],
      faqs: [
        { question: "Can Solora show where the Moon will rise?", answer: "Yes. Solora combines lunar timing and forecast data with map and AR path tools for location-based planning." },
        { question: "Does it include Moon illumination?", answer: "Yes. Moon phase, illumination, moonrise and moonset are part of the broader planning workflow." },
        { question: "Can I plan for another location?", answer: "Yes. Solora supports saved and selected locations rather than limiting planning to the device's current position." },
      ],
      relatedLinks: [{ href: "/moon-phase-calendar-app", label: "Moon Phase Calendar" }, { href: "/milky-way-planner", label: "Milky Way Planner" }, { href: "/blog/moon-photography-calendar-2026", label: "2026 Moon Photography Calendar" }],
    },
    "star-tracker-app": {
      title: "Star Tracker App for Planets, Galaxies and Deep-Sky Objects",
      description: "Search and track stars, planets, galaxies, nebulae, clusters and meteor-shower radiants using location-aware map paths and augmented reality.",
      eyebrow: "Celestial Object Tracking",
      primaryKeyword: "Star Tracker App",
      heroAlt: "Solora star tracker for stars planets galaxies and deep sky objects",
      benefits: ["Search a catalog of bright stars, Solar System planets, Messier objects and meteor-shower radiants.", "See current direction, altitude, horizon status and the object's track through the night.", "Switch between a projected sky map and AR view for location-aware observation.", "Use aliases, categories, constellations and object details to find the intended target."],
      useCases: ["Locate Polaris, Sirius, Vega and other bright stars.", "Plan observations of Mercury through Pluto and major conjunctions.", "Find Andromeda, Orion Nebula, Pleiades and other deep-sky targets.", "Identify the radiant direction for annual meteor showers."],
      faqs: [
        { question: "Which objects can the Solora tracker find?", answer: "The implemented catalog includes planets, bright stars, galaxies, nebulae, star clusters and major meteor-shower radiants." },
        { question: "Does the tracker work for past or future dates?", answer: "The tracker calculates positions and nightly tracks for the selected date, observation location and timezone." },
        { question: "Is AR available on every device?", answer: "AR requires a compatible device with world-tracking support. The map view remains available when AR is unsupported." },
      ],
      relatedLinks: [{ href: "/milky-way-planner", label: "Milky Way Planner" }, { href: "/moon-tracker-app", label: "Moon Tracker" }, { href: "/blog/astronomical-events-2026", label: "Astronomical Events 2026" }],
    },
  },
  es: {
    "sun-tracker-app": {
      title: "Tracker solar con mapa, terreno 3D y trayectoria del Sol en AR",
      description: "Sigue dirección, altura y trayectoria del Sol desde cualquier ubicación con mapa, terreno 3D, realidad aumentada, amanecer y atardecer.",
      eyebrow: "Planificación de trayectoria solar",
      primaryKeyword: "Tracker solar",
      heroAlt: "Tracker solar de Solora con mapa y realidad aumentada",
      benefits: ["Sigue dirección y altura del Sol para una fecha seleccionada.", "Alterna entre mapa y AR y explora el terreno en 2D o 3D realista.", "Combina trayectoria solar con nubes, visibilidad, amanecer, atardecer y crepúsculos.", "Mueve el punto de planificación en el mapa para explorar composiciones."],
      useCases: ["Planificar el Sol detrás de montañas, edificios o sujetos del paisaje.", "Explorar composiciones de amanecer, atardecer, eclipse y hora dorada.", "Comparar ubicaciones antes de conducir o caminar."],
      faqs: [
        { question: "¿Solora muestra la trayectoria del Sol en realidad aumentada?", answer: "Sí. El tracker solar implementado incluye vistas de mapa y AR para la ubicación y fecha seleccionadas." },
        { question: "¿Puedo revisar el terreno?", answer: "Sí. El mapa incluye estilos estándar, satélite e híbrido, además de elevación plana y 3D realista." },
        { question: "¿Solo sirve para fotografía?", answer: "No. También ayuda con eclipses, eventos, viajes, luz en exteriores y observación general." },
      ],
      relatedLinks: [{ href: "/sunrise-sunset-app", label: "App de amanecer y atardecer" }, { href: "/golden-hour-photography-app", label: "Planificador de hora dorada" }, { href: "/blog/total-solar-eclipse-august-2026", label: "Guía del eclipse de España 2026" }],
    },
    "moon-tracker-app": {
      title: "Tracker lunar con trayectoria de la Luna, mapa y realidad aumentada",
      description: "Sigue dirección y trayectoria de la Luna con mapa y AR junto a fase, iluminación, salida y puesta lunar.",
      eyebrow: "Planificación de trayectoria lunar",
      primaryKeyword: "Tracker lunar",
      heroAlt: "Tracker lunar de Solora para planificar la trayectoria de la Luna",
      benefits: ["Previsualiza trayectoria, dirección y posición lunar para fecha y ubicación.", "Alterna entre mapa y AR al explorar una composición de salida o puesta lunar.", "Combina la trayectoria con fase, iluminación y horarios lunares.", "Mueve el punto de observación para comparar alineaciones con el primer plano."],
      useCases: ["Planificar una Luna llena tras un skyline, montaña, faro o monumento.", "Encontrar ventanas oscuras para Vía Láctea y meteoros.", "Preparar salidas, puestas y eclipses lunares."],
      faqs: [
        { question: "¿Puede Solora mostrar por dónde saldrá la Luna?", answer: "Sí. Solora combina horarios lunares con herramientas de trayectoria en mapa y AR." },
        { question: "¿Incluye iluminación lunar?", answer: "Sí. Fase, iluminación, salida y puesta forman parte de la planificación." },
        { question: "¿Puedo planificar otra ubicación?", answer: "Sí. Solora permite trabajar con ubicaciones guardadas y seleccionadas." },
      ],
      relatedLinks: [{ href: "/moon-phase-calendar-app", label: "Calendario lunar" }, { href: "/milky-way-planner", label: "Planificador de la Vía Láctea" }, { href: "/blog/moon-photography-calendar-2026", label: "Calendario fotográfico lunar 2026" }],
    },
    "star-tracker-app": {
      title: "Tracker de estrellas, planetas, galaxias y cielo profundo",
      description: "Busca y sigue estrellas, planetas, galaxias, nebulosas, cúmulos y radiantes de meteoros con mapa y realidad aumentada.",
      eyebrow: "Seguimiento de objetos celestes",
      primaryKeyword: "Tracker de estrellas",
      heroAlt: "Tracker de Solora para estrellas planetas galaxias y cielo profundo",
      benefits: ["Busca estrellas brillantes, planetas, objetos Messier y radiantes de meteoros.", "Consulta dirección, altura, estado sobre el horizonte y trayectoria nocturna.", "Alterna entre mapa celeste proyectado y vista AR según la ubicación.", "Usa alias, categorías, constelaciones y detalles para localizar el objetivo."],
      useCases: ["Localizar Polaris, Sirius, Vega y otras estrellas.", "Planificar observación de Mercurio a Plutón y conjunciones.", "Encontrar Andrómeda, Nebulosa de Orión, Pléyades y otros objetos.", "Identificar el radiante de lluvias de meteoros."],
      faqs: [
        { question: "¿Qué objetos puede encontrar?", answer: "El catálogo implementado incluye planetas, estrellas, galaxias, nebulosas, cúmulos y radiantes de las principales lluvias de meteoros." },
        { question: "¿Funciona para fechas futuras?", answer: "Calcula posiciones y trayectorias para la fecha, ubicación y zona horaria seleccionadas." },
        { question: "¿AR funciona en todos los dispositivos?", answer: "AR requiere un dispositivo compatible con seguimiento del mundo. El mapa sigue disponible cuando AR no es compatible." },
      ],
      relatedLinks: [{ href: "/milky-way-planner", label: "Planificador de la Vía Láctea" }, { href: "/moon-tracker-app", label: "Tracker lunar" }, { href: "/blog/astronomical-events-2026", label: "Eventos astronómicos 2026" }],
    },
  },
  fr: {} as Record<TrackerPageSlug, TrackerPageContent>,
  it: {} as Record<TrackerPageSlug, TrackerPageContent>,
  de: {} as Record<TrackerPageSlug, TrackerPageContent>,
  pt: {} as Record<TrackerPageSlug, TrackerPageContent>,
  zh: {} as Record<TrackerPageSlug, TrackerPageContent>,
}

for (const locale of ["fr", "it", "de", "pt", "zh"] as const) {
  content[locale] = content.en
}

const heroImages: Record<TrackerPageSlug, string> = {
  "sun-tracker-app": "/screenshot-3.jpg",
  "moon-tracker-app": "/moon-phases-night-sky-photography.png",
  "star-tracker-app": "/milky-way-galaxy-night-sky-photography.png",
}

export function getTrackerPageContent(slug: TrackerPageSlug, locale: Locale) {
  return content[locale][slug]
}

export function buildTrackerPageMetadata(locale: Locale, slug: TrackerPageSlug): Metadata {
  const page = getTrackerPageContent(slug, locale)
  return buildPageMetadata({
    locale,
    path: `/${slug}`,
    title: page.title,
    description: page.description,
    ogImage: heroImages[slug],
    ogImageAlt: page.heroAlt,
  })
}

export function renderTrackerPage(locale: Locale, slug: TrackerPageSlug) {
  const page = getTrackerPageContent(slug, locale)
  return (
    <SeoFeaturePage
      locale={locale}
      slug={slug}
      title={page.title}
      eyebrow={page.eyebrow}
      description={page.description}
      heroImage={heroImages[slug]}
      heroAlt={page.heroAlt}
      primaryKeyword={page.primaryKeyword}
      benefits={page.benefits}
      useCases={page.useCases}
      faqs={page.faqs}
      relatedLinks={page.relatedLinks}
    />
  )
}
