import { Boxes, FlaskConical, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export default function Logistics() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="py-28 bg-brand-primary relative overflow-hidden" id="distribution">
      {/* Carbon fiber style visual texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,155,158,0.05)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-20 max-w-3xl mx-auto"
        >
          <span className="text-brand-accent-teal uppercase tracking-[0.25em] font-display font-semibold text-xs">
            Global Logistics
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-tight">
            Chemical Distribution & Trading
          </h2>
          <div className="w-12 h-1 bg-brand-accent-teal mx-auto rounded" />
          <p className="text-brand-border text-sm md:text-base font-sans leading-relaxed max-w-xl mx-auto">
            A high-efficiency global supply chain network providing premium, laboratory-certified industrial bulk chemicals and pure raw materials safely across continents.
          </p>
        </motion.div>

        {/* Three Columns Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          
          {/* Card 1 */}
          <motion.div variants={cardVariants} className="bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 p-8 md:p-10 rounded-3xl flex flex-col gap-6 group">
            <div className="w-12 h-12 bg-brand-accent-teal/10 rounded-2xl flex items-center justify-center border border-brand-accent-teal/25 group-hover:scale-105 transition-transform">
              <Boxes className="w-6 h-6 text-brand-accent-teal" />
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-display font-bold text-lg select-all">
                Bulk Supply Solutions
              </h4>
              <p className="text-brand-border text-xs leading-relaxed font-sans">
                Highly scalable commercial procurement channels for raw chemical agents, organic solvents, and specialty additives with strictly verified purity values.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={cardVariants} className="bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 p-8 md:p-10 rounded-3xl flex flex-col gap-6 group">
            <div className="w-12 h-12 bg-brand-accent-teal/10 rounded-2xl flex items-center justify-center border border-brand-accent-teal/25 group-hover:scale-105 transition-transform">
              <FlaskConical className="w-6 h-6 text-brand-accent-teal" />
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-display font-bold text-lg select-all">
                Rigorous Assay Testing
              </h4>
              <p className="text-brand-border text-xs leading-relaxed font-sans">
                Every shipment batch is subjected to comprehensive spectrometry examination and is dispatched alongside full Certificates of Analysis (COA).
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={cardVariants} className="bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 p-8 md:p-10 rounded-3xl flex flex-col gap-6 group">
            <div className="w-12 h-12 bg-brand-accent-teal/10 rounded-2xl flex items-center justify-center border border-brand-accent-teal/25 group-hover:scale-105 transition-transform">
              <Navigation className="w-6 h-6 text-brand-accent-teal" />
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-display font-bold text-lg select-all">
                Reliable Freight Supply Chain
              </h4>
              <p className="text-brand-border text-xs leading-relaxed font-sans">
                Proprietary industrial distribution networks guaranteeing express safe-route transit typically within 3 to 4 working days for bulk commercial contracts.
              </p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
