import React from 'react';
import { CAREER_ROLES } from '../data/careerData';
import { useNavigate } from '../router/Router';
import { Mail, ArrowRight, Check } from 'lucide-react';

export const CareersPage: React.FC = () => {
  const navigate = useNavigate();

  const flagshipRoles = CAREER_ROLES.slice(0, 2);
  const specializedRoles = CAREER_ROLES.slice(2);

  return (
    <div className="w-full pt-8 pb-20 lg:pb-28">
      {/* Header Banner */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[var(--gold)] mb-4">
            <button onClick={() => navigate('/')} className="hover:underline cursor-pointer">Home</button>
            <span>/</span>
            <span>Selective Practice</span>
          </div>

          <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Selective Engineering Practice.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed font-normal">
            AXORKS maintains an intentionally selective engineering studio in Karachi and Islamabad. We work on high-concurrency platforms, AI workflows, and mission-critical software. We seek seasoned builders who own architecture from first principles.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-full glass-2 border border-[var(--emerald)]/40 text-[var(--emerald)] font-mono-code text-xs font-semibold">
              <span>Direct Architecture Impact</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full glass-2 border border-[var(--gold)]/40 text-[var(--gold)] font-mono-code text-xs font-semibold">
              <span>Karachi • Islamabad • Hybrid</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 1: FLAGSHIP CORE ROLES (Asymmetric 2-Column Spread) ─── */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto space-y-6">
          <span className="font-mono-code text-xs uppercase text-[var(--gold)] tracking-widest font-bold block">
            01 // PRIMARY TECHNICAL ARCHITECTURE OPENINGS
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {flagshipRoles.map((role) => (
              <div
                key={role.id}
                className="glass-2 holographic-edge rounded-3xl p-8 sm:p-10 spatial-card flex flex-col justify-between border-[var(--gold)]/30 hover:border-[var(--gold)]/60 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/30">
                      {role.department}
                    </span>
                    <span className="text-xs font-mono-code text-[var(--gold)] font-bold">
                      {role.experience}
                    </span>
                  </div>

                  <h2 className="font-display-hero text-2xl sm:text-3xl font-bold text-white mb-2">
                    {role.title}
                  </h2>

                  <div className="text-xs font-mono-code text-[var(--emerald)] mb-4">
                    {role.location}
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                    {role.overview}
                  </p>

                  <div className="space-y-2.5 mb-6 pt-4 border-t border-[var(--glass-border)]">
                    <div className="text-[11px] font-mono-code uppercase text-white font-bold tracking-wider mb-2">
                      Commercial Prerequisites:
                    </div>
                    {role.requirements.map((req, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                        <Check className="w-4 h-4 mt-0.5 shrink-0 text-[var(--gold)]" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--glass-border)] mb-6">
                    {role.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono-code text-[var(--text-muted)] bg-white/[0.04] border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`mailto:careers@axorks.com?subject=Application:%20${encodeURIComponent(role.title)}%20—%20AXORKS%20Technologies`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl glass-2 border border-[var(--gold)]/40 hover:border-[var(--gold)] text-xs font-headline font-bold uppercase tracking-wider text-white hover:text-[var(--gold)] flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Submit Credentials For {role.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: SPECIALIZED ROLES (Varied 4-Column Grid) ─── */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <span className="font-mono-code text-xs uppercase text-[#A78BFA] tracking-widest font-bold block">
            02 // SPECIALIZED DISCIPLINES &amp; COMMERCIAL PRACTICE
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedRoles.map((role) => (
              <div
                key={role.id}
                className="glass-2 holographic-edge rounded-3xl p-6 sm:p-7 spatial-card flex flex-col justify-between border-white/10 hover:border-white/25 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.06] text-white/80 border border-white/[0.08]">
                      {role.department}
                    </span>
                    <span className="text-[11px] font-mono-code text-[var(--text-muted)]">
                      {role.experience}
                    </span>
                  </div>

                  <h3 className="font-headline text-lg font-bold text-white mb-1">
                    {role.title}
                  </h3>

                  <div className="text-[11px] font-mono-code text-[var(--emerald)] mb-3">
                    {role.location}
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4 font-normal">
                    {role.overview}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-[var(--glass-border)] mb-4">
                    {role.requirements.slice(0, 3).map((req, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-[11px] text-[var(--text-secondary)]">
                        <Check className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--emerald)]" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 pt-3 border-t border-[var(--glass-border)] mb-4">
                    {role.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[9px] font-mono-code text-[var(--text-muted)] bg-white/[0.03] border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`mailto:careers@axorks.com?subject=Application:%20${encodeURIComponent(role.title)}%20—%20AXORKS%20Technologies`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl glass-2 border border-[var(--glass-border)] hover:border-[var(--gold)] text-xs font-headline font-bold uppercase tracking-wider text-white hover:text-[var(--gold)] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Submit</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Intake Box on Refined Soft-Ivory Luxury Surface */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto surface-ivory rounded-3xl p-8 sm:p-12 spatial-card flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[11px] font-mono-code text-[#0A0F1D] font-bold uppercase tracking-wider block mb-2">
              // SENIOR CREDENTIALS SUBMISSION PROTOCOL
            </span>
            <h3 className="font-display-hero text-2xl font-extrabold text-[#0A0F1D]">
              Direct Partner Review
            </h3>
            <p className="text-xs sm:text-sm text-[#1E293B] mt-1 max-w-xl leading-relaxed font-normal">
              Include your CV, production GitHub repositories, or live system architecture diagrams. Every qualifying senior submission receives a response directly from engineering leadership.
            </p>
          </div>

          <a
            href="mailto:careers@axorks.com?subject=Senior%20Practice%20Submission%20%E2%80%94%20AXORKS%20Technologies"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#0F172A] text-white text-xs font-headline font-bold uppercase tracking-wider hover:bg-[#1E293B] transition-all shadow-lg cursor-pointer"
          >
            <Mail className="w-4 h-4 text-[#F5C761]" />
            <span>careers@axorks.com</span>
          </a>
        </div>
      </section>
    </div>
  );
};
