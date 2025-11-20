import React from 'react';
import { Section } from '../ui/Section';
import { Cpu, Crosshair, Shield, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const SystemArchitecture: React.FC = () => {
  const steps = [
    {
      icon: Cpu,
      id: "01",
      title: "The AI Core",
      role: "Autonomous Processing",
      desc: "Raw ingestion and synthesis. 95% of the heavy lifting—transcription, pattern matching, and first-draft generation—happens in milliseconds. No fatigue. No error.",
    },
    {
      icon: Crosshair,
      id: "02",
      title: "The Operator",
      role: "Tactical Execution",
      desc: "Human-in-the-loop validation. Specialized experts review the AI output, injecting nuance, verifying context, and polishing for final delivery. The hands that do the work.",
    },
    {
      icon: Shield,
      id: "03",
      title: "The Pod Lead",
      role: "Strategic Oversight",
      desc: "Your single point of truth. They hold the strategy, manage the operators, and guarantee quality. You speak to one person; they command the army.",
    }
  ];

  return (
    <Section className="bg-white dark:bg-brand-black border-b border-brand-neutral-200 dark:border-brand-neutral-900 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20 max-w-3xl">
           <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-brand-red animate-pulse"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-neutral-500">System Architecture</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-bold text-brand-black dark:text-white mb-6 tracking-tighter uppercase leading-[0.9]">
             The <span className="text-brand-red">Tri-Brid</span> Protocol
           </h2>
           <p className="text-brand-neutral-600 dark:text-brand-neutral-400 text-lg">
             A resilient, three-layer stack designed to eliminate failure points. We combine brute-force compute with elite human judgment.
           </p>
        </div>

        {/* The Diagram */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
           
           {/* Connecting Line (Desktop Only) */}
           <div className="hidden lg:block absolute top-12 left-[16%] right-[16%] h-px bg-brand-neutral-200 dark:bg-brand-neutral-800 -z-10">
              <div className="absolute top-0 left-0 w-full h-full bg-brand-neutral-300 dark:bg-brand-neutral-700 origin-left animate-pulse scale-x-0 lg:group-hover:scale-x-100 transition-transform duration-1000"></div>
           </div>

           {steps.map((step, idx) => {
             return (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.2 }}
                 className="group relative flex flex-col bg-brand-neutral-50 dark:bg-brand-neutral-950 border border-brand-neutral-200 dark:border-brand-neutral-800 p-6 md:p-8 hover:border-brand-red/50 transition-colors duration-300"
               >
                  {/* Step Number (Background) */}
                  <div className="absolute top-2 right-4 text-6xl font-bold text-brand-neutral-200 dark:text-brand-neutral-900 opacity-50 pointer-events-none select-none">
                    {step.id}
                  </div>

                  {/* Icon Container */}
                  <div className="w-24 h-24 mb-8 flex items-center justify-center bg-white dark:bg-brand-black border border-brand-neutral-200 dark:border-brand-neutral-800 group-hover:border-brand-red transition-colors duration-300 relative">
                    <step.icon className="w-10 h-10 text-brand-black dark:text-white stroke-[1.5] group-hover:text-brand-red transition-colors duration-300" />
                    
                    {/* Connectors for Mobile */}
                    {idx !== steps.length - 1 && (
                      <div className="lg:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 text-brand-neutral-300 dark:text-brand-neutral-700 z-20">
                        <ChevronRight className="w-6 h-6 rotate-90" />
                      </div>
                    )}
                    {/* Connectors for Desktop Hover */}
                    {idx !== steps.length - 1 && (
                       <div className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-brand-black p-1 border border-brand-neutral-200 dark:border-brand-neutral-800 rounded-full">
                          <ChevronRight className="w-4 h-4 text-brand-neutral-400" />
                       </div>
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-red mb-2 block">
                      {step.role}
                    </span>
                    <h3 className="text-2xl font-bold text-brand-black dark:text-white mb-4 uppercase tracking-wide">
                      {step.title}
                    </h3>
                    <div className="w-8 h-px bg-brand-neutral-300 dark:bg-brand-neutral-700 mb-4 group-hover:w-16 group-hover:bg-brand-red transition-all duration-300"></div>
                    <p className="text-sm text-brand-neutral-600 dark:text-brand-neutral-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
               </motion.div>
             );
           })}
        </div>
      </div>
    </Section>
  );
};