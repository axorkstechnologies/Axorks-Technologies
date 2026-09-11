import React from 'react';
import { Hero } from '../components/Hero';
import { useNavigate } from '../router/Router';
import { ArrowRight, Check, ShieldCheck, Tag, Users, Building2, Clock, Key, Mail, MessageSquare } from 'lucide-react';
import { PROJECTS, TEAM_MEMBERS } from '../data/mockData';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const founder = TEAM_MEMBERS.find((m) => m.id === 'mujahid') || TEAM_MEMBERS[0];
  const coreSpecialists = TEAM_MEMBERS.filter((m) => m.id !== 'mujahid').slice(0, 4);

  return (
    <div className="w-full">
      {/* 1. Hero Section (Locked H1, Subline, Pricing, Atmospheric Motion) */}
      <Hero onOpenDiscovery={() => navigate('/contact')} />

      {/* 2. Trust / Proof Bar: Minimalist Commercial Ledger */}
      <section className="w-full py-7 px-4 sm:px-6 lg:px-8 bg-[#080D1A] border-y border-[var(--glass-border)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[var(--glass-border)]">
          <div className="pt-3 sm:pt-0 sm:pr-6 flex flex-col">
            <span className="font-mono-code text-[11px] text-[var(--gold)] font-bold tracking-widest uppercase mb-1">
              // COMMERCIAL TERMS
            </span>
            <span className="font-headline text-lg font-bold text-white tracking-tight">Fixed-Price Proposals</span>
            <span className="text-xs text-[var(--text-secondary)] mt-1 font-normal leading-relaxed">
              Guaranteed functional scope and price locked before development begins.
            </span>
          </div>

          <div className="pt-4 sm:pt-0 sm:px-6 flex flex-col">
            <span className="font-mono-code text-[11px] text-[var(--emerald)] font-bold tracking-widest uppercase mb-1">
              // PAYMENT GOVERNANCE
            </span>
            <span className="font-headline text-lg font-bold text-white tracking-tight">Milestone Releases</span>
            <span className="text-xs text-[var(--text-secondary)] mt-1 font-normal leading-relaxed">
              You inspect and verify functioning staging builds before milestone funds release.
            </span>
          </div>

          <div className="pt-4 sm:pt-0 sm:px-6 flex flex-col">
            <span className="font-mono-code text-[11px] text-[#A78BFA] font-bold tracking-widest uppercase mb-1">
              // DIRECT ENGAGEMENT
            </span>
            <span className="font-headline text-lg font-bold text-white tracking-tight">Senior Hands Only</span>
            <span className="text-xs text-[var(--text-secondary)] mt-1 font-normal leading-relaxed">
              Direct partner architecting in Karachi and Islamabad. Zero offshore junior handoffs.
            </span>
          </div>

          <div className="pt-4 sm:pt-0 sm:pl-6 flex flex-col">
            <span className="font-mono-code text-[11px] text-[#38BDF8] font-bold tracking-widest uppercase mb-1">
              // ENTRY TIERS
            </span>
            <span className="font-headline text-lg font-bold text-white tracking-tight">From $1,000 Upward</span>
            <span className="text-xs text-[var(--text-secondary)] mt-1 font-normal leading-relaxed">
              Accessible milestone allocations for serious engineering engagements.
            </span>
          </div>
        </div>
      </section>

      {/* 3. What We Build (AI-First: 1. AI Automation, 2. Web Apps, 3. Mobile) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto">
          {/* Editorial Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono-code text-xs uppercase text-[var(--gold)] tracking-widest font-semibold block mb-2">
                01 // WHAT WE BUILD
              </span>
              <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[48px] text-[var(--text-primary)] font-extrabold tracking-tight">
                Architectural Disciplines.
              </h2>
            </div>

            <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-wider text-[var(--gold)] hover:underline cursor-pointer group"
            >
              <span>Explore All Engineering Capabilities</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Asymmetric Bento: Primary AI Automation (7 Cols) + Stacked Web & Mobile (5 Cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Master Featured Card: AI Automations & Multi-AI Workflows (7 Cols) */}
            <div
              onClick={() => navigate('/services')}
              className="lg:col-span-7 glass-2 holographic-edge rounded-3xl p-7 sm:p-10 spatial-card cursor-pointer group flex flex-col justify-between border-[var(--emerald)]/30 hover:border-[var(--emerald)]/60 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[var(--emerald)]/15 text-[var(--emerald)] border border-[var(--emerald)]/30">
                    Flagship Core · AI First
                  </span>
                  <span className="font-mono-code text-xs text-[var(--text-muted)]">
                    PRIMARY DISCIPLINE
                  </span>
                </div>

                <h3 className="font-display-hero text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--emerald)] transition-colors">
                  AI Automations &amp; Multi-AI Workflows
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                  We engineer autonomous multi-agent pipelines, RAG retrieval engines, document processing systems, and intelligent integrations that run 24/7 without manual clerical friction.
                </p>

                {/* Concrete Technical Deliverables */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 pt-4 border-t border-[var(--glass-border)] text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2 font-mono-code">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--emerald)]" />
                    <span>Autonomous Multi-Agent Orchestration</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono-code">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                    <span>High-Precision Vector RAG Engines</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono-code">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                    <span>Deterministic Guardrails &amp; Zod Schemas</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono-code">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                    <span>Enterprise API &amp; ERP Automation</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[var(--emerald)] font-bold">
                <span>Projects from $1,000 · Fixed-Price Proposals</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Specifications <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Stacked 5-Column Sidebars: Custom Web Applications & Mobile */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Discipline 02: Custom Web Applications */}
              <div
                onClick={() => navigate('/services')}
                className="flex-1 glass-2 holographic-edge rounded-3xl p-6 sm:p-7 spatial-card cursor-pointer group flex flex-col justify-between border-white/10 hover:border-[var(--gold)]/50 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/30">
                      Bespoke Web Platforms
                    </span>
                    <span className="font-mono-code text-xs text-[var(--text-muted)]">
                      DISCIPLINE 02
                    </span>
                  </div>
                  <h4 className="font-headline text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--gold)] transition-colors">
                    Custom Web Applications
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Full-stack portals, operations dashboards, and SaaS products built with Next.js, Node.js, and PostgreSQL for maximum concurrency and uptime.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[var(--gold)] font-semibold">
                  <span>View Web Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Discipline 03: Mobile Solutions */}
              <div
                onClick={() => navigate('/services')}
                className="flex-1 glass-2 holographic-edge rounded-3xl p-6 sm:p-7 spatial-card cursor-pointer group flex flex-col justify-between border-white/10 hover:border-[#A78BFA]/50 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[#A78BFA]/15 text-[#A78BFA] border border-[#A78BFA]/30">
                      Cross-Platform Mobile
                    </span>
                    <span className="font-mono-code text-xs text-[var(--text-muted)]">
                      DISCIPLINE 03
                    </span>
                  </div>
                  <h4 className="font-headline text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[#A78BFA] transition-colors">
                    Flutter &amp; Native Mobile Apps
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Native-performance iOS and Android applications with offline-first synchronization, hardware biometric authentication, and app store deployment.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[#A78BFA] font-semibold">
                  <span>View Mobile Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Case Studies: Problem, Solution, Result Framework */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28 bg-[var(--bg-secondary)]/40 relative border-t border-[var(--glass-border)]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono-code text-xs uppercase text-[var(--emerald)] tracking-widest font-semibold block mb-2">
                02 // PRODUCTION CASE STUDIES
              </span>
              <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[48px] text-[var(--text-primary)] font-extrabold tracking-tight">
                Proof Through Real Work.
              </h2>
            </div>

            <button
              onClick={() => navigate('/work')}
              className="inline-flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-wider text-[var(--emerald)] hover:underline cursor-pointer group"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="space-y-10">
            {/* Case Study 01: AgroTrace */}
            {PROJECTS.filter((p) => p.id === 'agrotrace').map((project) => (
              <div
                key={project.id}
                onClick={() => navigate('/work')}
                className="glass-2 holographic-edge rounded-3xl p-6 sm:p-8 spatial-card cursor-pointer group border-white/10 hover:border-[var(--emerald)]/50 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Media Viewport */}
                  <div className="lg:col-span-7 overflow-hidden rounded-2xl bg-[#070C18] border border-white/10 p-2 sm:p-3">
                    <div className="flex items-center justify-between pb-2 px-2 border-b border-white/[0.06] mb-2 text-[10px] font-mono-code text-white/50">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/60" />
                        <span className="ml-2 text-white/40">agrotrace.live.system</span>
                      </div>
                      <span className="text-[var(--emerald)] font-bold">LIVE TELEMETRY</span>
                    </div>

                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-[#040812]">
                      <img
                        src={project.images[0].src}
                        alt={project.images[0].alt}
                        className="w-full h-full object-cover object-top block transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Problem, Solution, Result Details */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[var(--emerald)]/15 text-[var(--emerald)] border border-[var(--emerald)]/30">
                          {project.categoryBadge}
                        </span>
                        <span className="text-[11px] font-mono-code text-[var(--text-muted)]">
                          {project.statusBadge}
                        </span>
                      </div>

                      <h3 className="font-display-hero text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--emerald)] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs font-headline font-semibold text-[var(--emerald)] mb-4">
                        {project.tagline}
                      </p>

                      <div className="space-y-3 mb-6 text-xs text-[var(--text-secondary)]">
                        <div>
                          <strong className="text-white font-headline uppercase text-[11px] block mb-0.5">The Problem:</strong>
                          <span>{project.problem}</span>
                        </div>
                        <div>
                          <strong className="text-[var(--emerald)] font-headline uppercase text-[11px] block mb-0.5">The Solution:</strong>
                          <span>{project.solution}</span>
                        </div>
                        <div>
                          <strong className="text-[var(--gold)] font-headline uppercase text-[11px] block mb-0.5">The Result:</strong>
                          <span>{project.result}</span>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-4">
                        {project.metrics.map((m, idx) => (
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

                    <div className="pt-3 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[var(--emerald)] font-bold">
                      <span>Inspect Full Architecture Blueprint</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Case Study 02: IPMI-OS 2.0 */}
            {PROJECTS.filter((p) => p.id === 'ipmi-os').map((project) => (
              <div
                key={project.id}
                onClick={() => navigate('/work')}
                className="glass-2 holographic-edge rounded-3xl p-6 sm:p-8 spatial-card cursor-pointer group border-white/10 hover:border-[var(--gold)]/50 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 lg:order-last overflow-hidden rounded-2xl bg-[#070C18] border border-white/10 p-2 sm:p-3">
                    <div className="flex items-center justify-between pb-2 px-2 border-b border-white/[0.06] mb-2 text-[10px] font-mono-code text-white/50">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/60" />
                        <span className="ml-2 text-white/40">ipmi-os.decision.engine</span>
                      </div>
                      <span className="text-[var(--gold)] font-bold">ALGORITHMIC DECISION ENGINE</span>
                    </div>

                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-[#040812]">
                      <img
                        src={project.images[0].src}
                        alt={project.images[0].alt}
                        className="w-full h-full object-cover object-top block transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/30">
                          {project.categoryBadge}
                        </span>
                        <span className="text-[11px] font-mono-code text-[var(--text-muted)]">
                          {project.statusBadge}
                        </span>
                      </div>

                      <h3 className="font-display-hero text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--gold)] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs font-headline font-semibold text-[var(--gold)] mb-4">
                        {project.tagline}
                      </p>

                      <div className="space-y-3 mb-6 text-xs text-[var(--text-secondary)]">
                        <div>
                          <strong className="text-white font-headline uppercase text-[11px] block mb-0.5">The Problem:</strong>
                          <span>{project.problem}</span>
                        </div>
                        <div>
                          <strong className="text-[var(--gold)] font-headline uppercase text-[11px] block mb-0.5">The Solution:</strong>
                          <span>{project.solution}</span>
                        </div>
                        <div>
                          <strong className="text-[var(--emerald)] font-headline uppercase text-[11px] block mb-0.5">The Result:</strong>
                          <span>{project.result}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-4">
                        {project.metrics.map((m, idx) => (
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

                    <div className="pt-3 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[var(--gold)] font-bold">
                      <span>Inspect Quantitative Engine</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How We Work: 4-Step Milestone Process on Soft-Ivory Luxury Surface */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto">
          <div className="surface-ivory rounded-3xl p-8 sm:p-12 lg:p-16 spatial-card text-[#0A0F1D]">
            <div className="max-w-3xl mb-12">
              <span className="font-mono-code text-xs uppercase text-[#0F172A] tracking-widest font-bold block mb-3">
                03 // HOW WE WORK
              </span>
              <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[44px] text-[#0A0F1D] font-extrabold tracking-tight leading-tight">
                No Hourly Surprises. You Approve Working Staging Builds Before Payment.
              </h2>
              <p className="mt-4 text-base text-[#1E293B] leading-relaxed font-normal">
                Axorks eliminates agency billing uncertainty. We write an itemized Technical Specification Document with guaranteed fixed pricing. Every sprint milestone is tested on private staging before funds release, concluding with 100% intellectual property transfer.
              </p>
            </div>

            {/* 4 Execution Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-[#0A0F1D]/15">
              <div className="p-5 rounded-2xl bg-black/[0.04] border border-black/[0.08]">
                <div className="font-mono-code text-xs font-bold uppercase text-[#D97706] mb-1">
                  STAGE 01
                </div>
                <h4 className="font-headline text-lg font-bold text-[#0A0F1D] mb-2">Technical Discovery</h4>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Complimentary consultation to clarify your business goals, operational bottlenecks, and systems architecture.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/[0.04] border border-black/[0.08]">
                <div className="font-mono-code text-xs font-bold uppercase text-[#059669] mb-1">
                  STAGE 02
                </div>
                <h4 className="font-headline text-lg font-bold text-[#0A0F1D] mb-2">Fixed-Price Specification</h4>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Guaranteed functional scope, deliverable milestones, and total fixed price before a single line of code is written.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/[0.04] border border-black/[0.08]">
                <div className="font-mono-code text-xs font-bold uppercase text-[#7C3AED] mb-1">
                  STAGE 03
                </div>
                <h4 className="font-headline text-lg font-bold text-[#0A0F1D] mb-2">Milestone Development</h4>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Sprint iterations deployed to private staging. You test real functionality before authorizing milestone payouts.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/[0.04] border border-black/[0.08]">
                <div className="font-mono-code text-xs font-bold uppercase text-[#0284C7] mb-1">
                  STAGE 04
                </div>
                <h4 className="font-headline text-lg font-bold text-[#0A0F1D] mb-2">Launch &amp; IP Handover</h4>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Production deployment, full source code handover to your repositories, and zero proprietary lock-in.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('/process')}
                className="px-6 py-3.5 rounded-xl bg-[#0F172A] text-white text-xs font-headline font-bold uppercase tracking-wider hover:bg-[#1E293B] transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Read Full Process Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-3.5 rounded-xl bg-[#B48310] text-[#2A1800] text-xs font-headline font-bold uppercase tracking-wider hover:bg-[#D97706] transition-all cursor-pointer font-semibold"
              >
                <span>Book Free Discovery Call</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Axorks (Commercial Guarantees) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-24 bg-[#080D1A] border-y border-[var(--glass-border)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-mono-code text-xs uppercase text-[var(--gold)] tracking-widest font-semibold block mb-2">
              04 // COMMERCIAL CERTAINTY
            </span>
            <h2 className="font-display-hero text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
              Why Founders Choose Axorks.
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mt-3">
              We replace agency ambiguity with legal and architectural guarantees.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl glass-2 border-white/10 hover:border-[var(--gold)]/50 transition-all">
              <Tag className="w-6 h-6 text-[var(--gold)] mb-4" />
              <h4 className="font-headline text-base font-bold text-white mb-2">Projects from $1,000</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Accessible entry tiers for growing businesses and startup MVPs. Every project receives an itemized fixed-price proposal.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-2 border-white/10 hover:border-[var(--emerald)]/50 transition-all">
              <ShieldCheck className="w-6 h-6 text-[var(--emerald)] mb-4" />
              <h4 className="font-headline text-base font-bold text-white mb-2">Fixed-Price Milestones</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Zero open-ended billing. You know your total commitment from day one, with payment divided across tested milestone builds.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-2 border-white/10 hover:border-[#A78BFA]/50 transition-all">
              <Users className="w-6 h-6 text-[#A78BFA] mb-4" />
              <h4 className="font-headline text-base font-bold text-white mb-2">Direct Senior Engineering</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Work directly with founder Muhammad Mujahid and senior engineers. No non-technical account managers in the middle.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-2 border-white/10 hover:border-[#38BDF8]/50 transition-all">
              <Building2 className="w-6 h-6 text-[#38BDF8] mb-4" />
              <h4 className="font-headline text-base font-bold text-white mb-2">Real Engineering Offices</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Axorks Pvt Limited operates registered physical software development offices in Karachi and Islamabad, Pakistan.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-2 border-white/10 hover:border-[var(--gold)]/50 transition-all">
              <Clock className="w-6 h-6 text-[var(--gold)] mb-4" />
              <h4 className="font-headline text-base font-bold text-white mb-2">24-Hour Response Time</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Direct availability on email, WhatsApp, and Slack. Every proposal and client inquiry receives a substantive response within 24 hours.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-2 border-white/10 hover:border-[var(--emerald)]/50 transition-all">
              <Key className="w-6 h-6 text-[var(--emerald)] mb-4" />
              <h4 className="font-headline text-base font-bold text-white mb-2">100% IP Handover</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                You retain complete commercial ownership of all source code, database schemas, and documentation. Zero proprietary vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Founder Section (Muhammad Mujahid with authentic photo) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto">
          <div className="glass-2 holographic-edge rounded-3xl p-8 sm:p-12 border-[var(--gold)]/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Authentic Photo */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-[var(--gold)]/50 shadow-2xl bg-[#111622]">
                  <img
                    src={founder.image || '/Images/Founder and CEO SOFTWARE ENGINEER.jpeg'}
                    alt="Muhammad Mujahid, Founder and CEO of Axorks Technologies"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Founder Profile */}
              <div className="lg:col-span-8 space-y-4 text-left">
                <span className="font-mono-code text-xs uppercase text-[var(--gold)] tracking-widest font-bold block">
                  LEADERSHIP &amp; ARCHITECTURAL GOVERNANCE
                </span>

                <h3 className="font-display-hero text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                  Muhammad Mujahid
                </h3>

                <p className="text-xs sm:text-sm font-headline font-semibold text-[var(--gold)]">
                  Founder &amp; CEO / Chief Systems Architect · BS Software Engineering
                </p>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Muhammad leads systems architecture, multi-AI workflow design, and commercial proposals at Axorks. Every client engagement is scoped and supervised directly by senior leadership, guaranteeing that architectural decisions align with real business profitability.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <div className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono-code text-slate-300">
                    BS Software Engineering
                  </div>
                  <div className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono-code text-slate-300">
                    Bahria University Alumnus
                  </div>
                  <div className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono-code text-slate-300">
                    Direct Partner Involvement
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => navigate('/about')}
                    className="inline-flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-wider text-[var(--gold)] hover:underline cursor-pointer"
                  >
                    <span>Read Studio Story &amp; Leadership Profile</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Soft Team Section (Intentional Placeholder Cards for Core Disciplines) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-[var(--bg-secondary)]/30 border-t border-[var(--glass-border)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono-code text-xs uppercase text-[#A78BFA] tracking-widest font-semibold block mb-1">
                05 // ENGINEERING ROSTER
              </span>
              <h3 className="font-display-hero text-2xl sm:text-3xl font-bold text-white">
                Core Engineering Specialists.
              </h3>
            </div>
            <button
              onClick={() => navigate('/about')}
              className="text-xs font-headline font-bold uppercase tracking-wider text-[var(--gold)] hover:underline cursor-pointer flex items-center gap-1.5"
            >
              <span>View Full Studio Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreSpecialists.map((member) => (
              <div
                key={member.id}
                className="p-5 rounded-2xl glass-2 border-white/10 flex flex-col justify-between hover:border-white/20 transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center font-mono-code text-xs font-bold text-[var(--gold)] mb-3">
                    {member.name.slice(0, 2).toUpperCase()}
                  </div>
                  <h4 className="font-headline text-sm font-bold text-white">{member.name}</h4>
                  <div className="text-[11px] font-mono-code text-[var(--text-muted)] mt-0.5 mb-2">
                    {member.role}
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final Conversion Block */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
        <div className="max-w-5xl mx-auto text-center glass-2 holographic-edge rounded-3xl p-8 sm:p-14 border-[var(--gold)]/30">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--gold)]/15 border border-[var(--gold)]/30 text-[var(--gold)] text-xs font-mono-code font-bold uppercase tracking-wider mb-6">
            Get Your Fixed-Price Proposal
          </span>

          <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to automate manual work and build your custom system?
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto mt-4 leading-relaxed">
            Every engagement starts with a free technical discovery consultation. We deliver an itemized scope and fixed-price proposal within 24 to 48 hours. Projects start from $1,000.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto magnetic-btn inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] text-xs sm:text-sm font-headline font-bold uppercase tracking-wider glow-gold-jewel cursor-pointer shadow-xl transition-all"
            >
              <span>Book Free Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/923141030223"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto magnetic-btn inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-black/50 border border-[#10B981]/50 hover:border-[#10B981]/90 text-white text-xs sm:text-sm font-headline font-semibold uppercase tracking-wider transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#10B981]" />
              <span>WhatsApp: +92 314 103 0223</span>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono-code text-slate-300">
            <a
              href="mailto:contact@axorks.com?subject=Project Inquiry: AXORKS Technologies"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[var(--gold)] hover:underline font-semibold"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>contact@axorks.com</span>
            </a>
            <span className="text-white/30">•</span>
            <span>24-hour turnaround</span>
            <span className="text-white/30">•</span>
            <span>100% intellectual property transfer</span>
          </div>
        </div>
      </section>
    </div>
  );
};
