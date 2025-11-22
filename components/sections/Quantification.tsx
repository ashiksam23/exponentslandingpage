import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { ArrowUpRight, Activity, TrendingUp } from 'lucide-react';

export const Quantification: React.FC = () => {
  
  // Chart Config
  const width = 500;
  const height = 400;
  const zeroY = 220; // Baseline
  
  // Coordinates
  const startX = 50;
  const startY = 340; // -$10k (Below zeroY)
  const endX = 450;
  const endY = 100;   // +$7k (Above zeroY)
  
  // Control points for the "S" curve / J-Curve
  const cp1X = 200;
  const cp1Y = 340; // Stay flat initially
  const cp2X = 300;
  const cp2Y = 100; // Then shoot up
  
  const curvePath = `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;

  return (
    <Section className="bg-white dark:bg-brand-black border-b border-brand-neutral-200 dark:border-brand-neutral-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
        
        {/* Text Context (Left) */}
        <div className="lg:col-span-5 flex flex-col justify-center p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-brand-neutral-200 dark:border-brand-neutral-800 bg-brand-neutral-50 dark:bg-brand-neutral-950 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex items-center gap-2 mb-6">
               <Activity className="w-4 h-4 text-brand-red" />
               <span className="text-xs font-bold uppercase tracking-widest text-brand-neutral-500 dark:text-brand-neutral-400">Trajectory Correction</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black dark:text-white mb-8 uppercase tracking-tighter leading-[0.9] transition-colors duration-300">
              The <span className="text-brand-red">Ascension</span> Protocol.
            </h2>
            
            <p className="text-brand-neutral-600 dark:text-brand-neutral-400 mb-12 text-lg leading-relaxed">
               Most founders are stuck in a flat-line of administrative debt. We install the infrastructure to invert the curve and compounding leverage.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {/* Current State Card */}
              <div className="p-5 border border-brand-neutral-200 dark:border-brand-neutral-800 bg-white dark:bg-brand-black transition-colors duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-neutral-300 dark:bg-brand-neutral-700"></div>
                <span className="block text-[10px] uppercase tracking-widest text-brand-neutral-400 mb-2">Status: Current</span>
                <span className="block font-mono font-bold text-brand-neutral-600 dark:text-brand-neutral-300 text-sm">Underwater</span>
                <span className="block text-2xl font-bold text-brand-black dark:text-white mt-1 group-hover:text-brand-red transition-colors">-$10k<span className="text-xs text-brand-neutral-400 font-normal ml-1">/mo</span></span>
              </div>

              {/* Future State Card */}
              <div className="p-5 border border-brand-red/20 bg-brand-red/5 dark:bg-brand-red/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-red"></div>
                <span className="block text-[10px] uppercase tracking-widest text-brand-red mb-2 font-bold">Status: Projected</span>
                <span className="block font-mono font-bold text-brand-black dark:text-white text-sm">Sovereign</span>
                <span className="block text-2xl font-bold text-brand-red mt-1">+$7k<span className="text-xs text-brand-red/60 font-normal ml-1">/mo</span></span>
              </div>
            </div>

            <Button variant="primary" className="w-full sm:w-auto shadow-xl" size="lg">
              Initialize Turnaround
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>

        {/* The Graph (Right) - Trajectory Chart */}
        <div className="lg:col-span-7 bg-brand-neutral-100 dark:bg-[#050505] relative overflow-hidden flex flex-col items-center justify-center border-t lg:border-t-0 border-brand-neutral-200 dark:border-brand-neutral-800 transition-colors duration-300">
          
          {/* Adaptive Grid Background */}
          <div className="absolute inset-0 opacity-30 dark:opacity-20 text-brand-neutral-300 dark:text-brand-neutral-800 pointer-events-none" 
               style={{ 
                 backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', 
                 backgroundSize: '40px 40px' 
               }}>
          </div>
          
          {/* Vignette for Depth (Dark Mode only usually, but subtle in light) */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-brand-neutral-100/50 dark:to-[#050505] opacity-50 dark:opacity-80 pointer-events-none"></div>

          {/* Interactive SVG Chart */}
          <div className="relative z-20 w-full h-full p-4 md:p-12 flex items-center justify-center">
             <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
                <defs>
                   {/* Adaptive Hazard Pattern */}
                   <pattern id="hazardStripes" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                      {/* Light Mode: Light Grey Stripes, Dark Mode: Dark Red/Black Stripes */}
                      <rect width="10" height="10" className="fill-brand-neutral-200 dark:fill-[#1a0505] transition-colors duration-300" />
                      <rect width="2" height="10" className="fill-brand-neutral-300 dark:fill-[#3f0d0d] transition-colors duration-300" />
                   </pattern>
                   
                   {/* Profit Gradient */}
                   <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#E24A37" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#E24A37" stopOpacity="0.0" />
                   </linearGradient>

                   {/* Masks */}
                   <mask id="maskBelow">
                      <rect x="0" y={zeroY} width={width} height={height - zeroY} fill="white" />
                   </mask>
                   <mask id="maskAbove">
                      <rect x="0" y="0" width={width} height={zeroY} fill="white" />
                   </mask>
                </defs>

                {/* Axis Line */}
                <line x1="20" y1={zeroY} x2={width - 20} y2={zeroY} className="stroke-brand-neutral-300 dark:stroke-brand-neutral-800 transition-colors duration-300" strokeWidth="1" strokeDasharray="4 4" />
                <text x="20" y={zeroY - 10} className="fill-brand-neutral-400 dark:fill-brand-neutral-600 text-[10px] font-mono uppercase tracking-widest transition-colors duration-300">Breakeven</text>

                {/* --- The Fill Areas --- */}
                
                {/* Area Below Zero (The Bleed) */}
                <motion.path 
                  d={`${curvePath} L ${endX} ${height} L ${startX} ${height} Z`}
                  fill="url(#hazardStripes)"
                  mask="url(#maskBelow)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />

                {/* Area Above Zero (The Growth) */}
                <motion.path 
                  d={`${curvePath} L ${endX} ${zeroY} L ${startX} ${zeroY} Z`}
                  fill="url(#profitGradient)"
                  mask="url(#maskAbove)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                />

                {/* --- The Trajectory Line --- */}
                <motion.path
                  d={curvePath}
                  fill="none"
                  stroke="#E24A37"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="drop-shadow-lg dark:drop-shadow-[0_0_10px_rgba(226,74,55,0.6)] transition-all duration-300"
                />

                {/* --- Points & Labels --- */}
                
                {/* Start Point */}
                <motion.g 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.5 }}
                >
                   <circle cx={startX} cy={startY} r="6" className="fill-brand-neutral-200 dark:fill-brand-black stroke-brand-neutral-400 dark:stroke-brand-neutral-600 transition-colors duration-300" strokeWidth="2" />
                   <text x={startX} y={startY + 25} textAnchor="middle" className="fill-brand-neutral-500 dark:fill-brand-neutral-500 text-[10px] font-mono uppercase tracking-widest">Chaos</text>
                   <text x={startX} y={startY + 40} textAnchor="middle" className="fill-brand-neutral-800 dark:fill-white text-sm font-bold">-$10k</text>
                </motion.g>

                {/* End Point */}
                <motion.g 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 1.5 }}
                >
                   <circle cx={endX} cy={endY} r="8" fill="#E24A37" stroke="white" strokeWidth="2" />
                   {/* Pulsing Effect */}
                   <circle cx={endX} cy={endY} r="15" fill="transparent" stroke="#E24A37" strokeWidth="1" opacity="0.5">
                      <animate attributeName="r" from="15" to="25" dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
                   </circle>
                   <text x={endX} y={endY - 30} textAnchor="middle" className="fill-brand-neutral-500 dark:fill-white text-[10px] font-mono uppercase tracking-widest">Sovereignty</text>
                   <text x={endX} y={endY - 15} textAnchor="middle" className="fill-brand-red text-lg font-bold">+$7k</text>
                </motion.g>

                {/* The Total Swing Indicator (Right Bracket) */}
                <motion.g
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: 1.8 }}
                >
                   {/* Vertical Bracket Line */}
                   <line x1={endX + 40} y1={endY} x2={endX + 40} y2={startY} className="stroke-brand-neutral-300 dark:stroke-brand-neutral-700" strokeWidth="1" />
                   <line x1={endX + 35} y1={endY} x2={endX + 40} y2={endY} className="stroke-brand-neutral-300 dark:stroke-brand-neutral-700" strokeWidth="1" />
                   <line x1={endX + 35} y1={startY} x2={endX + 40} y2={startY} className="stroke-brand-neutral-300 dark:stroke-brand-neutral-700" strokeWidth="1" />
                   
                   <foreignObject x={endX + 50} y={(startY + endY) / 2 - 30} width="120" height="60">
                      <div className="flex flex-col justify-center h-full pl-2">
                         <span className="text-[10px] text-brand-neutral-400 dark:text-brand-neutral-500 uppercase tracking-widest mb-1">Net Swing</span>
                         <span className="text-2xl font-bold text-brand-red">+$17k</span>
                      </div>
                   </foreignObject>
                </motion.g>

             </svg>
          </div>

          {/* Ticker */}
          <div className="absolute bottom-0 left-0 w-full border-t border-brand-neutral-200 dark:border-brand-neutral-800 py-3 px-6 flex justify-between items-center bg-white/50 dark:bg-black/50 backdrop-blur-sm transition-colors duration-300">
             <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
                </span>
                <span className="text-[10px] font-mono text-brand-neutral-500 dark:text-brand-neutral-500 uppercase tracking-widest">Live Projection</span>
             </div>
             <div className="flex gap-4">
                <span className="text-[10px] font-mono text-brand-neutral-500 dark:text-brand-neutral-600 uppercase">Timeline: 30 Days</span>
             </div>
          </div>

        </div>
      </div>
    </Section>
  );
};