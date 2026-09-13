import React from 'react';
import { Hero } from '../components/Hero';
import { useNavigate } from '../router/Router';
import { ArrowRight, Check, ShieldCheck, Tag, Users, Building2, Clock, Key, Mail, MessageSquare } from 'lucide-react';
import { PROJECTS, TEAM_MEMBERS } from '../data/mockData';
import { ProjectCarousel } from '../components/ProjectCarousel';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const founder = TEAM_MEMBERS.find((m) => m.id === 'mujahid') || TEAM_MEMBERS[0];
  const featuredTeam = [
    TEAM_MEMBERS.find((m) => m.id === 'faisal'),
    TEAM_MEMBERS.find((m) => m.id === 'furqan'),
    TEAM_MEMBERS.find((m) => m.id === 'farwa'),
    TEAM_MEMBERS.find((m) => m.id === 'yousaf-piryani'),
    TEAM_MEMBERS.find((m) => m.id === 'alina'),
    TEAM_MEMBERS.find((m) => m.id === 'shayan'),
  ].filter(Boolean) as typeof TEAM_MEMBERS;

  return (
    <div className="w-full">
      {/* 1. Hero Section (Locked H1, Subline, Pricing, Atmospheric Motion) */}
      <Hero onOpenDiscovery={() => navigate('/contact')} />

      {/* 2. Trust Bar: Clear Commercial Commitments */}
      <section className="w-full py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#080D1A] border-y border-[var(--glass-border)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 divide-y sm:divide-y-0 sm:divide-x divide-[var(--glass-border)]">
          <div className="pt-3 sm:pt-0 sm:pr-8 flex flex-col justify-between">
            <div>
              <span className="font-mono-code text-xs text-[var(--gold)] font-bold tracking-wider uppercase block mb-2">
                Guaranteed Pricing
              </span>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
                Fixed-Price Proposals
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Functional scope and pricing are agreed upon upfront. You know the exact investment before work starts.
              </p>
            </div>
          </div>

          <div className="pt-6 sm:pt-0 sm:px-8 flex flex-col justify-between">
            <div>
              <span className="font-mono-code text-xs text-[var(--emerald)] font-bold tracking-wider uppercase block mb-2">
                Milestone Releases
              </span>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
                Pay As We Deliver
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Payments are tied to working milestones. You inspect and verify functioning staging builds before funds release.
              </p>
            </div>
          </div>

          <div className="pt-6 sm:pt-0 sm:px-8 flex flex-col justify-between">
            <div>
              <span className="font-mono-code text-xs text-[#A78BFA] font-bold tracking-wider uppercase block mb-2">
                Direct Collaboration
              </span>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
                Senior Hands Only
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Work directly with lead architects and senior engineers in Karachi and Islamabad. Zero junior runarounds.
              </p>
            </div>
          </div>

          <div className="pt-6 sm:pt-0 sm:pl-8 flex flex-col justify-between">
            <div>
              <span className="font-mono-code text-xs text-[#38BDF8] font-bold tracking-wider uppercase block mb-2">
                Accessible Entry
              </span>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
                Projects from $1,000
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Clear milestone allocations for startup MVPs, enterprise automation, and custom web applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5. Direct Engineering Model (Soft Light / Warm Ivory Surface) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto">
          <div className="surface-ivory rounded-3xl p-8 sm:p-14 lg:p-18 text-[#0A0F1D] spatial-card">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 pb-8 border-b border-[#0A0F1D]/15">
              <div className="max-w-2xl">
                <span className="font-mono-code text-xs uppercase text-[#0F172A] tracking-widest font-bold block mb-3">
                  Engineering Model
                </span>
                <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[42px] text-[#0A0F1D] font-extrabold tracking-tight leading-tight">
                  Software engineering without agency overhead or billing games.
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#1E293B] max-w-md leading-relaxed font-normal">
                Traditional agencies bury projects under non-technical account managers and hourly retainers. We provide direct access to senior practitioners delivering tested software on predictable milestones.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-black/[0.03] border border-black/[0.08] flex flex-col justify-between">
                <div>
                  <div className="font-mono-code text-xs font-bold uppercase text-[#D97706] mb-2">
                    01 / Direct Access
                  </div>
                  <h3 className="font-headline text-lg font-bold text-[#0A0F1D] mb-2">
                    Senior Practitioners
                  </h3>
                  <p className="text-xs text-[#334155] leading-relaxed">
                    Collaborate directly with lead architects and senior specialists. No non-technical layers or junior delegating.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-black/[0.03] border border-black/[0.08] flex flex-col justify-between">
                <div>
                  <div className="font-mono-code text-xs font-bold uppercase text-[#059669] mb-2">
                    02 / Transparency
                  </div>
                  <h3 className="font-headline text-lg font-bold text-[#0A0F1D] mb-2">
                    Fixed-Price Milestones
                  </h3>
                  <p className="text-xs text-[#334155] leading-relaxed">
                    Projects start from $1,000 with itemized scopes. Payments are released only after you test working staging builds.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-black/[0.03] border border-black/[0.08] flex flex-col justify-between">
                <div>
                  <div className="font-mono-code text-xs font-bold uppercase text-[#7C3AED] mb-2">
                    03 / Innovation
                  </div>
                  <h3 className="font-headline text-lg font-bold text-[#0A0F1D] mb-2">
                    AI-Powered Velocity
                  </h3>
                  <p className="text-xs text-[#334155] leading-relaxed">
                    We use modern AI workflows and multi-agent systems to compress development timelines and reduce operational overhead.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-black/[0.03] border border-black/[0.08] flex flex-col justify-between">
                <div>
                  <div className="font-mono-code text-xs font-bold uppercase text-[#2563EB] mb-2">
                    04 / Integrity
                  </div>
                  <h3 className="font-headline text-lg font-bold text-[#0A0F1D] mb-2">
                    100% Commercial IP
                  </h3>
                  <p className="text-xs text-[#334155] leading-relaxed">
                    Complete commercial handover of repositories, schemas, and credentials upon delivery. Zero proprietary lock-in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Build */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto">
          {/* Editorial Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-mono-code text-xs uppercase text-[var(--gold)] tracking-widest font-semibold block mb-3">
                What We Build
              </span>
              <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[48px] text-[var(--text-primary)] font-extrabold tracking-tight">
                Software built for real business impact.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl font-normal leading-relaxed">
                From intelligent AI automations to scalable web platforms, decentralized Web3 systems, and mobile applications.
              </p>
            </div>

            <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-wider text-[var(--gold)] hover:underline cursor-pointer group"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Asymmetric Bento: 1. AI (7-Col) + 2. Web (5-Col), followed by 3. Web3 (6-Col) + 4. Mobile (6-Col) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* 1. AI Automation & Intelligent Systems (Primary Flagship · 7 Cols) */}
            <div
              onClick={() => navigate('/services')}
              className="lg:col-span-7 glass-2 holographic-edge rounded-3xl p-8 sm:p-12 spatial-card cursor-pointer group flex flex-col justify-between border-[var(--emerald)]/30 hover:border-[var(--emerald)]/60 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="px-3.5 py-1 rounded-full text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[var(--emerald)]/15 text-[var(--emerald)] border border-[var(--emerald)]/30">
                    Core Focus
                  </span>
                  <span className="font-mono-code text-xs text-[var(--text-muted)] font-semibold">
                    AI Automation
                  </span>
                </div>

                <h3 className="font-display-hero text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4 group-hover:text-[var(--emerald)] transition-colors">
                  AI Automation &amp; Intelligent Systems
                </h3>

                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-8 font-normal">
                  We build autonomous AI agents, retrieval systems, and workflow integrations that handle complex routine tasks so your team can focus on higher-value work.
                </p>

                {/* Concrete Technical Deliverables */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pt-6 border-t border-[var(--glass-border)] text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2.5 font-mono-code">
                    <span className="w-2 h-2 rounded-full bg-[var(--emerald)]" />
                    <span>Autonomous Multi-Agent Workflows</span>
                  </div>
                  <div className="flex items-center gap-2.5 font-mono-code">
                    <span className="w-2 h-2 rounded-full bg-[var(--gold)]" />
                    <span>Accurate Vector Search &amp; RAG Engines</span>
                  </div>
                  <div className="flex items-center gap-2.5 font-mono-code">
                    <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                    <span>Structured Validation &amp; Guardrails</span>
                  </div>
                  <div className="flex items-center gap-2.5 font-mono-code">
                    <span className="w-2 h-2 rounded-full bg-[#A78BFA]" />
                    <span>Enterprise API &amp; Tool Integrations</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[var(--emerald)] font-bold">
                <span>Projects from $1,000 · Fixed-Price Proposals</span>
                <span className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                  View Specifications <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* 2. Custom Web Applications (Secondary Flagship · 5 Cols) */}
            <div
              onClick={() => navigate('/services')}
              className="lg:col-span-5 glass-2 holographic-edge rounded-3xl p-8 sm:p-12 spatial-card cursor-pointer group flex flex-col justify-between border-[var(--gold)]/30 hover:border-[var(--gold)]/60 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1 rounded-full text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/30">
                    Web Platforms
                  </span>
                  <span className="font-mono-code text-xs text-[var(--text-muted)] font-semibold">
                    Web Applications
                  </span>
                </div>

                <h3 className="font-display-hero text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4 group-hover:text-[var(--gold)] transition-colors">
                  Custom Web Applications
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8 font-normal">
                  Fast, reliable portals, internal tools, and SaaS platforms built with Next.js, Node.js, and PostgreSQL for smooth day-to-day business operations.
                </p>

                <div className="space-y-3 mb-8 pt-6 border-t border-[var(--glass-border)] text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2.5 font-mono-code">
                    <span className="w-2 h-2 rounded-full bg-[var(--gold)]" />
                    <span>Next.js &amp; React High-Performance Architecture</span>
                  </div>
                  <div className="flex items-center gap-2.5 font-mono-code">
                    <span className="w-2 h-2 rounded-full bg-[var(--gold)]" />
                    <span>Real-Time Telemetry &amp; Operations Dashboards</span>
                  </div>
                  <div className="flex items-center gap-2.5 font-mono-code">
                    <span className="w-2 h-2 rounded-full bg-[var(--gold)]" />
                    <span>Secure Role-Based Access Control</span>
                  </div>
                  <div className="flex items-center gap-2.5 font-mono-code">
                    <span className="w-2 h-2 rounded-full bg-[var(--gold)]" />
                    <span>Automated Deployment on AWS &amp; Vercel</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[var(--gold)] font-bold">
                <span>Production-Grade Web</span>
                <span className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                  View Web Scope <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* 3. Web3 & Decentralized Applications (Third · 6 Cols) */}
            <div
              onClick={() => navigate('/services')}
              className="lg:col-span-6 glass-2 holographic-edge rounded-3xl p-8 sm:p-10 spatial-card cursor-pointer group flex flex-col justify-between border-white/10 hover:border-[#38BDF8]/50 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3.5 py-1 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30">
                    Decentralized Systems
                  </span>
                  <span className="font-mono-code text-xs text-[var(--text-muted)] font-semibold">
                    Web3 &amp; Blockchain
                  </span>
                </div>

                <h4 className="font-headline text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[#38BDF8] transition-colors">
                  Web3 &amp; Decentralized Applications
                </h4>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                  Secure decentralized applications, audited smart contracts in Solidity and Rust, and seamless wallet integrations engineered for dependability.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 pt-5 border-t border-[var(--glass-border)] text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2 font-mono-code">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                    <span>Audited Solidity &amp; Rust Contracts</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono-code">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                    <span>DeFi Settlement &amp; Automated Logic</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono-code">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                    <span>Viem, Ethers.js &amp; Web3 Integrations</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono-code">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                    <span>Multi-Chain Bridges &amp; Wallet Auth</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[#38BDF8] font-semibold">
                <span>Audited Smart Contracts</span>
                <span className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                  View Web3 Scope <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* 4. Mobile Apps (Supporting · 6 Cols) */}
            <div
              onClick={() => navigate('/services')}
              className="lg:col-span-6 glass-2 holographic-edge rounded-3xl p-8 sm:p-10 spatial-card cursor-pointer group flex flex-col justify-between border-white/10 hover:border-[#A78BFA]/50 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3.5 py-1 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[#A78BFA]/15 text-[#A78BFA] border border-[#A78BFA]/30">
                    Cross-Platform Mobile
                  </span>
                  <span className="font-mono-code text-xs text-[var(--text-muted)] font-semibold">
                    Mobile Applications
                  </span>
                </div>

                <h4 className="font-headline text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[#A78BFA] transition-colors">
                  Flutter &amp; Native Mobile Apps
                </h4>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                  High-performance iOS and Android apps built with Flutter. Native 60fps feel, reliable offline data sync, biometric security, and full app store deployment.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 pt-5 border-t border-[var(--glass-border)] text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2 font-mono-code">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                    <span>Unified Codebase for iOS &amp; Android</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono-code">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                    <span>Offline-First Caching &amp; Data Sync</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono-code">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                    <span>Hardware Biometric Authentication</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono-code">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                    <span>App Store &amp; Play Store Deployment</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[#A78BFA] font-semibold">
                <span>iOS &amp; Android Production</span>
                <span className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                  View Mobile Scope <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Case Studies */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-24 lg:py-32 bg-[var(--bg-secondary)]/40 relative border-t border-[var(--glass-border)]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-mono-code text-xs uppercase text-[var(--emerald)] tracking-widest font-semibold block mb-3">
                Delivered Work
              </span>
              <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[48px] text-[var(--text-primary)] font-extrabold tracking-tight">
                Proof through delivered work.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl font-normal leading-relaxed">
                Real production systems engineered for operational efficiency, automated scale, and reliable performance.
              </p>
            </div>

            <button
              onClick={() => navigate('/work')}
              className="inline-flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-wider text-[var(--emerald)] hover:underline cursor-pointer group"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="space-y-12">
            {/* Case Study 01: AgroTrace */}
            {PROJECTS.filter((p) => p.id === 'agrotrace').map((project) => (
              <div
                key={project.id}
                onClick={() => navigate('/work')}
                className="glass-2 holographic-edge rounded-3xl p-6 sm:p-10 spatial-card cursor-pointer group border-white/10 hover:border-[var(--emerald)]/50 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Media Viewport */}
                  <div className="lg:col-span-7">
                    <ProjectCarousel
                      images={project.images}
                      projectTitle={project.title}
                      systemUrl="agrotrace.live.system"
                      badgeText="Live Telemetry"
                      accentColor="var(--emerald)"
                      aspectRatioClass="aspect-[16/10]"
                    />
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2.5 mb-3">
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

                      <p className="text-xs font-headline font-semibold text-[var(--emerald)] mb-5">
                        {project.tagline}
                      </p>

                      <div className="space-y-3.5 mb-6 text-xs text-[var(--text-secondary)]">
                        <div>
                          <strong className="text-white font-headline uppercase text-[11px] block mb-0.5">The Challenge:</strong>
                          <span>{project.problem}</span>
                        </div>
                        <div>
                          <strong className="text-[var(--emerald)] font-headline uppercase text-[11px] block mb-0.5">The Solution:</strong>
                          <span>{project.solution}</span>
                        </div>
                        <div>
                          <strong className="text-[var(--gold)] font-headline uppercase text-[11px] block mb-0.5">The Outcome:</strong>
                          <span>{project.result}</span>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-5">
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

                    <div className="pt-4 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[var(--emerald)] font-bold">
                      <span>Read AgroTrace Case Study</span>
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
                className="glass-2 holographic-edge rounded-3xl p-6 sm:p-10 spatial-card cursor-pointer group border-white/10 hover:border-[var(--gold)]/50 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-7 lg:order-last">
                    <ProjectCarousel
                      images={project.images}
                      projectTitle={project.title}
                      systemUrl="ipmi-os.decision.engine"
                      badgeText="Algorithmic AI"
                      accentColor="var(--gold)"
                      aspectRatioClass="aspect-[16/10]"
                    />
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2.5 mb-3">
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

                      <p className="text-xs font-headline font-semibold text-[var(--gold)] mb-5">
                        {project.tagline}
                      </p>

                      <div className="space-y-3.5 mb-6 text-xs text-[var(--text-secondary)]">
                        <div>
                          <strong className="text-white font-headline uppercase text-[11px] block mb-0.5">The Challenge:</strong>
                          <span>{project.problem}</span>
                        </div>
                        <div>
                          <strong className="text-[var(--gold)] font-headline uppercase text-[11px] block mb-0.5">The Solution:</strong>
                          <span>{project.solution}</span>
                        </div>
                        <div>
                          <strong className="text-[var(--emerald)] font-headline uppercase text-[11px] block mb-0.5">The Outcome:</strong>
                          <span>{project.result}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-5">
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

                    <div className="pt-4 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[var(--gold)] font-bold">
                      <span>Read IPMI-OS Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional Production Systems: MediVerse & FUME Fragrances */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
              {/* MediVerse */}
              {PROJECTS.filter((p) => p.id === 'mediverse').map((project) => (
                <div
                  key={project.id}
                  onClick={() => navigate('/work')}
                  className="glass-2 holographic-edge rounded-3xl p-6 sm:p-8 spatial-card cursor-pointer group border-white/10 hover:border-[#A78BFA]/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[#A78BFA]/15 text-[#A78BFA] border border-[#A78BFA]/30">
                        {project.categoryBadge}
                      </span>
                      <span className="text-[11px] font-mono-code text-[var(--text-muted)]">
                        {project.statusBadge}
                      </span>
                    </div>

                    <div className="mb-5">
                      <ProjectCarousel
                        images={project.images}
                        projectTitle={project.title}
                        systemUrl="mediverse.clinical.platform"
                        badgeText="Healthcare AI"
                        accentColor="#A78BFA"
                        aspectRatioClass="aspect-[16/10]"
                      />
                    </div>

                    <h3 className="font-display-hero text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-[#A78BFA] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-headline font-semibold text-[#A78BFA] mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4 font-normal">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[#A78BFA] font-bold">
                    <span>Inspect MediVerse Architecture</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}

              {/* FUME Fragrances */}
              {PROJECTS.filter((p) => p.id === 'fume').map((project) => (
                <div
                  key={project.id}
                  onClick={() => navigate('/work')}
                  className="glass-2 holographic-edge rounded-3xl p-6 sm:p-8 spatial-card cursor-pointer group border-white/10 hover:border-[#F43F5E]/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[#F43F5E]/15 text-[#F43F5E] border border-[#F43F5E]/30">
                        {project.categoryBadge}
                      </span>
                      <span className="text-[11px] font-mono-code text-[var(--text-muted)]">
                        {project.statusBadge}
                      </span>
                    </div>

                    <div className="mb-5">
                      <ProjectCarousel
                        images={project.images}
                        projectTitle={project.title}
                        systemUrl="fume-fragrances.storefront"
                        badgeText="Luxury Storefront"
                        accentColor="#F43F5E"
                        aspectRatioClass="aspect-[16/10]"
                      />
                    </div>

                    <h3 className="font-display-hero text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-[#F43F5E] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-headline font-semibold text-[#F43F5E] mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4 font-normal">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[#F43F5E] font-bold">
                    <span>Inspect FUME Brand &amp; E-Commerce</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. How We Work: 4-Step Milestone Process */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto">
          <div className="surface-ivory rounded-3xl p-8 sm:p-14 lg:p-18 spatial-card text-[#0A0F1D]">
            <div className="max-w-3xl mb-14">
              <span className="font-mono-code text-xs uppercase text-[#0F172A] tracking-widest font-bold block mb-3">
                Our Process
              </span>
              <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[44px] text-[#0A0F1D] font-extrabold tracking-tight leading-tight">
                No hourly surprises. You approve working software before payment.
              </h2>
              <p className="mt-4 text-base text-[#1E293B] leading-relaxed font-normal">
                Axorks eliminates agency billing uncertainty. We write an itemized scope with guaranteed fixed pricing. Every sprint milestone is tested on private staging before funds release, concluding with complete source code handover.
              </p>
            </div>

            {/* 4 Execution Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-[#0A0F1D]/15">
              <div className="p-6 rounded-2xl bg-black/[0.04] border border-black/[0.08]">
                <div className="font-mono-code text-xs font-bold uppercase text-[#D97706] mb-2">
                  Step 01
                </div>
                <h4 className="font-headline text-lg font-bold text-[#0A0F1D] mb-2">Technical Discovery</h4>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Complimentary consultation to clarify your business goals, bottlenecks, and system requirements.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/[0.04] border border-black/[0.08]">
                <div className="font-mono-code text-xs font-bold uppercase text-[#059669] mb-2">
                  Step 02
                </div>
                <h4 className="font-headline text-lg font-bold text-[#0A0F1D] mb-2">Fixed-Price Proposal</h4>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Guaranteed functional scope, deliverable milestones, and total fixed price before work begins.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/[0.04] border border-black/[0.08]">
                <div className="font-mono-code text-xs font-bold uppercase text-[#7C3AED] mb-2">
                  Step 03
                </div>
                <h4 className="font-headline text-lg font-bold text-[#0A0F1D] mb-2">Milestone Builds</h4>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Sprint iterations deployed to private staging. You test real functionality before authorizing milestone payouts.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/[0.04] border border-black/[0.08]">
                <div className="font-mono-code text-xs font-bold uppercase text-[#0284C7] mb-2">
                  Step 04
                </div>
                <h4 className="font-headline text-lg font-bold text-[#0A0F1D] mb-2">Launch &amp; Handover</h4>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Production deployment, full source code handover to your repositories, and zero proprietary lock-in.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
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

      {/* 6. Why Axorks */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-24 lg:py-32 bg-[#080D1A] border-y border-[var(--glass-border)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono-code text-xs uppercase text-[var(--gold)] tracking-widest font-semibold block mb-3">
              Why Work With Us
            </span>
            <h2 className="font-display-hero text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
              Why Founders Choose Axorks.
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">
              We replace agency ambiguity with clear legal, commercial, and engineering guarantees.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl glass-2 border-white/10 hover:border-[var(--gold)]/50 transition-all">
              <Tag className="w-6 h-6 text-[var(--gold)] mb-4" />
              <h4 className="font-headline text-base font-bold text-white mb-2">Projects from $1,000</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Accessible entry options for growing businesses and startup MVPs. Every project receives an itemized fixed-price proposal.
              </p>
            </div>

            <div className="p-7 rounded-2xl glass-2 border-white/10 hover:border-[var(--emerald)]/50 transition-all">
              <ShieldCheck className="w-6 h-6 text-[var(--emerald)] mb-4" />
              <h4 className="font-headline text-base font-bold text-white mb-2">Fixed-Price Milestones</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Zero open-ended billing. You know your total commitment from day one, with payment divided across tested milestone builds.
              </p>
            </div>

            <div className="p-7 rounded-2xl glass-2 border-white/10 hover:border-[#A78BFA]/50 transition-all">
              <Users className="w-6 h-6 text-[#A78BFA] mb-4" />
              <h4 className="font-headline text-base font-bold text-white mb-2">Direct Senior Engineering</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Work directly with founder Muhammad Mujahid and senior engineers. No non-technical account managers in the middle.
              </p>
            </div>

            <div className="p-7 rounded-2xl glass-2 border-white/10 hover:border-[#38BDF8]/50 transition-all">
              <Building2 className="w-6 h-6 text-[#38BDF8] mb-4" />
              <h4 className="font-headline text-base font-bold text-white mb-2">Real Engineering Offices</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Axorks Pvt Limited operates registered physical software development offices in Karachi and Islamabad, Pakistan.
              </p>
            </div>

            <div className="p-7 rounded-2xl glass-2 border-white/10 hover:border-[var(--gold)]/50 transition-all">
              <Clock className="w-6 h-6 text-[var(--gold)] mb-4" />
              <h4 className="font-headline text-base font-bold text-white mb-2">24-Hour Response Time</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Direct availability on email, WhatsApp, and Slack. Every proposal and client inquiry receives a substantive response within 24 hours.
              </p>
            </div>

            <div className="p-7 rounded-2xl glass-2 border-white/10 hover:border-[var(--emerald)]/50 transition-all">
              <Key className="w-6 h-6 text-[var(--emerald)] mb-4" />
              <h4 className="font-headline text-base font-bold text-white mb-2">100% IP Handover</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                You retain complete commercial ownership of all source code, database schemas, and documentation. Zero proprietary vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Founder Section: Muhammad Mujahid (Commanding Centerpiece) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative">
        <div className="max-w-6xl mx-auto">
          <div className="glass-2 holographic-edge rounded-3xl p-8 sm:p-14 lg:p-16 border-[var(--gold)]/40 shadow-[0_20px_80px_rgba(0,0,0,0.7)] relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Authentic Photo */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-2 border-[var(--gold)]/60 shadow-2xl bg-[#111622] shrink-0">
                  <img
                    src={founder.image || '/Images/Founder and CEO SOFTWARE ENGINEER.jpeg'}
                    alt="Muhammad Mujahid, Founder and CEO of Axorks Technologies"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Founder Profile */}
              <div className="lg:col-span-7 text-left">
                <div className="mb-6">
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-mono-code font-bold uppercase tracking-wider bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/30">
                    FOUNDER &amp; CEO
                  </span>
                </div>

                <h3 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                  Muhammad Mujahid
                </h3>

                <p className="text-sm sm:text-base font-headline font-semibold text-[var(--gold)] mb-5">
                  Founder &amp; CEO / Chief Systems Architect · BS Software Engineering
                </p>

                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
                  Muhammad directs systems architecture, AI workflow engineering, and proposal scoping at Axorks. Every client engagement is personally guided by senior leadership, ensuring that engineering decisions deliver real business efficiency and measurable profitability.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3 mb-6">
                  <div className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono-code text-slate-300">
                    BS Software Engineering
                  </div>
                  <div className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono-code text-slate-300">
                    Bahria University Alumnus
                  </div>
                  <div className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono-code text-slate-300">
                    Direct Partner Involvement
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => navigate('/contact')}
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] text-xs font-headline font-bold uppercase tracking-wider glow-gold-jewel cursor-pointer shadow-lg transition-all"
                  >
                    <span>Discuss Your Project With Muhammad</span>
                  </button>

                  <a
                    href="mailto:contact@axorks.com?subject=Project Inquiry for Muhammad Mujahid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl glass-2 border border-white/10 text-xs font-mono-code text-slate-300 hover:text-[var(--gold)] hover:border-[var(--gold)]/40 transition-colors"
                  >
                    contact@axorks.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Studio Team Roster */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28 bg-[var(--bg-secondary)]/30 border-t border-[var(--glass-border)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="font-mono-code text-xs uppercase text-[#A78BFA] tracking-widest font-semibold block mb-2">
                Our Team
              </span>
              <h3 className="font-display-hero text-2xl sm:text-3xl font-bold text-white">
                Core Specialists &amp; Client Partners.
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
                A dedicated team of domain specialists working alongside leadership.
              </p>
            </div>
            <button
              onClick={() => navigate('/about')}
              className="text-xs font-headline font-bold uppercase tracking-wider text-[var(--gold)] hover:underline cursor-pointer flex items-center gap-1.5"
            >
              <span>View Full Studio Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTeam.map((member) => (
              <div
                key={member.id}
                className="p-6 rounded-2xl glass-2 border-white/10 flex flex-col justify-between hover:border-white/20 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    {member.image ? (
                      <div className="w-14 h-14 rounded-2xl overflow-hidden border border-[var(--gold)]/40 shadow-md bg-[#111622] shrink-0">
                        <img
                          src={member.image}
                          alt={`${member.name}, ${member.role} at Axorks`}
                          className={`w-full h-full object-cover ${member.id === 'yousaf-piryani' ? 'object-[26%_40%]' : 'object-[center_20%]'} transition-transform duration-300 group-hover:scale-105`}
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center font-mono-code text-sm font-bold text-[var(--gold)] shrink-0">
                        {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()}
                      </div>
                    )}
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono-code font-bold uppercase bg-white/[0.04] text-[var(--text-muted)] border border-white/[0.08]">
                      {member.id === 'furqan' || member.id === 'farwa' ? 'Partnerships' : 'Engineering'}
                    </span>
                  </div>

                  <h4 className="font-headline text-base font-bold text-white group-hover:text-[var(--gold)] transition-colors">
                    {member.name}
                  </h4>
                  <div className="text-xs font-mono-code text-[var(--gold)] mt-0.5 mb-2 font-semibold">
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

      {/* 8.5. Studio Production Standards (Soft Light / Warm Ivory Surface) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
        <div className="max-w-7xl mx-auto">
          <div className="surface-ivory rounded-3xl p-8 sm:p-12 lg:p-16 text-[#0A0F1D] spatial-card">
            <div className="max-w-3xl mb-12">
              <span className="font-mono-code text-xs uppercase text-[#0F172A] tracking-widest font-bold block mb-3">
                Production Standards
              </span>
              <h3 className="font-display-hero text-2xl sm:text-3xl lg:text-4xl text-[#0A0F1D] font-extrabold tracking-tight leading-tight">
                Engineering excellence delivered with complete transparency.
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#1E293B] leading-relaxed font-normal">
                Every system is built to production-grade benchmarks with clear commercial ownership, clean documentation, and direct access to senior engineers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#0A0F1D]/15">
              <div className="p-6 rounded-2xl bg-black/[0.03] border border-black/[0.08]">
                <div className="font-mono-code text-xs font-bold uppercase text-[#D97706] mb-2">
                  01 / Fixed Scope
                </div>
                <h4 className="font-headline text-base font-bold text-[#0A0F1D] mb-1.5">
                  Itemized Proposals
                </h4>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Clear specifications and milestone definitions before any code is written. Zero budget overruns.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/[0.03] border border-black/[0.08]">
                <div className="font-mono-code text-xs font-bold uppercase text-[#059669] mb-2">
                  02 / Staging Verification
                </div>
                <h4 className="font-headline text-base font-bold text-[#0A0F1D] mb-1.5">
                  Tested Deliverables
                </h4>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Inspect and interact with working software on private staging environments at every sprint milestone.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/[0.03] border border-black/[0.08]">
                <div className="font-mono-code text-xs font-bold uppercase text-[#2563EB] mb-2">
                  03 / Commercial Ownership
                </div>
                <h4 className="font-headline text-base font-bold text-[#0A0F1D] mb-1.5">
                  100% IP Handover
                </h4>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Full transfer of git repositories, database schemas, CI/CD pipelines, and architecture blueprints upon final delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final Conversion Block */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative">
        <div className="max-w-5xl mx-auto text-center glass-2 holographic-edge rounded-3xl p-8 sm:p-14 lg:p-16 border-[var(--gold)]/30">
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
              className="w-full sm:w-auto magnetic-btn inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl glass-2 border border-[#10B981]/50 hover:border-[#10B981] text-white text-xs sm:text-sm font-headline font-semibold uppercase tracking-wider transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#10B981]" />
              <span>WhatsApp: +92 314 103 0223</span>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-mono-code text-[var(--text-muted)]">
            <a
              href="mailto:contact@axorks.com?subject=Proposal Inquiry"
              className="text-[var(--gold)] hover:underline font-semibold"
            >
              contact@axorks.com
            </a>
            <span>•</span>
            <span>24-hour proposal turnaround</span>
            <span>•</span>
            <span>Zero hourly billing surprises</span>
          </div>
        </div>
      </section>
    </div>
  );
};
