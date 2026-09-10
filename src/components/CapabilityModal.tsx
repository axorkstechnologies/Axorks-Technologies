import React from 'react';
import { ServiceCapability } from '../types';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Clock, Tag } from 'lucide-react';

interface CapabilityModalProps {
  service: ServiceCapability | null;
  onClose: () => void;
  onCommission: (serviceId: string) => void;
}

export const CapabilityModal: React.FC<CapabilityModalProps> = ({
  service,
  onClose,
  onCommission
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl chromatic-border bg-[#0B1120] p-6 sm:p-8 shadow-2xl border border-white/10 text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close capability spec"
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#141F36] hover:bg-[#1B2947] text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-[#141F36] text-[#F5C761] font-mono text-[11px] uppercase border border-[#F5C761]/30">
              {service.priceTag}
            </span>
            <span className="text-xs text-[#10B981] font-mono font-semibold">● Fixed-Price Guaranteed</span>
          </div>

          <h3 className="font-display-hero text-2xl sm:text-3xl font-bold text-[#F5C761]">
            {service.title}
          </h3>
          <p className="text-sm text-[#CBD5E1]">{service.subtitle}</p>
        </div>

        <p className="mt-4 text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
          {service.description}
        </p>

        {/* Deliverables Checklist */}
        <div className="mt-6 space-y-3 p-4 rounded-xl bg-[#0E1628] border border-white/[0.06]">
          <div className="text-xs font-mono text-[#F5C761] uppercase tracking-wider font-semibold">
            Included Architectural Deliverables
          </div>
          <div className="space-y-2">
            {service.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Tags */}
        <div className="mt-5 space-y-2">
          <div className="text-xs font-mono text-[#94A3B8] uppercase">Production Stack</div>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-[#141F36] border border-white/[0.06] font-mono text-xs text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Metadata Footer bar */}
        <div className="mt-6 grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-[#060913] border border-white/[0.04] font-mono text-xs">
          <div className="flex items-center gap-2 text-[#94A3B8]">
            <Clock className="w-4 h-4 text-[#F5C761]" />
            <span>Timeline: {service.typicalTimeline}</span>
          </div>
          <div className="flex items-center gap-2 text-[#94A3B8]">
            <Tag className="w-4 h-4 text-[#10B981]" />
            <span>Baseline: From $1,000</span>
          </div>
        </div>

        {/* Action */}
        <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>100% IP Handoff Guaranteed</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onCommission(service.id);
            }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] font-mono text-xs uppercase font-bold tracking-wider glow-gold-box hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Commission This Capability</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
