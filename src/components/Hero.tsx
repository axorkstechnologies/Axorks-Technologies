import React from 'react';

interface HeroProps {
  onOpenDiscovery: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiscovery }) => {
  return (
    <section className="w-full pt-32 pb-16 lg:pt-48 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto bg-paper">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left: Editorial Proposition */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col pt-4">
          <span className="font-sans-mono text-xs text-oxblood mb-6 block">
            Senior Engineering Studio
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-ink mb-8">
            Production-grade systems, engineered without compromise.
          </h1>
          <p className="font-sans-body text-base lg:text-lg text-graphite mb-10 max-w-lg">
            We architect and scale custom software for enterprise operations and high-growth companies. Direct access to principal engineers. Fixed-price milestone contracts.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button onClick={onOpenDiscovery} className="btn-primary w-full sm:w-auto">
              Book Discovery Call
            </button>
            <a 
              href="https://wa.me/923141030223" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-sans-mono text-xs text-ink hover:text-oxblood uppercase tracking-widest flex items-center gap-2"
            >
              WhatsApp Contact 
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Structural Real Product Proof (No glowing orbs, strict 0px border) */}
        <div className="lg:col-span-6 xl:col-span-7 w-full h-[400px] lg:h-[600px] bg-stone editorial-border relative">
          {/* Skeleton Loader Simulation overlaying real video later */}
          <div className="absolute inset-0 flex flex-col p-6">
             <div className="flex justify-between items-center mb-auto editorial-border-b pb-4">
                <div className="w-24 h-4 bg-graphite/10"></div>
                <div className="w-8 h-8 bg-graphite/10"></div>
             </div>
             
             {/* Actual proof video embedding. For now, a structural block. */}
             <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
                <video 
                  src="/Images/Motion_AXORKS.mp4" 
                  autoPlay loop muted playsInline 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
                ></video>
                <div className="absolute inset-0 bg-stone/20 mix-blend-multiply pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 bg-paper px-3 py-1 editorial-border font-sans-mono text-[10px] text-ink uppercase tracking-widest">
                  Live Production System Preview
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};
