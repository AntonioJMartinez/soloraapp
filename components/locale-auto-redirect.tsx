"use client"

import { useEffect } from "react"

import {
  defaultLocale,
  getAvailableLocalesForPath,
  isLocale,
  localizePath,
  normalizeRoutePath,
  type Locale,
} from "@/lib/i18n"

/* Persisted when the visitor picks a language by hand; that choice always wins. */
export const LOCALE_STORAGE_KEY = "solora-preferred-locale"

/* Ensures the automatic switch only fires once per browser tab session. */
const SESSION_GUARD_KEY = "solora-locale-redirected"

function parseLocation(pathname: string): { locale: Locale; barePath: string } {
  const segments = pathname.split("/").filter(Boolean)

  if (segments.length > 0 && isLocale(segments[0]) && segments[0] !== defaultLocale) {
    const barePath = `/${segments.slice(1).join("/")}`
    return { locale: segments[0], barePath: normalizeRoutePath(barePath) }
  }

  return { locale: defaultLocale, barePath: normalizeRoutePath(pathname) }
}

function detectPreferredLocale(): Locale | null {
  const tags = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language]

  for (const tag of tags) {
    const primary = tag.toLowerCase().split("-")[0]
    if (isLocale(primary)) {
      return primary
    }
  }

  return null
}

/**
 * First-visit only: sends the visitor to the version of the current page that
 * matches their manual choice (if any) or their browser language. Runs entirely
 * client-side, so it works on the static export without server negotiation.
 *
 * Safety rules:
 * - never redirects for single-locale pages (avoids the Spanish-only 404 trap)
 * - only targets locales the page is actually published in (same source of
 *   truth as the language switcher and hreflang)
 * - guarded per tab session so it can never loop or fight the back button
 */
export function LocaleAutoRedirect() {
  useEffect(() => {
    let storage: Storage | null = null
    let session: Storage | null = null

    try {
      storage = window.localStorage
      session = window.sessionStorage
    } catch {
      return // storage blocked (private mode / cookies disabled) — do nothing
    }

    if (!session || session.getItem(SESSION_GUARD_KEY)) {
      return
    }
    session.setItem(SESSION_GUARD_KEY, "1")

    const { locale: currentLocale, barePath } = parseLocation(window.location.pathname)

    const stored = storage?.getItem(LOCALE_STORAGE_KEY)
    const target = stored && isLocale(stored) ? stored : detectPreferredLocale()
    if (!target || target === currentLocale) {
      return
    }

    const available = getAvailableLocalesForPath(barePath)
    if (available.length < 2 || !available.includes(target)) {
      return
    }

    const destination = localizePath(target, barePath)
    const withTrailingSlash = destination === "/" || destination.endsWith("/") ? destination : `${destination}/`

    window.location.replace(`${withTrailingSlash}${window.location.search}${window.location.hash}`)
  }, [])

  return null
}
