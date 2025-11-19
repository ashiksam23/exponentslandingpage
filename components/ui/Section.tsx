import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;
  borderTop?: boolean;
  borderBottom?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = "", 
  children, 
  noPadding = false,
  borderTop = false,
  borderBottom = false
}) => {
  return (
    <section 
      id={id} 
      className={`
        relative w-full overflow-hidden transition-colors duration-300 group
        ${noPadding ? '' : 'py-24'} 
        ${borderTop ? 'border-t border-brand-neutral-200 dark:border-brand-neutral-800' : ''}
        ${borderBottom ? 'border-b border-brand-neutral-200 dark:border-brand-neutral-800' : ''}
        ${className}
      `}
    >
      {/* Technical Markers (Crosshairs) - UI/UX Polish */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-brand-neutral-300 dark:border-brand-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-brand-neutral-300 dark:border-brand-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-brand-neutral-300 dark:border-brand-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-brand-neutral-300 dark:border-brand-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Center Line Marker (Subtle) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-brand-neutral-200 dark:bg-brand-neutral-800"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-brand-neutral-200 dark:bg-brand-neutral-800"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};