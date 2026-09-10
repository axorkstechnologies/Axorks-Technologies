import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ target, suffix = '', prefix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

const TRUST_METRICS = [
  { value: 4, suffix: '+', label: 'Production Platforms Shipped', prefix: '' },
  { value: 100, suffix: '%', label: 'On-Time Milestone Delivery', prefix: '' },
  { value: 1000, suffix: '', label: 'Projects Starting From', prefix: '$' },
  { value: 24, suffix: 'h', label: 'Maximum Response Time', prefix: '<' },
  { value: 8, suffix: '+', label: 'Senior Engineers & Specialists', prefix: '' },
];

export const TrustStrip: React.FC = () => {
  return (
    <section className="w-full border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8"
        >
          {TRUST_METRICS.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display-hero text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5C761]">
                <AnimatedCounter target={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
              </div>
              <div className="mt-1 text-[11px] sm:text-xs uppercase tracking-wider text-[var(--text-muted)] font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
