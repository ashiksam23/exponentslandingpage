import React from 'react';
import { Section } from '../ui/Section';
import { PRICING_TIERS } from '../../constants';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export const Pricing: React.FC = () => {
  return (
    <Section id="pricing" className="bg-white dark:bg-brand-black pt-20 pb-20 md:pt-32 md:pb-32 transition-colors duration-300">
      <div className="mb-12 md:mb-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-brand-black dark:text-white mb-4 uppercase tracking-tight transition-colors duration-300"
        >
          Choose Your Arsenal.<br />
          Ascend to Operational Mastery.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-brand-neutral-500 uppercase tracking-widest text-xs px-4"
        >
          ExponentOS is a strategic investment that scales with your ambition.
        </motion.p>
      </div>

      <div className="max-w-[1600px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-l border-brand-neutral-200 dark:border-brand-neutral-800 transition-colors duration-300">
          {PRICING_TIERS.map((tier, index) => {
            const isHighlight = tier.highlight;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`
                  flex flex-col p-6 md:p-10 border-r border-b border-brand-neutral-200 dark:border-brand-neutral-800 transition-all duration-300 relative group
                  ${isHighlight
                    ? 'bg-brand-black dark:bg-brand-neutral-100 text-white dark:text-brand-black md:scale-[1.08] z-20 shadow-2xl origin-bottom md:py-16'
                    : 'bg-transparent hover:bg-brand-neutral-50 dark:hover:bg-brand-neutral-900'}
                `}
              >
                {/* Holographic Hover Borders */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-red/0 group-hover:bg-brand-red/100 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-red/0 group-hover:bg-brand-red/100 transition-colors duration-300"></div>
                <div className="absolute top-0 left-0 w-[1px] h-full bg-brand-red/0 group-hover:bg-brand-red/100 transition-colors duration-300"></div>
                <div className="absolute top-0 right-0 w-[1px] h-full bg-brand-red/0 group-hover:bg-brand-red/100 transition-colors duration-300"></div>

                {/* Highlight Banner */}
                {isHighlight && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-brand-red animate-pulse"></div>
                )}

                <div className="mb-8 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`text-xs font-bold uppercase tracking-widest ${isHighlight ? 'text-brand-red' : 'text-brand-black dark:text-white'}`}>
                      {tier.name}
                    </h3>
                    {isHighlight && (
                      <span className="flex items-center gap-2 px-2 py-1 bg-brand-red text-white text-[8px] font-bold uppercase tracking-widest">
                        Recommended
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className={`text-5xl font-bold tracking-tighter transition-colors duration-300 ${isHighlight ? 'text-white dark:text-brand-black' : 'text-brand-black dark:text-white'}`}>
                      ${tier.price}
                    </span>
                    <span className={`text-xs uppercase font-mono ${isHighlight ? 'text-brand-neutral-400 dark:text-brand-neutral-500' : 'text-brand-neutral-500 dark:text-brand-neutral-600'}`}>
                      /mo
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed min-h-[40px] font-medium ${isHighlight ? 'text-brand-neutral-300 dark:text-brand-neutral-600' : 'text-brand-neutral-600 dark:text-brand-neutral-400'}`}>
                    {tier.description}
                  </p>
                </div>

                <div className="flex-grow space-y-5 mb-12 relative z-10">
                  {tier.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (idx * 0.05) }}
                      className="flex items-start gap-3"
                    >
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${isHighlight ? 'text-brand-red' : 'text-brand-neutral-400 dark:text-brand-neutral-600'}`} />
                      <span className={`text-xs font-medium ${isHighlight ? 'text-brand-neutral-200 dark:text-brand-neutral-800' : 'text-brand-neutral-700 dark:text-brand-neutral-300'}`}>
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto relative z-10">
                  <Button
                    variant={isHighlight ? 'secondary' : 'outline'}
                    fullWidth
                    size="md"
                    className={isHighlight ? '!border-transparent shadow-lg hover:shadow-xl' : ''}
                  >
                    Initialize
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};