import { buildInfoPageMetadata, renderInfoPage } from "@/lib/info-pages"

export const metadata = buildInfoPageMetadata("en", "about")
export default function Page() { return renderInfoPage("en", "about") }
