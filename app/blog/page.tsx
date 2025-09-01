import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Oswald } from "next/font/google"

const oswald = Oswald({ subsets: ["latin"] })

// Mock blog posts data - in real app, this would come from a CMS or database
const blogPosts = [
  {
    id: "golden-hour-photography-guide",
    title: "Ultimate Guide to Golden Hour Photography: Timing, Tips, and Techniques",
    excerpt:
      "Master the art of golden hour photography with our comprehensive guide. Learn the best times, camera settings, and composition techniques for stunning sunset and sunrise photos.",
    category: "Photography",
    readTime: "8 min read",
    publishDate: "2024-12-15",
    image: "golden-hour-sunset-photography.png",
    featured: true,
  },
  {
    id: "moon-phases-photography",
    title: "Moon Phase Calendar 2025: Best Times for Night Photography",
    excerpt:
      "Discover the optimal moon phases for different types of night photography. From new moon for Milky Way shots to full moon for landscape illumination.",
    category: "Astronomy",
    readTime: "6 min read",
    publishDate: "2024-12-12",
    image: "moon-phases-night-sky-photography.png",
    featured: true,
  },
  {
    id: "aurora-prediction-guide",
    title: "How to Predict Aurora Activity for Perfect Northern Lights Photos",
    excerpt:
      "Learn to read KP index, solar wind data, and weather patterns to predict when and where you'll see the northern lights. Includes the best apps and tools.",
    category: "Aurora",
    readTime: "10 min read",
    publishDate: "2024-12-10",
    image: "northern-lights-aurora-borealis-photography.png",
    featured: true,
  },
  {
    id: "weather-patterns-sky-photography",
    title: "Weather Patterns Every Sky Photographer Should Know",
    excerpt:
      "Understanding cloud formations, atmospheric conditions, and weather systems that create the most dramatic and photogenic skies.",
    category: "Weather",
    readTime: "7 min read",
    publishDate: "2024-12-08",
    image: "dramatic-storm-clouds-weather-photography.png",
    featured: false,
  },
  {
    id: "astronomical-events-2025",
    title: "Astronomical Events Calendar 2025: Don't Miss These Celestial Shows",
    excerpt:
      "Complete guide to 2025's most spectacular astronomical events including eclipses, meteor showers, planetary alignments, and supermoons.",
    category: "Astronomy",
    readTime: "12 min read",
    publishDate: "2024-12-05",
    image: "solar-eclipse-astronomical-event.png",
    featured: false,
  },
  {
    id: "milky-way-photography-beginners",
    title: "Milky Way Photography: Complete Beginner's Guide",
    excerpt:
      "Everything you need to know to capture stunning Milky Way photos, from camera settings and equipment to the best locations and timing.",
    category: "Photography",
    readTime: "15 min read",
    publishDate: "2024-12-01",
    image: "milky-way-galaxy-night-sky-photography.png",
    featured: false,
  },
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Solora Blog - Sky Photography & Astronomy Guides",
            description:
              "Expert guides on sky photography, astronomy, and weather forecasting. Learn to capture perfect sunsets, auroras, and celestial events.",
            url: "https://solora.app/blog",
            publisher: {
              "@type": "Organization",
              name: "Solora",
              logo: {
                "@type": "ImageObject",
                url: "https://solora.app/solora-app-icon.png",
              },
            },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: blogPosts.map((post, index) => ({
                "@type": "BlogPosting",
                position: index + 1,
                headline: post.title,
                description: post.excerpt,
                url: `https://solora.app/blog/${post.id}`,
                datePublished: post.publishDate,
                author: {
                  "@type": "Person",
                  name: "Antonio Jose Martinez Sanchez",
                },
                image: `https://solora.app${post.image}`,
              })),
            },
          }),
        }}
      />

      <div className={`min-h-screen bg-gradient-to-br from-[#190908] via-[#1E140F] to-[#201B14] ${oswald.className}`}>
        {/* Header */}
        <header className="w-full px-4 py-2 md:py-3 bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto flex items-center justify-between max-w-7xl">
            <Link href="/" className="flex items-center gap-2 md:gap-3">
              <img src="solora-app-icon.png" alt="Solora App Icon" className="w-8 h-8 md:w-10 md:h-10" />
              <span className="text-lg md:text-xl font-bold text-[#E6786E]">Solora</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link href="/" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">
                Home
              </Link>
              <Link href="/blog" className="text-white hover:text-white transition-colors text-sm lg:text-base">
                Blog
              </Link>
              <Link href="/#download" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">
                Download
              </Link>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
          {/* Hero Section */}
          <section className="text-center space-y-6 mb-12 md:mb-16">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2">
                Expert Guides
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Sky Photography &{" "}
                <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                  Astronomy Blog
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
                Master the art of capturing perfect moments with expert guides on golden hour photography, aurora
                prediction, astronomical events, and weather forecasting.
              </p>
            </div>
          </section>

          {/* Featured Posts */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image || "placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <Badge variant="outline" className="border-[#E6786E]/30 text-[#E6786E]">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#E6786E] transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4">
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-[#E6786E] hover:text-[#D4695F] transition-colors flex items-center gap-1 text-sm font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* All Posts */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">All Articles</h2>
            <div className="grid gap-6">
              {regularPosts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group"
                >
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-6 items-center">
                      <div className="aspect-video md:aspect-square overflow-hidden rounded-lg">
                        <img
                          src={post.image || "placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="md:col-span-3 space-y-4">
                        <div className="flex items-center gap-4 text-sm text-white/60">
                          <Badge variant="outline" className="border-[#E6786E]/30 text-[#E6786E]">
                            {post.category}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#E6786E] transition-colors">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="text-white/70 leading-relaxed">{post.excerpt}</p>
                        <Link
                          href={`/blog/${post.id}`}
                          className="text-[#E6786E] hover:text-[#D4695F] transition-colors flex items-center gap-2 font-medium"
                        >
                          Read Full Article
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 md:mt-20">
            <div className="bg-gradient-to-br from-[#E6786E] via-[#D4695F] to-[#C25A50] rounded-2xl md:rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

              <div className="relative max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Ready to capture perfect moments?</h2>
                <p className="text-lg md:text-xl opacity-90">
                  Download Solora and get AI-powered forecasts for all your sky photography adventures
                </p>
                <Button
                  size="lg"
                  className="bg-white text-[#E6786E] hover:bg-gray-100 px-8 md:px-12 py-4 md:py-6 text-lg rounded-xl shadow-2xl hover:shadow-white/25 transition-all font-bold"
                  asChild
                >
                  <Link href="/#download">
                    Download Solora App
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 py-12 md:py-16 mt-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="flex items-center gap-3 md:gap-4">
                <img src="solora-app-icon.png" alt="Solora" className="w-10 h-10 md:w-12 md:h-12" />
                <div className="text-center md:text-left">
                  <span className="text-xl md:text-2xl font-bold text-[#E6786E] block">Solora</span>
                  <span className="text-white/60 text-xs md:text-sm">Plan the sky, perfect the moment</span>
                </div>
              </div>

              <div className="text-center md:text-right space-y-1 md:space-y-2">
                <p className="text-white/80 text-sm md:text-base">
                  © {new Date().getFullYear()} Antonio Jose Martinez Sanchez
                </p>
                <p className="text-white/60 text-xs md:text-sm">All rights reserved • Available on App Store</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
