# Atlas Hukuk - Tech Context

## Framework: Next.js 16.2.0
- App Router (src/app/)
- Server Components by default
- TypeScript strict mode

## Styling: Tailwind CSS v4
- PostCSS plugin: @tailwindcss/postcss
- @theme inline for design tokens
- No tailwind.config.ts (v4 uses CSS-based config)

## Fonts: next/font/google
- Cormorant Garamond (serif, headings) - weights: 400,500,600,700
- Inter (sans-serif, body) - variable font

## Animation Libraries
- framer-motion: Primary animation library
- gsap + @gsap/react: Available for complex animations
- lenis: Smooth scroll behavior

## Build & Dev
- npm run dev: Development server
- npm run build: Production build
- npm run lint: ESLint

## Key Dependencies
- clsx: Conditional class merging
- react 19.2.4, react-dom 19.2.4
