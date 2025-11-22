
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { triggerHaptic } from '../../utils/haptics';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggleTheme }) => {
  const handleToggle = () => {
    triggerHaptic('medium');
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className="relative flex items-center p-1 w-[72px] h-[36px] bg-brand-neutral-100 dark:bg-brand-neutral-950 border border-brand-neutral-200 dark:border-brand-neutral-800 transition-all duration-300 hover:border-brand-red/50 hover:shadow-[0_0_10px_rgba(226,74,55,0.15)] group"
      aria-label="Toggle Theme"
    >
      {/* The sliding pill background */}
      <motion.div
        className="absolute top-1 bottom-1 left-1 w-[30px] bg-white dark:bg-brand-neutral-800 shadow-[0_1px_2px_rgba(0,0,0,0.1)] border border-brand-neutral-200 dark:border-brand-neutral-700 pointer-events-none"
        initial={false}
        animate={{
          x: isDark ? 32 : 0, // Travel distance: (72px width - 2px border - 8px padding) - 30px pill = 32px
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />

      {/* Light Option */}
      <div className="relative z-10 flex-1 flex items-center justify-center h-full">
        <Sun 
          className={`w-4 h-4 transition-all duration-300 ${
            !isDark ? 'text-brand-black scale-100' : 'text-brand-neutral-400 scale-75 hover:text-brand-neutral-500'
          }`} 
        />
      </div>

      {/* Dark Option */}
      <div className="relative z-10 flex-1 flex items-center justify-center h-full">
        <Moon 
          className={`w-4 h-4 transition-all duration-300 ${
            isDark ? 'text-white scale-100' : 'text-brand-neutral-400 scale-75 hover:text-brand-neutral-500'
          }`} 
        />
      </div>
    </button>
  );
};
