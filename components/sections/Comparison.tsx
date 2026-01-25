import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

interface ComparisonRow {
  feature: string;
  exponentOS: 'yes' | 'no' | 'partial';
  virtualAssistant: 'yes' | 'no' | 'partial';
  fullTimeCOO: 'yes' | 'no' | 'partial';
  diyTools: 'yes' | 'no' | 'partial';
}

const COMPARISON_ROWS: ComparisonRow[] = [
  { feature: "Monthly Cost", exponentOS: 'yes', virtualAssistant: 'partial', fullTimeCOO: 'no', diyTools: 'yes' },
  { feature: "Zero Management Burden", exponentOS: 'yes', virtualAssistant: 'no', fullTimeCOO: 'no', diyTools: 'partial' },
  { feature: "AI-Powered Automation", exponentOS: 'yes', virtualAssistant: 'no', fullTimeCOO: 'no', diyTools: 'partial' },
  { feature: "Strategic Decision Support", exponentOS: 'yes', virtualAssistant: 'no', fullTimeCOO: 'yes', diyTools: 'no' },
  { feature: "Content Repurposing Engine", exponentOS: 'yes', virtualAssistant: 'partial', fullTimeCOO: 'no', diyTools: 'no' },
  { feature: "Financial Operations", exponentOS: 'yes', virtualAssistant: 'no', fullTimeCOO: 'yes', diyTools: 'no' },
  { feature: "Instant Onboarding (48hrs)", exponentOS: 'yes', virtualAssistant: 'no', fullTimeCOO: 'no', diyTools: 'partial' },
  { feature: "Scales Without Hiring", exponentOS: 'yes', virtualAssistant: 'no', fullTimeCOO: 'no', diyTools: 'yes' },
];

const COST_DATA = {
  exponentOS: "$550-$3K/mo",
  virtualAssistant: "$2-5K/mo",
  fullTimeCOO: "$15-35K/mo",
  diyTools: "$200-500/mo"
};

const StatusIcon: React.FC<{ status: 'yes' | 'no' | 'partial' }> = ({ status }) => {
  if (status === 'yes') return <Check className="w-5 h-5 text-brand-red" />;
  if (status === 'no') return <X className="w-5 h-5 text-brand-neutral-400" />;
  return <Minus className="w-5 h-5 text-brand-neutral-500" />;
};

export const Comparison: React.FC = () => {
  return (
    <Section id="comparison" className="bg-brand-neutral-50 dark:bg-brand-neutral-950 pt-20 pb-20 md:pt-32 md:pb-32 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black dark:text-white mb-4 uppercase tracking-tight transition-colors duration-300">
            The Asymmetric Advantage
          </h2>
          <p className="text-brand-neutral-500 text-sm max-w-xl mx-auto">
            Compare ExponentOS against traditional alternatives.
          </p>
        </motion.div>

        {/* Desktop Table */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="hidden md:block overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-brand-neutral-200 dark:border-brand-neutral-800">
                <th className="text-left p-4 text-sm font-semibold text-brand-neutral-500 uppercase tracking-wider">
                  Feature
                </th>
                <th className="p-4 text-center">
                  <div className="inline-flex flex-col items-center">
                    <span className="text-lg font-bold text-brand-red">ExponentOS</span>
                    <span className="text-xs text-brand-neutral-500 mt-1">{COST_DATA.exponentOS}</span>
                  </div>
                </th>
                <th className="p-4 text-center">
                  <div className="inline-flex flex-col items-center">
                    <span className="text-lg font-bold text-brand-black dark:text-white">Virtual Assistant</span>
                    <span className="text-xs text-brand-neutral-500 mt-1">{COST_DATA.virtualAssistant}</span>
                  </div>
                </th>
                <th className="p-4 text-center">
                  <div className="inline-flex flex-col items-center">
                    <span className="text-lg font-bold text-brand-black dark:text-white">Full-Time COO</span>
                    <span className="text-xs text-brand-neutral-500 mt-1">{COST_DATA.fullTimeCOO}</span>
                  </div>
                </th>
                <th className="p-4 text-center">
                  <div className="inline-flex flex-col items-center">
                    <span className="text-lg font-bold text-brand-black dark:text-white">DIY Tools</span>
                    <span className="text-xs text-brand-neutral-500 mt-1">{COST_DATA.diyTools}</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-brand-neutral-200 dark:border-brand-neutral-800 hover:bg-white dark:hover:bg-brand-neutral-900 transition-colors"
                >
                  <td className="p-4 text-sm font-medium text-brand-black dark:text-white">
                    {row.feature}
                  </td>
                  <td className="p-4 text-center bg-brand-red/5 dark:bg-brand-red/10">
                    <div className="flex justify-center">
                      <StatusIcon status={row.exponentOS} />
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center">
                      <StatusIcon status={row.virtualAssistant} />
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center">
                      <StatusIcon status={row.fullTimeCOO} />
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center">
                      <StatusIcon status={row.diyTools} />
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {['ExponentOS', 'Virtual Assistant', 'Full-Time COO', 'DIY Tools'].map((option, optionIndex) => {
            const key = option.toLowerCase().replace(/[^a-z]/g, '') as 'exponentos' | 'virtualassistant' | 'fulltimecoo' | 'diytools';
            const keyMap: Record<string, keyof ComparisonRow> = {
              'exponentos': 'exponentOS',
              'virtualassistant': 'virtualAssistant',
              'fulltimecoo': 'fullTimeCOO',
              'diytools': 'diyTools'
            };
            const dataKey = keyMap[key];
            const costKey = dataKey as keyof typeof COST_DATA;

            return (
              <motion.div
                key={optionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-6 border ${optionIndex === 0 ? 'border-brand-red bg-brand-red/5' : 'border-brand-neutral-200 dark:border-brand-neutral-800'}`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`text-xl font-bold ${optionIndex === 0 ? 'text-brand-red' : 'text-brand-black dark:text-white'}`}>
                    {option}
                  </h3>
                  <span className="text-sm text-brand-neutral-500">{COST_DATA[costKey]}</span>
                </div>
                <div className="space-y-3">
                  {COMPARISON_ROWS.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex items-center justify-between">
                      <span className="text-sm text-brand-neutral-600 dark:text-brand-neutral-400">{row.feature}</span>
                      <StatusIcon status={row[dataKey] as 'yes' | 'no' | 'partial'} />
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
