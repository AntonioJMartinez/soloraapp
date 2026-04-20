import { Locale } from "@/lib/i18n"

type AuthoredLocale = Exclude<Locale, "pt" | "zh">

export type ArticleSection = {
  heading: string
  paragraphs: string[]
}

export type BlogCategory = "Astronomy" | "Aurora" | "Photography" | "Weather"

export type LocalizedBlogArticle = {
  title: string
  description: string
  excerpt: string
  imageAlt: string
  sections: ArticleSection[]
  ctaTitle: string
  ctaDescription: string
  relatedLinks: Array<{ href: string; label: string }>
}

type BlogArticleDefinition = {
  slug: string
  category: BlogCategory
  minutes: number
  publishDate: string
  image: string
  featured: boolean
  locales: Record<AuthoredLocale, LocalizedBlogArticle>
}

export type BlogPostSummary = {
  id: string
  title: string
  excerpt: string
  category: string
  readTime: string
  publishDate: string
  image: string
  featured: boolean
}

const readTimeLabel: Record<Locale, string> = {
  en: "min read",
  es: "min de lectura",
  fr: "min de lecture",
  it: "min di lettura",
  de: "Min. Lesezeit",
  pt: "min de leitura",
  zh: "分钟阅读",
}

export const categoryLabels: Record<Locale, Record<BlogCategory, string>> = {
  en: { Astronomy: "Astronomy", Aurora: "Aurora", Photography: "Photography", Weather: "Weather" },
  es: { Astronomy: "Astronomía", Aurora: "Aurora", Photography: "Fotografía", Weather: "Tiempo" },
  fr: { Astronomy: "Astronomie", Aurora: "Aurore", Photography: "Photographie", Weather: "Météo" },
  it: { Astronomy: "Astronomia", Aurora: "Aurora", Photography: "Fotografia", Weather: "Meteo" },
  de: { Astronomy: "Astronomie", Aurora: "Aurora", Photography: "Fotografie", Weather: "Wetter" },
  pt: { Astronomy: "Astronomia", Aurora: "Aurora", Photography: "Fotografia", Weather: "Clima" },
  zh: { Astronomy: "天文", Aurora: "极光", Photography: "摄影", Weather: "天气" },
}

function article(
  slug: string,
  category: BlogCategory,
  minutes: number,
  publishDate: string,
  image: string,
  featured: boolean,
  locales: Record<AuthoredLocale, LocalizedBlogArticle>,
): BlogArticleDefinition {
  return {
    slug,
    category,
    minutes,
    publishDate,
    image,
    featured,
    locales,
  }
}

