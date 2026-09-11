import React, { useState, useEffect } from 'react';
import { HeroShader } from './HeroShader';
import { ArrowRight, Tag, MapPin, Sparkles, Cpu, ShieldCheck, Zap, Layers } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenDiscovery: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiscovery }) => {
  const [latency, setLatency] = useState(38.4);
  const [eventsCount, setEventsCount] = useState(14820);
  const [activeTab, setActiveTab] = useState<'multi-ai' | 'smart-engine' | 'scale'>('multi-ai');

  // Real-time telemetry pulse for authentic engineering proof
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency((prev) => {
        const delta = (Math.random() - 0.5) * 1.6;
        return Number(Math.max(34.1, Math.min(41.8, prev + delta)).toFixed(1));
      });
      setEventsCount((prev) => prev + Math.floor(Math.random() * 9 + 4));
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 pt-12 pb-24 lg:pt-16 lg:pb-32">
      {/* Living Ambient Caustic Waves */}
      <HeroShader />

      {/* Volumetric Radial Top Bleed */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F5C761]/12 via-[#10B981]/8 to-transparent pointer-events-none blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Availability Live Beacon */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-2 holographic-edge shadow-[0_0_30px_rgba(16,185,129,0.22)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]" />
          </span>
          <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#F5C761] font-semibold font-mono-code">
            NOW ACCEPTING COMMISSIONS — DIRECT SENIOR ARCHITECT ACCESS
          </span>
        </motion.div>

        {/* Hero Spatial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mt-6 max-w-5xl text-center font-display-hero text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-[var(--text-primary)] font-extrabold tracking-tight drop-shadow-[0_4px_35px_rgba(0,0,0,0.9)] leading-[1.08]"
        >
          Architecting High-Yield Software &amp;{' '}
          <span className="bg-gradient-to-r from-[#F5C761] via-[#10B981] via-60% to-[#8B5CF6] bg-clip-text text-transparent">
            Multi-AI Workflows.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-3xl text-center text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-normal"
        >
          AXORKS is an elite private software engineering studio based in Karachi &amp; Islamabad. We architect bespoke cloud platforms, autonomous AI pipelines, high-concurrency mobile apps, and Web3 systems. Fixed price. Milestone delivery. Zero agency bloat.
        </motion.p>

        {/* Value Metrics Pills Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          <div className="px-4 py-2 rounded-full glass-2 border-[#F5C761]/40 text-[#F5C761] font-mono-code text-[12px] uppercase tracking-wider shadow-[0_0_24px_rgba(245,199,97,0.22)] flex items-center gap-2">
            <Tag className="w-3.5 h-3.5" />
            <span className="font-bold text-[#FDE68A]">Projects start from $1,000</span>
          </div>
          <div className="px-4 py-2 rounded-full glass-2 text-[var(--text-primary)] font-mono-code text-[12px] uppercase tracking-wider">
            100% Milestone-Based
          </div>
          <div className="px-4 py-2 rounded-full glass-2 text-[var(--text-primary)] font-mono-code text-[12px] uppercase tracking-wider">
            Direct Senior Team
          </div>
          <div className="px-4 py-2 rounded-full glass-2 border-[#10B981]/40 text-[#6EE7B7] font-mono-code text-[12px] uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_18px_rgba(16,185,129,0.18)]">
            <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Offices: Karachi &amp; Islamabad</span>
          </div>
        </motion.div>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.48 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenDiscovery}
            className="w-full sm:w-auto magnetic-btn inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] text-[13px] uppercase font-bold tracking-wider glow-gold-jewel cursor-pointer overflow-hidden relative group"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>Book Free Architecture Call</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FDE68A] via-[#F5C761] to-[#6EE7B7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <a
            href="https://wa.me/923141030223"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto magnetic-btn inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl glass-2 hover:border-[#10B981]/60 text-[var(--text-primary)] text-[13px] uppercase font-semibold tracking-wider transition-all"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]" />
            </span>
            <span>WhatsApp: +92 314 103 0223</span>
          </a>
        </motion.div>

        {/* ─── LIVING SPATIAL OBJECT & MOTION CHAMBER ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 w-full max-w-5xl spatial-stage"
        >
          <div className="relative rounded-3xl glass-2 holographic-edge p-2 sm:p-3.5 shadow-[0_32px_80px_rgba(0,0,0,0.85)] spatial-card">
            {/* Top Specular Status Ribbon */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-white/[0.08] text-xs font-mono-code">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-[var(--text-primary)] font-bold tracking-wider">
                  SPATIAL RUNTIME // MULTI-AI ENGINE
                </span>
                <span className="hidden sm:inline text-[var(--text-muted)] text-[11px]">
                  • TENSOR V6 CONCURRENCY
                </span>
              </div>

              <div className="flex items-center gap-3 text-[11px] text-[var(--text-muted)]">
                <span className="px-2.5 py-0.5 rounded-md bg-[#10B981]/15 text-[#6EE7B7] border border-[#10B981]/30">
                  LATENCY {latency}ms
                </span>
                <span className="hidden md:inline">KARACHI &amp; ISLAMABAD NODES</span>
              </div>
            </div>

            {/* Video Motion Frame with Clean Watermark Masking */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.2/1] rounded-2xl overflow-hidden bg-[#030712]">
              {/* The KlingAI Motion Video */}
              <video
                src="/Images/Motion_AXORKS.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-[1.08] transform-gpu transition-transform duration-1000"
              />

              {/* Depth Vignettes & Refraction Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-[#030712]/15 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/70 via-transparent to-[#030712]/70 pointer-events-none" />

              {/* Living Hologram Multi-AI Overlay Nodes */}
              <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                <div className="px-3 py-1 rounded-lg glass-2 border-[#F5C761]/35 backdrop-blur-xl text-[#FDE68A] text-[10px] font-mono-code uppercase font-semibold flex items-center gap-1.5 shadow-[0_0_15px_rgba(245,199,97,0.2)]">
                  <Sparkles className="w-3 h-3 text-[#F5C761]" />
                  <span>Custom Architecture</span>
                </div>
                <div className="px-3 py-1 rounded-lg glass-2 border-[#10B981]/35 backdrop-blur-xl text-[#6EE7B7] text-[10px] font-mono-code uppercase font-semibold flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <Cpu className="w-3 h-3 text-[#10B981]" />
                  <span>Multi-AI Workflows</span>
                </div>
                <div className="hidden sm:flex px-3 py-1 rounded-lg glass-2 border-[#8B5CF6]/35 backdrop-blur-xl text-[#C4B5FD] text-[10px] font-mono-code uppercase font-semibold items-center gap-1.5 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                  <Layers className="w-3 h-3 text-[#8B5CF6]" />
                  <span>Web3 &amp; Mobile</span>
                </div>
              </div>

              {/* 
                PRECISE WATERMARK COVER:
                Clean high-tech spatial telemetry badge positioned directly over the bottom-right watermark area,
                reinforced by the scale-[1.08] crop and smooth dark-glass vignette.
              */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#030712]/95 border border-[#F5C761]/45 backdrop-blur-2xl shadow-[0_0_30px_rgba(245,199,97,0.35)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-80" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#F5C761]">
                  AXORKS // NEURAL CORE 2026
                </span>
                <span className="hidden sm:inline text-[9px] font-mono-code text-[#6EE7B7] bg-[#044E38]/60 px-1.5 py-0.5 rounded border border-[#10B981]/30">
                  LIVE 60FPS
                </span>
              </div>
            </div>

            {/* Interactive Telemetry Console Subgrid */}
            <div className="mt-3 p-3 sm:p-4 rounded-2xl bg-[#030712]/90 border border-white/[0.06] grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Code Inset */}
              <div className="md:col-span-7 font-mono-code text-[11px] sm:text-[12px] space-y-1.5 text-[var(--text-secondary)]">
                <div className="flex items-center justify-between text-[var(--text-muted)] text-[10px] pb-1 border-b border-white/[0.04]">
                  <span className="text-[#FDE68A]">// Production Engineering Handshake</span>
                  <span className="text-[#10B981]">100% IP HANDOVER</span>
                </div>
                <p className="text-[var(--text-primary)]">
                  <span className="text-[#8B5CF6]">const</span> axorksContract = <span className="text-[#8B5CF6]">await</span> studio.<span className="text-[#EAB308]">commitMilestone</span>({'{'}
                </p>
                <p className="pl-4">
                  threshold: <span className="text-[#F5C761] font-semibold">"$1,000 Starting"</span>,
                </p>
                <p className="pl-4">
                  delivery: <span className="text-[#10B981]">"Fixed-Price Proposal"</span>,
                </p>
                <p className="pl-4">
                  access: <span className="text-[#6EE7B7]">"Direct Senior Engineers &amp; Muhammad Mujahid"</span>
                </p>
                <p className="text-[var(--text-primary)]">{'}'});</p>
              </div>

              {/* Metrics Readout */}
              <div className="md:col-span-5 flex flex-col justify-between gap-2 p-2 rounded-xl bg-[var(--bg-tertiary)]/50 border border-white/[0.04]">
                <div className="flex items-center justify-between text-[11px] font-mono-code">
                  <span className="text-[var(--text-muted)]">Active Orchestration</span>
                  <span className="text-[#10B981] font-bold">100% Pass</span>
                </div>
                <div className="font-display-hero text-2xl text-[#F5C761] font-bold">
                  {eventsCount.toLocaleString()}{' '}
                  <span className="text-xs text-[var(--text-muted)] font-normal font-mono-code">
                    events routed
                  </span>
                </div>
                <div className="w-full bg-white/[0.05] rounded-full h-1.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#F5C761] via-[#10B981] to-[#8B5CF6] h-full w-[94%]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
