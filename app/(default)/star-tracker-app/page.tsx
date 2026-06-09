import { buildTrackerPageMetadata, renderTrackerPage } from "@/lib/tracker-pages"

export const metadata = buildTrackerPageMetadata("en", "star-tracker-app")
export default function Page() { return renderTrackerPage("en", "star-tracker-app") }
