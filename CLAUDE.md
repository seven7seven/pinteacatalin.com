# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website - a responsive, image-focused site with two main sections: home page and photography gallery.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **UI:** React 19
- **Styling:** SCSS Modules + include-media
- **Deployment:** Vercel

## Development Commands

```bash
npm run dev    # Start development server (port 3000)
npm run build  # Production build
npm run start  # Run production server
npm run lint   # Run ESLint
```

## Architecture

### App Router Structure
- `app/layout.tsx` - Root layout with metadata, analytics, and global styles
- `app/page.tsx` - Home page with animated block grid
- `app/photography/page.tsx` - Photo gallery with server-side data fetching
- `app/api/getphotos/route.ts` - API route handler returning image filenames

### Key Components
- `components/gallery.tsx` - Client component, renders responsive Next.js Images with `fill` prop
- `components/blocks.tsx` - Server component, 3x3 grid of geometric shapes using SVG gradients
- `components/layout-wrapper.tsx` - Client component, handles body class (`transparent`) and navigation
- `components/analytics.tsx` - Client component, Google Analytics tracking via `next/script`

### Styling System
- SCSS modules for component scoping (`styles/*.module.scss`)
- `include-media` library for media queries - use breakpoint names: `oldphone`, `phone`, `tablet`, `laptop`, `desktop`, `fourk`
- Design tokens in `styles/variables.scss`: colors (main blue, secondary red, accent yellow), golden ratio sizing

### SVG Handling
- SVGs imported via `@svgr/webpack` become React components
- Shared gradients defined in `public/images/svg/gradients.svg`
- Type declarations in `types/svg.d.ts`

### Data Flow
- Photography page fetches photos server-side using `fs.readdirSync()`
- Photos passed as props to client Gallery component
- Google Analytics tracking on route changes via `usePathname` and `useSearchParams`

## Configuration Notes

- Path alias `@/*` maps to project root (configured in `tsconfig.json`)
- Image optimization configured in `next.config.ts` with `remotePatterns`
- SASS `includePaths` set to `styles/` directory
- EditorConfig: 2-space indent, UTF-8, trim trailing whitespace
