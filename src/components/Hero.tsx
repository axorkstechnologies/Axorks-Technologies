import React from 'react';
import { HeroShader } from './HeroShader';
import { ArrowRight, Tag, MapPin, CheckCircle2, ShieldCheck, MessageSquare, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenDiscovery: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiscovery }) => {
  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Subtle Background Caustic Shimmer */}
      <HeroShader />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ─── Asymmetric 12-Column Spatial Layout ────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Client Conversion & Clarity (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left relative z-20">
            {/* Transparent Availability & Fixed-Price Pill */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              className="inline-flex flex-wrap items-center gap-2.5 px-4 py-1.5 rounded-full glass-2 border-[#10B981]/35 shadow-[0_0_25px_rgba(16,185,129,0.18)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <span className="text-[11px] sm:text-xs font-mono-code font-bold uppercase tracking-wider text-[#6EE7B7]">
                Milestone Delivery • Direct Access to Senior Engineers
              </span>
            </motion.div>

            {/* High-Contrast Conversion Headline — Quiet & Powerful */}
            <motion.h1
              initial={{ opacity: 1, y: 0 }}
              className="font-display-hero text-4xl sm:text-5xl lg:text-[58px] xl:text-[62px] text-[#F8FAFC] font-extrabold tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] leading-[1.08]"
            >
              We build custom software and AI systems that{' '}
              <span className="bg-gradient-to-r from-[#F5C761] via-[#10B981] to-[#67E8F9] bg-clip-text text-transparent">
                solve real business problems.
              </span>
            </motion.h1>

            {/* Benefit-Focused Subheadline */}
            <motion.p
              initial={{ opacity: 1, y: 0 }}
              className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-2xl font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
            >
              AXORKS is a registered software engineering studio with offices in Karachi &amp; Islamabad. We build bespoke cloud applications, multi-AI workflows, mobile apps, and Web3 platforms for growing enterprises worldwide. Fixed-price proposals before code is written. No hourly surprises.
            </motion.p>

            {/* Pricing & Guarantee Badges */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center gap-2.5 pt-1"
            >
              <div className="px-3.5 py-1.5 rounded-full glass-2 border-[#F5C761]/40 text-[#F5C761] font-mono-code text-[11px] sm:text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(245,199,97,0.2)] flex items-center gap-2">
                <Tag className="w-3.5 h-3.5 text-[#F5C761]" />
                <span className="font-bold text-[#FDE68A]">Projects start from $1,000</span>
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

            {/* Primary & Secondary Action Triggers */}
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
                className="magnetic-btn inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl glass-2 border-[#10B981]/40 hover:border-[#10B981]/70 text-[#6EE7B7] text-xs sm:text-sm font-headline font-semibold uppercase tracking-wider transition-all"
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
            <div className="pt-2 flex items-center gap-4 text-xs font-mono-code text-[var(--text-muted)]">
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

          {/* ─── Right Column: Living Spatial Motion Viewport (5 Cols) ───────── */}
          <div className="lg:col-span-5 relative spatial-stage">
            {/* Ambient Backlight Bleed */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#F5C761]/15 via-[#10B981]/15 to-[#8B5CF6]/15 rounded-3xl blur-2xl pointer-events-none opacity-60" />

            {/* Spatial Chamber Capsule */}
            <div className="relative rounded-3xl glass-2 holographic-edge p-2.5 sm:p-3 shadow-[0_24px_70px_rgba(0,0,0,0.85)] spatial-card">
              {/* Header Status Bar */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.08] text-[11px] font-mono-code mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-[var(--text-primary)] font-semibold tracking-wider">
                    LIVING SPATIAL ENGINE
                  </span>
                </div>
                <span className="text-[10px] text-[#F5C761] bg-[#F5C761]/10 px-2 py-0.5 rounded border border-[#F5C761]/30">
                  ACTIVE
                </span>
              </div>

              {/* The Video Container with Precise Watermark Masking */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#030712]">
                <video
                  src="/Images/Motion_AXORKS.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover scale-[1.08] transform-gpu"
                />

                {/* Soft Edge Vignettes */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent pointer-events-none" />

                {/* 
                  PRECISE WATERMARK COVER:
                  A sleek spatial telemetry badge placed squarely over the bottom-right watermark location.
                */}
                <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#030712]/95 border border-[#F5C761]/45 backdrop-blur-2xl shadow-[0_0_24px_rgba(245,199,97,0.35)]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10B981]" />
                  </span>
                  <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#F5C761]">
                    AXORKS // MULTI-AI RUNTIME
                  </span>
                </div>
              </div>

              {/* Verified Outcome Micro-Readout */}
              <div className="mt-2.5 px-3 py-2 rounded-xl bg-black/40 border border-white/[0.04] flex items-center justify-between text-[11px] font-mono-code">
                <span className="text-[var(--text-muted)]">Verified Delivery:</span>
                <span className="text-[#6EE7B7] font-semibold">4 Platforms In Production</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
