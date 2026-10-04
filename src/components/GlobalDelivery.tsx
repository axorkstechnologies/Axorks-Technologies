import React from 'react';

export const GlobalDelivery: React.FC = () => {
  return (
    <section className="w-full py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left: Milestone Process */}
        <div className="lg:col-span-5">
          <span className="font-sans-mono text-[10px] uppercase tracking-widest text-graphite mb-6 block">
            Delivery Protocol
          </span>
          <h2 className="font-serif-headline text-3xl sm:text-4xl lg:text-5xl text-paper mb-12">
            Predictable milestone execution.
          </h2>
          
          <div className="flex flex-col gap-10">
            {[
              { step: '01', title: 'Technical Discovery', desc: 'Direct technical scoping with senior architects. No sales pitches.' },
              { step: '02', title: '24-Hour Proposal', desc: 'Fixed-price contract, rigid timeline, and milestone definitions delivered in 24 hours.' },
              { step: '03', title: 'Staging Verification', desc: 'You test functioning software on live staging servers before any milestone invoice is paid.' },
              { step: '04', title: 'IP Handover', desc: 'Production deployment and 100% commercial intellectual property transfer.' }
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <span className="font-sans-mono text-sm text-graphite mt-1">{item.step}</span>
                <div>
                  <h4 className="font-serif-headline text-xl text-paper mb-2">{item.title}</h4>
                  <p className="font-sans-body text-sm text-graphite leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Global Reach */}
        <div className="lg:col-span-6 lg:col-start-7 pt-12 lg:pt-0 editorial-border-t lg:border-t-0 lg:border-l border-graphite/30 lg:pl-16">
          <span className="font-sans-mono text-[10px] uppercase tracking-widest text-graphite mb-6 block">
            Operational Proximity
          </span>
          <h3 className="font-serif-headline text-3xl sm:text-4xl text-paper mb-6">
            Global delivery. Local advantage.
          </h3>
          <p className="font-sans-body text-base text-graphite leading-relaxed mb-12">
            Operating from registered offices in Karachi and Islamabad, we provide a massive strategic advantage to international founders. You get elite engineering talent without the Western agency premium, secured by strict IP laws and immediate time-zone overlap.
          </p>

          <div className="flex flex-col gap-8 editorial-border-t border-graphite/30 pt-8">
            <div className="flex flex-col gap-2">
              <span className="font-sans-mono text-xs text-paper uppercase tracking-widest">GCC Markets</span>
              <p className="font-sans-body text-sm text-graphite leading-relaxed">
                Near-zero time delta (1-2 hours) with Saudi Arabia, UAE, Kuwait, and Bahrain. Rapid synchronous execution.
              </p>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="font-sans-mono text-xs text-paper uppercase tracking-widest">US, UK & Europe</span>
              <p className="font-sans-body text-sm text-graphite leading-relaxed">
                Overlapping operational windows for daily stand-ups and continuous deployment pipelines while you sleep.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};
