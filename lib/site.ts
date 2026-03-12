export const siteConfig = {
  name: "Solora",
  shortName: "Solora",
  url: "https://solora.app",
  title: "Solora | Sunrise, Sunset, Moon Phase and Aurora Forecast App",
  description:
    "Plan sunrise and sunset shoots, golden hour sessions, moon phase calendars, aurora forecasts, Milky Way visibility, tides, and major astronomical events with Solora.",
  ogImage: "/cover.jpg",
  pressImage: "/soloraBento.jpg",
  icon: "/solora-app-icon.png",
  appStoreUrl: "https://apps.apple.com/es/app/atardecer-amanecer-solora/id6502008343?platform=iphone",
  author: "Antonio Jose Martinez Sanchez",
  twitterHandle: "@solora_app",
} as const

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString()
}
