import { buildInfoPageMetadata, renderInfoPage } from "@/lib/info-pages"

export const metadata = buildInfoPageMetadata("en", "support")
export default function Page() { return renderInfoPage("en", "support") }
