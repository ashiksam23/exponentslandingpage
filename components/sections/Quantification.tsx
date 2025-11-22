import React, { useEffect, useState } from 'react';
import { Section } from '../ui/Section';
import { motion, useAnimation, useInView } from 'framer-motion';

// Helper component for counting numbers
const CountUp = ({ end, prefix = "", suffix = "" }: { end: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [end, isInView]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

export const Quantification: React.FC = () => {
  
  const chartHeight = 250;
  const zeroY = chartHeight * 0.6; 
  const scale = chartHeight / 20000; 
  
  const bar1Value = -10000;
  const bar1Height = Math.abs(bar1Value) * scale;
  
  const bar2Value = 7000;
  const bar2Height = Math.abs(bar2Value) * scale;

  return (
    <Section className="bg-white dark:bg-brand-black border-b border-brand-neutral-200 dark:border-brand-neutral-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-brand-neutral-200 dark:border-brand-neutral-800">
        
        {/* Data Terminal */}
        <div className="p-6 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-brand-neutral-200 dark:border-brand-neutral-800 bg-brand-neutral-50 dark:bg-brand-neutral-950 relative overflow-hidden">
          {/* Background Tech Decoration */}
          <div className="absolute top-0 right-0 p-4 opacity-20">
             <div className="grid grid-cols-3 gap-1">
               {[...Array(9)].map((_,i) => <motion.div 
                 key={i} 
                 className="w-1 h-1 bg-brand-black dark:bg-white"
                 initial={{ opacity: 0.2 }}
                 animate={{ opacity: [0.2, 1, 0.2] }}
                 transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
               />)}
             </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-brand-black dark:text-white mb-2 uppercase tracking-tight transition-colors duration-300 z-10">
              Financial<br/>
              <span className="text-brand-red">Impact Analysis</span>
            </h2>
            <p className="text-brand-neutral-500 mb-8 text-sm mt-4 z-10 max-w-md">
               We know your worth. Every hour you spend on admin is a minimum $500 opportunity cost.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative z-10 bg-white dark:bg-brand-black border border-brand-neutral-200 dark:border-brand-neutral-800 p-6 shadow-lg"
          >
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-brand-neutral-200 dark:border-brand-neutral-800">
                  <th className="pb-4 font-mono text-[10px] text-brand-neutral-400 uppercase tracking-widest">Metric</th>
                  <th className="pb-4 font-mono text-[10px] text-brand-red uppercase tracking-widest text-right">Delta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-neutral-100 dark:divide-brand-neutral-900">
                <tr>
                  <td className="py-4 text-brand-neutral-600 dark:text-brand-neutral-400">Time Cost (20h)</td>
                  <td className="py-4 text-right font-mono text-brand-neutral-500">-$10,000</td>
                </tr>
                <tr>
                  <td className="py-4 text-brand-neutral-600 dark:text-brand-neutral-400">Monthly Investment</td>
                  <td className="py-4 text-right font-mono text-brand-neutral-500">-$3,000</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-brand-black dark:text-white">Net Monthly Value</td>
                  <td className="py-4 text-right font-bold font-mono text-brand-red">
                    +<CountUp end={7000} prefix="$" />
                  </td>
                </tr>
                <tr className="bg-brand-neutral-50 dark:bg-brand-neutral-900">
                  <td className="py-4 pl-2 font-bold uppercase text-xs text-brand-black dark:text-white">ROI Projected</td>
                  <td className="py-4 pr-2 text-right font-bold text-xl text-brand-black dark:text-white">
                    <CountUp end={233} suffix="%" />
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>

        {/* HUD Chart Visualization */}
        <div className="bg-brand-black p-4 md:p-16 flex flex-col relative overflow-hidden items-center justify-center min-h-[300px] md:min-h-[400px]">
          {/* Scanlines */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-red/5 to-transparent animate-scan-line pointer-events-none"></div>
          
          <div className="absolute top-6 left-8 z-10 flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></div>
             <span className="text-[10px] uppercase tracking-widest font-bold text-brand-neutral-400 font-mono">Live Simulation</span>
          </div>
          
          <div className="w-full h-64 flex items-center justify-center mt-8 relative z-10">
            <svg width="100%" height="100%" viewBox="0 0 400 300" className="overflow-visible">
              {/* Grid Lines */}
              <line x1="40" y1={zeroY} x2="360" y2={zeroY} stroke="#525252" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="40" y1="0" x2="40" y2="300" stroke="#333" strokeWidth="1" />

              {/* Bar 1: Legacy (Negative) */}
              <g className="group">
                <defs>
                  <pattern id="diagonalHatch" width="4" height="4" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="4" style={{stroke:'#262626', strokeWidth:1}} />
                  </pattern>
                </defs>
                <motion.rect 
                  x="100" 
                  y={zeroY} 
                  width="60" 
                  initial={{ height: 0 }}
                  whileInView={{ height: bar1Height }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  fill="url(#diagonalHatch)"
                  stroke="#525252"
                  strokeWidth="1"
                />
                <motion.text 
                  initial={{ opacity: 0, y: zeroY + 10 }}
                  whileInView={{ opacity: 1, y: zeroY + bar1Height + 25 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5 }}
                  x="130" 
                  textAnchor="middle" 
                  fill="#737373" 
                  fontSize="14" 
                  fontWeight="bold" 
                  fontFamily="monospace"
                >
                  -$10k
                </motion.text>
                <text x="130" y={zeroY - 10} textAnchor="middle" fill="#525252" fontSize="10" fontWeight="600" className="uppercase tracking-widest">Status Quo</text>
              </g>

              {/* Bar 2: ExponentOS (Positive) */}
              <g className="group">
                <motion.rect 
                  x="240" 
                  y={zeroY} 
                  width="60"
                  initial={{ height: 0, y: zeroY }}
                  whileInView={{ height: bar2Height, y: zeroY - bar2Height }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  fill="#E24A37" 
                  className="hover:brightness-110 shadow-[0_0_20px_rgba(226,74,55,0.5)]"
                />
                <motion.text 
                   initial={{ opacity: 0, y: zeroY - 10 }}
                   whileInView={{ opacity: 1, y: zeroY - bar2Height - 15 }}
                   viewport={{ once: true }}
                   transition={{ delay: 1.5 }}
                   x="270" 
                   textAnchor="middle" 
                   fill="#E24A37" 
                   fontSize="14" 
                   fontWeight="bold" 
                   fontFamily="monospace"
                >
                  +$7k
                </motion.text>
                <text x="270" y={zeroY + 25} textAnchor="middle" fill="#737373" fontSize="10" fontWeight="600" className="uppercase tracking-widest">ExponentOS</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </Section>
  );
};