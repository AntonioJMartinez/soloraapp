"use client"

import { openAnalyticsConsent } from "@/components/analytics-consent"

export function PrivacySettingsButton({ label }: { label: string }) {
  if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <button type="button" onClick={openAnalyticsConsent} className="transition-colors hover:text-white">
      {label}
    </button>
  )
}
