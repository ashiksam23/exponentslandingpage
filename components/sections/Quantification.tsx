import React from 'react';
import { Section } from '../ui/Section';

export const Quantification: React.FC = () => {
  
  // Chart Logic (Custom SVG to remove heavy dependencies)
  // Canvas: 400x300
  // Range: -10000 to +10000 (Total 20000)
  // Zero Line: Center
  
  const chartHeight = 250;
  const chartWidth = 350;
  const zeroY = chartHeight * 0.6; 
  
  const scale = chartHeight / 20000; 
  
  const bar1Value = -10000;
  const bar1Height = Math.abs(bar1Value) * scale;
  const bar1Color = '#525252';
  
  const bar2Value = 7000;
  const bar2Height = Math.abs(bar2Value) * scale;
  const bar2Color = '#E24A37';

  return (
    <Section className="bg-brand-neutral-50 dark:bg-brand-neutral-900 transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-brand-neutral-200 dark:border-brand-neutral-800 bg-white dark:bg-brand-black">
        
        {/* Data Table */}
        <div className="p-8 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-brand-neutral-200 dark:border-brand-neutral-800">
          <h2 className="text-3xl font-bold text-brand-black dark:text-white mb-2 uppercase tracking-tight transition-colors duration-300">
            The Choice:<br/>
            Invest or Leak <span className="text-brand-red">$10,000</span>.
          </h2>
          <p className="text-brand-neutral-500 mb-8 text-sm mt-4">
             We know your worth. As a founder at this stage, every hour you spend on admin is a minimum $500 opportunity cost.
          </p>

          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-brand-neutral-200 dark:border-brand-neutral-800">
                <th className="pb-4 font-bold text-brand-neutral-400 dark:text-brand-neutral-500 uppercase tracking-wider text-[10px]">Metric</th>
                <th className="pb-4 font-bold text-brand-black dark:text-brand-neutral-200 uppercase tracking-wider text-[10px]">Your Leak (Today)</th>
                <th className="pb-4 font-bold text-brand-red uppercase tracking-wider text-[10px]">ExponentOS (Gain)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-neutral-100 dark:divide-brand-neutral-900">
              <tr>
                <td className="py-4 text-brand-neutral-600 dark:text-brand-neutral-400">Your Time Cost (20h)</td>
                <td className="py-4 text-brand-neutral-800 dark:text-brand-neutral-300">$10,000 LOSS</td>
                <td className="py-4 text-brand-black dark:text-white font-bold">$10,000 GAIN</td>
              </tr>
              <tr>
                <td className="py-4 text-brand-neutral-600 dark:text-brand-neutral-400">Monthly Investment</td>
                <td className="py-4 text-brand-neutral-400">N/A</td>
                <td className="py-4 text-brand-black dark:text-white font-medium">($3,000 Investment)</td>
              </tr>
              <tr>
                <td className="py-4 text-brand-neutral-600 dark:text-brand-neutral-400">Net Monthly Value</td>
                <td className="py-4 text-brand-red font-bold">NEGATIVE</td>
                <td className="py-4 text-brand-red font-bold">+$7,000 Net Profit</td>
              </tr>
              <tr>
                <td className="py-4 text-brand-black dark:text-white font-bold uppercase">Final ROI</td>
                <td className="py-4 text-brand-neutral-400">The Cost of Complacency</td>
                <td className="py-4 text-brand-black dark:text-white font-bold text-xl">~233%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Visualization */}
        <div className="bg-brand-neutral-100 dark:bg-brand-neutral-900/50 p-8 md:p-16 flex flex-col relative overflow-hidden items-center justify-center">
          <div className="absolute top-6 left-8 z-10">
             <span className="text-[10px] uppercase tracking-widest font-bold text-brand-neutral-400">Net Monthly Impact</span>
          </div>
          
          <div className="w-full h-64 flex items-center justify-center mt-8">
            <svg width="100%" height="100%" viewBox="0 0 400 300" className="overflow-visible">
              {/* Grid Lines */}
              <line x1="40" y1={zeroY} x2="360" y2={zeroY} stroke="#a3a3a3" strokeWidth="1" opacity="0.5" />
              <line x1="40" y1="0" x2="40" y2="300" stroke="#a3a3a3" strokeWidth="1" opacity="0.2" />

              {/* Bar 1: Legacy (Negative) */}
              <g className="group">
                <rect 
                  x="100" 
                  y={zeroY} 
                  width="60" 
                  height={bar1Height} 
                  fill={bar1Color} 
                  className="transition-all duration-500 hover:opacity-80"
                />
                <text x="130" y={zeroY + bar1Height + 20} textAnchor="middle" fill="#737373" fontSize="12" fontWeight="bold">-$10k</text>
                <text x="130" y={zeroY - 10} textAnchor="middle" fill="#737373" fontSize="10" fontWeight="600" className="uppercase">Status Quo</text>
              </g>

              {/* Bar 2: ExponentOS (Positive) */}
              <g className="group">
                <rect 
                  x="240" 
                  y={zeroY - bar2Height} 
                  width="60" 
                  height={bar2Height} 
                  fill={bar2Color} 
                  className="transition-all duration-500 hover:opacity-80"
                />
                <text x="270" y={zeroY - bar2Height - 10} textAnchor="middle" fill="#E24A37" fontSize="12" fontWeight="bold">+$7k</text>
                <text x="270" y={zeroY + 20} textAnchor="middle" fill="#737373" fontSize="10" fontWeight="600" className="uppercase">ExponentOS</text>
              </g>

              {/* Axis Labels */}
              <text x="30" y={zeroY} textAnchor="end" dominantBaseline="middle" fill="#a3a3a3" fontSize="10">$0</text>
            </svg>
          </div>

        </div>
      </div>
    </Section>
  );
};