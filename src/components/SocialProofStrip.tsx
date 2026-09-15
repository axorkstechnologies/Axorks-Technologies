import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProofItem {
  id: string;
  name: string;
  sector: string;
  logo: string;
  metric: string;
  result: string;
  accent: string;
}

const PROOF_ITEMS: ProofItem[] = [
  {
    id: 'agrotrace',
    name: 'AgroTrace',
    sector: 'Agriculture · Supply Chain',
    logo: '/Logos/agrotrace_logo.png',
    metric: '42% Spoilage Drop',
    result: '14,000 active nodes tracked across cold-chain logistics in real time.',
    accent: 'var(--emerald)',
  },
  {
    id: 'ipmi-os',
    name: 'IPMI-OS 2.0',
    sector: 'FinTech · AI Trading',
    logo: '/Logos/ipmios_logo.png',
    metric: '<1s Latency',
    result: 'Multi-tier TQE analysis and autonomous risk governance execution engine.',
    accent: 'var(--gold)',
  },
  {
    id: 'mediverse',
    name: 'MediVerse',
    sector: 'Healthcare · Telemedicine',
    logo: '/Logos/mediverse_logo.png',
    metric: 'WHO & HIPAA',
    result: 'Compliant cross-border telemedicine connecting verified specialists.',
    accent: '#A78BFA',
  },
  {
    id: 'fume',
    name: 'FUME Fragrances',
    sector: 'Luxury · E-Commerce',
    logo: '/Logos/fume_logo.jpg',
    metric: 'Bespoke UI',
    result: 'High-conversion sensory discovery boutique engineered end-to-end.',
    accent: '#F43F5E',
  },
];

export const SocialProofStrip: React.FC = () => {
  return (
    <section className="w-full py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#040814] border-b border-[var(--glass-border)] relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            <span className="font-mono-code text-[11px] uppercase tracking-widest text-[var(--text-muted)] font-semibold">
              Live Production Platforms &amp; Client Deployments
            </span>
          </div>
          <span className="text-xs font-mono-code text-[#F5C761]">
            Verified Real-World Business Outcomes
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {PROOF_ITEMS.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="h-12 flex items-center justify-between mb-4 pb-3 border-b border-white/[0.05]">
                  <div className="h-9 max-w-[140px] flex items-center">
                    <img
                      src={item.logo}
                      alt={`${item.name} logo`}
                      className="max-h-8 max-w-full object-contain filter brightness-110 group-hover:brightness-125 transition-all"
                      loading="lazy"
                    />
                  </div>
                  <span
                    className="font-mono-code text-[10px] uppercase font-bold px-2 py-0.5 rounded border"
                    style={{
                      borderColor: item.accent,
                      color: item.accent,
                      backgroundColor: 'rgba(0,0,0,0.4)',
                    }}
                  >
                    {item.metric}
                  </span>
                </div>

                <div className="text-[11px] font-mono-code text-[var(--text-muted)] mb-1">
                  {item.sector}
                </div>
                <h4 className="font-headline text-base font-bold text-white mb-2">
                  {item.name}
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {item.result}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono-code text-[var(--text-muted)] group-hover:text-white transition-colors">
                <span>View Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};