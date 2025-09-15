"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Apple, Smartphone, Bell, Sparkles, Cpu, Eye, Waves } from "lucide-react"
import Link from "next/link"
import { Oswald } from "next/font/google"

const oswald = Oswald({ subsets: ["latin"] })

export default function PressKitPage() {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#190908] via-[#1E140F] to-[#201B14] ${oswald.className}`}>
      {/* Header */}
      <header className="w-full px-4 py-2 md:py-3 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between max-w-7xl">
          <Link href="/" className="flex items-center gap-2 md:gap-3">
            <img
              src="/solora-app-icon.png"
              alt="Solora App Icon"
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <span className="text-lg md:text-xl font-bold text-[#E6786E]">Solora</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="/#features" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">
              Features
            </Link>
            <Link href="/blog" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">
              Blog
            </Link>
            <Link href="/press-kit" className="text-white hover:text-white transition-colors text-sm lg:text-base">
              Press Kit
            </Link>
            <Link href="/#download" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">
              Download
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        {/* Hero Section */}
        <section className="text-center space-y-6 md:space-y-8 mb-16 md:mb-20">
          <Badge
            variant="secondary"
            className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2 text-sm"
          >
            iOS 26 Press Kit
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            Solora for{" "}
            <span className="bg-gradient-to-r from-[#E6786E] to-[#D4695F] bg-clip-text text-transparent">
              iOS 26
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Experience the future of astronomical planning with revolutionary new features powered by Apple Intelligence and iOS 26's groundbreaking frameworks.
          </p>
        </section>

        {/* Large Bento Image */}
        <section className="mb-16 md:mb-20">
          <div className="text-center">
            <img
              src="/soloraBento.jpg"
              alt="Solora app interface showcase featuring multiple screens and features"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </section>

        {/* App Summary */}
        <section className="mb-16 md:mb-20">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-4xl mx-auto space-y-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  About Solora
                </h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  Solora is the ultimate astronomical app that helps photographers, stargazers, and nature enthusiasts
                  plan perfect moments under the sky. With advanced AI forecasts, precision timing, and beautiful
                  visualizations, Solora transforms how you experience celestial events.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  From sunrise and sunset quality ratings to aurora forecasts, moon phase tracking, and Milky Way
                  visibility predictions, Solora provides comprehensive astronomical intelligence to ensure you never
                  miss nature's most spectacular moments.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-[#E6786E]/20 text-[#E6786E] border-[#E6786E]/30">Astronomy</Badge>
                  <Badge className="bg-[#E6786E]/20 text-[#E6786E] border-[#E6786E]/30">Photography</Badge>
                  <Badge className="bg-[#E6786E]/20 text-[#E6786E] border-[#E6786E]/30">Weather</Badge>
                  <Badge className="bg-[#E6786E]/20 text-[#E6786E] border-[#E6786E]/30">AI Forecasts</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* iOS 26 New Features */}
        <section className="mb-16 md:mb-20">
          <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16">
            <Badge
              variant="secondary"
              className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2 text-sm"
            >
              What's New in iOS 26
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Revolutionary Features
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto">
              Solora leverages iOS 26's most advanced capabilities to deliver unprecedented
              astronomical intelligence and user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Liquid Glass Design */}
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E6786E] to-[#D4695F] rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">New Liquid Glass Design</h3>
                <p className="text-white/70 leading-relaxed">
                  Experience Solora's stunning new interface built with iOS 26's Liquid Glass design language.
                  Clearer, more fluid elements create an immersive astronomical experience with beautiful
                  transparency effects and smooth animations that bring your sky data to life.
                </p>
              </CardContent>
            </Card>

            {/* Apple Intelligence */}
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Apple Intelligence Weather Forecasts</h3>
                <p className="text-white/70 leading-relaxed">
                  Powered by Apple Intelligence foundation models, Solora now delivers hyper-personalized
                  weather forecasts and intelligent alerts. The on-device AI analyzes your photography patterns
                  and preferences to provide tailored recommendations for the perfect shooting conditions.
                </p>
              </CardContent>
            </Card>

            {/* AlarmKit */}
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Bell className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Revolutionary AlarmKit Integration</h3>
                <p className="text-white/70 leading-relaxed">
                  Never miss a celestial moment with iOS 26's new AlarmKit framework. Set system-level alarms
                  for sunrise, sunset, moonrise, and moonset that break through silent mode and Focus settings.
                  Full-screen alerts ensure you're always ready for that perfect shot.
                </p>
              </CardContent>
            </Card>

            {/* App Intents & Widgets */}
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Interactive App Intents & Widgets</h3>
                <p className="text-white/70 leading-relaxed">
                  Experience seamless interaction with enhanced App Intents and dynamic widgets. Get instant
                  astronomical data on your Lock Screen, control your location tracking through Siri, and enjoy
                  Live Activities that keep you informed of changing sky conditions in real-time.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>


        {/* Download Resources Section */}
        <section className="mb-16 md:mb-20">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Press Resources
                </h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto">
                  Download high-resolution assets, app icons, and screenshots for your coverage of Solora.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 p-6 h-auto flex-col space-y-2"
                  asChild
                >
                  <a href="/solora-app-icon.png" download="solora-app-icon.png">
                    <Download className="w-6 h-6" />
                    <span>App Icon (512x512)</span>
                    <span className="text-sm text-white/60">PNG Format</span>
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 p-6 h-auto flex-col space-y-2"
                  asChild
                >
                  <a href="/soloraBento.jpg" download="soloraBento.jpg">
                    <Download className="w-6 h-6" />
                    <span>Feature Showcase</span>
                    <span className="text-sm text-white/60">JPG Format</span>
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 p-6 h-auto flex-col space-y-2"
                  asChild
                >
                  <a href="/screenshot-1.jpg" download="screenshot-1.jpg">
                    <Download className="w-6 h-6" />
                    <span>App Screenshots</span>
                    <span className="text-sm text-white/60">Multiple JPG Files</span>
                  </a>
                </Button>
              </div>

              <div className="mt-8 text-center">
                <p className="text-white/60 text-sm">
                  For additional press materials or high-resolution assets, please contact our press team.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-gradient-to-br from-[#E6786E] to-[#D4695F] border-none">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Experience iOS 26 Features
                </h2>
                <p className="text-lg text-white/90">
                  Download Solora today and discover the future of astronomical planning with iOS 26's revolutionary capabilities.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-[#E6786E] hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-2xl font-bold"
                  asChild
                >
                  <Link
                    href="https://apps.apple.com/es/app/atardecer-amanecer-solora/id6502008343?platform=iphone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Apple className="w-6 h-6 mr-2" />
                    Download on App Store
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="flex items-center gap-3 md:gap-4">
              <img src="/solora-app-icon.png" alt="Solora App Icon" className="w-10 h-10 md:w-12 md:h-12" />
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
  )
}