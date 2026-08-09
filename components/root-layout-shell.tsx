import type React from "react"

import { AnalyticsConsent } from "@/components/analytics-consent"
import type { Locale } from "@/lib/i18n"

type RootLayoutShellProps = {
  lang: Locale
  children: React.ReactNode
}

export function RootLayoutShell({ lang, children }: RootLayoutShellProps) {
  return (
    <html lang={lang}>
      <body>
        {children}
        <AnalyticsConsent locale={lang} />
      </body>
    </html>
  )
}
