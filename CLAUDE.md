# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build to /dist
npm run preview  # Preview production build
```

No test runner is configured.

## Architecture

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS (CDN) + Framer Motion + Lucide React

### Routing

This app uses a **custom hash-based router** — no React Router. All routing state lives in `App.tsx`.

- Page type union: `'home' | 'blueprint'` — extend this when adding pages
- URL mapping: `window.location.hash === '#blueprint'` → blueprint page
- `navigateTo(page)` sets the hash and updates state
- `hashchange` listener handles browser back/forward

**To add a new page:**
1. Extend the union type in `App.tsx` (e.g., `'home' | 'blueprint' | 'cockpit'`)
2. Add hash handling in both `navigateTo` and the `handleHashChange` listener
3. Create the page component in `components/pages/`
4. Pass `onNavigate` prop if the page needs to navigate elsewhere
5. Add a nav item in `components/layout/Header.tsx` (update `onNavigate` type there too)

### Component Structure

```
components/
  layout/   — Header (fixed nav + theme toggle), StickyCTA
  pages/    — Page-level containers (Home, BlogPost)
  sections/ — Individual content sections used within pages
  ui/       — Atoms: Button, Section (scroll-animated wrapper), ThemeToggle
```

Pages are thin containers that compose sections. Sections are self-contained content blocks.

### Styling

**Tailwind config is in `index.html`** (not a `tailwind.config.js` file) — loaded via CDN.

Key design tokens:
- `brand-black`: `#050505`
- `brand-red`: `#E24A37` (primary accent)
- `brand-neutral-{50–950}`: stone-like neutral scale
- `border-radius: 0` globally enforced via CSS — all edges are sharp
- Dark mode via `class` strategy (`dark:` prefix); toggled by adding/removing `dark` class on `<html>`

Typography conventions: `uppercase tracking-widest font-bold text-xs` for labels/nav; `font-bold tracking-tighter uppercase` for headings; `font-mono` for technical/code text.

### SEO Pattern

Each page component manages its own SEO via `useEffect`:
- Sets `document.title`
- Updates `meta[name="description"]`, `meta[property="og:description"]`, `meta[property="twitter:description"]`
- Resets to site defaults on unmount
- Injects a `<script type="application/ld+json">` JSON-LD block inline in JSX

### Key Files

- `App.tsx` — router state, theme state, top-level layout
- `index.html` — Tailwind config, global CSS, font imports, base SEO meta tags
- `constants.ts` — `SITE_CONFIG` (CTA link/text), `FEATURES`, `COMPARISON_DATA`, `PRICING_TIERS`
- `types.ts` — shared TypeScript interfaces
- `utils/haptics.ts` — `triggerHaptic('light'|'medium'|'heavy')` for tactile feedback on interactions

### Button Component

`Button` auto-fires `window.location.href = SITE_CONFIG.ctaLink` when no `onClick` is provided. Pass an explicit `onClick` to override this.

### Section Component

`Section` from `components/ui/Section.tsx` wraps content with:
- Framer Motion fade-in on scroll (`whileInView`)
- `container mx-auto px-4 sm:px-6 lg:px-8` layout
- Corner crosshair decorations (visible on hover)
- Optional `borderTop`, `borderBottom`, `noPadding` props
