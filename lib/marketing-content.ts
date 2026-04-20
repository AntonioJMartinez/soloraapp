import { Locale } from "@/lib/i18n"

type AuthoredLocale = Exclude<Locale, "pt" | "zh">

export const featurePageSlugs = [
  "sunrise-sunset-app",
  "golden-hour-photography-app",
  "moon-phase-calendar-app",
  "aurora-forecast-app",
  "milky-way-planner",
] as const

export type FeaturePageSlug = (typeof featurePageSlugs)[number]
export type TopLevelSlug = FeaturePageSlug | "press-kit"

export function isFeaturePageSlug(value: string): value is FeaturePageSlug {
  return featurePageSlugs.includes(value as FeaturePageSlug)
}

export type UiDictionary = {
  navFeatures: string
  navBlog: string
  navPressKit: string
  navDownload: string
  navHome: string
  languageLabel: string
  backToBlog: string
  relatedGuides: string
  readMore: string
  readFullArticle: string
  downloadSolora: string
  downloadOnAppStore: string
  availableOnAppStore: string
  allRightsReserved: string
  freeDownload: string
  iosPlatformsShort: string
  iosPlatformsLong: string
  planTheSky: string
}

type HomeContent = {
  title: string
  description: string
  heroHeadingLine1: string
  heroHeadingLine2: string
  heroBody: string
  heroSubbody: string
  ratingLabel: string
  planningCards: Array<{ badge: string; title: string; body: string }>
  featuresBadge: string
  featuresHeading: string
  featuresHeadingAccent: string
  featuresDescription: string
  features: Array<{ title: string; description: string }>
  clustersBadge: string
  clustersHeading: string
  clustersDescription: string
  clustersCta: string
  evergreenBadge: string
  evergreenHeading: string
  evergreenDescription: string
  evergreenCta: string
  downloadHeading: string
  downloadBody: string
}

type BlogIndexContent = {
  title: string
  description: string
  badge: string
  featuredHeading: string
  allHeading: string
  ctaHeading: string
  ctaDescription: string
}

type PressKitContent = {
  title: string
  description: string
  heroBadge: string
  heroHeading: string
  heroHeadingAccent: string
  heroBody: string
  aboutHeading: string
  aboutBody: string[]
  aboutTags: string[]
  whatsNewBadge: string
  whatsNewHeading: string
  whatsNewBody: string
  features: Array<{ title: string; body: string }>
  resourcesHeading: string
  resourcesBody: string
  resourceCards: Array<{ title: string; description: string; href: string; download?: string }>
  downloadHeading: string
  downloadBody: string
}

export type FeaturePageContent = {
  title: string
  description: string
  eyebrow: string
  primaryKeyword: string
  heroAlt: string
  benefits: string[]
  useCases: string[]
  faqs: Array<{ question: string; answer: string }>
  relatedLinks: FeaturePageSlug[]
}

export const uiDictionary: Record<AuthoredLocale, UiDictionary> = {
  en: {
    navFeatures: "Features",
    navBlog: "Blog",
    navPressKit: "Press Kit",
    navDownload: "Download",
    navHome: "Home",
    languageLabel: "Language",
    backToBlog: "Back to Blog",
    relatedGuides: "Related Guides",
    readMore: "Read More",
    readFullArticle: "Read Full Article",
    downloadSolora: "Download Solora",
    downloadOnAppStore: "Download on the App Store",
    availableOnAppStore: "Available on App Store",
    allRightsReserved: "All rights reserved",
    freeDownload: "Free Download",
    iosPlatformsShort: "iOS & iPad",
    iosPlatformsLong: "iOS, watchOS, iPadOS, macOS",
    planTheSky: "Plan the sky, perfect the moment",
  },
  es: {
    navFeatures: "Funciones",
    navBlog: "Blog",
    navPressKit: "Prensa",
    navDownload: "Descargar",
    navHome: "Inicio",
    languageLabel: "Idioma",
    backToBlog: "Volver al blog",
    relatedGuides: "Guías relacionadas",
    readMore: "Leer más",
    readFullArticle: "Leer el artículo completo",
    downloadSolora: "Descargar Solora",
    downloadOnAppStore: "Descargar en App Store",
    availableOnAppStore: "Disponible en App Store",
    allRightsReserved: "Todos los derechos reservados",
    freeDownload: "Descarga gratis",
    iosPlatformsShort: "iOS y iPad",
    iosPlatformsLong: "iOS, watchOS, iPadOS, macOS",
    planTheSky: "Planifica el cielo, perfecciona el momento",
  },
  fr: {
    navFeatures: "Fonctionnalités",
    navBlog: "Blog",
    navPressKit: "Presse",
    navDownload: "Télécharger",
    navHome: "Accueil",
    languageLabel: "Langue",
    backToBlog: "Retour au blog",
    relatedGuides: "Guides associés",
    readMore: "Lire la suite",
    readFullArticle: "Lire l’article complet",
    downloadSolora: "Télécharger Solora",
    downloadOnAppStore: "Télécharger sur l’App Store",
    availableOnAppStore: "Disponible sur l’App Store",
    allRightsReserved: "Tous droits réservés",
    freeDownload: "Téléchargement gratuit",
    iosPlatformsShort: "iOS et iPad",
    iosPlatformsLong: "iOS, watchOS, iPadOS, macOS",
    planTheSky: "Planifiez le ciel, perfectionnez l’instant",
  },
  it: {
    navFeatures: "Funzioni",
    navBlog: "Blog",
    navPressKit: "Press kit",
    navDownload: "Scarica",
    navHome: "Home",
    languageLabel: "Lingua",
    backToBlog: "Torna al blog",
    relatedGuides: "Guide correlate",
    readMore: "Leggi di più",
    readFullArticle: "Leggi l’articolo completo",
    downloadSolora: "Scarica Solora",
    downloadOnAppStore: "Scarica su App Store",
    availableOnAppStore: "Disponibile su App Store",
    allRightsReserved: "Tutti i diritti riservati",
    freeDownload: "Download gratuito",
    iosPlatformsShort: "iOS e iPad",
    iosPlatformsLong: "iOS, watchOS, iPadOS, macOS",
    planTheSky: "Pianifica il cielo, perfeziona l’attimo",
  },
  de: {
    navFeatures: "Funktionen",
    navBlog: "Blog",
    navPressKit: "Presse",
    navDownload: "Download",
    navHome: "Start",
    languageLabel: "Sprache",
    backToBlog: "Zurück zum Blog",
    relatedGuides: "Verwandte Guides",
    readMore: "Weiterlesen",
    readFullArticle: "Artikel lesen",
    downloadSolora: "Solora laden",
    downloadOnAppStore: "Im App Store laden",
    availableOnAppStore: "Im App Store verfügbar",
    allRightsReserved: "Alle Rechte vorbehalten",
    freeDownload: "Kostenloser Download",
    iosPlatformsShort: "iOS und iPad",
    iosPlatformsLong: "iOS, watchOS, iPadOS, macOS",
    planTheSky: "Plane den Himmel, perfektioniere den Moment",
  },
}

