# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (port 3000, or next available)
npm run build    # Production build to /dist
npm run preview  # Preview production build
```

No test runner is configured.

## Architecture

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS (CDN) + Framer Motion + Lucide React

### Routing

This app uses a **custom path-based router** — no React Router. All routing state lives in `App.tsx` using `window.history.pushState`.

- Page type union: `'home' | 'blueprint' | 'casestudies' | 'blog' | 'post-sovereignty' | 'post-cos' | 'cockpit-rule'` — extend this when adding pages
- `ROUTES` maps URL paths → page keys (e.g. `'/cockpit-rule'` → `'cockpit-rule'`)
- `PAGE_TO_PATH` maps page keys → URL paths (reverse lookup)
- `navigateTo(page)` calls `history.pushState` and updates state
- `popstate` listener handles browser back/forward
- Analytics: `navigateTo` and `handlePopState` both call `Analytics.pageView(page)` via dynamic import of `./utils/analytics`

**To add a new page:**
1. Add the path → page mapping to `ROUTES` in `App.tsx`
2. Add the page → path mapping to `PAGE_TO_PATH` in `App.tsx`
3. Extend the union type in `getPageFromPath`, `useState`, and `navigateTo` in `App.tsx`
4. Create the page component in `components/pages/`
5. Add `onNavigate` prop to the component using the full page union type
6. Render it in the JSX: `{currentPage === 'your-page' && <YourPage onNavigate={navigateTo} />}`
7. Add a nav item in `components/layout/Header.tsx` (update both `onNavigate` and `currentPage` types there too)

### Component Structure

```
components/
  layout/   — Header (fixed nav + theme toggle), StickyCTA
  pages/    — Page-level containers:
                Home, BlogPost (blueprint), Blog, CaseStudies,
                PostSovereignty, PostCoS, CockpitRule
  sections/ — Individual content sections used within pages
  ui/       — Atoms: Button, Section (scroll-animated wrapper), ThemeToggle
```

Pages are thin containers that compose sections. Sections are self-contained content blocks.

### onNavigate Prop Pattern

Every page component receives `onNavigate` typed to the **full** page union:

```typescript
interface MyPageProps {
  onNavigate: (page: 'home' | 'blueprint' | 'casestudies' | 'blog' | 'post-sovereignty' | 'post-cos' | 'cockpit-rule') => void;
}
```

Always use the full union — never a subset — to stay compatible with `navigateTo` in `App.tsx`.

### Header Nav Active States

The Intelligence nav item highlights for `blog`, `post-sovereignty`, and `post-cos` (all blog-family pages). Blueprint and Cockpit Rule each highlight only for their own page.

### Styling

**Tailwind config is in `index.html`** (not a `tailwind.config.js` file) — loaded via CDN.

Key design tokens:
- `brand-black`: `#050505`
- `brand-red`: `#E24A37` (primary accent)
- `brand-neutral-{50–950}`: stone-like neutral scale
- `border-radius: 0` globally enforced via CSS — all edges are sharp, no `rounded-` classes on non-circular elements
- Dark mode via `class` strategy (`dark:` prefix); toggled by adding/removing `dark` class on `<html>`
- `ease-premium` transition is a custom easing defined in `index.html`

Typography conventions: `uppercase tracking-widest font-bold text-xs` for labels/nav; `font-bold tracking-tighter uppercase` for headings; `font-mono` for technical/code text.

### SEO Pattern

Each page component manages its own SEO via `useEffect`:
- Sets `document.title`
- Updates `meta[name="description"]`, `meta[property="og:description"]`, `meta[property="twitter:description"]`
- Resets to site defaults on unmount
- Injects a `<script type="application/ld+json">` JSON-LD block inline in JSX

### Key Files

- `App.tsx` — router state (`ROUTES`, `PAGE_TO_PATH`, `navigateTo`), theme state, top-level layout
- `index.html` — Tailwind config, global CSS, font imports, base SEO meta tags
- `constants.ts` — `SITE_CONFIG` (CTA link/text), `FEATURES`, `COMPARISON_DATA`, `PRICING_TIERS`
- `types.ts` — shared TypeScript interfaces
- `utils/haptics.ts` — `triggerHaptic('light'|'medium'|'heavy')` for tactile feedback on interactions
- `utils/analytics.ts` — `Analytics.pageView(page)` — dynamically imported to avoid blocking render

### Button Component

`Button` auto-fires `window.location.href = SITE_CONFIG.ctaLink` when no `onClick` is provided. Pass an explicit `onClick` to override this.

### Section Component

`Section` from `components/ui/Section.tsx` wraps content with:
- Framer Motion fade-in on scroll (`whileInView`)
- `container mx-auto px-4 sm:px-6 lg:px-8` layout
- Corner crosshair decorations (visible on hover)
- Optional `borderTop`, `borderBottom`, `noPadding` props

### Animation Patterns

- Staggered card entrance: `motion.div` container with `staggerChildren: 0.15`, each child `initial={opacity:0, y:20}` → `animate={opacity:1, y:0}`
- Mode/state transitions: `AnimatePresence mode="wait"` with `key={result.mode}` — fade+scale in/out when content changes
- Empty states inside `AnimatePresence` use `key="empty"` as a sibling to the content state
