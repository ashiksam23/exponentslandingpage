# ExponentOS Landing Page

The official landing page for **ExponentOS** — The Leverage Operating System for Founders.

## About ExponentOS

ExponentOS is an AI-driven operational platform designed to remove administrative bottlenecks for high-performance founders. We combine AI processing with elite human verification to deliver operational sovereignty.

### Key Features
- **Inbox Zero System** - Autonomous email triage and response drafting
- **Content Repurposing Engine** - Transform one piece of content into 42+ assets
- **Financial Operations** - Automated A/R, invoice chasing, and reconciliation
- **Calendar Sovereignty** - Protect deep work blocks automatically

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite

## Run Locally

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
├── components/
│   ├── layout/        # Header, Footer, StickyCTA
│   ├── pages/         # Home, Blog, CaseStudies
│   ├── sections/      # Hero, Pricing, FAQ, Testimonials
│   └── ui/            # Button, Section, ThemeToggle
├── content/
│   └── blog/          # Blog post markdown files
├── Agents/            # WebsiteForge AI agent documentation
├── utils/             # Analytics, haptics utilities
└── constants.ts       # Site configuration
```

## Deployment

The site is built as a static SPA and can be deployed to any static hosting:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## License

Proprietary - All Rights Reserved

---

Built with the [WebsiteForge](./Agents/README.md) multi-agent system.
