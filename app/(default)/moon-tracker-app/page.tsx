import { buildTrackerPageMetadata, renderTrackerPage } from "@/lib/tracker-pages"

export const metadata = buildTrackerPageMetadata("en", "moon-tracker-app")
export default function Page() { return renderTrackerPage("en", "moon-tracker-app") }
