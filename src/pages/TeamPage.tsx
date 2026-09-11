import React from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { useNavigate } from '../router/Router';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';

export const TeamPage: React.FC = () => {
  const navigate = useNavigate();

  const mujahid = TEAM_MEMBERS.find((m) => m.id === 'mujahid') || TEAM_MEMBERS[0];
  const farhana = TEAM_MEMBERS.find((m) => m.id === 'farhana');
  const yousaf = TEAM_MEMBERS.find((m) => m.id === 'yousaf-piryani');
  const alina = TEAM_MEMBERS.find((m) => m.id === 'alina');
  const faisal = TEAM_MEMBERS.find((m) => m.id === 'faisal');
  const shayan = TEAM_MEMBERS.find((m) => m.id === 'shayan');
  const aliHaider = TEAM_MEMBERS.find((m) => m.id === 'ali-haider');
  const qasim = TEAM_MEMBERS.find((m) => m.id === 'qasim');
  const farwa = TEAM_MEMBERS.find((m) => m.id === 'farwa');
  const furqan = TEAM_MEMBERS.find((m) => m.id === 'furqan');

  return (
    <div className="w-full pt-8 pb-20 lg:pb-28">
      {/* Header Banner */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[var(--gold)] mb-4">
            <button onClick={() => navigate('/')} className="hover:underline cursor-pointer">Home</button>
            <span>/</span>
            <span>Engineering Team</span>
          </div>

          <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
            The Engineers Who Actually Build Your Software.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed font-normal">
            No junior offshore handoffs or non-technical account intermediaries. You collaborate directly with software architects and specialists from day one.
          </p>
        </div>
      </section>

      {/* ─── SECTION 1: EXECUTIVE & BUSINESS LEADERSHIP ─── */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto space-y-6">
          <span className="font-mono-code text-xs uppercase text-[var(--gold)] tracking-widest font-bold block">
            01 // ARCHITECTURAL &amp; STRATEGIC LEADERSHIP
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Founder & CEO Spotlight (8 Cols) */}
            <div className="lg:col-span-8 rounded-3xl glass-2 holographic-edge p-7 sm:p-10 spatial-card shadow-2xl border-[var(--gold)]/35">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
                <div className="sm:col-span-5 flex flex-col items-center">
                  <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-[var(--gold)]/40 bg-[#0A0F1D] shrink-0">
                    <img
                      src={mujahid.image || '/Images/Founder and CEO SOFTWARE ENGINEER.jpeg'}
                      alt="Muhammad Mujahid — Founder & CEO"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="mt-3 text-[11px] font-mono-code text-[var(--gold)] font-bold uppercase tracking-wider">
                    Chief Systems Architect
                  </span>
                </div>

                <div className="sm:col-span-7 space-y-3 text-left">
                  <span className="text-[10px] font-mono-code text-[var(--gold)] uppercase tracking-widest font-bold px-2 py-0.5 rounded bg-[var(--gold)]/15 border border-[var(--gold)]/30">
                    FOUNDER &amp; CEO
                  </span>
                  <h2 className="font-display-hero text-2xl sm:text-3xl font-extrabold text-white">
                    {mujahid.name}
                  </h2>
                  <div className="text-xs font-mono-code text-[var(--emerald)] font-medium">
                    BS Software Engineering • Bahria University
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                    {mujahid.description} Direct engagement on core architecture, high-concurrency database design, and milestone delivery for every commercial contract.
                  </p>

                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <a
                      href="mailto:contact@axorks.com?subject=Technical%20Inquiry%20%E2%80%94%20AXORKS%20Technologies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl glass-2 hover:border-[var(--gold)] text-xs font-mono-code text-white flex items-center gap-2 transition-colors border border-[var(--glass-border)] cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5 text-[var(--gold)]" />
                      <span>contact@axorks.com</span>
                    </a>

                    <a
                      href="https://wa.me/923141030223"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl glass-2 hover:border-[var(--emerald)] text-xs font-mono-code text-white flex items-center gap-2 transition-colors border border-[var(--glass-border)] cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[var(--emerald)]" />
                      <span>+92 314 103 0223</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Co-Founder Farhana (4 Cols) */}
            {farhana && (
              <div className="lg:col-span-4 rounded-3xl glass-2 holographic-edge p-7 sm:p-8 spatial-card flex flex-col justify-between border-white/10">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono-code text-[var(--emerald)] uppercase tracking-widest font-bold px-2 py-0.5 rounded bg-[var(--emerald)]/15 border border-[var(--emerald)]/30">
                      EXECUTIVE
                    </span>
                    <span className="text-xs font-mono-code text-[var(--text-muted)]">Co-Founder</span>
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-[var(--emerald)]/15 border border-[var(--emerald)]/30 flex items-center justify-center text-[var(--emerald)] font-display-hero text-2xl font-bold mb-4">
                    F
                  </div>

                  <h3 className="font-display-hero text-xl font-bold text-white mb-1">
                    {farhana.name}
                  </h3>
                  <div className="text-xs font-mono-code text-[var(--emerald)] font-medium mb-3">
                    {farhana.role} • BBA
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal">
                    {farhana.description} Oversees financial governance, compliance, client escrow coordination, and operations.
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--glass-border)] text-xs font-mono-code text-[var(--text-muted)]">
                  // Business Administration &amp; Operations
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: PRINCIPAL AI & NEURAL NETWORKS ─── */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto space-y-6">
          <span className="font-mono-code text-xs uppercase text-[var(--emerald)] tracking-widest font-bold block">
            02 // ARTIFICIAL INTELLIGENCE &amp; NEURAL NETWORKS
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Yousaf Piryani — 30 Years Experience */}
            {yousaf && (
              <div className="glass-2 holographic-edge rounded-3xl p-7 sm:p-8 spatial-card flex flex-col justify-between border-[var(--gold)]/30">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/30">
                      30+ Years Experience • US-Returned
                    </span>
                    <span className="text-xs font-mono-code text-[var(--text-muted)]">Applied AI</span>
                  </div>

                  <h3 className="font-display-hero text-2xl font-bold text-white mb-1">
                    {yousaf.name}
                  </h3>
                  <div className="text-xs font-mono-code text-[var(--gold)] font-medium mb-3">
                    {yousaf.role}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                    {yousaf.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[var(--text-muted)]">
                  <span>Specialization:</span>
                  <span className="text-white font-semibold">Deep Learning &amp; Neural Nets</span>
                </div>
              </div>
            )}

            {/* Alina — AI & Neural Networks */}
            {alina && (
              <div className="glass-2 holographic-edge rounded-3xl p-7 sm:p-8 spatial-card flex flex-col justify-between border-[var(--emerald)]/30">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[var(--emerald)]/15 text-[var(--emerald)] border border-[var(--emerald)]/30">
                      Multi-Agent Workflows
                    </span>
                    <span className="text-xs font-mono-code text-[var(--text-muted)]">Core AI</span>
                  </div>

                  <h3 className="font-display-hero text-2xl font-bold text-white mb-1">
                    {alina.name}
                  </h3>
                  <div className="text-xs font-mono-code text-[var(--emerald)] font-medium mb-3">
                    {alina.role}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                    {alina.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-mono-code text-[var(--text-muted)]">
                  <span>Specialization:</span>
                  <span className="text-white font-semibold">Autonomous Agents &amp; RAG</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: CORE ENGINEERING & DECENTRALIZED PROTOCOLS ─── */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto space-y-6">
          <span className="font-mono-code text-xs uppercase text-[#38BDF8] tracking-widest font-bold block">
            03 // WEB, MOBILE &amp; BLOCKCHAIN SPECIALISTS
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Faisal */}
            {faisal && (
              <div className="glass-2 holographic-edge rounded-3xl p-6 spatial-card flex flex-col justify-between border-white/10">
                <div>
                  <span className="text-[10px] font-mono-code text-[#A78BFA] uppercase font-bold tracking-wider block mb-2">
                    Mobile Engineering
                  </span>
                  <h4 className="font-headline text-lg font-bold text-white mb-1">{faisal.name}</h4>
                  <div className="text-xs font-mono-code text-[#A78BFA] mb-2">{faisal.role}</div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{faisal.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--glass-border)] text-[11px] font-mono-code text-[var(--text-muted)]">
                  Flutter • iOS • Android
                </div>
              </div>
            )}

            {/* Shayan */}
            {shayan && (
              <div className="glass-2 holographic-edge rounded-3xl p-6 spatial-card flex flex-col justify-between border-white/10">
                <div>
                  <span className="text-[10px] font-mono-code text-[#38BDF8] uppercase font-bold tracking-wider block mb-2">
                    Web &amp; Full-Stack
                  </span>
                  <h4 className="font-headline text-lg font-bold text-white mb-1">{shayan.name}</h4>
                  <div className="text-xs font-mono-code text-[#38BDF8] mb-2">{shayan.role}</div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{shayan.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--glass-border)] text-[11px] font-mono-code text-[var(--text-muted)]">
                  React • TypeScript • Node
                </div>
              </div>
            )}

            {/* Ali Haider */}
            {aliHaider && (
              <div className="glass-2 holographic-edge rounded-3xl p-6 spatial-card flex flex-col justify-between border-white/10">
                <div>
                  <span className="text-[10px] font-mono-code text-[var(--gold)] uppercase font-bold tracking-wider block mb-2">
                    Web3 &amp; Smart Contracts
                  </span>
                  <h4 className="font-headline text-lg font-bold text-white mb-1">{aliHaider.name}</h4>
                  <div className="text-xs font-mono-code text-[var(--gold)] mb-2">{aliHaider.role}</div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{aliHaider.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--glass-border)] text-[11px] font-mono-code text-[var(--text-muted)]">
                  Solidity • Ethereum • DeFi
                </div>
              </div>
            )}

            {/* Qasim */}
            {qasim && (
              <div className="glass-2 holographic-edge rounded-3xl p-6 spatial-card flex flex-col justify-between border-white/10">
                <div>
                  <span className="text-[10px] font-mono-code text-[#10B981] uppercase font-bold tracking-wider block mb-2">
                    Certified Blockchain
                  </span>
                  <h4 className="font-headline text-lg font-bold text-white mb-1">{qasim.name}</h4>
                  <div className="text-xs font-mono-code text-[#10B981] mb-2">Software Engineer &amp; Web3</div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{qasim.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--glass-border)] text-[11px] font-mono-code text-[var(--text-muted)]">
                  Smart Contracts • Backend
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: STRATEGIC GROWTH & PARTNERSHIPS ─── */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto space-y-6">
          <span className="font-mono-code text-xs uppercase text-[var(--gold)] tracking-widest font-bold block">
            04 // STRATEGIC PARTNERSHIPS &amp; OUTREACH
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Furqan */}
            {furqan && (
              <div className="glass-2 holographic-edge rounded-3xl p-7 spatial-card flex flex-col sm:flex-row items-center gap-6 border-white/10">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border border-[var(--emerald)]/40 shrink-0 bg-[#0A0F1D]">
                  <img
                    src={furqan.image || '/Images/FURQAN Business Development Officer.jpeg'}
                    alt="Furqan — Business Development"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-[10px] font-mono-code text-[var(--emerald)] uppercase font-bold">
                    Commercial Engagements
                  </span>
                  <h4 className="font-headline text-xl font-bold text-white">{furqan.name}</h4>
                  <div className="text-xs font-mono-code text-[var(--text-muted)]">{furqan.role}</div>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">{furqan.description}</p>
                </div>
              </div>
            )}

            {/* Farwa */}
            {farwa && (
              <div className="glass-2 holographic-edge rounded-3xl p-7 spatial-card flex flex-col sm:flex-row items-center gap-6 border-white/10">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border border-[var(--gold)]/40 shrink-0 bg-[#0A0F1D]">
                  <img
                    src={farwa.image || '/Images/FARWA Marketing & Outreach.jpeg'}
                    alt="Farwa — Marketing & Outreach"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-[10px] font-mono-code text-[var(--gold)] uppercase font-bold">
                    Brand &amp; Outreach
                  </span>
                  <h4 className="font-headline text-xl font-bold text-white">{farwa.name}</h4>
                  <div className="text-xs font-mono-code text-[var(--text-muted)]">{farwa.role}</div>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">{farwa.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Strip on Soft-Ivory Luxury Surface */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto surface-ivory rounded-3xl p-8 sm:p-12 spatial-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display-hero text-2xl sm:text-3xl font-extrabold text-[#0A0F1D]">
              Want to consult directly with our senior engineers?
            </h3>
            <p className="text-sm text-[#1E293B] mt-1 font-normal">
              Discuss architecture, technical feasibilities, and milestones with zero commercial pressure.
            </p>
          </div>

          <button
            onClick={() => navigate('/contact')}
            className="shrink-0 px-8 py-4 rounded-xl bg-[#0F172A] text-white text-xs font-headline font-bold uppercase tracking-wider hover:bg-[#1E293B] transition-all cursor-pointer shadow-lg flex items-center gap-2"
          >
            <span>Book Engineering Scoping Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

