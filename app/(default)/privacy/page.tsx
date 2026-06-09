import { buildInfoPageMetadata, renderInfoPage } from "@/lib/info-pages"

export const metadata = buildInfoPageMetadata("en", "privacy")
export default function Page() { return renderInfoPage("en", "privacy") }
