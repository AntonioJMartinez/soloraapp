import type { Metadata } from "next"

import { PressKitPage } from "@/components/pages/press-kit-page"
import { SeoFeaturePage } from "@/components/seo-feature-page"
import { Locale } from "@/lib/i18n"
import { sunsetGuide } from "@/lib/photography-guides"
import { buildPageMetadata } from "@/lib/metadata"
import { FeaturePageSlug, getFeaturePageContent, getPressKitContent } from "@/lib/marketing-content"

export const featureHeroImages: Record<FeaturePageSlug, string> = {
  "sunrise-sunset-app": "/cover.jpg",
  "golden-hour-photography-app": "/golden-hour-sunset-photography.png",
  "moon-phase-calendar-app": "/moon-phases-night-sky-photography.png",
  "aurora-forecast-app": "/northern-lights-aurora-borealis-photography.png",
  "milky-way-planner": "/milky-way-galaxy-night-sky-photography.png",
}

const forecastMapFaq = {
  en: { question: "How can I compare sunset forecasts for nearby locations?", answer: "Open the sunrise and sunset quality maps in Solora Premium to compare nearby areas. Check the local time, cloud cover and the view toward the Sun before choosing where to shoot." },
  es: { question: "¿Cómo comparo la previsión del atardecer entre lugares cercanos?", answer: "Abre los mapas de calidad del amanecer y del atardecer de Solora Premium para comparar zonas cercanas. Comprueba la hora local, la nubosidad y la vista hacia el Sol antes de elegir dónde fotografiar." },
  fr: { question: "Comment comparer les prévisions de coucher du soleil entre deux lieux proches ?", answer: "Les cartes de qualité du lever et du coucher du soleil de Solora Premium permettent de comparer les environs. Vérifiez l’heure locale, les nuages et la vue en direction du Soleil avant de choisir votre point de vue." },
  it: { question: "Come posso confrontare le previsioni del tramonto per luoghi vicini?", answer: "Apri le mappe della qualità di alba e tramonto di Solora Premium per confrontare le zone vicine. Prima di scegliere dove fotografare, controlla l’orario locale, le nuvole e la visuale verso il Sole." },
  de: { question: "Wie vergleiche ich Sonnenuntergangsprognosen für Orte in der Nähe?", answer: "Mit den Prognosekarten für Sonnenaufgang und Sonnenuntergang in Solora Premium kannst du die Umgebung vergleichen. Prüfe Ortszeit, Wolken und die Sicht in Richtung Sonne, bevor du einen Fotostandort auswählst." },
  pt: { question: "Como comparar a previsão do pôr do sol em locais próximos?", answer: "Use os mapas de qualidade do nascer e do pôr do sol do Solora Premium para comparar áreas próximas. Confira o horário local, as nuvens e a vista na direção do Sol antes de escolher onde fotografar." },
  zh: { question: "怎样比较附近几个地点的日落预报？", answer: "打开 Solora Premium 的日出和日落质量预报地图，比较附近区域。选定机位前，再核对当地时间、云层和朝向太阳的视野。" },
} satisfies Record<Locale, { question: string; answer: string }>

export function buildFeaturePageMetadata(locale: Locale, slug: FeaturePageSlug): Metadata {
  const content = getFeaturePageContent(slug, locale)

  return buildPageMetadata({
    locale,
    path: `/${slug}`,
    title: content.title,
    description: content.description,
    ogImage: featureHeroImages[slug],
    ogImageAlt: content.heroAlt,
  })
}

export function renderFeaturePage(locale: Locale, slug: FeaturePageSlug) {
  const content = getFeaturePageContent(slug, locale)

  const isSunrisePage = slug === "sunrise-sunset-app"
  const hasPhotographyGuides = isSunrisePage || slug === "golden-hour-photography-app"

  return (
    <SeoFeaturePage
      locale={locale}
      slug={slug}
      title={content.title}
      eyebrow={content.eyebrow}
      description={content.description}
      heroImage={featureHeroImages[slug]}
      heroAlt={content.heroAlt}
      primaryKeyword={content.primaryKeyword}
      benefits={content.benefits}
      useCases={content.useCases}
      faqs={isSunrisePage ? [...content.faqs, forecastMapFaq[locale]] : content.faqs}
      planningSections={content.planningSections}
      relatedLinks={[...content.relatedLinks.map((relatedSlug) => ({
        href: `/${relatedSlug}`,
        label: getFeaturePageContent(relatedSlug, locale).primaryKeyword,
      })), ...(hasPhotographyGuides ? [
        { href: "/blog/sunset-quality-prediction-guide", label: sunsetGuide[locale].title },
      ] : []), ...(hasPhotographyGuides && (locale === "en" || locale === "es") ? [
        { href: "/blog/golden-hour-photography-guide", label: locale === "es" ? "Guía de fotografía en hora dorada" : "Golden hour photography guide" },
        { href: "/blog/weather-patterns-sky-photography", label: locale === "es" ? "Cómo interpretar la nubosidad" : "Read cloud cover before your shoot" },
        { href: "/sun-tracker-app", label: locale === "es" ? "Trayectoria solar en mapa y AR" : "Sun-path map and AR planning" },
      ] : [])]}
    />
  )
}

export function buildPressKitMetadata(locale: Locale): Metadata {
  const content = getPressKitContent(locale)

  return buildPageMetadata({
    locale,
    path: "/press-kit",
    title: content.title,
    description: content.description,
    ogImage: "/soloraBento.jpg",
    ogImageAlt: "Solora press kit feature image",
  })
}

export function renderPressKitPage(locale: Locale) {
  return <PressKitPage locale={locale} />
}
