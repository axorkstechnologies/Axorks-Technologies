import React from 'react';
import { motion } from 'motion/react';
import { WHY_ITEMS } from '../data/mockData';
import { Tag, ShieldCheck, Users, Building2, Clock, Key, CheckCircle, MapPin, Sparkles } from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string; style?: React.CSSProperties }>> = {
  Tag, ShieldCheck, Users, Building2, Clock, Key,
};

const ACCENTS: Record<string, { color: string; border: string; bg: string }> = {
  gold: { color: '#F5C761', border: 'border-[#F5C761]/30', bg: 'rgba(245, 199, 97, 0.12)' },
  emerald: { color: '#10B981', border: 'border-[#10B981]/30', bg: 'rgba(16, 185, 129, 0.12)' },
  violet: { color: '#8B5CF6', border: 'border-[#8B5CF6]/30', bg: 'rgba(139, 92, 246, 0.12)' },
  wine: { color: '#BE123C', border: 'border-[#BE123C]/30', bg: 'rgba(190, 18, 60, 0.12)' },
};

export const WhyAxorks: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative bg-[var(--bg-secondary)]/30 border-y border-white/[0.06]" id="why-axorks">
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
            <span>The AXORKS Difference</span>
          </div>

          <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[52px] text-[var(--text-primary)] font-extrabold tracking-tight">
            Built Like Senior Engineers.{' '}
            <span className="bg-gradient-to-r from-[#F5C761] via-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
              Priced with Transparency.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed font-normal">
            No sales reps selling bloated timelines. You work directly with senior software architects and systems engineers committed to measurable business outcomes.
          </p>
        </motion.div>

        {/* 6 Value Architecture Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 spatial-stage">
          {WHY_ITEMS.map((item, i) => {
            const IconComponent = ICON_MAP[item.icon] || Tag;
            const accent = ACCENTS[item.accent] || ACCENTS.gold;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-2 holographic-edge rounded-3xl p-7 flex flex-col justify-between spatial-card relative overflow-hidden"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: accent.bg,
                      border: `1px solid ${accent.color}40`,
                    }}
                  >
                    <IconComponent className="w-5 h-5" style={{ color: accent.color }} />
                  </div>

                  <h3
                    className="font-headline text-xl font-bold mb-2 tracking-tight"
                    style={{ color: accent.color }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono-code text-[var(--text-muted)]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Guaranteed in Contract</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Real Office Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-3xl overflow-hidden glass-2 holographic-edge max-w-5xl mx-auto shadow-2xl spatial-card"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
            <div className="md:col-span-7 relative h-[260px] sm:h-[340px] overflow-hidden bg-[#030712]">
              <img
                src="/Images/Axorks_Office.jpeg"
                alt="AXORKS Technologies headquarters and engineering studio"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-transparent to-transparent md:hidden" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#030712] hidden md:block" />

              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#030712]/80 backdrop-blur-xl border border-[#10B981]/40 text-[#6EE7B7] text-[11px] font-mono-code flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  Real Engineering Desks
                </span>
              </div>
            </div>

            <div className="md:col-span-5 p-6 sm:p-8 lg:p-10 space-y-4">
              <div className="text-[11px] uppercase tracking-wider font-mono-code text-[#F5C761] font-semibold">
                Physical Corporate Entity
              </div>

              <h3 className="font-display-hero text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                Axorks Pvt Limited
              </h3>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Registered private software company with established physical offices in Karachi &amp; Islamabad, Pakistan.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/[0.06] text-xs font-mono-code text-[var(--text-muted)]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Karachi Office: Tech Hub Commercial Sector</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  <span>Islamabad Office: Blue Area Corporate Zone</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/923141030223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-wider text-[#F5C761] hover:underline"
                >
                  <span>Connect With Leadership on WhatsApp &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
