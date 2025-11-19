import React from 'react';
import { Section } from '../ui/Section';
import { COMPARISON_DATA } from '../../constants';

export const Diagnosis: React.FC = () => {
  return (
    <Section className="bg-white dark:bg-brand-black border-b border-brand-neutral-200 dark:border-brand-neutral-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Header Column */}
        <div className="lg:col-span-4">
          <div className="sticky top-24">
            <h2 className="text-4xl font-bold text-brand-black dark:text-white mb-6 tracking-tight uppercase leading-none transition-colors duration-300">
              System<br/>
              Diagnosis
            </h2>
            <p className="text-brand-neutral-600 dark:text-brand-neutral-400 text-lg leading-relaxed mb-8 transition-colors duration-300">
              The "Hub-and-Spoke" model creates a bottleneck: You. <br/><br/>
              Scaling labor linearly creates management debt. Scaling leverage exponentially creates freedom.
            </p>
            <div className="w-12 h-1 bg-brand-red"></div>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="lg:col-span-8 border border-brand-neutral-200 dark:border-brand-neutral-800 bg-brand-neutral-50 dark:bg-brand-neutral-950 transition-colors duration-300">
          <div className="grid grid-cols-2 border-b border-brand-neutral-200 dark:border-brand-neutral-800">
            <div className="p-6 border-r border-brand-neutral-200 dark:border-brand-neutral-800">
              <h3 className="text-brand-neutral-500 font-bold uppercase tracking-widest text-xs">Current State</h3>
            </div>
            <div className="p-6 bg-brand-red/5">
              <h3 className="text-brand-red font-bold uppercase tracking-widest text-xs">ExponentOS State</h3>
            </div>
          </div>

          {COMPARISON_DATA.map((item, idx) => (
            <div key={idx} className="grid grid-cols-2 border-b border-brand-neutral-200 dark:border-brand-neutral-800 last:border-0 group">
              
              {/* Old Way */}
              <div className="p-8 border-r border-brand-neutral-200 dark:border-brand-neutral-800 transition-colors group-hover:bg-brand-neutral-200/50 dark:group-hover:bg-brand-neutral-900/50">
                <span className="block text-brand-neutral-500 dark:text-brand-neutral-600 text-[10px] uppercase tracking-widest mb-2">{item.metric}</span>
                <p className="text-brand-neutral-700 dark:text-brand-neutral-300 font-normal leading-snug">{item.oldWay}</p>
              </div>

              {/* New Way */}
              <div className="p-8 bg-white dark:bg-brand-neutral-900/20 transition-colors group-hover:bg-brand-red/5">
                <span className="block text-brand-red/70 dark:text-brand-red/50 text-[10px] uppercase tracking-widest mb-2">{item.metric}</span>
                <p className="text-brand-black dark:text-white font-medium leading-snug">{item.newWay}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};