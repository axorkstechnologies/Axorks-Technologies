import React from 'react';
import { motion } from 'motion/react';
import { TEAM_MEMBERS } from '../data/mockData';
import { User, Users, ShieldCheck, Mail, MessageSquare, Linkedin, CheckCircle2 } from 'lucide-react';

const ACCENT_COLORS: Record<string, { color: string; border: string; bg: string }> = {
  gold: { color: '#F5C761', border: 'border-[#F5C761]/35', bg: 'rgba(245, 199, 97, 0.12)' },
  emerald: { color: '#10B981', border: 'border-[#10B981]/35', bg: 'rgba(16, 185, 129, 0.12)' },
  violet: { color: '#8B5CF6', border: 'border-[#8B5CF6]/35', bg: 'rgba(139, 92, 246, 0.12)' },
  cyan: { color: '#06B6D4', border: 'border-[#06B6D4]/35', bg: 'rgba(6, 182, 212, 0.12)' },
  wine: { color: '#BE123C', border: 'border-[#BE123C]/35', bg: 'rgba(190, 18, 60, 0.12)' },
};

export const Team: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative" id="team">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-2 border-[#10B981]/30 text-xs uppercase text-[#10B981] tracking-widest font-semibold font-mono-code mb-4 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <Users className="w-3.5 h-3.5" />
            <span>Direct Builder Access</span>
          </div>

          <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[52px] text-[var(--text-primary)] font-extrabold tracking-tight">
            The Senior Engineers &amp;{' '}
            <span className="bg-gradient-to-r from-[#F5C761] via-[#10B981] to-[#8B5CF6] bg-clip-text text-transparent">
              Leadership Team.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed font-normal">
            Direct access to the people who actually architect your code and ship your product. No middle managers or outsourced junior contractors.
          </p>
        </motion.div>

        {/* ─── Founder & CEO Spotlight Card ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-14 rounded-3xl glass-2 holographic-edge p-6 sm:p-8 lg:p-10 spatial-card shadow-[0_24px_70px_rgba(0,0,0,0.85)] max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Founder Portrait */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-2xl border-2 border-[#F5C761]/40 bg-[#050A14] glow-gold-jewel group">
                <img
                  src="/Images/Founder and CEO SOFTWARE ENGINEER.jpeg"
                  alt="Muhammad Mujahid — Founder & CEO / Chief Systems Architect at AXORKS Technologies"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 text-[#6EE7B7] text-[11px] font-mono-code font-semibold shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Active Systems Architect</span>
              </div>
            </div>

            {/* Founder Bio */}
            <div className="md:col-span-8 space-y-3.5 text-left">
              <div className="text-xs uppercase text-[#F5C761] font-bold tracking-widest font-mono-code">
                FOUNDER &amp; CHIEF SYSTEMS ARCHITECT / CEO
              </div>

              <h3 className="font-display-hero text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
                Muhammad Mujahid
              </h3>

              <div className="text-xs font-mono-code text-[#6EE7B7]">
                BS Software Engineering • Bahria University
              </div>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-normal">
                Oversees all system architecture, development, marketing, sales, and accounts at AXORKS Technologies. Actively writing and reviewing code in Web3, distributed systems, and multi-AI architectures.
              </p>

              <p className="text-xs sm:text-sm text-[var(--text-muted)] italic leading-relaxed border-l-2 border-[#F5C761]/50 pl-3">
                &ldquo;Every client at AXORKS gets direct architectural oversight. We treat your software investment with the same technical rigor as our own proprietary products.&rdquo;
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:contact@axorks.com"
                  className="px-4 py-2 rounded-xl glass-2 hover:border-[#F5C761]/50 text-xs font-mono-code text-[var(--text-primary)] flex items-center gap-2 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#F5C761]" />
                  <span>contact@axorks.com</span>
                </a>

                <a
                  href="https://wa.me/923141030223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl glass-2 hover:border-[#10B981]/50 text-xs font-mono-code text-[var(--text-primary)] flex items-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>+92 314 103 0223</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── Full 8 Team Members Grid ──────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 spatial-stage">
          {TEAM_MEMBERS.map((member, i) => {
            const accent = ACCENT_COLORS[member.accent] || ACCENT_COLORS.gold;

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group glass-2 holographic-edge rounded-3xl overflow-hidden spatial-card flex flex-col justify-between"
              >
                {/* Portrait / Luxury Silhouette Placeholder */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#050B18]">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={`${member.name} — ${member.role} at AXORKS`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center p-6"
                      style={{
                        background: `radial-gradient(circle at 50% 40%, ${accent.color}20 0%, #030712 85%)`,
                      }}
                    >
                      <div
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center border transition-transform duration-500 group-hover:scale-110 shadow-lg"
                        style={{
                          borderColor: `${accent.color}50`,
                          backgroundColor: `${accent.color}15`,
                        }}
                      >
                        <User className="w-10 h-10 sm:w-12 sm:h-12 opacity-50" style={{ color: accent.color }} />
                      </div>
                    </div>
                  )}

                  {/* Dark Glass Lower Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent pointer-events-none" />

                  {/* Role Floating Badge */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <span
                      className="text-[10px] font-mono-code font-bold uppercase tracking-wider px-2 py-0.5 rounded-md backdrop-blur-xl border inline-block max-w-full truncate"
                      style={{
                        backgroundColor: accent.bg,
                        color: accent.color,
                        borderColor: `${accent.color}40`,
                      }}
                    >
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-4 sm:p-5 pt-3 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="font-headline text-base sm:text-lg font-bold text-[var(--text-primary)] leading-snug">
                      {member.name}
                    </h4>

                    <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                      {member.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono-code text-[var(--text-muted)]">
                    <span>Direct Access</span>
                    <span style={{ color: accent.color }}>Verified Builder</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
