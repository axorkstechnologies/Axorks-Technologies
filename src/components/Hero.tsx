import React from 'react';
import { HeroShader } from './HeroShader';
import { ArrowRight, Tag, MapPin, CheckCircle2, ShieldCheck, MessageSquare, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenDiscovery: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiscovery }) => {
  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-32 min-h-[85vh] flex items-center">
      {/* Ambient Caustic Lighting in Canvas */}
      <HeroShader />

      {/* ─── SYSTEMS LIMITED ATMOSPHERIC MOTION (Integrated Right-Side Element) ─── */}
      <div
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] pointer-events-none overflow-hidden select-none z-0"
        aria-hidden="true"
      >
        <video
          src="/Images/Motion_AXORKS.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center scale-[1.14] translate-x-[2%] opacity-65 dark:opacity-75 transition-opacity duration-700"
        />

        {/* Soft Multi-Directional Gradient Scrims (Blends video seamlessly into background) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)] via-[var(--bg-primary)]/85 via-25% lg:via-20% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)]/80 via-transparent to-transparent" />
      </div>

      {/* ─── HERO CONTENT (High Contrast • Conversion First) ────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl lg:max-w-2xl xl:max-w-3xl space-y-6 text-left">
          {/* Availability & Guarantee Pill */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="inline-flex flex-wrap items-center gap-2.5 px-4 py-1.5 rounded-full glass-2 border-[var(--emerald)]/35 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
            </span>
            <span className="text-[11px] sm:text-xs font-mono-code font-bold uppercase tracking-wider text-[var(--emerald)]">
              Milestone Delivery • Direct Access to Senior Engineers
            </span>
          </motion.div>

          {/* High-Contrast Conversion Headline — Quiet & Authoritative */}
          <motion.h1
            initial={{ opacity: 1, y: 0 }}
            className="font-display-hero text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] text-[var(--text-primary)] font-extrabold tracking-tight leading-[1.08] drop-shadow-sm"
          >
            We build custom software and AI systems that{' '}
            <span className="bg-gradient-to-r from-[#F5C761] via-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
              solve real business problems.
            </span>
          </motion.h1>

          {/* Benefit-Focused Subheadline */}
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal max-w-2xl"
          >
            AXORKS is a registered software engineering studio with offices in Karachi &amp; Islamabad. We architect bespoke cloud platforms, multi-AI workflows, mobile apps, and Web3 systems for growing companies. Fixed-price proposals before code is written. No hourly surprises.
          </motion.p>

          {/* Pricing & Commercial Transparency Badges */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-2.5 pt-1"
          >
            <div className="px-3.5 py-1.5 rounded-full glass-2 border-[#F5C761]/40 text-[#F5C761] font-mono-code text-[11px] sm:text-xs uppercase tracking-wider flex items-center gap-2">
              <Tag className="w-3.5 h-3.5 text-[#F5C761]" />
              <span className="font-bold text-[var(--text-primary)]">
                Projects start from <span className="text-[#F5C761]">$1,000</span>
              </span>
            </div>

            <div className="px-3.5 py-1.5 rounded-full glass-2 text-[var(--text-secondary)] font-mono-code text-[11px] sm:text-xs uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              <span>100% Fixed-Price Milestones</span>
            </div>

            <div className="px-3.5 py-1.5 rounded-full glass-2 text-[var(--text-secondary)] font-mono-code text-[11px] sm:text-xs uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>Offices in Karachi &amp; Islamabad</span>
            </div>
          </motion.div>

          {/* Primary Action Triggers */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
          >
            <button
              onClick={onOpenDiscovery}
              className="magnetic-btn inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] text-xs sm:text-sm font-headline font-bold uppercase tracking-wider glow-gold-jewel cursor-pointer shadow-xl transition-all"
            >
              <span>Book Free Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/923141030223"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl glass-2 border-[#10B981]/40 hover:border-[#10B981]/70 text-[var(--text-primary)] text-xs sm:text-sm font-headline font-semibold uppercase tracking-wider transition-all"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <MessageSquare className="w-4 h-4 text-[#10B981]" />
              <span>Direct WhatsApp: +92 314 103 0223</span>
            </a>
          </motion.div>

          {/* Quiet Reassurance Strip */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono-code text-[var(--text-muted)]">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#10B981]" />
              <span>24-hour proposal turnaround</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#F5C761]" />
              <span>100% IP ownership transfer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
