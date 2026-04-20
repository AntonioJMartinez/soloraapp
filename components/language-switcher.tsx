import Link from "next/link"

import { defaultLocale, getSwitchableLocales, localizePath, localeNames, Locale } from "@/lib/i18n"
import { getUiDictionary } from "@/lib/marketing-content"

type LanguageSwitcherProps = {
  locale: Locale
  path: string
}

export function LanguageSwitcher({ locale, path }: LanguageSwitcherProps) {
  const ui = getUiDictionary(locale)
  const otherLocales = getSwitchableLocales(locale).filter((switchLocale) => switchLocale !== defaultLocale)

  return (
    <div className="flex items-center gap-2 text-xs text-white/60 md:text-sm">
      <span className="hidden md:inline">{ui.languageLabel}</span>
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
        <Link
          href={localizePath(defaultLocale, path)}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            locale === defaultLocale ? "bg-white text-[#190908]" : "text-white/75 hover:text-white"
          }`}
        >
          {localeNames.en}
        </Link>
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