export const homeContent: Record<AuthoredLocale, HomeContent> = {
  en: {
    title: "Solora | Sunrise, Sunset, Moon Phase and Aurora Forecast App",
    description:
      "Plan sunrise, sunset, golden hour, moon phases, aurora forecasts, Milky Way visibility, tides, and major astronomical events with Solora.",
    heroHeadingLine1: "Plan the sky,",
    heroHeadingLine2: "perfect the moment",
    heroBody:
      "Solora is a sunrise and sunset app, golden hour planner, moon phase calendar, aurora forecast tracker, and Milky Way planning tool built for photographers and sky watchers.",
    heroSubbody:
      "Check cloud cover, visibility, moonlight, tides, meteor showers, eclipses, and night-sky conditions before you drive, hike, travel, or set up your camera.",
    ratingLabel: "+1000 ratings",
    planningCards: [
      {
        badge: "Who Solora Is For",
        title: "Built for photographers, stargazers, aurora hunters, and outdoor planners",
        body: "Use Solora to plan sunrise shoots, sunset landscapes, moonrise compositions, northern lights trips, Milky Way nights, meteor shower sessions, eclipse viewing, and coastal photography with tide-aware timing.",
      },
      {
        badge: "What You Can Plan",
        title: "One app for golden hour, moon phases, aurora forecasts, and major sky events",
        body: "Compare locations worldwide, track weather and visibility, preview solar and lunar paths, and get alerts for the moments that matter most to your next outdoor or astrophotography session.",
      },
    ],
    featuresBadge: "Powerful Features",
    featuresHeading: "Everything for",
    featuresHeadingAccent: "Perfect Timing",
    featuresDescription:
      "Advanced astronomical calculations, beautiful visualizations, and smart notifications to help you capture nature's most spectacular moments.",
    features: [
      { title: "Complete Sky & Weather Forecasts Anywhere", description: "Complete forecasts for clouds, rain, wind, visibility, and temperature anywhere you shoot." },
      { title: "Personalized forecast summaries", description: "Personalized sunrise, sunset, and night-sky visibility summaries so you can plan the best moments in advance." },
      { title: "Track the Sun, Moon, and Milky Way", description: "See Sun, Moon, and Milky Way positions and alignments in AR to plan stronger compositions." },
      { title: "Track lunar cycles with precision", description: "Next phases, rise and set times, and illumination for precise planning." },
      { title: "Stay on top of astronomical events", description: "Upcoming eclipses, meteor showers, supermoons, and planetary events in one place." },
      { title: "Smart alerts that match your plans", description: "Alerts for golden hour, moonrise, tides, events, daily summaries, and nearby conditions." },
      { title: "Every forecast at a glance", description: "Widgets and Apple Watch support for quick access from Home Screen, Lock Screen, and Watch." },
      { title: "Track and compare worldwide locations", description: "Unlimited locations with quick switching to compare favorite spots anywhere in the world." },
      { title: "Marine & tides for coastal planning", description: "Tide timing and wave conditions for coastal shoots and water-based planning." },
    ],
    clustersBadge: "Planning Guides",
    clustersHeading: "Explore the core planning problems Solora solves",
    clustersDescription:
      "These pages target the practical searches people use before they download an astronomy planning app.",
    clustersCta: "Explore this guide",
    evergreenBadge: "Evergreen Content",
    evergreenHeading: "Start with the guides that answer the biggest planning questions",
    evergreenDescription:
      "Homepage links point directly to Solora's strongest evergreen topics to pass authority into high-intent content.",
    evergreenCta: "Read the guide",
    downloadHeading: "Never miss a good sky moment",
    downloadBody: "Download now and start planning with the best AI forecasts.",
  },
  es: {
    title: "Solora | App de amanecer, atardecer, fases lunares y aurora",
    description:
      "Planifica amaneceres, atardeceres, hora dorada, fases lunares, auroras, visibilidad de la Vía Láctea, mareas y grandes eventos astronómicos con Solora.",
    heroHeadingLine1: "Planifica el cielo,",
    heroHeadingLine2: "perfecciona el momento",
    heroBody:
      "Solora es una app de amanecer y atardecer, planificador de hora dorada, calendario lunar, previsión de auroras y herramienta de planificación de la Vía Láctea pensada para fotógrafos y observadores del cielo.",
    heroSubbody:
      "Consulta nubosidad, visibilidad, luz lunar, mareas, lluvias de meteoros, eclipses y condiciones nocturnas antes de conducir, caminar, viajar o montar tu cámara.",
    ratingLabel: "+1000 valoraciones",
    planningCards: [
      {
        badge: "Para quién es Solora",
        title: "Hecha para fotógrafos, observadores del cielo, cazadores de auroras y aventureros",
        body: "Usa Solora para planificar fotos al amanecer, paisajes al atardecer, composiciones con salida de la luna, viajes para auroras, noches de Vía Láctea, lluvias de meteoros, eclipses y fotografía costera con mareas.",
      },
      {
        badge: "Qué puedes planificar",
        title: "Una sola app para hora dorada, fases lunares, auroras y grandes eventos astronómicos",
        body: "Compara lugares en todo el mundo, sigue tiempo y visibilidad, previsualiza trayectorias solares y lunares y recibe alertas para los momentos que más importan.",
      },
    ],
    featuresBadge: "Funciones potentes",
    featuresHeading: "Todo para el",
    featuresHeadingAccent: "timing perfecto",
    featuresDescription:
      "Cálculos astronómicos avanzados, visualizaciones cuidadas y notificaciones inteligentes para ayudarte a capturar los momentos más espectaculares de la naturaleza.",
    features: [
      { title: "Previsión completa del cielo y del tiempo", description: "Previsiones completas de nubes, lluvia, viento, visibilidad y temperatura dondequiera que fotografíes." },
      { title: "Resúmenes personalizados de previsión", description: "Resúmenes personalizados de amanecer, atardecer y visibilidad nocturna para planificar con antelación." },
      { title: "Sigue Sol, Luna y Vía Láctea", description: "Consulta posiciones y alineaciones en AR para planificar mejores composiciones." },
      { title: "Control preciso del ciclo lunar", description: "Próximas fases, horas de salida y puesta e iluminación para una planificación precisa." },
      { title: "Mantente al día con los eventos astronómicos", description: "Eclipses, lluvias de meteoros, superlunas y eventos planetarios en un solo lugar." },
      { title: "Alertas inteligentes según tu plan", description: "Alertas de hora dorada, salida de la luna, mareas, eventos, resúmenes diarios y condiciones cercanas." },
      { title: "Todo a simple vista", description: "Widgets y Apple Watch para acceso rápido desde la pantalla de inicio, bloqueo y reloj." },
      { title: "Sigue y compara ubicaciones en todo el mundo", description: "Ubicaciones ilimitadas y cambio rápido entre tus sitios favoritos." },
      { title: "Mar y mareas para fotografía costera", description: "Horarios de mareas y oleaje para sesiones costeras y planificación en agua." },
    ],
    clustersBadge: "Guías de planificación",
    clustersHeading: "Explora los problemas clave de planificación que resuelve Solora",
    clustersDescription:
      "Estas páginas responden a las búsquedas prácticas que la gente hace antes de descargar una app de planificación astronómica.",
    clustersCta: "Explorar esta guía",
    evergreenBadge: "Contenido evergreen",
    evergreenHeading: "Empieza por las guías que responden las preguntas más importantes",
    evergreenDescription:
      "La portada enlaza directamente a los temas evergreen más fuertes de Solora para reforzar el contenido de alta intención.",
    evergreenCta: "Leer la guía",
    downloadHeading: "No vuelvas a perderte un gran cielo",
    downloadBody: "Descárgala ahora y empieza a planificar con las mejores previsiones basadas en IA.",
  },
  fr: {
    title: "Solora | App de lever, coucher, phases lunaires et aurores",
    description:
      "Planifiez lever de soleil, coucher, heure dorée, phases lunaires, aurores, visibilité de la Voie lactée, marées et grands événements astronomiques avec Solora.",
    heroHeadingLine1: "Planifiez le ciel,",
    heroHeadingLine2: "perfectionnez l’instant",
    heroBody:
      "Solora est une app de lever et coucher du soleil, de planification de l’heure dorée, de calendrier lunaire, de prévision des aurores et de visibilité de la Voie lactée pour les photographes et les passionnés du ciel.",
    heroSubbody:
      "Consultez nuages, visibilité, lumière lunaire, marées, pluies d’étoiles filantes, éclipses et conditions nocturnes avant de partir, voyager ou installer votre appareil.",
    ratingLabel: "+1000 avis",
    planningCards: [
      {
        badge: "Pour qui est Solora",
        title: "Conçue pour les photographes, les observateurs du ciel et les chasseurs d’aurores",
        body: "Utilisez Solora pour préparer des prises de vue à l’aube, des couchers de soleil, des compositions avec lever de lune, des sorties aurores, des nuits Voie lactée, des pluies de météores, des éclipses et des scènes côtières.",
      },
      {
        badge: "Ce que vous pouvez planifier",
        title: "Une seule app pour l’heure dorée, les phases lunaires, les aurores et les grands événements du ciel",
        body: "Comparez des lieux partout dans le monde, suivez météo et visibilité, prévisualisez les trajectoires solaires et lunaires et recevez des alertes pour les meilleurs moments.",
      },
    ],
    featuresBadge: "Fonctionnalités puissantes",
    featuresHeading: "Tout pour le",
    featuresHeadingAccent: "timing parfait",
    featuresDescription:
      "Calculs astronomiques avancés, belles visualisations et notifications intelligentes pour capturer les moments les plus spectaculaires de la nature.",
    features: [
      { title: "Prévisions météo et ciel complètes", description: "Prévisions complètes des nuages, pluie, vent, visibilité et température où que vous photographiez." },
      { title: "Résumés de prévision personnalisés", description: "Résumés personnalisés pour les levers, couchers et la visibilité du ciel nocturne." },
      { title: "Suivez Soleil, Lune et Voie lactée", description: "Visualisez leurs positions et alignements en AR pour composer plus efficacement." },
      { title: "Suivi précis du cycle lunaire", description: "Phases à venir, heures de lever et de coucher et illumination pour une planification précise." },
      { title: "Restez prêt pour les événements astronomiques", description: "Éclipses, pluies de météores, superlunes et événements planétaires dans une seule app." },
      { title: "Alertes intelligentes", description: "Alertes pour l’heure dorée, lever de lune, marées, événements et résumés quotidiens." },
      { title: "Chaque prévision en un regard", description: "Widgets et Apple Watch pour consulter rapidement depuis l’écran d’accueil, l’écran verrouillé ou la montre." },
      { title: "Suivez et comparez des lieux partout", description: "Lieux illimités avec bascule rapide entre vos spots favoris dans le monde entier." },
      { title: "Mer et marées pour le littoral", description: "Horaires de marée et état de la houle pour les prises de vue côtières." },
    ],
    clustersBadge: "Guides de planification",
    clustersHeading: "Découvrez les grands problèmes de planification que Solora résout",
    clustersDescription:
      "Ces pages ciblent les recherches concrètes des personnes qui cherchent une app de planification astronomique.",
    clustersCta: "Explorer ce guide",
    evergreenBadge: "Contenu evergreen",
    evergreenHeading: "Commencez par les guides qui répondent aux grandes questions",
    evergreenDescription:
      "La page d’accueil met en avant les sujets evergreen les plus forts de Solora pour renforcer le contenu à forte intention.",
    evergreenCta: "Lire le guide",
    downloadHeading: "Ne manquez plus jamais un bon ciel",
    downloadBody: "Téléchargez l’app et commencez à planifier avec les meilleures prévisions IA.",
  },
  it: {
    title: "Solora | App per alba, tramonto, fasi lunari e aurore",
    description:
      "Pianifica alba, tramonto, golden hour, fasi lunari, aurore, visibilità della Via Lattea, maree e grandi eventi astronomici con Solora.",
    heroHeadingLine1: "Pianifica il cielo,",
    heroHeadingLine2: "perfeziona l’attimo",
    heroBody:
      "Solora è un’app per alba e tramonto, pianificazione della golden hour, calendario lunare, previsioni aurora e visibilità della Via Lattea pensata per fotografi e appassionati del cielo.",
    heroSubbody:
      "Controlla nuvole, visibilità, luce lunare, maree, sciami meteorici, eclissi e condizioni del cielo notturno prima di partire o preparare la tua fotocamera.",
    ratingLabel: "+1000 recensioni",
    planningCards: [
      {
        badge: "Per chi è Solora",
        title: "Creata per fotografi, osservatori del cielo, cacciatori di aurore e amanti dell’outdoor",
        body: "Usa Solora per pianificare scatti all’alba, paesaggi al tramonto, composizioni con il sorgere della luna, viaggi per le aurore, notti dedicate alla Via Lattea, sciami meteorici, eclissi e fotografia costiera con le maree.",
      },
      {
        badge: "Cosa puoi pianificare",
        title: "Un’unica app per golden hour, fasi lunari, aurore e grandi eventi del cielo",
        body: "Confronta località in tutto il mondo, segui meteo e visibilità, visualizza i percorsi del Sole e della Luna e ricevi avvisi per i momenti che contano davvero.",
      },
    ],
    featuresBadge: "Funzioni potenti",
    featuresHeading: "Tutto per il",
    featuresHeadingAccent: "tempismo perfetto",
    featuresDescription:
      "Calcoli astronomici avanzati, visualizzazioni curate e notifiche intelligenti per aiutarti a catturare i momenti più spettacolari della natura.",
    features: [
      { title: "Previsioni complete di cielo e meteo", description: "Previsioni complete di nuvole, pioggia, vento, visibilità e temperatura ovunque fotografi." },
      { title: "Riepiloghi previsionali personalizzati", description: "Riepiloghi personalizzati di alba, tramonto e visibilità notturna per pianificare in anticipo." },
      { title: "Segui Sole, Luna e Via Lattea", description: "Visualizza posizioni e allineamenti in AR per comporre con più precisione." },
      { title: "Fasi lunari con precisione", description: "Prossime fasi, orari di alba e tramonto lunare e illuminazione per una pianificazione precisa." },
      { title: "Sempre aggiornato sugli eventi astronomici", description: "Eclissi, sciami meteorici, superlune ed eventi planetari in un unico posto." },
      { title: "Avvisi intelligenti", description: "Avvisi per golden hour, sorgere della luna, maree, eventi, riepiloghi giornalieri e condizioni vicine." },
      { title: "Tutte le previsioni a colpo d’occhio", description: "Widget e Apple Watch per accesso rapido da Home, schermata di blocco e orologio." },
      { title: "Monitora e confronta luoghi in tutto il mondo", description: "Località illimitate con cambio rapido tra i tuoi spot preferiti." },
      { title: "Mare e maree per la costa", description: "Orari di marea e condizioni del mare per la fotografia costiera." },
    ],
    clustersBadge: "Guide di pianificazione",
    clustersHeading: "Esplora i principali problemi di pianificazione che Solora risolve",
    clustersDescription:
      "Queste pagine rispondono alle ricerche pratiche di chi vuole scaricare un’app di pianificazione astronomica.",
    clustersCta: "Esplora questa guida",
    evergreenBadge: "Contenuti evergreen",
    evergreenHeading: "Inizia dalle guide che rispondono alle domande più importanti",
    evergreenDescription:
      "La homepage collega direttamente ai temi evergreen più forti di Solora per rafforzare i contenuti ad alta intenzione.",
    evergreenCta: "Leggi la guida",
    downloadHeading: "Non perderti più un grande momento del cielo",
    downloadBody: "Scarica l’app e inizia a pianificare con le migliori previsioni basate sull’IA.",
  },
  de: {
    title: "Solora | App für Sonnenaufgang, Sonnenuntergang, Mondphasen und Aurora",
    description:
      "Plane Sonnenaufgang, Sonnenuntergang, Golden Hour, Mondphasen, Aurora, Milchstraßen-Sichtbarkeit, Gezeiten und große astronomische Ereignisse mit Solora.",
    heroHeadingLine1: "Plane den Himmel,",
    heroHeadingLine2: "perfektioniere den Moment",
    heroBody:
      "Solora ist eine App für Sonnenaufgang und Sonnenuntergang, Golden-Hour-Planung, Mondphasen, Aurora-Vorhersagen und Milchstraßen-Sichtbarkeit für Fotografen und Himmelsbeobachter.",
    heroSubbody:
      "Prüfe Wolken, Sichtweite, Mondlicht, Gezeiten, Meteorschauer, Finsternisse und Nachtbedingungen, bevor du losfährst, reist oder deine Kamera aufbaust.",
    ratingLabel: "+1000 Bewertungen",
    planningCards: [
      {
        badge: "Für wen Solora gemacht ist",
        title: "Gebaut für Fotografen, Sternengucker, Aurora-Jäger und Outdoor-Planer",
        body: "Mit Solora planst du Sonnenaufgangs-Shootings, Sonnenuntergänge, Mondaufgänge, Aurora-Trips, Milchstraßen-Nächte, Meteorschauer, Finsternisse und Küstenfotografie mit Gezeitenkontext.",
      },
      {
        badge: "Was du planen kannst",
        title: "Eine App für Golden Hour, Mondphasen, Aurora und die wichtigsten Himmelsereignisse",
        body: "Vergleiche Orte weltweit, verfolge Wetter und Sicht, sieh Sonnen- und Mondbahnen voraus und erhalte Hinweise für die besten Momente.",
      },
    ],
    featuresBadge: "Leistungsstarke Funktionen",
    featuresHeading: "Alles für",
    featuresHeadingAccent: "perfektes Timing",
    featuresDescription:
      "Fortgeschrittene astronomische Berechnungen, starke Visualisierungen und smarte Benachrichtigungen helfen dir, die spektakulärsten Naturmomente einzufangen.",
    features: [
      { title: "Komplette Himmels- und Wettervorhersage", description: "Vollständige Prognosen für Wolken, Regen, Wind, Sichtweite und Temperatur überall." },
      { title: "Personalisierte Vorhersage-Zusammenfassungen", description: "Personalisierte Zusammenfassungen für Sonnenaufgang, Sonnenuntergang und Nachthimmel-Sichtbarkeit." },
      { title: "Sonne, Mond und Milchstraße verfolgen", description: "Positionen und Ausrichtungen in AR sehen und Kompositionen besser planen." },
      { title: "Mondzyklen präzise verfolgen", description: "Nächste Phasen, Auf- und Untergangszeiten und Beleuchtung für präzise Planung." },
      { title: "Astronomische Ereignisse im Blick behalten", description: "Finsternisse, Meteorschauer, Supermonde und planetare Ereignisse an einem Ort." },
      { title: "Smarte Alerts für deine Planung", description: "Benachrichtigungen zu Golden Hour, Mondaufgang, Gezeiten, Ereignissen und Tageszusammenfassungen." },
      { title: "Jede Vorhersage auf einen Blick", description: "Widgets und Apple Watch Unterstützung für schnellen Zugriff." },
      { title: "Orte weltweit vergleichen", description: "Unbegrenzte Orte mit schnellem Wechsel zwischen Lieblingsspots auf der ganzen Welt." },
      { title: "Meer und Gezeiten für Küstenplanung", description: "Gezeitenzeiten und Wellenbedingungen für Küsten-Shootings und Wasserplanung." },
    ],
    clustersBadge: "Planungs-Guides",
    clustersHeading: "Entdecke die Kernprobleme, die Solora löst",
    clustersDescription:
      "Diese Seiten decken die praktischen Suchen ab, die Menschen vor dem Download einer Astronomie-Planungs-App stellen.",
    clustersCta: "Guide öffnen",
    evergreenBadge: "Evergreen-Inhalte",
    evergreenHeading: "Starte mit den Guides für die wichtigsten Planungsfragen",
    evergreenDescription:
      "Die Startseite verweist direkt auf Soloras stärkste Evergreen-Themen und stärkt so Inhalte mit hoher Suchintention.",
    evergreenCta: "Guide lesen",
    downloadHeading: "Verpasse nie wieder einen guten Himmelsmoment",
    downloadBody: "Lade die App herunter und plane mit den besten KI-gestützten Vorhersagen.",
  },
}

