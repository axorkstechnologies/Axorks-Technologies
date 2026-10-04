import React from 'react';
import { Hero } from '../components/Hero';
import { ParadigmMatrix } from '../components/ParadigmMatrix';
import { EvidenceEngine } from '../components/EvidenceEngine';
import { GlobalDelivery } from '../components/GlobalDelivery';
import { StudioTeam } from '../components/StudioTeam';
import { useRouter } from '../router/Router';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="w-full bg-[var(--color-obsidian)]">
      
      {/* 1. HERO (Cinematic Dark) */}
      <Hero onOpenDiscovery={() => navigate('/contact')} />

      {/* 2. PARADIGM MATRIX (Cinematic Dark) */}
      <ParadigmMatrix />

      {/* 3. EVIDENCE ENGINE (Editorial Light) */}
      <div className="surface-light w-full">
        <EvidenceEngine />
      </div>

      {/* 4. GLOBAL DELIVERY (Cinematic Dark) */}
      <GlobalDelivery />

      {/* 5. THE ARCHITECTS (Editorial Light) */}
      <div className="surface-light w-full">
        <StudioTeam />
      </div>

      {/* 6. CONVERSION ESCALATION (Deep Cinematic Dark) */}
      <div className="surface-dark texture-noise w-full border-t border-dark py-32 lg:py-48">
        <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          <span className="font-sans-mono text-[var(--color-bronze)] mb-8 block">
            Initiate Engagement
          </span>
          <h2 className="font-serif-display text-5xl sm:text-6xl lg:text-8xl text-[var(--color-text-primary-dark)] mb-16 max-w-4xl leading-[1.05]">
            Secure your architecture. <br />
            <span className="italic text-[var(--color-text-secondary-dark)]">Fixed-price in 24 hours.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full mb-16">
            <button
              onClick={() => navigate('/contact')}
              className="bg-[var(--color-text-primary-dark)] text-[var(--color-obsidian)] px-10 py-5 font-sans-mono border border-[var(--color-text-primary-dark)] hover:bg-[var(--color-bronze)] hover:border-[var(--color-bronze)] transition-all w-full sm:w-auto"
            >
              Book Discovery Call
            </button>
            <a
              href="https://wa.me/923141030223"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-[var(--color-text-primary-dark)] px-10 py-5 font-sans-mono border border-dark hover:border-[var(--color-text-primary-dark)] transition-colors w-full sm:w-auto"
            >
              WhatsApp Inquiry
            </a>
          </div>
          
          <div className="pt-12 border-t border-dark flex flex-wrap justify-center gap-x-12 gap-y-6 items-center w-full max-w-4xl font-sans-mono text-[var(--color-text-secondary-dark)]">
            <span>Direct Architect Access</span>
            <span className="hidden sm:block w-1.5 h-1.5 bg-dark"></span>
            <span>100% IP Transfer</span>
            <span className="hidden sm:block w-1.5 h-1.5 bg-dark"></span>
            <span>Zero Hourly Billing</span>
          </div>

        </section>
      </div>

    </div>
  );
};
