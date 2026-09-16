import React from 'react';
import { Hero } from '../components/Hero';
import { ParadigmMatrix } from '../components/ParadigmMatrix';
import { EvidenceEngine } from '../components/EvidenceEngine';
import { GlobalDelivery } from '../components/GlobalDelivery';
import { StudioTeam } from '../components/StudioTeam';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { useNavigate } from '../router/Router';
import { motion } from 'motion/react';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* 1. THE HOOK: Vision, Micro-commitment & Primary CTA (DARK) */}
      <div className="dark-surface">
        <Hero onOpenDiscovery={() => navigate('/contact')} />
      </div>

      {/* 2. THE PROOF & PARADIGM SHIFT: Verified Logos + AEO Decision Framework (LIGHT) */}
      <ParadigmMatrix />

      {/* 3. THE EVIDENCE ENGINE: Interwoven Work + Client Stories (LIGHT) */}
      <EvidenceEngine />

      {/* 4. THE PROTOCOL: Global Delivery & Milestone Risk Removal (LIGHT) */}
      <GlobalDelivery />

      {/* 5. THE ARCHITECTS: Leadership & Direct Access (LIGHT) */}
      <StudioTeam />

      {/* 6. THE ESCALATION: Final Conversion Punctuation (DARK) */}
      <div className="dark-surface">
        <section className="w-full bg-[var(--bg-primary)] py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1D] to-[#040812] z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--emerald)]/10 rounded-full blur-[120px] pointer-events-none z-0" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center"
          >
            <span className="font-mono-code text-xs uppercase tracking-widest text-[var(--gold)] font-bold mb-6 block">
              Lock Your Technical Scope
            </span>
            <h2 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-8">
              Start building your system.<br />
              <span className="text-[var(--text-muted)]">Fixed-price in 24 hours.</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-4">
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                <button
                  onClick={() => navigate('/contact')}
                  className="magnetic-btn w-full sm:w-auto px-8 py-4 bg-[var(--gold)] text-[#0A0F1D] rounded-xl font-headline font-bold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(201,151,46,0.3)] hover:bg-[var(--gold-light)] transition-colors flex items-center justify-center gap-3"
                >
                  <span>Book Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                {/* Micro-commitment Sub-CTA */}
                <span className="text-[10px] font-mono-code text-[var(--text-muted)] uppercase tracking-wider hover:text-[var(--emerald)] transition-colors cursor-pointer" onClick={() => navigate('/process')}>
                  Read our 24h SLA Process &rarr;
                </span>
              </div>
              
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                <a
                  href="https://wa.me/923141030223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn w-full sm:w-auto px-8 py-4 bg-white/10 text-white rounded-xl font-headline font-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-colors flex items-center justify-center gap-3"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
                <span className="text-[10px] font-mono-code text-[var(--text-muted)] uppercase tracking-wider opacity-0 cursor-default">
                  Placeholder
                </span>
              </div>
            </div>
            
            <p className="mt-12 text-xs font-mono-code text-white/80 font-medium flex flex-wrap justify-center gap-3 items-center">
              <span className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[var(--emerald)]" /> Direct access.</span> 
              <span className="opacity-30">•</span> 
              <span className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[var(--emerald)]" /> 100% IP.</span> 
              <span className="opacity-30">•</span> 
              <span className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[var(--emerald)]" /> Projects from $1,000.</span>
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
};
