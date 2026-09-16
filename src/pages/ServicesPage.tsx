import React from 'react';
import { SERVICES } from '../data/mockData';
import { useRouter } from '../router/Router';
import { Check, ArrowRight, Tag } from 'lucide-react';
import { CapabilitiesMatrix } from '../components/CapabilitiesMatrix';

export const ServicesPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="w-full pt-28 pb-20 lg:pb-28">
      {/* Page Header Banner (LIGHT) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[var(--gold)] mb-4">
            <button onClick={() => navigate('/')} className="hover:underline cursor-pointer">Home</button>
            <span>/</span>
            <span>Capabilities</span>
          </div>

          <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Capabilities &amp; Architecture.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed font-normal">
            Direct access to seasoned software architects. Fixed-price milestone delivery from $1,000 with 100% intellectual property transfer upon project handover.
          </p>
        </div>
      </section>

      {/* Capabilities Matrix (AEO Optimized) */}
      <CapabilitiesMatrix />

      {/* CTA (DARK) */}
      <div className="dark-surface">
        <section className="w-full bg-[var(--bg-primary)] py-20 lg:py-28 relative border-t border-[var(--glass-border)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display-hero text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Lock your technical scope today.
            </h2>
            <button 
              onClick={() => navigate('/contact')}
              className="magnetic-btn px-8 py-4 bg-[var(--gold)] text-[#0A0F1D] rounded-xl font-headline font-bold text-sm uppercase tracking-wider"
            >
              Book Discovery Call
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};