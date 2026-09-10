import React from 'react';
import { CASE_STUDIES } from '../data/mockData';
import { CaseStudy } from '../types';
import { ArrowRight, Activity, CheckCircle2 } from 'lucide-react';

interface CaseStudiesProps {
  onOpenCaseStudy: (caseStudy: CaseStudy) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenCaseStudy }) => {
  return (
    <section className="w-full bg-[#080D1A] py-20 px-4 lg:px-8 border-y border-white/[0.06]" id="proof-of-work">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs uppercase text-[#F5C761] tracking-wider font-semibold font-mono">
              Proof of Work
            </div>
            <h2 className="mt-2 font-display-hero text-3xl md:text-4xl lg:text-[44px] text-white font-bold tracking-tight">
              Delivered Architectures. Measurable Impact.
            </h2>
          </div>
          <div className="font-mono text-xs text-[#94A3B8] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            <span>Production Systems Under Active SLA • Verified Repositories</span>
          </div>
        </div>

        {/* Case Studies Stack */}
        <div className="space-y-12">
          {CASE_STUDIES.map((study, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={study.id}
                className="rounded-2xl chromatic-border bg-[#0E1628]/80 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl transition-all duration-300 hover:border-[#F5C761]/40"
              >
                {/* Image Section */}
                <div
                  className={`lg:col-span-6 relative min-h-[300px] sm:min-h-[360px] overflow-hidden ${
                    isReversed ? 'lg:order-last' : 'lg:order-first'
                  }`}
                >
                  <img
                    src={study.image}
                    alt={study.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1628] via-[#0E1628]/30 to-transparent pointer-events-none" />

                  {/* Status Pills Over Image */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#04070F]/90 border border-[#10B981]/35 font-mono text-[11px] text-[#10B981] uppercase font-medium shadow-sm">
                      {study.categoryBadge}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#04070F]/90 border border-white/10 font-mono text-[11px] text-white uppercase shadow-sm">
                      {study.statusBadge}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-6 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-display-hero text-2xl sm:text-3xl font-bold text-[#F5C761]">
                        {study.title}
                      </h3>
                      <span className="font-mono text-[12px] text-[#94A3B8]">
                        Client: {study.client}
                      </span>
                    </div>

                    <p className="mt-3 text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                      {study.description}
                    </p>

                    {/* Metrics Grid */}
                    <div className="mt-6 grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#141F36]/80 border border-[#F5C761]/20 shadow-[0_0_15px_rgba(245,199,97,0.08)]">
                      {study.metrics.map((metric, mIdx) => (
                        <div key={mIdx}>
                          <div
                            className={`font-display-hero text-2xl sm:text-3xl font-bold ${
                              mIdx === 0 ? 'text-[#10B981]' : 'text-[#F5C761]'
                            }`}
                          >
                            {metric.value}
                          </div>
                          <div className="text-xs text-[#CBD5E1] mt-0.5">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer tags and action */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-[#94A3B8] font-mono text-[11px]">
                      {study.tags.map((tag, tIdx) => (
                        <React.Fragment key={tag}>
                          <span>{tag}</span>
                          {tIdx < study.tags.length - 1 && <span>•</span>}
                        </React.Fragment>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenCaseStudy(study)}
                      className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#F5C761] hover:underline cursor-pointer"
                    >
                      <span>Examine Architecture Spec</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
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
