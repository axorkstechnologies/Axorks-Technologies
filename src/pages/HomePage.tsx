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
    <div className="w-full bg-paper">
      
      {/* 1. HERO (Editorial Asymmetric) */}
      <Hero onOpenDiscovery={() => navigate('/contact')} />

      {/* 2. PARADIGM MATRIX (Editorial Structural Table) */}
      <ParadigmMatrix />

      {/* 3. EVIDENCE ENGINE (Verified Structural Deployments) */}
      <EvidenceEngine />

      {/* 4. GLOBAL DELIVERY (Dark Contrast Section, Navy/Ink) */}
      <div className="bg-ink text-paper w-full editorial-border-t border-graphite/30">
        <GlobalDelivery />
      </div>

      {/* 5. THE ARCHITECTS (Light) */}
      <StudioTeam />

      {/* 6. CONVERSION ESCALATION (Dark Navy) */}
      <div className="bg-navy w-full editorial-border-t border-graphite/30 py-24 lg:py-32">
        <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          <span className="font-sans-mono text-[10px] uppercase tracking-widest text-stone mb-6 block">
            Initiate Engagement
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-paper mb-10 max-w-3xl">
            Secure your architecture. <br />
            <span className="text-graphite italic">Fixed-price in 24 hours.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <button
              onClick={() => navigate('/contact')}
              className="bg-paper text-ink px-8 py-4 font-sans-mono text-sm uppercase tracking-widest border border-paper hover:bg-stone transition-colors"
            >
              Book Discovery Call
            </button>
            <a
              href="https://wa.me/923141030223"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-paper px-8 py-4 font-sans-mono text-sm uppercase tracking-widest border border-graphite hover:border-paper transition-colors"
            >
              WhatsApp Inquiry
            </a>
          </div>
          
          <div className="mt-12 pt-8 editorial-border-t border-graphite/30 flex flex-wrap justify-center gap-6 items-center w-full max-w-2xl font-sans-mono text-[10px] text-graphite uppercase tracking-widest">
            <span>Direct Architect Access</span>
            <span className="w-1 h-1 bg-graphite"></span>
            <span>100% IP Transfer</span>
            <span className="w-1 h-1 bg-graphite"></span>
            <span>Projects from $1,000</span>
          </div>

        </section>
      </div>

    </div>
  );
};
