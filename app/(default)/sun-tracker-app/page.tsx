import { buildTrackerPageMetadata, renderTrackerPage } from "@/lib/tracker-pages"

export const metadata = buildTrackerPageMetadata("en", "sun-tracker-app")
export default function Page() { return renderTrackerPage("en", "sun-tracker-app") }
