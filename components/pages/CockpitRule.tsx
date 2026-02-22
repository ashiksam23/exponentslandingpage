import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { SITE_CONFIG } from '../../constants';
import {
  ArrowLeft, Clock, Calendar, Check, ArrowRight, Zap,
  AlertTriangle, BookOpen, Plane, Users, Hand
} from 'lucide-react';

interface CockpitRuleProps {
  onNavigate: (page: 'home' | 'blueprint' | 'casestudies' | 'blog' | 'post-sovereignty' | 'post-cos' | 'cockpit-rule') => void;
}

type TimeUnit = 'minutes' | 'hours';
type SuccessProbability = 'Low' | 'Medium' | 'High';
type DelegationMode = 'Autopilot' | 'Collaboration' | 'Manual';

interface CalcState {
  humanBaselineValue: string;
  humanBaselineUnit: TimeUnit;
  aiProbability: SuccessProbability;
  aiProcessValue: string;
  aiProcessUnit: TimeUnit;
}

interface CalcResult {
  mode: DelegationMode;
  rationale: string;
  ratio: number;
}

const MODE_CONFIG: Record<DelegationMode, {
  Icon: React.ElementType;
  badgeClasses: string;
  borderClass: string;
  label: string;
  tagline: string;
  userRole: string;
  definition: string;
  notWhen: string;
}> = {
  Autopilot: {
    Icon: Plane,
    badgeClasses: 'bg-brand-red text-white',
    borderClass: 'border-brand-red',
    label: 'Autopilot',
    tagline: 'Hand it off. Spot-check the output.',
    userRole: 'Reviewer',
    definition: 'AI handles the task end-to-end with minimal intervention. You review the output and course-correct if needed.',
    notWhen: 'The task requires emotional intelligence, confidential context, or nuanced relationship decisions.',
  },
  Collaboration: {
    Icon: Users,
    badgeClasses: 'bg-brand-neutral-800 text-white dark:bg-brand-neutral-200 dark:text-brand-neutral-900',
    borderClass: 'border-brand-neutral-400',
    label: 'Collaboration',
    tagline: 'Iterate together. Neither alone gets there.',
    userRole: 'Co-creator',
    definition: 'You and AI work in multiple rounds. AI drafts; you refine. The result is better than either could produce alone.',
    notWhen: 'Speed is critical and the cost of a subpar draft is low — in that case, Autopilot and spot-check.',
  },
  Manual: {
    Icon: Hand,
    badgeClasses: 'bg-brand-neutral-200 text-brand-neutral-800 dark:bg-brand-neutral-700 dark:text-brand-neutral-200',
    borderClass: 'border-brand-neutral-300 dark:border-brand-neutral-700',
    label: 'Manual',
    tagline: 'Own it. AI gets in the way here.',
    userRole: 'Executor',
    definition: 'Do it yourself. AI success probability is too low, or the cost of a wrong output exceeds the time saved.',
    notWhen: 'You are using "manual" as an excuse to avoid learning how to prompt well — check that honestly.',
  },
};

function toMinutes(value: string, unit: TimeUnit): number {
  const n = parseFloat(value);
  if (isNaN(n) || n <= 0) return 0;
  return unit === 'hours' ? n * 60 : n;
}

function computeResult(state: CalcState): CalcResult | null {
  const humanMinutes = toMinutes(state.humanBaselineValue, state.humanBaselineUnit);
  const aiMinutes = toMinutes(state.aiProcessValue, state.aiProcessUnit);

  if (humanMinutes === 0 || aiMinutes === 0) return null;

  const ratio = humanMinutes / aiMinutes;
  const prob = state.aiProbability;

  let mode: DelegationMode;
  let rationale: string;

  if (ratio >= 4 && prob === 'High') {
    mode = 'Autopilot';
    rationale = `AI completes this ${ratio.toFixed(1)}x faster than manual with high success probability. Delegate and spot-check.`;
  } else if (ratio >= 2 && (prob === 'Medium' || prob === 'High')) {
    mode = 'Collaboration';
    rationale = `AI is ${ratio.toFixed(1)}x faster with ${prob.toLowerCase()} success probability — iterate together for best results.`;
  } else {
    mode = 'Manual';
    if (prob === 'Low') {
      rationale = `Low AI success probability for this task means the risk of a bad output outweighs the time saved. Do it yourself.`;
    } else {
      rationale = `AI process time is too close to your manual baseline (${ratio.toFixed(1)}x). The overhead isn't worth it.`;
    }
  }

  return { mode, rationale, ratio };
}

