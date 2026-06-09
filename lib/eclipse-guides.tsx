import type { Metadata } from "next"

import { EclipseGuidePage, EclipseGuideSection } from "@/components/eclipse-guide-page"
import { Locale } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/metadata"

export const eclipseGuideSlugs = [
  "eclipse-solar-2026-a-coruna",
  "eclipse-solar-2026-burgos",
  "eclipse-solar-2026-palma",
  "fotografiar-eclipse-solar-2026-seguridad",
] as const

export type EclipseGuideSlug = (typeof eclipseGuideSlugs)[number]

type EclipseGuideContent = {
  title: string
  description: string
  eyebrow: string
  sections: EclipseGuideSection[]
}

const ignUrl = "https://eclipses.ign.es/eclipse-total-sol-de-12-de-agosto-2026.html"
const ignWeatherUrl = "https://eclipses.ign.es/informacion-meteorologica.html"
const officialPointsUrl = "https://www.trioeclipses.es/puntos-de-observacion"
const galiciaEclipseUrl = "https://eclipse.xunta.gal/es/onde-ver"
const castileLeonUrl = "https://www.trioeclipses.es/puntos-de-observacion/castilla-y-leon"
const burgosGuideUrl =
  "https://www.turismocastillayleon.com/cm/facm/300004/439572-Burgos%20-%20Ruta%20del%20Eclipse.pdf"
const balearicGuideUrl = "https://www.caib.es/webgoib/es/-/des-d-on-veure-l"
const nasaSafetyUrl = "https://science.nasa.gov/eclipses/safety/"
const nasaPhotoUrl =
  "https://science.nasa.gov/solar-system/skywatching/five-tips-for-photographing-the-annular-solar-eclipse-on-oct-14/"

