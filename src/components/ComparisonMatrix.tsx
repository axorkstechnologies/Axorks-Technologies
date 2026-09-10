import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export const ComparisonMatrix: React.FC = () => {
  const rows = [
    {
      metric: 'Pricing & Risk',
      agency: 'Uncapped hourly billing, arbitrary change order invoices, hidden management markups.',
      axorks: '100% Fixed-Price Milestones (projects start from $1,000). Zero scope creep charges. Pay upon delivery.'
    },
    {
      metric: 'Engineering Talent',
      agency: 'Non-technical account managers filtering messages to low-cost junior contractors.',
      axorks: 'Direct access to Muhammad Mujahid & senior software architects. Direct Slack/WhatsApp.'
    },
    {
      metric: 'Velocity to Production',
      agency: '3 to 6 months of corporate bureaucracy and discovery decks before any functional software.',
      axorks: 'Production software live in 2 to 4 weeks. Weekly functioning staging builds.'
    },
    {
      metric: 'Code Base & Ownership',
      agency: 'Spaghetti code, patched themes, vendor lock-in with ambiguous intellectual property rights.',
      axorks: 'Strictly typed enterprise architecture, comprehensive automated tests, 100% IP handoff.'
    }
  ];

  return (
    <section className="w-full bg-[#080D1A] py-20 px-4 lg:px-8 border-y border-white/[0.06]" id="why-axorks">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase text-[#F5C761] font-semibold tracking-wider font-mono">
            Unfiltered Contrast
          </div>
          <h2 className="mt-2 font-display-hero text-3xl md:text-4xl lg:text-[44px] text-white font-bold tracking-tight">
            Traditional Agencies vs. AXORKS Studio
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#CBD5E1]">
            Why high-growth enterprises and founders leave bloated consulting firms to partner directly with our specialized engineering team.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[720px] rounded-2xl chromatic-border bg-[#0E1628]/70 overflow-hidden shadow-2xl backdrop-blur-xl">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-[#141F36]/90 p-4 sm:p-5 font-mono text-[12px] uppercase text-[#94A3B8] border-b border-white/[0.08]">
              <div className="col-span-4 font-semibold">Evaluation Metric</div>
              <div className="col-span-4 text-[#F87171] font-semibold flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-[#F87171]" />
                <span>Traditional Agencies / Outsourcers</span>
              </div>
              <div className="col-span-4 text-[#F5C761] font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>AXORKS Technologies</span>
              </div>
            </div>

            {/* Table Rows */}
            {rows.map((row, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={row.metric}
                  className={`grid grid-cols-12 p-4 sm:p-5 items-center transition-colors ${
                    isEven
                      ? 'bg-[#0E1628] hover:bg-[#1B2947]/60'
                      : 'bg-[#141F36]/40 hover:bg-[#1B2947]/60'
                  } ${idx < rows.length - 1 ? 'border-b border-white/[0.04]' : ''}`}
                >
                  <div className="col-span-4 font-display-hero text-base sm:text-lg text-white font-semibold pr-4">
                    {row.metric}
                  </div>
                  <div className="col-span-4 text-xs sm:text-sm text-[#CBD5E1] pr-4 leading-relaxed">
                    {row.agency}
                  </div>
                  <div className="col-span-4 text-xs sm:text-sm text-[#F5C761] font-semibold leading-relaxed">
                    {row.axorks}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
