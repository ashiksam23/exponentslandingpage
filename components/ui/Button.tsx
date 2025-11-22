
import React from 'react';
import { SITE_CONFIG } from '../../constants';
import { triggerHaptic } from '../../utils/haptics';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  children, 
  className = '',
  ...props 
}) => {
  // Brand System: Sharp edges, uppercase, tracking-wide
  const baseStyles = "inline-flex items-center justify-center font-bold transition-colors duration-200 uppercase tracking-wider border";
  
  // Updated variants for dark/light mode compatibility
  const variants = {
    primary: "bg-brand-red border-brand-red text-white hover:bg-white hover:text-brand-black hover:border-white dark:hover:bg-white dark:hover:text-brand-black dark:hover:border-white",
    secondary: "bg-white border-white text-brand-black hover:bg-brand-red hover:text-white hover:border-brand-red",
    // Outline: dark mode = white border/text, light mode = black border/text
    outline: "bg-transparent border-brand-neutral-300 text-brand-black hover:border-brand-red hover:text-brand-red dark:border-brand-neutral-600 dark:text-white dark:hover:border-brand-red dark:hover:text-brand-red",
    ghost: "bg-transparent border-transparent text-brand-neutral-400 hover:text-brand-black dark:hover:text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-6 py-3 text-xs",
    lg: "px-8 py-4 text-sm"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Tactile feedback
    triggerHaptic('medium');
    
    if (props.onClick) props.onClick(e);
    
    // Only redirect if no custom onClick was provided or if explicit redirect is desired.
    // The original logic implies buttons generally lead to CTA, but let's allow flexibility.
    if (!props.onClick) {
      window.location.href = SITE_CONFIG.ctaLink;
    }
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};
