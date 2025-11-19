import React from 'react';
import { Section } from '../ui/Section';
import { PRICING_TIERS } from '../../constants';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';

export const Pricing: React.FC = () => {
  return (
    <Section id="pricing" className="bg-white dark:bg-brand-black pt-32 pb-32 transition-colors duration-300">
      <div className="mb-20 text-center">
        <h2 className="text-4xl font-bold text-brand-black dark:text-white mb-4 uppercase tracking-tight transition-colors duration-300">
          System Tiers
        </h2>
        <p className="text-brand-neutral-500 uppercase tracking-widest text-xs">
          Scale your vision. Eliminate noise.
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-l border-brand-neutral-200 dark:border-brand-neutral-800 transition-colors duration-300">
          {PRICING_TIERS.map((tier, index) => {
            // UI/UX: Invert the highlighted card for maximum contrast
            // Light Mode: Highlight is Black BG. Dark Mode: Highlight is White BG.
            // This creates a "black hole" or "beacon" effect depending on the mode.
            const isHighlight = tier.highlight;
            
            return (
              <div 
                key={index} 
                className={`
                  flex flex-col p-8 border-r border-b border-brand-neutral-200 dark:border-brand-neutral-800 transition-all duration-300 relative group
                  ${isHighlight 
                    ? 'bg-brand-black dark:bg-brand-neutral-100 text-white dark:text-brand-black scale-[1.02] z-10 shadow-2xl' 
                    : 'bg-transparent hover:bg-brand-neutral-50 dark:hover:bg-brand-neutral-900'}
                `}
              >
                {isHighlight && (
                   <div className="absolute top-0 left-0 w-full h-1 bg-brand-red"></div>
                )}

                <div className="mb-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`text-sm font-bold uppercase tracking-widest ${isHighlight ? 'text-brand-red' : 'text-brand-black dark:text-white'}`}>
                      {tier.name}
                    </h3>
                    {isHighlight && (
                       <span className="flex items-center gap-2 px-2 py-1 bg-brand-red text-white text-[8px] font-bold uppercase tracking-widest">
                          Recommended
                       </span>
                    )}
                  </div>
                  
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className={`text-4xl font-bold tracking-tight transition-colors duration-300 ${isHighlight ? 'text-white dark:text-brand-black' : 'text-brand-black dark:text-white'}`}>
                        ${tier.price}
                    </span>
                    <span className={`text-xs uppercase ${isHighlight ? 'text-brand-neutral-400 dark:text-brand-neutral-500' : 'text-brand-neutral-500 dark:text-brand-neutral-600'}`}>
                        /mo
                    </span>
                  </div>
                  <p className={`text-xs leading-relaxed min-h-[40px] ${isHighlight ? 'text-brand-neutral-300 dark:text-brand-neutral-600' : 'text-brand-neutral-600 dark:text-brand-neutral-400'}`}>
                      {tier.description}
                  </p>
                </div>

                <div className="flex-grow space-y-4 mb-12">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className={`w-3 h-3 mt-1 shrink-0 ${isHighlight ? 'text-brand-red' : 'text-brand-black dark:text-white'}`} />
                      <span className={`text-xs font-medium ${isHighlight ? 'text-brand-neutral-200 dark:text-brand-neutral-800' : 'text-brand-neutral-700 dark:text-brand-neutral-300'}`}>
                          {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Button 
                    // Invert button logic for the highlighted card
                    variant={isHighlight ? 'secondary' : 'outline'} 
                    fullWidth 
                    size="sm"
                    className={isHighlight ? '!border-transparent' : ''}
                  >
                    Initialize
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};