import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "What packaging sizes are available for bulk orders?",
      answer: "We supply our industrial detergents and specialty chemicals in standardized commercial packaging sizes, including 5, 20, 50, and 200 Ltrs/Kgs to accommodate different business scales."
    },
    {
      question: "Can you customize chemical formulations for our specific workspace?",
      answer: "Yes, our advanced on-site R&D laboratory specializes in custom adjustments. We can tune pH levels, enzyme ratios, and active ingredient concentrations to suit your specific water hardness, fabric types, or heavy machinery requirements."
    },
    {
      question: "Are Material Safety Data Sheets (MSDS) provided for your chemical range?",
      answer: "Safety and compliance are our priorities. Full Material Safety Data Sheets (MSDS) and technical data reports are available for all products. You can request them via email."
    },
    {
      question: "How can we request product samples for technical evaluation?",
      answer: "We welcome facility trials. You can request product samples directly through the Inquiry Form below. Simply specify your company name, target fabrics, and the specific formulation you wish to evaluate."
    },
    {
      question: "What are your delivery and logistical shipping timelines?",
      answer: "For bulk orders within Maharashtra, delivery is typically completed within 3 to 4 working days, depending on the transporter and the choice of transportation preferred by the client. For national shipping across India, we utilize trusted freight partners to ensure secure transport of chemical loads."
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section className="py-28 bg-white relative overflow-hidden" id="faq">
      {/* Decorative background grid elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(0,33,66,0.02)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="text-brand-primary uppercase tracking-[0.2em] font-display font-bold text-xs flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-brand-primary" />
            Support Center
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-primary tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-brand-primary rounded mx-auto" />
        </motion.div>

        {/* FAQ Accordion List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-4 font-sans"
        >
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <motion.div
                variants={itemVariants}
                key={idx}
                className="bg-brand-light-bg border border-brand-border/20 rounded-2xl overflow-hidden transition-all duration-200"
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left cursor-pointer hover:bg-brand-border/10 transition-colors group"
                >
                  <span className="text-xs md:text-sm font-semibold text-brand-primary group-hover:text-brand-accent-teal transition-colors">
                    {faq.question}
                  </span>
                  <span className="p-1 rounded-lg bg-white border border-brand-border/15 shadow-sm text-brand-primary shrink-0 ml-4 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-200">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {/* Animated Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-xs text-brand-md-grey leading-relaxed border-t border-brand-border/10 pt-4 bg-white/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
