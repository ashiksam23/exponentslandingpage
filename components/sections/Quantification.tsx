import React from 'react';
import { Section } from '../ui/Section';

export const Quantification: React.FC = () => {
  
  // Chart Logic (Custom SVG to remove heavy dependencies)
  // Canvas: 400x300
  // Y-Axis: -12000 to +8000
  // Range: 20000 units
  // Zero Line: at 60% down (12000/20000)
  
  const chartHeight = 250;
  const chartWidth = 350;
  const zeroY = chartHeight * 0.65; // Where the 0 line sits
  
  // Scale factor: roughly 20000 units fit in 250px
  const scale = chartHeight / 20000; 
  
  const bar1Value = -10000;
  const bar1Height = Math.abs(bar1Value) * scale;
  const bar1Color = '#525252';
  
  const bar2Value = 5500;
  const bar2Height = Math.abs(bar2Value) * scale;
  const bar2Color = '#E24A37';

  return (
    <Section className="bg-brand-neutral-50 dark:bg-brand-neutral-900 transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-brand-neutral-200 dark:border-brand-neutral-800 bg-white dark:bg-brand-black">
        
        {/* Data Table */}
        <div className="p-8 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-brand-neutral-200 dark:border-brand-neutral-800">
          <h2 className="text-3xl font-bold text-brand-black dark:text-white mb-2 uppercase tracking-tight transition-colors duration-300">
            Financial Logic
          </h2>
          <p className="text-brand-neutral-500 mb-8 text-sm">
             Basis: $500/hr founder value.
          </p>

          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-brand-neutral-200 dark:border-brand-neutral-800">
                <th className="pb-4 font-bold text-brand-neutral-400 dark:text-brand-neutral-500 uppercase tracking-wider text-[10px]">Metric</th>
                <th className="pb-4 font-bold text-brand-black dark:text-brand-neutral-200 uppercase tracking-wider text-[10px]">Legacy Ops</th>
                <th className="pb-4 font-bold text-brand-red uppercase tracking-wider text-[10px]">ExponentOS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-neutral-100 dark:divide-brand-neutral-900">
              <tr>
                <td className="py-4 text-brand-neutral-600 dark:text-brand-neutral-400">Monthly Admin</td>
                <td className="py-4 text-brand-neutral-800 dark:text-brand-neutral-300">20 Hours</td>
                <td className="py-4 text-brand-black dark:text-white font-bold">0 Hours</td>
              </tr>
              <tr>
                <td className="py-4 text-brand-neutral-600 dark:text-brand-neutral-400">Net Value</td>
                <td className="py-4 text-brand-neutral-400">-$10,000</td>
                <td className="py-4 text-brand-red font-bold">+$5,500</td>
              </tr>
              <tr>
                <td className="py-4 text-brand-black dark:text-white font-bold uppercase">ROI</td>
                <td className="py-4 text-brand-neutral-400">Negative</td>
                <td className="py-4 text-brand-black dark:text-white font-bold text-xl">222%</td>
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
                {/* Label Value */}
                <text x="130" y={zeroY + bar1Height + 20} textAnchor="middle" fill="#737373" fontSize="12" fontWeight="bold">-$10k</text>
                {/* Label Name */}
                <text x="130" y={zeroY - 10} textAnchor="middle" fill="#737373" fontSize="10" fontWeight="600" className="uppercase">Legacy</text>
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
                {/* Label Value */}
                <text x="270" y={zeroY - bar2Height - 10} textAnchor="middle" fill="#E24A37" fontSize="12" fontWeight="bold">+$5.5k</text>
                {/* Label Name */}
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