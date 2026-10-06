import type { Metadata } from "next"

import { PressKitPage } from "@/components/pages/press-kit-page"
import { SeoFeaturePage } from "@/components/seo-feature-page"
import { Locale } from "@/lib/i18n"
import { buildPageMetadata } from "@/lib/metadata"
import { FeaturePageSlug, getFeaturePageContent, getPressKitContent } from "@/lib/marketing-content"

export const featureHeroImages: Record<FeaturePageSlug, string> = {
  "sunrise-sunset-app": "/cover.jpg",
  "golden-hour-photography-app": "/golden-hour-sunset-photography.png",
  "moon-phase-calendar-app": "/moon-phases-night-sky-photography.png",
  "aurora-forecast-app": "/northern-lights-aurora-borealis-photography.png",
  "milky-way-planner": "/milky-way-galaxy-night-sky-photography.png",
}

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
      faqs={content.faqs}
      planningSections={content.planningSections}
      relatedLinks={[...content.relatedLinks.map((relatedSlug) => ({
        href: `/${relatedSlug}`,
        label: getFeaturePageContent(relatedSlug, locale).primaryKeyword,
      })), ...(slug === "sunrise-sunset-app" || slug === "golden-hour-photography-app" ? [
        { href: "/blog/sunset-quality-prediction-guide", label: locale === "es" ? "Cómo predecir un atardecer de colores" : "How to predict a colorful sunset" },
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
