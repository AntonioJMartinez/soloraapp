"use client"

import { getAvailableLocalesForPath, localizePath, localeNames, Locale } from "@/lib/i18n"

type LanguageSwitcherProps = {
  locale: Locale
  path: string
  label: string
}

export function LanguageSwitcher({ locale, path, label }: LanguageSwitcherProps) {
  const availableLocales = getAvailableLocalesForPath(path)

  return (
    <div className="flex flex-col items-center gap-2 text-xs text-white/60 md:text-sm">
      <label htmlFor="footer-language-select">{label}</label>
      <div className="relative">
        <svg
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#F4B4AE]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m5 8 6 6" />
          <path d="m4 14 6-6 2-3" />
          <path d="M2 5h12" />
          <path d="M7 2h1" />
          <path d="m22 22-5-10-5 10" />
          <path d="M14 18h6" />
        </svg>
        <select
          id="footer-language-select"
          value={locale}
          onChange={(event) => {
            window.location.assign(localizePath(event.target.value as Locale, path))
          }}
          className="h-11 w-[190px] appearance-none rounded-full border border-white/15 bg-white/5 py-2 pl-11 pr-10 text-sm text-white outline-none transition-colors hover:bg-white/10 focus:border-[#E6786E] focus:ring-2 focus:ring-[#E6786E]/40"
        >
          {availableLocales.map((availableLocale) => (
            <option key={availableLocale} value={availableLocale} className="bg-[#21130F] text-white">
              {localeNames[availableLocale]}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </div>
  )
}
