# WebsiteForge
## A Multi-Agent System for Elite Website Creation

> *"13 specialist roles. 5 obsessed agents. 1 coherent system."*

---

## What is WebsiteForge?

WebsiteForge is a coordinated multi-agent AI system designed to produce genuinely elite websites — the kind that rank in the top 1% of their category.

It's not about automating mediocrity faster. It's about encoding the obsessive expertise of world-class specialists into AI agents that work together with the coherence of a founding team.

---

## The Problem We're Solving

Most websites fail for the same reasons:
- **Strategy is weak** → Everything else is lipstick
- **Specialists work in silos** → Technically correct, strategically incoherent
- **No feedback loops** → Launch and pray
- **Generalists spread thin** → Jack of all trades, master of none

WebsiteForge solves this by:
- Making strategy mandatory (STRATEGOS gatekeeps everything)
- Enforcing coherence (CONDUCTOR orchestrates handoffs)
- Building in feedback (ORACLE feeds insights back to all agents)
- Creating deep specialists (each agent is unreasonable about one thing)

---

## The Agent Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                        CONDUCTOR                                │
│                    (Orchestration Layer)                        │
│                                                                 │
│    Routes tasks │ Resolves conflicts │ Enforces coherence       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐     ┌───────────────┐     ┌───────────────┐
│   STRATEGOS   │     │   WORDSMITH   │     │   AESTHETIC   │
│               │     │               │     │               │
│  "Why does    │     │  "Why should  │     │  "Does this   │
│   this exist?"│────▶│  anyone care?"│────▶│   feel right?"│
│               │     │               │     │               │
│  Strategy     │     │  Copy + SEO   │     │  UX + UI      │
│  Brand        │     │               │     │  Brand Visual │
│  Integration  │     │               │     │               │
└───────────────┘     └───────────────┘     └───────────────┘
        │                     │                     │
        │                     │                     │
        ▼                     ▼                     ▼
        └─────────────────────┼─────────────────────┘
                              │
                              ▼
                      ┌───────────────┐
                      │   ENGINEER    │
                      │               │
                      │  "Does this   │
                      │  work perfectly?"│
                      │               │
                      │  Front + Back │
                      │  Performance  │
                      │  Security     │
                      └───────────────┘
                              │
                              ▼
                      ┌───────────────┐
                      │    ORACLE     │
                      │               │
                      │  "What's      │
                      │   actually    │
                      │   true?"      │
                      │               │
                      │  Analytics    │
                      │  CRO          │
                      └───────────────┘
                              │
                              │
        ┌─────────────────────┴─────────────────────┐
        │         FEEDBACK LOOP TO ALL AGENTS       │
        └───────────────────────────────────────────┘
```

---

## The 5 Agents (Covering 13 Roles)

| Agent | Roles Covered | Primary Question | Output |
|-------|---------------|------------------|--------|
| **STRATEGOS** | Product Thinker, Brand Strategist, Editor | *"Why does this exist?"* | Strategic Brief |
| **WORDSMITH** | Copywriter, SEO Strategist | *"Why should anyone care?"* | Copy Deck, SEO Architecture |
| **AESTHETIC** | UX Architect, UI Designer, Brand Designer | *"Does this feel right?"* | Design System, Mockups |
| **ENGINEER** | Frontend, Backend, Performance, Security | *"Does this work perfectly?"* | Production Code |
| **ORACLE** | Analytics Engineer, CRO Specialist | *"What's actually true?"* | Tracking, Insights, Tests |

Plus **CONDUCTOR** — the meta-layer that orchestrates everything.

---

## How It Works

### The Workflow

```
1. DISCOVERY
   └─▶ STRATEGOS produces Strategic Brief
   └─▶ Quality Gate: Client approval

2. CONTENT
   └─▶ WORDSMITH produces Copy + SEO Architecture
   └─▶ Quality Gate: STRATEGOS coherence review

3. DESIGN
   └─▶ AESTHETIC produces Design System + Mockups
   └─▶ Quality Gate: STRATEGOS + WORDSMITH review

4. BUILD
   └─▶ ENGINEER produces Working Site
   └─▶ Quality Gate: AESTHETIC visual QA + Performance

5. LAUNCH
   └─▶ ORACLE implements tracking
   └─▶ Quality Gate: Full deployment checklist

6. OPTIMIZE (Continuous)
   └─▶ ORACLE feeds insights to all agents
   └─▶ Continuous improvement loop
