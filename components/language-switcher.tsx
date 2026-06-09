import Link from "next/link"

import { defaultLocale, getSwitchableLocales, localizePath, localeNames, Locale } from "@/lib/i18n"
import { getUiDictionary } from "@/lib/marketing-content"

type LanguageSwitcherProps = {
  locale: Locale
  path: string
}

export function LanguageSwitcher({ locale, path }: LanguageSwitcherProps) {
  const ui = getUiDictionary(locale)
  const otherLocales = getSwitchableLocales(locale, path).filter((switchLocale) => switchLocale !== defaultLocale)
  const defaultLocaleAvailable = getSwitchableLocales(locale, path).includes(defaultLocale) || locale === defaultLocale

  return (
    <div className="flex flex-col items-center gap-2 text-xs text-white/60 md:text-sm">
      <span>{ui.languageLabel}</span>
      <div className="flex flex-wrap items-center justify-center gap-1 rounded-2xl border border-white/10 bg-white/5 p-1">
        {defaultLocaleAvailable ? (
          <Link
            href={localizePath(defaultLocale, path)}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              locale === defaultLocale ? "bg-white text-[#190908]" : "text-white/75 hover:text-white"
            }`}
          >
            {localeNames.en}
          </Link>
        ) : null}
        {otherLocales.map((switchLocale) => (
          <Link
            key={switchLocale}
            href={localizePath(switchLocale, path)}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              locale === switchLocale ? "bg-white text-[#190908]" : "text-white/75 hover:text-white"
            }`}
          >
            {localeNames[switchLocale]}
          </Link>
        ))}
      </div>
    </div>
  )
}
