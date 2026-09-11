import React from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { useNavigate } from '../router/Router';
import { Mail, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';

const ACCENT_COLORS: Record<string, { color: string; border: string; bg: string }> = {
  gold: { color: 'var(--gold)', border: 'border-[var(--gold)]/35', bg: 'rgba(245, 199, 97, 0.12)' },
  emerald: { color: 'var(--emerald)', border: 'border-[var(--emerald)]/35', bg: 'rgba(16, 185, 129, 0.12)' },
  violet: { color: 'var(--violet)', border: 'border-[var(--violet)]/35', bg: 'rgba(139, 92, 246, 0.12)' },
  cyan: { color: 'var(--cyan)', border: 'border-[var(--cyan)]/35', bg: 'rgba(6, 182, 212, 0.12)' },
  wine: { color: 'var(--wine)', border: 'border-[var(--wine)]/35', bg: 'rgba(190, 18, 60, 0.12)' },
};

export const TeamPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full pt-8 pb-20 lg:pb-28">
      {/* Header Banner */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[var(--emerald)] mb-4">
            <button onClick={() => navigate('/')} className="hover:underline cursor-pointer">Home</button>
            <span>/</span>
            <span>Engineering Team</span>
          </div>

          <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
            The People Who Actually Build Your Product.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            No junior offshore handoffs or non-technical account managers. You collaborate directly with senior software architects and engineers with verified commercial track records from day one.
          </p>
        </div>
      </section>

      {/* Founder & CEO Spotlight Card */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-5xl mx-auto rounded-3xl glass-2 holographic-edge p-6 sm:p-8 lg:p-10 spatial-card shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Founder Photo */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden shadow-2xl border-2 border-[var(--gold)]/40 bg-[var(--bg-tertiary)] group">
                <img
                  src="/Images/Founder and CEO SOFTWARE ENGINEER.jpeg"
                  alt="Muhammad Mujahid — Founder & CEO at AXORKS Technologies"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="mt-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-2 text-[var(--emerald)] text-[11px] font-mono-code font-semibold border border-[var(--glass-border)]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--emerald)]" />
                <span>Hands-on Code &amp; Architecture</span>
              </div>
            </div>

            {/* Leadership Profile */}
            <div className="md:col-span-8 space-y-3 text-left">
              <div className="text-xs uppercase text-[var(--gold)] font-bold tracking-widest font-mono-code">
                FOUNDER &amp; CEO / CHIEF SYSTEMS ARCHITECT
              </div>

              <h2 className="font-display-hero text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                Muhammad Mujahid
              </h2>

              <div className="text-xs font-mono-code text-[var(--emerald)] font-medium">
                BS Software Engineering • Bahria University
              </div>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-normal">
                Oversees software architecture, technical design reviews, marketing, sales, and accounts across AXORKS Technologies. Actively involved in system design, Web3 integrations, and high-concurrency scalability on every client engagement.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:contact@axorks.com?subject=Technical%20Inquiry%20%E2%80%94%20AXORKS%20Technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl glass-2 hover:border-[var(--gold)] text-xs font-mono-code text-[var(--text-primary)] flex items-center gap-2 transition-colors border border-[var(--glass-border)]"
                >
                  <Mail className="w-3.5 h-3.5 text-[var(--gold)]" />
                  <span>contact@axorks.com</span>
                </a>

                <a
                  href="https://wa.me/923141030223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl glass-2 hover:border-[var(--emerald)] text-xs font-mono-code text-[var(--text-primary)] flex items-center gap-2 transition-colors border border-[var(--glass-border)]"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[var(--emerald)]" />
                  <span>+92 314 103 0223</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete 10 Team Members Roster Grid */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-headline text-xl font-bold text-[var(--text-primary)]">
              Complete Studio Roster &amp; Specialists
            </h2>
            <span className="text-xs font-mono-code text-[var(--text-muted)]">
              10 Verified Builders
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 spatial-stage">
            {TEAM_MEMBERS.map((member) => {
              const accent = ACCENT_COLORS[member.accent] || ACCENT_COLORS.gold;
              const department =
                member.id === 'mujahid' || member.id === 'farhana'
                  ? 'Leadership'
                  : member.id === 'farwa'
                  ? 'Marketing'
                  : member.id === 'furqan'
                  ? 'Business Dev'
                  : 'Engineering';

              return (
                <div
                  key={member.id}
                  className="group glass-2 holographic-edge rounded-3xl overflow-hidden spatial-card flex flex-col justify-between"
                >
                  {/* Photo / Monogram Silhouette */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--bg-tertiary)]">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={`${member.name} — ${member.role} at AXORKS`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center p-6"
                        style={{
                          background: `radial-gradient(circle at 50% 40%, ${accent.color}20 0%, var(--bg-tertiary) 85%)`,
                        }}
                      >
                        <div
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 shadow-md backdrop-blur-sm"
                          style={{
                            borderColor: accent.color,
                            backgroundColor: accent.bg,
                          }}
                        >
                          <span
                            className="text-xl sm:text-2xl font-display-hero font-bold select-none"
                            style={{ color: accent.color }}
                          >
                            {member.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Role Badge */}
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <span
                        className="text-[10px] font-mono-code font-bold uppercase tracking-wider px-2 py-0.5 rounded-md backdrop-blur-xl border inline-block max-w-full truncate"
                        style={{
                          backgroundColor: accent.bg,
                          color: accent.color,
                          borderColor: accent.color,
                        }}
                      >
                        {member.role}
                      </span>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="p-4 sm:p-5 pt-3 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-headline text-base font-bold text-[var(--text-primary)] leading-snug">
                        {member.name}
                      </h3>

                      <p className="mt-1.5 text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                        {member.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[var(--glass-border)] flex items-center justify-between text-[11px] font-mono-code text-[var(--text-muted)]">
                      <span>Direct Access</span>
                      <span style={{ color: accent.color }} className="font-semibold">{department}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Strip */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto surface-ivory rounded-3xl p-8 sm:p-12 spatial-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display-hero text-2xl sm:text-3xl font-extrabold text-[#0A0F1D]">
              Want to consult directly with our senior engineers?
            </h3>
            <p className="text-sm text-[#1E293B] mt-1">
              Discuss architecture, technical feasibilities, and milestones with zero pressure.
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
