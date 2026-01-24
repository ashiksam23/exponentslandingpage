
import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, BarChart3, Users, Zap, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

interface CaseStudiesProps {
  onNavigate: (page: 'home' | 'blueprint' | 'casestudies') => void;
}

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  description: string;
  results: { label: string; value: string }[];
  tags: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    client: "TechFlow Agency",
    industry: "Digital Marketing",
    title: "Scaling from $2M to $5M without adding headcount",
    description: "How a digital marketing agency implemented ExponentOS to automate 80% of their reporting and client onboarding workflows, allowing them to double their client roster with the same team.",
    results: [
      { label: "Revenue Increase", value: "150%" },
      { label: "Hours Saved/Wk", value: "120+" },
      { label: "Margin Growth", value: "24%" }
    ],
    tags: ["Automation", "Client Onboarding", "Reporting"]
  },
  {
    id: '2',
    client: "Nexus Legal",
    industry: "Legal Services",
    title: "Reducing case processing time from 3 weeks to 4 hours",
    description: "By deploying AI agents to handle document analysis and initial case drafting, Nexus Legal removed their biggest bottleneck and improved client satisfaction scores significantly.",
    results: [
      { label: "Speed Improvement", value: "98%" },
      { label: "Cost Reduction", value: "65%" },
      { label: "Error Rate", value: "<1%" }
    ],
    tags: ["Document Processing", "Legal Tech", "AI Agents"]
  },
  {
    id: '3',
    client: "Stratosphere Consulting",
    industry: "Management Consulting",
    title: "Building a specialized expert knowledge retrieval system",
    description: "Stratosphere used ExponentOS to turn their 20 years of proprietary methodologies into an interactive AI knowledge base, enabling junior consultants to perform at a senior level.",
    results: [
      { label: "Onboarding Time", value: "-4 Weeks" },
      { label: "Project Velocity", value: "2x" },
      { label: "Knowledge Reuse", value: "100%" }
    ],
    tags: ["Knowledge Management", "RAG", "Training"]
  }
];

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onNavigate }) => {
  // SEO Injection
  useEffect(() => {
    document.title = "Case Studies | ExponentOS";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-brand-black transition-colors duration-300 min-h-screen font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* --- HEADER --- */}
        <div className="mb-16 border-b border-brand-neutral-200 dark:border-brand-neutral-800 pb-12">
          <button 
            onClick={() => onNavigate('home')}
            className="group inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand-neutral-500 hover:text-brand-red transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Return to Command Center
          </button>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="block text-brand-red font-bold uppercase tracking-widest text-sm mb-4">Success Stories</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-brand-black dark:text-white leading-[0.95] tracking-tighter mb-8 uppercase">
              Proven <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red/60">Results</span>
            </h1>

            <p className="text-xl md:text-2xl text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed font-light max-w-2xl">
              Real-world examples of how operational sovereignty transforms service businesses.
            </p>
          </motion.div>
        </div>

        {/* --- CASE STUDIES GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {CASE_STUDIES.map((study, index) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-brand-neutral-50 dark:bg-brand-neutral-900 border border-brand-neutral-200 dark:border-brand-neutral-800 p-8 hover:border-brand-red/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Building2 className="w-24 h-24 text-brand-black dark:text-white" />
              </div>

              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-3 mb-6">
                   <div className="px-3 py-1 bg-brand-black dark:bg-white text-white dark:text-brand-black text-[10px] uppercase font-bold tracking-widest">
                     {study.industry}
                   </div>
                   <span className="text-xs font-mono text-brand-neutral-500">{study.client}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-brand-black dark:text-white mb-4 leading-tight group-hover:text-brand-red transition-colors">
                  {study.title}
                </h3>

                <p className="text-brand-neutral-600 dark:text-brand-neutral-400 mb-8 leading-relaxed">
                  {study.description}
                </p>

                {/* Results Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8 border-t border-brand-neutral-200 dark:border-brand-neutral-800 pt-6">
                  {study.results.map((result, i) => (
                    <div key={i}>
                      <span className="block text-xl md:text-2xl font-bold text-brand-black dark:text-white mb-1">{result.value}</span>
                      <span className="text-[10px] uppercase tracking-widest text-brand-neutral-500">{result.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-auto flex items-center justify-between border-t border-brand-neutral-200 dark:border-brand-neutral-800 pt-6">
                 <div className="flex flex-wrap gap-2">
                   {study.tags.map(tag => (
                     <span key={tag} className="text-[10px] text-brand-neutral-500">#{tag}</span>
                   ))}
                 </div>
                 {/* Placeholder for "Read More" if we had full pages, for now just a visual indicator */}
                 <div className="text-brand-red opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                    <ArrowRight className="w-5 h-5" />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="text-center bg-brand-black text-white p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-red/10 pattern-grid-lg opacity-20"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">Ready to write your success story?</h2>
             <p className="text-brand-neutral-400 text-lg mb-10">
               Join the ranks of high-leverage firms. Stop trading time for money. Start building equity in systems.
             </p>
             <Button 
               variant="primary"
               size="lg"
               className="bg-brand-red text-white hover:bg-brand-red/90 border-none"
             >
               Apply for Audit
             </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
