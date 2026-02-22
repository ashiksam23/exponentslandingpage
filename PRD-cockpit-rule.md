# PRD: Cockpit Rule — AI Delegation Mode Selector

**Product:** ExponentOS
**Feature:** Cockpit Rule Framework & Mode Selector
**Status:** Draft
**Date:** 2026-02-22

---

## 1. Problem Statement

Professionals using AI tools consistently make one of two costly mistakes:

1. **Over-delegating** — handing tasks to AI that require human judgment, context, or relationships, resulting in poor outputs that damage credibility.
2. **Under-delegating** — doing manually what AI could handle in a fraction of the time, burning hours on low-leverage work.

There is no systematic, teachable framework embedded in ExponentOS that helps users decide *when* to delegate, *when* to collaborate, and *when* to do it themselves.

---

## 2. Goal

Give ExponentOS users a reliable mental model — the **Cockpit Rule** — backed by a structured cost-benefit calculator, so they consistently pick the right human-AI working mode for any task.

---

## 3. Background & Concept

### The Cockpit Rule

Adapted from Professor Ethan Mollick's (Wharton) agentic cost-benefit framework, the Cockpit Rule defines three operating modes:

| Mode | Description | User Role |
|---|---|---|
| **Autopilot** | Hand off the task with clear instructions. Spot-check the output. | Reviewer |
| **Collaboration** | Iterate with AI through multiple rounds. Neither alone produces the result. | Co-creator |
| **Manual** | Do it yourself. AI can't do it well, or the risk of failure is too high. | Executor |

### The Agentic Cost-Benefit Framework (Mollick)

Three inputs determine the right mode:

1. **Human Baseline Time** — How long would this take you to do manually?
2. **AI Probability of Success** — How likely is AI to get it right in this domain?
3. **AI Process Time** — How long does prompting, waiting, and checking the output take?

### Decision Logic

```
If (AI Process Time << Human Baseline) AND (P(success) is High):
  → Autopilot

If (AI Process Time < Human Baseline) AND (P(success) is Medium):
  → Collaboration

If (AI Process Time >= Human Baseline) OR (P(success) is Low):
  → Manual
```

### Reference Examples

| Task | Human Baseline | P(Success) | AI Process Time | Mode |
|---|---|---|---|---|
| Restructure messy spreadsheet | 2 hours | High | 15 min | Autopilot |
| Build client pitch deck | 10 hours | Medium | 45 min/round × 5 rounds = ~4 hrs | Collaboration |
| Reply to VP's Slack message | 3 minutes | Low (missing context) | 20–30 min | Manual |

**Rule of thumb:** Best tasks to delegate are those that are (a) slow to do manually, (b) AI-capable in domain, and (c) easy to evaluate.

---

## 4. Target Users

- **Primary:** Knowledge workers and executives using ExponentOS for task delegation decisions
- **Secondary:** Teams onboarding to AI-assisted workflows who need a shared vocabulary for AI usage norms

---

## 5. User Stories

### Core

- As a user, I want to quickly assess whether to delegate a task to AI, collaborate with AI, or handle it myself, so I don't waste time or produce low-quality output.
- As a user, I want a structured input form where I can enter task details and get a recommended mode, so I don't have to do mental math each time.
- As a user, I want to see the reasoning behind the recommended mode, so I can develop my own intuition over time.

### Secondary

- As a team lead, I want to share a task's Cockpit assessment with my team, so we build a shared standard for AI delegation.
- As a returning user, I want to see patterns in my past tasks by mode, so I can identify where I'm over- or under-using AI.

---

## 6. Feature Requirements

### 6.1 Cockpit Mode Calculator (MVP)

**Input fields:**

| Field | Type | Options/Format |
|---|---|---|
| Task description | Text | Free text |
| Human baseline time | Select or number | Minutes / Hours |
| AI probability of success | Slider or select | Low / Medium / High |
| AI process time (estimated) | Select or number | Minutes / Hours |

**Output:**

- Recommended mode badge: `Autopilot`, `Collaboration`, or `Manual`
- One-line rationale (e.g., "AI process time is 8x faster than manual baseline with high success probability.")
- Optional: prompt template or next-step suggestion for Autopilot and Collaboration modes

**Acceptance criteria:**

- Calculator renders the correct mode for all three reference examples from the framework.
- Output is displayed in under 500ms.
- Mode badge is visually distinct and scannable at a glance.

---

### 6.2 Mode Education Panel

A collapsible reference panel that explains each mode with:

- A one-sentence definition
- A real-world example
- When NOT to use that mode

Displayed alongside the calculator. No account required to view.

---

### 6.3 Task History & Mode Log (Post-MVP)

- Log each calculator submission with: task description, mode recommended, date.
- Dashboard view showing breakdown of tasks by mode over time.
- Highlight tasks where user overrode the recommendation (and outcome if tracked).

---

### 6.4 Team Mode Norms (Post-MVP)

- Allow team admins to set default AI probability ratings per task category (e.g., "Writing = Medium, Data = High").
- Surface shared team assessments for common task types.

---

## 7. Out of Scope (v1)

- AI-powered task classification (auto-detecting the domain from task description)
- Integration with calendar or task managers to pre-fill inputs
- Outcome tracking (was the AI output actually good?)
- Mobile-native app

---

## 8. Success Metrics

| Metric | Target (90 days post-launch) |
|---|---|
| Calculator submissions per active user/week | ≥ 3 |
| % users who return to use calculator a second time | ≥ 50% |
| Mode override rate (user disagrees with recommendation) | < 20% |
| User-reported confidence in AI delegation decisions | Increase vs. baseline survey |

---

## 9. UX Principles

- **Fast to use** — A user should be able to complete an assessment in under 60 seconds.
- **Teachable** — The output should build the user's intuition, not just give an answer.
- **Opinionated** — The tool gives a clear recommendation. It does not hedge or present all three modes as equal.
- **Low friction** — No login required to try the calculator.

---

## 10. Open Questions

1. Should the AI Process Time field be pre-filled based on task type, or always manual?
2. Do we surface the Mollick framework citation to users, or keep it implicit?
3. Should "Collaboration" have sub-modes (e.g., AI drafts first vs. human drafts first)?
4. What is the right escalation path when the recommended mode is Manual — do we offer any AI assistance at all?

---

## 11. Dependencies

- Design: Mode badge component, input form UI, educational panel layout
- Engineering: Calculator logic, optional history persistence layer
- Content: Mode definitions, example tasks per mode, microcopy for rationale strings
- Legal/Brand: Attribution if Mollick framework is cited publicly

---

## 12. Timeline (Proposed)

| Milestone | Target |
|---|---|
| PRD finalized | Week 1 |
| Design mockups | Week 2 |
| Calculator logic implemented | Week 3 |
| Internal QA + edge case testing | Week 4 |
| Beta launch (select users) | Week 5 |
| Full launch | Week 6–7 |
