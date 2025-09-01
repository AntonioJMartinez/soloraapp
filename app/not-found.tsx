import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#190908] via-[#1E140F] to-[#201B14] flex items-center justify-center">
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-[#E6786E]">Page Not Found</h2>
        <p className="text-white/80 text-lg">Could not find the requested page.</p>
        <Link 
          href="/"
          className="inline-block bg-[#E6786E] hover:bg-[#D4695F] text-white px-6 py-3 rounded-lg transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}