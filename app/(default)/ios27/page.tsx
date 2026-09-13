import { IOS27Page } from "@/components/pages/ios27-page"
import { buildPageMetadata } from "@/lib/metadata"

const title = "Solora 2.0 for iOS 27 | Plan Skies Smarter"
const description =
  "Discover Solora 2.0: a redesigned sky-planning experience with Siri, smarter App Shortcuts, on-device intelligence, portrait widgets, Spotlight, and watchOS 27."

export const metadata = buildPageMetadata({
  locale: "en",
  path: "/ios27",
  title,
  description,
  keywords: [
    "Solora 2.0",
    "iOS 27",
    "iPadOS 27",
    "watchOS 27",
    "Siri weather shortcuts",
    "sky forecast app",
    "photography planner",
  ],
  ogImage: "/ios27/solora-2-event.png",
  ogImageAlt: "Solora 2.0 for iOS 27",
  availableLocales: ["en"],
})

export default function SoloraIOS27Page() {
  return <IOS27Page />
}
