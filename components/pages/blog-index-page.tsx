import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Locale, localizePath, localizedUrl } from "@/lib/i18n"
import { getBlogPosts, getFeaturedBlogPosts } from "@/lib/blog-posts"
import { getBlogIndexContent, getUiDictionary } from "@/lib/marketing-content"

type BlogIndexPageProps = {
  locale: Locale
}

export function BlogIndexPage({ locale }: BlogIndexPageProps) {
  const content = getBlogIndexContent(locale)
  const ui = getUiDictionary(locale)
  const featuredPosts = getFeaturedBlogPosts(locale)
  const regularPosts = getBlogPosts(locale).filter((post) => !post.featured)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: content.title,
            description: content.description,
            url: localizedUrl(locale, "/blog"),
            inLanguage: locale,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [...featuredPosts, ...regularPosts].map((post, index) => ({
                "@type": "BlogPosting",
                position: index + 1,
                headline: post.title,
                description: post.excerpt,
                url: localizedUrl(locale, `/blog/${post.id}`),
              })),
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-[#190908] via-[#1E140F] to-[#201B14]">
        <SiteHeader locale={locale} currentPath="/blog" />

        <main className="container mx-auto max-w-7xl px-4 py-8 md:py-12">
          <section className="mb-12 space-y-6 text-center md:mb-16">
            <Badge variant="secondary" className="border-purple-500/30 bg-purple-500/20 px-4 py-2 text-purple-300">
              {content.badge}
            </Badge>
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">{content.title}</h1>
            <p className="mx-auto max-w-3xl text-lg text-white/70 md:text-xl">{content.description}</p>
          </section>

          <section className="mb-12 md:mb-16">
            <h2 className="mb-8 text-2xl font-bold text-white md:text-3xl">{content.featuredHeading}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="group overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                  <div className="aspect-video overflow-hidden">
                    <img src={`/${post.image}`} alt={post.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <CardContent className="space-y-4 p-6">
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <Badge variant="outline" className="border-[#E6786E]/30 text-[#E6786E]">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-[#E6786E]">
                      <Link href={localizePath(locale, `/blog/${post.id}`)}>{post.title}</Link>
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70">{post.excerpt}</p>
                    <Link href={localizePath(locale, `/blog/${post.id}`)} className="inline-flex items-center gap-1 text-sm font-medium text-[#E6786E]">
                      {ui.readMore}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-8 text-2xl font-bold text-white md:text-3xl">{content.allHeading}</h2>
            <div className="grid gap-6">
              {regularPosts.map((post) => (
                <Card key={post.id} className="group border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                  <CardContent className="p-6">
                    <div className="grid items-center gap-6 md:grid-cols-4">
                      <div className="aspect-video overflow-hidden rounded-lg md:aspect-square">
                        <img src={`/${post.image}`} alt={post.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                      </div>
                      <div className="space-y-4 md:col-span-3">
                        <div className="flex items-center gap-4 text-sm text-white/60">
                          <Badge variant="outline" className="border-[#E6786E]/30 text-[#E6786E]">
                            {post.category}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white transition-colors group-hover:text-[#E6786E] md:text-2xl">
                          <Link href={localizePath(locale, `/blog/${post.id}`)}>{post.title}</Link>
                        </h3>
                        <p className="leading-relaxed text-white/70">{post.excerpt}</p>
                        <Link href={localizePath(locale, `/blog/${post.id}`)} className="inline-flex items-center gap-2 font-medium text-[#E6786E]">
                          {ui.readFullArticle}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mt-16 md:mt-20">
            <div className="rounded-3xl bg-gradient-to-br from-[#E6786E] via-[#D4695F] to-[#C25A50] p-8 text-center text-white md:p-12">
              <div className="mx-auto max-w-3xl space-y-6">
                <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">{content.ctaHeading}</h2>
                <p className="text-lg opacity-90 md:text-xl">{content.ctaDescription}</p>
                <Button size="lg" className="bg-white px-10 py-6 text-lg font-bold text-[#E6786E] hover:bg-gray-100" asChild>
                  <Link href={localizePath(locale, "/#download")}>
                    {ui.downloadSolora}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter locale={locale} />
      </div>
    </>
  )
}