const manualBlogArticles: BlogArticleDefinition[] = [
  article(
    "total-solar-eclipse-august-2026",
    "Astronomy",
    12,
    "2026-01-10",
    "solar-eclipse-astronomical-event.png",
    true,
    {
      en: {
        title: "Total Solar Eclipse August 12, 2026: Best Viewing Locations, Path Map, and Photography Tips",
        description: "Plan for the August 12, 2026 total solar eclipse with path highlights, travel notes, weather strategy, and practical photography advice.",
        excerpt: "Plan for the August 12, 2026 total solar eclipse with path highlights, travel notes, weather strategy, and practical photography advice.",
        imageAlt: "Total solar eclipse path and viewing planning for August 2026",
        sections: [
          { heading: "Why this eclipse matters", paragraphs: ["The August 12, 2026 total solar eclipse is one of the most important sky events of the decade for Europe and nearby travel destinations.", "If you want totality instead of a deep partial eclipse, path planning matters as much as weather."] },
          { heading: "How to choose a viewing location", paragraphs: ["Start with the path of totality, then compare cloud history, travel logistics, and your flexibility to move the night before.", "A slightly less famous location with stronger weather odds can beat a crowded hotspot."] },
          { heading: "Photography priorities", paragraphs: ["Build your plan around exposure changes, a stable tripod position, and a simple sequence you can execute under pressure.", "If this is your first total eclipse, do not sacrifice the experience just to chase too many camera setups."] },
        ],
        ctaTitle: "Plan eclipse days with more context",
        ctaDescription: "Use Solora to combine sky timing, moon data, and practical forecast context before your next sky trip.",
        relatedLinks: [
          { href: "/blog/astronomical-events-2026", label: "Astronomical Events 2026" },
          { href: "/blog/partial-lunar-eclipse-august-2026", label: "Partial Lunar Eclipse August 2026" },
          { href: "/sunrise-sunset-app", label: "Sunrise & Sunset App" },
        ],
      },
      es: {
        title: "Eclipse solar total del 12 de agosto de 2026: mejores lugares, mapa de la franja y consejos fotográficos",
        description: "Planifica el eclipse solar total del 12 de agosto de 2026 con franja de totalidad, notas de viaje, estrategia meteorológica y consejos fotográficos.",
        excerpt: "Planifica el eclipse solar total del 12 de agosto de 2026 con franja de totalidad, notas de viaje, estrategia meteorológica y consejos fotográficos.",
        imageAlt: "Planificación de la franja del eclipse solar total de agosto de 2026",
        sections: [
          { heading: "Por qué importa este eclipse", paragraphs: ["El eclipse solar total del 12 de agosto de 2026 será uno de los grandes eventos del cielo de la década para Europa y zonas cercanas.", "Si quieres totalidad y no un eclipse parcial profundo, la planificación de la franja importa tanto como el tiempo."] },
          { heading: "Cómo elegir ubicación", paragraphs: ["Empieza por la franja de totalidad y después compara historial de nubes, logística y margen para moverte el día anterior.", "Un lugar menos famoso con mejores probabilidades meteorológicas puede superar a un hotspot masificado."] },
          { heading: "Prioridades fotográficas", paragraphs: ["Planifica pensando en los cambios de exposición, un trípode estable y una secuencia sencilla que puedas ejecutar con calma.", "Si es tu primer eclipse total, no sacrifiques la experiencia por intentar demasiadas cámaras a la vez."] },
        ],
        ctaTitle: "Planifica días de eclipse con más contexto",
        ctaDescription: "Usa Solora para combinar timing astronómico y previsión práctica antes de tu próxima salida fotográfica.",
        relatedLinks: [
          { href: "/blog/astronomical-events-2026", label: "Eventos astronómicos 2026" },
          { href: "/blog/partial-lunar-eclipse-august-2026", label: "Eclipse lunar parcial de agosto de 2026" },
          { href: "/sunrise-sunset-app", label: "App de amanecer y atardecer" },
        ],
      },
      fr: {
        title: "Éclipse solaire totale du 12 août 2026 : meilleurs lieux, carte de la bande et conseils photo",
        description: "Préparez l’éclipse solaire totale du 12 août 2026 avec carte de totalité, notes de voyage, stratégie météo et conseils photo.",
        excerpt: "Préparez l’éclipse solaire totale du 12 août 2026 avec carte de totalité, notes de voyage, stratégie météo et conseils photo.",
        imageAlt: "Planification du trajet de l’éclipse solaire totale d’août 2026",
        sections: [
          { heading: "Pourquoi cette éclipse compte", paragraphs: ["L’éclipse solaire totale du 12 août 2026 sera l’un des grands rendez-vous du ciel de la décennie pour l’Europe et les destinations voisines.", "Si vous voulez la totalité et pas seulement une phase partielle, la bande de totalité est aussi importante que la météo."] },
          { heading: "Choisir son lieu d’observation", paragraphs: ["Commencez par la bande de totalité, puis comparez historique nuageux, logistique de voyage et liberté de vous déplacer à la dernière minute.", "Un lieu moins célèbre mais plus fiable côté météo peut être un meilleur choix qu’un spot surchargé."] },
          { heading: "Priorités photo", paragraphs: ["Structurez votre plan autour des changements d’exposition, d’un trépied stable et d’une séquence simple à exécuter.", "Si c’est votre première totalité, ne laissez pas le matériel vous faire rater l’expérience."] },
        ],
        ctaTitle: "Préparez vos journées d’éclipse avec plus de contexte",
        ctaDescription: "Utilisez Solora pour réunir timing du ciel et contexte météo avant votre prochain voyage photo.",
        relatedLinks: [
          { href: "/blog/astronomical-events-2026", label: "Événements astronomiques 2026" },
          { href: "/blog/partial-lunar-eclipse-august-2026", label: "Éclipse lunaire partielle d’août 2026" },
          { href: "/sunrise-sunset-app", label: "App lever et coucher du soleil" },
        ],
      },
      it: {
        title: "Eclissi solare totale del 12 agosto 2026: migliori località, mappa della fascia e consigli fotografici",
        description: "Pianifica l’eclissi solare totale del 12 agosto 2026 con fascia di totalità, note di viaggio, strategia meteo e consigli pratici.",
        excerpt: "Pianifica l’eclissi solare totale del 12 agosto 2026 con fascia di totalità, note di viaggio, strategia meteo e consigli pratici.",
        imageAlt: "Pianificazione della traiettoria dell’eclissi solare totale di agosto 2026",
        sections: [
          { heading: "Perché questa eclissi è importante", paragraphs: ["L’eclissi solare totale del 12 agosto 2026 sarà uno dei grandi eventi del cielo del decennio per l’Europa e le destinazioni vicine.", "Se vuoi la totalità e non solo una fase parziale molto profonda, la fascia di totalità conta quanto il meteo."] },
          { heading: "Come scegliere la località", paragraphs: ["Parti dalla fascia di totalità e poi confronta storico nuvoloso, logistica di viaggio e libertà di spostarti il giorno prima.", "Una località meno famosa ma più affidabile dal punto di vista meteorologico può essere la scelta migliore."] },
          { heading: "Priorità fotografiche", paragraphs: ["Costruisci il piano su variazioni di esposizione, cavalletto stabile e una sequenza semplice da eseguire senza stress.", "Se è la tua prima totalità, non sacrificare l’esperienza cercando troppi setup diversi."] },
        ],
        ctaTitle: "Pianifica i giorni di eclissi con più contesto",
        ctaDescription: "Usa Solora per unire timing del cielo e contesto meteo prima del tuo prossimo viaggio fotografico.",
        relatedLinks: [
          { href: "/blog/astronomical-events-2026", label: "Eventi astronomici 2026" },
          { href: "/blog/partial-lunar-eclipse-august-2026", label: "Eclissi lunare parziale agosto 2026" },
          { href: "/sunrise-sunset-app", label: "App alba e tramonto" },
        ],
      },
      de: {
        title: "Totale Sonnenfinsternis am 12. August 2026: beste Orte, Pfadkarte und Fototipps",
        description: "Plane die totale Sonnenfinsternis am 12. August 2026 mit Totalitätspfad, Reisehinweisen, Wetterstrategie und praktischen Fototipps.",
        excerpt: "Plane die totale Sonnenfinsternis am 12. August 2026 mit Totalitätspfad, Reisehinweisen, Wetterstrategie und praktischen Fototipps.",
        imageAlt: "Planung des Pfads der totalen Sonnenfinsternis im August 2026",
        sections: [
          { heading: "Warum diese Finsternis wichtig ist", paragraphs: ["Die totale Sonnenfinsternis am 12. August 2026 gehört zu den wichtigsten Himmelsereignissen des Jahrzehnts für Europa und nahe Reiseziele.", "Wenn du Totalität statt nur eine tiefe partielle Phase erleben willst, ist die Pfadplanung genauso wichtig wie das Wetter."] },
          { heading: "So wählst du den Beobachtungsort", paragraphs: ["Beginne mit dem Totalitätspfad und vergleiche dann Wolkenhistorie, Reiseaufwand und Flexibilität für einen kurzfristigen Ortswechsel.", "Ein weniger berühmter Ort mit besseren Wetterchancen kann stärker sein als ein überlaufener Hotspot."] },
          { heading: "Fotografische Prioritäten", paragraphs: ["Plane rund um Belichtungswechsel, ein stabiles Stativ und eine einfache Sequenz, die du sicher ausführen kannst.", "Wenn es deine erste totale Finsternis ist, opfere das Erlebnis nicht für zu viele Kamerasetups."] },
        ],
        ctaTitle: "Plane Finsternistage mit mehr Kontext",
        ctaDescription: "Nutze Solora, um Himmels-Timing und praktischen Wetterkontext vor deiner nächsten Sky-Reise zu verbinden.",
        relatedLinks: [
          { href: "/blog/astronomical-events-2026", label: "Astronomische Ereignisse 2026" },
          { href: "/blog/partial-lunar-eclipse-august-2026", label: "Partielle Mondfinsternis August 2026" },
          { href: "/sunrise-sunset-app", label: "Sonnenaufgangs- und Sonnenuntergangs-App" },
        ],
      },
    },
  ),
  article(
    "astronomical-events-2026",
    "Astronomy",
    12,
    "2026-01-05",
    "solar-eclipse-astronomical-event.png",
    true,
    {
      en: {
        title: "Astronomical Events Calendar 2026: Eclipses, Meteor Showers, Supermoons, and Best Nights to Shoot",
        description: "Use this 2026 astronomy calendar to plan eclipses, meteor showers, supermoons, aurora-friendly periods, and stronger night-sky sessions.",
        excerpt: "Use this 2026 astronomy calendar to plan eclipses, meteor showers, supermoons, aurora-friendly periods, and stronger night-sky sessions.",
        imageAlt: "Astronomical events calendar planning for 2026",
        sections: [
          { heading: "Why a yearly calendar helps", paragraphs: ["A yearly astronomy calendar lets you decide early which nights deserve travel, gear prep, and backup plans.", "It is easier to build a strong shooting year when eclipses, meteor showers, and moon cycles live in one place."] },
          { heading: "Events to prioritize", paragraphs: ["For 2026, the biggest planning anchors are the August total solar eclipse, major meteor shower peaks, and moon-dependent dark-sky windows.", "Aurora-friendly periods can also create high-value opportunities when weather and darkness align."] },
          { heading: "How to use the calendar well", paragraphs: ["Use the calendar as a shortlist, then refine with moonlight, local weather, and travel flexibility as the date gets closer.", "The strongest plans come from combining event dates with location-specific forecast context."] },
        ],
        ctaTitle: "Turn calendar dates into real plans",
        ctaDescription: "Use Solora to move from event awareness to location, weather, and timing decisions.",
        relatedLinks: [
          { href: "/blog/total-solar-eclipse-august-2026", label: "Total Solar Eclipse August 2026" },
          { href: "/blog/supermoons-2026", label: "Supermoons in 2026" },
          { href: "/milky-way-planner", label: "Milky Way Planner" },
        ],
      },
      es: {
        title: "Calendario de eventos astronómicos 2026: eclipses, lluvias de meteoros, superlunas y mejores noches",
        description: "Usa este calendario astronómico de 2026 para planificar eclipses, lluvias de meteoros, superlunas, periodos favorables para auroras y mejores sesiones nocturnas.",
        excerpt: "Usa este calendario astronómico de 2026 para planificar eclipses, lluvias de meteoros, superlunas, periodos favorables para auroras y mejores sesiones nocturnas.",
        imageAlt: "Planificación del calendario de eventos astronómicos de 2026",
        sections: [
          { heading: "Por qué ayuda un calendario anual", paragraphs: ["Un calendario astronómico anual te permite decidir con tiempo qué noches merecen viaje, preparación de equipo y plan B.", "Es más fácil construir un año fuerte cuando eclipses, lluvias de meteoros y ciclos lunares están en el mismo sitio."] },
          { heading: "Qué eventos priorizar", paragraphs: ["En 2026 destacan el eclipse solar total de agosto, los máximos de lluvias de meteoros y las ventanas de cielo oscuro marcadas por la luna.", "Los periodos favorables para auroras también pueden ofrecer oportunidades de alto valor si se alinean tiempo y oscuridad."] },
          { heading: "Cómo usar bien el calendario", paragraphs: ["Usa el calendario como lista corta y después ajusta según luz lunar, meteorología local y flexibilidad de viaje.", "Los mejores planes nacen de combinar fechas de eventos con contexto real de cada ubicación."] },
        ],
        ctaTitle: "Convierte fechas del calendario en planes reales",
        ctaDescription: "Usa Solora para pasar de conocer el evento a decidir ubicación, tiempo y timing.",
        relatedLinks: [
          { href: "/blog/total-solar-eclipse-august-2026", label: "Eclipse solar total de agosto de 2026" },
          { href: "/blog/supermoons-2026", label: "Superlunas de 2026" },
          { href: "/milky-way-planner", label: "Planificador de la Vía Láctea" },
        ],
      },
      fr: {
        title: "Calendrier des événements astronomiques 2026 : éclipses, pluies de météores, superlunes et meilleures nuits",
        description: "Utilisez ce calendrier astronomique 2026 pour préparer éclipses, pluies de météores, superlunes, périodes favorables aux aurores et meilleures sessions nocturnes.",
        excerpt: "Utilisez ce calendrier astronomique 2026 pour préparer éclipses, pluies de météores, superlunes, périodes favorables aux aurores et meilleures sessions nocturnes.",
        imageAlt: "Planification du calendrier astronomique 2026",
        sections: [
          { heading: "Pourquoi un calendrier annuel aide", paragraphs: ["Un calendrier astronomique annuel vous aide à décider tôt quelles nuits méritent un déplacement, du matériel et un plan de secours.", "Il est plus simple de construire une bonne année photo quand éclipses, météores et cycles lunaires sont réunis au même endroit."] },
          { heading: "Les événements à prioriser", paragraphs: ["En 2026, les grands repères sont l’éclipse solaire totale d’août, les pics majeurs de pluies de météores et les fenêtres de ciel sombre liées à la lune.", "Les périodes favorables aux aurores peuvent aussi devenir très intéressantes quand météo et obscurité suivent."] },
          { heading: "Bien utiliser le calendrier", paragraphs: ["Utilisez-le comme une shortlist, puis affinez avec la lune, la météo locale et votre flexibilité de voyage.", "Les meilleurs plans viennent du croisement entre dates d’événements et contexte réel du lieu."] },
        ],
        ctaTitle: "Transformez des dates en vrais plans",
        ctaDescription: "Utilisez Solora pour passer de la simple veille événementielle à une décision de lieu, météo et timing.",
        relatedLinks: [
          { href: "/blog/total-solar-eclipse-august-2026", label: "Éclipse solaire totale août 2026" },
          { href: "/blog/supermoons-2026", label: "Superlunes 2026" },
          { href: "/milky-way-planner", label: "Planificateur Voie lactée" },
        ],
      },
      it: {
        title: "Calendario eventi astronomici 2026: eclissi, sciami meteorici, superlune e migliori notti",
        description: "Usa questo calendario astronomico 2026 per pianificare eclissi, sciami meteorici, superlune, periodi favorevoli alle aurore e migliori sessioni notturne.",
        excerpt: "Usa questo calendario astronomico 2026 per pianificare eclissi, sciami meteorici, superlune, periodi favorevoli alle aurore e migliori sessioni notturne.",
        imageAlt: "Pianificazione del calendario astronomico 2026",
        sections: [
          { heading: "Perché un calendario annuale aiuta", paragraphs: ["Un calendario astronomico annuale ti aiuta a decidere in anticipo quali notti meritano viaggio, attrezzatura e piano di backup.", "È più facile costruire un anno forte quando eclissi, meteore e cicli lunari sono nello stesso posto."] },
          { heading: "Quali eventi prioritizzare", paragraphs: ["Nel 2026 i grandi riferimenti sono l’eclissi solare totale di agosto, i picchi principali degli sciami meteorici e le finestre di cielo scuro legate alla luna.", "Anche i periodi favorevoli alle aurore possono diventare occasioni importanti quando meteo e oscurità si allineano."] },
          { heading: "Come usare bene il calendario", paragraphs: ["Usalo come shortlist, poi affina con luce lunare, meteo locale e flessibilità di viaggio.", "I piani migliori nascono dall’unione tra date astronomiche e contesto reale della località."] },
        ],
        ctaTitle: "Trasforma le date in piani reali",
        ctaDescription: "Usa Solora per passare dal calendario alla scelta concreta di luogo, meteo e timing.",
        relatedLinks: [
          { href: "/blog/total-solar-eclipse-august-2026", label: "Eclissi solare totale agosto 2026" },
          { href: "/blog/supermoons-2026", label: "Superlune 2026" },
          { href: "/milky-way-planner", label: "Planner Via Lattea" },
        ],
      },
      de: {
        title: "Astronomischer Ereigniskalender 2026: Finsternisse, Meteorschauer, Supermonde und die besten Nächte",
        description: "Nutze diesen Astronomiekalender 2026, um Finsternisse, Meteorschauer, Supermonde, aurorafreundliche Phasen und stärkere Nachtsessions zu planen.",
        excerpt: "Nutze diesen Astronomiekalender 2026, um Finsternisse, Meteorschauer, Supermonde, aurorafreundliche Phasen und stärkere Nachtsessions zu planen.",
        imageAlt: "Planung des astronomischen Ereigniskalenders 2026",
        sections: [
          { heading: "Warum ein Jahreskalender hilft", paragraphs: ["Ein Astronomiekalender für das ganze Jahr hilft dir früh zu entscheiden, welche Nächte Reise, Ausrüstung und Backup-Pläne verdienen.", "Es ist leichter, ein starkes Shooting-Jahr aufzubauen, wenn Finsternisse, Meteorschauer und Mondzyklen an einem Ort stehen."] },
          { heading: "Welche Ereignisse Priorität haben", paragraphs: ["2026 sind die großen Anker die totale Sonnenfinsternis im August, wichtige Meteorschauer-Peaks und mondabhängige Dark-Sky-Fenster.", "Aurorafreundliche Phasen können ebenfalls starke Chancen bieten, wenn Wetter und Dunkelheit mitspielen."] },
          { heading: "So nutzt du den Kalender richtig", paragraphs: ["Nutze den Kalender als Vorauswahl und verfeinere dann mit Mondlicht, lokalem Wetter und Reise-Flexibilität.", "Die besten Pläne entstehen aus der Verbindung von Ereignisdatum und ortsspezifischem Forecast-Kontext."] },
        ],
        ctaTitle: "Mach aus Kalenderdaten echte Pläne",
        ctaDescription: "Nutze Solora, um aus Ereigniswissen konkrete Standort-, Wetter- und Timing-Entscheidungen zu machen.",
        relatedLinks: [
          { href: "/blog/total-solar-eclipse-august-2026", label: "Totale Sonnenfinsternis August 2026" },
          { href: "/blog/supermoons-2026", label: "Supermonde 2026" },
          { href: "/milky-way-planner", label: "Milchstraßen-Planer" },
        ],
      },
    },
  ),
  article(
    "aurora-forecast-2026",
    "Aurora",
    9,
    "2026-01-18",
    "northern-lights-aurora-borealis-photography.png",
    true,
    {
      en: {
        title: "Aurora Forecast 2026: Is Solar Cycle 25 Still Good for Northern Lights Photography?",
        description: "Use this 2026 aurora outlook to understand why Solar Cycle 25 still matters, how to think about aurora demand after recent peaks, and what photographers should plan around.",
        excerpt: "Understand why Solar Cycle 25 still matters in 2026 and how photographers should think about aurora forecasting, weather, and dark-sky planning.",
        imageAlt: "Aurora forecast and northern lights planning for 2026",
        sections: [
          { heading: "Why aurora interest should stay high", paragraphs: ["Recent years pushed aurora back into the mainstream, and that momentum should still matter in 2026.", "The opportunity is still strong, but interpretation matters more than hype."] },
          { heading: "What to watch besides geomagnetic activity", paragraphs: ["Cloud cover, local darkness, moonlight, and regional flexibility still make or break a real aurora night.", "A strong alert without a usable sky is not enough."] },
          { heading: "How photographers should plan", paragraphs: ["Think in terms of regions, backup locations, and fast weather checks instead of betting everything on a single screenshot.", "The best aurora workflow combines the science signal with field realities."] },
        ],
        ctaTitle: "Plan aurora nights with more than a single alert",
        ctaDescription: "Track aurora-friendly windows with weather, darkness, and local context in Solora.",
        relatedLinks: [
          { href: "/blog/aurora-prediction-guide", label: "Aurora Prediction Guide" },
          { href: "/aurora-forecast-app", label: "Aurora Forecast App" },
          { href: "/blog/weather-patterns-sky-photography", label: "Weather guide" },
        ],
      },
      es: {
        title: "Previsión de auroras 2026: ¿sigue siendo bueno el ciclo solar 25 para fotografiar auroras?",
        description: "Usa esta perspectiva de auroras 2026 para entender por qué el ciclo solar 25 sigue importando y cómo deberían planificar los fotógrafos.",
        excerpt: "Entiende por qué el ciclo solar 25 sigue importando en 2026 y cómo pensar en previsión, tiempo y cielo oscuro para fotografiar auroras.",
        imageAlt: "Previsión de auroras y planificación de auroras boreales para 2026",
        sections: [
          { heading: "Por qué el interés por las auroras seguirá alto", paragraphs: ["Los últimos años devolvieron las auroras al primer plano y ese impulso seguirá pesando en 2026.", "La oportunidad sigue siendo fuerte, pero importa más interpretar bien que dejarse llevar por el hype."] },
          { heading: "Qué mirar además de la actividad geomagnética", paragraphs: ["Nubosidad, oscuridad local, luz lunar y flexibilidad regional siguen decidiendo si una noche de auroras es real o no.", "Una alerta fuerte sin cielo utilizable no basta."] },
          { heading: "Cómo deberían planificar los fotógrafos", paragraphs: ["Piensa en regiones, ubicaciones de reserva y comprobaciones rápidas del tiempo en vez de apostar todo a una captura de pantalla.", "El mejor flujo une la señal científica con la realidad del terreno."] },
        ],
        ctaTitle: "Planifica noches de auroras con más que una alerta",
        ctaDescription: "Sigue ventanas favorables con tiempo, oscuridad y contexto local en Solora.",
        relatedLinks: [
          { href: "/blog/aurora-prediction-guide", label: "Guía de predicción de auroras" },
          { href: "/aurora-forecast-app", label: "App de auroras" },
          { href: "/blog/weather-patterns-sky-photography", label: "Guía del tiempo" },
        ],
      },
      fr: {
        title: "Prévision d’aurores 2026 : le cycle solaire 25 reste-t-il bon pour la photo d’aurores boréales ?",
        description: "Utilisez cette vue d’ensemble 2026 pour comprendre pourquoi le cycle solaire 25 compte encore et comment les photographes devraient planifier.",
        excerpt: "Comprenez pourquoi le cycle solaire 25 reste important en 2026 et comment penser prévision, météo et ciel sombre pour les aurores.",
        imageAlt: "Prévision d’aurores et planification photo 2026",
        sections: [
          { heading: "Pourquoi l’intérêt pour les aurores reste élevé", paragraphs: ["Les dernières années ont remis les aurores au centre de l’attention et cet élan comptera encore en 2026.", "L’opportunité reste forte, mais l’interprétation compte davantage que le buzz."] },
          { heading: "Ce qu’il faut surveiller au-delà de l’activité géomagnétique", paragraphs: ["Nuages, obscurité locale, lumière lunaire et flexibilité régionale déterminent toujours une vraie nuit d’aurores.", "Une alerte forte sans ciel exploitable ne suffit pas."] },
          { heading: "Comment les photographes doivent planifier", paragraphs: ["Pensez en zones, lieux de secours et vérifications météo rapides plutôt qu’en un seul screenshot.", "Le meilleur workflow unit le signal scientifique et la réalité terrain."] },
        ],
        ctaTitle: "Préparez vos nuits d’aurores avec plus qu’une simple alerte",
        ctaDescription: "Suivez les fenêtres favorables avec météo, obscurité et contexte local dans Solora.",
        relatedLinks: [
          { href: "/blog/aurora-prediction-guide", label: "Guide de prévision des aurores" },
          { href: "/aurora-forecast-app", label: "App de prévision d’aurores" },
          { href: "/blog/weather-patterns-sky-photography", label: "Guide météo" },
        ],
      },
      it: {
        title: "Aurora forecast 2026: il ciclo solare 25 è ancora favorevole per fotografare l’aurora boreale?",
        description: "Usa questa panoramica 2026 per capire perché il ciclo solare 25 conta ancora e come dovrebbero pianificare i fotografi.",
        excerpt: "Capisci perché il ciclo solare 25 è ancora importante nel 2026 e come ragionare su previsioni, meteo e cielo buio per l’aurora.",
        imageAlt: "Aurora forecast e pianificazione aurora 2026",
        sections: [
          { heading: "Perché l’interesse per le aurore resterà alto", paragraphs: ["Gli ultimi anni hanno riportato le aurore al centro dell’attenzione e questa spinta resterà rilevante anche nel 2026.", "L’occasione resta forte, ma conta di più interpretare bene che inseguire l’entusiasmo del momento."] },
          { heading: "Cosa guardare oltre all’attività geomagnetica", paragraphs: ["Nuvole, oscurità locale, luce lunare e flessibilità geografica decidono ancora una vera notte di aurora.", "Un alert forte senza un cielo utilizzabile non basta."] },
          { heading: "Come dovrebbero pianificare i fotografi", paragraphs: ["Ragiona per regioni, spot di backup e controlli meteo rapidi invece di affidarti a un solo screenshot.", "Il miglior workflow unisce il segnale scientifico con la realtà sul campo."] },
        ],
        ctaTitle: "Pianifica le notti di aurora con più di un semplice alert",
        ctaDescription: "Segui finestre favorevoli con meteo, oscurità e contesto locale in Solora.",
        relatedLinks: [
          { href: "/blog/aurora-prediction-guide", label: "Guida previsione aurora" },
          { href: "/aurora-forecast-app", label: "App previsioni aurora" },
          { href: "/blog/weather-patterns-sky-photography", label: "Guida meteo" },
        ],
      },
      de: {
        title: "Aurora-Prognose 2026: Ist Sonnenzyklus 25 noch gut für Nordlichtfotografie?",
        description: "Nutze diesen Aurora-Ausblick 2026, um zu verstehen, warum Sonnenzyklus 25 noch zählt und wie Fotografen planen sollten.",
        excerpt: "Verstehe, warum Sonnenzyklus 25 im Jahr 2026 weiter wichtig ist und wie Fotografen Forecast, Wetter und Dark-Sky-Kontext bewerten sollten.",
        imageAlt: "Aurora-Prognose und Nordlichtplanung 2026",
        sections: [
          { heading: "Warum das Interesse an Aurora hoch bleibt", paragraphs: ["Die letzten Jahre haben Aurora wieder ins Zentrum gerückt und dieser Schwung wirkt auch 2026 weiter.", "Die Chance ist stark, aber Interpretation zählt mehr als Hype."] },
          { heading: "Was du neben geomagnetischer Aktivität beachten solltest", paragraphs: ["Wolken, lokale Dunkelheit, Mondlicht und regionale Flexibilität entscheiden weiterhin über eine echte Aurora-Nacht.", "Ein starker Alert ohne nutzbaren Himmel reicht nicht."] },
          { heading: "Wie Fotografen planen sollten", paragraphs: ["Denk in Regionen, Backup-Spots und schnellen Wetterchecks statt alles auf einen Screenshot zu setzen.", "Der beste Workflow verbindet das wissenschaftliche Signal mit den Bedingungen vor Ort."] },
        ],
        ctaTitle: "Plane Aurora-Nächte mit mehr als nur einem Alert",
        ctaDescription: "Verfolge aurorafreundliche Fenster mit Wetter, Dunkelheit und lokalem Kontext in Solora.",
        relatedLinks: [
          { href: "/blog/aurora-prediction-guide", label: "Aurora-Vorhersage-Guide" },
          { href: "/aurora-forecast-app", label: "Aurora-Vorhersage-App" },
          { href: "/blog/weather-patterns-sky-photography", label: "Wetter-Guide" },
        ],
      },
    },
  ),
  article(
    "total-lunar-eclipse-march-2026",
    "Astronomy",
    9,
    "2026-01-12",
    "total-lunar-eclipse-september-2025.jpg",
    false,
    {
      en: {
        title: "Total Lunar Eclipse March 2-3, 2026: Blood Moon Viewing Guide",
        description: "Plan the March 2026 blood moon with eclipse timing strategy, visibility expectations, and practical lunar-eclipse photography advice.",
        excerpt: "Plan the March 2026 blood moon with eclipse timing strategy, visibility expectations, and practical lunar-eclipse photography advice.",
        imageAlt: "Total lunar eclipse blood moon planning for March 2026",
        sections: [
          { heading: "What to expect", paragraphs: ["The March 2-3, 2026 total lunar eclipse offers a full blood moon experience for regions with the right visibility window.", "Because lunar eclipses unfold slowly, timing and local visibility matter more than rushing to one exact minute."] },
          { heading: "How to plan the session", paragraphs: ["Check moon altitude, cloud cover, and whether you want a clean telephoto framing or a wider landscape composition.", "Arrive early enough to set up while the moon is still bright and easy to track."] },
          { heading: "Photography approach", paragraphs: ["Expose for the brightest phase first, then adjust as the moon darkens into totality.", "A stable tripod and a rehearsed lens choice matter more than complicated gear changes."] },
        ],
        ctaTitle: "Plan blood moon nights with forecast context",
        ctaDescription: "Use Solora to combine moon timing, weather, and visibility before you head out.",
        relatedLinks: [
          { href: "/blog/partial-lunar-eclipse-august-2026", label: "Partial Lunar Eclipse August 2026" },
          { href: "/moon-phase-calendar-app", label: "Moon Phase Calendar App" },
          { href: "/blog/moon-photography-calendar-2026", label: "Moon Photography Calendar 2026" },
        ],
      },
      es: {
        title: "Eclipse lunar total del 2-3 de marzo de 2026: guía para ver la luna de sangre",
        description: "Planifica la luna de sangre de marzo de 2026 con estrategia de horarios, expectativas de visibilidad y consejos fotográficos.",
        excerpt: "Planifica la luna de sangre de marzo de 2026 con estrategia de horarios, expectativas de visibilidad y consejos fotográficos.",
        imageAlt: "Planificación de la luna de sangre del eclipse lunar total de marzo de 2026",
        sections: [
          { heading: "Qué esperar", paragraphs: ["El eclipse lunar total del 2-3 de marzo de 2026 ofrece una experiencia completa de luna de sangre en las regiones con buena visibilidad.", "Como los eclipses lunares evolucionan lentamente, el horario y la visibilidad local importan más que un solo minuto exacto."] },
          { heading: "Cómo planificar la sesión", paragraphs: ["Revisa altura de la luna, nubosidad y si buscas un encuadre tele o una composición más abierta con paisaje.", "Llega con tiempo para montar mientras la luna sigue brillante y fácil de seguir."] },
          { heading: "Enfoque fotográfico", paragraphs: ["Expón para la fase más luminosa y ajusta cuando la luna se oscurezca hacia la totalidad.", "Un trípode estable y una elección de lente ensayada valen más que cambios de equipo complicados."] },
        ],
        ctaTitle: "Planifica noches de luna de sangre con contexto",
        ctaDescription: "Usa Solora para combinar timing lunar, tiempo y visibilidad antes de salir.",
        relatedLinks: [
          { href: "/blog/partial-lunar-eclipse-august-2026", label: "Eclipse lunar parcial de agosto de 2026" },
          { href: "/moon-phase-calendar-app", label: "App de calendario lunar" },
          { href: "/blog/moon-photography-calendar-2026", label: "Calendario fotográfico lunar 2026" },
        ],
      },
      fr: {
        title: "Éclipse lunaire totale des 2-3 mars 2026 : guide d’observation de la lune de sang",
        description: "Préparez la lune de sang de mars 2026 avec stratégie horaire, attentes de visibilité et conseils photo.",
        excerpt: "Préparez la lune de sang de mars 2026 avec stratégie horaire, attentes de visibilité et conseils photo.",
        imageAlt: "Planification de la lune de sang de l’éclipse lunaire totale de mars 2026",
        sections: [
          { heading: "À quoi s’attendre", paragraphs: ["L’éclipse lunaire totale des 2-3 mars 2026 offre une vraie expérience de lune de sang pour les régions bien placées.", "Comme une éclipse lunaire évolue lentement, le timing et la visibilité locale comptent plus qu’une minute unique."] },
          { heading: "Comment préparer la sortie", paragraphs: ["Regardez la hauteur de la lune, les nuages et décidez si vous voulez un cadrage serré ou une scène plus large.", "Arrivez tôt pour vous installer tant que la lune reste brillante et facile à repérer."] },
          { heading: "Approche photo", paragraphs: ["Exposez d’abord pour la phase lumineuse, puis ajustez lorsque la lune s’assombrit vers la totalité.", "Un trépied stable et un choix d’objectif anticipé comptent plus qu’un setup trop complexe."] },
        ],
        ctaTitle: "Préparez les nuits de lune de sang avec plus de contexte",
        ctaDescription: "Utilisez Solora pour combiner timing lunaire, météo et visibilité avant de partir.",
        relatedLinks: [
          { href: "/blog/partial-lunar-eclipse-august-2026", label: "Éclipse lunaire partielle août 2026" },
          { href: "/moon-phase-calendar-app", label: "App calendrier lunaire" },
          { href: "/blog/moon-photography-calendar-2026", label: "Calendrier photo de la lune 2026" },
        ],
      },
      it: {
        title: "Eclissi lunare totale 2-3 marzo 2026: guida alla luna di sangue",
        description: "Pianifica la luna di sangue di marzo 2026 con strategia sugli orari, aspettative di visibilità e consigli fotografici.",
        excerpt: "Pianifica la luna di sangue di marzo 2026 con strategia sugli orari, aspettative di visibilità e consigli fotografici.",
        imageAlt: "Pianificazione della luna di sangue dell’eclissi lunare totale di marzo 2026",
        sections: [
          { heading: "Cosa aspettarsi", paragraphs: ["L’eclissi lunare totale del 2-3 marzo 2026 offre una vera esperienza di luna di sangue nelle regioni giuste.", "Poiché l’eclissi lunare evolve lentamente, timing e visibilità locale contano più di un singolo minuto preciso."] },
          { heading: "Come pianificare la sessione", paragraphs: ["Controlla altezza della luna, nuvole e se vuoi un’inquadratura tele o una composizione più ampia con paesaggio.", "Arriva in anticipo per prepararti mentre la luna è ancora luminosa e facile da seguire."] },
          { heading: "Approccio fotografico", paragraphs: ["Esponi per la fase più luminosa e regola man mano che la luna si oscura verso la totalità.", "Un cavalletto stabile e una scelta dell’obiettivo già provata valgono più di troppi cambi di setup."] },
        ],
        ctaTitle: "Pianifica le notti di luna di sangue con più contesto",
        ctaDescription: "Usa Solora per unire timing lunare, meteo e visibilità prima di uscire.",
        relatedLinks: [
          { href: "/blog/partial-lunar-eclipse-august-2026", label: "Eclissi lunare parziale agosto 2026" },
          { href: "/moon-phase-calendar-app", label: "App calendario lunare" },
          { href: "/blog/moon-photography-calendar-2026", label: "Calendario fotografico lunare 2026" },
        ],
      },
      de: {
        title: "Totale Mondfinsternis 2.-3. März 2026: Guide zur Blutmond-Beobachtung",
        description: "Plane den Blutmond im März 2026 mit Timing-Strategie, Sichtbarkeits-Erwartungen und praktischen Fototipps.",
        excerpt: "Plane den Blutmond im März 2026 mit Timing-Strategie, Sichtbarkeits-Erwartungen und praktischen Fototipps.",
        imageAlt: "Planung des Blutmonds bei der totalen Mondfinsternis im März 2026",
        sections: [
          { heading: "Was dich erwartet", paragraphs: ["Die totale Mondfinsternis am 2.-3. März 2026 bietet in passenden Regionen eine echte Blutmond-Erfahrung.", "Weil eine Mondfinsternis langsam abläuft, sind Timing und lokale Sicht wichtiger als ein einzelner exakter Zeitpunkt."] },
          { heading: "So planst du die Session", paragraphs: ["Prüfe Mondhöhe, Wolken und ob du ein Telebild oder eine breitere Landschaftskomposition willst.", "Sei früh vor Ort, damit du aufbauen kannst, solange der Mond noch hell und leicht zu verfolgen ist."] },
          { heading: "Fotoansatz", paragraphs: ["Belichte zunächst für die helle Phase und passe dann an, wenn der Mond in die Totalität dunkler wird.", "Ein stabiles Stativ und eine vorher überlegte Objektivwahl sind wichtiger als komplexe Umbauten."] },
        ],
        ctaTitle: "Plane Blutmond-Nächte mit mehr Kontext",
        ctaDescription: "Nutze Solora, um Mond-Timing, Wetter und Sichtbarkeit vor deinem Aufbruch zu verbinden.",
        relatedLinks: [
          { href: "/blog/partial-lunar-eclipse-august-2026", label: "Partielle Mondfinsternis August 2026" },
          { href: "/moon-phase-calendar-app", label: "Mondphasen-Kalender-App" },
          { href: "/blog/moon-photography-calendar-2026", label: "Mondfotografie-Kalender 2026" },
        ],
      },
    },
  ),
  article(
    "partial-lunar-eclipse-august-2026",
    "Astronomy",
    8,
    "2026-01-14",
    "partial-lunar-eclipse-september-2025.png",
    false,
    {
      en: {
        title: "Partial Lunar Eclipse August 27-28, 2026: How to Photograph the 96% Eclipse",
        description: "Use this guide to plan the deep partial lunar eclipse in late August 2026 with forecast strategy and stronger moon photography decisions.",
        excerpt: "Use this guide to plan the deep partial lunar eclipse in late August 2026 with forecast strategy and stronger moon photography decisions.",
        imageAlt: "Deep partial lunar eclipse planning for August 2026",
        sections: [
          { heading: "Why this eclipse is still worth planning", paragraphs: ["Even without full totality, a 96% partial lunar eclipse can look dramatic and photograph beautifully.", "It is often easier to work with than a total eclipse because you keep more texture and brightness in frame."] },
          { heading: "How to decide whether to shoot", paragraphs: ["Use moon altitude, cloud cover, and your horizon line as the main filters.", "This kind of eclipse rewards clean eastern or western sightlines depending on your region and timing."] },
          { heading: "Photography notes", paragraphs: ["Bracket exposure as the shadow deepens and be ready for a brighter edge on the remaining lit section.", "Longer focal lengths work well, but wider contextual landscapes can feel more original."] },
        ],
        ctaTitle: "Plan lunar eclipse nights with more confidence",
        ctaDescription: "Use Solora to track moon timing, weather, and dark-sky context for your next session.",
        relatedLinks: [
          { href: "/blog/total-lunar-eclipse-march-2026", label: "Total Lunar Eclipse March 2026" },
          { href: "/moon-phase-calendar-app", label: "Moon Phase Calendar App" },
          { href: "/blog/moon-photography-calendar-2026", label: "Moon Photography Calendar 2026" },
        ],
      },
      es: {
        title: "Eclipse lunar parcial del 27-28 de agosto de 2026: cómo fotografiar el eclipse del 96%",
        description: "Usa esta guía para planificar el profundo eclipse lunar parcial de finales de agosto de 2026 con mejor estrategia y decisiones fotográficas.",
        excerpt: "Usa esta guía para planificar el profundo eclipse lunar parcial de finales de agosto de 2026 con mejor estrategia y decisiones fotográficas.",
        imageAlt: "Planificación del eclipse lunar parcial profundo de agosto de 2026",
        sections: [
          { heading: "Por qué merece la pena planificarlo", paragraphs: ["Aunque no llegue a la totalidad, un eclipse lunar parcial del 96% puede verse muy dramático y fotografiarse muy bien.", "A veces es incluso más fácil de trabajar que un eclipse total porque conserva más textura y brillo."] },
          { heading: "Cómo decidir si salir", paragraphs: ["Usa altura de la luna, nubosidad y línea de horizonte como filtros principales.", "Este tipo de eclipse recompensa horizontes limpios y buena visibilidad en la dirección correcta."] },
          { heading: "Notas fotográficas", paragraphs: ["Haz bracketing conforme avance la sombra y prepárate para un borde más brillante en la parte iluminada.", "Los teles funcionan bien, pero un paisaje amplio con contexto puede resultar más original."] },
        ],
        ctaTitle: "Planifica eclipses lunares con más confianza",
        ctaDescription: "Usa Solora para seguir timing lunar, tiempo y contexto nocturno en tu próxima salida.",
        relatedLinks: [
          { href: "/blog/total-lunar-eclipse-march-2026", label: "Eclipse lunar total de marzo de 2026" },
          { href: "/moon-phase-calendar-app", label: "App de calendario lunar" },
          { href: "/blog/moon-photography-calendar-2026", label: "Calendario fotográfico lunar 2026" },
        ],
      },
      fr: {
        title: "Éclipse lunaire partielle des 27-28 août 2026 : comment photographier l’éclipse à 96 %",
        description: "Utilisez ce guide pour préparer la profonde éclipse lunaire partielle de fin août 2026 avec une meilleure stratégie photo.",
        excerpt: "Utilisez ce guide pour préparer la profonde éclipse lunaire partielle de fin août 2026 avec une meilleure stratégie photo.",
        imageAlt: "Planification de l’éclipse lunaire partielle profonde d’août 2026",
        sections: [
          { heading: "Pourquoi elle mérite quand même un plan", paragraphs: ["Même sans totalité, une éclipse lunaire partielle à 96 % peut être visuellement très forte et très photogénique.", "Elle est parfois plus simple à gérer qu’une totalité car elle garde davantage de texture et de luminosité."] },
          { heading: "Comment décider de sortir", paragraphs: ["Prenez la hauteur de la lune, les nuages et la ligne d’horizon comme filtres principaux.", "Ce type d’éclipse récompense les horizons propres et une bonne visibilité locale."] },
          { heading: "Notes photo", paragraphs: ["Bracketez à mesure que l’ombre progresse et préparez-vous à un bord encore lumineux sur la partie éclairée.", "Les longues focales fonctionnent bien, mais un paysage large peut produire une image plus originale."] },
        ],
        ctaTitle: "Préparez les nuits d’éclipse lunaire avec plus d’assurance",
        ctaDescription: "Utilisez Solora pour suivre timing lunaire, météo et contexte de ciel sombre avant la sortie.",
        relatedLinks: [
          { href: "/blog/total-lunar-eclipse-march-2026", label: "Éclipse lunaire totale mars 2026" },
          { href: "/moon-phase-calendar-app", label: "App calendrier lunaire" },
          { href: "/blog/moon-photography-calendar-2026", label: "Calendrier photo de la lune 2026" },
        ],
      },
      it: {
        title: "Eclissi lunare parziale 27-28 agosto 2026: come fotografare l’eclissi al 96%",
        description: "Usa questa guida per pianificare la profonda eclissi lunare parziale di fine agosto 2026 con una strategia migliore.",
        excerpt: "Usa questa guida per pianificare la profonda eclissi lunare parziale di fine agosto 2026 con una strategia migliore.",
        imageAlt: "Pianificazione della profonda eclissi lunare parziale di agosto 2026",
        sections: [
          { heading: "Perché vale comunque la pena", paragraphs: ["Anche senza totalità, un’eclissi lunare parziale al 96% può risultare molto scenografica e fotogenica.", "Spesso è anche più semplice di una totale perché mantiene più texture e luminosità."] },
          { heading: "Come decidere se uscire", paragraphs: ["Usa altezza della luna, nuvole e linea dell’orizzonte come filtri principali.", "Questo tipo di eclissi premia orizzonti puliti e buona visibilità locale."] },
          { heading: "Note fotografiche", paragraphs: ["Fai bracketing mentre l’ombra avanza e preparati a una zona ancora luminosa sul bordo rimasto illuminato.", "Le focali lunghe funzionano bene, ma un paesaggio più ampio può risultare più originale."] },
        ],
        ctaTitle: "Pianifica le notti di eclissi lunare con più sicurezza",
        ctaDescription: "Usa Solora per seguire timing lunare, meteo e contesto del cielo notturno.",
        relatedLinks: [
          { href: "/blog/total-lunar-eclipse-march-2026", label: "Eclissi lunare totale marzo 2026" },
          { href: "/moon-phase-calendar-app", label: "App calendario lunare" },
          { href: "/blog/moon-photography-calendar-2026", label: "Calendario fotografico lunare 2026" },
        ],
      },
      de: {
        title: "Partielle Mondfinsternis 27.-28. August 2026: So fotografierst du die 96%-Finsternis",
        description: "Nutze diesen Guide, um die tiefe partielle Mondfinsternis Ende August 2026 mit besserer Strategie und stärkeren Mondfotos zu planen.",
        excerpt: "Nutze diesen Guide, um die tiefe partielle Mondfinsternis Ende August 2026 mit besserer Strategie und stärkeren Mondfotos zu planen.",
        imageAlt: "Planung der tiefen partiellen Mondfinsternis im August 2026",
        sections: [
          { heading: "Warum sie trotzdem lohnend ist", paragraphs: ["Auch ohne Totalität kann eine 96% partielle Mondfinsternis sehr dramatisch und fotogen wirken.", "Sie ist oft leichter zu fotografieren als eine totale Finsternis, weil mehr Textur und Helligkeit erhalten bleiben."] },
          { heading: "So entscheidest du, ob du rausgehst", paragraphs: ["Nutze Mondhöhe, Wolken und Horizontlinie als wichtigste Filter.", "Solche Finsternisse belohnen freie Sicht und gute lokale Bedingungen."] },
          { heading: "Fotohinweise", paragraphs: ["Belichte in Reihen, wenn der Schatten tiefer wird, und rechne mit einer helleren Kante auf dem beleuchteten Rest.", "Längere Brennweiten funktionieren gut, aber ein weiter Landschaftskontext kann origineller wirken."] },
        ],
        ctaTitle: "Plane Mondfinsternis-Nächte mit mehr Sicherheit",
        ctaDescription: "Nutze Solora, um Mond-Timing, Wetter und Nachthimmel-Kontext für deine nächste Session zu verfolgen.",
        relatedLinks: [
          { href: "/blog/total-lunar-eclipse-march-2026", label: "Totale Mondfinsternis März 2026" },
          { href: "/moon-phase-calendar-app", label: "Mondphasen-Kalender-App" },
          { href: "/blog/moon-photography-calendar-2026", label: "Mondfotografie-Kalender 2026" },
        ],
      },
    },
  ),
  article(
    "supermoons-2026",
    "Astronomy",
    7,
    "2026-01-16",
    "moon-phases-night-sky-photography.png",
    false,
    {
      en: {
        title: "Supermoons in 2026: Dates, Best Times to Watch, and Photo Ideas",
        description: "Plan moonrise photos, skyline compositions, and travel around the biggest full moons of 2026 with a practical supermoon guide.",
        excerpt: "Plan moonrise photos, skyline compositions, and travel around the biggest full moons of 2026 with a practical supermoon guide.",
        imageAlt: "Supermoon dates and moonrise photography planning for 2026",
        sections: [
          { heading: "Why supermoons matter", paragraphs: ["Supermoons create larger-looking full moons and stronger public interest, which makes them good planning anchors for both personal shoots and editorial coverage.", "They are most interesting when moonrise timing, foregrounds, and local weather line up."] },
          { heading: "How to choose the best night", paragraphs: ["The exact fullest night is not always the best photography night. Consider moonrise angle, cloud texture, and how crowded the location will be.", "Sometimes the night before or after gives cleaner composition options."] },
          { heading: "Photo ideas that work", paragraphs: ["City skylines, coastal horizons, and simple telephoto moonrise frames still work well when the atmosphere is clear.", "If conditions are softer, wider environmental scenes can feel more distinctive than chasing size alone."] },
        ],
        ctaTitle: "Plan moonrise nights with better timing",
        ctaDescription: "Use Solora to combine moon timing, weather, and local light conditions before the next big full moon.",
        relatedLinks: [
          { href: "/moon-phase-calendar-app", label: "Moon Phase Calendar App" },
          { href: "/blog/moon-photography-calendar-2026", label: "Moon Photography Calendar 2026" },
          { href: "/blog/astronomical-events-2026", label: "Astronomical Events 2026" },
        ],
      },
      es: {
        title: "Superlunas en 2026: fechas, mejores momentos y ideas fotográficas",
        description: "Planifica fotos de salida de luna, composiciones urbanas y viajes alrededor de las superlunas de 2026 con una guía práctica.",
        excerpt: "Planifica fotos de salida de luna, composiciones urbanas y viajes alrededor de las superlunas de 2026 con una guía práctica.",
        imageAlt: "Planificación de fechas de superluna y fotografía lunar para 2026",
        sections: [
          { heading: "Por qué importan las superlunas", paragraphs: ["Las superlunas generan más interés y pueden ser buenos anclajes para sesiones personales o contenido editorial.", "Funcionan mejor cuando coinciden timing de salida de luna, primer plano y meteorología."] },
          { heading: "Cómo elegir la mejor noche", paragraphs: ["La noche de la luna llena exacta no siempre es la mejor para fotografiar. Mira ángulo de moonrise, nubosidad y saturación del lugar.", "A veces la noche anterior o posterior ofrece mejores composiciones."] },
          { heading: "Ideas fotográficas que funcionan", paragraphs: ["Skylines urbanos, horizontes costeros y teleobjetivo a la salida de la luna siguen funcionando muy bien con atmósfera limpia.", "Si el cielo está más suave, una escena ambiental amplia puede resultar más original."] },
        ],
        ctaTitle: "Planifica noches de salida de luna con mejor timing",
        ctaDescription: "Usa Solora para combinar timing lunar, tiempo y condiciones locales antes de la próxima gran luna llena.",
        relatedLinks: [
          { href: "/moon-phase-calendar-app", label: "App de calendario lunar" },
          { href: "/blog/moon-photography-calendar-2026", label: "Calendario fotográfico lunar 2026" },
          { href: "/blog/astronomical-events-2026", label: "Eventos astronómicos 2026" },
        ],
      },
      fr: {
        title: "Superlunes 2026 : dates, meilleurs moments et idées photo",
        description: "Préparez vos photos de lever de lune, compositions urbaines et voyages autour des plus grandes pleines lunes de 2026.",
        excerpt: "Préparez vos photos de lever de lune, compositions urbaines et voyages autour des plus grandes pleines lunes de 2026.",
        imageAlt: "Planification des dates de superlunes et photo de lune pour 2026",
        sections: [
          { heading: "Pourquoi les superlunes comptent", paragraphs: ["Les superlunes génèrent davantage d’intérêt et peuvent devenir de bons repères de planification pour des shootings ou du contenu éditorial.", "Elles sont surtout intéressantes quand timing de lever, avant-plan et météo s’alignent."] },
          { heading: "Comment choisir la meilleure nuit", paragraphs: ["La nuit exacte de pleine lune n’est pas toujours la meilleure pour photographier. Regardez l’angle du lever, les nuages et la fréquentation du lieu.", "Parfois la veille ou le lendemain offrent une composition plus propre."] },
          { heading: "Idées photo utiles", paragraphs: ["Skylines, horizons côtiers et simples cadres télé au lever de lune restent efficaces si l’atmosphère est claire.", "Quand les conditions sont plus douces, une scène plus large peut produire une image plus originale."] },
        ],
        ctaTitle: "Préparez vos levers de lune avec un meilleur timing",
        ctaDescription: "Utilisez Solora pour combiner timing lunaire, météo et lumière locale avant la prochaine grande pleine lune.",
        relatedLinks: [
          { href: "/moon-phase-calendar-app", label: "App calendrier lunaire" },
          { href: "/blog/moon-photography-calendar-2026", label: "Calendrier photo de la lune 2026" },
          { href: "/blog/astronomical-events-2026", label: "Événements astronomiques 2026" },
        ],
      },
      it: {
        title: "Superlune 2026: date, momenti migliori e idee fotografiche",
        description: "Pianifica foto di moonrise, skyline e viaggi attorno alle superlune del 2026 con una guida pratica.",
        excerpt: "Pianifica foto di moonrise, skyline e viaggi attorno alle superlune del 2026 con una guida pratica.",
        imageAlt: "Pianificazione di date di superluna e fotografia lunare per il 2026",
        sections: [
          { heading: "Perché le superlune contano", paragraphs: ["Le superlune attirano più attenzione e possono diventare ottimi punti di riferimento per sessioni personali o contenuti editoriali.", "Sono davvero interessanti quando si allineano timing del moonrise, primo piano e meteo."] },
          { heading: "Come scegliere la notte migliore", paragraphs: ["La notte esatta di luna piena non è sempre la migliore per fotografare. Guarda angolo di moonrise, nuvole e affollamento della location.", "A volte la sera prima o quella dopo offrono composizioni più pulite."] },
          { heading: "Idee fotografiche efficaci", paragraphs: ["Skyline urbani, orizzonti costieri e teleobiettivi al moonrise funzionano ancora molto bene con atmosfera limpida.", "Se le condizioni sono più morbide, una scena ampia può risultare più distintiva."] },
        ],
        ctaTitle: "Pianifica le notti di moonrise con un timing migliore",
        ctaDescription: "Usa Solora per combinare timing lunare, meteo e condizioni di luce locali prima della prossima grande luna piena.",
        relatedLinks: [
          { href: "/moon-phase-calendar-app", label: "App calendario lunare" },
          { href: "/blog/moon-photography-calendar-2026", label: "Calendario fotografico lunare 2026" },
          { href: "/blog/astronomical-events-2026", label: "Eventi astronomici 2026" },
        ],
      },
      de: {
        title: "Supermonde 2026: Daten, beste Zeiten und Fotoideen",
        description: "Plane Mondaufgangsfotos, Skyline-Kompositionen und Reisen rund um die größten Vollmonde des Jahres 2026 mit diesem praktischen Guide.",
        excerpt: "Plane Mondaufgangsfotos, Skyline-Kompositionen und Reisen rund um die größten Vollmonde des Jahres 2026 mit diesem praktischen Guide.",
        imageAlt: "Planung von Supermond-Daten und Mondfotografie für 2026",
        sections: [
          { heading: "Warum Supermonde interessant sind", paragraphs: ["Supermonde sorgen für mehr öffentliche Aufmerksamkeit und eignen sich gut als Planungsanker für eigene Shootings oder redaktionelle Themen.", "Am spannendsten werden sie, wenn Mondaufgang, Vordergrund und Wetter zusammenpassen."] },
          { heading: "So wählst du die beste Nacht", paragraphs: ["Die exakte Vollmondnacht ist nicht immer die beste Fotonacht. Achte auf Mondaufgangswinkel, Wolkenstruktur und Besucherdichte des Ortes.", "Manchmal bietet die Nacht davor oder danach die sauberere Komposition."] },
          { heading: "Fotoideen, die funktionieren", paragraphs: ["Stadtsilhouetten, Küstenhorizonte und einfache Tele-Mondaufgangsbilder funktionieren bei klarer Atmosphäre weiterhin gut.", "Wenn die Bedingungen weicher sind, kann eine breitere Umgebungsszene spannender wirken."] },
        ],
        ctaTitle: "Plane Mondaufgangsnächte mit besserem Timing",
        ctaDescription: "Nutze Solora, um Mond-Timing, Wetter und lokale Lichtbedingungen vor dem nächsten großen Vollmond zu verbinden.",
        relatedLinks: [
          { href: "/moon-phase-calendar-app", label: "Mondphasen-Kalender-App" },
          { href: "/blog/moon-photography-calendar-2026", label: "Mondfotografie-Kalender 2026" },
          { href: "/blog/astronomical-events-2026", label: "Astronomische Ereignisse 2026" },
        ],
      },
    },
  ),
]

