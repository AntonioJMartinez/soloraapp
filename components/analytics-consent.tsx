"use client"

import { useEffect, useState } from "react"

import type { Locale } from "@/lib/i18n"

const storageKey = "solora_analytics_consent"
const openConsentEvent = "solora:open-analytics-consent"
const analyticsScriptId = "solora-google-analytics"

type ConsentValue = "accepted" | "declined" | null

const copy: Record<Locale, { title: string; body: string; accept: string; decline: string }> = {
  en: {
    title: "Optional analytics",
    body: "Allow anonymous Google Analytics measurements so we can improve pages and understand App Store downloads. No advertising cookies.",
    accept: "Allow analytics",
    decline: "Not now",
  },
  es: {
    title: "Analítica opcional",
    body: "Permite mediciones anónimas de Google Analytics para mejorar la web y entender las descargas de App Store. Sin cookies publicitarias.",
    accept: "Permitir analítica",
    decline: "Ahora no",
  },
  fr: {
    title: "Analyse facultative",
    body: "Autorisez des mesures Google Analytics anonymes pour améliorer le site et comprendre les téléchargements App Store. Sans cookies publicitaires.",
    accept: "Autoriser",
    decline: "Pas maintenant",
  },
  it: {
    title: "Analisi facoltativa",
    body: "Consenti misurazioni anonime di Google Analytics per migliorare il sito e capire i download da App Store. Nessun cookie pubblicitario.",
    accept: "Consenti",
    decline: "Non ora",
  },
  de: {
    title: "Optionale Analyse",
    body: "Erlaube anonyme Google-Analytics-Messungen, um Seiten und App-Store-Downloads zu verbessern. Keine Werbe-Cookies.",
    accept: "Analyse erlauben",
    decline: "Nicht jetzt",
  },
  pt: {
    title: "Análise opcional",
    body: "Permita medições anônimas do Google Analytics para melhorar o site e entender downloads na App Store. Sem cookies de publicidade.",
    accept: "Permitir",
    decline: "Agora não",
  },
  zh: {
    title: "可选分析",
    body: "允许匿名 Google Analytics 衡量，以改进网页并了解 App Store 下载情况。不使用广告 Cookie。",
    accept: "允许分析",
    decline: "暂不",
  },
}

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function AnalyticsConsent({ locale }: { locale: Locale }) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const [consent, setConsent] = useState<ConsentValue>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!measurementId) {
      return
    }

    const savedConsent = window.localStorage.getItem(storageKey) as ConsentValue
    setConsent(savedConsent)
    setIsOpen(savedConsent !== "accepted" && savedConsent !== "declined")

    const openConsent = () => setIsOpen(true)
    window.addEventListener(openConsentEvent, openConsent)

    return () => window.removeEventListener(openConsentEvent, openConsent)
  }, [measurementId])

  useEffect(() => {
    if (consent !== "accepted" || !measurementId) {
      return
    }

    window.dataLayer = window.dataLayer || []
    window.gtag = window.gtag || function gtag(...args: unknown[]) {
      window.dataLayer.push(args)
    }
    window.gtag("js", new Date())
    window.gtag("config", measurementId, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    })

    if (!document.getElementById(analyticsScriptId)) {
      const script = document.createElement("script")
      script.id = analyticsScriptId
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
      document.head.appendChild(script)
    }
  }, [consent, measurementId])

  useEffect(() => {
    if (consent !== "accepted" || !measurementId) {
      return
    }

    const trackAppStoreClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href*="apps.apple.com"]')

      if (!link || !window.gtag) {
        return
      }

      window.gtag("event", "app_store_click", {
        page_path: window.location.pathname,
        page_language: document.documentElement.lang,
        link_text: link.textContent?.trim().slice(0, 100) || "App Store",
      })
    }

    document.addEventListener("click", trackAppStoreClick)
    return () => document.removeEventListener("click", trackAppStoreClick)
  }, [consent, measurementId])

  if (!measurementId) {
    return null
  }

  const chooseConsent = (value: Exclude<ConsentValue, null>) => {
    if (value === "declined") {
      window.gtag?.("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
      })

      for (const cookie of document.cookie.split(";")) {
        const name = cookie.split("=")[0]?.trim()

        if (!name?.startsWith("_ga")) {
          continue
        }

        document.cookie = `${name}=; Max-Age=0; path=/`
        document.cookie = `${name}=; Max-Age=0; path=/; domain=${window.location.hostname}`
        document.cookie = `${name}=; Max-Age=0; path=/; domain=.${window.location.hostname}`
      }

      document.getElementById(analyticsScriptId)?.remove()
    }

    window.localStorage.setItem(storageKey, value)
    setConsent(value)
    setIsOpen(false)
  }

  return (
    <>
      {isOpen ? (
        <aside
          role="dialog"
          aria-live="polite"
          aria-label={copy[locale].title}
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-2xl rounded-2xl border border-white/15 bg-[#190908] p-5 text-white shadow-2xl"
        >
          <div className="space-y-4 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:space-y-0">
            <div className="space-y-1">
              <h2 className="font-semibold">{copy[locale].title}</h2>
              <p className="text-sm leading-relaxed text-white/70">{copy[locale].body}</p>
            </div>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => chooseConsent("declined")}
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80"
              >
                {copy[locale].decline}
              </button>
              <button
                type="button"
                onClick={() => chooseConsent("accepted")}
                className="rounded-full bg-[#E6786E] px-4 py-2 text-sm font-semibold text-white"
              >
                {copy[locale].accept}
              </button>
            </div>
          </div>
        </aside>
      ) : null}
    </>
  )
}

export function openAnalyticsConsent() {
  window.dispatchEvent(new Event(openConsentEvent))
}
