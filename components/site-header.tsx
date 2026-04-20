import Link from "next/link"

import { Locale, localizePath } from "@/lib/i18n"
import { getUiDictionary } from "@/lib/marketing-content"

import { LanguageSwitcher } from "@/components/language-switcher"

type SiteHeaderProps = {
  locale: Locale
  currentPath: string
}

export function SiteHeader({ locale, currentPath }: SiteHeaderProps) {
  const ui = getUiDictionary(locale)

  return (
    <header className="w-full border-b border-white/10 bg-black/20 px-4 py-2 backdrop-blur-md md:py-3">
      <div className="container mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link href={localizePath(locale, "/")} className="flex items-center gap-2 md:gap-3">
          <img src="/solora-app-icon.png" alt="Solora App Icon" className="h-8 w-8 md:h-10 md:w-10" />
          <span className="text-lg font-bold text-[#E6786E] md:text-xl">Solora</span>
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
            <Link href={localizePath(locale, "/#features")} className="text-sm text-white/80 transition-colors hover:text-white lg:text-base">
              {ui.navFeatures}
            </Link>
            <Link href={localizePath(locale, "/blog")} className="text-sm text-white/80 transition-colors hover:text-white lg:text-base">
              {ui.navBlog}
            </Link>
            <Link href={localizePath(locale, "/press-kit")} className="text-sm text-white/80 transition-colors hover:text-white lg:text-base">
              {ui.navPressKit}
            </Link>
            <Link href={localizePath(locale, "/#download")} className="text-sm text-white/80 transition-colors hover:text-white lg:text-base">
              {ui.navDownload}
            </Link>
          </nav>

          <LanguageSwitcher locale={locale} path={currentPath} />
        </div>
      </div>
    </header>
  )
}
