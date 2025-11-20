import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { COMPARISON_DATA } from '../../constants';
import { motion } from 'framer-motion';

export const Diagnosis: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Section className="bg-white dark:bg-brand-black border-b border-brand-neutral-200 dark:border-brand-neutral-900 relative overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-red/5 blur-[100px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        {/* Header Column */}
        <div className="lg:col-span-5">
          <div className="relative lg:sticky top-0 lg:top-32 mb-12 lg:mb-0">
            <div className="flex items-center gap-2 mb-4">
               <span className="w-2 h-2 bg-brand-red animate-pulse"></span>
               <span className="text-[10px] font-mono uppercase tracking-widest text-brand-neutral-500">System Diagnosis</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-brand-black dark:text-white mb-8 tracking-tighter uppercase leading-[0.9] transition-colors duration-300">
              The Bottleneck<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red/50">Singularity</span>
            </h2>
            
            <div className="p-6 border-l border-brand-neutral-200 dark:border-brand-neutral-800 bg-brand-neutral-50 dark:bg-brand-neutral-900/30 backdrop-blur-sm">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-neutral-500 mb-4">
                Status: Critical
              </h3>
              <p className="text-brand-neutral-600 dark:text-brand-neutral-300 text-lg leading-relaxed mb-0 transition-colors duration-300">
                You built a success, now it's consuming you. You've been forced into the "Hub-and-Spoke" Trap. Your status is CEO, but your job title is "Task Approver."
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Comparison Interface */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Column Headers - Desktop */}
          <div className="hidden sm:grid grid-cols-2 px-6 pb-2">
            <span className="text-[10px] uppercase tracking-widest text-brand-neutral-400">Legacy Protocol (1x)</span>
            <span className="text-[10px] uppercase tracking-widest text-brand-red">ExponentOS Protocol (10x)</span>
          </div>

          {COMPARISON_DATA.map((item, idx) => {
            const isHovered = hoveredIndex === idx;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  relative grid grid-cols-1 sm:grid-cols-2 border border-brand-neutral-200 dark:border-brand-neutral-800 
                  transition-all duration-500 cursor-crosshair group
                  ${isHovered 
                    ? 'bg-brand-black dark:bg-brand-neutral-900 border-brand-red dark:border-brand-red translate-x-0 sm:translate-x-2 shadow-[4px_4px_0px_0px_rgba(226,74,55,0.5)]' 
                    : 'bg-white dark:bg-brand-neutral-950 hover:border-brand-neutral-400 dark:hover:border-brand-neutral-700'}
                  ${isAnyHovered && !isHovered ? 'opacity-40 blur-[1px]' : 'opacity-100'}
                `}
              >
                {/* Decoration: Corner bracket */}
                <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r transition-colors duration-300 ${isHovered ? 'border-brand-red' : 'border-transparent'}`}></div>
                <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l transition-colors duration-300 ${isHovered ? 'border-brand-red' : 'border-transparent'}`}></div>

                {/* Old Way */}
                <div className="p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-brand-neutral-200 dark:border-brand-neutral-800 flex flex-col justify-center relative overflow-hidden">
                  <span className="block text-brand-neutral-400 text-[9px] uppercase tracking-widest mb-3 font-mono">{item.metric} // LEGACY</span>
                  <p className="text-brand-neutral-500 font-medium leading-snug text-sm transition-colors group-hover:text-brand-neutral-400 line-through decoration-brand-red/50 decoration-2">
                    {item.oldWay}
                  </p>
                  {/* Glitch effect on hover */}
                  {isHovered && (
                    <div className="absolute inset-0 bg-brand-neutral-200/10 dark:bg-brand-neutral-800/30 z-0 pointer-events-none"></div>
                  )}
                </div>

                {/* New Way */}
                <div className="p-6 sm:p-8 flex flex-col justify-center relative overflow-hidden">
                   <span className="block text-brand-red text-[9px] uppercase tracking-widest mb-3 font-mono">{item.metric} // EXPONENT</span>
                   <p className={`font-bold leading-snug text-sm sm:text-base transition-colors duration-300 ${isHovered ? 'text-white' : 'text-brand-black dark:text-white'}`}>
                    {item.newWay}
                  </p>
                  {/* Active Scan Background */}
                  {isHovered && (
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 to-transparent z-0 pointer-events-none"></div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};