export const blogIndexContent: Record<AuthoredLocale, BlogIndexContent> = {
  en: {
    title: "Solora Blog - Sky Photography & Astronomy Guides",
    description: "Expert guides on sky photography, astronomy, and weather forecasting for photographers and sky watchers.",
    badge: "Expert Guides",
    featuredHeading: "Featured Articles",
    allHeading: "All Articles",
    ctaHeading: "Ready to capture perfect moments?",
    ctaDescription: "Download Solora and get AI-powered forecasts for all your sky photography adventures.",
  },
  es: {
    title: "Blog de Solora - Guías de fotografía del cielo y astronomía",
    description: "Guías expertas sobre fotografía del cielo, astronomía y previsión meteorológica para fotógrafos y observadores del cielo.",
    badge: "Guías expertas",
    featuredHeading: "Artículos destacados",
    allHeading: "Todos los artículos",
    ctaHeading: "¿Listo para capturar el momento perfecto?",
    ctaDescription: "Descarga Solora y obtén previsiones con IA para todas tus aventuras de fotografía del cielo.",
  },
  fr: {
    title: "Blog Solora - Guides photo du ciel et astronomie",
    description: "Guides experts sur la photographie du ciel, l’astronomie et la météo pour les photographes et passionnés du ciel.",
    badge: "Guides experts",
    featuredHeading: "Articles à la une",
    allHeading: "Tous les articles",
    ctaHeading: "Prêt à capturer le moment parfait ?",
    ctaDescription: "Téléchargez Solora et obtenez des prévisions IA pour toutes vos sorties photo du ciel.",
  },
  it: {
    title: "Blog Solora - Guide di fotografia del cielo e astronomia",
    description: "Guide esperte su fotografia del cielo, astronomia e previsioni meteo per fotografi e appassionati del cielo.",
    badge: "Guide esperte",
    featuredHeading: "Articoli in evidenza",
    allHeading: "Tutti gli articoli",
    ctaHeading: "Pronto a catturare il momento perfetto?",
    ctaDescription: "Scarica Solora e ottieni previsioni AI per tutte le tue avventure di fotografia del cielo.",
  },
  de: {
    title: "Solora Blog - Guides zu Himmelsfotografie und Astronomie",
    description: "Experten-Guides zu Himmelsfotografie, Astronomie und Wetterplanung für Fotografen und Himmelsbeobachter.",
    badge: "Experten-Guides",
    featuredHeading: "Empfohlene Artikel",
    allHeading: "Alle Artikel",
    ctaHeading: "Bereit, perfekte Momente festzuhalten?",
    ctaDescription: "Lade Solora herunter und erhalte KI-gestützte Vorhersagen für deine Himmelsfotografie.",
  },
}

export const pressKitContent: Record<AuthoredLocale, PressKitContent> = {
  en: {
    title: "Solora Press Kit",
    description: "Official Solora press kit with product summary, screenshots, brand assets, and platform features for media coverage.",
    heroBadge: "Press Kit",
    heroHeading: "Solora for",
    heroHeadingAccent: "Apple devices",
    heroBody: "Product overview, screenshots, positioning, and download-ready assets for media coverage and creator partnerships.",
    aboutHeading: "About Solora",
    aboutBody: [
      "Solora helps photographers, sky watchers, and outdoor planners decide when and where the sky will be worth the effort.",
      "The app combines sunrise and sunset timing, moon phases, aurora forecasts, Milky Way visibility, tides, and major astronomical events into a planning workflow that feels native on iPhone, iPad, Apple Watch, and Mac.",
    ],
    aboutTags: ["Astronomy", "Photography", "Weather", "Planning"],
    whatsNewBadge: "Product Highlights",
    whatsNewHeading: "What Solora helps people plan",
    whatsNewBody: "Use Solora to move from generic forecasts to clear go / no-go decisions for sky photography, travel, and outdoor sessions.",
    features: [
      { title: "Sky forecasting with context", body: "See sunrise, sunset, moon, cloud cover, visibility, and weather together instead of checking multiple apps before every outing." },
      { title: "Planning tools for photographers", body: "Track golden hour, blue hour, moonlight, Milky Way windows, and celestial events to plan better compositions." },
      { title: "Native Apple platform experience", body: "Solora is available across iPhone, iPad, Apple Watch, and Mac with widgets and glanceable forecast experiences." },
      { title: "Location-first workflow", body: "Save favorite spots, compare regions, and decide which location is worth your drive before you leave." },
    ],
    resourcesHeading: "Press resources",
    resourcesBody: "Download artwork and screenshots directly from this page for articles, reviews, roundups, and social posts.",
    resourceCards: [
      { title: "App icon", description: "High-resolution Solora app icon.", href: "/solora-app-icon.png", download: "solora-app-icon.png" },
      { title: "Press image", description: "Bento-style product image for press use.", href: "/soloraBento.jpg", download: "solora-press-image.jpg" },
      { title: "Cover image", description: "Landscape cover image for articles and previews.", href: "/cover.jpg", download: "solora-cover.jpg" },
    ],
    downloadHeading: "Download Solora",
    downloadBody: "Get the app on the App Store and explore the complete planning experience on Apple devices.",
  },
  es: {
    title: "Kit de prensa de Solora",
    description: "Kit de prensa oficial de Solora con resumen del producto, capturas, recursos de marca y funciones para medios.",
    heroBadge: "Kit de prensa",
    heroHeading: "Solora para",
    heroHeadingAccent: "dispositivos Apple",
    heroBody: "Resumen del producto, capturas, posicionamiento y recursos listos para medios y creadores.",
    aboutHeading: "Sobre Solora",
    aboutBody: [
      "Solora ayuda a fotógrafos, observadores del cielo y amantes del aire libre a decidir cuándo y dónde merece la pena salir.",
      "La app combina horas de amanecer y atardecer, fases lunares, auroras, visibilidad de la Vía Láctea, mareas y grandes eventos astronómicos en un flujo nativo para iPhone, iPad, Apple Watch y Mac.",
    ],
    aboutTags: ["Astronomía", "Fotografía", "Tiempo", "Planificación"],
    whatsNewBadge: "Aspectos clave",
    whatsNewHeading: "Qué ayuda a planificar Solora",
    whatsNewBody: "Solora convierte previsiones genéricas en decisiones claras de ir / no ir para fotografía del cielo, viajes y sesiones al aire libre.",
    features: [
      { title: "Previsión del cielo con contexto", body: "Consulta amanecer, atardecer, luna, nubosidad, visibilidad y tiempo en una sola vista." },
      { title: "Herramientas para fotógrafos", body: "Sigue hora dorada, hora azul, luz lunar, ventanas de Vía Láctea y eventos celestes para planificar mejores composiciones." },
      { title: "Experiencia nativa en plataformas Apple", body: "Solora está disponible en iPhone, iPad, Apple Watch y Mac con widgets y vistas rápidas." },
      { title: "Flujo centrado en ubicaciones", body: "Guarda tus lugares favoritos, compara regiones y decide qué ubicación merece el viaje." },
    ],
    resourcesHeading: "Recursos para prensa",
    resourcesBody: "Descarga material gráfico y capturas directamente desde esta página para artículos, reseñas y redes sociales.",
    resourceCards: [
      { title: "Icono de la app", description: "Icono de Solora en alta resolución.", href: "/solora-app-icon.png", download: "solora-app-icon.png" },
      { title: "Imagen de prensa", description: "Imagen tipo bento del producto para medios.", href: "/soloraBento.jpg", download: "solora-press-image.jpg" },
      { title: "Imagen de portada", description: "Imagen panorámica para artículos y previas.", href: "/cover.jpg", download: "solora-cover.jpg" },
    ],
    downloadHeading: "Descargar Solora",
    downloadBody: "Consigue la app en App Store y explora la experiencia completa en dispositivos Apple.",
  },
  fr: {
    title: "Kit presse Solora",
    description: "Kit presse officiel de Solora avec résumé produit, captures, assets de marque et fonctionnalités pour les médias.",
    heroBadge: "Kit presse",
    heroHeading: "Solora pour",
    heroHeadingAccent: "les appareils Apple",
    heroBody: "Présentation produit, captures, positionnement et assets prêts à l’emploi pour médias et créateurs.",
    aboutHeading: "À propos de Solora",
    aboutBody: [
      "Solora aide les photographes, observateurs du ciel et passionnés d’outdoor à décider quand et où le ciel vaut l’effort.",
      "L’app réunit heures de lever et coucher du soleil, phases lunaires, aurores, visibilité de la Voie lactée, marées et grands événements astronomiques dans un flux natif sur iPhone, iPad, Apple Watch et Mac.",
    ],
    aboutTags: ["Astronomie", "Photographie", "Météo", "Planification"],
    whatsNewBadge: "Temps forts produit",
    whatsNewHeading: "Ce que Solora aide à planifier",
    whatsNewBody: "Solora transforme des prévisions génériques en décisions claires pour les sorties photo, les voyages et les sessions outdoor.",
    features: [
      { title: "Prévisions du ciel avec contexte", body: "Regroupez lever, coucher, lune, nuages, visibilité et météo en une seule vue." },
      { title: "Outils pensés pour les photographes", body: "Suivez heure dorée, heure bleue, lumière lunaire, fenêtres Voie lactée et événements célestes." },
      { title: "Expérience native Apple", body: "Disponible sur iPhone, iPad, Apple Watch et Mac avec widgets et expériences glanceables." },
      { title: "Workflow centré sur les lieux", body: "Enregistrez vos spots favoris, comparez des régions et choisissez l’endroit qui vaut le déplacement." },
    ],
    resourcesHeading: "Ressources presse",
    resourcesBody: "Téléchargez directement visuels et captures pour vos articles, revues, sélections et publications sociales.",
    resourceCards: [
      { title: "Icône de l’app", description: "Icône Solora en haute résolution.", href: "/solora-app-icon.png", download: "solora-app-icon.png" },
      { title: "Image presse", description: "Visuel produit style bento pour la presse.", href: "/soloraBento.jpg", download: "solora-press-image.jpg" },
      { title: "Image de couverture", description: "Image paysage pour articles et aperçus.", href: "/cover.jpg", download: "solora-cover.jpg" },
    ],
    downloadHeading: "Télécharger Solora",
    downloadBody: "Retrouvez l’app sur l’App Store et découvrez l’expérience complète sur appareils Apple.",
  },
  it: {
    title: "Press kit Solora",
    description: "Press kit ufficiale di Solora con panoramica del prodotto, screenshot, asset del brand e funzionalità per media.",
    heroBadge: "Press kit",
    heroHeading: "Solora per",
    heroHeadingAccent: "dispositivi Apple",
    heroBody: "Panoramica del prodotto, screenshot, posizionamento e asset pronti per media e creator.",
    aboutHeading: "Informazioni su Solora",
    aboutBody: [
      "Solora aiuta fotografi, osservatori del cielo e appassionati outdoor a capire quando e dove il cielo varrà davvero lo sforzo.",
      "L’app unisce alba e tramonto, fasi lunari, previsioni aurora, visibilità della Via Lattea, maree e grandi eventi astronomici in un flusso nativo su iPhone, iPad, Apple Watch e Mac.",
    ],
    aboutTags: ["Astronomia", "Fotografia", "Meteo", "Pianificazione"],
    whatsNewBadge: "Punti salienti",
    whatsNewHeading: "Cosa aiuta a pianificare Solora",
    whatsNewBody: "Solora trasforma previsioni generiche in decisioni chiare per fotografia del cielo, viaggi e sessioni outdoor.",
    features: [
      { title: "Previsioni del cielo con contesto", body: "Consulta alba, tramonto, luna, nuvole, visibilità e meteo in un’unica vista." },
      { title: "Strumenti per fotografi", body: "Segui golden hour, blue hour, luce lunare, finestre della Via Lattea ed eventi celesti." },
      { title: "Esperienza nativa Apple", body: "Disponibile su iPhone, iPad, Apple Watch e Mac con widget e viste rapide." },
      { title: "Workflow basato sulle località", body: "Salva i tuoi spot preferiti, confronta aree diverse e scegli il luogo che vale davvero il viaggio." },
    ],
    resourcesHeading: "Risorse stampa",
    resourcesBody: "Scarica direttamente da questa pagina materiali grafici e screenshot per articoli, recensioni e social.",
    resourceCards: [
      { title: "Icona app", description: "Icona Solora ad alta risoluzione.", href: "/solora-app-icon.png", download: "solora-app-icon.png" },
      { title: "Immagine stampa", description: "Immagine prodotto in stile bento.", href: "/soloraBento.jpg", download: "solora-press-image.jpg" },
      { title: "Immagine cover", description: "Immagine panoramica per articoli e anteprime.", href: "/cover.jpg", download: "solora-cover.jpg" },
    ],
    downloadHeading: "Scarica Solora",
    downloadBody: "Scarica l’app da App Store ed esplora l’esperienza completa sui dispositivi Apple.",
  },
  de: {
    title: "Solora Pressekit",
    description: "Offizielles Solora-Pressekit mit Produktüberblick, Screenshots, Markenmaterial und Plattformfunktionen für Medien.",
    heroBadge: "Pressekit",
    heroHeading: "Solora für",
    heroHeadingAccent: "Apple Geräte",
    heroBody: "Produktüberblick, Screenshots, Positionierung und sofort nutzbare Assets für Medien und Creator.",
    aboutHeading: "Über Solora",
    aboutBody: [
      "Solora hilft Fotografen, Himmelsbeobachtern und Outdoor-Planern zu entscheiden, wann und wo sich der Himmel wirklich lohnt.",
      "Die App kombiniert Sonnenaufgang und Sonnenuntergang, Mondphasen, Aurora-Vorhersagen, Milchstraßen-Sichtbarkeit, Gezeiten und große astronomische Ereignisse in einem nativen Workflow für iPhone, iPad, Apple Watch und Mac.",
    ],
    aboutTags: ["Astronomie", "Fotografie", "Wetter", "Planung"],
    whatsNewBadge: "Produkt-Highlights",
    whatsNewHeading: "Wofür Menschen Solora nutzen",
    whatsNewBody: "Solora verwandelt allgemeine Vorhersagen in klare Go/No-Go-Entscheidungen für Himmelsfotografie, Reisen und Outdoor-Sessions.",
    features: [
      { title: "Himmelsvorhersage mit Kontext", body: "Sonnenaufgang, Sonnenuntergang, Mond, Wolken, Sicht und Wetter in einer Ansicht statt über mehrere Apps verteilt." },
      { title: "Planungstools für Fotografen", body: "Verfolge Golden Hour, Blue Hour, Mondlicht, Milchstraßen-Fenster und Himmelsereignisse." },
      { title: "Natives Apple Erlebnis", body: "Verfügbar auf iPhone, iPad, Apple Watch und Mac mit Widgets und schnellen Forecast-Ansichten." },
      { title: "Standortbasierter Workflow", body: "Speichere Lieblingsorte, vergleiche Regionen und entscheide vorab, welcher Spot die Fahrt wert ist." },
    ],
    resourcesHeading: "Pressematerial",
    resourcesBody: "Lade Grafiken und Screenshots direkt von dieser Seite für Artikel, Reviews, Roundups und Social Posts herunter.",
    resourceCards: [
      { title: "App-Icon", description: "Hochauflösendes Solora App-Icon.", href: "/solora-app-icon.png", download: "solora-app-icon.png" },
      { title: "Pressebild", description: "Bento-Produktbild für Pressezwecke.", href: "/soloraBento.jpg", download: "solora-press-image.jpg" },
      { title: "Coverbild", description: "Landscape-Coverbild für Artikel und Vorschauen.", href: "/cover.jpg", download: "solora-cover.jpg" },
    ],
    downloadHeading: "Solora laden",
    downloadBody: "Lade die App aus dem App Store und entdecke das komplette Planungserlebnis auf Apple Geräten.",
  },
}

