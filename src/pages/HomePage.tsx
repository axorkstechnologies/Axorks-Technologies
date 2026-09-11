import React from 'react';
import { Hero } from '../components/Hero';
import { useNavigate } from '../router/Router';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/mockData';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const agrotrace = PROJECTS.find((p) => p.id === 'agrotrace') || PROJECTS[0];
  const ipmi = PROJECTS.find((p) => p.id === 'ipmi-os') || PROJECTS[1];

  return (
    <div className="w-full">
      {/* 1. Hero Section (Strictly Right Side Atmospheric Motion • High Contrast Left Text) */}
      <Hero onOpenDiscovery={() => navigate('/contact')} />

      {/* 2. Executive Commercial Protocol Strip — Minimalist Studio Ledger (No AI-Icon Bloat) */}
      <section className="w-full py-7 px-4 sm:px-6 lg:px-8 bg-[#080D1A] border-y border-[var(--glass-border)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[var(--glass-border)]">
          <div className="pt-3 sm:pt-0 sm:pr-6 flex flex-col">
            <span className="font-mono-code text-[11px] text-[var(--gold)] font-bold tracking-widest uppercase mb-1">
              // COMMERCIAL TERMS
            </span>
            <span className="font-headline text-lg font-bold text-white tracking-tight">Fixed-Price Proposals</span>
            <span className="text-xs text-[var(--text-secondary)] mt-1 font-normal leading-relaxed">
              Guaranteed functional scope &amp; price locked before development begins.
            </span>
          </div>

          <div className="pt-4 sm:pt-0 sm:px-6 flex flex-col">
            <span className="font-mono-code text-[11px] text-[var(--emerald)] font-bold tracking-widest uppercase mb-1">
              // PAYMENT GOVERNANCE
            </span>
            <span className="font-headline text-lg font-bold text-white tracking-tight">Milestone Releases</span>
            <span className="text-xs text-[var(--text-secondary)] mt-1 font-normal leading-relaxed">
              You inspect &amp; verify functioning staging builds before milestone funds release.
            </span>
          </div>

          <div className="pt-4 sm:pt-0 sm:px-6 flex flex-col">
            <span className="font-mono-code text-[11px] text-[#A78BFA] font-bold tracking-widest uppercase mb-1">
              // DIRECT ENGAGEMENT
            </span>
            <span className="font-headline text-lg font-bold text-white tracking-tight">Senior Hands Only</span>
            <span className="text-xs text-[var(--text-secondary)] mt-1 font-normal leading-relaxed">
              Direct partner architecting in Karachi &amp; Islamabad. Zero offshore junior handoffs.
            </span>
          </div>

          <div className="pt-4 sm:pt-0 sm:pl-6 flex flex-col">
            <span className="font-mono-code text-[11px] text-[#38BDF8] font-bold tracking-widest uppercase mb-1">
              // ENTRY TIERS
            </span>
            <span className="font-headline text-lg font-bold text-white tracking-tight">From $1,000 Upward</span>
            <span className="text-xs text-[var(--text-secondary)] mt-1 font-normal leading-relaxed">
              Transparent milestone allocations for serious engineering engagements.
            </span>
          </div>
        </div>
      </section>

      {/* 3. Core Capabilities — Asymmetric Studio Bento (Break Symmetrical 4-Card Pattern) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto">
          {/* Editorial Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono-code text-xs uppercase text-[var(--gold)] tracking-widest font-semibold block mb-2">
                01 // CAPABILITIES TAXONOMY
              </span>
              <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[48px] text-[var(--text-primary)] font-extrabold tracking-tight">
                Architectural Disciplines.
              </h2>
            </div>

            <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-wider text-[var(--gold)] hover:underline cursor-pointer group"
            >
              <span>Explore All 6 Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Asymmetric Bento: Large 7-Column Master Card + 5-Column Stacked Pair */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Master Featured Card: Full-Stack Web & Multi-Agent AI Systems (7 Cols) */}
            <div
              onClick={() => navigate('/services')}
              className="lg:col-span-7 glass-2 holographic-edge rounded-3xl p-7 sm:p-10 spatial-card cursor-pointer group flex flex-col justify-between border-[var(--gold)]/30 hover:border-[var(--gold)]/60 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/30">
                    Flagship Core
                  </span>
                  <span className="font-mono-code text-xs text-[var(--text-muted)]">
                    DISCIPLINE 01 &amp; 02
                  </span>
                </div>

                <h3 className="font-display-hero text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--gold)] transition-colors">
                  Custom Web Applications &amp; Multi-AI Workflows
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                  We engineer high-concurrency bespoke web applications, enterprise client portals, and multi-tenant platforms unified with autonomous AI agent pipelines, RAG retrieval engines, and real-time operational telemetry.
                </p>

                {/* Concrete Architectural Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 pt-4 border-t border-[var(--glass-border)] text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2 font-mono-code">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                    <span>Next.js, Node.js &amp; TypeScript Core</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono-code">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--emerald)]" />
                    <span>Autonomous Multi-Agent Pipelines</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono-code">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                    <span>Real-Time State &amp; WebSocket Sync</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono-code">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                    <span>SOC2/HIPAA Readiness &amp; CI/CD</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[var(--gold)] font-bold">
                <span>Inspect Web &amp; AI Scope</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Specifications <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Stacked Asymmetric 5-Column Sidebars */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Specialized Card: Cross-Platform Mobile */}
              <div
                onClick={() => navigate('/services')}
                className="flex-1 glass-2 holographic-edge rounded-3xl p-6 sm:p-7 spatial-card cursor-pointer group flex flex-col justify-between border-white/10 hover:border-[#A78BFA]/50 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[#A78BFA]/15 text-[#A78BFA] border border-[#A78BFA]/30">
                      Mobile Engineering
                    </span>
                    <span className="font-mono-code text-xs text-[var(--text-muted)]">
                      DISCIPLINE 03
                    </span>
                  </div>
                  <h4 className="font-headline text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[#A78BFA] transition-colors">
                    Flutter &amp; Native Mobile Apps
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Native-performance iOS &amp; Android systems with offline-first synchronization, hardware biometric security, and clean App Store releases.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[#A78BFA] font-semibold">
                  <span>View Mobile Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Specialized Card: Web3 & Blockchain */}
              <div
                onClick={() => navigate('/services')}
                className="flex-1 glass-2 holographic-edge rounded-3xl p-6 sm:p-7 spatial-card cursor-pointer group flex flex-col justify-between border-white/10 hover:border-[#38BDF8]/50 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30">
                      Decentralized Systems
                    </span>
                    <span className="font-mono-code text-xs text-[var(--text-muted)]">
                      DISCIPLINE 04
                    </span>
                  </div>
                  <h4 className="font-headline text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[#38BDF8] transition-colors">
                    Web3 &amp; Audited Smart Contracts
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Production Ethereum &amp; EVM architectures, secure Solidity smart contracts, DeFi settlement rails, and custodial wallet integrations.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[#38BDF8] font-semibold">
                  <span>View Web3 Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Delivered Work — Master Stage Showcase (Strictly Contained Screenshots) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28 bg-[var(--bg-secondary)]/40 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono-code text-xs uppercase text-[var(--emerald)] tracking-widest font-semibold block mb-2">
                02 // VERIFIABLE PRODUCTION CODE
              </span>
              <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[48px] text-[var(--text-primary)] font-extrabold tracking-tight">
                Proof Through Real Work.
              </h2>
            </div>

            <button
              onClick={() => navigate('/work')}
              className="inline-flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-wider text-[var(--emerald)] hover:underline cursor-pointer group"
            >
              <span>View All Production Case Studies</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Master Case Study 01: AgroTrace — High-Impact Expanded Media Stage */}
          <div
            onClick={() => navigate('/work')}
            className="mb-10 glass-2 holographic-edge rounded-3xl p-6 sm:p-8 spatial-card cursor-pointer group border-white/10 hover:border-[var(--emerald)]/50 transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Media Viewport — Strictly Contained Browser Frame */}
              <div className="lg:col-span-7 overflow-hidden rounded-2xl bg-[#070C18] border border-white/10 p-2 sm:p-3">
                {/* Clean Browser Chrome Header */}
                <div className="flex items-center justify-between pb-2 px-2 border-b border-white/[0.06] mb-2 text-[10px] font-mono-code text-white/50">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/60" />
                    <span className="ml-2 text-white/40">agrotrace.production.sys</span>
                  </div>
                  <span className="text-[var(--emerald)] font-bold">LIVE TELEMETRY</span>
                </div>

                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-[#040812]">
                  <img
                    src={agrotrace.images[0].src}
                    alt={agrotrace.images[0].alt}
                    className="w-full h-full object-cover object-top block transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Case Study Summary */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[var(--emerald)]/15 text-[var(--emerald)] border border-[var(--emerald)]/30">
                      {agrotrace.categoryBadge}
                    </span>
                    <span className="text-[11px] font-mono-code text-[var(--text-muted)]">
                      {agrotrace.statusBadge}
                    </span>
                  </div>

                  <h3 className="font-display-hero text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--emerald)] transition-colors">
                    {agrotrace.title}
                  </h3>

                  <p className="text-xs font-headline font-semibold text-[var(--emerald)] mb-3">
                    {agrotrace.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                    {agrotrace.description}
                  </p>

                  {/* Measurable Metric Strip */}
                  <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-6">
                    {agrotrace.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="font-display-hero text-2xl font-bold text-white">
                          {m.value}
                        </div>
                        <div className="text-[10px] font-mono-code uppercase text-[var(--text-muted)] mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[var(--emerald)] font-bold">
                  <span>Inspect Full System Blueprint</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Case Study 02: IPMI-OS 2.0 AI Trading Engine */}
          <div
            onClick={() => navigate('/work')}
            className="glass-2 holographic-edge rounded-3xl p-6 sm:p-8 spatial-card cursor-pointer group border-white/10 hover:border-[var(--gold)]/50 transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Media Viewport */}
              <div className="lg:col-span-7 lg:order-last overflow-hidden rounded-2xl bg-[#070C18] border border-white/10 p-2 sm:p-3">
                <div className="flex items-center justify-between pb-2 px-2 border-b border-white/[0.06] mb-2 text-[10px] font-mono-code text-white/50">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/60" />
                    <span className="ml-2 text-white/40">ipmi-os.execution-engine</span>
                  </div>
                  <span className="text-[var(--gold)] font-bold">AI DECISION PIPELINE</span>
                </div>

                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-[#040812]">
                  <img
                    src={ipmi.images[0].src}
                    alt={ipmi.images[0].alt}
                    className="w-full h-full object-cover object-top block transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Case Study Summary */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/30">
                      {ipmi.categoryBadge}
                    </span>
                    <span className="text-[11px] font-mono-code text-[var(--text-muted)]">
                      {ipmi.statusBadge}
                    </span>
                  </div>

                  <h3 className="font-display-hero text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--gold)] transition-colors">
                    {ipmi.title}
                  </h3>

                  <p className="text-xs font-headline font-semibold text-[var(--gold)] mb-3">
                    {ipmi.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                    {ipmi.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-6">
                    {ipmi.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="font-display-hero text-2xl font-bold text-white">
                          {m.value}
                        </div>
                        <div className="text-[10px] font-mono-code uppercase text-[var(--text-muted)] mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[var(--gold)] font-bold">
                  <span>Inspect Algorithmic Architecture</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process Teaser on Refined Soft-Ivory Luxury Surface */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto">
          <div className="surface-ivory rounded-3xl p-8 sm:p-12 lg:p-16 spatial-card">
            <div className="max-w-3xl">
              <span className="font-mono-code text-xs uppercase text-[#0F172A] tracking-widest font-bold block mb-3">
                03 // MILESTONE GOVERNANCE BLUEPRINT
              </span>
              <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[44px] text-[#0A0F1D] font-extrabold tracking-tight leading-tight">
                No Hourly Billing. You Approve Working Staging Builds Before Payment.
              </h2>
              <p className="mt-4 text-base text-[#1E293B] leading-relaxed font-normal">
                AXORKS eliminates agency billing uncertainty. We write an itemized Technical Specification Document with guaranteed fixed pricing. Every sprint milestone is reviewed on private staging before funds release, concluding with 100% intellectual property transfer.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigate('/process')}
                  className="px-6 py-3.5 rounded-xl bg-[#0F172A] text-white text-xs font-headline font-bold uppercase tracking-wider hover:bg-[#1E293B] transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>See 4-Step Process</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3.5 rounded-xl bg-[#B48310] text-[#2A1800] text-xs font-headline font-bold uppercase tracking-wider hover:bg-[#D97706] transition-all cursor-pointer font-semibold"
                >
                  <span>Request Proposal</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Direct Leadership Teaser — Executive Studio Standard */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 bg-[var(--bg-secondary)]/50 relative border-t border-[var(--glass-border)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[var(--gold)]/40 shrink-0 shadow-xl">
              <img
                src="/Images/Founder and CEO SOFTWARE ENGINEER.jpeg"
                alt="Muhammad Mujahid — Founder & CEO"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-xs font-mono-code text-[var(--gold)] uppercase tracking-wider font-bold">
                Founder &amp; CEO / Chief Systems Architect
              </div>
              <h3 className="font-display-hero text-xl sm:text-2xl font-extrabold text-[var(--text-primary)]">
                Muhammad Mujahid
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-lg font-normal">
                Direct partner access from initial architectural scoping to production deployment. 10 software engineers and domain specialists in Karachi &amp; Islamabad.
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate('/team')}
            className="shrink-0 px-6 py-3 rounded-xl glass-2 border-[var(--glass-border)] hover:border-[var(--gold)] text-xs font-headline font-semibold text-[var(--text-primary)] transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Meet Full Team Roster</span>
            <ArrowRight className="w-4 h-4 text-[var(--gold)]" />
          </button>
        </div>
      </section>
    </div>
  );
};