type GeneratedArticleSeed = {
  slug: string
  category: BlogCategory
  minutes: number
  publishDate: string
  image: string
  featured: boolean
  locales: Record<AuthoredLocale, Pick<LocalizedBlogArticle, "title" | "description" | "excerpt" | "imageAlt">>
}

function buildGeneratedSections(locale: Locale, category: BlogCategory, title: string): ArticleSection[] {
  const planningByLocale: Record<Locale, ArticleSection[]> = {
    en: [
      { heading: "What this guide helps you plan", paragraphs: [`Use ${title} to understand the timing, visibility, and planning decisions that matter before the event or shooting window arrives.`] },
      { heading: "How to prepare", paragraphs: ["Check local weather, darkness, horizon quality, and travel flexibility instead of relying on the event date alone."] },
      { heading: "Photography note", paragraphs: [category === "Photography" ? "Focus on light, composition, and arrival timing so you can adapt quickly when conditions change." : "Bring a simple shooting plan that matches the event timing and lets you react calmly in the field."] },
    ],
    es: [
      { heading: "Qué te ayuda a planificar esta guía", paragraphs: [`Usa ${title} para entender el timing, la visibilidad y las decisiones que importan antes de que llegue el evento o la ventana de fotografía.`] },
      { heading: "Cómo prepararte", paragraphs: ["Comprueba tiempo local, oscuridad, horizonte y flexibilidad de viaje en lugar de depender solo de la fecha del evento."] },
      { heading: "Nota fotográfica", paragraphs: [category === "Photography" ? "Céntrate en luz, composición y hora de llegada para adaptarte rápido si cambian las condiciones." : "Lleva un plan de disparo sencillo que encaje con el horario del evento y te permita reaccionar con calma."] },
    ],
    fr: [
      { heading: "Ce que ce guide vous aide à préparer", paragraphs: [`Utilisez ${title} pour comprendre le timing, la visibilité et les décisions importantes avant l’événement ou la fenêtre photo.`] },
      { heading: "Comment vous préparer", paragraphs: ["Vérifiez météo locale, obscurité, horizon et flexibilité de déplacement au lieu de vous fier uniquement à la date."] },
      { heading: "Note photo", paragraphs: [category === "Photography" ? "Concentrez-vous sur la lumière, la composition et votre heure d’arrivée afin de vous adapter vite si les conditions changent." : "Prévoyez un plan de prise de vue simple en accord avec le timing de l’événement."] },
    ],
    it: [
      { heading: "Cosa ti aiuta a pianificare questa guida", paragraphs: [`Usa ${title} per capire timing, visibilità e decisioni importanti prima che arrivi l’evento o la finestra fotografica.`] },
      { heading: "Come prepararti", paragraphs: ["Controlla meteo locale, oscurità, qualità dell’orizzonte e flessibilità di viaggio invece di basarti solo sulla data."] },
      { heading: "Nota fotografica", paragraphs: [category === "Photography" ? "Concentrati su luce, composizione e orario di arrivo per adattarti rapidamente se le condizioni cambiano." : "Porta con te un piano di scatto semplice che segua il timing dell’evento."] },
    ],
    de: [
      { heading: "Wobei dir dieser Guide hilft", paragraphs: [`Nutze ${title}, um Timing, Sichtbarkeit und die wichtigen Planungsentscheidungen vor dem Ereignis oder Shooting-Fenster besser zu verstehen.`] },
      { heading: "So bereitest du dich vor", paragraphs: ["Prüfe lokales Wetter, Dunkelheit, Horizont und Reise-Flexibilität statt dich nur auf das Ereignisdatum zu verlassen."] },
      { heading: "Fotohinweis", paragraphs: [category === "Photography" ? "Konzentriere dich auf Licht, Komposition und Ankunftszeit, damit du bei wechselnden Bedingungen schnell reagieren kannst." : "Nimm einen einfachen Aufnahmeplan mit, der zum Timing des Ereignisses passt."] },
    ],
    pt: [
      { heading: "O que este guia ajuda você a planejar", paragraphs: [`Use ${title} para entender o timing, a visibilidade e as decisões que importam antes do evento ou da janela de fotos.`] },
      { heading: "Como se preparar", paragraphs: ["Verifique clima local, escuridão, horizonte e flexibilidade de viagem em vez de depender apenas da data do evento."] },
      { heading: "Nota fotográfica", paragraphs: [category === "Photography" ? "Concentre-se em luz, composição e horário de chegada para se adaptar rápido se as condições mudarem." : "Leve um plano de captura simples que acompanhe o timing do evento."] },
    ],
    zh: [
      { heading: "这篇指南能帮助你规划什么", paragraphs: [`使用《${title}》来理解在事件或拍摄窗口到来前，哪些时间、能见度和决策最关键。`] },
      { heading: "如何准备", paragraphs: ["不要只看事件日期，还要检查当地天气、黑暗程度、地平线条件以及行程机动性。"] },
      { heading: "摄影提示", paragraphs: [category === "Photography" ? "把重点放在光线、构图和到达时间上，这样在条件变化时能更快调整。" : "准备一个与事件时间匹配的简单拍摄计划，现场更容易冷静应对。"] },
    ],
  }

  return planningByLocale[locale]
}