export const featurePageContent: Record<FeaturePageSlug, Record<AuthoredLocale, FeaturePageContent>> = {
  "sunrise-sunset-app": {
    en: {
      title: "Sunrise & Sunset App for Photography Planning",
      description: "Use Solora to plan sunrise and sunset photography with timing, cloud cover, visibility, weather, and location comparisons before you travel.",
      eyebrow: "Sunrise & Sunset Planning",
      primaryKeyword: "Sunrise & Sunset App",
      heroAlt: "Solora sunrise and sunset forecast screen",
      benefits: [
        "See sunrise, sunset, dawn, dusk, and changing daylight at your chosen location.",
        "Check cloud cover, visibility, and weather so you do not rely on time alone.",
        "Compare multiple locations when one horizon looks weak and another looks promising.",
      ],
      useCases: [
        "Landscape photography at sunrise or sunset.",
        "Travel planning for dawn viewpoints and sunset lookouts.",
        "Daily outdoor planning when light quality matters.",
      ],
      faqs: [
        { question: "What makes a good sunrise or sunset app?", answer: "A useful app combines exact timing with forecast context like cloud cover, visibility, and horizon conditions. Solora is built around that planning workflow." },
        { question: "Can Solora help me compare locations?", answer: "Yes. Solora is designed for tracking and comparing favorite spots so you can quickly switch between locations before deciding where to shoot." },
        { question: "Is Solora only for photographers?", answer: "No. Photographers are a core audience, but hikers, travelers, sailors, and outdoor planners also benefit from accurate dawn and dusk planning." },
      ],
      relatedLinks: ["golden-hour-photography-app", "moon-phase-calendar-app", "aurora-forecast-app"],
    },
    es: {
      title: "App de amanecer y atardecer para planificación fotográfica",
      description: "Usa Solora para planificar fotos al amanecer y al atardecer con horarios, nubosidad, visibilidad, tiempo y comparación entre ubicaciones.",
      eyebrow: "Planificación de amanecer y atardecer",
      primaryKeyword: "App de amanecer y atardecer",
      heroAlt: "Pantalla de previsión de amanecer y atardecer en Solora",
      benefits: [
        "Consulta amanecer, atardecer, alba, ocaso y la variación de luz de tu ubicación.",
        "Comprueba nubosidad, visibilidad y tiempo para no depender solo de la hora.",
        "Compara varias ubicaciones cuando un horizonte falla y otro promete.",
      ],
      useCases: [
        "Fotografía de paisaje al amanecer o atardecer.",
        "Planificación de viajes para miradores al alba y sunset spots.",
        "Planificación diaria al aire libre cuando la calidad de luz importa.",
      ],
      faqs: [
        { question: "¿Qué hace buena a una app de amanecer y atardecer?", answer: "Una buena app combina horarios exactos con contexto de previsión como nubosidad, visibilidad y condiciones del horizonte. Solora está pensada para ese flujo de planificación." },
        { question: "¿Puede Solora ayudarme a comparar ubicaciones?", answer: "Sí. Solora está diseñada para seguir y comparar lugares favoritos antes de decidir dónde fotografiar." },
        { question: "¿Solora es solo para fotógrafos?", answer: "No. Los fotógrafos son el público principal, pero senderistas, viajeros y planificadores outdoor también se benefician." },
      ],
      relatedLinks: ["golden-hour-photography-app", "moon-phase-calendar-app", "aurora-forecast-app"],
    },
    fr: {
      title: "App de lever et coucher du soleil pour la planification photo",
      description: "Utilisez Solora pour planifier des photos de lever et coucher du soleil avec horaires, nuages, visibilité, météo et comparaison de lieux.",
      eyebrow: "Planification lever et coucher",
      primaryKeyword: "App lever et coucher du soleil",
      heroAlt: "Écran de prévision de lever et coucher du soleil dans Solora",
      benefits: [
        "Visualisez lever, coucher, aube, crépuscule et variation de la lumière.",
        "Consultez nuages, visibilité et météo au lieu de vous fier uniquement à l’heure.",
        "Comparez plusieurs lieux quand un horizon semble faible et un autre prometteur.",
      ],
      useCases: [
        "Photographie de paysage au lever ou au coucher du soleil.",
        "Préparation de voyages pour des points de vue à l’aube ou au coucher.",
        "Planification outdoor quotidienne quand la qualité de lumière compte.",
      ],
      faqs: [
        { question: "Qu’est-ce qui fait une bonne app de lever ou coucher du soleil ?", answer: "Une bonne app combine des horaires précis avec du contexte météo comme les nuages, la visibilité et les conditions d’horizon. C’est exactement la logique de Solora." },
        { question: "Puis-je comparer plusieurs lieux avec Solora ?", answer: "Oui. Solora est conçue pour suivre et comparer vos spots favoris avant de choisir où partir." },
        { question: "Solora est-elle réservée aux photographes ?", answer: "Non. Les photographes sont un public clé, mais randonneurs, voyageurs et passionnés d’outdoor en profitent aussi." },
      ],
      relatedLinks: ["golden-hour-photography-app", "moon-phase-calendar-app", "aurora-forecast-app"],
    },
    it: {
      title: "App alba e tramonto per la pianificazione fotografica",
      description: "Usa Solora per pianificare fotografie all’alba e al tramonto con orari, nuvole, visibilità, meteo e confronto tra località.",
      eyebrow: "Pianificazione alba e tramonto",
      primaryKeyword: "App alba e tramonto",
      heroAlt: "Schermata previsioni alba e tramonto di Solora",
      benefits: [
        "Vedi alba, tramonto, crepuscolo e cambiamenti di luce nella tua località.",
        "Controlla nuvole, visibilità e meteo senza basarti solo sull’orario.",
        "Confronta più località quando un orizzonte sembra debole e un altro promettente.",
      ],
      useCases: [
        "Fotografia di paesaggio all’alba o al tramonto.",
        "Pianificazione di viaggi verso punti panoramici mattutini o serali.",
        "Programmazione outdoor quotidiana quando la qualità della luce conta.",
      ],
      faqs: [
        { question: "Cosa rende valida un’app per alba e tramonto?", answer: "Una buona app unisce orari precisi a contesto meteo come nuvolosità, visibilità e condizioni dell’orizzonte. Solora nasce per questo flusso." },
        { question: "Posso confrontare località con Solora?", answer: "Sì. Solora è pensata per tracciare e confrontare spot preferiti prima di decidere dove andare." },
        { question: "Solora è solo per fotografi?", answer: "No. I fotografi sono il pubblico principale, ma anche escursionisti, viaggiatori e utenti outdoor ne traggono vantaggio." },
      ],
      relatedLinks: ["golden-hour-photography-app", "moon-phase-calendar-app", "aurora-forecast-app"],
    },
    de: {
      title: "Sonnenaufgangs- und Sonnenuntergangs-App für Fotoplanung",
      description: "Nutze Solora zur Planung von Sonnenaufgangs- und Sonnenuntergangsfotos mit Zeiten, Wolken, Sicht, Wetter und Standortvergleich.",
      eyebrow: "Sonnenaufgangs- und Sonnenuntergangsplanung",
      primaryKeyword: "Sonnenaufgangs- und Sonnenuntergangs-App",
      heroAlt: "Solora Bildschirm für Sonnenaufgangs- und Sonnenuntergangsprognosen",
      benefits: [
        "Sieh Sonnenaufgang, Sonnenuntergang, Morgendämmerung, Abenddämmerung und Tageslichtänderungen für deinen Ort.",
        "Prüfe Wolken, Sicht und Wetter statt nur auf die Uhrzeit zu schauen.",
        "Vergleiche mehrere Orte, wenn ein Horizont schwach wirkt und ein anderer besser aussieht.",
      ],
      useCases: [
        "Landschaftsfotografie bei Sonnenaufgang oder Sonnenuntergang.",
        "Reiseplanung für Aussichtspunkte am Morgen und Abend.",
        "Tägliche Outdoor-Planung, wenn Lichtqualität entscheidend ist.",
      ],
      faqs: [
        { question: "Was macht eine gute Sonnenaufgangs- oder Sonnenuntergangs-App aus?", answer: "Eine gute App kombiniert exakte Zeiten mit Wetterkontext wie Wolken, Sicht und Horizontbedingungen. Genau dafür wurde Solora gebaut." },
        { question: "Kann ich mit Solora Orte vergleichen?", answer: "Ja. Solora ist dafür gemacht, Lieblingsorte zu verfolgen und schnell miteinander zu vergleichen." },
        { question: "Ist Solora nur für Fotografen gedacht?", answer: "Nein. Fotografen sind wichtig, aber auch Wanderer, Reisende und Outdoor-Planer profitieren." },
      ],
      relatedLinks: ["golden-hour-photography-app", "moon-phase-calendar-app", "aurora-forecast-app"],
    },
  },
  "golden-hour-photography-app": {
    en: {
      title: "Golden Hour Photography App for Better Light Planning",
      description: "Track golden hour and blue hour with sky conditions, weather, and timing context so you can choose stronger moments for photography.",
      eyebrow: "Golden Hour Planning",
      primaryKeyword: "Golden Hour Photography App",
      heroAlt: "Golden hour planning preview in Solora",
      benefits: [
        "See soft-light windows before and after sunset with more context than a simple clock.",
        "Check cloud cover and visibility before driving to a location.",
        "Plan both golden hour and blue hour in one workflow.",
      ],
      useCases: [
        "Portrait sessions in warm directional light.",
        "Landscape and travel shoots with softer contrast.",
        "Quick go or no-go decisions before a local session.",
      ],
      faqs: [
        { question: "Why is a golden hour app useful?", answer: "Golden hour shifts fast and depends on both timing and sky quality. Solora helps you plan with both." },
        { question: "Does Solora only show golden hour times?", answer: "No. It adds weather, cloud cover, and related conditions so the timing is actually actionable." },
        { question: "Can I use Solora for blue hour too?", answer: "Yes. Solora supports the full low-light planning window around sunrise and sunset." },
      ],
      relatedLinks: ["sunrise-sunset-app", "moon-phase-calendar-app", "milky-way-planner"],
    },
    es: {
      title: "App de hora dorada para planificar mejor la luz",
      description: "Sigue la hora dorada y la hora azul con contexto de cielo, tiempo y horarios para elegir mejores momentos fotográficos.",
      eyebrow: "Planificación de hora dorada",
      primaryKeyword: "App de fotografía de hora dorada",
      heroAlt: "Vista previa de planificación de hora dorada en Solora",
      benefits: [
        "Consulta ventanas de luz suave antes y después del atardecer con más contexto que un simple reloj.",
        "Revisa nubosidad y visibilidad antes de desplazarte.",
        "Planifica hora dorada y hora azul en un solo flujo.",
      ],
      useCases: [
        "Sesiones de retrato con luz cálida y direccional.",
        "Paisaje y viajes con contraste más suave.",
        "Decisiones rápidas de ir o no ir antes de salir.",
      ],
      faqs: [
        { question: "¿Por qué es útil una app de hora dorada?", answer: "La hora dorada cambia rápido y depende tanto del horario como de la calidad del cielo. Solora te ayuda a decidir con ambos factores." },
        { question: "¿Solora solo muestra horas de golden hour?", answer: "No. También añade tiempo, nubes y otras condiciones para que el horario sea realmente útil." },
        { question: "¿Puedo usar Solora para la hora azul?", answer: "Sí. Solora cubre toda la ventana de baja luz alrededor del amanecer y el atardecer." },
      ],
      relatedLinks: ["sunrise-sunset-app", "moon-phase-calendar-app", "milky-way-planner"],
    },
    fr: {
      title: "App heure dorée pour mieux planifier la lumière",
      description: "Suivez heure dorée et heure bleue avec contexte météo, ciel et horaires pour choisir de meilleurs moments photo.",
      eyebrow: "Planification heure dorée",
      primaryKeyword: "App photo heure dorée",
      heroAlt: "Aperçu de la planification de l’heure dorée dans Solora",
      benefits: [
        "Visualisez les fenêtres de lumière douce avant et après le coucher du soleil avec plus de contexte qu’une simple heure.",
        "Vérifiez nuages et visibilité avant de prendre la route.",
        "Planifiez heure dorée et heure bleue dans un seul flux.",
      ],
      useCases: [
        "Séances portrait en lumière chaude et directionnelle.",
        "Paysage et voyage avec un contraste plus doux.",
        "Décisions rapides go / no-go avant une sortie locale.",
      ],
      faqs: [
        { question: "Pourquoi une app heure dorée est-elle utile ?", answer: "L’heure dorée évolue vite et dépend à la fois du timing et de la qualité du ciel. Solora vous aide à prendre en compte les deux." },
        { question: "Solora affiche-t-elle seulement les horaires ?", answer: "Non. Elle ajoute météo, nuages et autres conditions pour rendre l’information vraiment exploitable." },
        { question: "Puis-je aussi l’utiliser pour l’heure bleue ?", answer: "Oui. Solora couvre toute la fenêtre de lumière douce autour du lever et du coucher du soleil." },
      ],
      relatedLinks: ["sunrise-sunset-app", "moon-phase-calendar-app", "milky-way-planner"],
    },
    it: {
      title: "App golden hour per pianificare meglio la luce",
      description: "Segui golden hour e blue hour con contesto di cielo, meteo e orari per scegliere i momenti migliori per fotografare.",
      eyebrow: "Pianificazione golden hour",
      primaryKeyword: "App fotografia golden hour",
      heroAlt: "Anteprima pianificazione golden hour in Solora",
      benefits: [
        "Vedi finestre di luce morbida prima e dopo il tramonto con più contesto rispetto a un semplice orario.",
        "Controlla nuvole e visibilità prima di metterti in viaggio.",
        "Pianifica golden hour e blue hour nello stesso flusso.",
      ],
      useCases: [
        "Sessioni di ritratto con luce calda e direzionale.",
        "Paesaggio e viaggi con contrasto più morbido.",
        "Decisioni rapide prima di una sessione locale.",
      ],
      faqs: [
        { question: "Perché è utile un’app per la golden hour?", answer: "La golden hour cambia rapidamente e dipende sia dal timing sia dalla qualità del cielo. Solora ti aiuta a valutare entrambi." },
        { question: "Solora mostra solo gli orari?", answer: "No. Aggiunge meteo, nuvole e altre condizioni per rendere il timing davvero utile." },
        { question: "Posso usarla anche per la blue hour?", answer: "Sì. Solora copre l’intera finestra di luce morbida intorno ad alba e tramonto." },
      ],
      relatedLinks: ["sunrise-sunset-app", "moon-phase-calendar-app", "milky-way-planner"],
    },
    de: {
      title: "Golden-Hour-App für bessere Lichtplanung",
      description: "Verfolge Golden Hour und Blue Hour mit Wetter-, Himmels- und Timing-Kontext, um bessere Fotomomente zu wählen.",
      eyebrow: "Golden-Hour-Planung",
      primaryKeyword: "Golden-Hour-Fotografie-App",
      heroAlt: "Golden-Hour-Planungsvorschau in Solora",
      benefits: [
        "Sieh weiche Lichtfenster vor und nach Sonnenuntergang mit mehr Kontext als nur einer Uhrzeit.",
        "Prüfe Wolken und Sicht, bevor du zu einem Spot fährst.",
        "Plane Golden Hour und Blue Hour in einem Workflow.",
      ],
      useCases: [
        "Portraitsessions in warmem, gerichtetem Licht.",
        "Landschafts- und Reiseshootings mit weicherem Kontrast.",
        "Schnelle Go/No-Go-Entscheidungen vor einer Session.",
      ],
      faqs: [
        { question: "Warum ist eine Golden-Hour-App hilfreich?", answer: "Golden Hour verändert sich schnell und hängt von Timing und Himmelsqualität ab. Solora hilft dir, beides zusammen zu bewerten." },
        { question: "Zeigt Solora nur Zeiten an?", answer: "Nein. Wetter, Wolken und weitere Bedingungen kommen dazu, damit das Timing wirklich nutzbar wird." },
        { question: "Kann ich Solora auch für Blue Hour verwenden?", answer: "Ja. Solora deckt das gesamte Low-Light-Fenster rund um Sonnenauf- und -untergang ab." },
      ],
      relatedLinks: ["sunrise-sunset-app", "moon-phase-calendar-app", "milky-way-planner"],
    },
  },
  "moon-phase-calendar-app": {
    en: {
      title: "Moon Phase Calendar App for Night Photography Planning",
      description: "Track moon phases, illumination, moonrise, and moonset so you can plan dark nights, moonlit scenes, and better timing for photography.",
      eyebrow: "Moon Phase Planning",
      primaryKeyword: "Moon Phase Calendar App",
      heroAlt: "Moon phase planning preview in Solora",
      benefits: [
        "Know how bright the moon will be before you head out.",
        "See moonrise and moonset timing with the lunar phase in one place.",
        "Plan dark-sky sessions and moonlit scenes with more confidence.",
      ],
      useCases: [
        "Night landscape photography.",
        "Dark-sky planning for Milky Way and meteor sessions.",
        "Moonlit foregrounds and skyline compositions.",
      ],
      faqs: [
        { question: "Why do moon phases matter for photography?", answer: "Moonlight changes exposure, contrast, and visibility. Planning around it helps you avoid surprises in the field." },
        { question: "Does Solora show more than the phase?", answer: "Yes. It combines phase, illumination, rise and set times, and broader sky-planning context." },
        { question: "Is this useful if I am not doing astrophotography?", answer: "Yes. Moon planning matters for travel, moonrise compositions, and any outdoor shoot affected by ambient light." },
      ],
      relatedLinks: ["milky-way-planner", "aurora-forecast-app", "sunrise-sunset-app"],
    },
    es: {
      title: "App de calendario lunar para planificar fotografía nocturna",
      description: "Sigue fases lunares, iluminación, salida y puesta de la luna para planificar noches oscuras, escenas iluminadas por la luna y mejores horarios.",
      eyebrow: "Planificación lunar",
      primaryKeyword: "App de calendario lunar",
      heroAlt: "Vista previa de planificación lunar en Solora",
      benefits: [
        "Sabe cuánta luz lunar habrá antes de salir.",
        "Consulta salida y puesta de la luna junto con la fase lunar en una sola vista.",
        "Planifica noches oscuras o escenas con luna con más confianza.",
      ],
      useCases: [
        "Fotografía nocturna de paisaje.",
        "Planificación de cielo oscuro para Vía Láctea y meteoros.",
        "Composiciones urbanas o de paisaje con salida de luna.",
      ],
      faqs: [
        { question: "¿Por qué importan las fases lunares en fotografía?", answer: "La luz de la luna cambia exposición, contraste y visibilidad. Planificar con ella evita sorpresas en el terreno." },
        { question: "¿Solora muestra algo más que la fase?", answer: "Sí. Combina fase, iluminación, horarios de salida y puesta y contexto más amplio del cielo." },
        { question: "¿Sirve si no hago astrofotografía?", answer: "Sí. La planificación lunar también importa en viajes, composiciones con moonrise y sesiones al aire libre." },
      ],
      relatedLinks: ["milky-way-planner", "aurora-forecast-app", "sunrise-sunset-app"],
    },
    fr: {
      title: "App calendrier lunaire pour la photo de nuit",
      description: "Suivez phases, illumination, lever et coucher de lune pour planifier nuits sombres, scènes éclairées par la lune et meilleurs timings photo.",
      eyebrow: "Planification lunaire",
      primaryKeyword: "App calendrier lunaire",
      heroAlt: "Aperçu de la planification lunaire dans Solora",
      benefits: [
        "Sachez à quel point la lune sera lumineuse avant de partir.",
        "Consultez lever et coucher de lune avec la phase dans une seule vue.",
        "Planifiez nuits noires et scènes au clair de lune avec plus de confiance.",
      ],
      useCases: [
        "Photographie de paysage nocturne.",
        "Planification de nuits sombres pour la Voie lactée et les météores.",
        "Compositions avec lune et avant-plan.",
      ],
      faqs: [
        { question: "Pourquoi les phases lunaires comptent-elles en photo ?", answer: "La lumière lunaire modifie exposition, contraste et visibilité. Planifier autour d’elle évite les mauvaises surprises." },
        { question: "Solora montre-t-elle plus que la phase ?", answer: "Oui. Elle combine phase, illumination, heures de lever/coucher et contexte général du ciel." },
        { question: "Est-ce utile sans faire d’astrophotographie ?", answer: "Oui. Cela reste utile pour les voyages, les compositions avec lever de lune et les sorties outdoor." },
      ],
      relatedLinks: ["milky-way-planner", "aurora-forecast-app", "sunrise-sunset-app"],
    },
    it: {
      title: "App calendario lunare per la fotografia notturna",
      description: "Segui fasi lunari, illuminazione, moonrise e moonset per pianificare notti buie, scene illuminate dalla luna e timing migliori.",
      eyebrow: "Pianificazione lunare",
      primaryKeyword: "App calendario lunare",
      heroAlt: "Anteprima pianificazione lunare in Solora",
      benefits: [
        "Sai quanto sarà luminosa la luna prima di uscire.",
        "Vedi sorgere e tramonto della luna insieme alla fase.",
        "Pianifica sessioni con cielo scuro o scene al chiaro di luna con più sicurezza.",
      ],
      useCases: [
        "Fotografia di paesaggio notturna.",
        "Pianificazione di cieli bui per Via Lattea e sciami meteorici.",
        "Composizioni con la luna e il paesaggio.",
      ],
      faqs: [
        { question: "Perché le fasi lunari contano in fotografia?", answer: "La luce della luna cambia esposizione, contrasto e visibilità. Pianificarla evita sorprese sul campo." },
        { question: "Solora mostra più della sola fase?", answer: "Sì. Unisce fase, illuminazione, orari e contesto più ampio del cielo." },
        { question: "È utile anche senza fare astrofotografia?", answer: "Sì. Serve anche per viaggi, composizioni con moonrise e qualsiasi sessione outdoor influenzata dalla luce ambientale." },
      ],
      relatedLinks: ["milky-way-planner", "aurora-forecast-app", "sunrise-sunset-app"],
    },
    de: {
      title: "Mondphasen-Kalender-App für Nachtfotografie",
      description: "Verfolge Mondphasen, Beleuchtung, Mondaufgang und Monduntergang, um dunkle Nächte, mondbeleuchtete Szenen und besseres Timing zu planen.",
      eyebrow: "Mondphasen-Planung",
      primaryKeyword: "Mondphasen-Kalender-App",
      heroAlt: "Mondphasen-Planungsvorschau in Solora",
      benefits: [
        "Wisse vorab, wie hell der Mond sein wird.",
        "Sieh Mondaufgang und Monduntergang zusammen mit der Phase.",
        "Plane Dark-Sky-Sessions und mondbeleuchtete Szenen sicherer.",
      ],
      useCases: [
        "Nachtlandschaftsfotografie.",
        "Dark-Sky-Planung für Milchstraße und Meteorschauer.",
        "Mondlicht- und Skyline-Kompositionen.",
      ],
      faqs: [
        { question: "Warum sind Mondphasen für Fotografie wichtig?", answer: "Mondlicht verändert Belichtung, Kontrast und Sichtbarkeit. Gute Planung hilft, Überraschungen draußen zu vermeiden." },
        { question: "Zeigt Solora mehr als nur die Phase?", answer: "Ja. Phase, Beleuchtung, Auf- und Untergangszeiten und weiterer Himmelskontext kommen zusammen." },
        { question: "Ist das auch ohne Astrofotografie nützlich?", answer: "Ja. Mondplanung ist auch für Reisen, Mondaufgangskompositionen und Outdoor-Shootings relevant." },
      ],
      relatedLinks: ["milky-way-planner", "aurora-forecast-app", "sunrise-sunset-app"],
    },
  },
  "aurora-forecast-app": {
    en: {
      title: "Aurora Forecast App for Better Northern Lights Planning",
      description: "Track aurora-friendly windows with local weather, cloud cover, darkness, and practical forecast context before you travel.",
      eyebrow: "Aurora Planning",
      primaryKeyword: "Aurora Forecast App",
      heroAlt: "Aurora forecast planning preview in Solora",
      benefits: [
        "Use more than a single KPI or alert when deciding to travel.",
        "Combine darkness, cloud cover, and location into one workflow.",
        "Make better last-minute decisions when aurora conditions shift quickly.",
      ],
      useCases: [
        "Northern lights photography trips.",
        "Local aurora chases when geomagnetic activity rises.",
        "Trip planning in dark-sky regions with variable weather.",
      ],
      faqs: [
        { question: "What should an aurora forecast app include?", answer: "A useful aurora app should combine activity signals with cloud cover, darkness, and location context. Solora is built around that practical decision flow." },
        { question: "Is a high KP index enough on its own?", answer: "No. Visibility, darkness, weather, and your region matter too. Solora helps you evaluate the full picture." },
        { question: "Can Solora help with travel decisions?", answer: "Yes. It is designed to support real-world go or no-go choices before you commit to a drive or flight." },
      ],
      relatedLinks: ["milky-way-planner", "moon-phase-calendar-app", "sunrise-sunset-app"],
    },
    es: {
      title: "App de auroras para planificar mejor la aurora boreal",
      description: "Sigue ventanas favorables para auroras con tiempo local, nubosidad, oscuridad y contexto útil antes de viajar.",
      eyebrow: "Planificación de auroras",
      primaryKeyword: "App de previsión de auroras",
      heroAlt: "Vista previa de planificación de auroras en Solora",
      benefits: [
        "No dependas solo de un índice o una alerta al decidir viajar.",
        "Combina oscuridad, nubosidad y ubicación en un solo flujo.",
        "Toma mejores decisiones de última hora cuando las condiciones cambian rápido.",
      ],
      useCases: [
        "Viajes de fotografía de auroras boreales.",
        "Salidas locales cuando aumenta la actividad geomagnética.",
        "Planificación en regiones oscuras con tiempo variable.",
      ],
      faqs: [
        { question: "¿Qué debe incluir una app de auroras?", answer: "Una buena app debe combinar señales de actividad con nubosidad, oscuridad y ubicación. Solora está hecha para ese flujo práctico." },
        { question: "¿Basta con un KP alto?", answer: "No. También importan visibilidad, oscuridad, tiempo y región. Solora te ayuda a ver el panorama completo." },
        { question: "¿Puede Solora ayudar con decisiones de viaje?", answer: "Sí. Está pensada para decisiones reales de ir o no ir antes de comprometerte a conducir o volar." },
      ],
      relatedLinks: ["milky-way-planner", "moon-phase-calendar-app", "sunrise-sunset-app"],
    },
    fr: {
      title: "App de prévision d’aurores pour mieux planifier les aurores boréales",
      description: "Suivez les fenêtres favorables avec météo locale, nuages, obscurité et contexte utile avant de partir.",
      eyebrow: "Planification des aurores",
      primaryKeyword: "App prévision d’aurores",
      heroAlt: "Aperçu de la planification des aurores dans Solora",
      benefits: [
        "Ne vous fiez pas à un seul KPI ou à une simple alerte pour partir.",
        "Réunissez obscurité, nuages et lieu dans un seul flux de décision.",
        "Prenez de meilleures décisions de dernière minute quand les conditions changent vite.",
      ],
      useCases: [
        "Voyages photo aurores boréales.",
        "Chasses locales quand l’activité géomagnétique monte.",
        "Planification dans des régions sombres à météo variable.",
      ],
      faqs: [
        { question: "Que doit inclure une app de prévision d’aurores ?", answer: "Une bonne app doit combiner signaux d’activité, nuages, obscurité et contexte de localisation. C’est le principe de Solora." },
        { question: "Un KP élevé suffit-il ?", answer: "Non. La visibilité, l’obscurité, la météo et votre région comptent aussi." },
        { question: "Solora peut-elle aider à décider de voyager ?", answer: "Oui. Elle est conçue pour des décisions concrètes avant un trajet en voiture ou en avion." },
      ],
      relatedLinks: ["milky-way-planner", "moon-phase-calendar-app", "sunrise-sunset-app"],
    },
    it: {
      title: "App aurora forecast per pianificare meglio l’aurora boreale",
      description: "Segui finestre favorevoli alle aurore con meteo locale, nuvole, oscurità e contesto pratico prima di partire.",
      eyebrow: "Pianificazione aurora",
      primaryKeyword: "App previsioni aurora",
      heroAlt: "Anteprima pianificazione aurora in Solora",
      benefits: [
        "Non affidarti a un solo indice o avviso quando decidi di viaggiare.",
        "Combina oscurità, nuvole e posizione in un unico flusso.",
        "Prendi decisioni migliori dell’ultimo minuto quando le condizioni cambiano in fretta.",
      ],
      useCases: [
        "Viaggi fotografici per aurora boreale.",
        "Uscite locali quando l’attività geomagnetica aumenta.",
        "Pianificazione in regioni buie con meteo variabile.",
      ],
      faqs: [
        { question: "Cosa dovrebbe includere un’app aurora forecast?", answer: "Un’app utile deve combinare segnali di attività con nuvole, oscurità e contesto della località. Solora nasce per questo." },
        { question: "Un KP alto basta da solo?", answer: "No. Contano anche visibilità, oscurità, meteo e area geografica." },
        { question: "Solora aiuta a decidere se partire?", answer: "Sì. È pensata per decisioni reali prima di mettersi in auto o prenotare un volo." },
      ],
      relatedLinks: ["milky-way-planner", "moon-phase-calendar-app", "sunrise-sunset-app"],
    },
    de: {
      title: "Aurora-Vorhersage-App für bessere Nordlichtplanung",
      description: "Verfolge aurorafreundliche Fenster mit lokalem Wetter, Wolken, Dunkelheit und praktischem Prognosekontext vor deiner Reise.",
      eyebrow: "Aurora-Planung",
      primaryKeyword: "Aurora-Vorhersage-App",
      heroAlt: "Aurora-Planungsvorschau in Solora",
      benefits: [
        "Verlass dich nicht nur auf einen einzelnen KPI oder Alert.",
        "Kombiniere Dunkelheit, Wolken und Standort in einem Workflow.",
        "Treffe bessere Last-Minute-Entscheidungen, wenn sich die Bedingungen schnell ändern.",
      ],
      useCases: [
        "Nordlicht-Fotoreisen.",
        "Lokale Aurora-Jagden bei steigender geomagnetischer Aktivität.",
        "Reiseplanung in dunklen Regionen mit wechselhaftem Wetter.",
      ],
      faqs: [
        { question: "Was sollte eine Aurora-Vorhersage-App enthalten?", answer: "Eine gute Aurora-App kombiniert Aktivitätssignale mit Wolken, Dunkelheit und Standortkontext. Genau so ist Solora gedacht." },
        { question: "Reicht ein hoher KP-Wert allein?", answer: "Nein. Sicht, Dunkelheit, Wetter und Region spielen ebenfalls eine Rolle." },
        { question: "Hilft Solora bei Reiseentscheidungen?", answer: "Ja. Die App unterstützt echte Go/No-Go-Entscheidungen vor Fahrt oder Flug." },
      ],
      relatedLinks: ["milky-way-planner", "moon-phase-calendar-app", "sunrise-sunset-app"],
    },
  },
  "milky-way-planner": {
    en: {
      title: "Milky Way Planner for Dark-Sky and Galactic Center Timing",
      description: "Plan Milky Way shoots with darkness, moonlight, weather, and visibility context so you choose stronger nights before you travel.",
      eyebrow: "Milky Way Planning",
      primaryKeyword: "Milky Way Planner",
      heroAlt: "Milky Way planning preview in Solora",
      benefits: [
        "Find darker nights with lower moonlight interference.",
        "Use weather and visibility context instead of astronomy timing alone.",
        "Plan around seasonal Milky Way windows with a single workflow.",
      ],
      useCases: [
        "Milky Way landscape photography.",
        "Travel planning for dark-sky trips.",
        "Choosing moon-free windows for astrophotography.",
      ],
      faqs: [
        { question: "What makes a Milky Way planner useful?", answer: "Useful planning needs darkness, moonlight, weather, and seasonal visibility together. Solora combines them into one flow." },
        { question: "Can Solora help me avoid bright moonlight?", answer: "Yes. Moon phase and rise-set timing are part of the planning workflow so you can pick cleaner dark-sky windows." },
        { question: "Is this only useful during peak Milky Way season?", answer: "No. Solora also helps you judge edge-season nights, shoulder months, and supporting sky conditions." },
      ],
      relatedLinks: ["moon-phase-calendar-app", "aurora-forecast-app", "sunrise-sunset-app"],
    },
    es: {
      title: "Planificador de la Vía Láctea para noches oscuras y mejor timing",
      description: "Planifica sesiones de la Vía Láctea con oscuridad, luz lunar, tiempo y visibilidad para elegir mejores noches antes de viajar.",
      eyebrow: "Planificación de la Vía Láctea",
      primaryKeyword: "Planificador de la Vía Láctea",
      heroAlt: "Vista previa de planificación de la Vía Láctea en Solora",
      benefits: [
        "Encuentra noches más oscuras con menos interferencia lunar.",
        "Usa contexto de tiempo y visibilidad, no solo el timing astronómico.",
        "Planifica las ventanas estacionales de la Vía Láctea en un solo flujo.",
      ],
      useCases: [
        "Fotografía de paisaje con la Vía Láctea.",
        "Viajes a lugares de cielo oscuro.",
        "Elegir ventanas sin luna para astrofotografía.",
      ],
      faqs: [
        { question: "¿Qué hace útil a un planificador de la Vía Láctea?", answer: "Necesitas oscuridad, luz lunar, tiempo y visibilidad juntos. Solora lo reúne en un solo flujo." },
        { question: "¿Puede Solora ayudarme a evitar la luz de la luna?", answer: "Sí. Las fases lunares y los horarios de salida y puesta forman parte del flujo de planificación." },
        { question: "¿Solo sirve en temporada alta de la Vía Láctea?", answer: "No. También ayuda en noches límite, meses intermedios y condiciones de cielo de apoyo." },
      ],
      relatedLinks: ["moon-phase-calendar-app", "aurora-forecast-app", "sunrise-sunset-app"],
    },
    fr: {
      title: "Planificateur Voie lactée pour nuits sombres et timing du centre galactique",
      description: "Planifiez vos sessions Voie lactée avec obscurité, lumière lunaire, météo et visibilité pour choisir les meilleures nuits avant de partir.",
      eyebrow: "Planification Voie lactée",
      primaryKeyword: "Planificateur Voie lactée",
      heroAlt: "Aperçu de la planification Voie lactée dans Solora",
      benefits: [
        "Trouvez des nuits plus sombres avec moins d’interférence lunaire.",
        "Utilisez météo et visibilité au lieu du seul timing astronomique.",
        "Planifiez les fenêtres saisonnières de la Voie lactée dans un seul workflow.",
      ],
      useCases: [
        "Photographie de paysage avec la Voie lactée.",
        "Voyages vers des zones de ciel sombre.",
        "Choix de fenêtres sans lune pour l’astrophotographie.",
      ],
      faqs: [
        { question: "Qu’est-ce qui rend un planificateur Voie lactée utile ?", answer: "Il faut réunir obscurité, lune, météo et visibilité. Solora les rassemble dans un seul flux." },
        { question: "Solora peut-elle m’aider à éviter une lune trop lumineuse ?", answer: "Oui. Les phases lunaires et heures de lever/coucher sont intégrées au workflow." },
        { question: "Est-ce utile uniquement en haute saison ?", answer: "Non. Solora aide aussi à juger les nuits de début ou fin de saison et les conditions annexes." },
      ],
      relatedLinks: ["moon-phase-calendar-app", "aurora-forecast-app", "sunrise-sunset-app"],
    },
    it: {
      title: "Planner Via Lattea per notti buie e timing del centro galattico",
      description: "Pianifica le sessioni della Via Lattea con oscurità, luce lunare, meteo e visibilità per scegliere le notti migliori prima di partire.",
      eyebrow: "Pianificazione Via Lattea",
      primaryKeyword: "Planner Via Lattea",
      heroAlt: "Anteprima pianificazione Via Lattea in Solora",
      benefits: [
        "Trova notti più buie con meno interferenza della luna.",
        "Usa meteo e visibilità invece del solo timing astronomico.",
        "Pianifica le finestre stagionali della Via Lattea in un unico flusso.",
      ],
      useCases: [
        "Fotografia di paesaggio con la Via Lattea.",
        "Viaggi verso luoghi con cielo scuro.",
        "Scelta di finestre senza luna per l’astrofotografia.",
      ],
      faqs: [
        { question: "Cosa rende utile un planner per la Via Lattea?", answer: "Servono oscurità, luce lunare, meteo e visibilità insieme. Solora li riunisce in un solo workflow." },
        { question: "Solora può aiutarmi a evitare una luna troppo luminosa?", answer: "Sì. Le fasi lunari e gli orari di alba e tramonto della luna fanno parte del flusso." },
        { question: "È utile solo in alta stagione?", answer: "No. Aiuta anche a valutare notti di inizio e fine stagione e le condizioni del cielo correlate." },
      ],
      relatedLinks: ["moon-phase-calendar-app", "aurora-forecast-app", "sunrise-sunset-app"],
    },
    de: {
      title: "Milchstraßen-Planer für Dark-Sky-Nächte und Galaktikzentrum-Timing",
      description: "Plane Milchstraßen-Shootings mit Dunkelheit, Mondlicht, Wetter und Sichtbarkeitskontext, um stärkere Nächte vor deiner Reise zu wählen.",
      eyebrow: "Milchstraßen-Planung",
      primaryKeyword: "Milchstraßen-Planer",
      heroAlt: "Milchstraßen-Planungsvorschau in Solora",
      benefits: [
        "Finde dunklere Nächte mit weniger Mondlichteffekt.",
        "Nutze Wetter- und Sichtbarkeitskontext statt nur astronomischem Timing.",
        "Plane saisonale Milchstraßen-Fenster in einem Workflow.",
      ],
      useCases: [
        "Milchstraßen-Landschaftsfotografie.",
        "Reiseplanung für Dark-Sky-Trips.",
        "Mondfreie Zeitfenster für Astrofotografie.",
      ],
      faqs: [
        { question: "Was macht einen Milchstraßen-Planer nützlich?", answer: "Dunkelheit, Mondlicht, Wetter und saisonale Sichtbarkeit müssen zusammen betrachtet werden. Solora vereint das." },
        { question: "Kann mir Solora helfen, helles Mondlicht zu vermeiden?", answer: "Ja. Mondphase und Auf-/Untergangszeiten sind Teil des Workflows." },
        { question: "Ist das nur in der Hauptsaison nützlich?", answer: "Nein. Solora hilft auch in Randzeiten, Übergangsmonaten und bei ergänzenden Himmelsbedingungen." },
      ],
      relatedLinks: ["moon-phase-calendar-app", "aurora-forecast-app", "sunrise-sunset-app"],
    },
  },
}