// ── Time Input Sub-component ──────────────────────────────────────────────────
interface TimeInputProps {
  label: string;
  value: string;
  unit: TimeUnit;
  onValueChange: (v: string) => void;
  onUnitChange: (u: TimeUnit) => void;
}

const TimeInput: React.FC<TimeInputProps> = ({ label, value, unit, onValueChange, onUnitChange }) => (
  <div>
    <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-neutral-500 mb-2">
      {label}
    </label>
    <div className="flex gap-2">
      <input
        type="number"
        min="0"
        step="any"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        placeholder="0"
        className="w-full px-3 py-2 text-sm font-mono bg-white dark:bg-brand-neutral-900 border border-brand-neutral-300 dark:border-brand-neutral-700 text-brand-black dark:text-white focus:outline-none focus:border-brand-red transition-colors"
      />
      <div className="flex border border-brand-neutral-300 dark:border-brand-neutral-700 overflow-hidden shrink-0">
        {(['minutes', 'hours'] as TimeUnit[]).map((u) => (
          <button
            key={u}
            onClick={() => onUnitChange(u)}
            className={`px-3 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors ${
              unit === u
                ? 'bg-brand-red text-white'
                : 'bg-white dark:bg-brand-neutral-900 text-brand-neutral-500 dark:text-brand-neutral-400 hover:bg-brand-neutral-100 dark:hover:bg-brand-neutral-800'
            }`}
          >
            {u === 'minutes' ? 'Min' : 'Hr'}
          </button>
        ))}
      </div>
    </div>
  </div>
);

// ── Mode Card ─────────────────────────────────────────────────────────────────
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

