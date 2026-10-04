import React from 'react';

export const GlobalDelivery: React.FC = () => {
  return (
    <section className="w-full py-32 lg:py-48 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto surface-dark texture-noise border-y border-dark">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-start">
        
        {/* Left: Milestone Process */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-px bg-[var(--color-bronze)]"></span>
            <span className="font-sans-mono text-[var(--color-bronze)]">
              Delivery Protocol
            </span>
          </div>
          <h2 className="font-serif-headline text-5xl lg:text-6xl text-[var(--color-text-primary-dark)] mb-16 leading-[1.1]">
            Predictable milestone execution.
          </h2>
          
          <div className="flex flex-col gap-12">
            {[
              { step: '01', title: 'Technical Discovery', desc: 'Direct technical scoping with senior architects. No sales pitches.' },
              { step: '02', title: '24-Hour Proposal', desc: 'Fixed-price contract, rigid timeline, and milestone definitions delivered in 24 hours.' },
              { step: '03', title: 'Staging Verification', desc: 'You test functioning software on live staging servers before any milestone invoice is paid.' },
              { step: '04', title: 'IP Handover', desc: 'Production deployment and 100% commercial intellectual property transfer.' }
            ].map((item) => (
              <div key={item.step} className="flex gap-8 group">
                <span className="font-sans-mono text-xl text-[var(--color-text-secondary-dark)] group-hover:text-[var(--color-bronze)] transition-colors">{item.step}</span>
                <div>
                  <h4 className="font-serif-headline text-3xl text-[var(--color-text-primary-dark)] mb-4">{item.title}</h4>
                  <p className="font-sans-body text-lg text-[var(--color-text-secondary-dark)] leading-relaxed max-w-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Global Reach */}
        <div className="lg:col-span-7 pt-16 lg:pt-0 border-t lg:border-t-0 lg:border-l border-dark lg:pl-16 xl:pl-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-px bg-[var(--color-bronze)]"></span>
            <span className="font-sans-mono text-[var(--color-bronze)]">
              Operational Proximity
            </span>
          </div>
          <h3 className="font-serif-headline text-5xl lg:text-6xl text-[var(--color-text-primary-dark)] mb-10 leading-[1.1]">
            Global delivery. <br />Local advantage.
          </h3>
          <p className="font-sans-body text-xl text-[var(--color-text-secondary-dark)] leading-relaxed mb-16 max-w-lg">
            Operating from registered offices in Karachi and Islamabad, we provide a massive strategic advantage to international founders. You get elite engineering talent without the Western agency premium, secured by strict IP laws and immediate time-zone overlap.
          </p>

          <div className="flex flex-col gap-12 border-t border-dark pt-12">
            <div className="flex flex-col gap-4">
              <span className="font-sans-mono text-[var(--color-text-primary-dark)]">GCC Markets</span>
              <p className="font-sans-body text-lg text-[var(--color-text-secondary-dark)] leading-relaxed max-w-md">
                Near-zero time delta (1-2 hours) with Saudi Arabia, UAE, Kuwait, and Bahrain. Rapid synchronous execution.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <span className="font-sans-mono text-[var(--color-text-primary-dark)]">US, UK & Europe</span>
              <p className="font-sans-body text-lg text-[var(--color-text-secondary-dark)] leading-relaxed max-w-md">
                Overlapping operational windows for daily stand-ups and continuous deployment pipelines while you sleep.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};