const derivedUiDictionary: Record<"pt" | "zh", UiDictionary> = {
  pt: {
    navFeatures: "Recursos",
    navBlog: "Blog",
    navPressKit: "Imprensa",
    navDownload: "Baixar",
    navHome: "Início",
    languageLabel: "Idioma",
    backToBlog: "Voltar ao blog",
    relatedGuides: "Guias relacionados",
    readMore: "Ler mais",
    readFullArticle: "Ler o artigo completo",
    downloadSolora: "Baixar Solora",
    downloadOnAppStore: "Baixar na App Store",
    availableOnAppStore: "Disponível na App Store",
    allRightsReserved: "Todos os direitos reservados",
    freeDownload: "Download grátis",
    iosPlatformsShort: "iPhone e iPad",
    iosPlatformsLong: "iOS, watchOS, iPadOS, macOS",
    planTheSky: "Planeje o céu, acerte o momento",
  },
  zh: {
    navFeatures: "功能",
    navBlog: "博客",
    navPressKit: "媒体资料",
    navDownload: "下载",
    navHome: "首页",
    languageLabel: "语言",
    backToBlog: "返回博客",
    relatedGuides: "相关指南",
    readMore: "继续阅读",
    readFullArticle: "阅读全文",
    downloadSolora: "下载 Solora",
    downloadOnAppStore: "前往 App Store 下载",
    availableOnAppStore: "已上架 App Store",
    allRightsReserved: "保留所有权利",
    freeDownload: "免费下载",
    iosPlatformsShort: "iPhone 与 iPad",
    iosPlatformsLong: "iOS、watchOS、iPadOS、macOS",
    planTheSky: "规划天空，抓住最佳时刻",
  },
}

