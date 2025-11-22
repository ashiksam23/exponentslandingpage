import React from 'react';
import { Section } from '../ui/Section';
import { FEATURES } from '../../constants';
import { Square, Zap, Box, ArrowRight, Database } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { triggerHaptic } from '../../utils/haptics';

export const Proof: React.FC = () => {
  // Mapping angular icons manually to match Brand System "No curves"
  const getIcon = (index: number) => {
    switch(index) {
      case 0: return Zap;    // Manifesto Machine
      case 1: return Database; // Financial/Inbox
      case 2: return Square; // Boardroom/Deck
      default: return Square;
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <Section id="how-it-works" className="bg-brand-neutral-50 dark:bg-brand-neutral-950 border-b border-brand-neutral-200 dark:border-brand-neutral-900 relative overflow-hidden">
      
      {/* Technical Blueprint Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" 
           style={{ 
             backgroundImage: 'radial-gradient(#999 1px, transparent 1px)', 
             backgroundSize: '20px 20px' 
           }}>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* Text Content */}
        <div className="lg:col-span-4">
          <div className="relative lg:sticky top-0 lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-brand-black dark:text-white mb-8 tracking-tight uppercase leading-[0.9] transition-colors duration-300">
                Strategic<br/>
                <span className="text-brand-red">Weaponry</span>
              </h2>
              <p className="text-brand-neutral-600 dark:text-brand-neutral-400 text-lg mb-8">
                Powered by the AI Core. Three distinct modules to reclaim your time.
              </p>
            </motion.div>

            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden lg:block h-px bg-brand-red mb-8" 
            />
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-xs font-mono text-brand-neutral-500 dark:text-brand-neutral-600 uppercase tracking-widest hidden lg:block"
            >
              // Select a module for details
            </motion.p>
          </div>
        </div>

        {/* Cards Layout */}
        <motion.div 
          className="lg:col-span-8 grid grid-cols-1 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
        >
          {FEATURES.map((feature, index) => {
            const Icon = getIcon(index);
            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                onClick={() => triggerHaptic('light')} // Haptic feedback on tap
                className="group relative bg-white dark:bg-brand-black border border-brand-neutral-200 dark:border-brand-neutral-800 p-6 md:p-10 hover:border-brand-red/50 dark:hover:border-brand-red/50 transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* Hover Scan Effect */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-red/50 opacity-0 group-hover:opacity-100 group-hover:animate-scan-line transition-opacity duration-300 shadow-[0_0_10px_rgba(226,74,55,0.5)]"></div>
                
                {/* Technical Markers */}
                <div className="absolute top-4 right-4 text-[9px] font-mono text-brand-neutral-300 dark:text-brand-neutral-700 uppercase tracking-widest group-hover:text-brand-red transition-colors">
                  MOD.0{index + 1}
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                   {/* Icon Box */}
                   <div className="shrink-0 w-16 h-16 bg-brand-neutral-50 dark:bg-brand-neutral-900 flex items-center justify-center border border-brand-neutral-200 dark:border-brand-neutral-800 group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300 group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:group-hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                      <Icon className="w-6 h-6 text-brand-black dark:text-white group-hover:text-white stroke-[1.5]" />
                   </div>

                   <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-brand-black dark:text-white mb-4 uppercase tracking-wide group-hover:text-brand-red transition-colors duration-300">
                        {feature.title}
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative pl-4 border-l border-brand-neutral-200 dark:border-brand-neutral-800 group-hover:border-brand-neutral-400 transition-colors">
                          <span className="text-[9px] uppercase tracking-widest text-brand-neutral-400 block mb-2 font-mono">Target Problem</span>
                          <p className="text-sm text-brand-neutral-600 dark:text-brand-neutral-400 leading-relaxed">{feature.problem}</p>
                        </div>
                        <div className="relative pl-4 border-l border-brand-red/50 group-hover:border-brand-red transition-colors">
                          <span className="text-[9px] uppercase tracking-widest text-brand-red block mb-2 font-mono">Tactical Solution</span>
                          <p className="text-sm text-brand-black dark:text-white font-medium leading-relaxed">{feature.solution}</p>
                        </div>
                      </div>
                   </div>
                </div>

                {/* Interaction Hint */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                   <ArrowRight className="w-4 h-4 text-brand-red" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
};