import React, { useState, useEffect } from 'react';
import { HeroShader } from './HeroShader';
import { ArrowRight, Tag, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenDiscovery: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiscovery }) => {
  const [latency, setLatency] = useState(38.4);
  const [eventsCount, setEventsCount] = useState(14820);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency((prev) => {
        const delta = (Math.random() - 0.5) * 1.8;
        return Number(Math.max(34.2, Math.min(42.8, prev + delta)).toFixed(1));
      });
      setEventsCount((prev) => prev + Math.floor(Math.random() * 8 + 3));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden px-4 lg:px-8 pt-16 pb-24 lg:pt-20 lg:pb-28">
      <HeroShader />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[640px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F5C761]/15 via-[#881337]/10 to-transparent pointer-events-none blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Availability Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-[#10B981]/30 shadow-[0_0_25px_rgba(16,185,129,0.25)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-80" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]" />
          </span>
          <span className="text-[11px] sm:text-[12px] uppercase tracking-widest text-[#F5C761] font-semibold font-mono-code">
            Available for New Projects — Direct Access to Senior Engineers
          </span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-5xl font-display-hero text-4xl sm:text-5xl md:text-6xl lg:text-[68px] text-[var(--text-primary)] tracking-tight font-extrabold drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] leading-[1.12]"
        >
          We Build the Software That{' '}
          <span className="bg-gradient-to-r from-[#F5C761] via-[#10B981] to-[#8B5CF6] bg-clip-text text-transparent">
            Powers Your Growth.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-5 max-w-3xl text-base md:text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed"
        >
          AXORKS is a registered software engineering studio building custom web applications, AI automations, mobile apps, and Web3 systems for growing businesses worldwide. Fixed-price. Milestone-based. Direct access to leadership.
        </motion.p>

        {/* Value Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          <div className="px-4 py-2 rounded-full glass-card border-[#F5C761]/40 text-[#F5C761] font-mono-code text-[12px] uppercase tracking-wider shadow-[0_0_20px_rgba(245,199,97,0.2)] flex items-center gap-2">
            <Tag className="w-3.5 h-3.5" />
            <span className="font-bold text-[#FDE68A]">Projects start from $1,000</span>
          </div>
          <div className="px-4 py-2 rounded-full glass-card text-[var(--text-primary)] font-mono-code text-[12px] uppercase tracking-wider">
            100% Fixed-Price Milestones
          </div>
          <div className="px-4 py-2 rounded-full glass-card text-[var(--text-primary)] font-mono-code text-[12px] uppercase tracking-wider">
            Direct Senior Engineers
          </div>
          <div className="px-4 py-2 rounded-full glass-card border-[#10B981]/40 text-[#6EE7B7] font-mono-code text-[12px] uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Offices in Karachi &amp; Islamabad</span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenDiscovery}
            className="relative group w-full sm:w-auto magnetic-btn inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] text-[13px] uppercase font-bold tracking-wider glow-gold-box cursor-pointer overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>Book Free Discovery Call</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FDE68A] via-[#F5C761] to-[#6EE7B7] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <a
            href="https://wa.me/923141030223"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto magnetic-btn inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl glass-card hover:border-[#10B981]/60 text-[var(--text-primary)] text-[13px] uppercase font-semibold tracking-wider transition-all"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]" />
            </span>
            <span>WhatsApp: +92 314 103 0223</span>
          </a>
        </motion.div>

        {/* Live Telemetry Console */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-14 w-full max-w-5xl rounded-2xl chromatic-border bg-[var(--bg-card)]/95 p-4 md:p-6 shadow-[0_24px_64px_rgba(0,0,0,0.9)] backdrop-blur-3xl text-left relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F5C761] via-[#10B981] to-[#581C87]" />

          {/* Terminal Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]/80 shadow-[0_0_8px_#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#F5C761]/90 shadow-[0_0_8px_rgba(245,199,97,0.8)]" />
              <div className="w-3 h-3 rounded-full bg-[#10B981]/90 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span className="ml-3 font-mono-code text-[12px] text-[var(--text-muted)] font-semibold tracking-wider">
                AXORKS_ENGINEERING // LIVE
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-[#6EE7B7] font-mono-code text-[11px] uppercase tracking-wider bg-[#044E38]/50 px-2.5 py-1 rounded-md border border-[#10B981]/30">
              ● Systems Active
            </span>
          </div>

          {/* Terminal Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-4">
            {/* Code Block */}
            <div className="lg:col-span-7 rounded-xl bg-[var(--bg-primary)]/95 border border-[var(--border-subtle)] p-4 font-mono-code text-[12px] space-y-2 text-[var(--text-secondary)] overflow-x-auto relative shadow-inner">
              <div className="text-[var(--text-muted)] flex items-center justify-between pb-1.5 border-b border-[var(--border-subtle)]">
                <span className="text-[#FDE68A]">// What we ship — production architecture</span>
                <span className="text-[10px] text-[var(--text-muted)]/60 uppercase">TypeScript • React • AI</span>
              </div>
              <div className="text-[var(--text-primary)] pt-1">
                <span className="text-[#8B5CF6] font-semibold">async function</span>{' '}
                <span className="text-[#F5C761] font-bold">buildYourProduct</span>
                (spec: <span className="text-[#6EE7B7]">ProjectScope</span>) {'{'}
              </div>
              <div className="pl-4 text-[var(--text-muted)]">
                // Fixed-price. Milestone-based. No surprises.
              </div>
              <div className="pl-4 text-[var(--text-primary)]">
                <span className="text-[#8B5CF6]">const</span> proposal ={' '}
                <span className="text-[#8B5CF6]">await</span> axorks.
                <span className="text-[#EAB308]">createFixedPriceProposal</span>(spec);
              </div>
              <div className="pl-4 text-[var(--text-primary)]">
                <span className="text-[#8B5CF6]">const</span> milestones ={' '}
                <span className="text-[#8B5CF6]">await</span> axorks.
                <span className="text-[#EAB308]">deliverWithTransparency</span>(proposal);
              </div>
              <div className="pl-4 text-[var(--text-muted)]">
                // You own 100% of the source code. Zero lock-in.
              </div>
              <div className="pl-4 text-[var(--text-primary)]">
                <span className="text-[#8B5CF6]">return</span>{' '}
                <span className="text-[#F5C761] font-semibold">await</span>{' '}
                milestones.<span className="text-[#EAB308]">handoverIP</span>({'{ '}
                ownership: <span className="text-[#10B981]">'100%'</span>, latency:{' '}
                <span className="text-[#F5C761]">{latency}</span>
                {' }'});
              </div>
              <div className="text-[var(--text-primary)]">{'}'}</div>
              <div className="pt-2 border-t border-[var(--border-subtle)] text-[#10B981] flex items-center justify-between text-[11px]">
                <span className="text-[#6EE7B7]">
                  ✓ {eventsCount.toLocaleString()} builds shipped
                </span>
                <span className="text-[var(--text-muted)]">P99: {latency}ms</span>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-3">
              <div className="p-4 rounded-xl glass-card border-[#F5C761]/25 relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#F5C761]/10 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[var(--text-muted)]">
                    Delivery Pipeline
                  </span>
                  <span className="text-[#10B981] font-mono-code text-[11px] bg-[#044E38]/50 px-2 py-0.5 rounded border border-[#10B981]/25">
                    On Track
                  </span>
                </div>
                <div className="mt-1 font-display-hero text-4xl text-[#F5C761] font-bold tracking-tight">
                  {latency} ms
                </div>
                <div className="mt-2 w-full bg-[var(--bg-tertiary)] rounded-full h-1.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#F5C761] via-[#10B981] to-[#8B5CF6] h-full w-[88%]" />
                </div>
              </div>

              <div className="p-4 rounded-xl glass-card border-[#10B981]/25 relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-[#10B981]/10 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[var(--text-muted)]">
                    Client Satisfaction
                  </span>
                  <span className="text-[#6EE7B7] font-mono-code text-[11px] bg-[#044E38]/50 px-2 py-0.5 rounded border border-[#10B981]/25">
                    Verified
                  </span>
                </div>
                <div className="mt-1 font-display-hero text-4xl text-[var(--text-primary)] font-bold tracking-tight">
                  100% Delivery
                </div>
                <div className="mt-2 flex items-center gap-2 text-[var(--text-muted)] font-mono-code text-[10px]">
                  <span>Fixed-Price</span> • <span>Milestone-Based</span> • <span>IP Handover</span>
                </div>
              </div>

              <div className="p-3 rounded-xl glass-card border-[#F5C761]/35 flex items-center justify-between shadow-[0_0_15px_rgba(245,199,97,0.1)]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg overflow-hidden border border-[#F5C761]/30">
                    <img src="/Images/Founder and CEO SOFTWARE ENGINEER.jpeg" alt="Muhammad Mujahid" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[var(--text-primary)]">
                    Founder Oversight
                  </span>
                </div>
                <span className="text-[#F5C761] font-mono-code text-[11px] font-semibold">
                  ACTIVE
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
