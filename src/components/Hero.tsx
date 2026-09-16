import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenDiscovery: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiscovery }) => {
  return (
    <section
      className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32 min-h-[85vh] flex items-center bg-[#060A16]"
    >
      {/* ─── SYSTEMS LIMITED ATMOSPHERIC MOTION (Strictly Right Side • Atmospheric Background) ─── */}
      <div
        className="absolute top-0 bottom-0 right-0 w-full lg:w-[50%] xl:w-[48%] 2xl:w-[46%] pointer-events-none overflow-hidden select-none z-0"
        aria-hidden="true"
      >
        <video
          src="/Images/Motion_AXORKS.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center scale-[1.02] opacity-90"
        />

        {/* Desktop Left-to-Right Feather: Exactly matches base #060A16 with zero line or color split */}
        <div
          className="hidden lg:block absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, #060A16 0%, #060A16 12%, rgba(6, 10, 22, 0.85) 30%, rgba(6, 10, 22, 0.35) 60%, transparent 85%)',
          }}
        />

        {/* Mobile Scrim: High-contrast backing for stacked mobile typography */}
        <div
          className="lg:hidden absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(6, 10, 22, 0.94) 0%, rgba(6, 10, 22, 0.88) 50%, rgba(6, 10, 22, 0.82) 100%)',
          }}
        />

        {/* Top Edge Feather */}
        <div
          className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #060A16 0%, transparent 100%)',
          }}
        />

        {/* Bottom Feather into Next Section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* ─── HERO CONTENT (Strictly Left Side • High Contrast • Conversion First) ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl space-y-6 text-left">
          {/* Availability & Guarantee Pill */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-2.5"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/50 border border-[#10B981]/50 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <span className="text-[11px] sm:text-xs font-mono-code font-bold uppercase tracking-wider text-[#10B981]">
                AI-First Engineering Studio · Karachi &amp; Islamabad
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 border border-[#06B6D4]/40 text-[#38BDF8] font-mono-code text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
              <span>Serving USA • UK • Europe • Saudi Arabia • UAE • Kuwait • Bahrain</span>
            </div>
          </motion.div>

          {/* Locked Exact H1 Headline */}
          <motion.h1
            initial={{ opacity: 1, y: 0 }}
            className="font-display-hero text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] text-white font-extrabold tracking-tight leading-[1.08] drop-shadow-md"
          >
            Intelligent systems that{' '}
            <span className="bg-gradient-to-r from-[#F5C761] via-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
              run your business.
            </span>
          </motion.h1>

          {/* Locked Exact Supporting Line */}
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            className="text-lg sm:text-xl font-medium text-[var(--gold)] drop-shadow-sm font-headline"
          >
            AI automation and custom software for growing companies.
          </motion.p>

          {/* Benefit-Focused Narrative */}
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm"
          >
            Axorks is an AI-first software engineering studio based in Karachi and Islamabad. We help growing businesses automate manual work and build reliable custom systems through intelligent automation, custom web applications, web3 platforms, and mobile solutions. All work is delivered with fixed-price proposals and clear milestone-based payments.
          </motion.p>

          {/* Locked Pricing Language & Commercial Badges */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-2.5 pt-1"
          >
            <div className="px-4 py-2 rounded-full bg-black/60 border border-[#F5C761]/50 text-[#F5C761] font-mono-code text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
              <span>Projects from $1,000 · Fixed-price milestones</span>
            </div>

            <div className="px-3.5 py-2 rounded-full bg-black/50 border border-white/15 text-slate-200 font-mono-code text-xs uppercase tracking-wider backdrop-blur-md">
              <span>100% IP Ownership</span>
            </div>

            <div className="px-3.5 py-2 rounded-full bg-black/50 border border-[#06B6D4]/30 text-slate-200 font-mono-code text-xs uppercase tracking-wider backdrop-blur-md">
              <span className="text-[#38BDF8] font-semibold">Direct Senior Access</span>
            </div>
          </motion.div>

          {/* Primary Action Triggers */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
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
              className="magnetic-btn inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-black/50 border border-[#10B981]/50 hover:border-[#10B981]/90 text-white text-xs sm:text-sm font-headline font-semibold uppercase tracking-wider transition-all backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <MessageSquare className="w-4 h-4 text-[#10B981]" />
              <span>WhatsApp: +92 314 103 0223</span>
            </a>
          </motion.div>

          {/* Direct Email & Quiet Reassurance Strip */}
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono-code text-slate-300">
            <a
              href="mailto:contact@axorks.com?subject=Project Inquiry: AXORKS Technologies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--gold)] hover:underline font-semibold"
            >
              contact@axorks.com
            </a>
            <span className="text-white/30">•</span>
            <span>24-hour proposal turnaround</span>
            <span className="text-white/30">•</span>
            <span>Zero hourly billing surprises</span>
          </div>
        </div>
      </div>
    </section>
  );
};
