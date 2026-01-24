import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/Button';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import { SITE_CONFIG } from '../../constants';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [timeLeft, setTimeLeft] = useState<string>("00:00:00:00");

  // Parallax Hooks
  const { scrollY } = useScroll();
  // Grid moves down at 40% of scroll speed (appears to move up slower than foreground)
  const gridY = useTransform(scrollY, [0, 1000], [0, 400]);
  // Opacity fade out as you scroll down
  const gridOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  // Countdown Timer Logic (Simulating time slipping away)
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
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

  // Canvas Animation Effect with Parallax
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

    // Track mouse in client coordinates to handle scroll offsets correctly
    const mouse = { x: -1000, y: -1000, rawX: -1000, rawY: -1000 };

    const particleCount = window.innerWidth < 768 ? 30 : 70;
    const connectionDistance = 120;
    const mouseDistance = 200;
    const parallaxFactor = 0.3; // Particles move at 30% of scroll speed

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
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 1.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
    }

    const resize = () => {
      if (!container) return;
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
      // Store raw client coordinates
      mouse.rawX = e.clientX;
      mouse.rawY = e.clientY;
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.classList.contains('dark');
      const currentScroll = window.scrollY;

      // Calculate Parallax Offset
      // As we scroll down, the canvas (fixed in section) moves up.
      // To make particles appear to move SLOWER than the container (depth),
      // we shift them DOWN (positive Y) based on scroll.
      const parallaxOffset = currentScroll * parallaxFactor;

      // Note on Mouse Interaction with Parallax:
      // The canvas element is `absolute inset-0` in the Hero.
      // The Hero section moves up with scroll: Top = -currentScroll.
      // A particle drawn at `y + parallaxOffset` inside the canvas is at:
      // Screen Y = (Canvas Top) + (y + parallaxOffset)
      // Screen Y = -currentScroll + y + (currentScroll * 0.3)
      // Screen Y = y - (0.7 * currentScroll)
      //
      // Mouse Y is clientY.
      // Distance Y = Screen Y - Mouse Y

      particles.forEach((p, i) => {
        p.update();

        // Apply parallax offset for drawing
        const drawY = p.y + parallaxOffset;

        ctx.fillStyle = isDark ? colors.dark.particle : colors.light.particle;
        ctx.fillRect(p.x, drawY, p.size, p.size);

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const drawY2 = p2.y + parallaxOffset;

          const dx = p.x - p2.x;
          const dy = drawY - drawY2;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            // Interaction Logic: Map particle screen pos to mouse screen pos
            // Particle Screen X = p.x (since canvas left is 0)
            // Particle Screen Y = drawY - currentScroll (since canvas top is -currentScroll relative to viewport)

            const pScreenX = p.x;
            const pScreenY = drawY - currentScroll;

            const dxMouse = pScreenX - mouse.rawX;
            const dyMouse = pScreenY - mouse.rawY;
            const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

            ctx.beginPath();
            if (distMouse < mouseDistance) {
              ctx.strokeStyle = colors.highlight;
              ctx.lineWidth = 1.5 * (1 - distance / connectionDistance);
            } else {
              ctx.strokeStyle = isDark ? colors.dark.line : colors.light.line;
              ctx.lineWidth = 0.5;
            }
            ctx.moveTo(p.x, drawY);
            ctx.lineTo(p2.x, drawY2);
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
      className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-brand-black pt-48 pb-24 md:pt-40 md:pb-32 border-b border-brand-neutral-200 dark:border-brand-neutral-900 transition-colors duration-300 overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Parallax Grid Background */}
      <motion.div
        style={{
          y: gridY,
          opacity: gridOpacity,
          backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        // Use Tailwind classes for color to handle dark/light mode automatically via currentColor
        className="absolute inset-0 w-full h-full pointer-events-none z-0 text-brand-neutral-200/20 dark:text-brand-neutral-800/10"
      >
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">

        {/* LOGO */}
        <motion.div
          className="mb-16 relative"
          initial="hidden"
          animate="visible"
          style={{ y: useTransform(scrollY, [0, 500], [0, 100]) }} // Logo moves slower than text
        >
          <svg width="140" height="70" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
            <path d={infinityPath} stroke="currentColor" strokeWidth="0.5" className="text-brand-neutral-300 dark:text-brand-neutral-800" fill="none" />
            <motion.path
              d={infinityPath}
              stroke="#E24A37"
              strokeWidth="2"
              fill="none"
              strokeLinecap="square"
              strokeLinejoin="miter"
              variants={logoPathVariant}
              className="drop-shadow-[0_0_15px_rgba(226,74,55,0.6)]"
            />
          </svg>
          <div className="absolute inset-0 bg-brand-red/10 blur-[60px] -z-10 opacity-60 dark:opacity-30 rounded-full scale-150"></div>
        </motion.div>

        {/* System Timer / Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="flex items-center gap-3 px-4 py-1.5 border border-brand-neutral-200 dark:border-brand-neutral-800 bg-white/50 dark:bg-black/40 backdrop-blur-md mb-3 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-brand-neutral-500 dark:text-brand-neutral-400">
              Opportunity Cost
            </span>
          </div>
          <div className="font-mono text-xl sm:text-2xl text-brand-black dark:text-white tracking-[0.15em] tabular-nums opacity-90 font-light">
            {timeLeft}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-6xl"
        >
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold text-brand-black dark:text-white tracking-[-0.05em] mb-8 md:mb-10 leading-[0.85] uppercase transition-colors duration-300 select-none">
            The 1x Founder<br />Is <span className="relative inline-block mx-2">
              <span className="absolute inset-0 w-[110%] -left-[5%] h-[40%] top-[35%] bg-brand-red transform -rotate-2 opacity-80"></span>
              <span className="relative z-10 text-brand-black dark:text-white line-through decoration-transparent opacity-50">Dead</span>
            </span>.
          </h1>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-brand-red tracking-[0.05em] uppercase mb-12 md:mb-16 leading-none">
            Install Operational Sovereignty.
          </h2>

          <p className="text-lg sm:text-xl text-brand-neutral-600 dark:text-brand-neutral-300 font-light mb-16 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            Stop trading your genius for administrative chaos.<br className="hidden sm:block" />
            We sell the <strong className="text-brand-black dark:text-white font-bold border-b border-brand-red/30">asymmetric advantage</strong> you can't build yourself.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-w-[280px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#E24A37] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-300 ease-premium text-lg tracking-widest font-bold uppercase"
              onClick={() => {
                import('../../utils/analytics').then(({ Analytics }) => {
                  Analytics.track('hero_cta_clicked', { location: 'hero' });
                  alert("Initializing Sequence... (This would open the checkout flow)");
                });
              }}
            >
              {SITE_CONFIG.ctaText}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Angular Scroll Indicator */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10 pointer-events-none"
        style={{ opacity: useTransform(scrollY, [0, 200], [1, 0]) }} // Fade out indicator on scroll
      >
        <span className="text-[10px] uppercase tracking-widest text-brand-neutral-400 vertical-text">The Trap</span>
        <div className="w-[1px] h-16 bg-brand-neutral-200 dark:bg-brand-neutral-800 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-red animate-slide-down"></div>
        </div>
      </motion.div>
    </section>
  );
};