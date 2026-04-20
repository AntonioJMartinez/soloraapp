import { Locale } from "@/lib/i18n"
import { getUiDictionary } from "@/lib/marketing-content"
import { siteConfig } from "@/lib/site"

type SiteFooterProps = {
  locale: Locale
}

export function SiteFooter({ locale }: SiteFooterProps) {
  const ui = getUiDictionary(locale)

  return (
    <footer className="mt-16 border-t border-white/10 bg-black/40 py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8">
          <div className="flex items-center gap-3 md:gap-4">
            <img src="/solora-app-icon.png" alt="Solora App Icon" className="h-10 w-10 md:h-12 md:w-12" />
            <div className="text-center md:text-left">
              <span className="block text-xl font-bold text-[#E6786E] md:text-2xl">Solora</span>
              <span className="text-xs text-white/60 md:text-sm">{ui.planTheSky}</span>
            </div>
          </div>

          <div className="space-y-1 text-center md:text-right md:space-y-2">
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
