import React from 'react';
import { CAREER_ROLES } from '../data/careerData';
import { useNavigate } from '../router/Router';
import { Shield, Clock, MapPin, CheckCircle2, ArrowRight, Mail } from 'lucide-react';

const ACCENT_STYLES: Record<string, {
  badgeBg: string;
  badgeBorder: string;
  badgeColor: string;
  dotColor: string;
}> = {
  gold: {
    badgeBg: 'rgba(245, 199, 97, 0.12)',
    badgeBorder: 'rgba(245, 199, 97, 0.35)',
    badgeColor: 'var(--gold)',
    dotColor: '#F5C761',
  },
  emerald: {
    badgeBg: 'rgba(16, 185, 129, 0.12)',
    badgeBorder: 'rgba(16, 185, 129, 0.35)',
    badgeColor: 'var(--emerald)',
    dotColor: '#10B981',
  },
  violet: {
    badgeBg: 'rgba(139, 92, 246, 0.12)',
    badgeBorder: 'rgba(139, 92, 246, 0.35)',
    badgeColor: 'var(--violet)',
    dotColor: '#8B5CF6',
  },
  cyan: {
    badgeBg: 'rgba(6, 182, 212, 0.12)',
    badgeBorder: 'rgba(6, 182, 212, 0.35)',
    badgeColor: 'var(--cyan)',
    dotColor: '#06B6D4',
  },
  wine: {
    badgeBg: 'rgba(190, 18, 60, 0.12)',
    badgeBorder: 'rgba(190, 18, 60, 0.35)',
    badgeColor: 'var(--wine)',
    dotColor: '#BE123C',
  },
};

export const CareersPage: React.FC = () => {
  const navigate = useNavigate();

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
            Selective Practice &amp; Engineering Roles.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            AXORKS Technologies maintains a disciplined studio culture centered on architectural rigor, direct client engagement, and high-impact deliverables. We selectively review senior practitioners with verified commercial experience.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-2 border border-[var(--glass-border)] text-xs font-mono-code text-[var(--text-muted)]">
            <Shield className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span>Direct submission to senior leadership:</span>
            <a
              href="mailto:careers@axorks.com?subject=Senior%20Engineering%20Role%20Inquiry%20%E2%80%94%20AXORKS%20Technologies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--gold)] font-bold hover:underline"
            >
              careers@axorks.com
            </a>
          </div>
        </div>
      </section>

      {/* 6 Career Role Cards */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 spatial-stage">
            {CAREER_ROLES.map((role) => {
              const style = ACCENT_STYLES[role.accent] || ACCENT_STYLES.gold;

              return (
                <div
                  key={role.id}
                  className="glass-2 holographic-edge rounded-3xl p-6 sm:p-7 spatial-card flex flex-col justify-between group"
                >
                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className="text-[10px] font-mono-code font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border"
                        style={{
                          backgroundColor: style.badgeBg,
                          borderColor: style.badgeBorder,
                          color: style.badgeColor,
                        }}
                      >
                        {role.department}
                      </span>

                      <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-[var(--gold)] font-bold">
                        <Clock className="w-3 h-3" />
                        <span>{role.experience}</span>
                      </div>
                    </div>

                    <h2 className="font-headline text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--gold)] transition-colors">
                      {role.title}
                    </h2>

                    <div className="flex items-center gap-1.5 text-xs font-mono-code text-[var(--text-muted)] mb-4">
                      <MapPin className="w-3.5 h-3.5 text-[var(--emerald)]" />
                      <span>{role.location}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-5 font-normal">
                      {role.overview}
                    </p>

                    {/* Requirements Checklist */}
                    <div className="space-y-2 mb-5">
                      <div className="text-[11px] font-mono-code uppercase text-[var(--text-muted)] font-semibold tracking-wider">
                        Commercial Qualifications:
                      </div>
                      {role.requirements.map((req, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--emerald)]" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Focus Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--glass-border)] mb-5">
                      {role.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono-code text-[var(--text-muted)] bg-white/[0.04] border border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Direct Action Link with Target _blank */}
                    <a
                      href={`mailto:careers@axorks.com?subject=Application:%20${encodeURIComponent(role.title)}%20—%20AXORKS%20Technologies`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl glass-2 border border-[var(--glass-border)] hover:border-[var(--gold)] text-xs font-headline font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      style={{ color: style.badgeColor }}
                    >
                      <span>Submit Credentials</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Intake Box on Refined Soft-Ivory Luxury Surface */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto surface-ivory rounded-3xl p-8 sm:p-12 spatial-card flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 text-[11px] font-mono-code text-[#0A0F1D] font-bold uppercase tracking-wider mb-2">
              <Shield className="w-3.5 h-3.5 text-[#B48310]" />
              <span>Senior Submission Protocol</span>
            </div>
            <h3 className="font-display-hero text-2xl font-extrabold text-[#0A0F1D]">
              Direct Partner Review
            </h3>
            <p className="text-xs sm:text-sm text-[#1E293B] mt-1 max-w-xl leading-relaxed">
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
