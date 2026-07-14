"use client"

import Link from "next/link"
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react"
import { Apple } from "lucide-react"

import { ResponsiveImage } from "@/components/responsive-image"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site"

import "./concepts.css"

/* Deterministic PRNG so the star field renders identically on server and client */
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function Stars({ count = 110, seed = 7, className }: { count?: number; seed?: number; className?: string }) {
  const rand = mulberry32(seed)
  const stars = Array.from({ length: count }, () => ({
    left: rand() * 100,
    top: rand() * 100,
    size: rand() * 1.6 + 0.6,
    delay: rand() * 6,
    duration: rand() * 4 + 3,
    opacity: rand() * 0.5 + 0.3,
  }))

  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {stars.map((star, index) => (
        <span
          key={index}
          className="concept-star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

export function Reveal({
  children,
  className,
  delay = 0,
  style,
}: {
  children: ReactNode
  className?: string
  delay?: number
  style?: CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add("is-visible")
            observer.disconnect()
          }
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={cn("concept-reveal", className)} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  )
}

type AppStoreButtonProps = {
  label?: string
  variant?: "coral" | "glass" | "light"
  size?: "sm" | "lg"
  className?: string
}

export function AppStoreButton({ label = "Download on the App Store", variant = "coral", size = "lg", className }: AppStoreButtonProps) {
  const variantClasses = {
    coral: "bg-[#E6786E] text-white shadow-[0_18px_50px_-12px_rgba(230,120,110,0.65)] hover:bg-[#D4695F]",
    glass: "border border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
    light: "bg-white text-[#1A0E0C] shadow-[0_18px_50px_-12px_rgba(255,255,255,0.35)] hover:bg-white/90",
  }[variant]

  const sizeClasses = size === "lg" ? "px-8 py-4 text-base md:text-lg" : "px-4 py-2 text-sm"

  return (
    <Link
      href={siteConfig.appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]",
        variantClasses,
        sizeClasses,
        className,
      )}
    >
      <Apple className={size === "lg" ? "h-5 w-5 md:h-6 md:w-6" : "h-4 w-4"} aria-hidden="true" />
      {label}
    </Link>
  )
}

type PhoneFrameProps = {
  src: string
  alt: string
  className?: string
  sizes?: string
  responsiveWidths?: readonly number[]
  eager?: boolean
}

export function PhoneFrame({
  src,
  alt,
  className,
  sizes = "(min-width: 1024px) 300px, 240px",
  responsiveWidths = [480, 589],
  eager = false,
}: PhoneFrameProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="rounded-[2.6rem] border border-white/15 bg-black p-2 shadow-[0_50px_140px_-24px_rgba(0,0,0,0.9)]">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.1rem] bg-black">
          <ResponsiveImage
            src={src}
            alt={alt}
            sizes={sizes}
            responsiveWidths={responsiveWidths}
            width={589}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover"
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={eager ? "high" : undefined}
          />
        </div>
      </div>
    </div>
  )
}

export function ConceptHeader({ ctaLabel = "Get the app" }: { ctaLabel?: string }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
      <div className="flex items-center justify-between px-5 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-2.5 text-white">
          <img src="/solora-app-icon.png" alt="" className="h-8 w-8 rounded-[0.6rem] shadow-lg" />
          <span className="text-lg font-semibold tracking-wide">Solora</span>
        </Link>
        <AppStoreButton size="sm" label={ctaLabel} variant="glass" />
      </div>
    </header>
  )
}

const conceptLinks = [
  { slug: "one-sky", label: "A" },
  { slug: "totality", label: "B" },
  { slug: "directors-cut", label: "C" },
] as const

export type ConceptSlug = (typeof conceptLinks)[number]["slug"]

export function ConceptNav({ current }: { current: ConceptSlug }) {
  return (
    <nav
      aria-label="Landing concepts"
      className="fixed bottom-5 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/15 bg-black/70 px-2 py-1.5 text-sm text-white backdrop-blur-md"
    >
      <Link href="/concepts" className="rounded-full px-3 py-1.5 text-white/60 transition-colors hover:text-white">
        Concepts
      </Link>
      <span className="h-4 w-px bg-white/15" aria-hidden="true" />
      {conceptLinks.map((concept) => (
        <Link
          key={concept.slug}
          href={`/concepts/${concept.slug}`}
          aria-current={concept.slug === current ? "page" : undefined}
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full font-semibold transition-colors",
            concept.slug === current ? "bg-[#E6786E] text-white" : "text-white/60 hover:bg-white/10 hover:text-white",
          )}
        >
          {concept.label}
        </Link>
      ))}
    </nav>
  )
}
