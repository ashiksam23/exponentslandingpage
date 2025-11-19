import { Monitor, Repeat, Inbox, Brain, Activity, Shield } from 'lucide-react';
import { Feature, Tier, ComparisonItem } from './types';

export const SITE_CONFIG = {
  ctaLink: "#book-call",
};

export const FEATURES: Feature[] = [
  {
    title: "Pitch Deck Generation",
    problem: "Spending 10 hours formatting a mediocre deck.",
    solution: "The 'Notes-to-Deck' System. You send raw thoughts; our AI Core drafts a boardroom-ready, 15-slide pitch deck in 24 hours.",
    icon: Monitor
  },
  {
    title: "Content Repurposing & Growth",
    problem: "Your best content dies after one use. Manual repurposing is exhausting.",
    solution: "The '1-to-42' Machine. One core asset is transformed into 42 pieces of hyper-targeted social content for an entire month.",
    icon: Repeat
  },
  {
    title: "Inbox & Financial Ops",
    problem: "Losing 10 hours a week to email and chasing late invoices.",
    solution: "AI-Driven Inbox Triage & A/R System. We achieve Inbox Zero daily and proactively run your accounts receivable chasing.",
    icon: Inbox
  }
];

export const COMPARISON_DATA: ComparisonItem[] = [
  {
    metric: "Core Problem",
    oldWay: "You pay for a person to manage.",
    newWay: "You install a system to run itself."
  },
  {
    metric: "Output Model",
    oldWay: "Linear (1 hour = 1 unit).",
    newWay: "Exponential (1 hour = 10 units)."
  },
  {
    metric: "Management",
    oldWay: "High (Training, QA, Managing).",
    newWay: "Zero (0x Management Burden)."
  },
  {
    metric: "Founder Role",
    oldWay: "Stuck doing operator work.",
    newWay: "Free to be the Visionary."
  }
];

export const PRICING_TIERS: Tier[] = [
  {
    name: "0: CLARITY",
    price: 550,
    description: "Recaptures focus (10 hrs/week).",
    features: ["Wedge: Inbox Mgt", "Daily Digest", "Async Comms"],
    valueProp: "Focus Recapture"
  },
  {
    name: "1: OPERATIONS",
    price: 1150,
    description: "Reclaims time (15-20 hrs/week).",
    features: ["Everything in Clarity", "Calendar Mgt", "Travel Logistics", "Exec Admin"],
    valueProp: "Time Reclamation"
  },
  {
    name: "2: GROWTH",
    price: 2050,
    description: "Builds the marketing engine.",
    features: ["Everything in Ops", "Content Engine", "Marketing Ops", "Financial Ops"],
    valueProp: "Engine Building"
  },
  {
    name: "3: STRATEGIC",
    price: 3000,
    description: "Full 10x system. Max acceleration.",
    features: ["Everything in Growth", "Sales Ops", "HR Admin", "Priority Access"],
    valueProp: "Full 10x System",
    highlight: true
  }
];