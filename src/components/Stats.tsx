import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export default function Stats() {
  const statsList: Stat[] = [
    { id: 'years', value: 38, suffix: '+', label: 'Years of Excellence' },
    { id: 'clients', value: 1200, suffix: '+', label: 'Global Clients' },
    { id: 'formulations', value: 150, suffix: '+', label: 'Product Formulations' },
  ];

  return (
    <section className="py-20 bg-white" id="stats">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {statsList.map((stat) => (
            <StatItem key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat }: { stat: Stat; key?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.value;
    if (start === end) return;

    // Fast animation speed for 1200+, standard for 25+
    const totalDuration = 1800; // ms
    const incrementTime = 20; // 50 fps
    const step = (end / (totalDuration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center px-4 space-y-3"
    >
      <div className="text-5xl md:text-6xl font-display font-extrabold text-brand-primary tracking-tight">
        {count.toLocaleString()}
        <span className="text-brand-accent-teal">{stat.suffix}</span>
      </div>
      <p className="text-brand-md-grey font-sans font-semibold text-xs tracking-widest uppercase">
        {stat.label}
      </p>
      {/* Decorative colored dot or line */}
      <div className="w-10 h-0.5 bg-brand-border/30 mx-auto rounded" />
    </motion.div>
  );
}
