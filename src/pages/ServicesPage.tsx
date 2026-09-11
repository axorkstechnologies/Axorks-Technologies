import React, { useState } from 'react';
import { SERVICES } from '../data/mockData';
import { useNavigate } from '../router/Router';
import { Globe, Brain, Smartphone, Blocks, Shield, Rocket, Check, ArrowRight, Tag } from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string; style?: React.CSSProperties }>> = {
  Globe, Brain, Smartphone, Blocks, Shield, Rocket,
};

const ACCENT_SYSTEM: Record<string, {
  color: string;
  glowClass: string;
  bgLight: string;
  borderHover: string;
}> = {
  gold: {
    color: 'var(--gold)',
    glowClass: 'glow-gold-jewel',
    bgLight: 'rgba(245, 199, 97, 0.12)',
    borderHover: 'rgba(245, 199, 97, 0.45)',
  },
  emerald: {
    color: 'var(--emerald)',
    glowClass: 'glow-emerald-jewel',
    bgLight: 'rgba(16, 185, 129, 0.12)',
    borderHover: 'rgba(16, 185, 129, 0.45)',
  },
  violet: {
    color: 'var(--violet)',
    glowClass: 'glow-violet-jewel',
    bgLight: 'rgba(139, 92, 246, 0.12)',
    borderHover: 'rgba(139, 92, 246, 0.45)',
  },
  cyan: {
    color: 'var(--cyan)',
    glowClass: 'glow-cyan-jewel',
    bgLight: 'rgba(6, 182, 212, 0.12)',
    borderHover: 'rgba(6, 182, 212, 0.45)',
  },
  wine: {
    color: 'var(--wine)',
    glowClass: 'glow-wine-jewel',
    bgLight: 'rgba(190, 18, 60, 0.12)',
    borderHover: 'rgba(190, 18, 60, 0.45)',
  },
  burgundy: {
    color: 'var(--wine)',
    glowClass: 'glow-wine-jewel',
    bgLight: 'rgba(225, 29, 72, 0.12)',
    borderHover: 'rgba(225, 29, 72, 0.45)',
  },
};

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            Direct access to experienced software architects and engineers. Fixed-price milestone delivery from $1,000 with 100% intellectual property transfer upon project handover.
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

      {/* Full 6 Services Grid */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 spatial-stage">
            {SERVICES.map((service) => {
              const accent = ACCENT_SYSTEM[service.accent] || ACCENT_SYSTEM.gold;
              const IconComponent = ICON_MAP[service.icon] || Globe;
              const isHovered = hoveredCard === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative glass-2 holographic-edge rounded-3xl p-7 sm:p-8 spatial-card flex flex-col justify-between transition-all duration-400 ${
                    isHovered ? accent.glowClass : ''
                  }`}
                  style={{
                    borderColor: isHovered ? accent.borderHover : 'var(--glass-border)',
                  }}
                >
                  <div>
                    {/* Icon + Number Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-13 h-13 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-md"
                        style={{
                          backgroundColor: accent.bgLight,
                          border: `1px solid ${accent.borderHover}`,
                        }}
                      >
                        <IconComponent className="w-6 h-6" style={{ color: accent.color }} />
                      </div>

                      <span className="font-mono-code text-xs text-[var(--text-muted)] font-semibold tracking-wider">
                        // 0{SERVICES.indexOf(service) + 1}
                      </span>
                    </div>

                    <h2 className="font-headline text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--gold)] transition-colors">
                      {service.title}
                    </h2>

                    <p className="text-sm font-semibold mb-3" style={{ color: accent.color }}>
                      {service.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] font-mono-code uppercase text-[var(--text-muted)] font-bold tracking-wider mb-2">
                        Deliverables:
                      </div>
                      {service.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: accent.color }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--glass-border)] mb-6">
                      {service.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono-code text-[var(--text-muted)] bg-white/[0.04] border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => navigate('/contact')}
                      className="w-full py-3 rounded-xl glass-2 border border-[var(--glass-border)] hover:border-[var(--gold)] text-xs font-headline font-bold uppercase tracking-wider text-[var(--text-primary)] hover:text-[var(--gold)] transition-all cursor-pointer flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Request Scope For This Service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
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
              Have a multi-disciplinary technical requirement?
            </h3>
            <p className="text-sm text-[#1E293B] mt-1">
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
