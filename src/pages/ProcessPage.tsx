import React from 'react';

export const ProcessPage: React.FC = () => {
  return (
    <div className="w-full pt-32 pb-20 lg:pt-40 lg:pb-32 bg-paper min-h-[80vh]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif-display text-4xl sm:text-5xl text-ink mb-12">Delivery Protocol</h1>
        <div className="flex flex-col gap-10 editorial-border-t pt-12">
            {[
              { step: '01', title: 'Technical Discovery', desc: 'Direct technical scoping with senior architects. No sales pitches.' },
              { step: '02', title: '24-Hour Proposal', desc: 'Fixed-price contract, rigid timeline, and milestone definitions delivered in 24 hours.' },
              { step: '03', title: 'Staging Verification', desc: 'You test functioning software on live staging servers before any milestone invoice is paid.' },
              { step: '04', title: 'IP Handover', desc: 'Production deployment and 100% commercial intellectual property transfer.' }
            ].map((item) => (
              <div key={item.step} className="flex gap-6 max-w-2xl">
                <span className="font-sans-mono text-sm text-graphite mt-1">{item.step}</span>
                <div>
                  <h4 className="font-serif-headline text-xl text-ink mb-2">{item.title}</h4>
                  <p className="font-sans-body text-sm text-graphite leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
