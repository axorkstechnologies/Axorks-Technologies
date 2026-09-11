import React from 'react';
import { SERVICES } from '../data/mockData';
import { useNavigate } from '../router/Router';
import { Check, ArrowRight, Tag } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  const webApp = SERVICES.find((s) => s.id === 'web-apps') || SERVICES[0];
  const aiAuto = SERVICES.find((s) => s.id === 'ai-automation') || SERVICES[1];
  const mobileApp = SERVICES.find((s) => s.id === 'mobile-apps') || SERVICES[2];
  const web3 = SERVICES.find((s) => s.id === 'web3-blockchain') || SERVICES[3];
  const support = SERVICES.find((s) => s.id === 'support') || SERVICES[4];
  const productDev = SERVICES.find((s) => s.id === 'product-dev') || SERVICES[5];

  return (
    <div className="w-full pt-8 pb-20 lg:pb-28">
      {/* Page Header Banner */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[var(--gold)] mb-4">
            <button onClick={() => navigate('/')} className="hover:underline cursor-pointer">Home</button>
            <span>/</span>
            <span>Capabilities &amp; Services</span>
          </div>

          <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Capabilities &amp; Engineering Services.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed font-normal">
            Direct access to seasoned software architects. Fixed-price milestone delivery from $1,000 with 100% intellectual property transfer upon project handover.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-full glass-2 border border-[var(--gold)]/40 text-[var(--gold)] font-mono-code text-xs font-semibold flex items-center gap-2">
              <Tag className="w-3.5 h-3.5" />
              <span>Projects from $1,000</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full glass-2 border border-[var(--emerald)]/40 text-[var(--emerald)] font-mono-code text-xs font-semibold flex items-center gap-2">
              <Check className="w-3.5 h-3.5" />
              <span>Milestone Proposals Only</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Architecture Layout — Varied Rhythm (No AI 3x2 Identical Grid) */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">

          {/* ─── TIER 1: FLAGSHIP PLATFORMS (Asymmetric 2-Column Spread) ─── */}
          <div>
            <div className="mb-4">
              <span className="font-mono-code text-xs uppercase tracking-widest text-[var(--gold)] font-bold">
                TIER 01 // CORE FLAGSHIP DISCIPLINES
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Flagship 01: Custom Web Applications (7 Cols) */}
              <div className="lg:col-span-7 glass-2 holographic-edge rounded-3xl p-8 sm:p-10 spatial-card flex flex-col justify-between border-[var(--gold)]/30 hover:border-[var(--gold)]/60 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/30">
                      High-Throughput Web
                    </span>
                    <span className="font-mono-code text-xs text-[var(--text-muted)]">
                      DISCIPLINE 01
                    </span>
                  </div>

                  <h2 className="font-display-hero text-2xl sm:text-3xl font-bold text-white mb-1">
                    {webApp.title}
                  </h2>
                  <p className="text-sm font-headline text-[var(--gold)] font-semibold mb-4">
                    {webApp.tagline}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                    {webApp.description}
                  </p>

                  <div className="space-y-2.5 mb-6 pt-4 border-t border-[var(--glass-border)]">
                    <div className="text-[11px] font-mono-code uppercase text-white font-bold tracking-wider mb-2">
                      Verified Technical Deliverables:
                    </div>
                    {webApp.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                        <Check className="w-4 h-4 mt-0.5 shrink-0 text-[var(--gold)]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--glass-border)] mb-6">
                    {webApp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono-code text-[var(--text-muted)] bg-white/[0.04] border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => navigate('/contact')}
                    className="w-full py-3.5 rounded-xl glass-2 border border-[var(--glass-border)] hover:border-[var(--gold)] text-xs font-headline font-bold uppercase tracking-wider text-white hover:text-[var(--gold)] transition-all cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    <span>Request Web Application Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Flagship 02: AI Automations & Multi-AI (5 Cols) */}
              <div className="lg:col-span-5 glass-2 holographic-edge rounded-3xl p-8 sm:p-10 spatial-card flex flex-col justify-between border-[var(--emerald)]/30 hover:border-[var(--emerald)]/60 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[var(--emerald)]/15 text-[var(--emerald)] border border-[var(--emerald)]/30">
                      Applied Intelligence
                    </span>
                    <span className="font-mono-code text-xs text-[var(--text-muted)]">
                      DISCIPLINE 02
                    </span>
                  </div>

                  <h2 className="font-display-hero text-2xl sm:text-3xl font-bold text-white mb-1">
                    {aiAuto.title}
                  </h2>
                  <p className="text-sm font-headline text-[var(--emerald)] font-semibold mb-4">
                    {aiAuto.tagline}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                    {aiAuto.description}
                  </p>

                  <div className="space-y-2.5 mb-6 pt-4 border-t border-[var(--glass-border)]">
                    <div className="text-[11px] font-mono-code uppercase text-white font-bold tracking-wider mb-2">
                      Verified Technical Deliverables:
                    </div>
                    {aiAuto.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                        <Check className="w-4 h-4 mt-0.5 shrink-0 text-[var(--emerald)]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--glass-border)] mb-6">
                    {aiAuto.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono-code text-[var(--text-muted)] bg-white/[0.04] border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => navigate('/contact')}
                    className="w-full py-3.5 rounded-xl glass-2 border border-[var(--glass-border)] hover:border-[var(--emerald)] text-xs font-headline font-bold uppercase tracking-wider text-white hover:text-[var(--emerald)] transition-all cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    <span>Request AI Pipeline Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>


          {/* ─── TIER 2: SPECIALIZED ARCHITECTURES & LIFECYCLE (Offset Asymmetric Grid) ─── */}
          <div className="pt-8">
            <div className="mb-4">
              <span className="font-mono-code text-xs uppercase tracking-widest text-[#A78BFA] font-bold">
                TIER 02 // SPECIALIZED DOMAINS &amp; LIFECYCLE OPERATIONS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 03: Mobile Apps */}
              <div className="glass-2 holographic-edge rounded-3xl p-7 spatial-card flex flex-col justify-between border-white/10 hover:border-[#A78BFA]/50 transition-all">
                <div>
                  <span className="font-mono-code text-[11px] text-[#A78BFA] font-bold uppercase tracking-wider block mb-2">
                    DISCIPLINE 03
                  </span>
                  <h3 className="font-headline text-lg font-bold text-white mb-1">
                    {mobileApp.title}
                  </h3>
                  <p className="text-xs font-headline text-[#A78BFA] font-semibold mb-3">
                    {mobileApp.tagline}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                    {mobileApp.description}
                  </p>
                  <div className="space-y-1.5 pt-3 border-t border-[var(--glass-border)] mb-4">
                    {mobileApp.deliverables.slice(0, 3).map((d, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-[var(--text-secondary)]">
                        <Check className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#A78BFA]" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full py-2.5 rounded-xl glass-2 border border-[var(--glass-border)] hover:border-[#A78BFA] text-xs font-headline font-bold uppercase tracking-wider text-white hover:text-[#A78BFA] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Request Scope</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Card 04: Web3 & Blockchain */}
              <div className="glass-2 holographic-edge rounded-3xl p-7 spatial-card flex flex-col justify-between border-white/10 hover:border-[#38BDF8]/50 transition-all">
                <div>
                  <span className="font-mono-code text-[11px] text-[#38BDF8] font-bold uppercase tracking-wider block mb-2">
                    DISCIPLINE 04
                  </span>
                  <h3 className="font-headline text-lg font-bold text-white mb-1">
                    {web3.title}
                  </h3>
                  <p className="text-xs font-headline text-[#38BDF8] font-semibold mb-3">
                    {web3.tagline}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                    {web3.description}
                  </p>
                  <div className="space-y-1.5 pt-3 border-t border-[var(--glass-border)] mb-4">
                    {web3.deliverables.slice(0, 3).map((d, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-[var(--text-secondary)]">
                        <Check className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#38BDF8]" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full py-2.5 rounded-xl glass-2 border border-[var(--glass-border)] hover:border-[#38BDF8] text-xs font-headline font-bold uppercase tracking-wider text-white hover:text-[#38BDF8] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Request Scope</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Card 05: Proprietary Product Dev */}
              <div className="glass-2 holographic-edge rounded-3xl p-7 spatial-card flex flex-col justify-between border-white/10 hover:border-[#F43F5E]/50 transition-all">
                <div>
                  <span className="font-mono-code text-[11px] text-[#F43F5E] font-bold uppercase tracking-wider block mb-2">
                    DISCIPLINE 05
                  </span>
                  <h3 className="font-headline text-lg font-bold text-white mb-1">
                    {productDev.title}
                  </h3>
                  <p className="text-xs font-headline text-[#F43F5E] font-semibold mb-3">
                    {productDev.tagline}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                    {productDev.description}
                  </p>
                  <div className="space-y-1.5 pt-3 border-t border-[var(--glass-border)] mb-4">
                    {productDev.deliverables.slice(0, 3).map((d, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-[var(--text-secondary)]">
                        <Check className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#F43F5E]" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full py-2.5 rounded-xl glass-2 border border-[var(--glass-border)] hover:border-[#F43F5E] text-xs font-headline font-bold uppercase tracking-wider text-white hover:text-[#F43F5E] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Request Scope</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Card 06: Ongoing Support & SLA */}
              <div className="glass-2 holographic-edge rounded-3xl p-7 spatial-card flex flex-col justify-between border-white/10 hover:border-[var(--emerald)]/50 transition-all">
                <div>
                  <span className="font-mono-code text-[11px] text-[var(--emerald)] font-bold uppercase tracking-wider block mb-2">
                    DISCIPLINE 06
                  </span>
                  <h3 className="font-headline text-lg font-bold text-white mb-1">
                    {support.title}
                  </h3>
                  <p className="text-xs font-headline text-[var(--emerald)] font-semibold mb-3">
                    {support.tagline}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                    {support.description}
                  </p>
                  <div className="space-y-1.5 pt-3 border-t border-[var(--glass-border)] mb-4">
                    {support.deliverables.slice(0, 3).map((d, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-[var(--text-secondary)]">
                        <Check className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--emerald)]" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full py-2.5 rounded-xl glass-2 border border-[var(--glass-border)] hover:border-[var(--emerald)] text-xs font-headline font-bold uppercase tracking-wider text-white hover:text-[var(--emerald)] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Request Scope</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom Conversion Strip on Soft-Ivory Luxury Surface */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto surface-ivory rounded-3xl p-8 sm:p-12 spatial-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display-hero text-2xl sm:text-3xl font-extrabold text-[#0A0F1D]">
              Have a multi-disciplinary technical requirement?
            </h3>
            <p className="text-sm text-[#1E293B] mt-1 font-normal">
              We frequently combine AI models, mobile apps, and Web3 smart contracts into unified full-stack systems.
            </p>
          </div>

          <button
            onClick={() => navigate('/contact')}
            className="shrink-0 px-8 py-4 rounded-xl bg-[#0F172A] text-white text-xs font-headline font-bold uppercase tracking-wider hover:bg-[#1E293B] transition-all cursor-pointer shadow-lg"
          >
            Get Free Architecture Review
          </button>
        </div>
      </section>
    </div>
  );
};

