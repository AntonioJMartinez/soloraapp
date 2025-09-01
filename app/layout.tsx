import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Solora - Plan the Sky, Perfect the Moment | Sunrise, Sunset & Astronomical Events App",
  description:
    "The ultimate astronomical app for tracking sunrises, sunsets, moon phases, eclipses, and celestial events. Get precise timing, smart notifications, and beautiful visualizations for perfect photography moments.",
  keywords: [
    "sunrise app",
    "sunset tracker",
    "astronomical calendar",
    "moon phases",
    "eclipse tracker",
    "celestial events",
    "golden hour",
    "photography app",
    "astronomy app",
    "sky tracker",
    "solora",
    "atardecer amanecer",
    "aurora forecast",
    "milky way visibility",
    "astronomical calculations",
  ],
  authors: [{ name: "Antonio Jose Martinez Sanchez" }],
  creator: "Antonio Jose Martinez Sanchez",
  publisher: "Antonio Jose Martinez Sanchez",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://solora-app.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Solora - Plan the Sky, Perfect the Moment",
    description:
      "Track sunrises, sunsets, moon phases, eclipses, and celestial events with precision. The ultimate astronomical app for photographers and astronomy enthusiasts.",
    url: "https://solora-app.com",
    siteName: "Solora",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Solora App - Astronomical Events Tracker",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solora - Plan the Sky, Perfect the Moment",
    description:
      "Track sunrises, sunsets, moon phases, eclipses, and celestial events with precision. Available on iOS, watchOS, iPadOS, and macOS.",
    images: ["/twitter-image.jpg"],
    creator: "@solora_app",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
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
    generator: 'v0.app'
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
              name: "Solora - Atardecer & Amanecer",
              description:
                "The ultimate astronomical app for tracking sunrises, sunsets, moon phases, eclipses, and celestial events with precision and beauty.",
              applicationCategory: "UtilitiesApplication",
              operatingSystem: ["iOS", "iPadOS", "watchOS", "macOS"],
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                ratingCount: "100",
                bestRating: "5",
                worstRating: "1",
              },
              author: {
                "@type": "Person",
                name: "Antonio Jose Martinez Sanchez",
              },
              downloadUrl: "https://apps.apple.com/es/app/atardecer-amanecer-solora/id6502008343?platform=iphone",
              screenshot: [
                "https://solora-app.com/screenshot-1.jpg",
                "https://solora-app.com/screenshot-2.jpg",
                "https://solora-app.com/screenshot-3.jpg",
                "https://solora-app.com/screenshot-4.jpg",
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
