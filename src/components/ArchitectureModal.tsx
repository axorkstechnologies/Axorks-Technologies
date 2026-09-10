import React from 'react';
import { CaseStudy } from '../types';
import { X, CheckCircle, ArrowRight, Layers, Database, Cpu, ShieldCheck } from 'lucide-react';

interface ArchitectureModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onCommission: (serviceId?: string) => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({
  caseStudy,
  onClose,
  onCommission
}) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl chromatic-border bg-[#0B1120] p-6 sm:p-8 shadow-2xl border border-white/10 text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#141F36] hover:bg-[#1B2947] text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-[#044E38]/60 text-[#10B981] font-mono text-[11px] uppercase border border-[#10B981]/30">
              {caseStudy.categoryBadge}
            </span>
            <span className="text-xs text-[#94A3B8] font-mono">Client: {caseStudy.client}</span>
          </div>

          <h3 className="font-display-hero text-2xl sm:text-3xl font-bold text-[#F5C761]">
            {caseStudy.title} Architecture Specification
          </h3>
          <p className="text-sm text-[#CBD5E1]">{caseStudy.tagline}</p>
        </div>

        {/* Case Study Image Banner */}
        <div className="mt-5 rounded-xl overflow-hidden h-44 relative">
          <img
            src={caseStudy.image}
            alt={caseStudy.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Metrics Bar */}
        <div className="mt-5 grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#141F36]/80 border border-[#F5C761]/20">
          {caseStudy.metrics.map((metric, idx) => (
            <div key={idx}>
              <div
                className={`font-display-hero text-2xl font-bold ${
                  idx === 0 ? 'text-[#10B981]' : 'text-[#F5C761]'
                }`}
              >
                {metric.value}
              </div>
              <div className="text-xs text-[#CBD5E1] mt-0.5">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Architecture Breakdown Bento */}
        <div className="mt-6 space-y-4">
          <div className="text-xs uppercase font-mono text-[#F5C761] font-semibold">
            System Design Topology
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-[#0E1628] border border-white/[0.06] space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
                <Cpu className="w-4 h-4 text-[#8B5CF6]" />
                <span>Backend Logic</span>
              </div>
              <div className="text-xs text-white font-medium">{caseStudy.architecture.backend}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0E1628] border border-white/[0.06] space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
                <Database className="w-4 h-4 text-[#10B981]" />
                <span>Data Partitioning</span>
              </div>
              <div className="text-xs text-white font-medium">{caseStudy.architecture.database}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0E1628] border border-white/[0.06] space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
                <Layers className="w-4 h-4 text-[#F5C761]" />
                <span>AI &amp; Classification</span>
              </div>
              <div className="text-xs text-white font-medium">{caseStudy.architecture.aiModel}</div>
            </div>
          </div>

          {/* Key Architectural Highlights */}
          <div className="p-4 rounded-xl bg-[#0E1628] border border-white/[0.06] space-y-2">
            <div className="text-xs font-mono text-[#94A3B8] uppercase">
              Key Engineering Deliverables
            </div>
            <div className="space-y-2">
              {caseStudy.architecture.highlights.map((highlight, hIdx) => (
                <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                  <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>Full code &amp; schematic review available on discovery call</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onCommission();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] font-mono text-xs uppercase font-bold tracking-wider glow-gold-box hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Commission Equivalent System</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
