import React from 'react';
import { PROJECTS } from '../data/mockData';
import { ArrowRight, Activity, CheckCircle2 } from 'lucide-react';
import { ProjectCarousel } from './ProjectCarousel';

const ACCENT_COLORS: Record<string, {
  color: string;
  glow: string;
  badgeBg: string;
}> = {
  emerald: {
    color: 'var(--emerald)',
    glow: 'rgba(16, 185, 129, 0.25)',
    badgeBg: 'rgba(16, 185, 129, 0.15)',
  },
  gold: {
    color: 'var(--gold)',
    glow: 'rgba(245, 199, 97, 0.25)',
    badgeBg: 'rgba(245, 199, 97, 0.15)',
  },
  violet: {
    color: 'var(--violet)',
    glow: 'rgba(139, 92, 246, 0.25)',
    badgeBg: 'rgba(139, 92, 246, 0.15)',
  },
  wine: {
    color: 'var(--wine)',
    glow: 'rgba(190, 18, 60, 0.25)',
    badgeBg: 'rgba(190, 18, 60, 0.15)',
  },
};

const SYSTEM_URLS: Record<string, string> = {
  agrotrace: 'agrotrace.live.system',
  'ipmi-os': 'ipmios.execution.engine',
  mediverse: 'mediverse.global.network',
  fume: 'fumefragrances.boutique',
};

export const Projects: React.FC = () => {

  return (
    <section className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative bg-[var(--bg-secondary)]/40 border-y border-[var(--glass-border)]" id="work">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header: Proof Through Work */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-2 border-[var(--emerald)]/30 text-xs uppercase text-[var(--emerald)] tracking-widest font-semibold font-mono-code mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>Proof Through Work</span>
            </div>
            <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[48px] text-[var(--text-primary)] font-extrabold tracking-tight">
              Platforms We Have Designed, Built &amp; Deployed.
            </h2>
          </div>

          <div className="font-mono-code text-xs text-[var(--text-muted)] flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
            <span>Real Production Systems • Verified In Staging &amp; Live Deployment</span>
          </div>
        </div>

        {/* 4 Case Study Cards */}
        <div className="space-y-16 lg:space-y-24 spatial-stage">
          {PROJECTS.map((project, index) => {
            const accent = ACCENT_COLORS[project.accent] || ACCENT_COLORS.gold;
            const isReversed = index % 2 === 1;
            const systemUrl = SYSTEM_URLS[project.id] || `${project.id}.axorks.cloud`;

            return (
              <div
                key={project.id}
                className="glass-2 holographic-edge rounded-3xl overflow-hidden isolate spatial-card shadow-[0_24px_64px_rgba(0,0,0,0.7)]"
                style={{ clipPath: 'inset(0 round 1.5rem)' }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 w-full overflow-hidden">
                  {/* Media Viewport (7 Cols) - Smooth ProjectCarousel with Zero Expand Button */}
                  <div className={`min-w-0 lg:col-span-7 p-4 sm:p-6 bg-[var(--bg-card)]/40 overflow-hidden flex flex-col justify-center ${
                    isReversed ? 'lg:order-last' : 'lg:order-first'
                  }`}>
                    <ProjectCarousel
                      images={project.images}
                      projectTitle={project.title}
                      systemUrl={systemUrl}
                      badgeText={project.statusBadge}
                      accentColor={accent.color}
                      aspectRatioClass="aspect-[16/10] sm:aspect-[16/9.5]"
                    />
                  </div>

                  {/* Case Study Details & Measurable Metrics (5 Cols) */}
                  <div className="min-w-0 lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
                          DELIVERED PLATFORM 0{index + 1}
                        </span>
                        <CheckCircle2 className="w-4 h-4" style={{ color: accent.color }} />
                      </div>

                      <h3
                        className="font-display-hero text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
                        style={{ color: accent.color }}
                      >
                        {project.title}
                      </h3>

                      <p className="mt-1 text-sm font-headline font-semibold text-[var(--text-primary)]">
                        {project.tagline}
                      </p>

                      <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* Real Verified Metrics */}
                      <div
                        className="mt-6 grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[var(--bg-primary)]/80 border border-[var(--glass-border)]"
                      >
                        {project.metrics.map((metric, mIdx) => (
                          <div key={mIdx}>
                            <div
                              className="font-display-hero text-2xl sm:text-3xl font-extrabold tracking-tight"
                              style={{ color: mIdx === 0 ? accent.color : 'var(--text-primary)' }}
                            >
                              {metric.value}
                            </div>
                            <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider font-mono-code mt-0.5">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags & Action Link */}
                    <div className="mt-8 pt-6 border-t border-[var(--glass-border)]">
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-[var(--bg-tertiary)]/70 border border-[var(--glass-border)] text-[var(--text-secondary)] font-mono-code text-[10px] uppercase tracking-wider font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono-code text-[var(--gold)] font-medium">
                          Live in Production
                        </span>

                        <a
                          href="#contact"
                          className="inline-flex items-center gap-1.5 text-xs font-headline font-bold uppercase tracking-wider group cursor-pointer"
                          style={{ color: accent.color }}
                        >
                          <span>Build a Similar Platform</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
