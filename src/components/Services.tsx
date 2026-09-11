import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/mockData';
import { Globe, Brain, Smartphone, Blocks, Shield, Rocket, Check, ArrowRight, Sparkles } from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Globe, Brain, Smartphone, Blocks, Shield, Rocket,
};

const ACCENT_SYSTEM: Record<string, {
  color: string;
  glowClass: string;
  bgLight: string;
  borderHover: string;
  gradientText: string;
}> = {
  gold: {
    color: '#F5C761',
    glowClass: 'glow-gold-jewel',
    bgLight: 'rgba(245, 199, 97, 0.12)',
    borderHover: 'rgba(245, 199, 97, 0.45)',
    gradientText: 'from-[#F5C761] to-[#D97706]',
  },
  emerald: {
    color: '#10B981',
    glowClass: 'glow-emerald-jewel',
    bgLight: 'rgba(16, 185, 129, 0.12)',
    borderHover: 'rgba(16, 185, 129, 0.45)',
    gradientText: 'from-[#10B981] to-[#059669]',
  },
  violet: {
    color: '#8B5CF6',
    glowClass: 'glow-violet-jewel',
    bgLight: 'rgba(139, 92, 246, 0.12)',
    borderHover: 'rgba(139, 92, 246, 0.45)',
    gradientText: 'from-[#8B5CF6] to-[#6D28D9]',
  },
  cyan: {
    color: '#06B6D4',
    glowClass: 'glow-cyan-jewel',
    bgLight: 'rgba(6, 182, 212, 0.12)',
    borderHover: 'rgba(6, 182, 212, 0.45)',
    gradientText: 'from-[#06B6D4] to-[#0284C7]',
  },
  wine: {
    color: '#BE123C',
    glowClass: 'glow-wine-jewel',
    bgLight: 'rgba(190, 18, 60, 0.12)',
    borderHover: 'rgba(190, 18, 60, 0.45)',
    gradientText: 'from-[#FB7185] to-[#BE123C]',
  },
  burgundy: {
    color: '#E11D48',
    glowClass: 'glow-wine-jewel',
    bgLight: 'rgba(225, 29, 72, 0.12)',
    borderHover: 'rgba(225, 29, 72, 0.45)',
    gradientText: 'from-[#F43F5E] to-[#9F1239]',
  },
};

export const Services: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative" id="services">
      {/* Ambient Radial Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#10B981]/8 via-[#8B5CF6]/5 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-2 border-[#F5C761]/30 text-xs uppercase text-[#F5C761] tracking-widest font-semibold font-mono-code mb-4 shadow-[0_0_20px_rgba(245,199,97,0.15)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Precision Engineering Capabilities</span>
          </div>

          <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[54px] text-[var(--text-primary)] font-extrabold tracking-tight">
            High-Performance Systems &amp;{' '}
            <span className="bg-gradient-to-r from-[#F5C761] via-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
              Multi-AI Workflows.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
            Every product is engineered with extreme technical rigor. We design and ship custom web apps, autonomous AI agents, Flutter apps, and Web3 protocols with milestone-locked accountability.
          </p>
        </motion.div>

        {/* 6 Spatial Liquid Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 spatial-stage">
          {SERVICES.map((service, i) => {
            const IconComponent = ICON_MAP[service.icon] || Globe;
            const accent = ACCENT_SYSTEM[service.accent] || ACCENT_SYSTEM.gold;
            const isHovered = hoveredCard === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`glass-2 holographic-edge rounded-3xl p-7 sm:p-8 flex flex-col justify-between spatial-card relative overflow-hidden transition-all duration-400 group ${
                  isHovered ? accent.glowClass : ''
                }`}
                style={{
                  borderColor: isHovered ? accent.borderHover : undefined,
                }}
              >
                {/* Dynamic Specular Sheen on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${accent.color}25 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Top Row: Icon + Domain Indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-13 h-13 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: accent.bgLight,
                        border: `1px solid ${accent.color}40`,
                        boxShadow: `0 0 25px ${accent.color}25`,
                      }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: accent.color }} />
                    </div>

                    <span className="font-mono-code text-[11px] uppercase tracking-wider text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                      0{i + 1} // ARCHITECTURE
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-headline text-xl sm:text-2xl font-bold tracking-tight mb-3 text-[var(--text-primary)] transition-colors"
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
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

                {/* Bottom Card Action */}
                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-mono-code text-[#F5C761] font-semibold">
                    Fixed-Price Milestone
                  </span>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-headline font-bold uppercase tracking-wider text-[var(--text-primary)] group-hover:translate-x-1 transition-all cursor-pointer"
                    style={{ color: accent.color }}
                  >
                    <span>Request Spec</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 sm:mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-full glass-2 border-white/[0.1] shadow-lg text-sm text-[var(--text-secondary)]">
            <span>Every project starts with a detailed technical scope.</span>
            <span className="text-[#F5C761] font-bold font-mono-code">Milestones start from $1,000.</span>
            <span className="text-[var(--text-muted)] hidden sm:inline">•</span>
            <span className="text-[#10B981] font-medium">100% Commercial IP Transfer</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
