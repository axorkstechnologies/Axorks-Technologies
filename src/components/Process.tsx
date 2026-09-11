import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/mockData';
import { Search, FileText, Code, Rocket, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string; style?: React.CSSProperties }>> = {
  Search, FileText, Code, Rocket,
};

const STEP_ACCENTS = [
  { color: '#F5C761', glow: 'rgba(245, 199, 97, 0.3)', badge: 'PHASE 01' },
  { color: '#10B981', glow: 'rgba(16, 185, 129, 0.3)', badge: 'PHASE 02' },
  { color: '#8B5CF6', glow: 'rgba(139, 92, 246, 0.3)', badge: 'PHASE 03' },
  { color: '#BE123C', glow: 'rgba(190, 18, 60, 0.3)', badge: 'PHASE 04' },
];

export const Process: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative" id="process">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8B5CF6]/8 via-transparent to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-2 border-[#8B5CF6]/30 text-xs uppercase text-[#A78BFA] tracking-widest font-semibold font-mono-code mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Transparent Engineering Delivery</span>
          </div>

          <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[52px] text-[var(--text-primary)] font-extrabold tracking-tight">
            How We Work —{' '}
            <span className="bg-gradient-to-r from-[#F5C761] via-[#10B981] to-[#8B5CF6] bg-clip-text text-transparent">
              Zero Guesswork.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed font-normal">
            No endless billable hours or bait-and-switch retainers. You receive an ironclad specification document, milestone payments, and complete source code ownership.
          </p>
        </motion.div>

        {/* 4 Spatial Process Steps Grid */}
        <div className="relative spatial-stage">
          {/* Desktop Connecting Holographic Rail */}
          <div className="hidden lg:block absolute top-[56px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#F5C761] via-[#10B981] via-60% to-[#8B5CF6] opacity-30 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, i) => {
              const IconComponent = ICON_MAP[step.icon] || Search;
              const accent = STEP_ACCENTS[i];

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="glass-2 holographic-edge rounded-3xl p-7 flex flex-col justify-between spatial-card relative overflow-hidden"
                >
                  <div>
                    {/* Top Step Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-13 h-13 rounded-2xl flex items-center justify-center relative shadow-lg"
                        style={{
                          backgroundColor: `${accent.color}18`,
                          border: `1px solid ${accent.color}45`,
                          boxShadow: `0 0 24px ${accent.glow}`,
                        }}
                      >
                        <IconComponent className="w-6 h-6" style={{ color: accent.color }} />
                        <span
                          className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono-code font-bold text-[#030712]"
                          style={{ backgroundColor: accent.color }}
                        >
                          {step.step}
                        </span>
                      </div>

                      <span className="text-[10px] font-mono-code uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-white/[0.04] text-[var(--text-muted)]">
                        {accent.badge}
                      </span>
                    </div>

                    <h3 className="font-headline text-xl font-bold text-[var(--text-primary)] mb-3">
                      {step.title}
                    </h3>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Micro Reassurance Tag */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono-code" style={{ color: accent.color }}>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>
                      {i === 0 && 'Free Consultation'}
                      {i === 1 && 'Fixed-Price Guarantee'}
                      {i === 2 && 'Staging Demos Weekly'}
                      {i === 3 && '100% IP Handover'}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 sm:mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-headline font-bold uppercase tracking-wider text-[#F5C761] hover:underline cursor-pointer group"
          >
            <span>Have a project in mind? Let's discuss your timeline &amp; scope</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
