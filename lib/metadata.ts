import type { Metadata } from "next"

import { buildLanguageAlternates, Locale, localizedUrl, openGraphLocales } from "@/lib/i18n"
import { siteConfig } from "@/lib/site"

type BasePageMetadataInput = {
  locale: Locale
  path: string
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  ogImageAlt?: string
  type?: "website" | "article"
}

type ArticleMetadataInput = BasePageMetadataInput & {
  publishedTime: string
}

export const sharedMetadata: Metadata = {
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
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
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteConfig.name,
  },
  applicationName: siteConfig.name,
  appLinks: {
    ios: {
      url: siteConfig.appStoreUrl,
      app_store_id: siteConfig.appStoreId,
    },
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": siteConfig.name,
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#E6786E",
    "msapplication-config": "/browserconfig.xml",
  },
}

function buildCommonMetadata({
  locale,
  path,
  title,
  description,
  keywords,
  ogImage = siteConfig.ogImage,
  ogImageAlt = "Solora astronomical planning app preview",
  type = "website",
}: BasePageMetadataInput): Metadata {
  const canonical = localizedUrl(locale, path)

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages: buildLanguageAlternates(path),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: openGraphLocales[locale],
      type,
      images: [
        {
          url: ogImage,
          width: 1600,
          height: 900,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: siteConfig.twitterHandle,
    },
    other: {
      ...(sharedMetadata.other ?? {}),
      "apple-itunes-app": `app-id=${siteConfig.appStoreId}, app-argument=${canonical}`,
    },
  }
}

export function buildPageMetadata(input: BasePageMetadataInput): Metadata {
  return buildCommonMetadata(input)
}

export function buildArticleMetadata(input: ArticleMetadataInput): Metadata {
  const metadata = buildCommonMetadata({
    ...input,
    type: "article",
  })

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      publishedTime: input.publishedTime,
      authors: [siteConfig.author],
    },
  }
}
