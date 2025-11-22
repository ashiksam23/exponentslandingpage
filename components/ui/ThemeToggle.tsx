
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  // Animation variants for the icons
  const iconVariants = {
    hidden: { scale: 0.5, rotate: -90, opacity: 0 },
    visible: { scale: 1, rotate: 0, opacity: 1 },
    exit: { scale: 0.5, rotate: 90, opacity: 0 }
  };

  return (
    <button
      onClick={handleToggle}
      className="relative flex items-center w-[76px] h-[38px] bg-brand-neutral-100 dark:bg-brand-neutral-950 border border-brand-neutral-200 dark:border-brand-neutral-800 transition-colors duration-500 hover:border-brand-neutral-400 dark:hover:border-brand-neutral-600 group overflow-hidden cursor-pointer"
      aria-label="Toggle Theme"
    >
      {/* The Sliding Mechanical Pill */}
      <motion.div
        className="absolute top-[3px] bottom-[3px] w-[34px] bg-white dark:bg-brand-neutral-800 border border-brand-neutral-300 dark:border-brand-neutral-700 shadow-sm z-0"
        initial={false}
        animate={{
          x: isDark ? 37 : 3, // Calculated based on container width minus margins
        }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 30,
          mass: 1
        }}
      />

      {/* Light Mode Zone */}
      <div className="relative z-10 flex-1 flex items-center justify-center h-full w-1/2">
        <div className="relative">
          {!isDark && (
            <motion.div 
              className="absolute inset-0 -m-2 rounded-full bg-brand-neutral-400/20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.5, opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
          <motion.div
            animate={{ 
              scale: !isDark ? 1 : 0.7,
              rotate: !isDark ? 0 : -45,
              opacity: !isDark ? 1 : 0.5,
              color: !isDark ? '#050505' : '#A8A29E' // brand-black vs brand-neutral-400
            }}
            transition={{ duration: 0.3 }}
          >
            <Sun className="w-4 h-4" />
          </motion.div>
        </div>
      </div>

      {/* Dark Mode Zone */}
      <div className="relative z-10 flex-1 flex items-center justify-center h-full w-1/2">
        <div className="relative">
          {isDark && (
             <motion.div 
              className="absolute inset-0 -m-2 rounded-full bg-brand-neutral-500/20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.5, opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
          <motion.div
            animate={{ 
              scale: isDark ? 1 : 0.7,
              rotate: isDark ? 0 : 45,
              opacity: isDark ? 1 : 0.5,
              color: isDark ? '#FFFFFF' : '#A8A29E' // white vs brand-neutral-400
            }}
            transition={{ duration: 0.3 }}
          >
            <Moon className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </button>
  );
};