function buildGeneratedRelatedLinks(locale: Locale): Array<{ href: string; label: string }> {
  const labels: Record<Locale, Array<{ href: string; label: string }>> = {
    en: [
      { href: "/blog/astronomical-events-2026", label: "Astronomical Events 2026" },
      { href: "/moon-phase-calendar-app", label: "Moon Phase Calendar App" },
      { href: "/aurora-forecast-app", label: "Aurora Forecast App" },
    ],
    es: [
      { href: "/blog/astronomical-events-2026", label: "Eventos astronómicos 2026" },
      { href: "/moon-phase-calendar-app", label: "App de calendario lunar" },
      { href: "/aurora-forecast-app", label: "App de auroras" },
    ],
    fr: [
      { href: "/blog/astronomical-events-2026", label: "Événements astronomiques 2026" },
      { href: "/moon-phase-calendar-app", label: "App calendrier lunaire" },
      { href: "/aurora-forecast-app", label: "App prévision d’aurores" },
    ],
    it: [
      { href: "/blog/astronomical-events-2026", label: "Eventi astronomici 2026" },
      { href: "/moon-phase-calendar-app", label: "App calendario lunare" },
      { href: "/aurora-forecast-app", label: "App previsioni aurora" },
    ],
    de: [
      { href: "/blog/astronomical-events-2026", label: "Astronomische Ereignisse 2026" },
      { href: "/moon-phase-calendar-app", label: "Mondphasen-Kalender-App" },
      { href: "/aurora-forecast-app", label: "Aurora-Vorhersage-App" },
    ],
    pt: [
      { href: "/blog/astronomical-events-2026", label: "Eventos astronômicos 2026" },
      { href: "/moon-phase-calendar-app", label: "App de calendário lunar" },
      { href: "/aurora-forecast-app", label: "App de previsão de aurora" },
    ],
    zh: [
      { href: "/blog/astronomical-events-2026", label: "2026 天文事件日历" },
      { href: "/moon-phase-calendar-app", label: "月相日历应用" },
      { href: "/aurora-forecast-app", label: "极光预报应用" },
    ],
  }

  return labels[locale]
}

