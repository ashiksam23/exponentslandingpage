
import React, { useEffect } from 'react';
import { Button } from '../ui/Button';
import { SITE_CONFIG } from '../../constants';
import { ArrowLeft, Clock, Calendar, Check, AlertTriangle, ArrowRight, Zap, Target, Layers, Users, HelpCircle, Database, Cpu, Layout } from 'lucide-react';

interface BlogPostProps {
  onNavigate: (page: 'home' | 'blueprint') => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({ onNavigate }) => {
  
  // SEO Injection
  useEffect(() => {
    document.title = "The Operational Sovereignty Blueprint | ExponentOS";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Stuck at $3M? Discover the ExponentOS model and learn how to decouple revenue from headcount using AI-augmented operations and human-in-the-loop workflows.");
    }
    window.scrollTo(0, 0);
    return () => {
      document.title = "ExponentOS | The Leverage Operating System for Founders";
    };
  }, []);

  // Structured Data (JSON-LD)
  const structuredData = {
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
    "dateModified": "2025-05-22",
    "description": "Stuck at $3M? Discover the ExponentOS model and learn how to decouple revenue from headcount using AI-augmented operations and human-in-the-loop workflows."
  };

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-brand-black transition-colors duration-300 min-h-screen font-sans">
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

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
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> May 22, 2025</span>
            <span className="w-px h-3 bg-brand-neutral-300 dark:bg-brand-neutral-700"></span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 8 Min Intelligence Brief</span>
            <span className="w-px h-3 bg-brand-neutral-300 dark:bg-brand-neutral-700"></span>
            <span className="px-2 py-1 bg-brand-red/10 text-brand-red font-bold rounded-sm">Protocol: Blueprint</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-brand-black dark:text-white leading-[0.95] tracking-tighter mb-8 uppercase">
            The Operational <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red/60">Sovereignty Blueprint</span>
          </h1>

          <p className="text-xl md:text-2xl text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed font-light max-w-2xl">
            How to decouple revenue from headcount using AI-augmented operations and human-in-the-loop workflows.
          </p>
        </div>

