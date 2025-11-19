import React from 'react';
import { Section } from '../ui/Section';
import { FEATURES } from '../../constants';
import { Square, Zap, Box } from 'lucide-react';

export const Proof: React.FC = () => {
  // Mapping angular icons manually to match Brand System "No curves"
  const getIcon = (index: number) => {
    switch(index) {
      case 0: return Zap;    // Manifesto Machine
      case 1: return Box;    // Financial/Inbox
      case 2: return Square; // Boardroom/Deck
      default: return Square;
    }
  };

  return (
    <Section id="how-it-works" className="bg-white dark:bg-brand-black" borderBottom>
      <div className="max-w-4xl mb-16">
        <h2 className="text-4xl font-bold text-brand-black dark:text-white mb-6 tracking-tight uppercase transition-colors duration-300">
          Your New Strategic Weaponry.<br/>
          <span className="text-brand-neutral-500">Powered by the AI Core.</span>
        </h2>
        <p className="text-brand-neutral-600 dark:text-brand-neutral-400 text-lg transition-colors duration-300">
          Three distinct modules focusing on the strategic, time-saving capabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-brand-neutral-200 dark:border-brand-neutral-800 transition-colors duration-300">
        {FEATURES.map((feature, index) => {
          const Icon = getIcon(index);
          return (
            <div key={index} className="border-r border-b border-brand-neutral-200 dark:border-brand-neutral-800 p-10 hover:bg-brand-neutral-50 dark:hover:bg-brand-neutral-900/30 transition-colors duration-300 group flex flex-col">
              <div className="mb-8">
                <Icon className="w-8 h-8 text-brand-red stroke-1" />
              </div>
              
              <h3 className="text-xl font-bold text-brand-black dark:text-white mb-6 uppercase tracking-wide min-h-[56px]">{feature.title}</h3>
              
              <div className="space-y-8 flex-grow">
                <div className="relative pl-4 border-l-2 border-brand-neutral-200 dark:border-brand-neutral-800">
                  <p className="text-brand-neutral-600 dark:text-brand-neutral-500 text-sm leading-relaxed">
                    <span className="text-brand-neutral-500 dark:text-brand-neutral-600 uppercase text-[10px] tracking-widest block mb-2">The Problem</span>
                    {feature.problem}
                  </p>
                </div>
                
                <div className="relative pl-4 border-l-2 border-brand-red">
                  <p className="text-brand-black dark:text-white text-sm leading-relaxed">
                    <span className="text-brand-red uppercase text-[10px] tracking-widest block mb-2">The Power</span>
                    {feature.solution}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};