const derivedHomeContent: Record<"pt" | "zh", HomeContent> = {
  pt: {
    title: "Solora | App de nascer do sol, pôr do sol, fases da lua e aurora",
    description: "Planeje nascer do sol, pôr do sol, golden hour, fases da lua, auroras, Via Láctea, marés e grandes eventos astronômicos com o Solora.",
    heroHeadingLine1: "Planeje o céu,",
    heroHeadingLine2: "acerte o momento",
    heroBody: "Solora é um app para nascer e pôr do sol, golden hour, fases da lua, previsão de aurora e planejamento da Via Láctea, feito para fotógrafos e observadores do céu.",
    heroSubbody: "Confira nuvens, visibilidade, luz lunar, marés, chuvas de meteoros, eclipses e condições do céu antes de dirigir, viajar, caminhar ou montar a câmera.",
    ratingLabel: "+1000 avaliações",
    planningCards: [
      {
        badge: "Para quem é o Solora",
        title: "Feito para fotógrafos, astrônomos amadores, caçadores de aurora e planejadores outdoor",
        body: "Use o Solora para planejar fotos de nascer do sol, paisagens ao pôr do sol, composições com moonrise, viagens para aurora boreal, noites de Via Láctea, chuvas de meteoros, eclipses e cenas costeiras com maré.",
      },
      {
        badge: "O que você pode planejar",
        title: "Um app para golden hour, fases da lua, auroras e grandes eventos do céu",
        body: "Compare locais no mundo todo, acompanhe clima e visibilidade, visualize trajetórias solares e lunares e receba alertas para os momentos que mais importam.",
      },
    ],
    featuresBadge: "Recursos poderosos",
    featuresHeading: "Tudo para",
    featuresHeadingAccent: "o timing perfeito",
    featuresDescription: "Cálculos astronômicos avançados, visualizações elegantes e alertas inteligentes para você capturar os melhores momentos da natureza.",
    features: [
      { title: "Previsões completas de céu e clima", description: "Nuvens, chuva, vento, visibilidade e temperatura em qualquer local." },
      { title: "Resumos personalizados", description: "Resumos de nascer do sol, pôr do sol e visibilidade noturna para planejar com antecedência." },
      { title: "Sol, Lua e Via Láctea", description: "Veja posições e alinhamentos do Sol, da Lua e da Via Láctea para composições melhores." },
      { title: "Fases lunares com precisão", description: "Próximas fases, horários de nascer e pôr da lua e iluminação detalhada." },
      { title: "Eventos astronômicos em um só lugar", description: "Eclipses, chuvas de meteoros, superluas e outros eventos importantes." },
      { title: "Alertas úteis", description: "Alertas para golden hour, moonrise, marés, eventos e condições locais." },
      { title: "Informações em um relance", description: "Widgets e Apple Watch para acesso rápido na tela inicial e no relógio." },
      { title: "Compare locais no mundo todo", description: "Troque rapidamente entre pontos favoritos e compare condições." },
      { title: "Marés e mar para o litoral", description: "Horários de maré e contexto costeiro para sessões à beira-mar." },
    ],
    clustersBadge: "Guias de planejamento",
    clustersHeading: "Explore os principais problemas de planejamento que o Solora resolve",
    clustersDescription: "Estas páginas atacam buscas práticas feitas por quem procura um app de planejamento astronômico antes de baixar.",
    clustersCta: "Explorar este guia",
    evergreenBadge: "Conteúdo evergreen",
    evergreenHeading: "Comece pelos guias que respondem às maiores perguntas de planejamento",
    evergreenDescription: "A home aponta para os tópicos evergreen mais fortes do Solora para transferir autoridade para conteúdos de alta intenção.",
    evergreenCta: "Ler o guia",
    downloadHeading: "Baixe o Solora e planeje com mais contexto",
    downloadBody: "Acompanhe nascer e pôr do sol, fases da lua, auroras, Via Láctea, clima e eventos astronômicos em um fluxo nativo para Apple.",
  },
  zh: {
    title: "Solora | 日出日落、月相与极光规划应用",
    description: "使用 Solora 规划日出、日落、黄金时刻、月相、极光、银河、潮汐和重要天文事件。",
    heroHeadingLine1: "规划天空，",
    heroHeadingLine2: "抓住最佳时刻",
    heroBody: "Solora 是为摄影师和观星者打造的日出日落、黄金时刻、月相、极光和银河规划应用。",
    heroSubbody: "在开车、徒步、旅行或架设相机前，先查看云量、能见度、月光、潮汐、流星雨、日月食和夜空条件。",
    ratingLabel: "1000+ 评分",
    planningCards: [
      {
        badge: "适合谁使用",
        title: "为摄影师、观星者、追极光的人和户外规划者而设计",
        body: "用 Solora 规划日出拍摄、日落风光、月出构图、北极光旅行、银河夜晚、流星雨、日月食以及结合潮汐的海岸摄影。",
      },
      {
        badge: "你可以规划什么",
        title: "一个应用管理黄金时刻、月相、极光和重要天象",
        body: "比较全球地点，跟踪天气与能见度，预览太阳和月亮路径，并为关键时刻接收提醒。",
      },
    ],
    featuresBadge: "核心功能",
    featuresHeading: "实现",
    featuresHeadingAccent: "完美时机所需的一切",
    featuresDescription: "先进的天文计算、清晰的可视化和智能提醒，帮助你抓住最精彩的自然时刻。",
    features: [
      { title: "完整天空与天气预报", description: "在任何地点查看云量、降雨、风、能见度和温度。" },
      { title: "个性化摘要", description: "日出、日落和夜空能见度摘要，提前判断是否值得出发。" },
      { title: "追踪太阳、月亮与银河", description: "查看太阳、月亮和银河的位置与对齐关系，帮助构图。" },
      { title: "精确月相", description: "掌握月相、月出月落和月面照明情况。" },
      { title: "天文事件总览", description: "将日月食、流星雨、超级月亮和其他重要事件集中到一处。" },
      { title: "智能提醒", description: "为黄金时刻、月出、潮汐、事件和本地条件提供提醒。" },
      { title: "一眼看懂所有预报", description: "支持小组件和 Apple Watch，快速查看关键数据。" },
      { title: "全球地点对比", description: "保存并快速切换多个地点，比较你最关心的拍摄点。" },
      { title: "海岸与潮汐规划", description: "为海边拍摄和出行提供潮汐与海况背景。" },
    ],
    clustersBadge: "规划指南",
    clustersHeading: "探索 Solora 解决的核心规划问题",
    clustersDescription: "这些页面面向用户在下载天文规划应用前会进行的实际搜索。",
    clustersCta: "查看指南",
    evergreenBadge: "常青内容",
    evergreenHeading: "先看最能回答规划问题的指南",
    evergreenDescription: "首页链接会把权重传递给 Solora 最强的高意图常青主题内容。",
    evergreenCta: "阅读指南",
    downloadHeading: "下载 Solora，用更多上下文来规划",
    downloadBody: "在原生 Apple 体验中统一查看日出日落、月相、极光、银河、天气和天文事件。",
  },
}

