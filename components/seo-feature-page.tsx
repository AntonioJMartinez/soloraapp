import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { absoluteUrl, siteConfig } from "@/lib/site"

type FeaturePageProps = {
  title: string
  eyebrow: string
  description: string
  heroImage: string
  heroAlt: string
  primaryKeyword: string
  benefits: string[]
  useCases: string[]
  faqs: Array<{ question: string; answer: string }>
  relatedLinks: Array<{ href: string; label: string }>
  slug: string
}

export function SeoFeaturePage({
  title,
  eyebrow,
  description,
  heroImage,
  heroAlt,
  primaryKeyword,
  benefits,
  useCases,
  faqs,
  relatedLinks,
  slug,
}: FeaturePageProps) {
  const pageUrl = absoluteUrl(`/${slug}`)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#190908] via-[#1E140F] to-[#201B14] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: title,
            url: pageUrl,
            description,
            about: primaryKeyword,
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
              logo: {
                "@type": "ImageObject",
                url: absoluteUrl(siteConfig.icon),
              },
            },
          }),
        }}
      />

      <header className="border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <img src={siteConfig.icon} alt="Solora app icon" className="h-10 w-10" />
            <span className="text-xl font-bold text-[#E6786E]">{siteConfig.name}</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-white/80 transition-colors hover:text-white">
              Home
            </Link>
            <Link href="/blog" className="text-white/80 transition-colors hover:text-white">
              Blog
            </Link>
            <Link href="/#download" className="text-white/80 transition-colors hover:text-white">
              Download
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto max-w-7xl px-4 py-10 md:py-16">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <Badge className="border-[#E6786E]/20 bg-[#E6786E]/15 text-[#F4B4AE]">{eyebrow}</Badge>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-[#E6786E] text-white hover:bg-[#D4695F]"
                asChild
              >
                <Link href={siteConfig.appStoreUrl} target="_blank" rel="noopener noreferrer">
                  Download on the App Store
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                asChild
              >
                <Link href="/blog">Read planning guides</Link>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl">
            <img src={heroImage} alt={heroAlt} className="aspect-[16/10] w-full rounded-2xl object-cover" />
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card className="border-white/10 bg-white/5">
            <CardContent className="space-y-4 p-6 md:p-8">
              <h2 className="text-2xl font-bold">Why use Solora for {primaryKeyword.toLowerCase()}?</h2>
              <ul className="space-y-3 text-white/75">
                {benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5">
            <CardContent className="space-y-4 p-6 md:p-8">
              <h2 className="text-2xl font-bold">What you can plan</h2>
              <ul className="space-y-3 text-white/75">
                {useCases.map((useCase) => (
                  <li key={useCase}>{useCase}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mt-12 space-y-6" aria-labelledby="faq-heading">
          <div className="space-y-3">
            <Badge className="border-white/10 bg-white/10 text-white">FAQ</Badge>
            <h2 id="faq-heading" className="text-3xl font-bold">
              Questions people ask before choosing a {primaryKeyword.toLowerCase()}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <Card key={faq.question} className="border-white/10 bg-white/5">
                <CardContent className="space-y-3 p-6">
                  <h3 className="text-xl font-bold">{faq.question}</h3>
                  <p className="leading-relaxed text-white/75">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <Badge className="border-white/10 bg-white/10 text-white">Related guides</Badge>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