```

### The Rules

1. **Nothing proceeds without a Strategic Brief** — STRATEGOS is the constitutional author
2. **Each agent has veto power on their domain** — ENGINEER can reject designs that kill performance
3. **Conflicts escalate through CONDUCTOR** — No unresolved disputes
4. **ORACLE has the final word on "what works"** — Evidence beats opinions
5. **The Strategic Brief is the source of truth** — All decisions reference it

---

## Quick Start

### For a New Project

1. **Initialize CONDUCTOR**
   ```
   Start with the CONDUCTOR activation prompt.
   Provide project context and constraints.
   ```

2. **Run Discovery with STRATEGOS**
   ```
   STRATEGOS conducts strategic intake.
   Output: Strategic Brief
   Gate: Client/stakeholder approval
   ```

3. **Execute Content Phase with WORDSMITH**
   ```
   WORDSMITH receives Strategic Brief.
   Output: Copy Deck + SEO Architecture
   Gate: STRATEGOS coherence review
   ```

4. **Execute Design Phase with AESTHETIC**
   ```
   AESTHETIC receives Strategic Brief + Copy Deck.
   Output: Design System + Mockups
   Gate: STRATEGOS + WORDSMITH review
   ```

5. **Execute Build Phase with ENGINEER**
   ```
   ENGINEER receives all previous outputs.
   Output: Production Code
   Gate: Visual QA + Performance Check
   ```

6. **Launch with ORACLE Tracking**
   ```
   ORACLE implements measurement.
   Output: Tracking Plan + Dashboards
   Gate: Full deployment checklist
   ```

7. **Optimize Continuously**
   ```
   ORACLE feeds insights back to all agents.
   Continuous improvement loop.
   ```

---

## File Structure

```
websiteforge/
├── README.md                 # This file
├── agents/
│   ├── STRATEGOS.md         # The Strategic Mind
│   ├── WORDSMITH.md         # The Persuasion Engine
│   ├── AESTHETIC.md         # The Visual Architect
│   ├── ENGINEER.md          # The Execution Layer
│   ├── ORACLE.md            # The Truth Engine
│   └── CONDUCTOR.md         # The Orchestration Layer
└── templates/
    └── (output templates for each agent)
```

---

## Agent Specifications

Each agent file contains:

- **Identity** — Who they are, what they're obsessed with
- **Core Responsibilities** — What they own
- **Key Questions** — What they always ask
- **Frameworks** — How they think
- **Inputs Required** — What they need from other agents
- **Outputs Produced** — What they deliver
- **Interaction Protocols** — How they work with other agents
- **Quality Standards** — How to know when they're done
- **Principles** — How they make decisions
- **Anti-Patterns** — What they never do
- **Activation Prompt** — How to start them

---

## Key Principles

### 1. Strategy First, Always
No design, copy, or code until STRATEGOS delivers a Strategic Brief. This prevents the "pretty failure" — a beautiful site that doesn't convert.

### 2. Obsession Over Generalization
Each agent is unreasonably good at one thing. WORDSMITH will reject a headline 47 times. ENGINEER will shave 200ms off load time. ORACLE will find the leak everyone missed.

### 3. Coherence Through Process
CONDUCTOR ensures handoffs preserve context. Quality gates catch misalignment early. The Decision Log tracks every trade-off.

### 4. Evidence Over Opinion
ORACLE has the final word. Data beats intuition. A/B tests beat arguments. The feedback loop means Version 2 is always better than Version 1.

### 5. The Strategic Brief is Sacred
It's the constitution. All agents reference it. Changes require STRATEGOS + CONDUCTOR approval and a version bump.

---

## When to Use WebsiteForge

### ✅ Good Fit
- New website builds (greenfield)
- Major redesigns
- Conversion optimization projects
- Brand launches
- Product launches

### ⚠️ Consider Carefully
- Quick landing pages (might be overkill)
- Simple content updates (use just WORDSMITH)
- Pure technical fixes (use just ENGINEER)

### ❌ Not Designed For
- App development (different complexity)
- E-commerce platforms (need specialized agents)
- Content management (need editorial agents)

---

## Extending the System

### Adding New Agents
If you need capabilities beyond the core 5:

1. Define the agent's single obsession
2. Specify inputs required and outputs produced
3. Define interaction protocols with existing agents
4. Add quality gates and standards
5. Document in the same format as existing agents

### Potential Extensions
- **MERCHANT** — E-commerce specialist (pricing, checkout, inventory)
- **GUARDIAN** — Security/compliance specialist (GDPR, accessibility audits)
- **NARRATOR** — Content marketing specialist (blog, social, email)
- **CONNECTOR** — Integration specialist (APIs, webhooks, automation)

---

## Metrics for System Success

### Project Metrics
- Time to launch (vs estimate)
- Budget adherence
- Client satisfaction
- North Star metric performance

### System Metrics
- Quality gate pass rate (higher = better agent alignment)
- Conflict escalation frequency (lower = better protocols)
- Rework rate (lower = better handoffs)
- Feedback loop utilization (higher = better optimization)

---

## FAQ

**Q: Can I use just one agent?**
A: Yes, each agent is self-contained. But you lose the coherence benefits.

**Q: What if I have an existing website?**
A: Start with ORACLE (audit current state) → STRATEGOS (re-strategize) → then follow normal flow.

**Q: How does this handle client feedback?**
A: Client feedback goes to CONDUCTOR, who routes it to the appropriate agent. Major changes go back to STRATEGOS for strategic evaluation.

**Q: What about revisions?**
A: Built into quality gates. Each gate allows for iteration before proceeding.

**Q: How long does a project take?**
A: Typical timeline: 8-12 weeks for a full website. Can compress to 4-6 weeks with parallel work streams.

---

## Version History

- **v1.0** — Initial system specification
  - 5 core agents + 1 orchestration layer
  - Full workflow documentation
  - Quality gate framework
  - Conflict resolution protocols

---

## Credits

WebsiteForge is a synthesis of best practices from:
- Product strategy frameworks
- Conversion rate optimization methodology
- Design systems thinking
- Agile/lean software development
- Jobs-to-be-done theory
- Behavioral psychology

Built for the obsessives who believe good enough isn't.

---

*"A truly elite website rarely has all these as separate people. It almost always has one or two polymaths covering multiple roles. WebsiteForge gives you the polymaths — as AI."*
