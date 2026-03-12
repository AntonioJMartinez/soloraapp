import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { absoluteUrl, siteConfig } from "@/lib/site"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "sunrise app",
    "sunset tracker",
    "sunrise sunset app",
    "golden hour app",
    "astronomical calendar",
    "moon phase calendar app",
    "moon phases",
    "milky way planner",
    "milky way visibility app",
    "aurora forecast app",
    "eclipse tracker",
    "celestial events",
    "golden hour",
    "meteor shower tracker",
    "night photography planner",
    "photography planning app",
    "astronomy app",
    "sky tracker",
    "solora",
  ],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1600,
        height: 900,
        alt: "Solora astronomical planning app preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description:
      "Plan sunrise, sunset, golden hour, moon phases, aurora forecasts, Milky Way visibility, and astronomical events on iPhone, iPad, Apple Watch, and Mac.",
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#E6786E",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
  classification: "Astronomy and Photography App",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E6786E" },
    { media: "(prefers-color-scheme: dark)", color: "#190908" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Solora",
  },
  applicationName: "Solora",
  appLinks: {
    ios: {
      url: "https://apps.apple.com/es/app/atardecer-amanecer-solora/id6502008343?platform=iphone",
      app_store_id: "6502008343",
    },
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Solora",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#E6786E",
    "msapplication-config": "/browserconfig.xml",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: siteConfig.name,
              description: siteConfig.description,
              applicationCategory: "UtilitiesApplication",
              operatingSystem: ["iOS", "iPadOS", "watchOS", "macOS"],
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Person",
                name: siteConfig.author,
              },
              downloadUrl: siteConfig.appStoreUrl,
              screenshot: [
                absoluteUrl("/screenshot-1.jpg"),
                absoluteUrl("/screenshot-2.jpg"),
                absoluteUrl("/screenshot-3.jpg"),
                absoluteUrl("/screenshot-4.jpg"),
              ],
              featureList: [
                "Global sunrise and sunset forecasts",
                "Astronomical calendar with moon phases",
                "Celestial events tracking",
                "Golden hour alerts for photography",
                "Location intelligence with GPS",
                "Smart widgets and notifications",
                "Aurora forecasts",
                "Milky Way visibility tracking",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