// ── Main Component ────────────────────────────────────────────────────────────
export const CockpitRule: React.FC<CockpitRuleProps> = ({ onNavigate }) => {
  const [calc, setCalc] = useState<CalcState>({
    humanBaselineValue: '',
    humanBaselineUnit: 'hours',
    aiProbability: 'Medium',
    aiProcessValue: '',
    aiProcessUnit: 'minutes',
  });

  const result = useMemo(() => computeResult(calc), [calc]);

  // SEO Injection
  useEffect(() => {
    document.title = 'The Cockpit Rule | ExponentOS';

    const descriptionText =
      'Learn the Cockpit Rule framework for AI delegation — when to use Autopilot, Collaboration, or Manual mode. Includes an interactive cost-benefit calculator.';

    const updateMeta = (selector: string, content: string) => {
      const element = document.querySelector(selector);
      if (element) element.setAttribute('content', content);
    };

    updateMeta('meta[name="description"]', descriptionText);
    updateMeta('meta[property="og:description"]', descriptionText);
    updateMeta('meta[property="twitter:description"]', descriptionText);

    window.scrollTo(0, 0);

    return () => {
      document.title = 'ExponentOS | The Leverage Operating System for Founders';
      const defaultDesc =
        'Stop trading your genius for administrative chaos. ExponentOS installs operational sovereignty with AI-driven executive support, content automation, and strategic logistics.';
      updateMeta('meta[name="description"]', defaultDesc);
      updateMeta('meta[property="og:description"]', defaultDesc);
      updateMeta('meta[property="twitter:description"]', defaultDesc);
    };
  }, []);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Cockpit Rule: A Framework for AI Delegation Decisions',
    author: { '@type': 'Organization', name: 'ExponentOS' },
    publisher: {
      '@type': 'Organization',
      name: 'ExponentOS',
      logo: { '@type': 'ImageObject', url: 'https://exponentos.com/logo.png' },
    },
    datePublished: '2026-02-22',
    dateModified: '2026-02-22',
    description:
      'Learn the Cockpit Rule framework for AI delegation — when to use Autopilot, Collaboration, or Manual mode.',
  };

  const referenceExamples: {
    task: string;
    human: string;
    prob: SuccessProbability;
    ai: string;
    mode: DelegationMode;
  }[] = [
    { task: 'Restructure messy spreadsheet', human: '2 hr', prob: 'High', ai: '15 min', mode: 'Autopilot' },
    { task: 'Build client pitch deck', human: '10 hr', prob: 'Medium', ai: '~4 hr (5 rounds)', mode: 'Collaboration' },
    { task: "Reply to VP's Slack message", human: '3 min', prob: 'Low', ai: '20–30 min', mode: 'Manual' },
    { task: 'Draft weekly newsletter', human: '3 hr', prob: 'High', ai: '20 min', mode: 'Autopilot' },
    { task: 'Product strategy memo', human: '8 hr', prob: 'Medium', ai: '2 hr (iterative)', mode: 'Collaboration' },
  ];

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-brand-black transition-colors duration-300 min-h-screen font-sans">
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <article className="max-w-4xl mx-auto px-6">

        {/* ── HEADER ──────────────────────────────────────────────────────── */}
        <div className="mb-16 border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-12">
          <button
            onClick={() => onNavigate('home')}
            className="group inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand-neutral-500 hover:text-brand-red transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Return to Command Center
          </button>

          <div className="flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-widest text-brand-neutral-400 mb-8 font-mono">
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Feb 22, 2026</span>
            <span className="w-px h-3 bg-brand-neutral-300 dark:bg-brand-neutral-700"></span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 6 Min Intelligence Brief</span>
            <span className="w-px h-3 bg-brand-neutral-300 dark:bg-brand-neutral-700"></span>
            <span className="px-2 py-1 bg-brand-red/10 text-brand-red font-bold">Protocol: Framework</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-brand-black dark:text-white leading-[0.95] tracking-tighter mb-8 uppercase">
            The Cockpit <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red/60">Rule</span>
          </h1>

          <p className="text-xl md:text-2xl text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed font-light max-w-2xl">
            A structured framework for deciding when to delegate to AI, collaborate with it, or simply do the work yourself.
          </p>
        </div>

        {/* ── TL;DR ───────────────────────────────────────────────────────── */}
        <div className="mb-16 bg-brand-neutral-50 dark:bg-brand-neutral-900/30 border-l-4 border-brand-red p-8">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="w-4 h-4 text-brand-red fill-current" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-neutral-500">Executive Summary (TL;DR)</h3>
          </div>
          <ul className="space-y-4">
            {[
              'Over-delegating and under-delegating to AI are equally expensive mistakes.',
              'The Cockpit Rule defines three modes: Autopilot, Collaboration, and Manual.',
              'Three inputs decide the mode: Human Baseline Time, AI Success Probability, and AI Process Time.',
              'Use the calculator below to get your recommendation in under 60 seconds.',
              'Best tasks to delegate: slow manually, AI-capable in domain, easy to evaluate.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-brand-black dark:text-white font-medium">
                <Check className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── TWO EXPENSIVE MISTAKES ──────────────────────────────────────── */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter uppercase border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8 text-brand-black dark:text-white">
            Two Expensive Mistakes
          </h2>

          <p className="text-brand-neutral-600 dark:text-brand-neutral-300 leading-8 mb-6">
            Most professionals using AI tools consistently fall into one of two traps. The first is over-delegation — handing tasks to AI that require human judgment, missing context, or relationship nuance. The output is technically fluent but subtly wrong in ways that damage credibility and require time-consuming rework.
          </p>

          <p className="text-brand-neutral-600 dark:text-brand-neutral-300 leading-8 mb-8">
            The second is under-delegation — spending hours on work that AI could have handled in minutes. This isn't caution; it's waste disguised as diligence.
          </p>

          {/* Pull Quote */}
          <div className="relative py-8 mb-8">
            <div className="absolute top-0 left-0 w-16 h-1 bg-brand-red"></div>
            <h3 className="text-2xl md:text-4xl font-bold leading-tight text-brand-black dark:text-white">
              The cost isn't just time lost. <br />
              <span className="text-brand-neutral-400">It's trust lost — either your client's or your own judgment.</span>
            </h3>
          </div>

          <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 bg-brand-neutral-50 dark:bg-brand-neutral-900 border border-brand-neutral-200 dark:border-brand-neutral-800 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <AlertTriangle className="w-16 h-16" />
              </div>
              <h4 className="font-bold uppercase text-sm text-brand-red mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> Over-Delegation
              </h4>
              <p className="text-sm text-brand-neutral-600 dark:text-brand-neutral-400 leading-relaxed relative z-10">
                Handing AI a task it can't do well. Output looks polished but is wrong in subtle, costly ways. Credibility damage is often invisible until it's too late.
              </p>
            </div>
            <div className="p-6 bg-brand-neutral-50 dark:bg-brand-neutral-900 border border-brand-neutral-200 dark:border-brand-neutral-800 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Clock className="w-16 h-16" />
              </div>
              <h4 className="font-bold uppercase text-sm text-brand-neutral-500 mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4" /> Under-Delegation
              </h4>
              <p className="text-sm text-brand-neutral-600 dark:text-brand-neutral-400 leading-relaxed relative z-10">
                Doing manually what AI could handle in a fraction of the time. This isn't careful — it's hours burned on low-leverage work that AI could have drafted.
              </p>
            </div>
          </div>
        </div>

        {/* ── THREE OPERATING MODES ───────────────────────────────────────── */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter uppercase border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8 text-brand-black dark:text-white">
            Three Operating Modes
          </h2>

          <p className="text-brand-neutral-600 dark:text-brand-neutral-300 leading-8 mb-8">
            Adapted from Wharton Professor Ethan Mollick's agentic cost-benefit framework, the Cockpit Rule gives every task a clear operating mode. Like a pilot choosing between autopilot, manual control, and crew collaboration — the decision is driven by conditions, not habit.
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {(Object.entries(MODE_CONFIG) as [DelegationMode, typeof MODE_CONFIG[DelegationMode]][]).map(([mode, cfg]) => (
              <motion.div
                key={mode}
                variants={cardVariants}
                className={`p-6 border-2 ${cfg.borderClass} bg-white dark:bg-brand-black relative overflow-hidden group`}
              >
                <cfg.Icon className="w-8 h-8 mb-4 text-brand-neutral-400 group-hover:text-brand-red transition-colors" />
                <span className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest mb-3 ${cfg.badgeClasses}`}>
                  {cfg.label}
                </span>
                <p className="text-xs font-mono text-brand-neutral-500 mb-4">{cfg.tagline}</p>
                <p className="text-sm text-brand-neutral-600 dark:text-brand-neutral-400 leading-relaxed mb-4">{cfg.definition}</p>
                <div className="border-t border-brand-neutral-100 dark:border-brand-neutral-800 pt-4">
                  <span className="block text-[10px] uppercase tracking-widest text-brand-neutral-400 mb-1">Your Role</span>
                  <span className="text-sm font-bold text-brand-black dark:text-white">{cfg.userRole}</span>
                </div>
                <div className="border-t border-brand-neutral-100 dark:border-brand-neutral-800 pt-4 mt-4">
                  <span className="block text-[10px] uppercase tracking-widest text-brand-red mb-1">Not When</span>
                  <span className="text-xs text-brand-neutral-500 dark:text-brand-neutral-400">{cfg.notWhen}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── COST-BENEFIT FRAMEWORK ──────────────────────────────────────── */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter uppercase border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8 text-brand-black dark:text-white">
            The Cost-Benefit Framework
          </h2>

          <p className="text-brand-neutral-600 dark:text-brand-neutral-300 leading-8 mb-8">
            Three inputs determine the right mode. Measure each honestly — the framework only works if you're precise about the actual time and risk involved.
          </p>

          <div className="space-y-6 mb-10">
            {[
              {
                num: '01',
                title: 'Human Baseline Time',
                desc: 'How long would this task take you to do manually, without AI? Be specific — estimate in minutes or hours.',
              },
              {
                num: '02',
                title: 'AI Probability of Success',
                desc: 'How likely is AI to produce a usable output in this domain? Low = AI frequently misses context or nuance. High = AI is well-trained and the task is well-defined.',
              },
              {
                num: '03',
                title: 'AI Process Time',
                desc: 'Total time spent prompting, waiting, reviewing, and iterating. Not just the AI generation time — the full loop.',
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-brand-neutral-200 dark:border-brand-neutral-800 bg-brand-neutral-50 dark:bg-brand-neutral-900">
                  <span className="font-mono text-xs font-bold text-brand-neutral-400">{step.num}</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide text-brand-black dark:text-white mb-1">{step.title}</h4>
                  <p className="text-sm text-brand-neutral-600 dark:text-brand-neutral-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Decision Logic */}
          <div className="bg-brand-neutral-950 dark:bg-brand-neutral-950 border border-brand-neutral-800 p-6 overflow-x-auto">
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-neutral-500 mb-4">Decision Logic</p>
            <pre className="text-sm font-mono text-brand-neutral-200 leading-7">
{`if (AI Process Time << Human Baseline) AND (P(success) is High):
  → Autopilot

if (AI Process Time < Human Baseline) AND (P(success) is Medium+):
  → Collaboration

if (AI Process Time >= Human Baseline) OR (P(success) is Low):
  → Manual`}
            </pre>
          </div>
        </div>

        {/* ── INTERACTIVE CALCULATOR ──────────────────────────────────────── */}
        <div className="mb-16">
          <div className="border border-brand-neutral-200 dark:border-brand-neutral-800 overflow-hidden">
            {/* Header bar */}
            <div className="bg-brand-neutral-50 dark:bg-brand-neutral-900 border-b border-brand-neutral-200 dark:border-brand-neutral-800 px-6 py-4 flex items-center gap-3">
              <BookOpen className="w-4 h-4 text-brand-red" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-black dark:text-white">
                Mode Calculator
              </h3>
              <span className="ml-auto text-[10px] font-mono text-brand-neutral-400">Complete all three fields</span>
            </div>

            <div className="p-6 md:p-8">
              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <TimeInput
                  label="Human Baseline Time"
                  value={calc.humanBaselineValue}
                  unit={calc.humanBaselineUnit}
                  onValueChange={(v) => setCalc((s) => ({ ...s, humanBaselineValue: v }))}
                  onUnitChange={(u) => setCalc((s) => ({ ...s, humanBaselineUnit: u }))}
                />

                {/* AI Probability */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-neutral-500 mb-2">
                    AI Probability of Success
                  </label>
                  <div className="flex flex-col gap-2">
                    {(['Low', 'Medium', 'High'] as SuccessProbability[]).map((p) => (
                      <button
                        key={p}
                        onClick={() => setCalc((s) => ({ ...s, aiProbability: p }))}
                        className={`px-3 py-2 text-xs font-bold uppercase tracking-widest text-left border transition-colors ${
                          calc.aiProbability === p
                            ? 'bg-brand-red text-white border-brand-red'
                            : 'bg-white dark:bg-brand-neutral-900 text-brand-neutral-500 border-brand-neutral-300 dark:border-brand-neutral-700 hover:border-brand-red hover:text-brand-red'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <TimeInput
                  label="AI Process Time"
                  value={calc.aiProcessValue}
                  unit={calc.aiProcessUnit}
                  onValueChange={(v) => setCalc((s) => ({ ...s, aiProcessValue: v }))}
                  onUnitChange={(u) => setCalc((s) => ({ ...s, aiProcessUnit: u }))}
                />
              </div>

              {/* Result */}
              <AnimatePresence mode="wait">
                {result ? (
                  <motion.div
                    key={result.mode}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className={`p-6 border-2 ${MODE_CONFIG[result.mode].borderClass} bg-brand-neutral-50 dark:bg-brand-neutral-900/50`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="flex items-center gap-4">
                        {React.createElement(MODE_CONFIG[result.mode].Icon, {
                          className: 'w-8 h-8 text-brand-red shrink-0',
                        })}
                        <div>
                          <span className="block text-[10px] font-mono uppercase tracking-widest text-brand-neutral-400 mb-1">
                            Recommended Mode
                          </span>
                          <span className={`inline-block px-3 py-1 text-sm font-bold uppercase tracking-widest ${MODE_CONFIG[result.mode].badgeClasses}`}>
                            {result.mode}
                          </span>
                        </div>
                      </div>
                      <div className="sm:ml-6 sm:border-l sm:border-brand-neutral-200 dark:sm:border-brand-neutral-700 sm:pl-6">
                        <p className="text-sm text-brand-neutral-600 dark:text-brand-neutral-400 leading-relaxed">
                          {result.rationale}
                        </p>
                        <p className="text-xs font-mono text-brand-neutral-400 mt-2">
                          Your role: <strong className="text-brand-black dark:text-white">{MODE_CONFIG[result.mode].userRole}</strong>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="p-6 border border-dashed border-brand-neutral-300 dark:border-brand-neutral-700 text-center"
                  >
                    <p className="text-sm text-brand-neutral-400 font-mono">
                      Enter your time estimates above to see your recommended mode.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ── REFERENCE EXAMPLES ──────────────────────────────────────────── */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter uppercase border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8 text-brand-black dark:text-white">
            Reference Examples
          </h2>

          <div className="overflow-x-auto border border-brand-neutral-200 dark:border-brand-neutral-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-neutral-50 dark:bg-brand-neutral-900 border-b border-brand-neutral-200 dark:border-brand-neutral-800">
                  {['Task', 'Human Baseline', 'P(Success)', 'AI Process Time', 'Mode'].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-brand-neutral-500">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {referenceExamples.map((ex, i) => {
                  const cfg = MODE_CONFIG[ex.mode];
                  return (
                    <tr key={i} className="border-b last:border-0 border-brand-neutral-100 dark:border-brand-neutral-800 hover:bg-brand-neutral-50 dark:hover:bg-brand-neutral-900/50 transition-colors">
                      <td className="px-4 py-3 font-medium text-brand-black dark:text-white">{ex.task}</td>
                      <td className="px-4 py-3 text-brand-neutral-500 font-mono">{ex.human}</td>
                      <td className="px-4 py-3 text-brand-neutral-500">{ex.prob}</td>
                      <td className="px-4 py-3 text-brand-neutral-500 font-mono">{ex.ai}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${cfg.badgeClasses}`}>
                          {ex.mode}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── RULE OF THUMB ───────────────────────────────────────────────── */}
        <div className="mb-16 border-l-4 border-brand-red p-8 bg-brand-neutral-50 dark:bg-brand-neutral-900/30">
          <h3 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-4 flex items-center gap-2">
            <Zap className="w-4 h-4" /> Rule of Thumb
          </h3>
          <p className="text-brand-black dark:text-white font-medium mb-4">
            The best tasks to delegate to AI share three properties:
          </p>
          <ul className="space-y-3">
            {[
              'Slow to do manually — significant time cost for the human.',
              'AI-capable in domain — the task type is well-represented in AI training data.',
              'Easy to evaluate — you can quickly tell if the output is right or wrong.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-brand-neutral-700 dark:text-brand-neutral-300">
                <Check className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── BOTTOM CTA ──────────────────────────────────────────────────── */}
        <div className="mt-20 p-10 md:p-16 border border-brand-neutral-200 dark:border-brand-neutral-800 bg-brand-neutral-50 dark:bg-brand-neutral-900/50 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-brand-black dark:text-white mb-6 uppercase tracking-tight">
              Put the Cockpit Rule to Work
            </h3>
            <p className="text-lg text-brand-neutral-600 dark:text-brand-neutral-400 mb-10 max-w-xl mx-auto leading-relaxed">
              ExponentOS installs the Cockpit Rule across your entire operation — so every task your team handles gets the right mode, every time.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="shadow-xl hover:shadow-2xl transition-all"
              onClick={() => (window.location.href = SITE_CONFIG.ctaLink)}
            >
              Book an AI Operations Audit <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

      </article>
    </div>
  );
};
