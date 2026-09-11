import React from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { useNavigate } from '../router/Router';
import { Mail, MessageSquare, ArrowRight, ShieldCheck, Tag, Building2, Key, Users } from 'lucide-react';

export const AboutPage: React.FC = () => {
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
            <span>About Axorks</span>
          </div>

          <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
            An AI-First Engineering Studio Built on Certainty.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed font-normal">
            Axorks is an AI-first software engineering studio based in Karachi and Islamabad. We help growing businesses automate manual work and build reliable custom systems through intelligent automation, custom web applications, and mobile solutions. All work is delivered with fixed-price proposals and clear milestone-based payments.
          </p>
        </div>
      </section>

      {/* Commercial Commitments Strip */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl glass-2 border-white/10">
            <Tag className="w-5 h-5 text-[var(--gold)] mb-3" />
            <h4 className="font-headline text-base font-bold text-white mb-1">From $1,000</h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Accessible entry pricing for growing companies, MVPs, and targeted automation workflows.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-2 border-white/10">
            <ShieldCheck className="w-5 h-5 text-[var(--emerald)] mb-3" />
            <h4 className="font-headline text-base font-bold text-white mb-1">Fixed-Price Milestones</h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Scope and investment locked before code begins. You review staging builds before payment.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-2 border-white/10">
            <Building2 className="w-5 h-5 text-[#A78BFA] mb-3" />
            <h4 className="font-headline text-base font-bold text-white mb-1">Karachi &amp; Islamabad</h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Registered software engineering offices in Pakistan serving global enterprise clients.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-2 border-white/10">
            <Key className="w-5 h-5 text-[#38BDF8] mb-3" />
            <h4 className="font-headline text-base font-bold text-white mb-1">100% IP Ownership</h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Full repository transfer, documentation, and zero proprietary lock-in upon completion.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto space-y-6">
          <span className="font-mono-code text-xs uppercase text-[var(--gold)] tracking-widest font-bold block">
            01 // ARCHITECTURAL LEADERSHIP
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 rounded-3xl glass-2 holographic-edge p-7 sm:p-10 spatial-card shadow-2xl border-[var(--gold)]/35">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
                <div className="sm:col-span-5 flex flex-col items-center">
                  <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-[var(--gold)]/40 bg-[#0A0F1D] shrink-0">
                    <img
                      src={mujahid.image || '/Images/Founder and CEO SOFTWARE ENGINEER.jpeg'}
                      alt="Muhammad Mujahid, Founder and CEO of Axorks Technologies"
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
                  <p className="text-xs font-mono-code text-[var(--text-muted)]">
                    BS Software Engineering · Bahria University Alumnus
                  </p>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                    Muhammad leads systems architecture, multi-AI workflow development, and commercial proposals. Every client engagement is scoped and supervised directly by senior leadership, guaranteeing direct accountability from specification to production launch.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono-code text-slate-300">
                      System Architecture
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono-code text-slate-300">
                      AI Automations
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono-code text-slate-300">
                      Commercial Governance
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Operations Partner */}
            {farhana && (
              <div className="lg:col-span-4 rounded-3xl glass-2 holographic-edge p-6 sm:p-8 spatial-card flex flex-col justify-between border-white/10 hover:border-[var(--emerald)]/40 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--emerald)]/10 border border-[var(--emerald)]/30 flex items-center justify-center font-mono-code text-sm font-bold text-[var(--emerald)]">
                      FH
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[var(--emerald)]/15 text-[var(--emerald)] border border-[var(--emerald)]/30">
                      Co-Founder
                    </span>
                  </div>

                  <h3 className="font-headline text-lg font-bold text-white mb-1">
                    {farhana.name}
                  </h3>
                  <div className="text-xs font-mono-code text-[var(--emerald)] mb-3">
                    {farhana.role}
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal">
                    Oversees financial operations, milestone governance, human resources, and business administration. Ensures every engagement meets strict legal compliance and milestone delivery schedules.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--glass-border)] text-[11px] font-mono-code text-[var(--text-muted)]">
                  BBA · Operations Management
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Engineering Disciplines Directory (Intentional Placeholders) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Applied AI & Neural Systems */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono-code text-xs uppercase text-[#A78BFA] tracking-widest font-bold">
                02 // APPLIED AI &amp; NEURAL SYSTEMS
              </span>
              <div className="h-[1px] flex-1 bg-white/[0.08]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {yousaf && (
                <div className="p-6 rounded-2xl glass-2 border-white/10 hover:border-[var(--gold)]/40 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center font-mono-code text-xs font-bold text-[var(--gold)]">
                      YP
                    </div>
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono-code font-bold uppercase bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/30">
                      30 Years Experience
                    </span>
                  </div>
                  <h4 className="font-headline text-base font-bold text-white mb-1">{yousaf.name}</h4>
                  <div className="text-xs font-mono-code text-[var(--gold)] mb-3">{yousaf.role}</div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Over 30 years of experience in neural network architectures, deep learning models, and advanced AI systems. US-returned principal engineer advising on complex enterprise deployments.
                  </p>
                </div>
              )}

              {alina && (
                <div className="p-6 rounded-2xl glass-2 border-white/10 hover:border-[#F43F5E]/40 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center font-mono-code text-xs font-bold text-[#F43F5E]">
                      AL
                    </div>
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono-code font-bold uppercase bg-[#F43F5E]/15 text-[#F43F5E] border border-[#F43F5E]/30">
                      Applied AI
                    </span>
                  </div>
                  <h4 className="font-headline text-base font-bold text-white mb-1">{alina.name}</h4>
                  <div className="text-xs font-mono-code text-[#F43F5E] mb-3">{alina.role}</div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Specializes in autonomous multi-agent pipelines, vector search databases, semantic document intelligence, and enterprise API workflow automation.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Web, Mobile & Decentralized Systems */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono-code text-xs uppercase text-[#38BDF8] tracking-widest font-bold">
                03 // CORE APPLICATION &amp; MOBILE ENGINEERING
              </span>
              <div className="h-[1px] flex-1 bg-white/[0.08]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {shayan && (
                <div className="p-6 rounded-2xl glass-2 border-white/10 hover:border-[#38BDF8]/40 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center font-mono-code text-xs font-bold text-[#38BDF8] mb-4">
                    SH
                  </div>
                  <h4 className="font-headline text-base font-bold text-white mb-1">{shayan.name}</h4>
                  <div className="text-xs font-mono-code text-[#38BDF8] mb-3">{shayan.role}</div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Full-stack web developer building high-concurrency portals and interactive interfaces with modern React, TypeScript, Next.js, and Node.js.
                  </p>
                </div>
              )}

              {faisal && (
                <div className="p-6 rounded-2xl glass-2 border-white/10 hover:border-[#A78BFA]/40 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center font-mono-code text-xs font-bold text-[#A78BFA] mb-4">
                    FS
                  </div>
                  <h4 className="font-headline text-base font-bold text-white mb-1">{faisal.name}</h4>
                  <div className="text-xs font-mono-code text-[#A78BFA] mb-3">{faisal.role}</div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Flutter and mobile engineer specializing in cross-platform iOS and Android builds with offline-first local synchronization and biometric auth.
                  </p>
                </div>
              )}

              {aliHaider && (
                <div className="p-6 rounded-2xl glass-2 border-white/10 hover:border-[var(--emerald)]/40 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center font-mono-code text-xs font-bold text-[var(--emerald)] mb-4">
                    AH
                  </div>
                  <h4 className="font-headline text-base font-bold text-white mb-1">{aliHaider.name}</h4>
                  <div className="text-xs font-mono-code text-[var(--emerald)] mb-3">{aliHaider.role}</div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Web3 and blockchain developer with extensive focus on EVM smart contract architecture, decentralized protocols, and custody integrations.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Client Growth & Partnerships */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono-code text-xs uppercase text-[var(--gold)] tracking-widest font-bold">
                04 // CLIENT PARTNERSHIPS &amp; GROWTH
              </span>
              <div className="h-[1px] flex-1 bg-white/[0.08]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {furqan && (
                <div className="p-6 sm:p-7 rounded-2xl glass-2 border-white/10 hover:border-[var(--gold)]/40 transition-all flex flex-col sm:flex-row items-start gap-5">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-[var(--gold)]/40 shadow-md shrink-0 bg-[#111622]">
                    <img
                      src={furqan.image || '/Images/FURQAN Business Development Officer.jpeg'}
                      alt={`${furqan.name}, ${furqan.role}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-headline text-lg font-bold text-white mb-1">{furqan.name}</h4>
                    <div className="text-xs font-mono-code text-[var(--gold)] font-semibold mb-2">{furqan.role}</div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {furqan.description}
                    </p>
                  </div>
                </div>
              )}

              {farwa && (
                <div className="p-6 sm:p-7 rounded-2xl glass-2 border-white/10 hover:border-[#F43F5E]/40 transition-all flex flex-col sm:flex-row items-start gap-5">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-[#F43F5E]/40 shadow-md shrink-0 bg-[#111622]">
                    <img
                      src={farwa.image || '/Images/FARWA Marketing & Outreach.jpeg'}
                      alt={`${farwa.name}, ${farwa.role}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-headline text-lg font-bold text-white mb-1">{farwa.name}</h4>
                    <div className="text-xs font-mono-code text-[#F43F5E] font-semibold mb-2">{farwa.role}</div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {farwa.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center glass-2 holographic-edge rounded-3xl p-8 sm:p-12 border-[var(--gold)]/30">
          <h2 className="font-display-hero text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Collaborate Directly with Senior Engineers.
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Get an itemized Technical Specification Document and fixed-price proposal for your custom system.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="magnetic-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] text-xs font-headline font-bold uppercase tracking-wider glow-gold-jewel cursor-pointer shadow-lg"
            >
              <span>Book Free Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/923141030223"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-black/50 border border-[#10B981]/50 text-white text-xs font-headline font-semibold uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4 text-[#10B981]" />
              <span>WhatsApp: +92 314 103 0223</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
