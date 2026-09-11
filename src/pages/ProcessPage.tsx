import React from 'react';
import { useNavigate } from '../router/Router';
import { ArrowRight, Check } from 'lucide-react';

export const ProcessPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full pt-8 pb-20 lg:pb-28">
      {/* Header Banner */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[var(--gold)] mb-4">
            <button onClick={() => navigate('/')} className="hover:underline cursor-pointer">Home</button>
            <span>/</span>
            <span>Execution Process</span>
          </div>

          <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
            How Every Project Gets Delivered.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed font-normal">
            A disciplined four-phase milestone blueprint. You inspect and approve working builds on staging before milestone invoices are paid. Zero hourly ambiguity.
          </p>
        </div>
      </section>

      {/* Architectural Execution Blueprint: Varied Rhythm on Refined Soft-Ivory Surfaces */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">

          {/* ─── PHASE 01: DISCOVERY & ARCHITECTURE SCOPING (Dominant Master Stage) ─── */}
          <div className="surface-ivory rounded-3xl p-8 sm:p-12 spatial-card border border-[rgba(214,207,195,0.85)] shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md text-[11px] font-mono-code font-bold uppercase tracking-wider bg-[#0F172A] text-white">
                    PHASE 01 // INTAKE &amp; ARCHITECTURE
                  </span>
                  <span className="text-xs font-mono-code text-[#B48310] font-bold">
                    Zero Financial Obligation
                  </span>
                </div>

                <h2 className="font-display-hero text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A0F1D] leading-tight">
                  Discovery &amp; Technical Feasibility Scoping
                </h2>

                <p className="text-sm sm:text-base text-[#1E293B] leading-relaxed font-normal">
                  Before any commercial commitment or code execution, we conduct a technical discovery session to analyze your software requirements, database topology, target user flows, and third-party API dependencies.
                </p>

                <div className="pt-3 space-y-2">
                  <div className="text-xs font-mono-code uppercase font-bold text-[#0A0F1D] tracking-wider">
                    Phase 01 Deliverables:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1E293B]">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#058A5E] shrink-0" />
                      <span>System Architecture Blueprint</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#058A5E] shrink-0" />
                      <span>Third-party API &amp; DB Schema Map</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#058A5E] shrink-0" />
                      <span>Sprint Timeline &amp; Risk Register</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#058A5E] shrink-0" />
                      <span>Guaranteed Fixed-Price Proposal</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/70 rounded-2xl p-6 border border-[rgba(203,195,182,0.8)] space-y-4">
                <span className="font-mono-code text-xs text-[#64748B] uppercase tracking-wider font-semibold block">
                  Commercial Guarantee
                </span>
                <div className="text-xl font-headline font-bold text-[#0A0F1D]">
                  Transparent Fixed Proposals
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Every scope item is priced down to the milestone. If engineering requires unexpected architectural refinement on our end, the cost is fully absorbed by AXORKS.
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full py-3 rounded-xl bg-[#0F172A] text-white text-xs font-headline font-bold uppercase tracking-wider hover:bg-[#1E293B] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Book Phase 01 Discovery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>


          {/* ─── PHASES 02 & 03: ASYMMETRIC PAIRED SPRINT LAYOUT ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Phase 02: Fixed-Price Milestone Proposal (5 Cols) */}
            <div className="lg:col-span-5 surface-ivory rounded-3xl p-7 sm:p-9 spatial-card border border-[rgba(214,207,195,0.85)] flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[#0F172A]/10 text-[#0A0F1D]">
                    PHASE 02 // CONTRACT LOCK
                  </span>
                  <span className="text-[11px] font-mono-code text-[#058A5E] font-bold">
                    Milestone-Based
                  </span>
                </div>

                <h3 className="font-display-hero text-2xl font-bold text-[#0A0F1D] mb-3">
                  Fixed Proposal &amp; Milestone Schedule
                </h3>

                <p className="text-xs sm:text-sm text-[#1E293B] leading-relaxed mb-6 font-normal">
                  We produce an itemized contract with clearly delineated sprint checkpoints. Projects start from $1,000. You sign off on defined deliverables before a single line of production code is written.
                </p>

                <div className="space-y-2 pt-4 border-t border-[rgba(214,207,195,0.7)] text-xs text-[#1E293B]">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#058A5E] shrink-0" />
                    <span>Exact delivery date guarantees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#058A5E] shrink-0" />
                    <span>No hidden server or infra charges</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#058A5E] shrink-0" />
                    <span>Itemized milestone payment gates</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[rgba(214,207,195,0.7)] text-xs font-mono-code font-bold text-[#058A5E]">
                // Zero Hourly Billing Ambiguity
              </div>
            </div>

            {/* Phase 03: Iterative Staging Inspection (7 Cols) */}
            <div className="lg:col-span-7 surface-ivory rounded-3xl p-7 sm:p-9 spatial-card border border-[rgba(214,207,195,0.85)] flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider bg-[#0F172A]/10 text-[#0A0F1D]">
                    PHASE 03 // ITERATIVE SPRINT RELEASES
                  </span>
                  <span className="text-[11px] font-mono-code text-[#6D28D9] font-bold">
                    Client Testing Gate
                  </span>
                </div>

                <h3 className="font-display-hero text-2xl font-bold text-[#0A0F1D] mb-3">
                  Staging Build Inspection Before Release
                </h3>

                <p className="text-xs sm:text-sm text-[#1E293B] leading-relaxed mb-6 font-normal">
                  Development proceeds in focused weekly cycles. At the end of every sprint, completed features are deployed to a private, password-protected staging URL where your team can test live on desktop and mobile devices.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[rgba(214,207,195,0.7)] text-xs text-[#1E293B]">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#6D28D9] shrink-0" />
                    <span>Weekly live staging deployments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#6D28D9] shrink-0" />
                    <span>Direct Slack/WhatsApp engineer access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#6D28D9] shrink-0" />
                    <span>Automated test suite reports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#6D28D9] shrink-0" />
                    <span>Sign-off gate before funds release</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[rgba(214,207,195,0.7)] text-xs font-mono-code font-bold text-[#6D28D9]">
                // You Verify Working Software First
              </div>
            </div>
          </div>


          {/* ─── PHASE 04: PRODUCTION DEPLOYMENT & 100% IP HANDOVER (Culminating Stage) ─── */}
          <div className="surface-ivory rounded-3xl p-8 sm:p-12 spatial-card border border-[rgba(214,207,195,0.85)] shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md text-[11px] font-mono-code font-bold uppercase tracking-wider bg-[#BE123C] text-white">
                    PHASE 04 // LAUNCH &amp; HANDOVER
                  </span>
                  <span className="text-xs font-mono-code text-[#BE123C] font-bold">
                    100% Commercial IP Transfer
                  </span>
                </div>

                <h2 className="font-display-hero text-2xl sm:text-3xl font-extrabold text-[#0A0F1D]">
                  Production Launch, Repository Transfer &amp; Warranty
                </h2>

                <p className="text-sm text-[#1E293B] leading-relaxed font-normal">
                  Upon final milestone sign-off, we deploy your software to your production infrastructure (AWS, Vercel, Docker, Apple App Store, Google Play). All Git repositories, environment configurations, and intellectual property are transferred completely to your commercial ownership.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-[#1E293B]">
                  <div className="p-3 bg-white/60 rounded-xl border border-[rgba(203,195,182,0.7)]">
                    <div className="font-bold text-[#0A0F1D] mb-0.5">Full Git Admin</div>
                    <div className="text-[11px] text-[#64748B]">Immediate ownership transfer</div>
                  </div>
                  <div className="p-3 bg-white/60 rounded-xl border border-[rgba(203,195,182,0.7)]">
                    <div className="font-bold text-[#0A0F1D] mb-0.5">Production CI/CD</div>
                    <div className="text-[11px] text-[#64748B]">Automated deployment pipelines</div>
                  </div>
                  <div className="p-3 bg-white/60 rounded-xl border border-[rgba(203,195,182,0.7)]">
                    <div className="font-bold text-[#0A0F1D] mb-0.5">Post-Launch Warranty</div>
                    <div className="text-[11px] text-[#64748B]">Bug-fix guarantee &amp; SLA support</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center">
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full py-4 rounded-xl bg-[#0F172A] text-white text-xs font-headline font-bold uppercase tracking-wider hover:bg-[#1E293B] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Initiate Project Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Milestone Governance Pillars: Clean Typographic Ledger */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="glass-2 holographic-edge rounded-3xl p-8 sm:p-12 spatial-card">
            <span className="font-mono-code text-xs uppercase text-[var(--gold)] tracking-widest font-bold block mb-2">
              EXECUTIVE COMMERCIAL TERMS
            </span>
            <h2 className="font-display-hero text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-8">
              The Three Pillars of Milestone Delivery
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[var(--glass-border)]">
              <div className="pt-4 md:pt-0 md:pr-6 space-y-2">
                <span className="font-mono-code text-xs text-[var(--gold)] font-bold uppercase">
                  PILLAR 01 // BUDGET CERTAINTY
                </span>
                <h3 className="font-headline text-lg font-bold text-[var(--text-primary)]">
                  Fixed Scope &amp; Budget Lock
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                  Before a single line of code is written, we deliver an itemized technical scope with guaranteed pricing. If an architectural feature requires more effort on our end, the cost is on us.
                </p>
              </div>

              <div className="pt-6 md:pt-0 md:px-6 space-y-2">
                <span className="font-mono-code text-xs text-[var(--emerald)] font-bold uppercase">
                  PILLAR 02 // QUALITY ASSURANCE
                </span>
                <h3 className="font-headline text-lg font-bold text-[var(--text-primary)]">
                  Staging Inspection Before Release
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                  Every sprint concludes with a deployed staging environment where you can click, test, and verify completed features on real devices before signing off and releasing the milestone invoice.
                </p>
              </div>

              <div className="pt-6 md:pt-0 md:pl-6 space-y-2">
                <span className="font-mono-code text-xs text-[#A78BFA] font-bold uppercase">
                  PILLAR 03 // FULL ASSET HANDOVER
                </span>
                <h3 className="font-headline text-lg font-bold text-[var(--text-primary)]">
                  Full IP &amp; Code Repository Transfer
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
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
            <p className="text-sm text-[#1E293B] mt-1 font-normal">
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

