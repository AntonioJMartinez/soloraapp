import { buildInfoPageMetadata, renderInfoPage } from "@/lib/info-pages"

export const metadata = buildInfoPageMetadata("en", "contact")
export default function Page() { return renderInfoPage("en", "contact") }
