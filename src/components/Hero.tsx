import React from 'react';

interface HeroProps {
  onOpenDiscovery: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiscovery }) => {
  return (
    <section className="w-full pt-32 pb-20 lg:pt-56 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto surface-dark texture-noise min-h-[90vh] flex items-center border-b border-dark">
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
        
        {/* Left: Cinematic Typography */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-px bg-[var(--color-bronze)]"></span>
            <span className="font-sans-mono text-[var(--color-bronze)]">
              Principal Engineering Studio
            </span>
          </div>
          
          <h1 className="font-serif-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[var(--color-text-primary-dark)] leading-[1.05] mb-8">
            Architecting <br />
            Enterprise <br />
            Platforms.
          </h1>
          
          <p className="font-sans-body text-lg lg:text-xl text-[var(--color-text-secondary-dark)] mb-12 max-w-xl">
            We deliver highly scalable custom software, AI architectures, and mobile systems. Executed strictly by senior engineers on fixed-price milestones. 
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button onClick={onOpenDiscovery} className="bg-[var(--color-text-primary-dark)] text-[var(--color-obsidian)] font-sans-mono py-4 px-8 hover:bg-[var(--color-bronze)] hover:text-[var(--color-text-primary-dark)] transition-colors w-full sm:w-auto text-center">
              Book Discovery Call
            </button>
            <a 
              href="https://wa.me/923141030223" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-sans-mono text-[var(--color-text-secondary-dark)] hover:text-[var(--color-text-primary-dark)] transition-colors flex items-center gap-2"
            >
              WhatsApp Contact 
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Structural Proof Container (Cinematic) */}
        <div className="lg:col-span-5 w-full aspect-[4/5] surface-dark-elevated border border-dark relative overflow-hidden flex items-center justify-center group">
          <video 
            src="/Images/Motion_AXORKS.mp4" 
            autoPlay loop muted playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700"
          ></video>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)] to-transparent opacity-80 pointer-events-none"></div>
          
          <div className="absolute bottom-8 left-8 right-8 border-l-2 border-[var(--color-bronze)] pl-4">
            <p className="font-sans-mono text-[var(--color-text-primary-dark)] mb-1">Live Telemetry</p>
            <p className="font-sans-body text-[var(--color-text-secondary-dark)] text-sm">System Operations Preview</p>
          </div>
        </div>

      </div>
    </section>
  );
};
