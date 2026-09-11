import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Zap, Clock, Users } from 'lucide-react';

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
      { threshold: 0.4 }
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
  {
    value: 4,
    suffix: '+',
    prefix: '',
    label: 'Platforms Shipped',
    subtext: 'AgroTrace, IPMI-OS, MediVerse, FUME',
    icon: Award,
    accent: '#F5C761',
  },
  {
    value: 100,
    suffix: '%',
    prefix: '',
    label: 'Fixed-Price Milestones',
    subtext: 'Zero hourly surprise billing',
    icon: ShieldCheck,
    accent: '#10B981',
  },
  {
    value: 1000,
    suffix: '',
    prefix: '$',
    label: 'Projects Starting From',
    subtext: 'Clear proposal before code',
    icon: Zap,
    accent: '#F5C761',
  },
  {
    value: 24,
    suffix: 'h',
    prefix: '<',
    label: 'Guaranteed Response',
    subtext: 'Direct engineering desks',
    icon: Clock,
    accent: '#06B6D4',
  },
  {
    value: 8,
    suffix: '+',
    prefix: '',
    label: 'Specialists & Builders',
    subtext: 'Direct founder oversight',
    icon: Users,
    accent: '#8B5CF6',
  },
];

export const TrustStrip: React.FC = () => {
  return (
    <section className="w-full relative z-20 -mt-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          {TRUST_METRICS.map((metric, i) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-2 holographic-edge rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${metric.accent}15`, border: `1px solid ${metric.accent}30` }}
                  >
                    <IconComponent className="w-4 h-4" style={{ color: metric.accent }} />
                  </div>
                  <span className="text-[10px] font-mono-code text-[var(--text-muted)] uppercase">
                    PROOF
                  </span>
                </div>

                <div>
                  <div
                    className="font-display-hero text-2xl sm:text-3xl font-extrabold tracking-tight"
                    style={{ color: metric.accent }}
                  >
                    <AnimatedCounter target={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
                  </div>
                  <div className="mt-1 text-xs font-headline font-bold text-[var(--text-primary)]">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)] mt-0.5 line-clamp-1">
                    {metric.subtext}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