const derivedBlogIndexContent: Record<"pt" | "zh", BlogIndexContent> = {
  pt: {
    title: "Blog Solora sobre fotografia do céu e planejamento astronômico",
    description: "Guias sobre eclipses, auroras, golden hour, fases da lua, meteoros e planejamento prático para fotógrafos e observadores do céu.",
    badge: "Blog de planejamento",
    featuredHeading: "Artigos em destaque",
    allHeading: "Todos os artigos",
    ctaHeading: "Planeje melhor com o Solora",
    ctaDescription: "Use o Solora para transformar datas, alertas e previsões em decisões reais de local, clima e timing.",
  },
  zh: {
    title: "Solora 天空摄影与天文规划博客",
    description: "围绕日月食、极光、黄金时刻、月相、流星雨和实用拍摄规划的指南内容。",
    badge: "规划博客",
    featuredHeading: "精选文章",
    allHeading: "全部文章",
    ctaHeading: "用 Solora 做出更好的规划",
    ctaDescription: "把日期、提醒和预报转化为真实的地点、天气和时间决策。",
  },
}

const derivedPressKitContent: Record<"pt" | "zh", PressKitContent> = {
  pt: {
    title: "Kit de imprensa do Solora",
    description: "Kit de imprensa oficial do Solora com visão geral do produto, capturas, ativos de marca e recursos para cobertura editorial.",
    heroBadge: "Kit de imprensa",
    heroHeading: "Recursos de",
    heroHeadingAccent: "imprensa",
    heroBody: "Resumo do produto, capturas, posicionamento e materiais prontos para veículos, criadores e curadores.",
    aboutHeading: "Sobre o Solora",
    aboutBody: [
      "Solora é um app de planejamento astronômico para fotógrafos, observadores do céu e pessoas que tomam decisões com base em luz, clima e céu.",
      "O app reúne nascer e pôr do sol, fases da lua, auroras, visibilidade da Via Láctea, marés e grandes eventos astronômicos em uma experiência nativa para iPhone, iPad, Apple Watch e Mac.",
    ],
    aboutTags: ["Fotografia", "Astronomia", "Aurora", "Lua", "Via Láctea", "Apple"],
    whatsNewBadge: "Destaques do produto",
    whatsNewHeading: "O que torna o Solora diferente",
    whatsNewBody: "O Solora transforma previsões genéricas em decisões claras para saídas fotográficas, viagens e sessões ao ar livre.",
    features: [
      { title: "Previsões do céu com contexto", body: "Reúna nascer do sol, pôr do sol, lua, nuvens, visibilidade e clima em uma única visão." },
      { title: "Ferramentas para fotógrafos", body: "Acompanhe golden hour, blue hour, luz lunar, janelas da Via Láctea e eventos do céu para composições melhores." },
      { title: "Experiência nativa Apple", body: "Solora está disponível em iPhone, iPad, Apple Watch e Mac com widgets e visualizações rápidas." },
      { title: "Fluxo centrado em locais", body: "Salve locais favoritos, compare regiões e decida qual ponto vale a viagem." },
    ],
    resourcesHeading: "Recursos para download",
    resourcesBody: "Baixe materiais visuais e capturas diretamente desta página para artigos, reviews, newsletters e redes sociais.",
    resourceCards: [
      { title: "Ícone do app", description: "Ícone do Solora em alta resolução.", href: "/solora-app-icon.png", download: "solora-app-icon.png" },
      { title: "Imagem de imprensa", description: "Imagem do produto em estilo bento para uso editorial.", href: "/soloraBento.jpg", download: "solora-press-image.jpg" },
      { title: "Imagem de capa", description: "Imagem horizontal para matérias e prévias.", href: "/cover.jpg", download: "solora-cover.jpg" },
    ],
    downloadHeading: "Baixe o Solora",
    downloadBody: "Encontre o app na App Store e explore a experiência completa nos dispositivos Apple.",
  },
  zh: {
    title: "Solora 媒体资料包",
    description: "Solora 官方媒体资料包，包含产品概览、截图、品牌素材和媒体报道所需信息。",
    heroBadge: "媒体资料",
    heroHeading: "媒体与",
    heroHeadingAccent: "品牌素材",
    heroBody: "为媒体、内容创作者和榜单编辑准备的产品简介、截图、定位说明和可下载资源。",
    aboutHeading: "关于 Solora",
    aboutBody: [
      "Solora 是一款面向摄影师、观星者以及依赖光线、天气和天空条件做决定的用户的天文规划应用。",
      "它把日出日落、月相、极光、银河可见性、潮汐和重要天文事件整合到 iPhone、iPad、Apple Watch 和 Mac 的原生体验中。",
    ],
    aboutTags: ["摄影", "天文", "极光", "月亮", "银河", "Apple"],
    whatsNewBadge: "产品亮点",
    whatsNewHeading: "Solora 的差异化价值",
    whatsNewBody: "Solora 把泛泛的天气或天象信息变成对拍摄、旅行和户外活动真正有用的决策。",
    features: [
      { title: "带上下文的天空预报", body: "在同一视图中结合日出、日落、月亮、云量、能见度和天气。" },
      { title: "为摄影而设计", body: "跟踪黄金时刻、蓝调时刻、月光、银河窗口和重要天象，帮助做出更好的构图选择。" },
      { title: "原生 Apple 体验", body: "覆盖 iPhone、iPad、Apple Watch 和 Mac，并支持小组件与快速查看。" },
      { title: "地点驱动的工作流", body: "保存最喜欢的地点、比较不同地区，并决定哪一个值得出发。" },
    ],
    resourcesHeading: "下载资源",
    resourcesBody: "直接从此页面下载视觉素材和截图，用于文章、评测、推荐和社交内容。",
    resourceCards: [
      { title: "应用图标", description: "高分辨率 Solora 图标。", href: "/solora-app-icon.png", download: "solora-app-icon.png" },
      { title: "媒体图片", description: "适合媒体使用的 bento 风格产品图。", href: "/soloraBento.jpg", download: "solora-press-image.jpg" },
      { title: "封面图", description: "适用于文章和预览的横版封面图。", href: "/cover.jpg", download: "solora-cover.jpg" },
    ],
    downloadHeading: "下载 Solora",
    downloadBody: "前往 App Store，在 Apple 设备上体验完整的 Solora 产品。",
  },
}

