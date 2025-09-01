import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Solora Blog - Sky Photography & Astronomy Guides | Expert Tips & Tutorials",
  description:
    "Master sky photography with expert guides on golden hour, aurora prediction, moon phases, and astronomical events. Professional tips for capturing perfect moments.",
  keywords: [
    "sky photography blog",
    "golden hour photography",
    "aurora photography",
    "moon phase photography",
    "astronomical events",
    "weather photography",
    "milky way photography",
    "sunset photography tips",
    "sunrise photography guide",
    "night sky photography",
    "celestial photography",
    "photography tutorials",
  ],
  openGraph: {
    title: "Solora Blog - Sky Photography & Astronomy Guides",
    description:
      "Expert guides on sky photography, astronomy, and weather forecasting. Learn to capture perfect sunsets, auroras, and celestial events.",
    type: "website",
    url: "https://solora.app/blog",
  },
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
