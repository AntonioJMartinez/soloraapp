import { HomePage } from "@/components/pages/home-page"
import { buildPageMetadata } from "@/lib/metadata"
import { getHomeContent } from "@/lib/marketing-content"

export const metadata = buildPageMetadata({
  locale: "en",
  path: "/",
  title: getHomeContent("en").title,
  description: getHomeContent("en").description,
  ogImageAlt: "Solora astronomical planning app preview",
})

export default function EnglishHomePage() {
  return <HomePage locale="en" />
}