const derivedFeaturePageContent: Record<"pt" | "zh", Record<FeaturePageSlug, FeaturePageContent>> = {
  pt: {
    "sunrise-sunset-app": {
      title: "App de nascer e pôr do sol para planejamento fotográfico",
      description: "Use o Solora para planejar fotos de nascer e pôr do sol com horários, nuvens, visibilidade, clima e comparação de locais.",
      eyebrow: "Planejamento de nascer e pôr do sol",
      primaryKeyword: "App de nascer e pôr do sol",
      heroAlt: "Prévia da previsão de nascer e pôr do sol no Solora",
      benefits: ["Veja nascer, pôr, amanhecer e crepúsculo em um só lugar.", "Confira nuvens, visibilidade e clima junto com os horários.", "Compare locais antes de decidir onde fotografar."],
      useCases: ["Fotografia de paisagem no amanhecer ou entardecer.", "Planejamento de viagem para mirantes e sunset spots.", "Rotina outdoor diária quando a qualidade da luz importa."],
      faqs: [
        { question: "O que torna um app de nascer e pôr do sol realmente útil?", answer: "Ele combina horários precisos com contexto de nuvens, visibilidade e horizonte. É exatamente esse o foco do Solora." },
        { question: "Posso comparar locais com o Solora?", answer: "Sim. O Solora foi pensado para acompanhar e comparar locais favoritos antes da decisão final." },
        { question: "É só para fotógrafos?", answer: "Não. Fotógrafos são o público principal, mas viajantes, trilheiros e usuários outdoor também se beneficiam." },
      ],
      relatedLinks: ["golden-hour-photography-app", "moon-phase-calendar-app", "milky-way-planner"],
    },
    "golden-hour-photography-app": {
      title: "App de golden hour para planejar melhor a luz",
      description: "Acompanhe golden hour e blue hour com contexto de céu, clima e horários para escolher momentos fotográficos mais fortes.",
      eyebrow: "Planejamento de golden hour",
      primaryKeyword: "App de fotografia na golden hour",
      heroAlt: "Prévia do planejamento de golden hour no Solora",
      benefits: ["Veja janelas de luz suave antes e depois do pôr do sol.", "Cheque nuvens e visibilidade antes de sair.", "Planeje golden hour e blue hour no mesmo fluxo."],
      useCases: ["Retratos com luz quente e direcional.", "Paisagens urbanas ou naturais em luz suave.", "Decisões rápidas de ir ou não ir antes da sessão."],
      faqs: [
        { question: "Por que um app de golden hour é útil?", answer: "Porque a golden hour depende do horário e da qualidade real do céu. O Solora ajuda a considerar os dois fatores." },
        { question: "O Solora mostra só os horários?", answer: "Não. Ele adiciona clima, nuvens e visibilidade para tornar o horário realmente útil." },
        { question: "Posso usar para blue hour também?", answer: "Sim. O Solora cobre toda a janela de luz suave ao redor do nascer e do pôr do sol." },
      ],
      relatedLinks: ["sunrise-sunset-app", "moon-phase-calendar-app", "milky-way-planner"],
    },
    "moon-phase-calendar-app": {
      title: "App de calendário lunar para fotografia noturna",
      description: "Acompanhe fases da lua, iluminação, moonrise e moonset para planejar noites escuras, cenas iluminadas pela lua e melhores horários.",
      eyebrow: "Planejamento lunar",
      primaryKeyword: "App de calendário lunar",
      heroAlt: "Prévia do planejamento lunar no Solora",
      benefits: ["Saiba quanta luz lunar haverá antes de sair.", "Veja moonrise e moonset junto com a fase lunar.", "Planeje noites escuras e cenas com luar com mais confiança."],
      useCases: ["Fotografia noturna de paisagem.", "Planejamento de céu escuro para Via Láctea e meteoros.", "Composições urbanas ou naturais com moonrise."],
      faqs: [
        { question: "Por que as fases da lua importam na fotografia?", answer: "Porque a luz da lua muda exposição, contraste e visibilidade. Planejar com isso evita surpresas em campo." },
        { question: "O Solora mostra mais do que a fase?", answer: "Sim. Ele combina fase, iluminação, horários de moonrise e moonset e um contexto maior do céu." },
        { question: "Serve se eu não fizer astrofotografia?", answer: "Sim. O planejamento lunar também ajuda em viagens, composições com moonrise e saídas outdoor." },
      ],
      relatedLinks: ["milky-way-planner", "sunrise-sunset-app", "aurora-forecast-app"],
    },
    "aurora-forecast-app": {
      title: "App de aurora para planejar melhor a aurora boreal",
      description: "Acompanhe janelas favoráveis à aurora com clima local, nuvens, escuridão e contexto útil antes de viajar.",
      eyebrow: "Planejamento de aurora",
      primaryKeyword: "App de previsão de aurora",
      heroAlt: "Prévia do planejamento de aurora no Solora",
      benefits: ["Não dependa apenas de um índice ou alerta.", "Junte escuridão, nuvens e localização no mesmo fluxo.", "Tome decisões melhores de última hora quando as condições mudarem rápido."],
      useCases: ["Viagens para fotografar aurora boreal.", "Escolha entre regiões ou pontos de backup.", "Planejamento em áreas escuras com clima variável."],
      faqs: [
        { question: "O que um bom app de aurora deve incluir?", answer: "Ele deve unir atividade geomagnética, nuvens, escuridão e contexto local. Esse é o fluxo do Solora." },
        { question: "Um KP alto basta?", answer: "Não. Visibilidade, escuridão, clima e região também importam." },
        { question: "O Solora ajuda na decisão de viagem?", answer: "Sim. Ele foi pensado para decisões reais antes de dirigir ou voar." },
      ],
      relatedLinks: ["milky-way-planner", "moon-phase-calendar-app", "sunrise-sunset-app"],
    },
    "milky-way-planner": {
      title: "Planejador da Via Láctea para noites escuras e melhor timing",
      description: "Planeje sessões da Via Láctea com escuridão, luz lunar, clima e visibilidade para escolher noites melhores antes de viajar.",
      eyebrow: "Planejamento da Via Láctea",
      primaryKeyword: "Planejador da Via Láctea",
      heroAlt: "Prévia do planejamento da Via Láctea no Solora",
      benefits: ["Encontre noites mais escuras com menos interferência lunar.", "Use clima e visibilidade, não apenas timing astronômico.", "Planeje janelas sazonais da Via Láctea em um único fluxo."],
      useCases: ["Fotografia de paisagem com a Via Láctea.", "Viagens para locais de céu escuro.", "Escolha de janelas sem lua para astrofotografia."],
      faqs: [
        { question: "O que torna um planejador da Via Láctea útil?", answer: "Você precisa analisar escuridão, lua, clima e visibilidade juntos. O Solora reúne isso." },
        { question: "O Solora pode me ajudar a evitar uma lua muito brilhante?", answer: "Sim. Fases da lua e horários de nascer e pôr fazem parte do fluxo." },
        { question: "Isso só é útil na alta temporada?", answer: "Não. Também ajuda em noites de borda, meses intermediários e condições de apoio." },
      ],
      relatedLinks: ["moon-phase-calendar-app", "aurora-forecast-app", "sunrise-sunset-app"],
    },
  },
  zh: {
    "sunrise-sunset-app": {
      title: "用于摄影规划的日出日落应用",
      description: "使用 Solora 通过时间、云量、能见度、天气和地点对比来规划日出与日落拍摄。",
      eyebrow: "日出日落规划",
      primaryKeyword: "日出日落应用",
      heroAlt: "Solora 中的日出日落预报界面",
      benefits: ["在一个界面里查看日出、日落、晨光和暮光。", "不要只看时间，还能同步查看云量、能见度和天气。", "出发前先比较多个地点。"],
      useCases: ["日出或日落风光摄影。", "为观景点和日落机位做行程规划。", "当光线质量很重要时的日常户外安排。"],
      faqs: [
        { question: "什么样的日出日落应用才算真正好用？", answer: "它应把准确时间与云量、能见度和地平线条件结合起来，这正是 Solora 的设计重点。" },
        { question: "Solora 可以帮我比较地点吗？", answer: "可以。Solora 就是为了在你决定去哪里之前跟踪并比较多个地点而设计的。" },
        { question: "它只适合摄影师吗？", answer: "不是。摄影师是核心用户，但旅行者、徒步者和户外用户同样受益。" },
      ],
      relatedLinks: ["golden-hour-photography-app", "moon-phase-calendar-app", "milky-way-planner"],
    },
    "golden-hour-photography-app": {
      title: "黄金时刻应用，让你更好规划光线",
      description: "结合天空状态、天气和时间来跟踪黄金时刻与蓝调时刻，选择更强的摄影窗口。",
      eyebrow: "黄金时刻规划",
      primaryKeyword: "黄金时刻摄影应用",
      heroAlt: "Solora 中的黄金时刻规划预览",
      benefits: ["查看日落前后柔和光线窗口。", "出发前先核对云量与能见度。", "在同一流程中规划黄金时刻和蓝调时刻。"],
      useCases: ["暖色定向光的人像拍摄。", "城市和风光的柔和光线拍摄。", "出发前快速判断值不值得去。"],
      faqs: [
        { question: "为什么黄金时刻应用很有用？", answer: "因为黄金时刻不仅看时间，也看实际天空质量。Solora 把这两个因素放在一起判断。" },
        { question: "Solora 只显示时间吗？", answer: "不是。它还整合天气、云量和能见度，让时间信息更有意义。" },
        { question: "也能用于蓝调时刻吗？", answer: "可以。Solora 覆盖日出和日落前后的整段柔和光线窗口。" },
      ],
      relatedLinks: ["sunrise-sunset-app", "moon-phase-calendar-app", "milky-way-planner"],
    },
    "moon-phase-calendar-app": {
      title: "用于夜景摄影规划的月相日历应用",
      description: "跟踪月相、照明度、月出月落，帮助你规划暗夜、月光场景和更合适的拍摄时间。",
      eyebrow: "月亮规划",
      primaryKeyword: "月相日历应用",
      heroAlt: "Solora 中的月亮规划预览",
      benefits: ["出发前就知道月光会有多亮。", "在一个视图里查看月相和月出月落。", "更有把握地规划暗夜或月光场景。"],
      useCases: ["夜景风光摄影。", "为银河和流星雨规划真正的暗空窗口。", "城市或自然场景中的月出构图。"],
      faqs: [
        { question: "为什么月相对摄影重要？", answer: "月光会改变曝光、反差和能见度，提前规划能避免现场意外。" },
        { question: "Solora 只显示月相吗？", answer: "不是。它还提供照明度、月出月落和更完整的天空背景。" },
        { question: "不拍星空也有用吗？", answer: "有用。月亮规划同样适用于旅行、月出构图和一般户外活动。" },
      ],
      relatedLinks: ["milky-way-planner", "sunrise-sunset-app", "aurora-forecast-app"],
    },
    "aurora-forecast-app": {
      title: "更适合规划北极光的极光预报应用",
      description: "在出发前结合当地天气、云量、黑暗程度和实用背景信息来跟踪极光机会。",
      eyebrow: "极光规划",
      primaryKeyword: "极光预报应用",
      heroAlt: "Solora 中的极光规划预览",
      benefits: ["不要只依赖单一指数或提醒。", "把黑暗程度、云量和地点放进同一个决策流程。", "当天空条件变化很快时，做出更好的临场决定。"],
      useCases: ["北极光摄影旅行。", "在多个区域和备选点之间做判断。", "在多变天气的高纬度地区做规划。"],
      faqs: [
        { question: "一个好的极光应用应该包含什么？", answer: "它应该把活动信号、云量、黑暗程度和地点背景结合起来，这正是 Solora 的工作流。" },
        { question: "Kp 值高就够了吗？", answer: "不够。能见度、黑暗程度、天气和你所在区域同样重要。" },
        { question: "Solora 能帮助我决定是否值得出行吗？", answer: "可以。它就是为你在开车或飞行前做出现实决策而设计的。" },
      ],
      relatedLinks: ["milky-way-planner", "moon-phase-calendar-app", "sunrise-sunset-app"],
    },
    "milky-way-planner": {
      title: "银河规划工具，帮你找到更黑的夜晚和更好的时机",
      description: "结合黑暗程度、月光、天气和能见度来规划银河拍摄，在出发前选出更强的夜晚。",
      eyebrow: "银河规划",
      primaryKeyword: "银河规划工具",
      heroAlt: "Solora 中的银河规划预览",
      benefits: ["找到月光干扰更少的暗夜。", "不要只看天文时间，还要结合天气和能见度。", "在一个流程中规划季节性的银河窗口。"],
      useCases: ["银河风光摄影。", "暗空地点旅行。", "为深空或星空拍摄选择无月窗口。"],
      faqs: [
        { question: "什么样的银河规划工具才真正有用？", answer: "你需要同时看黑暗程度、月光、天气和可见性，Solora 会把这些整合到一起。" },
        { question: "Solora 能帮我避开太亮的月光吗？", answer: "可以。月相和月出月落时间本身就是规划流程的一部分。" },
        { question: "它只在银河旺季有用吗？", answer: "不是。它同样适用于季初、季末和边缘条件的判断。" },
      ],
      relatedLinks: ["moon-phase-calendar-app", "aurora-forecast-app", "sunrise-sunset-app"],
    },
  },
}

export function getUiDictionary(locale: Locale) {
  return locale === "pt" || locale === "zh" ? derivedUiDictionary[locale] : uiDictionary[locale]
}

export function getHomeContent(locale: Locale) {
  return locale === "pt" || locale === "zh" ? derivedHomeContent[locale] : homeContent[locale]
}

export function getBlogIndexContent(locale: Locale) {
  return locale === "pt" || locale === "zh" ? derivedBlogIndexContent[locale] : blogIndexContent[locale]
}

export function getPressKitContent(locale: Locale) {
  return locale === "pt" || locale === "zh" ? derivedPressKitContent[locale] : pressKitContent[locale]
}

export function getFeaturePageContent(slug: FeaturePageSlug, locale: Locale) {
  return locale === "pt" || locale === "zh" ? derivedFeaturePageContent[locale][slug] : featurePageContent[slug][locale]
}
