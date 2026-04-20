import type { Metadata, Viewport } from "next"
import { notFound } from "next/navigation"

import { RootLayoutShell } from "@/components/root-layout-shell"
import { isLocale, localizedLocales } from "@/lib/i18n"
import { sharedMetadata } from "@/lib/metadata"

import "../../globals.css"

export const metadata: Metadata = sharedMetadata

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E6786E" },
    { media: "(prefers-color-scheme: dark)", color: "#190908" },
  ],
}

export function generateStaticParams() {
  return localizedLocales.map((locale) => ({ locale }))
}

export default async function LocalizedRootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale) || locale === "en") {
    notFound()
  }

  return <RootLayoutShell lang={locale}>{children}</RootLayoutShell>
}
