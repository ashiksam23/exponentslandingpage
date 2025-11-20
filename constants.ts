import { Monitor, Repeat, Inbox, Brain, Activity, Shield } from 'lucide-react';
import { Feature, Tier, ComparisonItem } from './types';

export const SITE_CONFIG = {
  ctaLink: "https://calendar.app.google/w9U9vMTWTaDKa9gi9",
  ctaText: "CLAIM YOUR 15-MIN STRATEGIC BRIEFING"
};

export const FEATURES: Feature[] = [
  {
    title: "The '1-to-42' Manifesto Machine",
    problem: "Your brilliance is trapped in a podcast file.",
    solution: "Our AI Core ingests one pillar asset and transforms it into a 42-piece, multi-platform, scheduled content machine for the entire month. You move from content creator to content validator.",
    icon: Repeat
  },
  {
    title: "Financial Sovereignty & A/R",
    problem: "You are your own Accounts Receivable clerk and inbox-janitor.",
    solution: "We eliminate the low-value fight. Your inbox is autonomously triaged (95% invisible). Your outstanding invoices are proactively chased using automated, high-trust protocols.",
    icon: Inbox
  },
  {
    title: "The 'Boardroom Advantage'",
    problem: "You lose 10 hours struggling with a critical pitch deck.",
    solution: "The 'Notes-to-Deck' system. You send raw strategy; we deliver a flawless, narrative-driven, client-ready presentation in 24 hours.",
    icon: Monitor
  }
];

export const COMPARISON_DATA: ComparisonItem[] = [
  {
    metric: "Core Philosophy",
    oldWay: "THE LIE: We pay for hours.",
    newWay: "THE TRUTH: We invest in output."
  },
  {
    metric: "Management Load",
    oldWay: "The Cost: New management burden (you must train them).",
    newWay: "The Asset: 0x Management Burden (The system trains itself)."
  },
  {
    metric: "Output Physics",
    oldWay: "The Risk: Linear Output. (1 hour = 1 unit).",
    newWay: "The Guarantee: Exponential Output. (1 hour = 10 units)."
  },
  {
    metric: "End State",
    oldWay: "The Result: The CEO remains trapped in the chaos.",
    newWay: "The Result: The CEO achieves operational sovereignty."
  }
];

export const PRICING_TIERS: Tier[] = [
  {
    name: "T0: CLARITY",
    price: 550,
    description: "The Focus Wedge: Autonomous Inbox Triage & Daily Digest.",
    features: ["Buys back your lost mornings", "Daily Digest", "Async Comms"],
    valueProp: "Focus Recapture"
  },
  {
    name: "T1: OPERATIONS",
    price: 1150,
    description: "Eliminates the personal admin bottleneck.",
    features: ["Everything in Clarity", "Full Calendar Mgt", "Travel Logistics", "Exec Admin"],
    valueProp: "Time Reclamation"
  },
  {
    name: "T2: GROWTH",
    price: 2050,
    description: "Activates the company's growth machine.",
    features: ["Everything in Ops", "Content Engine", "Marketing Ops", "Financial Ops"],
    valueProp: "Engine Building"
  },
  {
    name: "T3: STRATEGIC",
    price: 3000,
    description: "Installs the full, autonomous Chief of Staff system.",
    features: ["Everything in Growth", "Sales Ops", "HR Admin", "Priority Access"],
    valueProp: "Full 10x System",
    highlight: true
  }
];