import React from 'react';
import { PROCESS_STEPS } from '../data/mockData';
import { useNavigate } from '../router/Router';
import { Search, FileText, Code, Rocket, CheckCircle2, ShieldCheck, ArrowRight, Lock, Eye, Award } from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string; style?: React.CSSProperties }>> = {
  Search, FileText, Code, Rocket,
};

const STEP_COLORS = [
  { color: '#B48310', bg: 'rgba(245, 199, 97, 0.15)', badge: 'STEP 01', guarantee: 'Zero Obligation' },
  { color: '#058A5E', bg: 'rgba(16, 185, 129, 0.15)', badge: 'STEP 02', guarantee: 'Fixed-Price Guarantee' },
  { color: '#6D28D9', bg: 'rgba(139, 92, 246, 0.15)', badge: 'STEP 03', guarantee: 'Weekly Staging Reviews' },
  { color: '#BE123C', bg: 'rgba(190, 18, 60, 0.15)', badge: 'STEP 04', guarantee: '100% IP Handover' },
];

export const ProcessPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full pt-8 pb-20 lg:pb-28">
      {/* Header Banner */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#A78BFA] mb-4">
            <button onClick={() => navigate('/')} className="hover:underline cursor-pointer">Home</button>
            <span>/</span>
            <span>Execution Process</span>
          </div>

          <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
            How Every Project Gets Delivered.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            Four disciplined milestones from initial conversation to production launch. You review and verify functioning builds on staging before milestone payments are released. Zero hourly lock-in.
          </p>
        </div>
      </section>

      {/* 4 Process Step Cards on Refined Soft-Ivory Luxury Surfaces (Breathing Room + High Contrast) */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Note: Unwanted horizontal connector line completely removed for clean, deliberate presentation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {PROCESS_STEPS.map((step, i) => {
              const IconComponent = ICON_MAP[step.icon] || Search;
              const accent = STEP_COLORS[i];

              return (
                <div
                  key={step.step}
                  className="surface-ivory rounded-3xl p-7 sm:p-8 flex flex-col justify-between spatial-card relative"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-13 h-13 rounded-2xl flex items-center justify-center relative shadow-md"
                        style={{
                          backgroundColor: accent.bg,
                          border: `1px solid ${accent.color}50`,
                        }}
                      >
                        <IconComponent className="w-6 h-6" style={{ color: accent.color }} />
                        <span
                          className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono-code font-bold text-white shadow-sm"
                          style={{ backgroundColor: accent.color }}
                        >
                          {step.step}
                        </span>
                      </div>

                      <span
                        className="text-[10px] font-mono-code uppercase font-bold tracking-wider px-2.5 py-1 rounded-md text-[#0A0F1D] bg-black/[0.06] border border-black/[0.08]"
                      >
                        {accent.badge}
                      </span>
                    </div>

                    <h2 className="font-headline text-xl font-bold text-[#0A0F1D] mb-3 leading-snug">
                      {step.title}
                    </h2>

                    <p className="text-sm text-[#1E293B] leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[rgba(214,207,195,0.7)] flex items-center gap-2 text-xs font-mono-code font-bold" style={{ color: accent.color }}>
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{accent.guarantee}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestone Governance Pillars */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="glass-2 holographic-edge rounded-3xl p-8 sm:p-12 spatial-card">
            <h2 className="font-display-hero text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-8 text-center sm:text-left">
              The Three Pillars of Milestone Delivery
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--gold)]/15 border border-[var(--gold)]/35 flex items-center justify-center text-[var(--gold)]">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-headline text-lg font-bold text-[var(--text-primary)]">
                  1. Fixed Scope &amp; Budget Lock
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  Before a single line of production code is written, we deliver an itemized technical scope with guaranteed pricing. If an architectural feature requires more effort on our end, the cost is on us.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--emerald)]/15 border border-[var(--emerald)]/35 flex items-center justify-center text-[var(--emerald)]">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-headline text-lg font-bold text-[var(--text-primary)]">
                  2. Staging Inspection Before Release
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  Every sprint concludes with a deployed staging environment where you can click, test, and verify completed features on real devices before signing off and releasing the milestone invoice.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--violet)]/15 border border-[var(--violet)]/35 flex items-center justify-center text-[var(--violet)]">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-headline text-lg font-bold text-[var(--text-primary)]">
                  3. Full IP &amp; Code Repository Transfer
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  You own 100% of your source code, configuration files, environment variables, smart contracts, and architecture diagrams. We hand over repository admin rights cleanly upon final milestone sign-off.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Strip */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto surface-ivory rounded-3xl p-8 sm:p-12 spatial-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display-hero text-2xl sm:text-3xl font-extrabold text-[#0A0F1D]">
              Ready to start Step 1 with zero financial commitment?
            </h3>
            <p className="text-sm text-[#1E293B] mt-1">
              Receive a detailed milestone breakdown and fixed quote within 24 hours.
            </p>
          </div>

          <button
            onClick={() => navigate('/contact')}
            className="shrink-0 px-8 py-4 rounded-xl bg-[#0F172A] text-white text-xs font-headline font-bold uppercase tracking-wider hover:bg-[#1E293B] transition-all cursor-pointer shadow-lg flex items-center gap-2"
          >
            <span>Request Fixed Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
