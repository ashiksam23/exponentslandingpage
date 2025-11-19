import React from 'react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center p-1 gap-1 bg-white dark:bg-brand-black border border-brand-neutral-200 dark:border-brand-neutral-800 transition-colors duration-300 group shadow-sm hover:shadow-md hover:border-brand-red/50"
      aria-label="Toggle Theme"
    >
      {/* The sliding background */}
      <motion.div
        className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-brand-black dark:bg-white pointer-events-none"
        initial={false}
        animate={{
          x: isDark ? "100%" : "0%",
          left: isDark ? "4px" : "4px" // adjustment for padding
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />

      {/* Light Option */}
      <div className="relative z-10 px-3 py-1.5 min-w-[50px] sm:min-w-[60px] text-center cursor-pointer">
        <span 
          className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-200 ${
            !isDark ? 'text-white' : 'text-brand-neutral-400 group-hover:text-brand-black dark:group-hover:text-white'
          }`}
        >
          Light
        </span>
      </div>

      {/* Dark Option */}
      <div className="relative z-10 px-3 py-1.5 min-w-[50px] sm:min-w-[60px] text-center cursor-pointer">
        <span 
          className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-200 ${
            isDark ? 'text-brand-black' : 'text-brand-neutral-400 group-hover:text-brand-black'
          }`}
        >
          Dark
        </span>
      </div>
    </button>
  );
};