const spanishContent: Record<EclipseGuideSlug, EclipseGuideContent> = {
  "eclipse-solar-2026-a-coruna": {
    title: "Eclipse solar total 2026 en A Coruña: hora, duración y dónde planificar",
    description: "Horarios oficiales del eclipse total en A Coruña, altura del Sol, horizonte oeste, seguridad, meteorología y plan fotográfico.",
    eyebrow: "A Coruña · 12 de agosto de 2026",
    sections: [
      { heading: "Horarios oficiales en A Coruña", paragraphs: ["Según el Instituto Geográfico Nacional, el eclipse comenzará aproximadamente a las 19:31, alcanzará el máximo alrededor de las 20:28 y terminará cerca de las 21:22. La totalidad durará unos 76 segundos.", "La tabla municipal del IGN concreta para A Coruña capital el inicio parcial a las 19:30:51, el inicio de totalidad a las 20:27:35, el máximo a las 20:28:13 y el final de totalidad a las 20:28:51."], bullets: ["Altura del Sol en el máximo: aproximadamente 12 grados.", "Dirección aproximada: oeste, azimut cercano a 279 grados.", "La puesta de Sol será después del final del eclipse, alrededor de las 21:22."] },
      { heading: "Por qué A Coruña es una opción distinta", paragraphs: ["Galicia será la primera zona española alcanzada por la sombra. En A Coruña el Sol estará más alto que en Burgos o Palma, lo que reduce el riesgo de que un obstáculo bajo o la propia línea del horizonte oculte la totalidad.", "La contrapartida es meteorológica. La costa atlántica puede presentar nubosidad baja, niebla o capas marinas incluso cuando zonas interiores cercanas tienen mejores claros. La decisión final debe comparar costa, interior y alternativas accesibles."] },
      { heading: "Dónde encaja A Coruña entre las mejores zonas", paragraphs: ["A Coruña no es la primera recomendación por probabilidad climática: el IGN sitúa el norte de la Meseta y el valle del Ebro por delante en la climatología media de agosto. Su ventaja real es geométrica, con el Sol más alto y más margen sobre el horizonte.", "El portal oficial de la Xunta muestra además que dentro de la propia provincia hay diferencias relevantes. A Coruña capital ofrece 76 segundos, mientras municipios como A Capela alcanzan alrededor de 91 segundos y Ares unos 85. Antes de moverte, confirma totalidad, horizonte, acceso y previsión; una duración mayor no compensa un lugar nublado o saturado."] },
      { heading: "Cómo elegir el punto de observación", paragraphs: ["No basta con estar dentro de la franja. Necesitas una vista limpia hacia el oeste y margen para que el Sol, a 12 grados, no quede detrás de edificios, árboles o relieve cercano."], bullets: ["Explora el lugar con antelación a una hora similar.", "Evita acantilados, carreteras o espacios sin capacidad segura para grandes grupos.", "Guarda una alternativa interior y otra costera.", "Comprueba accesos, aparcamiento legal y posibles restricciones locales.", "Usa el tracker solar para previsualizar dirección y altura desde cada punto."] },
      { heading: "Plan meteorológico", paragraphs: ["Una semana antes, compara tendencias regionales; 48 horas antes, prioriza nubosidad por capas, visibilidad, viento y niebla. La mañana del eclipse decide entre tus ubicaciones guardadas, sin improvisar desplazamientos largos por carreteras saturadas.", "Solora puede ayudar a comparar ubicaciones y visualizar la trayectoria solar, pero los contactos oficiales deben confirmarse en el IGN."] },
    ],
  },
  "eclipse-solar-2026-burgos": {
    title: "Eclipse solar total 2026 en Burgos: 104 segundos de totalidad y planificación",
    description: "Guía del eclipse total en Burgos con horarios oficiales, 104 segundos de totalidad, Sol a 8 grados y consejos de ubicación y fotografía.",
    eyebrow: "Burgos · 12 de agosto de 2026",
    sections: [
      { heading: "Horarios y duración en Burgos", paragraphs: ["El IGN indica que el eclipse comenzará aproximadamente a las 19:33, alcanzará su máximo alrededor de las 20:29 y ofrecerá unos 104 segundos de totalidad.", "Los contactos exactos cambian según el municipio. Confirma la localidad elegida en la tabla oficial del IGN antes de cerrar el desplazamiento o programar una secuencia fotográfica."], bullets: ["Duración aproximada de la totalidad: 104 segundos.", "Altura del Sol: aproximadamente 8 grados.", "Dirección: oeste, azimut aproximado de 283 grados.", "Puesta de Sol cerca de las 21:20."] },
      { heading: "Por qué Burgos está entre las mejores opciones", paragraphs: ["La duración de la totalidad es mayor que en A Coruña, lo que da algo más de tiempo para observar y ejecutar una secuencia fotográfica sencilla. Además, el portal oficial estatal identifica Castilla y León como la mejor gran zona de observación de España por sus llanuras, horizontes y condiciones estivales.", "Burgos y Palencia están cerca de la duración máxima española. El reto en Burgos es que el Sol estará a unos ocho grados: cualquier loma, construcción o arbolado puede restar la totalidad. La exploración del horizonte sigue siendo tan importante como acercarse a la línea central."] },
      { heading: "Elegir ubicación en el interior", paragraphs: ["Busca un horizonte oeste amplio y una zona con acceso seguro. En terreno elevado, comprueba que la ganancia de horizonte compense el viento y la exposición. En llanuras, evita árboles, naves o pueblos alineados con el Sol."], bullets: ["Comprueba el perfil del horizonte con el tracker solar y una visita previa.", "Evita depender de un mirador pequeño o una única carretera.", "Guarda opciones al norte, oeste y sur de la ciudad para responder a las nubes.", "Lleva agua y protección solar: la fase parcial dura casi dos horas."] },
      { heading: "Fotografía con el Sol bajo", paragraphs: ["La baja altura favorece composiciones de paisaje, pero exige precisión. Prueba el encuadre la tarde anterior, fija el filtro solar delante del objetivo durante las fases parciales y prepara una secuencia que no requiera cambiar de equipo durante los 104 segundos.", "Un encuadre amplio con paisaje puede ser más robusto que depender de un teleobjetivo largo si hay calima, viento o nubes finas."] },
    ],
  },
  "eclipse-solar-2026-palma": {
    title: "Eclipse solar total 2026 en Palma: Sol a 2 grados y horizonte de mar",
    description: "Horarios del eclipse total en Palma de Mallorca, Sol a solo 2 grados, horizonte oeste, seguridad y planificación fotográfica.",
    eyebrow: "Palma · 12 de agosto de 2026",
    sections: [
      { heading: "Horarios oficiales en Palma", paragraphs: ["El IGN sitúa el inicio parcial en Palma a las 19:37:58, el inicio de totalidad a las 20:31:00, el máximo a las 20:31:48 y el final de totalidad a las 20:32:36.", "La puesta de Sol está prevista alrededor de las 20:49:23. La totalidad ocurrirá con el Sol extremadamente bajo, a unos 2 grados según el resumen oficial."], bullets: ["Totalidad aproximada: 96 segundos.", "Altura crítica: alrededor de 2 grados.", "Dirección aproximada: oeste, azimut cercano a 287 grados.", "Cualquier obstáculo bajo puede ocultar el eclipse."] },
      { heading: "El horizonte es la decisión principal", paragraphs: ["En Palma no basta con una vista general hacia el oeste. A dos grados, una colina lejana, edificios, barcos, bruma marítima o nubes en el horizonte pueden bloquear la totalidad.", "Un horizonte de mar puede ofrecer una línea más limpia, pero hay que confirmar la orientación exacta, el acceso y la seguridad. No todos los puntos de costa miran hacia el oeste-noroeste. El Govern balear sigue desarrollando su mapa de puntos y recomienda comprobar la visibilidad real desde el lugar elegido."] },
      { heading: "Dónde encaja Mallorca entre las mejores zonas", paragraphs: ["Mallorca es una elección fotográfica especializada, no la opción con mayor margen técnico. Puede ofrecer una composición extraordinaria sobre el mar y una totalidad cercana a 96 segundos, pero el Sol estará mucho más bajo que en Castilla y León o Galicia.", "Los ejemplos publicados por el Govern balear incluyen Cap de Formentor, Punta de n'Amer y Cap de ses Salines, con duraciones diferentes. Deben tratarse como referencias geométricas, no como recomendación automática: accesos, capacidad, orientación exacta, espacios protegidos y el plan oficial ECLIPBAL pueden cambiar qué lugares resultan adecuados."] },
      { heading: "Cómo explorar el lugar", paragraphs: ["Visita el sitio en días anteriores cerca de las 20:32 y observa qué queda a dos grados sobre el oeste. Usa la trayectoria solar para comparar playas, paseos, cabos o zonas elevadas, sin asumir que más altura siempre significa mejor acceso."], bullets: ["Confirma que la dirección oeste-noroeste está libre.", "Comprueba bruma, humedad y nubes bajas en el horizonte.", "Evita lugares con aforo reducido, bordes peligrosos o salida complicada.", "Llega con varias horas de margen y lleva navegación sin conexión.", "Prepara una alternativa con horizonte distinto."] },
      { heading: "Fotografía y exposición", paragraphs: ["La posición baja permite integrar el eclipse con mar, costa o siluetas, pero la atmósfera puede reducir contraste. Ensaya un encuadre abierto y otro más cerrado, sin añadir demasiados cambios durante la totalidad.", "Mantén el filtro solar delante del objetivo durante todas las fases parciales y retíralo solo cuando la fotosfera quede completamente cubierta."] },
    ],
  },
  "fotografiar-eclipse-solar-2026-seguridad": {
    title: "Cómo fotografiar el eclipse solar de 2026 con seguridad",
    description: "Guía práctica de filtros solares, gafas ISO 12312-2, cámara, exposición y seguridad para fotografiar el eclipse de España.",
    eyebrow: "Seguridad y fotografía",
    sections: [
      { heading: "La regla de seguridad que no admite excepciones", paragraphs: ["Salvo durante la breve totalidad, nunca mires directamente al Sol sin protección especializada. Las gafas de eclipse deben cumplir la norma ISO 12312-2; unas gafas de sol normales no sirven.", "Las gafas de eclipse tampoco protegen al mirar por una cámara, prismáticos o telescopio sin filtrar. La luz concentrada puede dañar el filtro de mano y causar una lesión ocular grave."] },
      { heading: "Filtro correcto para cámara y óptica", paragraphs: ["NASA recomienda colocar un filtro solar específico y bien fijado en la parte frontal del objetivo, telescopio o prismáticos. No uses filtros que se enroscan detrás del objetivo ni materiales improvisados.", "Inspecciona gafas y filtros antes del evento. Si están rayados, perforados, despegados o dañados, no los utilices."], bullets: ["Filtro solar frontal compatible con el diámetro del objetivo.", "Gafas ISO 12312-2 para cada persona.", "Nada de radiografías, cristales ahumados, negativos o filtros caseros.", "Supervisión directa de menores."] },
      { heading: "Cuándo retirar el filtro", paragraphs: ["Dentro de la franja de totalidad, el filtro puede retirarse únicamente cuando la superficie brillante del Sol haya quedado completamente cubierta. Debe volver a colocarse en cuanto reaparezca cualquier punto brillante.", "Fuera de la franja de totalidad nunca existe una fase segura para mirar o fotografiar el Sol sin filtro. Confirma primero que tu ubicación está realmente dentro de la totalidad."] },
      { heading: "Flujo fotográfico sencillo", paragraphs: ["Practica toda la secuencia antes del 12 de agosto. Ajusta enfoque, encuadre, bracketing e intervalómetro con el filtro puesto. Durante la totalidad, evita navegar por menús o cambiar de cámara.", "El eclipse español ocurrirá con el Sol bajo. Incluye una composición amplia de respaldo, porque las nubes, la calima o un obstáculo del horizonte pueden reducir el valor de un teleobjetivo largo."], bullets: ["Trípode estable y disparador remoto.", "Baterías cargadas y tarjetas vacías.", "Enfoque probado y bloqueado antes del máximo.", "Secuencia de exposición ensayada.", "Alarma para volver a colocar el filtro.", "Tiempo reservado para observar sin cámara."] },
      { heading: "Seguridad del lugar", paragraphs: ["La fase parcial dura mucho más que la totalidad. Lleva agua, protección solar, ropa adecuada y luz para recoger. No instales trípodes en carreteras, salidas de emergencia, bordes inestables o propiedad privada.", "Planifica la salida antes de llegar. Las redes móviles y carreteras pueden saturarse en ubicaciones populares."] },
    ],
  },
}

