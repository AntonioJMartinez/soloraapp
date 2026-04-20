import type { Metadata, Viewport } from "next"

import { RootLayoutShell } from "@/components/root-layout-shell"
import { sharedMetadata } from "@/lib/metadata"

import "../globals.css"

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

export default function DefaultRootLayout({ children }: { children: React.ReactNode }) {
  return <RootLayoutShell lang="en">{children}</RootLayoutShell>
}
