/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  // The dev static-route indicator crashes on isrManifest HMR messages in
  // Next 15.2 (TypeError: reading '__N_SSP'), forcing full-reload loops that
  // break hydration during `next dev`. Dev-only; production is unaffected.
  devIndicators: false,
}

export default nextConfig