const nonSpanishFallback: Record<EclipseGuideSlug, EclipseGuideContent> = Object.fromEntries(
  Object.entries(spanishContent).map(([slug, page]) => [
    slug,
    {
      eyebrow: "Spain eclipse planning · August 12, 2026",
      title: page.title,
      description: page.description,
      sections: page.sections,
    },
  ]),
) as Record<EclipseGuideSlug, EclipseGuideContent>

export function getEclipseGuideContent(slug: EclipseGuideSlug, locale: Locale) {
  return locale === "es" ? spanishContent[slug] : nonSpanishFallback[slug]
}

export function buildEclipseGuideMetadata(locale: Locale, slug: EclipseGuideSlug): Metadata {
  const page = getEclipseGuideContent(slug, locale)
  return buildPageMetadata({
    locale,
    path: `/${slug}`,
    title: page.title,
    description: page.description,
    ogImage: "/solar-eclipse-astronomical-event.png",
    ogImageAlt: page.title,
  })
}

export function renderEclipseGuide(locale: Locale, slug: EclipseGuideSlug) {
  const page = getEclipseGuideContent(slug, locale)
  const localSources: Partial<Record<EclipseGuideSlug, Array<{ href: string; label: string }>>> = {
    "eclipse-solar-2026-a-coruna": [
      { href: galiciaEclipseUrl, label: "Xunta de Galicia: totalidad, horarios y municipios" },
      { href: ignWeatherUrl, label: "IGN: climatología de nubosidad para agosto" },
    ],
    "eclipse-solar-2026-burgos": [
      { href: castileLeonUrl, label: "Gobierno de España: orientación para Castilla y León" },
      { href: burgosGuideUrl, label: "Turismo de Castilla y León: guía oficial de Burgos" },
      { href: ignWeatherUrl, label: "IGN: climatología de nubosidad para agosto" },
    ],
    "eclipse-solar-2026-palma": [
      { href: balearicGuideUrl, label: "Govern de les Illes Balears: ejemplos de visibilidad" },
      { href: officialPointsUrl, label: "Gobierno de España: directorio oficial de puntos de observación" },
    ],
  }

  return (
    <EclipseGuidePage
      locale={locale}
      slug={slug}
      {...page}
      sources={[
        { href: ignUrl, label: "Instituto Geográfico Nacional: eclipse total del 12 de agosto de 2026" },
        { href: nasaSafetyUrl, label: "NASA: seguridad para observar eclipses" },
        ...(localSources[slug] ?? []),
        ...(slug === "fotografiar-eclipse-solar-2026-seguridad"
          ? [{ href: nasaPhotoUrl, label: "NASA: consejos para fotografiar un eclipse solar" }]
          : []),
      ]}
    />
  )
}
