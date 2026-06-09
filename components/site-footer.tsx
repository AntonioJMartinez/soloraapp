import Link from "next/link"

import { Locale, localizePath } from "@/lib/i18n"
import { getUiDictionary } from "@/lib/marketing-content"
import { siteConfig } from "@/lib/site"
import { LanguageSwitcher } from "@/components/language-switcher"

type SiteFooterProps = {
  locale: Locale
  currentPath: string
}

export function SiteFooter({ locale, currentPath }: SiteFooterProps) {
  const ui = getUiDictionary(locale)
  const trustLinks =
    locale === "es"
      ? [
          { href: "/about", label: "Acerca de" },
          { href: "/support", label: "Soporte" },
          { href: "/contact", label: "Contacto" },
          { href: "/privacy", label: "Privacidad" },
        ]
      : [
          { href: "/about", label: "About" },
          { href: "/support", label: "Support" },
          { href: "/contact", label: "Contact" },
          { href: "/privacy", label: "Privacy" },
        ]

  return (
    <footer className="mt-16 border-t border-white/10 bg-black/40 py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-8 xl:flex-row">
          <div className="flex items-center gap-3 md:gap-4">
            <img src="/solora-app-icon.png" alt="Solora App Icon" className="h-10 w-10 md:h-12 md:w-12" />
            <div className="text-center md:text-left">
              <span className="block text-xl font-bold text-[#E6786E] md:text-2xl">Solora</span>
              <span className="text-xs text-white/60 md:text-sm">{ui.planTheSky}</span>
            </div>
          </div>

          <LanguageSwitcher locale={locale} path={currentPath} />

          <div className="space-y-3 text-center xl:text-right">
            <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-white/70 xl:justify-end">
              {trustLinks.map((link) => (
                <Link key={link.href} href={localizePath(locale, link.href)} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>
            <p className="text-sm text-white/80 md:text-base">
              © {new Date().getFullYear()} {siteConfig.author}
            </p>
            <p className="text-xs text-white/60 md:text-sm">
              {ui.allRightsReserved} • {ui.availableOnAppStore}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