const generatedArticleSeeds: GeneratedArticleSeed[] = [
  {
    slug: "lyrids-meteor-shower-2026",
    category: "Astronomy",
    minutes: 7,
    publishDate: "2026-02-01",
    image: "perseid-meteor-shower-night-sky.png",
    featured: false,
    locales: {
      en: { title: "Lyrids Meteor Shower 2026: Best Time to Watch and Photograph It", description: "Plan the April 2026 Lyrids with peak-night strategy, dark-sky planning, and practical meteor photography workflow.", excerpt: "Plan the April 2026 Lyrids with peak-night strategy, dark-sky planning, and practical meteor photography workflow.", imageAlt: "Lyrids meteor shower planning for 2026" },
      es: { title: "Lluvia de meteoros Líridas 2026: mejor momento para verla y fotografiarla", description: "Planifica las Líridas de abril de 2026 con estrategia para la noche pico, cielo oscuro y flujo práctico de fotografía de meteoros.", excerpt: "Planifica las Líridas de abril de 2026 con estrategia para la noche pico, cielo oscuro y flujo práctico de fotografía de meteoros.", imageAlt: "Planificación de las Líridas 2026" },
      fr: { title: "Pluie de météores des Lyrides 2026 : meilleur moment pour l’observer et la photographier", description: "Préparez les Lyrides d’avril 2026 avec stratégie de pic, ciel sombre et workflow photo des météores.", excerpt: "Préparez les Lyrides d’avril 2026 avec stratégie de pic, ciel sombre et workflow photo des météores.", imageAlt: "Planification des Lyrides 2026" },
      it: { title: "Sciame meteorico delle Liridi 2026: momento migliore per vederlo e fotografarlo", description: "Pianifica le Liridi di aprile 2026 con strategia per la notte di picco, cielo buio e workflow pratico.", excerpt: "Pianifica le Liridi di aprile 2026 con strategia per la notte di picco, cielo buio e workflow pratico.", imageAlt: "Pianificazione Liridi 2026" },
      de: { title: "Lyriden-Meteorschauer 2026: beste Zeit zum Beobachten und Fotografieren", description: "Plane die Lyriden im April 2026 mit Peak-Nacht-Strategie, Dark-Sky-Planung und praktischem Meteor-Workflow.", excerpt: "Plane die Lyriden im April 2026 mit Peak-Nacht-Strategie, Dark-Sky-Planung und praktischem Meteor-Workflow.", imageAlt: "Planung der Lyriden 2026" },
    },
  },
  {
    slug: "eta-aquarids-2026",
    category: "Astronomy",
    minutes: 7,
    publishDate: "2026-02-05",
    image: "perseid-meteor-shower-night-sky.png",
    featured: false,
    locales: {
      en: { title: "Eta Aquarids 2026: Best Meteor Shower for Southern Latitudes?", description: "Use this May 2026 Eta Aquarids guide to plan dark-sky sessions, viewing windows, and meteor-shower photography.", excerpt: "Use this May 2026 Eta Aquarids guide to plan dark-sky sessions, viewing windows, and meteor-shower photography.", imageAlt: "Eta Aquarids planning for 2026" },
      es: { title: "Eta Acuáridas 2026: ¿la mejor lluvia de meteoros para latitudes del sur?", description: "Usa esta guía de mayo de 2026 para planificar sesiones de cielo oscuro, ventanas de observación y fotografía de meteoros.", excerpt: "Usa esta guía de mayo de 2026 para planificar sesiones de cielo oscuro, ventanas de observación y fotografía de meteoros.", imageAlt: "Planificación de las Eta Acuáridas 2026" },
      fr: { title: "Eta Aquarides 2026 : la meilleure pluie de météores pour les latitudes sud ?", description: "Utilisez ce guide de mai 2026 pour préparer des sessions en ciel sombre, fenêtres d’observation et photo de météores.", excerpt: "Utilisez ce guide de mai 2026 pour préparer des sessions en ciel sombre, fenêtres d’observation et photo de météores.", imageAlt: "Planification des Eta Aquarides 2026" },
      it: { title: "Eta Aquaridi 2026: il miglior sciame meteorico per le latitudini meridionali?", description: "Usa questa guida di maggio 2026 per pianificare sessioni con cielo buio, finestre osservative e fotografia di meteore.", excerpt: "Usa questa guida di maggio 2026 per pianificare sessioni con cielo buio, finestre osservative e fotografia di meteore.", imageAlt: "Pianificazione Eta Aquaridi 2026" },
      de: { title: "Eta-Aquariden 2026: der beste Meteorschauer für südliche Breiten?", description: "Nutze diesen Guide für Mai 2026, um Dark-Sky-Sessions, Sichtbarkeitsfenster und Meteor-Fotografie zu planen.", excerpt: "Nutze diesen Guide für Mai 2026, um Dark-Sky-Sessions, Sichtbarkeitsfenster und Meteor-Fotografie zu planen.", imageAlt: "Planung der Eta-Aquariden 2026" },
    },
  },
  {
    slug: "perseid-meteor-shower-2026",
    category: "Astronomy",
    minutes: 9,
    publishDate: "2026-02-08",
    image: "perseid-meteor-shower-night-sky.png",
    featured: false,
    locales: {
      en: { title: "Perseid Meteor Shower 2026: Peak Dates, Moon Conditions, and Camera Settings", description: "Plan the 2026 Perseids with peak-night timing, moon-condition strategy, and better dark-sky decisions before you head out.", excerpt: "Plan the 2026 Perseids with peak-night timing, moon-condition strategy, and better dark-sky decisions before you head out.", imageAlt: "Perseid meteor shower planning for 2026" },
      es: { title: "Lluvia de meteoros Perseidas 2026: fechas pico, luna y ajustes de cámara", description: "Planifica las Perseidas 2026 con timing de la noche pico, estrategia según la luna y mejores decisiones de cielo oscuro.", excerpt: "Planifica las Perseidas 2026 con timing de la noche pico, estrategia según la luna y mejores decisiones de cielo oscuro.", imageAlt: "Planificación de las Perseidas 2026" },
      fr: { title: "Pluie de météores des Perséides 2026 : dates de pic, lune et réglages photo", description: "Préparez les Perséides 2026 avec timing du pic, stratégie lunaire et meilleures décisions de ciel sombre.", excerpt: "Préparez les Perséides 2026 avec timing du pic, stratégie lunaire et meilleures décisions de ciel sombre.", imageAlt: "Planification des Perséides 2026" },
      it: { title: "Sciame meteorico delle Perseidi 2026: date di picco, luna e impostazioni", description: "Pianifica le Perseidi 2026 con timing della notte di picco, strategia lunare e decisioni migliori sul cielo buio.", excerpt: "Pianifica le Perseidi 2026 con timing della notte di picco, strategia lunare e decisioni migliori sul cielo buio.", imageAlt: "Pianificazione Perseidi 2026" },
      de: { title: "Perseiden-Meteorschauer 2026: Peak-Daten, Mondbedingungen und Kameraeinstellungen", description: "Plane die Perseiden 2026 mit Peak-Nacht-Timing, Mondstrategie und besseren Dark-Sky-Entscheidungen.", excerpt: "Plane die Perseiden 2026 mit Peak-Nacht-Timing, Mondstrategie und besseren Dark-Sky-Entscheidungen.", imageAlt: "Planung der Perseiden 2026" },
    },
  },
  {
    slug: "geminids-meteor-shower-2026",
    category: "Astronomy",
    minutes: 8,
    publishDate: "2026-02-10",
    image: "perseid-meteor-shower-night-sky.png",
    featured: false,
    locales: {
      en: { title: "Geminids Meteor Shower 2026: Why It May Be the Best Meteor Shower of the Year", description: "Use this December 2026 Geminids guide to plan peak timing, moon conditions, and winter meteor-shower photography.", excerpt: "Use this December 2026 Geminids guide to plan peak timing, moon conditions, and winter meteor-shower photography.", imageAlt: "Geminids meteor shower planning for 2026" },
      es: { title: "Lluvia de meteoros Gemínidas 2026: por qué puede ser la mejor del año", description: "Usa esta guía de las Gemínidas 2026 para planificar pico, condiciones lunares y fotografía invernal de meteoros.", excerpt: "Usa esta guía de las Gemínidas 2026 para planificar pico, condiciones lunares y fotografía invernal de meteoros.", imageAlt: "Planificación de las Gemínidas 2026" },
      fr: { title: "Pluie de météores des Géminides 2026 : pourquoi elle peut être la meilleure de l’année", description: "Utilisez ce guide des Géminides 2026 pour préparer le pic, la lune et la photo hivernale des météores.", excerpt: "Utilisez ce guide des Géminides 2026 pour préparer le pic, la lune et la photo hivernale des météores.", imageAlt: "Planification des Géminides 2026" },
      it: { title: "Sciame meteorico delle Geminidi 2026: perché può essere il migliore dell’anno", description: "Usa questa guida alle Geminidi 2026 per pianificare il picco, la luna e la fotografia invernale di meteore.", excerpt: "Usa questa guida alle Geminidi 2026 per pianificare il picco, la luna e la fotografia invernale di meteore.", imageAlt: "Pianificazione Geminidi 2026" },
      de: { title: "Geminiden-Meteorschauer 2026: warum er der beste des Jahres sein könnte", description: "Nutze diesen Geminiden-Guide 2026, um Peak, Mondbedingungen und winterliche Meteor-Fotografie zu planen.", excerpt: "Nutze diesen Geminiden-Guide 2026, um Peak, Mondbedingungen und winterliche Meteor-Fotografie zu planen.", imageAlt: "Planung der Geminiden 2026" },
    },
  },
  {
    slug: "moon-photography-calendar-2026",
    category: "Photography",
    minutes: 8,
    publishDate: "2026-02-12",
    image: "moon-phases-night-sky-photography.png",
    featured: false,
    locales: {
      en: { title: "Moon Photography Calendar 2026: Best Full Moons, Dark Skies, and Milky Way Windows", description: "Combine full moons, dark-sky nights, and seasonal Milky Way windows into a practical moon photography calendar for 2026.", excerpt: "Combine full moons, dark-sky nights, and seasonal Milky Way windows into a practical moon photography calendar for 2026.", imageAlt: "Moon photography calendar planning for 2026" },
      es: { title: "Calendario de fotografía lunar 2026: mejores lunas llenas, cielos oscuros y ventanas de la Vía Láctea", description: "Combina lunas llenas, noches de cielo oscuro y ventanas estacionales de la Vía Láctea en un calendario práctico para 2026.", excerpt: "Combina lunas llenas, noches de cielo oscuro y ventanas estacionales de la Vía Láctea en un calendario práctico para 2026.", imageAlt: "Planificación del calendario de fotografía lunar 2026" },
      fr: { title: "Calendrier photo de la lune 2026 : meilleures pleines lunes, nuits noires et fenêtres Voie lactée", description: "Combinez pleines lunes, nuits de ciel sombre et fenêtres saisonnières de la Voie lactée dans un calendrier pratique pour 2026.", excerpt: "Combinez pleines lunes, nuits de ciel sombre et fenêtres saisonnières de la Voie lactée dans un calendrier pratique pour 2026.", imageAlt: "Planification du calendrier photo lunaire 2026" },
      it: { title: "Calendario fotografico lunare 2026: migliori lune piene, cieli bui e finestre della Via Lattea", description: "Combina lune piene, notti di cielo scuro e finestre stagionali della Via Lattea in un calendario pratico per il 2026.", excerpt: "Combina lune piene, notti di cielo scuro e finestre stagionali della Via Lattea in un calendario pratico per il 2026.", imageAlt: "Pianificazione calendario fotografico lunare 2026" },
      de: { title: "Mondfotografie-Kalender 2026: beste Vollmonde, dunkle Nächte und Milchstraßen-Fenster", description: "Kombiniere Vollmonde, Dark-Sky-Nächte und saisonale Milchstraßen-Fenster in einem praktischen Mondfotografie-Kalender für 2026.", excerpt: "Kombiniere Vollmonde, Dark-Sky-Nächte und saisonale Milchstraßen-Fenster in einem praktischen Mondfotografie-Kalender für 2026.", imageAlt: "Planung des Mondfotografie-Kalenders 2026" },
    },
  },
  {
    slug: "golden-hour-photography-guide",
    category: "Photography",
    minutes: 8,
    publishDate: "2024-12-15",
    image: "golden-hour-sunset-photography.png",
    featured: true,
    locales: {
      en: { title: "Ultimate Guide to Golden Hour Photography: Timing, Tips, and Techniques", description: "Master golden hour photography with practical timing advice, camera settings, and composition ideas for stronger sunrise and sunset images.", excerpt: "Master golden hour photography with practical timing advice, camera settings, and composition ideas for stronger sunrise and sunset images.", imageAlt: "Golden hour sunset photography with dramatic sky colors" },
      es: { title: "Guía definitiva de fotografía en hora dorada: horarios, consejos y técnicas", description: "Domina la fotografía en hora dorada con consejos de timing, ajustes de cámara e ideas de composición para amaneceres y atardeceres.", excerpt: "Domina la fotografía en hora dorada con consejos de timing, ajustes de cámara e ideas de composición para amaneceres y atardeceres.", imageAlt: "Fotografía de hora dorada con colores intensos al atardecer" },
      fr: { title: "Guide complet de la photo à l’heure dorée : timing, conseils et techniques", description: "Maîtrisez la photographie à l’heure dorée avec conseils de timing, réglages et idées de composition pour le lever et le coucher du soleil.", excerpt: "Maîtrisez la photographie à l’heure dorée avec conseils de timing, réglages et idées de composition pour le lever et le coucher du soleil.", imageAlt: "Photo de coucher de soleil à l’heure dorée avec couleurs dramatiques" },
      it: { title: "Guida definitiva alla fotografia in golden hour: timing, consigli e tecniche", description: "Migliora la fotografia in golden hour con consigli pratici su orari, impostazioni e composizione per alba e tramonto.", excerpt: "Migliora la fotografia in golden hour con consigli pratici su orari, impostazioni e composizione per alba e tramonto.", imageAlt: "Fotografia al tramonto in golden hour con colori intensi" },
      de: { title: "Ultimativer Guide zur Golden-Hour-Fotografie: Timing, Tipps und Techniken", description: "Meistere Golden-Hour-Fotografie mit praktischem Timing, Kameraeinstellungen und Kompositionsideen für Sonnenauf- und untergänge.", excerpt: "Meistere Golden-Hour-Fotografie mit praktischem Timing, Kameraeinstellungen und Kompositionsideen für Sonnenauf- und untergänge.", imageAlt: "Golden-Hour-Sonnenuntergang mit dramatischen Farben" },
    },
  },
  {
    slug: "moon-phases-photography",
    category: "Astronomy",
    minutes: 6,
    publishDate: "2024-12-12",
    image: "moon-phases-night-sky-photography.png",
    featured: true,
    locales: {
      en: { title: "Moon Phase Calendar 2025: Best Times for Night Photography", description: "Use moon phases to plan Milky Way sessions, moonlit landscapes, and night shoots with a practical lunar calendar for photographers.", excerpt: "Use moon phases to plan Milky Way sessions, moonlit landscapes, and night shoots with a practical lunar calendar for photographers.", imageAlt: "Moon phases and night photography planning" },
      es: { title: "Calendario lunar 2025: mejores momentos para fotografía nocturna", description: "Usa las fases lunares para planificar sesiones de Vía Láctea, paisajes con luna y fotografía nocturna con un calendario práctico.", excerpt: "Usa las fases lunares para planificar sesiones de Vía Láctea, paisajes con luna y fotografía nocturna con un calendario práctico.", imageAlt: "Fases lunares y planificación de fotografía nocturna" },
      fr: { title: "Calendrier lunaire 2025 : meilleurs moments pour la photo de nuit", description: "Utilisez les phases lunaires pour planifier Voie lactée, paysages au clair de lune et sessions photo nocturnes.", excerpt: "Utilisez les phases lunaires pour planifier Voie lactée, paysages au clair de lune et sessions photo nocturnes.", imageAlt: "Phases de lune et planification photo de nuit" },
      it: { title: "Calendario lunare 2025: momenti migliori per la fotografia notturna", description: "Usa le fasi lunari per pianificare sessioni Via Lattea, paesaggi al chiaro di luna e fotografia notturna.", excerpt: "Usa le fasi lunari per pianificare sessioni Via Lattea, paesaggi al chiaro di luna e fotografia notturna.", imageAlt: "Fasi lunari e pianificazione fotografia notturna" },
      de: { title: "Mondphasen-Kalender 2025: beste Zeiten für Nachtfotografie", description: "Nutze Mondphasen, um Milchstraßen-Sessions, mondbeleuchtete Landschaften und Nachtsessions besser zu planen.", excerpt: "Nutze Mondphasen, um Milchstraßen-Sessions, mondbeleuchtete Landschaften und Nachtsessions besser zu planen.", imageAlt: "Mondphasen und Nachtfotografie-Planung" },
    },
  },
  {
    slug: "aurora-prediction-guide",
    category: "Aurora",
    minutes: 10,
    publishDate: "2024-12-10",
    image: "northern-lights-aurora-borealis-photography.png",
    featured: false,
    locales: {
      en: { title: "How to Predict Aurora Activity for Perfect Northern Lights Photos", description: "Learn how KP index, solar wind, cloud cover, and timing work together so you can plan better aurora photography sessions.", excerpt: "Learn how KP index, solar wind, cloud cover, and timing work together so you can plan better aurora photography sessions.", imageAlt: "Aurora prediction planning for northern lights photography" },
      es: { title: "Cómo predecir la actividad auroral para mejores fotos de auroras boreales", description: "Aprende cómo se combinan índice KP, viento solar, nubosidad y timing para planificar mejor tus sesiones de auroras.", excerpt: "Aprende cómo se combinan índice KP, viento solar, nubosidad y timing para planificar mejor tus sesiones de auroras.", imageAlt: "Planificación de predicción auroral para fotografía de auroras" },
      fr: { title: "Comment prévoir l’activité aurorale pour de meilleures photos d’aurores boréales", description: "Comprenez comment indice KP, vent solaire, nuages et timing se combinent pour mieux planifier vos sorties aurores.", excerpt: "Comprenez comment indice KP, vent solaire, nuages et timing se combinent pour mieux planifier vos sorties aurores.", imageAlt: "Planification de la prévision aurorale pour la photo d’aurores" },
      it: { title: "Come prevedere l’attività aurorale per migliori foto di aurora boreale", description: "Scopri come indice KP, vento solare, nuvole e timing lavorano insieme per pianificare meglio le sessioni aurora.", excerpt: "Scopri come indice KP, vento solare, nuvole e timing lavorano insieme per pianificare meglio le sessioni aurora.", imageAlt: "Pianificazione previsione aurora per fotografia" },
      de: { title: "So prognostizierst du Aurora-Aktivität für bessere Nordlichtfotos", description: "Lerne, wie KP-Index, Sonnenwind, Wolken und Timing zusammenwirken, um Aurora-Sessions besser zu planen.", excerpt: "Lerne, wie KP-Index, Sonnenwind, Wolken und Timing zusammenwirken, um Aurora-Sessions besser zu planen.", imageAlt: "Planung der Aurora-Vorhersage für Nordlichtfotografie" },
    },
  },
  {
    slug: "weather-patterns-sky-photography",
    category: "Weather",
    minutes: 7,
    publishDate: "2024-12-08",
    image: "dramatic-storm-clouds-weather-photography.png",
    featured: false,
    locales: {
      en: { title: "Weather Patterns Every Sky Photographer Should Know", description: "Understand cloud formations, fronts, and atmospheric patterns that create dramatic skies for sunrise, sunset, and storm photography.", excerpt: "Understand cloud formations, fronts, and atmospheric patterns that create dramatic skies for sunrise, sunset, and storm photography.", imageAlt: "Weather patterns and dramatic sky photography planning" },
      es: { title: "Patrones meteorológicos que todo fotógrafo del cielo debería conocer", description: "Comprende nubes, frentes y patrones atmosféricos que crean cielos dramáticos para amaneceres, atardeceres y tormentas.", excerpt: "Comprende nubes, frentes y patrones atmosféricos que crean cielos dramáticos para amaneceres, atardeceres y tormentas.", imageAlt: "Patrones meteorológicos y planificación de fotografía del cielo" },
      fr: { title: "Les schémas météo que tout photographe du ciel devrait connaître", description: "Comprenez nuages, fronts et structures atmosphériques qui créent des ciels dramatiques pour lever, coucher et orages.", excerpt: "Comprenez nuages, fronts et structures atmosphériques qui créent des ciels dramatiques pour lever, coucher et orages.", imageAlt: "Schémas météo et planification de photo du ciel" },
      it: { title: "I pattern meteo che ogni fotografo del cielo dovrebbe conoscere", description: "Comprendi nuvole, fronti e pattern atmosferici che creano cieli drammatici per alba, tramonto e tempeste.", excerpt: "Comprendi nuvole, fronti e pattern atmosferici che creano cieli drammatici per alba, tramonto e tempeste.", imageAlt: "Pattern meteo e pianificazione fotografia del cielo" },
      de: { title: "Wettermuster, die jeder Himmelsfotograf kennen sollte", description: "Verstehe Wolkenformen, Fronten und atmosphärische Muster, die dramatische Himmel für Sonnenaufgang, Sonnenuntergang und Stürme erzeugen.", excerpt: "Verstehe Wolkenformen, Fronten und atmosphärische Muster, die dramatische Himmel für Sonnenaufgang, Sonnenuntergang und Stürme erzeugen.", imageAlt: "Wettermuster und Planung von Himmelsfotografie" },
    },
  },
  {
    slug: "perseid-meteor-shower-2025",
    category: "Astronomy",
    minutes: 9,
    publishDate: "2024-12-18",
    image: "perseid-meteor-shower-night-sky.png",
    featured: false,
    locales: {
      en: { title: "Perseid Meteor Shower 2025: Complete Photography Guide", description: "Everything you need to know about peak dates, viewing windows, camera settings, and dark-sky planning for the Perseid meteor shower.", excerpt: "Everything you need to know about peak dates, viewing windows, camera settings, and dark-sky planning for the Perseid meteor shower.", imageAlt: "Perseid meteor shower photography guide for 2025" },
      es: { title: "Perseidas 2025: guía completa de fotografía", description: "Todo lo que necesitas saber sobre fechas pico, ventanas de observación, ajustes y planificación de cielo oscuro para las Perseidas.", excerpt: "Todo lo que necesitas saber sobre fechas pico, ventanas de observación, ajustes y planificación de cielo oscuro para las Perseidas.", imageAlt: "Guía fotográfica de las Perseidas 2025" },
      fr: { title: "Perséides 2025 : guide photo complet", description: "Tout ce qu’il faut savoir sur les dates de pic, fenêtres d’observation, réglages et ciel sombre pour les Perséides.", excerpt: "Tout ce qu’il faut savoir sur les dates de pic, fenêtres d’observation, réglages et ciel sombre pour les Perséides.", imageAlt: "Guide photo des Perséides 2025" },
      it: { title: "Perseidi 2025: guida fotografica completa", description: "Tutto ciò che serve sapere su date di picco, finestre di osservazione, impostazioni e pianificazione del cielo buio per le Perseidi.", excerpt: "Tutto ciò che serve sapere su date di picco, finestre di osservazione, impostazioni e pianificazione del cielo buio per le Perseidi.", imageAlt: "Guida fotografica Perseidi 2025" },
      de: { title: "Perseiden 2025: kompletter Foto-Guide", description: "Alles Wichtige zu Peak-Daten, Sichtbarkeitsfenstern, Kameraeinstellungen und Dark-Sky-Planung für die Perseiden.", excerpt: "Alles Wichtige zu Peak-Daten, Sichtbarkeitsfenstern, Kameraeinstellungen und Dark-Sky-Planung für die Perseiden.", imageAlt: "Perseiden-Fotoguide 2025" },
    },
  },
  {
    slug: "partial-lunar-eclipse-september-2025",
    category: "Astronomy",
    minutes: 8,
    publishDate: "2024-12-20",
    image: "partial-lunar-eclipse-september-2025.png",
    featured: false,
    locales: {
      en: { title: "Partial Lunar Eclipse September 7, 2025: Photography Guide", description: "Plan the September 7, 2025 partial lunar eclipse with eclipse timing, visibility notes, and practical moon photography advice.", excerpt: "Plan the September 7, 2025 partial lunar eclipse with eclipse timing, visibility notes, and practical moon photography advice.", imageAlt: "Partial lunar eclipse photography planning for September 2025" },
      es: { title: "Eclipse lunar parcial del 7 de septiembre de 2025: guía fotográfica", description: "Planifica el eclipse lunar parcial del 7 de septiembre de 2025 con horarios, visibilidad y consejos prácticos de fotografía lunar.", excerpt: "Planifica el eclipse lunar parcial del 7 de septiembre de 2025 con horarios, visibilidad y consejos prácticos de fotografía lunar.", imageAlt: "Planificación fotográfica del eclipse lunar parcial de septiembre de 2025" },
      fr: { title: "Éclipse lunaire partielle du 7 septembre 2025 : guide photo", description: "Préparez l’éclipse lunaire partielle du 7 septembre 2025 avec horaires, visibilité et conseils photo pratiques.", excerpt: "Préparez l’éclipse lunaire partielle du 7 septembre 2025 avec horaires, visibilité et conseils photo pratiques.", imageAlt: "Planification photo de l’éclipse lunaire partielle de septembre 2025" },
      it: { title: "Eclissi lunare parziale del 7 settembre 2025: guida fotografica", description: "Pianifica l’eclissi lunare parziale del 7 settembre 2025 con orari, visibilità e consigli pratici di fotografia lunare.", excerpt: "Pianifica l’eclissi lunare parziale del 7 settembre 2025 con orari, visibilità e consigli pratici di fotografia lunare.", imageAlt: "Pianificazione fotografica dell’eclissi lunare parziale di settembre 2025" },
      de: { title: "Partielle Mondfinsternis am 7. September 2025: Foto-Guide", description: "Plane die partielle Mondfinsternis am 7. September 2025 mit Timing, Sichtbarkeit und praktischen Mondfotografie-Tipps.", excerpt: "Plane die partielle Mondfinsternis am 7. September 2025 mit Timing, Sichtbarkeit und praktischen Mondfotografie-Tipps.", imageAlt: "Fotoplanung der partiellen Mondfinsternis September 2025" },
    },
  },
  {
    slug: "total-lunar-eclipse-september-2025",
    category: "Astronomy",
    minutes: 10,
    publishDate: "2025-09-02",
    image: "total-lunar-eclipse-september-2025.jpg",
    featured: true,
    locales: {
      en: { title: "Total Lunar Eclipse September 7, 2025: Your Complete Blood Moon Guide", description: "Mark your calendars for September 7, 2025. Witness the spectacular total lunar eclipse with viewing times, visibility notes, and photography tips.", excerpt: "Mark your calendars for September 7, 2025. Witness the spectacular total lunar eclipse with viewing times, visibility notes, and photography tips.", imageAlt: "Total lunar eclipse blood moon guide for September 2025" },
      es: { title: "Eclipse lunar total del 7 de septiembre de 2025: guía completa de la luna de sangre", description: "Marca el 7 de septiembre de 2025 y prepárate para el espectacular eclipse lunar total con horarios, visibilidad y consejos fotográficos.", excerpt: "Marca el 7 de septiembre de 2025 y prepárate para el espectacular eclipse lunar total con horarios, visibilidad y consejos fotográficos.", imageAlt: "Guía de luna de sangre para el eclipse lunar total de septiembre de 2025" },
      fr: { title: "Éclipse lunaire totale du 7 septembre 2025 : guide complet de la lune de sang", description: "Réservez la date du 7 septembre 2025 et préparez cette spectaculaire éclipse lunaire totale avec horaires, visibilité et conseils photo.", excerpt: "Réservez la date du 7 septembre 2025 et préparez cette spectaculaire éclipse lunaire totale avec horaires, visibilité et conseils photo.", imageAlt: "Guide de la lune de sang pour l’éclipse lunaire totale de septembre 2025" },
      it: { title: "Eclissi lunare totale del 7 settembre 2025: guida completa alla luna di sangue", description: "Segna il 7 settembre 2025 e preparati a questa spettacolare eclissi lunare totale con orari, visibilità e consigli fotografici.", excerpt: "Segna il 7 settembre 2025 e preparati a questa spettacolare eclissi lunare totale con orari, visibilità e consigli fotografici.", imageAlt: "Guida alla luna di sangue per l’eclissi lunare totale di settembre 2025" },
      de: { title: "Totale Mondfinsternis am 7. September 2025: dein kompletter Blutmond-Guide", description: "Markiere dir den 7. September 2025 und plane die spektakuläre totale Mondfinsternis mit Zeiten, Sichtbarkeit und Fototipps.", excerpt: "Markiere dir den 7. September 2025 und plane die spektakuläre totale Mondfinsternis mit Zeiten, Sichtbarkeit und Fototipps.", imageAlt: "Blutmond-Guide für die totale Mondfinsternis September 2025" },
    },
  },
]

