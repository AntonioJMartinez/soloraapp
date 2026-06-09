import type { Metadata } from "next"

import {
  buildLanguageAlternates,
  getAvailableLocalesForPath,
  Locale,
  localizedUrl,
  openGraphLocales,
} from "@/lib/i18n"
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

const sharedOtherMetadata = {
  "apple-itunes-app": `app-id=${siteConfig.appStoreId}`,
  "apple-mobile-web-app-capable": "yes",
  "apple-mobile-web-app-status-bar-style": "black-translucent",
  "apple-mobile-web-app-title": siteConfig.name,
  "mobile-web-app-capable": "yes",
  "msapplication-TileColor": "#E6786E",
} satisfies Record<string, string>

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
    icon: [{ url: siteConfig.icon, sizes: "1024x1024", type: "image/png" }],
    apple: [{ url: siteConfig.icon, sizes: "1024x1024", type: "image/png" }],
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
  other: sharedOtherMetadata,
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
  const availableLocales = getAvailableLocalesForPath(path)
  const isTranslated = availableLocales.includes(locale)
  const canonicalLocale = isTranslated ? locale : availableLocales[0]
  const canonical = localizedUrl(canonicalLocale, path)
  const metadataTitle = fitMetadataTitle(title)

  return {
    title: metadataTitle,
    description,
    keywords,
    alternates: {
      canonical,
      languages: buildLanguageAlternates(path, availableLocales),
    },
    robots: isTranslated
      ? undefined
      : {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
          },
        },
    openGraph: {
      title: metadataTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: openGraphLocales[locale],
      type,
      images: [
        {
          url: ogImage,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description,
      images: [ogImage],
      creator: siteConfig.twitterHandle,
    },
    other: {
      ...sharedOtherMetadata,
      "apple-itunes-app": `app-id=${siteConfig.appStoreId}, app-argument=${canonical}`,
    },
  }
}

function fitMetadataTitle(title: string, maxLength = 62): string {
  if (title.length <= maxLength) {
    return title
  }

  const clause = title.split(/[:|]/, 1)[0].trim()

  if (clause.length >= 32 && clause.length <= maxLength) {
    return clause
  }

  const shortened = title.slice(0, maxLength + 1)
  const lastSpace = shortened.lastIndexOf(" ")

  return shortened.slice(0, lastSpace > 40 ? lastSpace : maxLength).trim()
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
      type: "article",
      publishedTime: input.publishedTime,
      authors: [siteConfig.author],
    },
  }
}
