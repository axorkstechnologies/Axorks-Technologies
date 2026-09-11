import React from 'react';
import { PROCESS_STEPS } from '../data/mockData';
import { Search, FileText, Code, Rocket, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string; style?: React.CSSProperties }>> = {
  Search, FileText, Code, Rocket,
};

const STEP_ACCENTS = [
  { color: '#F5C761', glow: 'rgba(245, 199, 97, 0.3)', badge: 'STEP 01' },
  { color: '#10B981', glow: 'rgba(16, 185, 129, 0.3)', badge: 'STEP 02' },
  { color: '#8B5CF6', glow: 'rgba(139, 92, 246, 0.3)', badge: 'STEP 03' },
  { color: '#BE123C', glow: 'rgba(190, 18, 60, 0.3)', badge: 'STEP 04' },
];

export const Process: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative" id="process">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header — Simple & Clear */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-2 border-[#8B5CF6]/30 text-xs uppercase text-[#A78BFA] tracking-widest font-semibold font-mono-code mb-3.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Milestone-Based Process</span>
          </div>

          <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[48px] text-[var(--text-primary)] font-extrabold tracking-tight">
            How Every Project Gets Delivered.
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed font-normal">
            Four straightforward steps from initial conversation to production launch. You review and approve functioning builds on staging before milestone payments are released.
          </p>
        </div>

        {/* 4 Process Step Cards */}
        <div className="relative spatial-stage">
          {/* Connector Rail */}
          <div className="hidden lg:block absolute top-[56px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#F5C761] via-[#10B981] via-60% to-[#8B5CF6] opacity-30 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, i) => {
              const IconComponent = ICON_MAP[step.icon] || Search;
              const accent = STEP_ACCENTS[i];

              return (
                <div
                  key={step.step}
                  className="glass-2 holographic-edge rounded-3xl p-7 flex flex-col justify-between spatial-card relative overflow-hidden"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center relative shadow-lg"
                        style={{
                          backgroundColor: `${accent.color}15`,
                          border: `1px solid ${accent.color}40`,
                          boxShadow: `0 0 20px ${accent.glow}`,
                        }}
                      >
                        <IconComponent className="w-5 h-5" style={{ color: accent.color }} />
                        <span
                          className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono-code font-bold text-[#030712]"
                          style={{ backgroundColor: accent.color }}
                        >
                          {step.step}
                        </span>
                      </div>

                      <span className="text-[10px] font-mono-code uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-white/[0.04] text-[var(--text-muted)]">
                        {accent.badge}
                      </span>
                    </div>

                    <h3 className="font-headline text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-2.5">
                      {step.title}
                    </h3>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  <div
                    className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono-code"
                    style={{ color: accent.color }}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>
                      {i === 0 && 'Zero Obligation'}
                      {i === 1 && 'Fixed-Price Guarantee'}
                      {i === 2 && 'Weekly Staging Reviews'}
                      {i === 3 && '100% IP Handover'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Trigger */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-wider text-[var(--gold)] hover:underline cursor-pointer group"
          >
            <span>Ready to start with Step 1? Schedule a free discovery call</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
