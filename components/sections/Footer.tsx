import React from 'react';
import { Button } from '../ui/Button';
import { SITE_CONFIG } from '../../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-brand-black border-t border-brand-neutral-200 dark:border-brand-neutral-800 pt-16 md:pt-24 pb-12 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Geometric Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-brand-neutral-200 dark:border-brand-neutral-800 rotate-45 translate-x-1/3 -translate-y-1/3 transition-colors duration-300"></div>
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] border border-brand-neutral-200 dark:border-brand-neutral-800 rotate-45 -translate-x-1/3 translate-y-1/3 transition-colors duration-300"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        
        <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold mb-8 tracking-tighter uppercase leading-[0.9] select-none transition-colors duration-300">
          Stop Managing.<br/>
          <span className="text-brand-red">Lead Now.</span>
        </h2>

        <div className="max-w-3xl mx-auto mb-20">
           <p className="text-xl md:text-3xl font-medium mb-10 transition-colors duration-300 leading-tight">
            <span className="text-brand-neutral-400 dark:text-brand-neutral-600 block sm:inline">The 1x world manages people.</span>
            <span className="hidden sm:inline"> </span>
            <span className="text-brand-black dark:text-white block sm:inline">The 10x world installs leverage.</span>
          </p>
          <div className="flex flex-col items-center gap-6">
            <Button 
              variant="primary" 
              size="lg" 
              className="w-full sm:w-auto px-12 py-4 text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[5px_5px_0px_0px_rgba(255,255,255,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
            >
              {SITE_CONFIG.ctaText}
            </Button>
            <span className="text-[10px] uppercase tracking-widest text-brand-neutral-400">
              We guarantee a clear path to ROI. Ask us about our 30-Day Value Guarantee.
            </span>
          </div>
        </div>

        <div className="w-full border-t border-brand-neutral-200 dark:border-brand-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-brand-neutral-500 dark:text-brand-neutral-600 text-[10px] uppercase tracking-widest transition-colors duration-300">
          <div className="flex items-center gap-2">
             <span className="w-2 h-2 bg-brand-red animate-pulse"></span>
             <p>All Systems Operational</p>
          </div>
          <p>
            &copy; {new Date().getFullYear()} <span className="text-brand-black dark:text-brand-black font-bold">Exponent</span><span className="text-brand-red font-bold">OS</span> Inc.
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-black dark:hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-black dark:hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};