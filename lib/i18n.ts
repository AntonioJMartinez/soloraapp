import { absoluteUrl } from "@/lib/site"

export const locales = ["en", "es", "fr", "it", "de", "pt", "zh"] as const
export const defaultLocale = "en"
export const localizedLocales = locales.filter((locale) => locale !== defaultLocale)

export type Locale = (typeof locales)[number]

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
  return absoluteUrl(localizePath(locale, path))
}

export function buildLanguageAlternates(path: string): Record<string, string> {
  const normalizedPath = normalizeRoutePath(path)
  const alternates = Object.fromEntries(locales.map((locale) => [locale, localizedUrl(locale, normalizedPath)]))

  return {
    ...alternates,
    "x-default": localizedUrl(defaultLocale, normalizedPath),
  }
}

export function getSwitchableLocales(currentLocale: Locale): Locale[] {
  return locales.filter((locale) => locale !== currentLocale)
}
