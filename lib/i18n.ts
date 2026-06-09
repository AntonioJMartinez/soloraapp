import { absoluteUrl } from "@/lib/site"

export const locales = ["en", "es", "fr", "it", "de", "pt", "zh"] as const
export const defaultLocale = "en"
export const localizedLocales = locales.filter((locale) => locale !== defaultLocale)

export type Locale = (typeof locales)[number]

const bilingualEnglishSpanishPaths = new Set([
  "/about",
  "/contact",
  "/privacy",
  "/support",
  "/sun-tracker-app",
  "/moon-tracker-app",
  "/star-tracker-app",
])

const spanishOnlyPaths = new Set([
  "/eclipse-solar-2026-a-coruna",
  "/eclipse-solar-2026-burgos",
  "/eclipse-solar-2026-palma",
  "/fotografiar-eclipse-solar-2026-seguridad",
])

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  de: "Deutsch",
  pt: "Português",
  zh: "中文",
}

export const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  fr: "fr_FR",
  it: "it_IT",
  de: "de_DE",
  pt: "pt_PT",
  zh: "zh_CN",
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function assertLocale(value: string): Locale {
  if (!isLocale(value)) {
    throw new Error(`Unsupported locale: ${value}`)
  }

  return value
}

export function normalizeRoutePath(path: string): string {
  if (!path || path === "/") {
    return "/"
  }

  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`

  return withLeadingSlash.endsWith("/") && withLeadingSlash.length > 1
    ? withLeadingSlash.slice(0, -1)
    : withLeadingSlash
}

export function localizePath(locale: Locale, path = "/"): string {
  const normalizedPath = normalizeRoutePath(path)

  if (locale === defaultLocale) {
    return normalizedPath
  }

  return normalizedPath === "/" ? `/${locale}` : `/${locale}${normalizedPath}`
}

export function localizedUrl(locale: Locale, path = "/"): string {
  const localizedPath = localizePath(locale, path)
  const exportPath = localizedPath === "/" ? localizedPath : `${localizedPath}/`

  return absoluteUrl(exportPath)
}

export function getAvailableLocalesForPath(path: string): readonly Locale[] {
  const normalizedPath = normalizeRoutePath(path)

  if (bilingualEnglishSpanishPaths.has(normalizedPath)) {
    return ["en", "es"]
  }

  if (spanishOnlyPaths.has(normalizedPath)) {
    return ["es"]
  }

  return locales
}

export function localizeAvailablePath(locale: Locale, path = "/"): string {
  const availableLocales = getAvailableLocalesForPath(path)
  const targetLocale = availableLocales.includes(locale)
    ? locale
    : availableLocales.includes(defaultLocale)
      ? defaultLocale
      : availableLocales[0]

  return localizePath(targetLocale, path)
}

export function buildLanguageAlternates(
  path: string,
  availableLocales: readonly Locale[] = getAvailableLocalesForPath(path),
): Record<string, string> {
  const normalizedPath = normalizeRoutePath(path)
  const alternates = Object.fromEntries(
    availableLocales.map((locale) => [locale, localizedUrl(locale, normalizedPath)]),
  )
  const fallbackLocale = availableLocales.includes(defaultLocale)
    ? defaultLocale
    : availableLocales[0]

  return {
    ...alternates,
    "x-default": localizedUrl(fallbackLocale, normalizedPath),
  }
}

export function getSwitchableLocales(currentLocale: Locale, path = "/"): Locale[] {
  return getAvailableLocalesForPath(path).filter((locale) => locale !== currentLocale)
}
