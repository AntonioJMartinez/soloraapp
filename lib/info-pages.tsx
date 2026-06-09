import type { Metadata } from "next"

import { InfoPage, InfoPageSection } from "@/components/info-page"
import { Locale } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/metadata"

export const infoPageSlugs = ["privacy", "support", "contact", "about"] as const
export type InfoPageSlug = (typeof infoPageSlugs)[number]

type InfoPageContent = {
  eyebrow: string
  title: string
  description: string
  updated: string
  sections: InfoPageSection[]
}

const appPrivacyUrl =
  "https://recondite-muenster-de4.notion.site/Privacy-Policy-7d865705990b4507b9958eefbb4cecbf"
const appTermsUrl =
  "https://recondite-muenster-de4.notion.site/Terms-of-Use-8341e9d9718e4cf987d81a34031fe726"
const supportEmail = "mailto:soloraapp@gmail.com"

const translations = {
  en: {
    updated: "Last updated: June 9, 2026",
    privacy: {
      eyebrow: "Privacy",
      title: "Website and App Privacy",
      description: "How Solora handles privacy on this website and where to find the separate policy governing the iOS app.",
      sections: [
        { heading: "This website", paragraphs: ["When website analytics is enabled, Solora offers optional Google Analytics measurement. The analytics script loads only after you select Allow analytics. If you decline, Solora does not load Google Analytics or record App Store click events.", "Consent is stored in your browser's local storage so the website can remember your choice. Analytics is configured without advertising signals or ad personalization. The hosting and network providers may still process ordinary technical logs for security and service operation."] },
        { heading: "The Solora app", paragraphs: ["The iOS app is a separate product with its own data flows and published privacy policy. The app includes analytics services, including Firebase Analytics and Mixpanel, and may process location, forecast, purchase, diagnostic, and usage information as described in that policy.", "Some AI features can run on-device when supported, but this does not mean every app data flow remains exclusively on-device. Consult the app privacy policy for the controlling details."], links: [{ href: appPrivacyUrl, label: "Read the app privacy policy", external: true }, { href: appTermsUrl, label: "Read the app terms", external: true }] },
        { heading: "Change your choice", paragraphs: ["Use Analytics settings in the website footer to review your choice. Declining analytics prevents future measurement on this browser. Solora does not use analytics consent for advertising."] },
        { heading: "Questions", paragraphs: ["Contact Solora for privacy questions or requests related to the website or app."], links: [{ href: supportEmail, label: "Email soloraapp@gmail.com", external: true }] },
      ],
    },
    support: {
      eyebrow: "Support",
      title: "Solora Support",
      description: "Get help with forecasts, locations, notifications, subscriptions, widgets, Apple Watch, and sky-planning tools.",
      sections: [
        { heading: "Before contacting support", paragraphs: ["Include your device model, iOS version, Solora version, the affected location, and clear steps to reproduce the issue. Screenshots are useful when they do not contain sensitive information.", "For forecast questions, include the date, approximate time, and saved location involved. For subscription issues, do not email payment-card details or account passwords."] },
        { heading: "Contact support", paragraphs: ["Email is the primary support channel. Response times can vary, but reports with complete reproduction details are easier to investigate."], links: [{ href: "mailto:soloraapp@gmail.com?subject=Solora%20Support", label: "Email Solora support", external: true }] },
        { heading: "Policies", paragraphs: ["Subscription, privacy, and acceptable-use information is maintained in the app policies."], links: [{ href: appPrivacyUrl, label: "Privacy policy", external: true }, { href: appTermsUrl, label: "Terms of use", external: true }] },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact Solora",
      description: "Contact the independent developer behind Solora for support, press, partnerships, or product feedback.",
      sections: [
        { heading: "General and product support", paragraphs: ["For app support, bug reports, feature requests, account questions, or product feedback, contact Solora by email."], links: [{ href: "mailto:soloraapp@gmail.com", label: "soloraapp@gmail.com", external: true }] },
        { heading: "Press and partnerships", paragraphs: ["For reviews, editorial coverage, astronomy or photography partnerships, and asset requests, include the publication or organization name and intended use."], links: [{ href: "mailto:soloraapp@gmail.com?subject=Solora%20Press%20or%20Partnership", label: "Contact for press or partnerships", external: true }, { href: "/press-kit", label: "Open the press kit" }] },
      ],
    },
    about: {
      eyebrow: "About",
      title: "About Solora and Its Developer",
      description: "Solora is an independent Apple-platform app for planning light, weather, and astronomical conditions.",
      sections: [
        { heading: "The product", paragraphs: ["Solora helps photographers and sky watchers plan sunrise, sunset, twilight, Moon conditions, Milky Way visibility, aurora opportunities, tides, weather, and astronomical events.", "The app includes map and AR path tools for the Sun, Moon, Milky Way, stars, planets, galaxies, nebulae, clusters, and meteor-shower radiants, alongside widgets, Live Activities, and Apple Watch support."] },
        { heading: "The developer", paragraphs: ["Solora is created and maintained by Antonio Jose Martinez Sanchez as an independent product. Product capabilities described on this website are checked against the implementation in the Solora app repository."], links: [{ href: "/press-kit", label: "View the press kit" }, { href: "/contact", label: "Contact the developer" }] },
        { heading: "Editorial approach", paragraphs: ["Time-sensitive astronomy guides use primary sources where available and display update dates. Product claims avoid unverified accuracy, performance, or popularity figures."] },
      ],
    },
  },
  es: {
    updated: "Última actualización: 9 de junio de 2026",
    privacy: {
      eyebrow: "Privacidad",
      title: "Privacidad de la web y de la app",
      description: "Cómo trata Solora la privacidad en esta web y dónde consultar la política independiente que regula la app para iOS.",
      sections: [
        { heading: "Esta web", paragraphs: ["Cuando la analítica web está activada, Solora ofrece medición opcional con Google Analytics. El script solo se carga después de seleccionar Permitir analítica. Si la rechazas, Solora no carga Google Analytics ni registra clics hacia App Store.", "La elección se guarda en el almacenamiento local del navegador. La analítica se configura sin señales publicitarias ni personalización de anuncios. Los proveedores de alojamiento y red pueden seguir tratando registros técnicos ordinarios para seguridad y funcionamiento."] },
        { heading: "La app Solora", paragraphs: ["La app para iOS es un producto separado con sus propios flujos de datos y política de privacidad publicada. La app incluye servicios de analítica como Firebase Analytics y Mixpanel, y puede tratar información de ubicación, previsiones, compras, diagnóstico y uso según dicha política.", "Algunas funciones de IA pueden ejecutarse en el dispositivo cuando son compatibles, pero eso no significa que todos los flujos de datos de la app permanezcan exclusivamente en el dispositivo."], links: [{ href: appPrivacyUrl, label: "Leer la política de privacidad de la app", external: true }, { href: appTermsUrl, label: "Leer los términos de la app", external: true }] },
        { heading: "Cambiar tu elección", paragraphs: ["Usa Configurar analítica en el pie de página para revisar tu elección. Rechazar la analítica impide futuras mediciones en este navegador. Solora no utiliza este consentimiento con fines publicitarios."] },
        { heading: "Consultas", paragraphs: ["Contacta con Solora para consultas o solicitudes de privacidad relacionadas con la web o la app."], links: [{ href: supportEmail, label: "Escribir a soloraapp@gmail.com", external: true }] },
      ],
    },
    support: {
      eyebrow: "Soporte",
      title: "Soporte de Solora",
      description: "Obtén ayuda con previsiones, ubicaciones, notificaciones, suscripciones, widgets, Apple Watch y herramientas del cielo.",
      sections: [
        { heading: "Antes de contactar", paragraphs: ["Incluye modelo del dispositivo, versión de iOS, versión de Solora, ubicación afectada y pasos claros para reproducir el problema. Las capturas ayudan cuando no contienen información sensible.", "Para dudas de previsión, indica fecha, hora aproximada y ubicación. No envíes datos de tarjeta, contraseñas ni códigos de acceso."] },
        { heading: "Contactar con soporte", paragraphs: ["El correo electrónico es el canal principal de soporte. Los informes completos son más fáciles de investigar."], links: [{ href: "mailto:soloraapp@gmail.com?subject=Soporte%20Solora", label: "Escribir al soporte de Solora", external: true }] },
        { heading: "Políticas", paragraphs: ["La información sobre suscripciones, privacidad y uso se mantiene en las políticas de la app."], links: [{ href: appPrivacyUrl, label: "Política de privacidad", external: true }, { href: appTermsUrl, label: "Términos de uso", external: true }] },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Contacta con Solora",
      description: "Contacta con el desarrollador independiente de Solora para soporte, prensa, colaboraciones o comentarios.",
      sections: [
        { heading: "Soporte y producto", paragraphs: ["Para soporte, errores, propuestas de funciones, consultas de cuenta o comentarios sobre el producto, escribe por correo electrónico."], links: [{ href: "mailto:soloraapp@gmail.com", label: "soloraapp@gmail.com", external: true }] },
        { heading: "Prensa y colaboraciones", paragraphs: ["Para reseñas, cobertura editorial, colaboraciones de astronomía o fotografía y solicitudes de recursos, indica el medio u organización y el uso previsto."], links: [{ href: "mailto:soloraapp@gmail.com?subject=Prensa%20o%20colaboraci%C3%B3n%20Solora", label: "Contacto de prensa y colaboraciones", external: true }, { href: "/press-kit", label: "Abrir kit de prensa" }] },
      ],
    },
    about: {
      eyebrow: "Acerca de",
      title: "Acerca de Solora y su desarrollador",
      description: "Solora es una app independiente para plataformas Apple que ayuda a planificar luz, meteorología y condiciones astronómicas.",
      sections: [
        { heading: "El producto", paragraphs: ["Solora ayuda a fotógrafos y observadores del cielo a planificar amanecer, atardecer, crepúsculo, Luna, Vía Láctea, auroras, mareas, meteorología y eventos astronómicos.", "La app incluye trayectorias en mapa y AR para Sol, Luna, Vía Láctea, estrellas, planetas, galaxias, nebulosas, cúmulos y radiantes de meteoros, además de widgets, Actividades en Directo y Apple Watch."] },
        { heading: "El desarrollador", paragraphs: ["Solora está creada y mantenida por Antonio Jose Martinez Sanchez como producto independiente. Las funciones descritas en esta web se contrastan con la implementación del repositorio de la app."], links: [{ href: "/press-kit", label: "Ver kit de prensa" }, { href: "/contact", label: "Contactar con el desarrollador" }] },
        { heading: "Criterio editorial", paragraphs: ["Las guías astronómicas sensibles al tiempo utilizan fuentes primarias cuando están disponibles y muestran la fecha de actualización. Se evitan cifras no verificadas de precisión, rendimiento o popularidad."] },
      ],
    },
  },
} as const

function getContent(locale: Locale, slug: InfoPageSlug): InfoPageContent {
  const language = locale === "es" ? translations.es : translations.en
  const page = language[slug]

  return {
    ...page,
    updated: language.updated,
    sections: page.sections.map((section) => ({
      ...section,
      paragraphs: [...section.paragraphs],
      links: "links" in section ? [...section.links] : undefined,
    })),
  }
}

export function buildInfoPageMetadata(locale: Locale, slug: InfoPageSlug): Metadata {
  const content = getContent(locale, slug)

  return buildPageMetadata({
    locale,
    path: `/${slug}`,
    title: content.title,
    description: content.description,
  })
}

export function renderInfoPage(locale: Locale, slug: InfoPageSlug) {
  const content = getContent(locale, slug)
  return <InfoPage locale={locale} slug={slug} {...content} />
}
