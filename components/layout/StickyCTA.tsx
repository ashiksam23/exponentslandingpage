import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '../../constants';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 w-full z-50 bg-white dark:bg-brand-black border-t border-brand-neutral-200 dark:border-brand-neutral-800 py-4 px-6 transition-colors duration-300"
        >
          <div className="container mx-auto flex flex-row items-center justify-between gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-red animate-pulse"></span>
              <p className="text-brand-black dark:text-white text-xs uppercase tracking-widest font-bold transition-colors duration-300">
                Revenue Leak Detected
              </p>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
              <Button variant="primary" size="sm" fullWidth className="sm:w-auto" onClick={() => window.location.href = SITE_CONFIG.ctaLink}>
                {SITE_CONFIG.ctaText}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};