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
      desc: "Raw ingestion and synthesis. 95% of the heavy lifting—transcription, pattern matching, and first-draft generation—happens in milliseconds.",
    },
    {
      icon: Crosshair,
      id: "02",
      title: "The Operator",
      role: "Tactical Execution",
      desc: "Human-in-the-loop validation. Specialized experts review the AI output, injecting nuance, verifying context, and polishing for final delivery.",
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
      {/* Schematic Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#999 1px, transparent 1px), linear-gradient(90deg, #999 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="container mx-auto relative z-10">

        {/* Header */}
        <div className="mb-24 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-2 h-2 bg-brand-red animate-pulse"></span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-neutral-500">System Architecture</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-brand-black dark:text-white mb-6 tracking-[-0.05em] uppercase leading-[0.9]"
          >
            The <span className="text-brand-red">Tri-Brid</span> Protocol
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-neutral-600 dark:text-brand-neutral-400 text-lg sm:text-xl font-light max-w-2xl"
          >
            A resilient, three-layer stack designed to eliminate failure points. We combine brute-force compute with elite human judgment.
          </motion.p>
        </div>

        {/* The Diagram */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Desktop Data Pipe (Horizontal) */}
          <div className="hidden lg:block absolute top-[110px] left-0 w-full h-2 z-0">
            <div className="absolute top-1/2 left-[16%] right-[16%] h-[1px] bg-brand-neutral-200 dark:bg-brand-neutral-800 overflow-hidden">
              {/* Animated Data Packets */}
              <motion.div
                className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50"
                animate={{ left: ['-33%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>

          {/* Mobile Data Pipe (Vertical) */}
          <div className="lg:hidden absolute left-1/2 top-[50px] bottom-[50px] w-2 -translate-x-1/2 z-0">
            <div className="absolute left-1/2 top-[10%] bottom-[10%] w-[1px] -translate-x-1/2 bg-brand-neutral-200 dark:bg-brand-neutral-800 overflow-hidden">
              {/* Animated Data Packets */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-brand-red to-transparent opacity-50"
                animate={{ top: ['-33%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>

          {steps.map((step, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6, ease: "backOut" }}
                className="group relative flex flex-col bg-white/50 dark:bg-brand-neutral-950/50 backdrop-blur-sm border border-brand-neutral-200 dark:border-brand-neutral-800 p-8 hover:border-brand-red/40 transition-all duration-500 z-10"
              >
                {/* Step Number (Background) */}
                <div className="absolute top-4 right-6 text-7xl font-bold text-brand-neutral-100 dark:text-brand-neutral-900 opacity-100 pointer-events-none select-none group-hover:text-brand-red/5 transition-all duration-500">
                  {step.id}
                </div>

                {/* Icon Container */}
                <div className="w-20 h-20 mb-10 flex items-center justify-center bg-white dark:bg-brand-black border border-brand-neutral-200 dark:border-brand-neutral-800 group-hover:border-brand-red transition-all duration-500 relative shadow-lg group-hover:shadow-[0_0_20px_rgba(226,74,55,0.2)]">
                  <step.icon className="w-8 h-8 text-brand-black dark:text-white stroke-[1.5] group-hover:text-brand-red transition-colors duration-300" />

                  {/* Pulsing Ring on Hover */}
                  <div className="absolute inset-0 border border-brand-red opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-red mb-3 block">
                    {step.role}
                  </span>
                  <h3 className="text-2xl font-bold text-brand-black dark:text-white mb-4 uppercase tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                    {step.title}
                  </h3>
                  <div className="w-8 h-px bg-brand-neutral-300 dark:bg-brand-neutral-700 mb-6 group-hover:w-full group-hover:bg-brand-red transition-all duration-500"></div>
                  <p className="text-sm text-brand-neutral-600 dark:text-brand-neutral-400 leading-relaxed font-normal">
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