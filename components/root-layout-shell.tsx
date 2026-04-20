import type React from "react"

type RootLayoutShellProps = {
  lang: string
  children: React.ReactNode
}

export function RootLayoutShell({ lang, children }: RootLayoutShellProps) {
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  )
}
