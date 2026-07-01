import { Droplets, Sparkles, Factory, HeartPulse, Sun, Boxes, FlaskConical, Truck } from 'lucide-react';
import { CAPABILITIES_MARQUEE } from '../data';

export default function CapabilitiesMarquee() {
  const getIconForCapability = (name: string) => {
    switch (name) {
      case 'STAIN REMOVAL SOLUTIONS':
        return <Droplets className="w-5 h-5 text-brand-accent-teal" />;
      case 'PREMIUM FABRIC CARE':
        return <Sparkles className="w-5 h-5 text-brand-accent-teal" />;
      case 'INDUSTRIAL DEGREASERS':
        return <Factory className="w-5 h-5 text-brand-accent-teal" />;
      case 'TEXTILE SOFTENERS':
        return <HeartPulse className="w-5 h-5 text-brand-accent-teal" />;
      case 'OPTICAL BRIGHTENERS':
        return <Sun className="w-5 h-5 text-brand-accent-teal" />;
      case 'RAW CHEMICAL TRADING':
        return <Boxes className="w-5 h-5 text-brand-accent-teal" />;
      case 'CUSTOM CHEMICAL R&D':
        return <FlaskConical className="w-5 h-5 text-brand-accent-teal" />;
      case 'RELIABLE FREIGHT LOGISTICS':
        return <Truck className="w-5 h-5 text-brand-accent-teal" />;
      default:
        return <Droplets className="w-5 h-5 text-brand-accent-teal" />;
    }
  };

  return (
    <div className="bg-brand-light-bg py-10 border-b border-brand-border/20 overflow-hidden relative" id="capabilities">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex overflow-hidden select-none gap-16 relative">
          {/* Loop 1 */}
          <div className="flex shrink-0 justify-around gap-16 min-w-full animate-scroll-marquee">
            {CAPABILITIES_MARQUEE.map((capability, idx) => (
              <div key={`c1-${idx}`} className="flex items-center gap-3.5 text-brand-primary/45 font-display font-bold text-sm md:text-base tracking-[0.1em] hover:text-brand-primary transition-colors">
                {getIconForCapability(capability)}
                {capability}
              </div>
            ))}
          </div>

          {/* Loop 2 */}
          <div className="flex shrink-0 justify-around gap-16 min-w-full animate-scroll-marquee" aria-hidden="true">
            {CAPABILITIES_MARQUEE.map((capability, idx) => (
              <div key={`c2-${idx}`} className="flex items-center gap-3.5 text-brand-primary/45 font-display font-bold text-sm md:text-base tracking-[0.1em] hover:text-brand-primary transition-colors">
                {getIconForCapability(capability)}
                {capability}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Absolute blur fade overlay for edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-brand-light-bg to-transparent pointer-events-none z-20" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-brand-light-bg to-transparent pointer-events-none z-20" />
    </div>
  );
}