const generatedBlogArticles: BlogArticleDefinition[] = generatedArticleSeeds.map((seed) => {
  const locales = Object.fromEntries(
    Object.entries(seed.locales).map(([locale, content]) => [
      locale,
      {
        ...content,
        sections: buildGeneratedSections(locale as Locale, seed.category, content.title),
        ctaTitle:
          locale === "en"
            ? "Keep planning with better sky context"
            : locale === "es"
              ? "Sigue planificando con mejor contexto del cielo"
              : locale === "fr"
                ? "Continuez à planifier avec plus de contexte ciel"
                : locale === "it"
                  ? "Continua a pianificare con più contesto del cielo"
                  : "Plane weiter mit besserem Himmelskontext",
        ctaDescription:
          locale === "en"
            ? "Use Solora to combine timing, weather, and location context before your next outing."
            : locale === "es"
              ? "Usa Solora para combinar timing, tiempo y contexto de ubicación antes de tu próxima salida."
              : locale === "fr"
                ? "Utilisez Solora pour réunir timing, météo et contexte de lieu avant votre prochaine sortie."
                : locale === "it"
                  ? "Usa Solora per unire timing, meteo e contesto della località prima della prossima uscita."
                  : "Nutze Solora, um Timing, Wetter und Standortkontext vor deiner nächsten Tour zu verbinden.",
        relatedLinks: buildGeneratedRelatedLinks(locale as Locale),
      },
    ]),
  ) as Record<AuthoredLocale, LocalizedBlogArticle>

  return article(seed.slug, seed.category, seed.minutes, seed.publishDate, seed.image, seed.featured, locales)
})

