import React from 'react';
import { motion } from 'motion/react';
import { WHY_ITEMS } from '../data/mockData';
import { Tag, ShieldCheck, Users, Building2, Clock, Key } from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Tag, ShieldCheck, Users, Building2, Clock, Key,
};

const ACCENT_STYLES: Record<string, { text: string; bg: string; border: string }> = {
  gold: { text: 'text-[#F5C761]', bg: 'bg-[#F5C761]/10', border: 'border-[#F5C761]/20' },
  emerald: { text: 'text-[#10B981]', bg: 'bg-[#10B981]/10', border: 'border-[#10B981]/20' },
  violet: { text: 'text-[#8B5CF6]', bg: 'bg-[#8B5CF6]/10', border: 'border-[#8B5CF6]/20' },
  wine: { text: 'text-[#F43F5E]', bg: 'bg-[#881337]/10', border: 'border-[#881337]/20' },
};

export const WhyAxorks: React.FC = () => {
  return (
    <section className="w-full px-4 lg:px-8 py-20 lg:py-28 border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)]/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-xs uppercase text-[#F5C761] tracking-wider font-semibold font-mono-code">
            Why AXORKS
          </div>
          <h2 className="mt-3 font-display-hero text-3xl md:text-4xl lg:text-[48px] text-[var(--text-primary)] font-bold tracking-tight">
            Built Different. Priced Fair.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)] text-base lg:text-lg">
            A registered studio with real offices, senior engineers, and transparent pricing. No middlemen. No surprises.
          </p>
        </motion.div>

        {/* Why Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_ITEMS.map((item, i) => {
            const IconComponent = ICON_MAP[item.icon] || Tag;
            const accent = ACCENT_STYLES[item.accent] || ACCENT_STYLES.gold;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`glass-card rounded-2xl p-6 lg:p-7 ${accent.border} transition-all duration-300 hover:border-opacity-50`}
              >
                <div className={`w-12 h-12 rounded-xl ${accent.bg} flex items-center justify-center mb-4`}>
                  <IconComponent className={`w-6 h-6 ${accent.text}`} />
                </div>
                <h3 className={`font-headline text-lg font-bold ${accent.text} mb-2`}>
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Office Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-2xl overflow-hidden glass-card border border-[var(--border-subtle)] max-w-4xl mx-auto"
        >
          <div className="relative h-[200px] sm:h-[280px]">
            <img
              src="/Images/Axorks_Office.jpeg"
              alt="AXORKS Technologies office"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div>
                <div className="text-[var(--text-primary)] font-headline font-bold text-sm">
                  Axorks Pvt Limited — Registered Private Company
                </div>
                <div className="text-[var(--text-muted)] text-xs mt-0.5">
                  Offices in Karachi &amp; Islamabad, Pakistan
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card text-[#10B981] font-mono-code text-[11px]">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                Operational
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
