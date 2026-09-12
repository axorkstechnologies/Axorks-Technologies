import React from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { useNavigate } from '../router/Router';
import { Mail, MessageSquare, ArrowRight, Shield, Award, CheckCircle2, Code2, Cpu, Globe, Users } from 'lucide-react';

export const TeamPage: React.FC = () => {
  const navigate = useNavigate();

  const mujahid = TEAM_MEMBERS.find((m) => m.id === 'mujahid') || TEAM_MEMBERS[0];
  const farhana = TEAM_MEMBERS.find((m) => m.id === 'farhana');
  const faisal = TEAM_MEMBERS.find((m) => m.id === 'faisal');
  const yousaf = TEAM_MEMBERS.find((m) => m.id === 'yousaf-piryani');
  const alina = TEAM_MEMBERS.find((m) => m.id === 'alina');
  const shayan = TEAM_MEMBERS.find((m) => m.id === 'shayan');
  const aliHaider = TEAM_MEMBERS.find((m) => m.id === 'ali-haider');
  const qasim = TEAM_MEMBERS.find((m) => m.id === 'qasim');
  const furqan = TEAM_MEMBERS.find((m) => m.id === 'furqan');
  const farwa = TEAM_MEMBERS.find((m) => m.id === 'farwa');

  const engineeringSpecialists = [
    faisal,
    yousaf,
    alina,
    shayan,
    aliHaider,
    qasim,
  ].filter(Boolean) as typeof TEAM_MEMBERS;

  const partnershipsTeam = [
    furqan,
    farwa,
  ].filter(Boolean) as typeof TEAM_MEMBERS;

  return (
    <div className="w-full pt-8 pb-20 lg:pb-28">
      {/* ─── Breadcrumb & Headline Banner ─────────────────────────────────── */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[var(--gold)] mb-4">
            <button onClick={() => navigate('/')} className="hover:underline cursor-pointer">Home</button>
            <span>/</span>
            <span>Studio Team</span>
          </div>

          <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
            The Engineers &amp; Architects Behind AXORKS.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed font-normal">
            We are an AI-first engineering studio in Karachi and Islamabad. We pair deep systems architecture with hands-on technical execution. When you build with Axorks, you collaborate directly with senior specialists who write and review every line of code.
          </p>
        </div>
      </section>

      {/* ─── Leadership Duo (Founder & Co-Founder) ────────────────────────── */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto space-y-6">
          <span className="font-mono-code text-xs uppercase text-[var(--gold)] tracking-widest font-bold block">
            Studio Leadership
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Founder Card */}
            <div className="lg:col-span-7 rounded-3xl glass-2 holographic-edge p-7 sm:p-10 spatial-card shadow-2xl border-[var(--gold)]/35 flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                  <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-[var(--gold)]/40 bg-[#0A0F1D] shrink-0">
                    <img
                      src={mujahid.image || '/Images/Founder and CEO SOFTWARE ENGINEER.jpeg'}
                      alt="Muhammad Mujahid, Founder and CEO of Axorks Technologies"
                      className="w-full h-full object-cover object-[center_20%]"
                    />
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <span className="px-3 py-1 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/30 inline-block mb-2">
                      Founder &amp; Chief Systems Architect
                    </span>
                    <h2 className="font-display-hero text-2xl sm:text-3xl font-extrabold text-white">
                      {mujahid.name}
                    </h2>
                    <div className="text-xs font-mono-code text-[var(--gold)] mt-1 mb-3">
                      BS Software Engineering · Systems Architect
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                      Directs systems architecture, AI automation engineering, commercial agreements, and client relationships across North America, Europe, and Asia. Directly reviews technical designs on every project.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 leading-relaxed italic mb-6">
                  "We eliminated the layers of non-technical managers and hourly billing games that plague traditional agencies. Our clients speak directly with engineers who deliver working, tested software on fixed-price milestones."
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--glass-border)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono-code text-[var(--text-muted)]">
                  <Shield className="w-4 h-4 text-[var(--emerald)]" />
                  <span>Direct Technical Review on Every Proposal</span>
                </div>

                <a
                  href="mailto:contact@axorks.com?subject=Technical Consultation: Muhammad Mujahid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] text-xs font-headline font-bold uppercase tracking-wider hover:opacity-95 transition-all shadow-md cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Consult With Muhammad</span>
                </a>
              </div>
            </div>

            {/* Co-Founder / Business Operations on Refined Soft-Ivory Luxury Surface */}
            <div className="lg:col-span-5 surface-ivory rounded-3xl p-7 sm:p-10 spatial-card shadow-2xl border border-[rgba(214,207,195,0.85)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-md bg-[#0F172A] text-white text-[10px] font-mono-code font-bold uppercase tracking-wider">
                    Executive Governance
                  </span>
                  <Award className="w-5 h-5 text-[#B48310]" />
                </div>

                <div className="w-16 h-16 rounded-2xl bg-[#0F172A] text-[var(--gold)] flex items-center justify-center font-mono-code text-xl font-bold mb-4 shadow-md">
                  FA
                </div>

                <h3 className="font-display-hero text-2xl font-bold text-[#0A0F1D]">
                  {farhana?.name || 'Farhana'}
                </h3>
                <div className="text-xs font-mono-code text-[#B48310] font-semibold mt-1 mb-4">
                  Co-Founder / Business Operations
                </div>

                <p className="text-xs sm:text-sm text-[#1E293B] leading-relaxed mb-6 font-normal">
                  Oversees business administration, milestone-based payment governance, talent operations, and enterprise client contract fulfillment. Ensures every contract adheres to itemized pricing and transparent delivery schedules.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[rgba(214,207,195,0.7)] text-xs text-[#1E293B]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#058A5E] shrink-0" />
                    <span>Itemized fixed-price agreements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#058A5E] shrink-0" />
                    <span>Clear milestone release criteria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#058A5E] shrink-0" />
                    <span>Strict 100% IP handover compliance</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[rgba(214,207,195,0.7)] text-xs font-mono-code text-[#475569]">
                Offices in Karachi &amp; Islamabad, Pakistan
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Engineering Specialists (Varied Asymmetric Grid) ────────── */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono-code text-xs uppercase text-[#38BDF8] tracking-widest font-bold block mb-2">
                Engineering Practitioners
              </span>
              <h2 className="font-display-hero text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                Specialized Domain Engineers
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-md">
              Experienced software engineers, neural network researchers, and blockchain architects working across production systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringSpecialists.map((member) => {
              const isFaisal = member.id === 'faisal';
              const isYousaf = member.id === 'yousaf-piryani';

              return (
                <div
                  key={member.id}
                  className={`p-6 sm:p-7 rounded-3xl glass-2 border-white/10 flex flex-col justify-between hover:border-white/25 transition-all group spatial-card ${
                    isFaisal || isYousaf ? 'border-[var(--gold)]/40 shadow-xl' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      {member.image ? (
                        <div className="w-16 h-16 rounded-2xl overflow-hidden border border-[var(--gold)]/45 shadow-lg bg-[#111622] shrink-0">
                          <img
                            src={member.image}
                            alt={`${member.name}, ${member.role} at Axorks`}
                            className={`w-full h-full object-cover ${isYousaf ? 'object-[26%_40%]' : 'object-[center_20%]'} transition-transform duration-300 group-hover:scale-105`}
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center font-mono-code text-base font-bold text-[var(--gold)] shrink-0">
                          {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()}
                        </div>
                      )}

                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono-code font-bold uppercase bg-white/[0.04] text-[var(--text-muted)] border border-white/[0.08]">
                        {isYousaf ? 'Deep Learning / AI' : isFaisal ? 'Full-Stack' : 'Engineering'}
                      </span>
                    </div>

                    <h3 className="font-headline text-lg font-bold text-white group-hover:text-[var(--gold)] transition-colors">
                      {member.name}
                    </h3>

                    <div className="text-xs font-mono-code text-[var(--gold)] mt-0.5 mb-3 font-semibold">
                      {member.role}
                    </div>

                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal">
                      {member.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--glass-border)] flex items-center justify-between text-[11px] font-mono-code text-[var(--text-muted)]">
                    <span>Direct Access</span>
                    <span className="text-white/70 font-semibold">Karachi &amp; Islamabad</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Client Partnerships & Growth (Soft-Ivory Surfaces) ───────────── */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto space-y-6">
          <div>
            <span className="font-mono-code text-xs uppercase text-[var(--gold)] tracking-widest font-bold block mb-2">
              Growth &amp; Partnerships
            </span>
            <h2 className="font-display-hero text-2xl sm:text-3xl font-extrabold text-white">
              Client Acquisition &amp; Enterprise Relations
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partnershipsTeam.map((member) => (
              <div
                key={member.id}
                className="surface-ivory rounded-3xl p-7 sm:p-9 spatial-card shadow-2xl border border-[rgba(214,207,195,0.85)] flex flex-col sm:flex-row items-center sm:items-start gap-6"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-[#B48310]/40 shadow-lg shrink-0 bg-[#0F172A]">
                  <img
                    src={member.image || ''}
                    alt={`${member.name}, ${member.role} at Axorks`}
                    className="w-full h-full object-cover object-[center_20%]"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono-code font-bold uppercase bg-[#0F172A] text-white inline-block mb-2">
                    {member.id === 'furqan' ? 'Business Development' : 'Brand Strategy'}
                  </span>
                  <h3 className="font-display-hero text-xl font-bold text-[#0A0F1D]">
                    {member.name}
                  </h3>
                  <div className="text-xs font-mono-code text-[#B48310] font-semibold mt-0.5 mb-3">
                    {member.role}
                  </div>
                  <p className="text-xs sm:text-sm text-[#1E293B] leading-relaxed font-normal">
                    {member.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[rgba(214,207,195,0.7)] flex items-center justify-between text-xs font-mono-code text-[#475569]">
                    <span>North America · Europe · Asia</span>
                    <span className="text-[#058A5E] font-semibold">Active Client Intake</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bottom Direct Consultation Action Trigger ────────────────────── */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center glass-2 holographic-edge rounded-3xl p-8 sm:p-12 border-[var(--gold)]/30">
          <h2 className="font-display-hero text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Build Directly With Experienced Engineers.
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-xl mx-auto mb-6 leading-relaxed">
            Every engagement begins with an itemized technical scope and guaranteed fixed pricing starting from $1,000. No hourly billing ambiguity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] text-xs font-headline font-bold uppercase tracking-wider glow-gold-jewel magnetic-btn shadow-lg cursor-pointer"
            >
              Request Fixed-Price Proposal
            </button>

            <a
              href="https://wa.me/923141030223"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl glass-2 border border-[#10B981]/50 text-white text-xs font-headline font-semibold uppercase tracking-wider hover:border-[#10B981] transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#10B981]" />
              <span>WhatsApp Leadership: +92 314 103 0223</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
