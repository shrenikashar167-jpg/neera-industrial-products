import { useEffect, useState } from 'react';
import { ShoppingCart, Download, Award, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

import nirolF from '../assets/Nirol F.png';
import nirolEH from '../assets/Nirol EH.png';

export default function Hero() {
  const [bubbles, setBubbles] = useState<{ id: number; left: number; size: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate dynamic safe water bubbles for laboratory background composition
    const list = Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 14 + 6,
      delay: Math.random() * 8,
      duration: Math.random() * 10 + 10,
    }));
    setBubbles(list);
  }, []);

  const scrollToCatalog = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative min-h-screen pt-28 pb-16 flex items-center bg-brand-primary overflow-hidden">
      {/* Background radial gradient representing fluid and chemical cleanliness */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,#003366_0%,transparent_50%)] opacity-80" />
      
      {/* Simulated Wave Vector Fill */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 opacity-15">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-24 text-brand-accent-teal fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,17,83.66,24.36,155.83,42.82,232.06,73,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Floating Laboratory Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="absolute rounded-full bg-brand-accent-teal/20 backdrop-blur-[1px] border border-white/10 animate-float-1"
            style={{
              left: `${b.left}%`,
              bottom: `-50px`,
              width: `${b.size}px`,
              height: `${b.size}px`,
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.duration}s`,
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
        {/* Left Side: Corporate Text Content encased in high-end Glassmorphism container */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-brand-primary/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          id="hero-pitch"
        >
          <span className="text-brand-accent-teal uppercase tracking-[0.25em] font-display font-semibold text-xs md:text-sm flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-accent-teal animate-ping" />
            Scientific Engineering
          </span>
          
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-display font-bold text-white tracking-tight leading-[1.15] text-balance">
            Engineering the <span className="text-brand-accent-teal">Science of Fabric Care</span>
          </h1>

          <p className="mt-6 text-sm md:text-base text-brand-border font-sans leading-relaxed max-w-xl">
            Professional-Grade Laundry Solutions for Global Industries. Advanced clinical formulations specifically designed for peak bacterial hygiene, fabric longevity, and extreme industrial efficiency.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToCatalog}
              className="bg-brand-accent-teal hover:bg-white text-brand-primary hover:scale-[1.02] transform transition-all font-display font-bold text-xs py-4 px-8 rounded-xl tracking-wider flex items-center justify-center gap-2.5 shadow-[0_4px_20px_rgba(0,155,158,0.35)] cursor-pointer"
              id="btn-catalogue"
            >
              <ShoppingCart className="w-4 h-4 text-brand-primary" />
              View Catalogue
            </button>
            
            <a
              href="#contact"
              className="mt-2 sm:mt-0 bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:scale-[1.02] transform transition-all font-display font-semibold text-xs py-4 px-8 rounded-xl tracking-wider flex items-center justify-center gap-2"
              id="btn-specs"
            >
              <Download className="w-4 h-4" />
              Technical Specs
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-6 text-xs text-brand-border/80">
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-brand-accent-teal" />
              Pioneers Since 1988
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-brand-accent-teal" />
              Mumbai, Maharashtra
            </div>
          </div>
        </motion.div>

        {/* Right Side: Showcase Bottles layered beautifully with a soft background glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center min-h-[350px] md:min-h-[450px]"
          id="hero-bottles"
        >
          {/* Subtle glowing halo representing pure clean chemical energy */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-brand-accent-teal/15 blur-[100px] rounded-full animate-pulse" />

          {/* Product 1: Nirol F (Viscous pink bottle) - positioned to left, floating */}
          <div className="absolute z-20 left-4 md:left-12 top-[10%] w-[58%] animate-float-1 group">
            <div className="relative p-2 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.5)] transform -rotate-[3deg]">
              <img
                src={nirolF}
                alt="Nirol F Pro Liquid Detergent"
                className="w-full h-auto object-contain rounded-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-brand-primary/90 text-center py-1.5 px-3 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] font-display uppercase tracking-widest text-brand-accent-teal font-bold">
                  Nirol F Liquid
                </span>
              </div>
            </div>
          </div>

          {/* Product 2: Nirol EH (Premium liquid detergent) - positioned right-bottom, floating opposite */}
          <div className="absolute z-10 right-4 md:right-12 bottom-[10%] w-[52%] animate-float-2 group">
            <div className="relative p-2 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.5)] transform rotate-[4deg]">
              <img
                src={nirolEH}
                alt="Nirol EH Premium Detergent"
                className="w-full h-auto object-contain rounded-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-brand-primary/90 text-center py-1.5 px-3 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] font-display uppercase tracking-widest text-brand-accent-teal font-bold">
                  Nirol EH Liquid
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Downward indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 z-20">
        <span className="text-[10px] font-display tracking-[0.25em] text-white uppercase text-center">
          Scroll to explore
        </span>
        <div className="w-[1.5px] h-8 bg-gradient-to-b from-brand-accent-teal to-transparent rounded" />
      </div>
    </header>
  );
}
