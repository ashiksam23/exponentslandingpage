
import React from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { triggerHaptic } from '../../utils/haptics';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const scrollToSection = (id: string) => {
    triggerHaptic('light');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // The Infinity Loop Path (Same as Hero)
  const infinityPath = "M 60 30 L 90 2 L 118 30 L 90 58 L 60 30 L 30 58 L 2 30 L 30 2 Z";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-brand-black/90 backdrop-blur-md border-b border-brand-neutral-200 dark:border-brand-neutral-800 transition-colors duration-300 h-16">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => {
            triggerHaptic('light');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          {/* Logo Mark - Infinity Loop */}
          <div className="h-6 w-12 relative text-brand-black dark:text-white group-hover:text-brand-red transition-colors duration-300">
             <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path 
                  d={infinityPath} 
                  stroke="currentColor" 
                  strokeWidth="8" 
                  strokeLinecap="square" 
                  strokeLinejoin="miter" 
                />
             </svg>
          </div>

          {/* Brand Text */}
          <span className="text-lg font-bold tracking-tighter uppercase hidden sm:block select-none">
            <span className="text-brand-black dark:text-white transition-colors duration-300">Exponent</span>
            <span className="text-brand-red">OS</span>
          </span>
        </div>

        {/* Nav + Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden md:flex items-center gap-8 mr-2">
            <button onClick={() => scrollToSection('how-it-works')} className="text-xs font-bold uppercase tracking-widest text-brand-neutral-500 hover:text-brand-black dark:text-brand-neutral-400 dark:hover:text-white transition-colors">
              Architecture
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-xs font-bold uppercase tracking-widest text-brand-neutral-500 hover:text-brand-black dark:text-brand-neutral-400 dark:hover:text-white transition-colors">
              Pricing
            </button>
          </nav>
          
          <div className="w-px h-6 bg-brand-neutral-200 dark:bg-brand-neutral-800 hidden md:block"></div>
          
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
};
