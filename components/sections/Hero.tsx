import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/Button';
import { motion, Variants } from 'framer-motion';
import { SITE_CONFIG } from '../../constants';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [timeLeft, setTimeLeft] = useState<string>("00:00:00:00");

  // Countdown Timer Logic (Simulating time slipping away)
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      // Count down to the end of the day
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      
      const diff = endOfDay.getTime() - now.getTime();
      
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      const ms = Math.floor((diff % 1000) / 10);

      setTimeLeft(
        `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}`
      );
    };

    const interval = setInterval(updateTimer, 30);
    return () => clearInterval(interval);
  }, []);

  // Canvas Animation Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    
    const mouse = { x: -1000, y: -1000 };

    const particleCount = window.innerWidth < 768 ? 30 : 70;
    const connectionDistance = 120;
    const mouseDistance = 200;

    const colors = {
      dark: { particle: 'rgba(255, 255, 255, 0.15)', line: 'rgba(255, 255, 255, 0.03)' },
      light: { particle: 'rgba(0, 0, 0, 0.15)', line: 'rgba(0, 0, 0, 0.03)' },
      highlight: 'rgba(226, 74, 55, 0.4)'
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3; // Slower, more deliberate
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 1.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(isDark: boolean) {
        if (!ctx) return;
        ctx.fillStyle = isDark ? colors.dark.particle : colors.light.particle;
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    const resize = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.classList.contains('dark');

      particles.forEach((p, i) => {
        p.update();
        p.draw(isDark);

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const dxMouse = p.x - mouse.x;
            const dyMouse = p.y - mouse.y;
            const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

            ctx.beginPath();
            if (distMouse < mouseDistance) {
              ctx.strokeStyle = colors.highlight;
              ctx.lineWidth = 1.5 * (1 - distance / connectionDistance);
            } else {
              ctx.strokeStyle = isDark ? colors.dark.line : colors.light.line;
              ctx.lineWidth = 0.5;
            }
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const logoPathVariant: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        pathLength: { duration: 3, ease: "linear", repeat: Infinity },
        opacity: { duration: 0.5 }
      }
    }
  };

  const infinityPath = "M 60 30 L 90 2 L 118 30 L 90 58 L 60 30 L 30 58 L 2 30 L 30 2 Z";

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-brand-black pt-24 pb-24 border-b border-brand-neutral-200 dark:border-brand-neutral-900 transition-colors duration-300 overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-0" 
           style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '60px 60px', color: 'inherit' }}>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* LOGO */}
        <motion.div 
          className="mb-12 relative"
          initial="hidden"
          animate="visible"
        >
          <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={infinityPath} stroke="currentColor" strokeWidth="1" className="text-brand-neutral-200 dark:text-brand-neutral-800" fill="none" />
            <motion.path 
              d={infinityPath} 
              stroke="#E24A37" 
              strokeWidth="3" 
              fill="none" 
              strokeLinecap="square" 
              strokeLinejoin="miter" 
              variants={logoPathVariant}
            />
          </svg>
          <div className="absolute inset-0 bg-brand-red/20 blur-3xl -z-10 opacity-50 dark:opacity-20 rounded-full"></div>
        </motion.div>

        {/* System Timer / Ticker */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center mb-10"
        >
          <div className="flex items-center gap-2 px-3 py-1 border border-brand-neutral-200 dark:border-brand-neutral-800 bg-white/50 dark:bg-black/50 backdrop-blur-md mb-2">
             <span className="w-1.5 h-1.5 bg-brand-red animate-pulse"></span>
             <span className="text-[10px] uppercase tracking-widest font-mono text-brand-neutral-600 dark:text-brand-neutral-400">
               Opportunity Leaking
             </span>
          </div>
          <div className="font-mono text-xl sm:text-2xl text-brand-black dark:text-white tracking-widest tabular-nums opacity-80">
            {timeLeft}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-brand-black dark:text-white tracking-tighter mb-10 leading-[0.9] uppercase transition-colors duration-300">
            The 1x Founder<br/>Is <span className="text-brand-neutral-400 dark:text-brand-neutral-600 line-through decoration-brand-red decoration-4">Dead</span>.
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-red tracking-tight uppercase mb-10 leading-none">
             Install Operational Sovereignty.
          </h2>

          <p className="text-lg sm:text-xl text-brand-neutral-600 dark:text-brand-neutral-300 font-normal mb-12 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            Stop trading your genius for administrative chaos.<br className="hidden sm:block"/>
            We sell the <span className="text-brand-black dark:text-white font-bold bg-brand-neutral-100 dark:bg-brand-neutral-800 px-1">asymmetric advantage</span> you can't build yourself.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto min-w-[250px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
              {SITE_CONFIG.ctaText}
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Angular Scroll Indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
        <span className="text-[10px] uppercase tracking-widest text-brand-neutral-400 vertical-text">The Trap</span>
        <div className="w-[1px] h-16 bg-brand-neutral-200 dark:bg-brand-neutral-800 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-red animate-slide-down"></div>
        </div>
      </div>
    </section>
  );
};