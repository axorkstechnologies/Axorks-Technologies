import React from 'react';
import { Hero } from '../components/Hero';
import { useNavigate } from '../router/Router';
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, Globe, Smartphone, Blocks, Sparkles } from 'lucide-react';
import { PROJECTS, TEAM_MEMBERS } from '../data/mockData';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* 1. Hero Section (Strictly Right Side Atmospheric Motion • High Contrast Left Text) */}
      <Hero onOpenDiscovery={() => navigate('/contact')} />

      {/* 2. Commercial Guarantee Strip */}
      <section className="w-full py-10 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)]/60 border-y border-[var(--glass-border)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[var(--gold)]/15 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono-code font-bold uppercase text-[var(--text-primary)]">Fixed-Price Proposals</div>
              <div className="text-[11px] text-[var(--text-muted)] font-mono-code">Guaranteed scope before code</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[var(--emerald)]/15 border border-[var(--emerald)]/30 flex items-center justify-center text-[var(--emerald)] shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono-code font-bold uppercase text-[var(--text-primary)]">Milestone Release</div>
              <div className="text-[11px] text-[var(--text-muted)] font-mono-code">Pay only upon approved builds</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[var(--violet)]/15 border border-[var(--violet)]/30 flex items-center justify-center text-[var(--violet)] shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono-code font-bold uppercase text-[var(--text-primary)]">Direct Senior Engineers</div>
              <div className="text-[11px] text-[var(--text-muted)] font-mono-code">Zero offshore junior handoffs</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[var(--cyan)]/15 border border-[var(--cyan)]/30 flex items-center justify-center text-[var(--cyan)] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono-code font-bold uppercase text-[var(--text-primary)]">From $1,000 Starting</div>
              <div className="text-[11px] text-[var(--text-muted)] font-mono-code">Transparent commercial tiers</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Capabilities Overview Teaser */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-2 border-[var(--gold)]/30 text-xs uppercase text-[var(--gold)] tracking-widest font-semibold font-mono-code mb-3">
                <Globe className="w-3.5 h-3.5" />
                <span>Engineering Pillars</span>
              </div>
              <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[48px] text-[var(--text-primary)] font-extrabold tracking-tight">
                What We Build.
              </h2>
            </div>

            <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-wider text-[var(--gold)] hover:underline cursor-pointer group"
            >
              <span>Explore All Capabilities</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              onClick={() => navigate('/services')}
              className="glass-2 holographic-edge rounded-3xl p-7 spatial-card cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[var(--gold)]/15 border border-[var(--gold)]/35 flex items-center justify-center text-[var(--gold)] mb-6 group-hover:scale-105 transition-transform">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--gold)] transition-colors">
                  Custom Web Applications
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Enterprise-grade web platforms, scalable dashboards, multi-tenant SaaS, and reactive portals built on modern React, Node, and TypeScript.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[var(--gold)] font-semibold">
                <span>View Scope</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div
              onClick={() => navigate('/services')}
              className="glass-2 holographic-edge rounded-3xl p-7 spatial-card cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[var(--emerald)]/15 border border-[var(--emerald)]/35 flex items-center justify-center text-[var(--emerald)] mb-6 group-hover:scale-105 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--emerald)] transition-colors">
                  AI Automations &amp; Workflows
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Autonomous agent systems, document intelligence pipelines, proprietary neural model integrations, and operational automation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[var(--emerald)] font-semibold">
                <span>View Scope</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div
              onClick={() => navigate('/services')}
              className="glass-2 holographic-edge rounded-3xl p-7 spatial-card cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[var(--violet)]/15 border border-[var(--violet)]/35 flex items-center justify-center text-[var(--violet)] mb-6 group-hover:scale-105 transition-transform">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--violet)] transition-colors">
                  Mobile Applications
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  High-performance iOS and Android applications with offline-first synchronization, native device sensor bridges, and Flutter engines.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[var(--violet)] font-semibold">
                <span>View Scope</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div
              onClick={() => navigate('/services')}
              className="glass-2 holographic-edge rounded-3xl p-7 spatial-card cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[var(--cyan)]/15 border border-[var(--cyan)]/35 flex items-center justify-center text-[var(--cyan)] mb-6 group-hover:scale-105 transition-transform">
                  <Blocks className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--cyan)] transition-colors">
                  Web3 &amp; Blockchain Systems
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Audited smart contracts, DeFi settlement protocols, cross-chain state bridges, and production Ethereum decentralized applications.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[var(--cyan)] font-semibold">
                <span>View Scope</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Delivered Work Teaser (Strictly Contained Screenshots) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28 bg-[var(--bg-secondary)]/40 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-2 border-[var(--emerald)]/30 text-xs uppercase text-[var(--emerald)] tracking-widest font-semibold font-mono-code mb-3">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Delivered Systems</span>
              </div>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PROJECTS.slice(0, 2).map((project) => (
              <div
                key={project.id}
                onClick={() => navigate('/work')}
                className="glass-2 holographic-edge rounded-3xl p-6 spatial-card cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Strictly Contained Image Box */}
                  <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-[#050A14] border border-[var(--glass-border)] shrink-0 mb-6">
                    <img
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      className="w-full h-full object-cover object-top block transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] font-mono-code uppercase font-bold text-white bg-black/70 backdrop-blur-md border border-white/20">
                      {project.statusBadge}
                    </div>
                  </div>

                  <h3 className="font-display-hero text-2xl font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--gold)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-headline font-semibold text-[var(--gold)] mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[var(--text-muted)]">
                  <span>{project.categoryBadge}</span>
                  <span className="text-[var(--gold)] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Inspect Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Process Teaser on Refined Soft-Ivory Luxury Surface */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto">
          <div className="surface-ivory rounded-3xl p-8 sm:p-12 lg:p-16 spatial-card">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F172A]/10 text-xs uppercase text-[#0F172A] tracking-widest font-semibold font-mono-code mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B48310]" />
                <span>Milestone Governance</span>
              </div>
              <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[44px] text-[#0A0F1D] font-extrabold tracking-tight leading-tight">
                No Hourly Billing. You Approve Working Staging Builds Before Payment.
              </h2>
              <p className="mt-4 text-base text-[#1E293B] leading-relaxed">
                AXORKS eliminates agency billing uncertainty with fixed-price technical proposals, itemized milestone checkpoints, and complete IP transfer on final payment.
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

      {/* 6. Direct Leadership Teaser */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 bg-[var(--bg-secondary)]/50 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[var(--gold)]/40 shrink-0">
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
              <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-lg">
                Direct partner access from initial architectural scoping to final deployment. 10 engineering specialists in Karachi &amp; Islamabad.
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
