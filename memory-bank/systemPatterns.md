# Atlas Hukuk - System Patterns

## Architecture
- Next.js App Router with server components by default
- Client components only where interactivity needed (forms, accordion, navbar, animations)
- Single data file (src/lib/data.ts) for all static content
- Reusable component library in src/components/

## Component Patterns
- **AnimateIn**: Framer Motion wrapper for scroll-triggered fade+slide animations
- **SectionHeading**: Consistent section header with subtitle, title, gold line, description
- **PageHero**: Consistent inner-page hero banner
- **Accordion**: Client-side expandable content for career positions

## Styling Patterns
- Tailwind CSS v4 with @theme inline for custom design tokens
- CSS custom properties for fonts (--font-cormorant, --font-inter)
- Utility classes: section-padding, gold-line
- Color naming: navy, gold, steel, light (semantic, not raw hex)

## Animation Strategy
- Slow, dignified transitions (0.8-1s duration)
- Scroll-triggered viewport animations (once: true)
- Lenis smooth scrolling
- Framer Motion for declarative animations
- GSAP available but Framer Motion preferred for simplicity