export const blogArticles = [...manualBlogArticles, ...generatedBlogArticles]

const evergreenArticleIds = [
  "astronomical-events-2026",
  "total-solar-eclipse-august-2026",
  "aurora-forecast-2026",
] as const

const localizedArticleMetadata: Record<string, Record<"pt" | "zh", { title: string; description: string }>> = {
  "total-solar-eclipse-august-2026": {
    pt: {
      title: "Eclipse solar total de 12 de agosto de 2026: melhores locais, mapa da faixa e dicas de fotografia",
      description: "Planeje o eclipse solar total de 12 de agosto de 2026 com faixa de totalidade, notas de viagem, estratégia de clima e dicas práticas de fotografia.",
    },
    zh: {
      title: "2026 年 8 月 12 日日全食：最佳观测地点、全食带地图与摄影建议",
      description: "围绕 2026 年 8 月 12 日日全食规划观测，了解全食带、出行要点、天气策略和实用摄影建议。",
    },
  },
  "astronomical-events-2026": {
    pt: {
      title: "Calendário de eventos astronômicos de 2026: eclipses, chuvas de meteoros, superluas e melhores noites",
      description: "Use este calendário astronômico de 2026 para planejar eclipses, chuvas de meteoros, superluas, períodos favoráveis à aurora e sessões noturnas melhores.",
    },
    zh: {
      title: "2026 天文事件日历：日月食、流星雨、超级月亮与最佳拍摄夜晚",
      description: "用这份 2026 天文日历规划日月食、流星雨、超级月亮、极光窗口和更高质量的夜空拍摄。",
    },
  },
  "aurora-forecast-2026": {
    pt: {
      title: "Previsão de aurora 2026: o ciclo solar 25 ainda é bom para fotografar auroras?",
      description: "Entenda por que o ciclo solar 25 ainda importa em 2026 e como fotógrafos devem pensar em previsão, clima e céu escuro.",
    },
    zh: {
      title: "2026 极光展望：太阳活动周期 25 仍适合拍摄极光吗？",
      description: "了解为什么太阳活动周期 25 在 2026 年依然重要，以及摄影者该如何看待预报、天气与黑夜条件。",
    },
  },
  "total-lunar-eclipse-march-2026": {
    pt: {
      title: "Eclipse lunar total de 2 a 3 de março de 2026: guia para observar a lua de sangue",
      description: "Planeje a lua de sangue de março de 2026 com estratégia de horários, expectativas de visibilidade e dicas fotográficas práticas.",
    },
    zh: {
      title: "2026 年 3 月 2 至 3 日月全食：血月观测指南",
      description: "为 2026 年 3 月血月规划时间、可见性预期和实用的月食摄影策略。",
    },
  },
  "partial-lunar-eclipse-august-2026": {
    pt: {
      title: "Eclipse lunar parcial de 27 a 28 de agosto de 2026: como fotografar o eclipse de 96%",
      description: "Use este guia para planejar o profundo eclipse lunar parcial do fim de agosto de 2026 com melhor estratégia e decisões fotográficas.",
    },
    zh: {
      title: "2026 年 8 月 27 至 28 日月偏食：如何拍摄这次 96% 月食",
      description: "用这份指南规划 2026 年 8 月底这次深度月偏食，获得更好的策略和拍摄判断。",
    },
  },
  "supermoons-2026": {
    pt: {
      title: "Superluas de 2026: melhores datas para moonrise, paisagens urbanas e fotos de viagem",
      description: "Planeje fotos de moonrise, composições urbanas e viagens em torno das maiores luas cheias de 2026 com um guia prático.",
    },
    zh: {
      title: "2026 超级月亮：月出、城市天际线与旅行拍摄的最佳日期",
      description: "用这份实用指南围绕 2026 年最大的满月规划月出摄影、城市构图和旅行拍摄。",
    },
  },
  "lyrids-meteor-shower-2026": {
    pt: {
      title: "Chuva de meteoros Líridas 2026: melhor momento para observar e fotografar",
      description: "Planeje as Líridas de abril de 2026 com estratégia para a noite de pico, céu escuro e um fluxo prático de fotografia de meteoros.",
    },
    zh: {
      title: "2026 天琴座流星雨：最佳观赏与拍摄时间",
      description: "为 2026 年 4 月天琴座流星雨规划峰值夜、暗空条件和实用的流星摄影流程。",
    },
  },
  "eta-aquarids-2026": {
    pt: {
      title: "Eta Aquáridas 2026: a melhor chuva de meteoros para latitudes do sul?",
      description: "Use este guia de maio de 2026 para planejar sessões em céu escuro, janelas de observação e fotografia de meteoros.",
    },
    zh: {
      title: "2026 宝瓶座 η 流星雨：最适合南半球的流星雨？",
      description: "用这份 2026 年 5 月指南规划暗空拍摄、观测窗口和流星摄影。",
    },
  },
  "perseid-meteor-shower-2026": {
    pt: {
      title: "Chuva de meteoros Perseidas 2026: datas de pico, condições da lua e ajustes de câmera",
      description: "Planeje as Perseidas 2026 com timing da noite de pico, estratégia para a lua e melhores decisões antes de sair.",
    },
    zh: {
      title: "2026 英仙座流星雨：峰值日期、月光条件与相机设置",
      description: "为 2026 英仙座流星雨规划峰值时段、月光策略和更好的暗空拍摄决策。",
    },
  },
  "geminids-meteor-shower-2026": {
    pt: {
      title: "Chuva de meteoros Gemínidas 2026: por que pode ser a melhor do ano",
      description: "Use este guia das Gemínidas 2026 para planejar o pico, as condições lunares e a fotografia de meteoros no inverno.",
    },
    zh: {
      title: "2026 双子座流星雨：为什么它可能是全年最佳流星雨",
      description: "用这份 2026 双子座流星雨指南规划峰值时间、月光条件和冬季流星摄影。",
    },
  },
  "moon-photography-calendar-2026": {
    pt: {
      title: "Calendário de fotografia da lua 2026: melhores luas cheias, céus escuros e janelas da Via Láctea",
      description: "Combine luas cheias, noites escuras e janelas sazonais da Via Láctea em um calendário prático de fotografia lunar para 2026.",
    },
    zh: {
      title: "2026 月亮摄影日历：最佳满月、暗空夜晚与银河窗口",
      description: "把满月、暗空夜晚和季节性银河窗口整合为一份实用的 2026 月亮摄影日历。",
    },
  },
  "golden-hour-photography-guide": {
    pt: {
      title: "Guia definitivo de fotografia na golden hour: timing, dicas e técnicas",
      description: "Domine a fotografia na golden hour com orientações práticas de timing, configurações de câmera e ideias de composição para nascer e pôr do sol.",
    },
    zh: {
      title: "黄金时刻摄影终极指南：时间、技巧与拍摄方法",
      description: "通过实用的时间建议、相机设置和构图思路，拍出更强的日出与日落黄金时刻照片。",
    },
  },
  "moon-phases-photography": {
    pt: {
      title: "Calendário das fases da lua 2025: melhores momentos para fotografia noturna",
      description: "Use as fases da lua para planejar sessões da Via Láctea, paisagens iluminadas pela lua e ensaios noturnos com um calendário prático.",
    },
    zh: {
      title: "2025 月相日历：夜景摄影的最佳时机",
      description: "利用月相来规划银河拍摄、月光风景和夜间摄影，建立更实用的拍摄日历。",
    },
  },
  "aurora-prediction-guide": {
    pt: {
      title: "Guia de previsão de aurora: como planejar melhores noites de aurora boreal",
      description: "Aprenda a interpretar alertas de aurora, contexto local e janelas de clima para planejar noites melhores de aurora boreal.",
    },
    zh: {
      title: "极光预测指南：如何规划更好的北极光拍摄夜",
      description: "学会结合极光预警、当地条件和天气窗口，规划更有效的极光夜晚。",
    },
  },
  "weather-patterns-sky-photography": {
    pt: {
      title: "Padrões de clima para fotografia do céu: como tomar decisões melhores antes de sair",
      description: "Use padrões de nuvens, visibilidade e mudanças locais para tomar decisões melhores antes de uma sessão de céu ou paisagem.",
    },
    zh: {
      title: "天空摄影中的天气模式：出发前如何做出更好的判断",
      description: "结合云层、能见度和当地天气变化，在夜空或风景拍摄前做出更好的决定。",
    },
  },
  "perseid-meteor-shower-2025": {
    pt: {
      title: "Perseidas 2025: guia completo de fotografia",
      description: "Tudo o que você precisa saber sobre datas de pico, janelas de observação, ajustes de câmera e planejamento de céu escuro para as Perseidas.",
    },
    zh: {
      title: "2025 英仙座流星雨：完整摄影指南",
      description: "了解英仙座流星雨的峰值日期、观测窗口、相机设置和暗空规划要点。",
    },
  },
  "partial-lunar-eclipse-september-2025": {
    pt: {
      title: "Eclipse lunar parcial de 7 de setembro de 2025: guia de fotografia",
      description: "Planeje o eclipse lunar parcial de 7 de setembro de 2025 com horários, notas de visibilidade e conselhos práticos de fotografia lunar.",
    },
    zh: {
      title: "2025 年 9 月 7 日月偏食：摄影指南",
      description: "为 2025 年 9 月 7 日月偏食规划时间、可见度和实用的月亮摄影建议。",
    },
  },
  "total-lunar-eclipse-september-2025": {
    pt: {
      title: "Eclipse lunar total de 7 de setembro de 2025: seu guia completo da lua de sangue",
      description: "Marque 7 de setembro de 2025 e prepare-se para o espetacular eclipse lunar total com horários, visibilidade e dicas fotográficas.",
    },
    zh: {
      title: "2025 年 9 月 7 日月全食：完整血月指南",
      description: "锁定 2025 年 9 月 7 日，提前了解这次壮观月全食的观测时间、可见性与摄影建议。",
    },
  },
}

