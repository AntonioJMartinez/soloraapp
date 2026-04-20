import Link from "next/link"

export default function LocalizedNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#190908] via-[#1E140F] to-[#201B14]">
      <div className="space-y-6 text-center">
        <h2 className="text-4xl font-bold text-[#E6786E]">Page Not Found</h2>
        <p className="text-lg text-white/80">Could not find the requested page.</p>
        <Link href="/" className="inline-block rounded-lg bg-[#E6786E] px-6 py-3 text-white transition-colors hover:bg-[#D4695F]">
          Return Home
        </Link>
      </div>
    </div>
  )
}