        {/* --- EXECUTIVE SUMMARY (TL;DR) --- */}
        <div className="mb-16 bg-brand-neutral-50 dark:bg-brand-neutral-900/30 border-l-4 border-brand-red p-8">
           <div className="flex items-center gap-2 mb-6">
             <Zap className="w-4 h-4 text-brand-red fill-current" />
             <h3 className="text-xs font-bold uppercase tracking-widest text-brand-neutral-500">Executive Summary (TL;DR)</h3>
           </div>
           <ul className="space-y-4">
              {[
                "Most agencies break at $3M because complexity grows faster than revenue.",
                "AI-Augmented Operations flips your company from a pyramid to a network.",
                "ExponentOS is the model that turns your agency into a scalable machine.",
                "The real metric: Revenue Per Employee (Target: $350k+).",
                "You don’t need more people—you need better systems."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-brand-black dark:text-white font-medium">
                  <Check className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
           </ul>
        </div>

        {/* --- BODY CONTENT START --- */}
        <div className="prose prose-lg dark:prose-invert max-w-none 
          prose-p:text-brand-neutral-600 dark:prose-p:text-brand-neutral-300 prose-p:leading-8
          prose-headings:font-bold prose-headings:tracking-tight prose-headings:uppercase prose-headings:text-brand-black dark:prose-headings:text-white
          prose-strong:text-brand-black dark:prose-strong:text-white prose-strong:font-bold
        ">

          {/* SECTION 1 */}
          <h2 className="text-3xl border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8">The "Slack Notification" Nightmare</h2>
          
          <p className="text-xl">Meet Alex.</p>
          <p>
            Alex runs a $2.5M marketing agency. On paper, things look great. In reality, Alex is drowning in Slack notifications, late-night emails, confused project threads, and urgent client escalations.
          </p>
          
          <div className="my-8 p-6 bg-brand-neutral-100 dark:bg-brand-neutral-900 rounded-sm">
             <p className="font-mono text-sm text-brand-red mb-2 uppercase tracking-widest">Incident Report</p>
             <p className="italic text-brand-black dark:text-white mb-0">
               "One night, Alex stares at 47 unread mentions. Three account managers are arguing about a brief. A designer quit citing burnout. A client wants to know why a report is late."
             </p>
          </div>

          <p className="font-bold text-xl text-brand-black dark:text-white">
            Alex isn’t a CEO. Alex is a firefighter in a burning building made of billable hours.
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
             <div className="bg-brand-red/10 border border-brand-red/30 p-4 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-red/5 animate-pulse"></div>
                <span className="text-xs font-bold uppercase text-brand-red relative z-10">Outcome</span>
                <div className="text-lg font-bold text-brand-red mt-1 relative z-10">Smaller Margins</div>
             </div>
          </div>

          <p>
             Eventually, managing people consumes more time than serving clients—and the founder becomes the bottleneck. AI changes this equation entirely.
             For the first time, service firms can reach Operational Sovereignty—scaling revenue without scaling headcount.
          </p>

          {/* SECTION 2 */}
          <div className="my-16"></div>
          <h2 className="text-3xl border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8">The Death of Traditional Org Charts</h2>

          <p>
            Traditional agencies rely on a pyramid: Junior staff at the base, middle managers supervising juniors, senior team supervising managers. This model works… until it doesn’t. Because pyramids scale linearly. And linear scaling collapses under the weight of communication.
          </p>

          {/* PULL QUOTE */}
          <div className="not-prose my-12 relative py-8">
             <div className="absolute top-0 left-0 w-16 h-1 bg-brand-red"></div>
             <h3 className="text-2xl md:text-4xl font-bold leading-tight text-brand-black dark:text-white">
               AI won’t replace agencies. <br/>
               <span className="text-brand-neutral-400">It will replace badly run agencies that scale by throwing juniors at problems.</span>
             </h3>
          </div>

          <h3>The Modern Model: The Network</h3>
          <p>
            Instead of a pyramid, AI-first firms adopt a <strong>Hub-and-Node</strong> structure: Humans at the center (judgment, taste, strategy) and AI Agents as execution nodes (research, drafts, analysis).
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
              { label: "Main Cost", old: "Salaries", new: "Compute & software" },
              { label: "QC Protocol", old: "Manual peer review", new: "Auto-check + Human Audit" },
              { label: "Speed", old: "Days", new: "Minutes" },
              { label: "Margins", old: "15–25%", new: "40–60%", highlight: true },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-b last:border-0 border-brand-neutral-200 dark:border-brand-neutral-800 text-sm">
                <div className="p-4 font-bold text-brand-black dark:text-white">{row.label}</div>
                <div className="p-4 text-brand-neutral-500">{row.old}</div>
                <div className={`p-4 font-medium ${row.highlight ? 'text-brand-red font-bold' : 'text-brand-black dark:text-white'}`}>{row.new}</div>
              </div>
            ))}
          </div>

          <p>Traditional org charts grow heavier. AI org charts grow lighter.</p>

          {/* SECTION 3 */}
          <div className="my-16"></div>
          <h2 className="text-3xl border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8">The Founder’s Trap ($1M–$3M)</h2>

          <p>
            The $3M ceiling is not a sales problem—it's a communication problem.
          </p>
          
          <h3>The Core Symptoms</h3>
          <ul className="list-disc pl-6 mb-8">
            <li>Only the founder can close high-ticket deals.</li>
            <li>Quality collapses when the founder steps away.</li>
            <li>Layers of managers are added to "fix" complexity, shrinking margins.</li>
          </ul>

          {/* VISUAL FORMULA */}
          <div className="not-prose my-8 flex items-center justify-center p-8 bg-brand-neutral-50 dark:bg-brand-neutral-900 border border-brand-neutral-200 dark:border-brand-neutral-800">
             <div className="text-center">
                <p className="font-mono text-xs uppercase tracking-widest text-brand-neutral-500 mb-2">Complexity Law</p>
                <p className="text-3xl font-bold font-serif italic">C = n(n-1)/2</p>
                <p className="text-sm mt-4 text-brand-neutral-400">10 employees = 45 lines. <br/> 50 employees = 1,225 lines.</p>
             </div>
          </div>
          <p>This is why founders spend their entire day talking about the work instead of doing the work.</p>

          {/* WARNING BOX */}
          <div className="not-prose my-8 p-6 bg-brand-black text-white border border-brand-neutral-800 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <AlertTriangle className="w-24 h-24" />
             </div>
             <h4 className="text-brand-red font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
               <AlertTriangle className="w-4 h-4" /> Pitfall: The COO Mirage
             </h4>
             <p className="text-brand-neutral-300 text-sm mb-0 max-w-lg relative z-10">
               Hiring a COO into a structurally broken system only accelerates margin compression. The problem is not leadership. The problem is linear operations. <strong>Fix the model, then hire leadership.</strong>
             </p>
          </div>

          {/* SECTION 4 */}
          <div className="my-16"></div>
          <h2 className="text-3xl border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8">AI + Human-in-the-Loop: The New Gold Standard</h2>
          
          <p>Pure automation is brittle. Pure human execution is slow. The HITL model solves both.</p>

          {/* DEFINITION BLOCK */}
          <div className="not-prose my-8 border-l-4 border-brand-red pl-6 py-2">
             <span className="block text-xs font-bold uppercase tracking-widest text-brand-neutral-500 mb-1">Definition</span>
             <p className="text-xl md:text-2xl font-medium text-brand-black dark:text-white leading-tight">
               Human-in-the-Loop (HITL)
             </p>
             <p className="text-brand-neutral-600 dark:text-brand-neutral-400 mt-2">
               When AI produces the first draft and humans provide final judgment, strategy, and nuance.
             </p>
          </div>

          {/* 2-COL GRID: Why It Works */}
          <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
             <div className="p-6 bg-brand-neutral-50 dark:bg-brand-neutral-900 border border-brand-neutral-200 dark:border-brand-neutral-800">
                <h4 className="font-bold uppercase mb-4 flex items-center gap-2">
                   <Zap className="w-4 h-4 text-brand-neutral-400" /> AI Strengths
                </h4>
                <ul className="space-y-2 text-sm text-brand-neutral-600 dark:text-brand-neutral-400">
                   <li className="flex gap-2"><Check className="w-4 h-4 text-brand-neutral-400" /> Speed (Instant)</li>
                   <li className="flex gap-2"><Check className="w-4 h-4 text-brand-neutral-400" /> Consistency</li>
                   <li className="flex gap-2"><Check className="w-4 h-4 text-brand-neutral-400" /> Pattern Recognition</li>
                   <li className="flex gap-2"><Check className="w-4 h-4 text-brand-neutral-400" /> Tireless Execution</li>
                </ul>
             </div>
             <div className="p-6 bg-brand-white dark:bg-brand-black border border-brand-red/30 relative">
                <div className="absolute top-0 right-0 w-2 h-2 bg-brand-red"></div>
                <h4 className="font-bold uppercase mb-4 flex items-center gap-2 text-brand-red">
                   <Target className="w-4 h-4" /> Human Strengths
                </h4>
                <ul className="space-y-2 text-sm text-brand-black dark:text-white">
                   <li className="flex gap-2"><Check className="w-4 h-4 text-brand-red" /> Strategic Judgment</li>
                   <li className="flex gap-2"><Check className="w-4 h-4 text-brand-red" /> Empathy & Taste</li>
                   <li className="flex gap-2"><Check className="w-4 h-4 text-brand-red" /> Contextual Awareness</li>
                   <li className="flex gap-2"><Check className="w-4 h-4 text-brand-red" /> High-Stakes Decision</li>
                </ul>
             </div>
          </div>
          <p>Combine them, and you get a superteam.</p>

          <h3>Example: Content Agency Workflow</h3>
          <p>A 4-hour task becomes a 30-minute task—with higher quality.</p>
          
          {/* PROCESS FLOW */}
          <div className="not-prose flex flex-col sm:flex-row gap-4 my-8">
             {[
               { num: "01", text: "Client drops a topic", icon: Target },
               { num: "02", text: "AI Agents research & draft", icon: Zap },
               { num: "03", text: "Editor refines & approves", icon: Check }
             ].map((step, i) => (
                <div key={i} className="flex-1 p-4 border border-brand-neutral-200 dark:border-brand-neutral-800 relative">
                   <div className="text-[10px] font-bold text-brand-neutral-400 mb-2">{step.num}</div>
                   <div className="font-bold text-sm flex items-center gap-2">
                     <step.icon className="w-4 h-4 text-brand-red" />
                     {step.text}
                   </div>
                   {i !== 2 && (
                     <div className="hidden sm:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10 bg-white dark:bg-brand-black">
                       <ArrowRight className="w-4 h-4 text-brand-neutral-300" />
                     </div>
                   )}
                </div>
             ))}
          </div>

          {/* DECISION FRAMEWORK */}
          <div className="not-prose my-8 p-6 bg-brand-neutral-50 dark:bg-brand-neutral-900 border-l-4 border-brand-neutral-300 dark:border-brand-neutral-700">
             <h4 className="font-bold text-sm uppercase mb-4">Framework: Automate or Augment?</h4>
             <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-brand-neutral-400 rounded-full"></span> Repetitive task → <strong>Automate</strong></li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-brand-neutral-400 rounded-full"></span> Requires taste or empathy → <strong>Augment</strong></li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-brand-neutral-400 rounded-full"></span> High-stakes judgment → <strong>Human only</strong></li>
             </ul>
          </div>

          {/* SECTION 5 */}
          <div className="my-16"></div>
          <h2 className="text-3xl border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8">Implementing the ExponentOS Model</h2>
          
          <p>ExponentOS treats your business like software:</p>
          <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
             <div className="text-center p-6 bg-brand-neutral-50 dark:bg-brand-neutral-900 rounded-sm">
                <div className="font-mono text-xs text-brand-neutral-500 mb-2">Input</div>
                <div className="font-bold">SOPs</div>
                <div className="text-brand-red text-xs mt-2">= Code</div>
             </div>
             <div className="text-center p-6 bg-brand-neutral-50 dark:bg-brand-neutral-900 rounded-sm">
                <div className="font-mono text-xs text-brand-neutral-500 mb-2">Mechanism</div>
                <div className="font-bold">AI Agents</div>
                <div className="text-brand-red text-xs mt-2">= Functions</div>
             </div>
             <div className="text-center p-6 bg-brand-neutral-50 dark:bg-brand-neutral-900 rounded-sm">
                <div className="font-mono text-xs text-brand-neutral-500 mb-2">Oversight</div>
                <div className="font-bold">Humans</div>
                <div className="text-brand-red text-xs mt-2">= Architects</div>
             </div>
          </div>

          {/* CASE STUDY BOX */}
          <div className="not-prose my-12 bg-white dark:bg-brand-black border border-brand-neutral-200 dark:border-brand-neutral-800 p-8 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-brand-red"></div>
             <h4 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-4">Real Story</h4>
             <h5 className="text-xl font-bold mb-2">The Legal Firm Bottleneck</h5>
             <p className="text-brand-neutral-600 dark:text-brand-neutral-400 text-sm mb-4 leading-relaxed">
               A legal services company struggled with a 3-week onboarding backlog. AI agents were deployed to read documents, extract clauses, and populate CRM systems.
             </p>
             <div className="flex gap-8 border-t border-brand-neutral-200 dark:border-brand-neutral-800 pt-4">
                <div>
                   <span className="block text-[10px] uppercase text-brand-neutral-500">Before</span>
                   <span className="font-bold text-lg text-brand-neutral-400 strike-through line-through">21 Days</span>
                </div>
                <div>
                   <span className="block text-[10px] uppercase text-brand-red">After</span>
                   <span className="font-bold text-lg text-brand-black dark:text-white">4 Hours</span>
                </div>
             </div>
             <p className="text-xs text-brand-neutral-500 mt-4 italic">No one lost jobs—people just stopped doing tedious data entry.</p>
          </div>

          <h3>The Three Pillars</h3>
          <p>ExponentOS isn’t automation—it’s augmentation at scale.</p>
          <ul className="list-decimal pl-6 mb-8">
            <li className="pl-2 mb-2"><strong>Digitized Knowledge:</strong> Centralizing brainpower.</li>
            <li className="pl-2 mb-2"><strong>Modular Agents:</strong> Dedicated functions for discrete tasks.</li>
            <li className="pl-2 mb-2"><strong>The Control Tower:</strong> Dashboard view for oversight.</li>
          </ul>

          {/* SECTION 6 */}
          <div className="my-16"></div>
          <h2 className="text-3xl border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8">The 4-Layer AI Tech Stack</h2>
          
          <p>Think of your company like a high-performance machine.</p>

          <div className="not-prose my-8 space-y-2">
            {[
              { num: 1, name: "LLMs (The Brain)", tools: "GPT-4, Claude, Gemini", icon: Cpu },
              { num: 2, name: "Orchestration (The Logic)", tools: "Zapier, Make", icon: Layers },
              { num: 3, name: "Knowledge Base (Context)", tools: "Airtable, Pinecone", icon: Database },
              { num: 4, name: "Interfaces (Human Touch)", tools: "Slack, Teams, Client Portals", icon: Layout }
            ].map((layer, i) => (
              <div key={i} className="flex items-center gap-4 p-4 border border-brand-neutral-200 dark:border-brand-neutral-800 bg-white dark:bg-brand-black">
                 <div className="w-8 h-8 flex items-center justify-center bg-brand-neutral-100 dark:bg-brand-neutral-900 text-brand-red font-bold rounded-sm">
                   {layer.num}
                 </div>
                 <div className="flex-1">
                   <div className="font-bold text-sm">{layer.name}</div>
                   <div className="text-xs text-brand-neutral-500">{layer.tools}</div>
                 </div>
                 <layer.icon className="w-5 h-5 text-brand-neutral-300" />
              </div>
            ))}
          </div>
          <p className="italic text-sm text-brand-neutral-500">
             Setting up a Zapier automation is still easier than explaining a task to an intern for the fourth time.
          </p>

          {/* SECTION 7 */}
          <div className="my-16"></div>
          <h2 className="text-3xl border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8">Overcoming Team Resistance</h2>
          
          <p>Tech doesn’t fail. Culture does. Employees fear being replaced.</p>
          
          <h3>Shift to the "Pilot Mindset"</h3>
          <p>Employees become pilots of AI systems—not engines doing grunt work.</p>

          <div className="not-prose my-8 p-6 border-l-4 border-brand-red bg-brand-neutral-50 dark:bg-brand-neutral-900">
             <h4 className="font-bold text-sm uppercase mb-4">How to Create Buy-In</h4>
             <ul className="space-y-3">
               <li className="flex gap-3">
                 <Check className="w-5 h-5 text-brand-red shrink-0" />
                 <span className="text-sm">Explain that AI removes drudgery, not jobs.</span>
               </li>
               <li className="flex gap-3">
                 <Check className="w-5 h-5 text-brand-red shrink-0" />
                 <span className="text-sm">Train teams to use prompts confidently.</span>
               </li>
               <li className="flex gap-3">
                 <Check className="w-5 h-5 text-brand-red shrink-0" />
                 <span className="text-sm">Tie margin improvements to bonus pools.</span>
               </li>
             </ul>
          </div>
          <p>When people see AI as leverage, not a threat, adoption accelerates.</p>

          {/* SECTION 8 */}
          <div className="my-16"></div>
          <h2 className="text-3xl border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8">The New Metrics of Service Firms</h2>
          <p>Old agencies track utilization. Modern firms track leverage.</p>

          {/* METRICS GRID */}
          <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
             {[
               { label: "Revenue Per Employee", val: "$350k+", sub: "Target Range" },
               { label: "Gross Margin", val: "60%+", sub: "Standard" },
               { label: "Time-to-First-Draft", val: "<10 Min", sub: "Speed" },
               { label: "Correction Loop Count", val: "<1.5", sub: "Quality Control" },
             ].map((m, i) => (
               <div key={i} className="p-6 border border-brand-neutral-200 dark:border-brand-neutral-800 flex flex-col justify-between hover:border-brand-red/50 transition-colors">
                  <span className="text-[10px] uppercase tracking-widest text-brand-neutral-500 mb-2">{m.label}</span>
                  <div>
                    <span className="block text-2xl font-bold text-brand-black dark:text-white">{m.val}</span>
                    <span className="text-[10px] text-brand-neutral-400">{m.sub}</span>
                  </div>
               </div>
             ))}
          </div>
          <p>Metrics tell the real story: AI-augmented teams do more with fewer people.</p>

          {/* SECTION 9 */}
          <div className="my-16"></div>
          <h2 className="text-3xl border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-4 mb-8">Conclusion: The Rise of the Sovereign Operator</h2>
          
          <p>
            The firms that win the next decade will not be the largest. They will be the leanest, smartest, most systemized. Your job is to stop managing people and start architecting intelligence.
          </p>

          <div className="not-prose my-12 p-8 bg-brand-neutral-50 dark:bg-brand-neutral-900 border border-brand-neutral-200 dark:border-brand-neutral-800">
             <h4 className="text-sm font-bold uppercase tracking-widest text-brand-black dark:text-white mb-6">The Shift Checklist</h4>
             <ul className="grid grid-cols-1 gap-3">
                {[
                  "Break the link between revenue and headcount",
                  "Use AI for drafts, humans for decisions",
                  "Centralize knowledge",
                  "Track leverage, not hours",
                  "Build systems, not silos"
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

          {/* MICRO FAQS */}
          <div className="not-prose mb-12">
            <h3 className="font-bold uppercase tracking-widest text-xs text-brand-neutral-500 mb-6 flex items-center gap-2">
              <HelpCircle className="w-4 h-4" /> Micro FAQs
            </h3>
            <div className="space-y-6">
              {[
                { q: "Does AI replace staff?", a: "It replaces staff who refuse to use AI. Everyone else becomes more valuable." },
                { q: "What’s the first step?", a: "Document your SOPs. AI cannot augment what it cannot understand." },
                { q: "How expensive is ExponentOS?", a: "Software is inexpensive. The real cost is mapping your processes." }
              ].map((faq, i) => (
                <div key={i} className="pl-4 border-l-2 border-brand-neutral-200 dark:border-brand-neutral-800">
                  <p className="font-bold text-sm text-brand-black dark:text-white mb-1">{faq.q}</p>
                  <p className="text-sm text-brand-neutral-500">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="mt-20 p-10 md:p-16 border border-brand-neutral-200 dark:border-brand-neutral-800 bg-brand-neutral-50 dark:bg-brand-neutral-900/50 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-brand-black dark:text-white mb-6 uppercase tracking-tight">
              Build Your ExponentOS
            </h3>
            <p className="text-lg text-brand-neutral-600 dark:text-brand-neutral-400 mb-10 max-w-xl mx-auto leading-relaxed">
               We’re opening a few spots for our AI Operations Audit, where we identify exactly where AI can double your capacity and compress delivery times. If you want to scale without growing headcount, this is your next move.
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              className="shadow-xl hover:shadow-2xl transition-all"
              onClick={() => window.location.href = SITE_CONFIG.ctaLink}
            >
               Book an AI Operations Audit <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

      </article>
    </div>
  );
};
