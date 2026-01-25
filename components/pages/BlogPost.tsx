
import React, { useEffect } from 'react';
import { Button } from '../ui/Button';
import { SITE_CONFIG } from '../../constants';
import {
  ArrowLeft, Clock, Calendar, Check, AlertTriangle, ArrowRight, Zap, Target, Layers,
  Users, HelpCircle, Database, Cpu, Layout, BookOpen, TrendingUp, DollarSign,
  Shield, Lightbulb, BarChart3, UserCheck, Network, Building, ChevronRight,
  CheckCircle, XCircle, Minus, Timer, Brain
} from 'lucide-react';

interface BlogPostProps {
  onNavigate: (page: 'home' | 'blueprint') => void;
}

// Table of Contents data
const TABLE_OF_CONTENTS = [
  { id: 'nightmare', title: 'The Revenue–Headcount Paradox' },
  { id: 'org-charts', title: 'Death of Traditional Org Charts' },
  { id: 'founder-trap', title: 'The Founder\'s Trap ($1M–$3M)' },
  { id: 'hitl', title: 'AI + Human-in-the-Loop Model' },
  { id: 'exponent-model', title: 'The ExponentOS Model' },
  { id: 'tech-stack', title: 'The 4-Layer AI Tech Stack' },
  { id: 'team-resistance', title: 'Overcoming Team Resistance' },
  { id: 'metrics', title: 'New Metrics for Service Firms' },
  { id: 'implementation', title: '90-Day Implementation Roadmap' },
  { id: 'case-studies', title: 'Real-World Case Studies' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

// FAQ data for structured data and rendering
const FAQ_DATA = [
  {
    question: "Does AI replace my team members?",
    answer: "No. AI replaces the repetitive, low-leverage tasks that drain your team's energy. Your people become 'pilots' of AI systems—doing strategic work instead of data entry. The only staff at risk are those who refuse to evolve. Everyone else becomes exponentially more valuable."
  },
  {
    question: "What's the first step to implementing ExponentOS?",
    answer: "Document your Standard Operating Procedures (SOPs). AI cannot augment processes it doesn't understand. Start by mapping your top 5 most time-consuming workflows. This typically takes 2-3 hours and creates the foundation for AI implementation."
  },
  {
    question: "How expensive is implementing AI-augmented operations?",
    answer: "Software costs are minimal—typically $500-2,000/month for the full stack. The real investment is time: mapping your processes (8-16 hours) and training your team (4-8 hours). Most agencies see positive ROI within the first 30 days through time savings."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most agencies see measurable time savings within 2 weeks. Significant operational improvements (20+ hours/week saved) typically emerge within 60 days. Full transformation—including cultural adoption—takes 90 days."
  },
  {
    question: "What if my team resists the change?",
    answer: "Resistance is natural. The key is positioning AI as a 'copilot' that eliminates drudgery, not a replacement. Tie margin improvements to bonus pools. When people see AI gives them time for creative work instead of data entry, adoption accelerates."
  },
  {
    question: "Is the Human-in-the-Loop model really necessary?",
    answer: "Yes. Pure automation is brittle—it breaks when context changes. Pure human execution is slow and expensive. HITL combines AI speed and consistency with human judgment and taste. It's why ExponentOS achieves 40-60% margins versus 15-25% for traditional agencies."
  },
  {
    question: "What tools integrate with ExponentOS?",
    answer: "ExponentOS integrates with 50+ tools including Gmail/Outlook, Slack, Notion, Asana, Airtable, QuickBooks, Stripe, HubSpot, Salesforce, and all major CRMs. If you use it, we can likely connect to it."
  },
  {
    question: "How is this different from hiring a COO?",
    answer: "A COO costs $200-400K/year and takes 6-12 months to be effective. They also require management. ExponentOS costs a fraction, deploys in 48 hours, and scales without adding complexity. Hire a COO after you fix the operational model—otherwise you're just adding leadership to a broken system."
  }
];

export const BlogPost: React.FC<BlogPostProps> = ({ onNavigate }) => {

  // SEO Injection
  useEffect(() => {
    document.title = "The Operational Sovereignty Blueprint: Scale Without Headcount | ExponentOS";

    const descriptionText = "Break free from the $3M ceiling. Learn how AI-augmented operations and human-in-the-loop workflows let you decouple revenue from headcount. Complete implementation guide with case studies.";

    const updateMeta = (selector: string, content: string) => {
      const element = document.querySelector(selector);
      if (element) {
        element.setAttribute('content', content);
      }
    };

    updateMeta('meta[name="description"]', descriptionText);
    updateMeta('meta[property="og:description"]', descriptionText);
    updateMeta('meta[property="twitter:description"]', descriptionText);

    window.scrollTo(0, 0);

    return () => {
      document.title = "ExponentOS | The Leverage Operating System for Founders";
      const defaultDesc = "Stop trading your genius for administrative chaos. ExponentOS installs operational sovereignty with AI-driven executive support, content automation, and strategic logistics.";
      updateMeta('meta[name="description"]', defaultDesc);
      updateMeta('meta[property="og:description"]', defaultDesc);
      updateMeta('meta[property="twitter:description"]', defaultDesc);
    };
  }, []);

  // Structured Data (JSON-LD) - Article + FAQPage
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Operational Sovereignty Blueprint: How to Scale a Service Firm Without Bloating Headcount",
    "author": { "@type": "Organization", "name": "ExponentOS" },
    "publisher": {
      "@type": "Organization",
      "name": "ExponentOS",
      "logo": { "@type": "ImageObject", "url": "https://exponentos.com/logo.png" }
    },
    "datePublished": "2025-05-22",
    "dateModified": "2026-01-25",
    "description": "Break free from the $3M ceiling. Learn how AI-augmented operations and human-in-the-loop workflows let you decouple revenue from headcount.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://exponentos.com/blueprint"
    },
    "wordCount": 4500,
    "articleSection": "Business Strategy"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-brand-black transition-colors duration-300 min-h-screen font-sans">
      <script type="application/ld+json">{JSON.stringify(articleStructuredData)}</script>
      <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>

      <article className="max-w-4xl mx-auto px-6">

        {/* --- HEADER --- */}
        <div className="mb-16 border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-12">
          <button
            onClick={() => onNavigate('home')}
            className="group inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand-neutral-500 hover:text-brand-red transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Return to Command Center
          </button>

          <div className="flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-widest text-brand-neutral-400 mb-8 font-mono">
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Updated Jan 2026</span>
            <span className="w-px h-3 bg-brand-neutral-300 dark:bg-brand-neutral-700"></span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 15 Min Strategic Brief</span>
            <span className="w-px h-3 bg-brand-neutral-300 dark:bg-brand-neutral-700"></span>
            <span className="px-2 py-1 bg-brand-red/10 text-brand-red font-bold rounded-sm">Protocol: Blueprint</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-brand-black dark:text-white leading-[0.95] tracking-tighter mb-8 uppercase">
            The Operational <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red/60">Sovereignty Blueprint</span>
          </h1>

          <p className="text-xl md:text-2xl text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed font-light max-w-2xl">
            The complete playbook for decoupling revenue from headcount using AI-augmented operations and human-in-the-loop workflows. Stop trading hours for dollars.
          </p>
        </div>

        {/* --- TABLE OF CONTENTS --- */}
        <nav className="mb-16 p-8 bg-brand-neutral-50 dark:bg-brand-neutral-900/50 border border-brand-neutral-200 dark:border-brand-neutral-800">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-brand-red" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-neutral-500">In This Blueprint</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {TABLE_OF_CONTENTS.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-3 text-left text-sm text-brand-neutral-600 dark:text-brand-neutral-400 hover:text-brand-red transition-colors group"
              >
                <span className="w-6 h-6 flex items-center justify-center bg-brand-neutral-200 dark:bg-brand-neutral-800 text-[10px] font-bold text-brand-neutral-500 group-hover:bg-brand-red group-hover:text-white transition-colors">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <span>{item.title}</span>
                <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </nav>

        {/* --- EXECUTIVE SUMMARY (TL;DR) --- */}
        <div className="mb-16 bg-brand-neutral-50 dark:bg-brand-neutral-900/30 border-l-4 border-brand-red p-8">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="w-4 h-4 text-brand-red fill-current" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-neutral-500">Executive Summary (TL;DR)</h3>
          </div>
          <ul className="space-y-4">
            {[
              "Most agencies break at $3M because complexity grows faster than revenue—communication overhead kills margins.",
              "AI-Augmented Operations transforms your company from a pyramid (linear scaling) to a network (exponential scaling).",
              "Human-in-the-Loop (HITL) is the key: AI handles speed and consistency, humans provide judgment and taste.",
              "Target metric: Revenue Per Employee of $350k+ (vs. industry average of $150k).",
              "The 90-day implementation path: Document SOPs → Deploy AI Agents → Train teams → Measure leverage.",
              "You don't need more people. You need better systems that turn 1 hour of input into 10 units of output."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-brand-black dark:text-white font-medium">
                <Check className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* --- WHO THIS IS FOR --- */}
        <div className="mb-16 p-8 border border-brand-neutral-200 dark:border-brand-neutral-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="flex items-center gap-2 mb-6 relative z-10">
            <Target className="w-4 h-4 text-brand-red" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-neutral-500">Who This Blueprint Is For</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div>
              <h4 className="font-bold text-brand-black dark:text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-red" /> This Is For You If:
              </h4>
              <ul className="space-y-2 text-sm text-brand-neutral-600 dark:text-brand-neutral-400">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-brand-red shrink-0 mt-0.5" /> You run a service firm at $1M-$10M revenue</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-brand-red shrink-0 mt-0.5" /> Growth requires hiring, which shrinks margins</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-brand-red shrink-0 mt-0.5" /> You're drowning in operational firefighting</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-brand-red shrink-0 mt-0.5" /> Quality drops when you step away</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-brand-black dark:text-white mb-3 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-brand-neutral-400" /> This Is NOT For You If:
              </h4>
              <ul className="space-y-2 text-sm text-brand-neutral-600 dark:text-brand-neutral-400">
                <li className="flex items-start gap-2"><Minus className="w-4 h-4 text-brand-neutral-400 shrink-0 mt-0.5" /> You're pre-revenue or pre-product-market fit</li>
                <li className="flex items-start gap-2"><Minus className="w-4 h-4 text-brand-neutral-400 shrink-0 mt-0.5" /> You want AI to replace strategy (it can't)</li>
                <li className="flex items-start gap-2"><Minus className="w-4 h-4 text-brand-neutral-400 shrink-0 mt-0.5" /> You're looking for magic—this is systematic work</li>
                <li className="flex items-start gap-2"><Minus className="w-4 h-4 text-brand-neutral-400 shrink-0 mt-0.5" /> Your team fundamentally resists change</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- BODY CONTENT START --- */}
        <div className="prose prose-lg dark:prose-invert max-w-none
          prose-p:text-brand-neutral-600 dark:prose-p:text-brand-neutral-300 prose-p:leading-8
          prose-headings:font-bold prose-headings:tracking-tight prose-headings:uppercase prose-headings:text-brand-black dark:prose-headings:text-white
          prose-strong:text-brand-black dark:prose-strong:text-white prose-strong:font-bold
        ">

          {/* SECTION 1: THE NIGHTMARE */}
          <h2 id="nightmare" className="text-3xl border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8 scroll-mt-24">
            The "Slack Notification" Nightmare
          </h2>

          <p className="text-xl">Meet Alex.</p>
          <p>
            Alex runs a $2.5M marketing agency. 15 employees. 12 active clients. On paper, things look great. Annual growth of 40%. Clients renewing. Team expanding.
          </p>
          <p>
            In reality, Alex hasn't had a full weekend off in eight months. The inbox never hits zero. Every strategic conversation gets interrupted by operational fires.
          </p>

          <div className="my-8 p-6 bg-brand-neutral-100 dark:bg-brand-neutral-900 rounded-sm">
            <p className="font-mono text-sm text-brand-red mb-2 uppercase tracking-widest">Incident Report: Tuesday 11:47 PM</p>
            <p className="italic text-brand-black dark:text-white mb-0">
              "Alex stares at 47 unread Slack mentions. Three account managers are arguing about a brief in different threads. A designer quit citing burnout—the third this year. A $50K client wants to know why their monthly report is late. The CFO needs financial projections for tomorrow's board call. Alex hasn't eaten dinner."
            </p>
          </div>

          <p className="font-bold text-xl text-brand-black dark:text-white">
            Alex isn't a CEO. Alex is a firefighter in a burning building made of billable hours and communication debt.
          </p>

          <p>
            This is the <strong>Revenue–Headcount Paradox</strong>—the silent killer of service firms. Most agencies operate on a broken equation:
          </p>

          {/* VISUAL FLOW */}
          <div className="not-prose my-12 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <div className="bg-brand-neutral-50 dark:bg-brand-neutral-900 border border-brand-neutral-200 dark:border-brand-neutral-800 p-4 w-full">
              <span className="text-xs font-bold uppercase text-brand-neutral-500">Input</span>
              <div className="text-lg font-bold mt-1">More Revenue</div>
            </div>
            <ArrowRight className="hidden md:block text-brand-neutral-400" />
            <div className="bg-brand-neutral-50 dark:bg-brand-neutral-900 border border-brand-neutral-200 dark:border-brand-neutral-800 p-4 w-full">
              <span className="text-xs font-bold uppercase text-brand-neutral-500">Method</span>
              <div className="text-lg font-bold mt-1">More People</div>
            </div>
            <ArrowRight className="hidden md:block text-brand-neutral-400" />
            <div className="bg-brand-neutral-50 dark:bg-brand-neutral-900 border border-brand-neutral-200 dark:border-brand-neutral-800 p-4 w-full">
              <span className="text-xs font-bold uppercase text-brand-neutral-500">Requirement</span>
              <div className="text-lg font-bold mt-1">More Management</div>
            </div>
            <ArrowRight className="hidden md:block text-brand-neutral-400" />
            <div className="bg-brand-red/10 border border-brand-red/30 p-4 w-full relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-red/5 animate-pulse"></div>
              <span className="text-xs font-bold uppercase text-brand-red relative z-10">Outcome</span>
              <div className="text-lg font-bold text-brand-red mt-1 relative z-10">Smaller Margins</div>
            </div>
          </div>

          <p>
            The result? Agencies hire to grow, then spend all their time managing the people they hired. The founder becomes a bottleneck, margins compress, and the business becomes unsellable because it can't run without them.
          </p>

          <p>
            <strong>AI changes this equation entirely.</strong> For the first time, service firms can achieve what we call <strong>Operational Sovereignty</strong>—scaling revenue without scaling headcount. This blueprint shows you exactly how.
          </p>

          {/* SECTION 2: ORG CHARTS */}
          <div className="my-16"></div>
          <h2 id="org-charts" className="text-3xl border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8 scroll-mt-24">
            The Death of Traditional Org Charts
          </h2>

          <p>
            Traditional agencies rely on a pyramid structure: Junior staff at the base execute tasks, middle managers supervise juniors, senior team supervises managers, founder supervises everyone.
          </p>

          <p>
            This model worked in 2015. It's suicide in 2026. Because pyramids scale linearly. And linear scaling collapses under the weight of communication overhead.
          </p>

          {/* PULL QUOTE */}
          <div className="not-prose my-12 relative py-8">
            <div className="absolute top-0 left-0 w-16 h-1 bg-brand-red"></div>
            <h3 className="text-2xl md:text-4xl font-bold leading-tight text-brand-black dark:text-white">
              AI won't replace agencies. <br/>
              <span className="text-brand-neutral-400">It will replace badly run agencies that scale by throwing juniors at problems.</span>
            </h3>
          </div>

          <h3>The Modern Model: The Network</h3>
          <p>
            Instead of a pyramid, AI-first firms adopt a <strong>Hub-and-Node</strong> structure: Humans at the center (judgment, taste, strategy) orchestrating AI Agents as execution nodes (research, drafts, analysis, reporting).
          </p>

          {/* COMPARISON TABLE */}
          <div className="not-prose my-12 overflow-hidden border border-brand-neutral-200 dark:border-brand-neutral-800">
            <div className="grid grid-cols-3 bg-brand-neutral-50 dark:bg-brand-neutral-900 border-b border-brand-neutral-200 dark:border-brand-neutral-800">
              <div className="p-4 text-xs font-bold uppercase tracking-widest text-brand-neutral-500">Metric</div>
              <div className="p-4 text-xs font-bold uppercase tracking-widest text-brand-neutral-500">Traditional Firm</div>
              <div className="p-4 text-xs font-bold uppercase tracking-widest text-brand-red">AI-Augmented Firm</div>
            </div>
            {[
              { label: "Scaling Method", old: "Hire junior staff", new: "Spin up AI agents" },
              { label: "Main Cost", old: "Salaries (60-70%)", new: "Compute & software (15%)" },
              { label: "QC Protocol", old: "Manual peer review", new: "Auto-check + Human Audit" },
              { label: "First Draft Speed", old: "Days to weeks", new: "Minutes to hours" },
              { label: "Revenue/Employee", old: "$120-180K", new: "$300-500K" },
              { label: "Gross Margins", old: "15–25%", new: "40–60%", highlight: true },
              { label: "Scalability", old: "Linear (1:1)", new: "Exponential (1:10)" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-b last:border-0 border-brand-neutral-200 dark:border-brand-neutral-800 text-sm">
                <div className="p-4 font-bold text-brand-black dark:text-white">{row.label}</div>
                <div className="p-4 text-brand-neutral-500">{row.old}</div>
                <div className={`p-4 font-medium ${row.highlight ? 'text-brand-red font-bold' : 'text-brand-black dark:text-white'}`}>{row.new}</div>
              </div>
            ))}
          </div>

          <p className="font-bold">Traditional org charts grow heavier. AI org charts grow lighter.</p>

          {/* SECTION 3: FOUNDER'S TRAP */}
          <div className="my-16"></div>
          <h2 id="founder-trap" className="text-3xl border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8 scroll-mt-24">
            The Founder's Trap ($1M–$3M)
          </h2>

          <p>
            The $3M ceiling is not a sales problem—it's a communication problem. Here's the mathematics that explains why:
          </p>

          {/* VISUAL FORMULA */}
          <div className="not-prose my-8 flex items-center justify-center p-8 bg-brand-neutral-50 dark:bg-brand-neutral-900 border border-brand-neutral-200 dark:border-brand-neutral-800">
            <div className="text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-brand-neutral-500 mb-2">Metcalfe's Law of Complexity</p>
              <p className="text-4xl font-bold font-serif italic">C = n(n-1)/2</p>
              <p className="text-sm mt-4 text-brand-neutral-400">Where C = communication lines, n = team size</p>
              <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                <div className="p-2 bg-white dark:bg-brand-black rounded">
                  <span className="font-bold">5 people</span>
                  <span className="block text-brand-neutral-500">10 lines</span>
                </div>
                <div className="p-2 bg-white dark:bg-brand-black rounded">
                  <span className="font-bold">15 people</span>
                  <span className="block text-brand-neutral-500">105 lines</span>
                </div>
                <div className="p-2 bg-white dark:bg-brand-black rounded">
                  <span className="font-bold text-brand-red">30 people</span>
                  <span className="block text-brand-red">435 lines</span>
                </div>
              </div>
            </div>
          </div>

          <h3>The Core Symptoms</h3>
          <ul className="list-disc pl-6 mb-8">
            <li><strong>Founder Dependency:</strong> Only the founder can close high-ticket deals, calm angry clients, or make strategic decisions.</li>
            <li><strong>Quality Degradation:</strong> The moment the founder steps away, quality drops. The business has expertise, not systems.</li>
            <li><strong>Margin Compression:</strong> Each new hire adds communication overhead. Layers of managers are added to "manage complexity," shrinking margins further.</li>
            <li><strong>Time Poverty:</strong> The founder spends 80% of time on operational fires, 20% on strategic work. The ratio should be inverted.</li>
          </ul>

          <p>This is why founders at $2-3M spend their entire day talking about the work instead of doing the work.</p>

          {/* WARNING BOX */}
          <div className="not-prose my-8 p-6 bg-brand-black text-white border border-brand-neutral-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <AlertTriangle className="w-24 h-24" />
            </div>
            <h4 className="text-brand-red font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Pitfall: The COO Mirage
            </h4>
            <p className="text-brand-neutral-300 text-sm mb-4 max-w-lg relative z-10">
              Hiring a COO into a structurally broken system accelerates margin compression. A $250K/year executive can't fix a model problem—they just become an expensive layer of management. <strong>Fix the model, then hire leadership.</strong>
            </p>
            <div className="text-xs text-brand-neutral-500">
              Pattern observed in 73% of agencies that hit plateau and hired ops leadership first.
            </div>
          </div>

          {/* SECTION 4: HITL */}
          <div className="my-16"></div>
          <h2 id="hitl" className="text-3xl border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8 scroll-mt-24">
            AI + Human-in-the-Loop: The New Gold Standard
          </h2>

          <p>Pure automation is brittle. Pure human execution is slow and expensive. The <strong>Human-in-the-Loop (HITL)</strong> model solves both.</p>

          {/* DEFINITION BLOCK */}
          <div className="not-prose my-8 border-l-4 border-brand-red pl-6 py-2">
            <span className="block text-xs font-bold uppercase tracking-widest text-brand-neutral-500 mb-1">Definition</span>
            <p className="text-xl md:text-2xl font-medium text-brand-black dark:text-white leading-tight">
              Human-in-the-Loop (HITL)
            </p>
            <p className="text-brand-neutral-600 dark:text-brand-neutral-400 mt-2">
              An operational model where AI systems produce first drafts, research, and analysis, while humans provide final judgment, strategic direction, and quality verification. The human doesn't do the work—they approve the work.
            </p>
          </div>

          {/* 2-COL GRID: Why It Works */}
          <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="p-6 bg-brand-neutral-50 dark:bg-brand-neutral-900 border border-brand-neutral-200 dark:border-brand-neutral-800">
              <h4 className="font-bold uppercase mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-brand-neutral-400" /> AI Strengths
              </h4>
              <ul className="space-y-2 text-sm text-brand-neutral-600 dark:text-brand-neutral-400">
                <li className="flex gap-2"><Check className="w-4 h-4 text-brand-neutral-400" /> Speed: Instant processing</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-brand-neutral-400" /> Consistency: Same quality at 2am as 2pm</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-brand-neutral-400" /> Pattern Recognition: Spots trends in data</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-brand-neutral-400" /> Tireless Execution: No burnout, no sick days</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-brand-neutral-400" /> Scalability: 100x capacity at same cost</li>
              </ul>
            </div>
            <div className="p-6 bg-brand-white dark:bg-brand-black border-2 border-brand-red/30 relative">
              <div className="absolute top-0 right-0 w-2 h-2 bg-brand-red"></div>
              <h4 className="font-bold uppercase mb-4 flex items-center gap-2 text-brand-red">
                <Brain className="w-4 h-4" /> Human Strengths
              </h4>
              <ul className="space-y-2 text-sm text-brand-black dark:text-white">
                <li className="flex gap-2"><Check className="w-4 h-4 text-brand-red" /> Strategic Judgment: Context and nuance</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-brand-red" /> Empathy & Taste: Understanding clients</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-brand-red" /> Contextual Awareness: Reading between lines</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-brand-red" /> Relationship Building: Trust and rapport</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-brand-red" /> High-Stakes Decisions: When it matters</li>
              </ul>
            </div>
          </div>

          <p className="font-bold text-xl text-brand-black dark:text-white">
            Combine them, and you get a superteam. AI provides the draft. Human provides the judgment. Output: 10x with half the time.
          </p>

          <h3>Example: Content Agency Workflow</h3>
          <p>How a 4-hour content creation task becomes 30 minutes—with higher quality.</p>

          {/* PROCESS FLOW */}
          <div className="not-prose flex flex-col gap-4 my-8">
            {[
              { num: "01", text: "Client drops a topic or brief", time: "5 min", icon: Target, color: "text-brand-neutral-500" },
              { num: "02", text: "AI researches competitors, generates outline", time: "2 min", icon: Database, color: "text-brand-neutral-500" },
              { num: "03", text: "AI writes first draft with brand voice", time: "3 min", icon: Zap, color: "text-brand-neutral-500" },
              { num: "04", text: "Human reviews, refines, approves", time: "15 min", icon: UserCheck, color: "text-brand-red" },
              { num: "05", text: "AI formats, schedules, distributes", time: "5 min", icon: Check, color: "text-brand-neutral-500" }
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-4 p-4 border border-brand-neutral-200 dark:border-brand-neutral-800 relative group hover:border-brand-red/50 transition-colors">
                <div className="w-8 h-8 flex items-center justify-center bg-brand-neutral-100 dark:bg-brand-neutral-900 text-brand-red font-bold text-xs">
                  {step.num}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm flex items-center gap-2">
                    <step.icon className={`w-4 h-4 ${step.color}`} />
                    {step.text}
                  </div>
                </div>
                <div className="text-xs text-brand-neutral-500 font-mono">
                  {step.time}
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between p-4 bg-brand-red/10 border border-brand-red/30">
              <span className="font-bold text-brand-black dark:text-white">Total Time</span>
              <span className="font-bold text-brand-red">30 minutes</span>
            </div>
          </div>

          <p className="text-sm text-brand-neutral-500 italic">
            Traditional method: 4 hours. HITL method: 30 minutes. Same quality. 8x faster.
          </p>

          {/* DECISION FRAMEWORK */}
          <div className="not-prose my-8 p-6 bg-brand-neutral-50 dark:bg-brand-neutral-900 border-l-4 border-brand-neutral-300 dark:border-brand-neutral-700">
            <h4 className="font-bold text-sm uppercase mb-4 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-brand-red" /> Framework: Automate, Augment, or Human-Only?
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3"><span className="w-3 h-3 bg-green-500 rounded-full"></span> <strong>Automate:</strong> Repetitive, rule-based tasks (data entry, formatting, scheduling)</li>
              <li className="flex items-center gap-3"><span className="w-3 h-3 bg-yellow-500 rounded-full"></span> <strong>Augment:</strong> Creative or analytical tasks requiring taste (writing, design feedback, strategy)</li>
              <li className="flex items-center gap-3"><span className="w-3 h-3 bg-brand-red rounded-full"></span> <strong>Human-Only:</strong> High-stakes judgment, relationship moments, crisis management</li>
            </ul>
          </div>

          {/* SECTION 5: EXPONENT MODEL */}
          <div className="my-16"></div>
          <h2 id="exponent-model" className="text-3xl border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8 scroll-mt-24">
            Implementing the ExponentOS Model
          </h2>

          <p>ExponentOS treats your business like software—modular, testable, scalable:</p>
          <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <div className="text-center p-6 bg-brand-neutral-50 dark:bg-brand-neutral-900 rounded-sm">
              <div className="font-mono text-xs text-brand-neutral-500 mb-2">Layer 1</div>
              <div className="font-bold">SOPs & Playbooks</div>
              <div className="text-brand-red text-xs mt-2">= Source Code</div>
            </div>
            <div className="text-center p-6 bg-brand-neutral-50 dark:bg-brand-neutral-900 rounded-sm">
              <div className="font-mono text-xs text-brand-neutral-500 mb-2">Layer 2</div>
              <div className="font-bold">AI Agents</div>
              <div className="text-brand-red text-xs mt-2">= Functions</div>
            </div>
            <div className="text-center p-6 bg-brand-neutral-50 dark:bg-brand-neutral-900 rounded-sm">
              <div className="font-mono text-xs text-brand-neutral-500 mb-2">Layer 3</div>
              <div className="font-bold">Humans</div>
              <div className="text-brand-red text-xs mt-2">= Architects</div>
            </div>
          </div>

          <h3>The Three Pillars of ExponentOS</h3>

          <div className="not-prose space-y-4 my-8">
            {[
              {
                num: "01",
                title: "Digitized Knowledge",
                desc: "Your company's expertise lives in documented SOPs, playbooks, and knowledge bases—not in people's heads. When a team member leaves, the knowledge stays.",
                icon: Database
              },
              {
                num: "02",
                title: "Modular AI Agents",
                desc: "Dedicated AI agents handle discrete functions: content drafting, research, data analysis, reporting, inbox management. Each agent has a specific job and can be improved independently.",
                icon: Cpu
              },
              {
                num: "03",
                title: "The Control Tower",
                desc: "A central dashboard gives humans oversight of all AI activities. Approve, reject, or refine any output. Full visibility, full control.",
                icon: Layout
              }
            ].map((pillar, i) => (
              <div key={i} className="flex gap-4 p-6 border border-brand-neutral-200 dark:border-brand-neutral-800 hover:border-brand-red/50 transition-colors">
                <div className="w-12 h-12 flex items-center justify-center bg-brand-red/10 shrink-0">
                  <pillar.icon className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-brand-neutral-400">{pillar.num}</span>
                    <h4 className="font-bold text-brand-black dark:text-white">{pillar.title}</h4>
                  </div>
                  <p className="text-sm text-brand-neutral-600 dark:text-brand-neutral-400">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SECTION 6: TECH STACK */}
          <div className="my-16"></div>
          <h2 id="tech-stack" className="text-3xl border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8 scroll-mt-24">
            The 4-Layer AI Tech Stack
          </h2>

          <p>Think of your AI infrastructure like a high-performance machine. Each layer serves a specific purpose.</p>

          <div className="not-prose my-8 space-y-2">
            {[
              { num: 1, name: "Intelligence Layer (LLMs)", tools: "GPT-4, Claude, Gemini", desc: "The 'brain' that understands and generates", icon: Cpu },
              { num: 2, name: "Orchestration Layer", tools: "Zapier, Make, n8n", desc: "Logic that connects systems and triggers workflows", icon: Layers },
              { num: 3, name: "Knowledge Layer", tools: "Airtable, Pinecone, Notion", desc: "Context and memory for AI agents", icon: Database },
              { num: 4, name: "Interface Layer", tools: "Slack, Email, Client Portals", desc: "Where humans interact with AI outputs", icon: Layout }
            ].map((layer, i) => (
              <div key={i} className="flex items-start gap-4 p-4 border border-brand-neutral-200 dark:border-brand-neutral-800 bg-white dark:bg-brand-black hover:border-brand-red/50 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center bg-brand-neutral-100 dark:bg-brand-neutral-900 text-brand-red font-bold shrink-0">
                  {layer.num}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm flex items-center gap-2 mb-1">
                    <layer.icon className="w-4 h-4 text-brand-red" />
                    {layer.name}
                  </div>
                  <div className="text-xs text-brand-neutral-500 mb-1">{layer.desc}</div>
                  <div className="text-xs text-brand-neutral-400 font-mono">{layer.tools}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-brand-neutral-500 italic">
            Pro tip: Start with Zapier/Make for orchestration—it's easier than explaining a task to an intern for the fourth time.
          </p>

          {/* SECTION 7: TEAM RESISTANCE */}
          <div className="my-16"></div>
          <h2 id="team-resistance" className="text-3xl border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8 scroll-mt-24">
            Overcoming Team Resistance
          </h2>

          <p>Technology doesn't fail adoption. Culture does. The biggest obstacle isn't the AI—it's the humans who fear being replaced.</p>

          <h3>Shift to the "Pilot Mindset"</h3>
          <p>Employees aren't engines doing grunt work. They're pilots of AI systems. Their job evolves from "doing the task" to "directing the AI that does the task."</p>

          <div className="not-prose my-8 p-6 border-l-4 border-brand-red bg-brand-neutral-50 dark:bg-brand-neutral-900">
            <h4 className="font-bold text-sm uppercase mb-4 flex items-center gap-2">
              <Users className="w-4 h-4 text-brand-red" /> 5-Step Team Buy-In Protocol
            </h4>
            <ul className="space-y-3">
              {[
                "Frame AI as 'copilot' that removes drudgery—not a replacement.",
                "Start with a visible win: automate the task everyone hates most.",
                "Train teams on prompt engineering (4-hour investment).",
                "Tie margin improvements to bonus pools—share the gains.",
                "Celebrate pilots who find new AI applications."
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-6 h-6 flex items-center justify-center bg-brand-red text-white text-xs font-bold shrink-0">{i + 1}</span>
                  <span className="text-sm text-brand-neutral-700 dark:text-brand-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="font-bold">When people see AI gives them time for creative work instead of data entry, resistance dissolves.</p>

          {/* SECTION 8: METRICS */}
          <div className="my-16"></div>
          <h2 id="metrics" className="text-3xl border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8 scroll-mt-24">
            The New Metrics of Service Firms
          </h2>
          <p>Old agencies track utilization. Modern firms track leverage.</p>

          {/* METRICS GRID */}
          <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            {[
              { label: "Revenue Per Employee", val: "$350k+", sub: "vs. $150k industry average", icon: DollarSign },
              { label: "Gross Margin", val: "50-60%", sub: "vs. 15-25% traditional", icon: TrendingUp },
              { label: "Time-to-First-Draft", val: "<10 Min", sub: "vs. 2-4 hours traditional", icon: Timer },
              { label: "Correction Loops", val: "<1.5", sub: "Revisions per deliverable", icon: BarChart3 },
            ].map((m, i) => (
              <div key={i} className="p-6 border border-brand-neutral-200 dark:border-brand-neutral-800 flex flex-col justify-between hover:border-brand-red/50 transition-colors group">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-brand-neutral-500">{m.label}</span>
                  <m.icon className="w-4 h-4 text-brand-neutral-400 group-hover:text-brand-red transition-colors" />
                </div>
                <div>
                  <span className="block text-3xl font-bold text-brand-black dark:text-white">{m.val}</span>
                  <span className="text-xs text-brand-neutral-400">{m.sub}</span>
                </div>
              </div>
            ))}
          </div>

          <p>These metrics tell the real story: AI-augmented teams do more with fewer people—and make more money doing it.</p>

          {/* SECTION 9: IMPLEMENTATION */}
          <div className="my-16"></div>
          <h2 id="implementation" className="text-3xl border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8 scroll-mt-24">
            90-Day Implementation Roadmap
          </h2>

          <p>Here's the exact path agencies follow to implement ExponentOS:</p>

          <div className="not-prose my-8 space-y-4">
            {[
              {
                phase: "Phase 1: Foundation",
                days: "Days 1-30",
                tasks: [
                  "Document top 5 time-consuming workflows",
                  "Identify automate vs. augment vs. human-only tasks",
                  "Select initial AI stack (LLM + orchestration)",
                  "Train 'AI Champions' (2-3 early adopters)"
                ]
              },
              {
                phase: "Phase 2: Pilot",
                days: "Days 31-60",
                tasks: [
                  "Deploy first 2-3 AI agents (content, research, reporting)",
                  "Measure time savings per task",
                  "Refine prompts and workflows based on output quality",
                  "Expand to additional team members"
                ]
              },
              {
                phase: "Phase 3: Scale",
                days: "Days 61-90",
                tasks: [
                  "Roll out to full team with training program",
                  "Add advanced agents (finance, client comms, analytics)",
                  "Implement Control Tower dashboard",
                  "Establish ongoing optimization cadence"
                ]
              }
            ].map((phase, i) => (
              <div key={i} className="border border-brand-neutral-200 dark:border-brand-neutral-800 overflow-hidden">
                <div className="flex items-center justify-between p-4 bg-brand-neutral-50 dark:bg-brand-neutral-900 border-b border-brand-neutral-200 dark:border-brand-neutral-800">
                  <h4 className="font-bold text-brand-black dark:text-white">{phase.phase}</h4>
                  <span className="text-xs font-mono text-brand-red">{phase.days}</span>
                </div>
                <ul className="p-4 space-y-2">
                  {phase.tasks.map((task, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-brand-neutral-600 dark:text-brand-neutral-400">
                      <Check className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* SECTION 10: CASE STUDIES */}
          <div className="my-16"></div>
          <h2 id="case-studies" className="text-3xl border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8 scroll-mt-24">
            Real-World Case Studies
          </h2>

          <div className="not-prose space-y-8 my-8">
            {/* Case Study 1 */}
            <div className="bg-white dark:bg-brand-black border border-brand-neutral-200 dark:border-brand-neutral-800 p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-red"></div>
              <div className="flex items-center gap-2 mb-4">
                <Building className="w-4 h-4 text-brand-red" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-red">Case Study #1</span>
              </div>
              <h3 className="text-xl font-bold text-brand-black dark:text-white mb-2">Marketing Agency: Content Bottleneck</h3>
              <p className="text-sm text-brand-neutral-600 dark:text-brand-neutral-400 mb-6">
                A 12-person marketing agency was spending 80+ hours/week on content creation across 8 clients. Quality was inconsistent, and the founder reviewed every piece personally.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-brand-neutral-50 dark:bg-brand-neutral-900">
                  <span className="block text-[10px] uppercase text-brand-neutral-500 mb-1">Before</span>
                  <span className="block font-bold text-lg text-brand-neutral-400 line-through">80 hrs/week</span>
                  <span className="block text-xs text-brand-neutral-500">On content creation</span>
                </div>
                <div className="p-4 bg-brand-red/10 border border-brand-red/30">
                  <span className="block text-[10px] uppercase text-brand-red mb-1">After</span>
                  <span className="block font-bold text-lg text-brand-black dark:text-white">22 hrs/week</span>
                  <span className="block text-xs text-brand-neutral-500">72% reduction</span>
                </div>
              </div>
              <p className="text-xs text-brand-neutral-500 italic">Revenue increased 35% in 6 months with no new hires.</p>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white dark:bg-brand-black border border-brand-neutral-200 dark:border-brand-neutral-800 p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-red"></div>
              <div className="flex items-center gap-2 mb-4">
                <Building className="w-4 h-4 text-brand-red" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-red">Case Study #2</span>
              </div>
              <h3 className="text-xl font-bold text-brand-black dark:text-white mb-2">Legal Services: Onboarding Backlog</h3>
              <p className="text-sm text-brand-neutral-600 dark:text-brand-neutral-400 mb-6">
                A legal services company struggled with a 3-week client onboarding backlog. Manual document review and CRM data entry consumed 40% of paralegal time.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-brand-neutral-50 dark:bg-brand-neutral-900">
                  <span className="block text-[10px] uppercase text-brand-neutral-500 mb-1">Before</span>
                  <span className="block font-bold text-lg text-brand-neutral-400 line-through">21 days</span>
                  <span className="block text-xs text-brand-neutral-500">Average onboarding time</span>
                </div>
                <div className="p-4 bg-brand-red/10 border border-brand-red/30">
                  <span className="block text-[10px] uppercase text-brand-red mb-1">After</span>
                  <span className="block font-bold text-lg text-brand-black dark:text-white">4 hours</span>
                  <span className="block text-xs text-brand-neutral-500">99% reduction</span>
                </div>
              </div>
              <p className="text-xs text-brand-neutral-500 italic">No jobs lost—paralegals now focus on client strategy instead of data entry.</p>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white dark:bg-brand-black border border-brand-neutral-200 dark:border-brand-neutral-800 p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-red"></div>
              <div className="flex items-center gap-2 mb-4">
                <Building className="w-4 h-4 text-brand-red" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-red">Case Study #3</span>
              </div>
              <h3 className="text-xl font-bold text-brand-black dark:text-white mb-2">Consulting Firm: Founder Bottleneck</h3>
              <p className="text-sm text-brand-neutral-600 dark:text-brand-neutral-400 mb-6">
                A solo consultant at $400K wanted to scale but couldn't—every client interaction required their direct involvement. They were trading time for money.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-brand-neutral-50 dark:bg-brand-neutral-900">
                  <span className="block text-[10px] uppercase text-brand-neutral-500 mb-1">Before</span>
                  <span className="block font-bold text-lg text-brand-neutral-400 line-through">$400K/year</span>
                  <span className="block text-xs text-brand-neutral-500">Solo, 60hr weeks</span>
                </div>
                <div className="p-4 bg-brand-red/10 border border-brand-red/30">
                  <span className="block text-[10px] uppercase text-brand-red mb-1">After</span>
                  <span className="block font-bold text-lg text-brand-black dark:text-white">$1.2M/year</span>
                  <span className="block text-xs text-brand-neutral-500">With 2 contractors, 40hr weeks</span>
                </div>
              </div>
              <p className="text-xs text-brand-neutral-500 italic">AI handles research, drafts, and scheduling. Human handles strategy and relationships.</p>
            </div>
          </div>

          {/* SECTION 11: FAQ */}
          <div className="my-16"></div>
          <h2 id="faq" className="text-3xl border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8 scroll-mt-24">
            Frequently Asked Questions
          </h2>

          <div className="not-prose space-y-6 my-8">
            {FAQ_DATA.map((faq, i) => (
              <div key={i} className="border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-6 last:border-0">
                <h3 className="font-bold text-brand-black dark:text-white mb-3 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-sm text-brand-neutral-600 dark:text-brand-neutral-400 leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* CONCLUSION */}
          <div className="my-16"></div>
          <h2 className="text-3xl border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8">
            Conclusion: The Rise of the Sovereign Operator
          </h2>

          <p>
            The firms that win the next decade will not be the largest. They will be the leanest, smartest, most systemized. The agencies that cling to "hire more people" will watch their margins erode while AI-augmented competitors capture the market.
          </p>

          <p className="font-bold text-xl text-brand-black dark:text-white">
            Your job is to stop managing people and start architecting intelligence.
          </p>

          <div className="not-prose my-12 p-8 bg-brand-neutral-50 dark:bg-brand-neutral-900 border border-brand-neutral-200 dark:border-brand-neutral-800">
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-black dark:text-white mb-6 flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-red" /> The Operational Sovereignty Checklist
            </h4>
            <ul className="grid grid-cols-1 gap-3">
              {[
                "Break the link between revenue and headcount",
                "Use AI for drafts and execution, humans for judgment and strategy",
                "Centralize knowledge in systems, not heads",
                "Track leverage metrics, not utilization",
                "Build modular systems, not dependent silos",
                "Start with one workflow, prove ROI, then expand",
                "Treat team resistance as a change management challenge, not a blocker"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-brand-neutral-600 dark:text-brand-neutral-300">
                  <div className="w-4 h-4 rounded-full border border-brand-red flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="mt-20 p-10 md:p-16 border border-brand-neutral-200 dark:border-brand-neutral-800 bg-brand-neutral-50 dark:bg-brand-neutral-900/50 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-red/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Network className="w-5 h-5 text-brand-red" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-neutral-500">Next Step</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-black dark:text-white mb-6 uppercase tracking-tight">
              Build Your ExponentOS
            </h3>
            <p className="text-lg text-brand-neutral-600 dark:text-brand-neutral-400 mb-10 max-w-xl mx-auto leading-relaxed">
              We're opening spots for our AI Operations Audit—a deep dive where we identify exactly where AI can double your capacity and compress delivery times. If you're ready to scale without growing headcount, this is your next move.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                className="shadow-xl hover:shadow-2xl transition-all"
                onClick={() => window.open(SITE_CONFIG.ctaLink, '_blank')}
              >
                Book an AI Operations Audit <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <span className="text-sm text-brand-neutral-500">30-day money-back guarantee</span>
            </div>
          </div>
        </div>

      </article>
    </div>
  );
};