function getGenericCta(locale: Locale) {
  if (locale === "pt") {
    return {
      ctaTitle: "Continue planejando com mais contexto do céu",
      ctaDescription: "Use o Solora para combinar timing, clima e contexto do local antes da sua próxima saída.",
    }
  }

  if (locale === "zh") {
    return {
      ctaTitle: "用更完整的天空信息继续规划",
      ctaDescription: "使用 Solora 在下次出发前把时间、天气和地点背景整合到一起。",
    }
  }

  return {
    ctaTitle: "Keep planning with better sky context",
    ctaDescription: "Use Solora to combine timing, weather, and location context before your next outing.",
  }
}

function getLocalizedArticleContent(definition: BlogArticleDefinition, locale: Locale): LocalizedBlogArticle {
  if (locale in definition.locales) {
    return definition.locales[locale as AuthoredLocale]
  }

  const metadata = localizedArticleMetadata[definition.slug]?.[locale as "pt" | "zh"]

  if (!metadata) {
    return definition.locales.en
  }

  const cta = getGenericCta(locale)

  return {
    title: metadata.title,
    description: metadata.description,
    excerpt: metadata.description,
    imageAlt: metadata.title,
    sections: buildGeneratedSections(locale, definition.category, metadata.title),
    ctaTitle: cta.ctaTitle,
    ctaDescription: cta.ctaDescription,
    relatedLinks: buildGeneratedRelatedLinks(locale),
  }
}

export function formatReadTime(locale: Locale, minutes: number) {
  return `${minutes} ${readTimeLabel[locale]}`
}

export function getBlogArticle(locale: Locale, slug: string) {
  const definition = blogArticles.find((article) => article.slug === slug)

  if (!definition) {
    return null
  }

  const localized = getLocalizedArticleContent(definition, locale)

  return {
    slug: definition.slug,
    category: categoryLabels[locale][definition.category],
    minutes: definition.minutes,
    readTime: formatReadTime(locale, definition.minutes),
    publishDate: definition.publishDate,
    image: definition.image,
    featured: definition.featured,
    wordCount: definition.minutes * 280,
    ...localized,
  }
}

export function getBlogPosts(locale: Locale): BlogPostSummary[] {
  return blogArticles.map((article) => ({
    id: article.slug,
    title: getLocalizedArticleContent(article, locale).title,
    excerpt: getLocalizedArticleContent(article, locale).excerpt,
    category: categoryLabels[locale][article.category],
    readTime: formatReadTime(locale, article.minutes),
    publishDate: article.publishDate,
    image: article.image,
    featured: article.featured,
  }))
}

export function getFeaturedBlogPosts(locale: Locale) {
  return getBlogPosts(locale).filter((article) => article.featured)
}

export function getEvergreenBlogPosts(locale: Locale) {
  const posts = getBlogPosts(locale)

  return posts.filter((post) => evergreenArticleIds.includes(post.id as (typeof evergreenArticleIds)[number]))
}
