import { ShieldCheck, Truck, FlaskConical, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function ResearchSection() {
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="py-28 bg-brand-primary relative overflow-hidden" id="about">
      {/* Decorative molecular pattern grids */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(0,155,158,0.06)_0%,transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Side: Glowing scientific lab view coupled with dynamic overlay */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          {/* Subtle surrounding turquoise halo for medical laboratory aura */}
          <div className="absolute inset-0 bg-brand-accent-teal/15 blur-[60px] rounded-full scale-90 group-hover:scale-95 transition-transform duration-700" />
          
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnx3wdso9-zUltboL6FpfVl1BOtmj7V1gz4u64X-cPmadPthME5vKUDbgo47mIyRxZdSSzsrUayr76qsd-Kxz7YYE87iRExgVeOaNBBrzzLqvCcZWeEL9NNJb2hI2U-JpxxMGKis7_A-gIjES2udwO_04f5F8Wls7uWmmyI7My5efTFQ7-nHjGmDINbrt9RBtfM6cc4GaSHD2e8uOHqD4dD8HWBWtUiDy1zIDjQMwfDNK6DejsV5-Vc-sEdemGMrVdEREcp2cD2Ozd"
            alt="Futuristic Neera Chemical Formulation R&D Laboratory"
            className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3] border border-white/10"
          />

          {/* Glowing bottom Glassmorphism overlay detailing lab assays */}
          <div className="absolute -bottom-8 -right-4 md:-right-8 z-20 max-w-[280px] bg-brand-primary/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl animate-float-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-brand-accent-teal/15 p-2 rounded-lg border border-brand-accent-teal/30">
                <FlaskConical className="w-5 h-5 text-brand-accent-teal" />
              </div>
              <h4 className="text-white font-display font-bold text-sm tracking-wide">
                Advanced R&D
              </h4>
            </div>
            <p className="text-xs text-brand-border leading-relaxed font-sans">
              Every single production batch undergoes rigorous chromatography and pH stability screening in our advanced, state-of-the-art facilities before shipping.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Science-Driven Value Pillars */}
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12 relative z-10"
        >
          <div className="space-y-4">
            <span className="text-brand-accent-teal uppercase tracking-[0.2em] font-display font-semibold text-xs flex items-center gap-2">
              Why Choose Neera Industrial Products
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-[1.2] text-balance">
              Global Standards of <span className="text-brand-accent-teal">Science-Driven Purity</span>
            </h2>
            <div className="w-16 h-1 bg-brand-accent-teal rounded" />
          </div>

          {/* Value Blocks */}
          <div className="space-y-8">
            {/* QA Block */}
            <motion.div variants={itemVariants} className="flex gap-5 group/item">
              <div className="h-12 w-12 bg-white/5 border border-white/15 rounded-xl flex items-center justify-center shrink-0 group-hover/item:bg-brand-accent-teal/15 group-hover/item:border-brand-accent-teal/40 transition-colors">
                <ShieldCheck className="w-6 h-6 text-brand-accent-teal" />
              </div>
              <div className="space-y-1.5 animate-fadeIn">
                <h5 className="text-white font-display font-bold text-base group-hover/item:text-brand-accent-teal transition-colors">
                  Quality Assurance Protocols
                </h5>
                <p className="text-sm text-brand-border/90 font-sans leading-relaxed">
                  Strict ISO-certified production lines ensuring 100% molecular consistency and shelf durability across global shipments.
                </p>
              </div>
            </motion.div>

            {/* Logistics Block */}
            <motion.div variants={itemVariants} className="flex gap-5 group/item">
              <div className="h-12 w-12 bg-white/5 border border-white/15 rounded-xl flex items-center justify-center shrink-0 group-hover/item:bg-brand-accent-teal/15 group-hover/item:border-brand-accent-teal/40 transition-colors">
                <Truck className="w-6 h-6 text-brand-accent-teal" />
              </div>
              <div className="space-y-1.5">
                <h5 className="text-white font-display font-bold text-base group-hover/item:text-brand-accent-teal transition-colors">
                  Reliable Freight Supply Chain
                </h5>
                <p className="text-sm text-brand-border/90 font-sans leading-relaxed">
                  Proprietary industrial distribution networks guaranteeing express safe-route transit within 48 hours for bulk commercial contracts.
                </p>
              </div>
            </motion.div>

            {/* Custom formulation block */}
            <motion.div variants={itemVariants} className="flex gap-5 group/item">
              <div className="h-12 w-12 bg-white/5 border border-white/15 rounded-xl flex items-center justify-center shrink-0 group-hover/item:bg-brand-accent-teal/15 group-hover/item:border-brand-accent-teal/40 transition-colors">
                <Award className="w-6 h-6 text-brand-accent-teal" />
              </div>
              <div className="space-y-1.5">
                <h5 className="text-white font-display font-bold text-base group-hover/item:text-brand-accent-teal transition-colors">
                  Tailored Chemical Formulations
                </h5>
                <p className="text-sm text-brand-border/90 font-sans leading-relaxed">
                  Bespoke concentration adjustments engineered to meet extreme biological, protein, and grease challenges unique to your workspace.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
