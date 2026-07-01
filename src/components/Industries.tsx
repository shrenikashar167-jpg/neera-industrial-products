import { INDUSTRIES } from '../data';
import { Network, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Industries() {
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
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  return (
    <section className="py-28 bg-white" id="industries">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-20 max-w-2xl mx-auto"
        >
          <span className="text-brand-primary uppercase tracking-[0.25em] font-display font-semibold text-xs flex items-center justify-center gap-1.5">
            <Network className="w-4 h-4 text-brand-primary animate-pulse" />
            Global Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-primary tracking-tight">
            Industries We Serve
          </h2>
          <div className="w-12 h-1 bg-brand-primary mx-auto rounded" />
          <p className="text-brand-md-grey font-sans text-sm md:text-base">
            Providing highly specialized sanitizing chemistry and fabric maintenance agents for critical environments worldwide.
          </p>
        </motion.div>

        {/* Categories Bento Column Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {INDUSTRIES.map((ind) => (
            <motion.div
              variants={cardVariants}
              key={ind.id}
              className="group relative overflow-hidden rounded-3xl h-[420px] shadow-lg border border-brand-border/10 cursor-pointer flex flex-col justify-end p-8"
              aria-label={`Industry segment: ${ind.title}`}
            >
              {/* Background cover image */}
              <img
                src={ind.imageUrl}
                alt={ind.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0"
              />

              {/* Visually balanced darkness gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/45 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-95" />

              {/* Content overlay container */}
              <div className="relative z-20 space-y-3">
                <h4 className="text-2xl font-display font-extrabold text-white tracking-wide">
                  {ind.title}
                </h4>
                
                <p className="text-xs text-brand-accent-teal font-sans leading-relaxed font-semibold">
                  {ind.description}
                </p>

                {/* Bullet items revealed beautifully on user hover */}
                <div className="pt-2 space-y-2 border-t border-white/10 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-48 overflow-hidden transition-all duration-500 ease-in-out">
                  {ind.details.map((bullet, key) => (
                    <div key={key} className="flex items-start gap-1.5 text-[11px] text-brand-border leading-relaxed font-sans font-medium">
                      <ChevronRight className="w-3.5 h-3.5 text-brand-accent-teal shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
