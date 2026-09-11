import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/mockData';
import { Globe, Brain, Smartphone, Blocks, Shield, Rocket, Check, ArrowRight } from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string; style?: React.CSSProperties }>> = {
  Globe, Brain, Smartphone, Blocks, Shield, Rocket,
};

const ACCENT_SYSTEM: Record<string, {
  color: string;
  glowClass: string;
  bgLight: string;
  borderHover: string;
}> = {
  gold: {
    color: '#F5C761',
    glowClass: 'glow-gold-jewel',
    bgLight: 'rgba(245, 199, 97, 0.12)',
    borderHover: 'rgba(245, 199, 97, 0.45)',
  },
  emerald: {
    color: '#10B981',
    glowClass: 'glow-emerald-jewel',
    bgLight: 'rgba(16, 185, 129, 0.12)',
    borderHover: 'rgba(16, 185, 129, 0.45)',
  },
  violet: {
    color: '#8B5CF6',
    glowClass: 'glow-violet-jewel',
    bgLight: 'rgba(139, 92, 246, 0.12)',
    borderHover: 'rgba(139, 92, 246, 0.45)',
  },
  cyan: {
    color: '#06B6D4',
    glowClass: 'glow-cyan-jewel',
    bgLight: 'rgba(6, 182, 212, 0.12)',
    borderHover: 'rgba(6, 182, 212, 0.45)',
  },
  wine: {
    color: '#BE123C',
    glowClass: 'glow-wine-jewel',
    bgLight: 'rgba(190, 18, 60, 0.12)',
    borderHover: 'rgba(190, 18, 60, 0.45)',
  },
  burgundy: {
    color: '#E11D48',
    glowClass: 'glow-wine-jewel',
    bgLight: 'rgba(225, 29, 72, 0.12)',
    borderHover: 'rgba(225, 29, 72, 0.45)',
  },
};

export const Services: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative" id="services">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header — Client First */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-2 border-[#F5C761]/30 text-xs uppercase text-[#F5C761] tracking-widest font-semibold font-mono-code mb-3.5">
            <span>Capabilities &amp; Scope</span>
          </div>

          <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[50px] text-[var(--text-primary)] font-extrabold tracking-tight">
            What We Can Build For Your Business.
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed font-normal">
            Clear deliverables. Realistic timelines. Fixed-price proposals before code is written. Choose an engagement below to discuss your specifications.
          </p>
        </motion.div>

        {/* 6 Spatial Liquid Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 spatial-stage">
          {SERVICES.map((service, i) => {
            const IconComponent = ICON_MAP[service.icon] || Globe;
            const accent = ACCENT_SYSTEM[service.accent] || ACCENT_SYSTEM.gold;
            const isHovered = hoveredCard === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 1, y: 0 }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`glass-2 holographic-edge rounded-3xl p-7 sm:p-8 flex flex-col justify-between spatial-card relative overflow-hidden transition-all duration-300 group ${
                  isHovered ? accent.glowClass : ''
                }`}
                style={{
                  borderColor: isHovered ? accent.borderHover : undefined,
                }}
              >
                <div className="relative z-10">
                  {/* Top Row: Icon + Indicator */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: accent.bgLight,
                        border: `1px solid ${accent.color}40`,
                        boxShadow: `0 0 20px ${accent.color}20`,
                      }}
                    >
                      <IconComponent className="w-5 h-5" style={{ color: accent.color }} />
                    </div>

                    <span className="font-mono-code text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                      MILESTONE CONTRACT
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-headline text-xl font-bold tracking-tight mb-2.5 text-[var(--text-primary)]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-4 border-t border-white/[0.06]">
                    {service.features.map((feature, fi) => (
                      <div key={fi} className="flex items-start gap-2.5 text-xs text-[var(--text-muted)]">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ backgroundColor: `${accent.color}20` }}
                        >
                          <Check className="w-2.5 h-2.5" style={{ color: accent.color }} />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA to Contact */}
                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-mono-code text-[#F5C761] font-semibold">
                    Starting from $1,000
                  </span>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-headline font-bold uppercase tracking-wider text-[var(--text-primary)] group-hover:translate-x-1 transition-all cursor-pointer"
                    style={{ color: accent.color }}
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-14 sm:mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-full glass-2 border-white/[0.1] shadow-lg text-sm text-[var(--text-secondary)]">
            <span>Every project receives an exact fixed-price scope.</span>
            <span className="text-[#F5C761] font-bold font-mono-code">Milestones start from $1,000.</span>
            <span className="text-[var(--text-muted)] hidden sm:inline">•</span>
            <span className="text-[#10B981] font-medium">100% Commercial IP Transfer</span>
          </div>
        </div>
      </div>
    </section>
  );
};
