# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` or `pnpm dev`
- **Build**: `npm run build` or `pnpm build`  
- **Static export**: `npm run export` (same as build, configured for GitHub Pages)
- **Lint**: `npm run lint` or `pnpm lint`
- **Production server**: `npm run start` or `pnpm start`

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages:

- **Live site**: https://antoniojmartinez.github.io/soloraapp/
- **Deployment**: Automatic via GitHub Actions on push to `main` branch
- **Static export**: Configured with `output: 'export'` in `next.config.mjs`
- **Base path**: `/soloraapp` for GitHub Pages subdirectory
- **Build output**: Generated in `./out` directory

## Architecture Overview

This is a **Next.js 15** application for Solora - an astronomical events tracking app. The project uses **App Router** architecture with the following structure:

### Key Technologies
- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui
- **TypeScript**: Full TypeScript support with strict mode
- **Package Manager**: pnpm (has `pnpm-lock.yaml`)

### Directory Structure
- `app/` - Next.js App Router pages and layouts
  - `app/blog/` - Blog pages with astronomy-related content
  - `app/layout.tsx` - Root layout with comprehensive metadata
  - `app/page.tsx` - Landing page with animated onboarding screens
- `components/` - Reusable UI components
  - `components/ui/` - shadcn/ui components (45+ components)
  - `components/theme-provider.tsx` - Theme management
- `hooks/` - Custom React hooks
- `lib/` - Utility functions and configurations
- `public/` - Static assets including app icons and screenshots
- `styles/` - CSS files

### Design System
- **Color scheme**: Custom astronomy-themed palette with `#E6786E` as primary color
- **Font**: Inter (primary), Oswald (headings), Geist available
- **Theme**: Dark mode support with CSS variables
- **Components**: Extensive UI component library from Radix UI

### Configuration Notes
- TypeScript uses `@/*` path mapping for cleaner imports
- ESLint and TypeScript errors are ignored during builds (`ignoreDuringBuilds: true`)
- Images are unoptimized (`unoptimized: true`)
- Uses App Router exclusively (no pages directory)

### Application Focus
Solora is an astronomical app for tracking sunrises, sunsets, moon phases, celestial events, and photography planning. The codebase includes:
- Landing page with animated app screenshots
- Blog section for astronomy content
- Comprehensive SEO and metadata setup
- Mobile-first responsive design
- Apple App Store integration