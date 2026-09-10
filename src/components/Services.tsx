import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/mockData';
import { Globe, Brain, Smartphone, Blocks, Shield, Rocket, Check } from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Globe, Brain, Smartphone, Blocks, Shield, Rocket,
};

const ACCENT_STYLES: Record<string, { text: string; border: string; bg: string; glow: string }> = {
  gold: { text: 'text-[#F5C761]', border: 'border-[#F5C761]/20 hover:border-[#F5C761]/50', bg: 'bg-[#F5C761]/10', glow: 'shadow-[0_0_30px_rgba(245,199,97,0.15)]' },
  emerald: { text: 'text-[#10B981]', border: 'border-[#10B981]/20 hover:border-[#10B981]/50', bg: 'bg-[#10B981]/10', glow: 'shadow-[0_0_30px_rgba(16,185,129,0.15)]' },
  violet: { text: 'text-[#8B5CF6]', border: 'border-[#8B5CF6]/20 hover:border-[#8B5CF6]/50', bg: 'bg-[#8B5CF6]/10', glow: 'shadow-[0_0_30px_rgba(139,92,246,0.15)]' },
  wine: { text: 'text-[#F43F5E]', border: 'border-[#881337]/20 hover:border-[#F43F5E]/50', bg: 'bg-[#881337]/10', glow: 'shadow-[0_0_30px_rgba(136,19,55,0.15)]' },
  cyan: { text: 'text-[#06B6D4]', border: 'border-[#06B6D4]/20 hover:border-[#06B6D4]/50', bg: 'bg-[#06B6D4]/10', glow: 'shadow-[0_0_30px_rgba(6,182,212,0.15)]' },
  burgundy: { text: 'text-[#F59E0B]', border: 'border-[#7F1D1D]/20 hover:border-[#F59E0B]/50', bg: 'bg-[#7F1D1D]/10', glow: 'shadow-[0_0_30px_rgba(127,29,29,0.15)]' },
};

export const Services: React.FC = () => {
  return (
    <section className="w-full px-4 lg:px-8 py-20 lg:py-28" id="services">
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
            What We Build
          </div>
          <h2 className="mt-3 font-display-hero text-3xl md:text-4xl lg:text-[48px] text-[var(--text-primary)] font-bold tracking-tight">
            Engineering That Ships.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)] text-base lg:text-lg">
            From custom web platforms to AI automations, mobile apps to blockchain systems — we build production-grade software that solves real problems.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const IconComponent = ICON_MAP[service.icon] || Globe;
            const accent = ACCENT_STYLES[service.accent] || ACCENT_STYLES.gold;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group glass-card rounded-2xl p-6 lg:p-7 transition-all duration-300 ${accent.border} hover:${accent.glow} cursor-default`}
                style={{ perspective: '1000px' }}
              >
                <div className="transition-transform duration-300 group-hover:translate-y-[-2px]">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${accent.bg} flex items-center justify-center mb-5`}>
                    <IconComponent className={`w-6 h-6 ${accent.text}`} />
                  </div>

                  {/* Title */}
                  <h3 className={`font-headline text-lg font-bold ${accent.text} mb-2`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-[13px] text-[var(--text-muted)]">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${accent.text}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-[var(--text-muted)] text-sm font-medium">
            Projects start from <span className="text-[#F5C761] font-bold">$1,000</span> — every engagement begins with a free discovery call.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
