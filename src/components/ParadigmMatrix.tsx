import React from 'react';

export const ParadigmMatrix: React.FC = () => {
  return (
    <section className="w-full py-20 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto bg-stone editorial-border-t">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left: Manifesto / Proposition */}
        <div className="lg:col-span-5">
          <span className="font-sans-mono text-[10px] text-graphite uppercase tracking-widest mb-6 block">
            Operational Paradigm
          </span>
          <h2 className="font-serif-headline text-3xl sm:text-4xl lg:text-5xl text-ink mb-6">
            The engineering studio alternative to traditional agencies.
          </h2>
          <p className="font-sans-body text-base text-graphite leading-relaxed mb-8">
            We reject the bloated account management models of traditional digital agencies. Every project is architected and executed directly by principal engineers under strict fixed-price milestones. You pay for production code, not overhead.
          </p>
        </div>

        {/* Right: Structural Comparison Grid */}
        <div className="lg:col-span-7 w-full editorial-border">
          
          <div className="grid grid-cols-2 editorial-border-b bg-paper">
            <div className="p-4 sm:p-6 editorial-border-r">
              <span className="font-sans-mono text-[10px] text-oxblood font-bold uppercase tracking-widest">
                Axorks Studio Model
              </span>
            </div>
            <div className="p-4 sm:p-6">
              <span className="font-sans-mono text-[10px] text-graphite uppercase tracking-widest">
                Traditional Agency
              </span>
            </div>
          </div>

          {[
            {
              studio: 'Fixed-Price Milestones',
              studioDesc: 'Scope is mathematically locked upfront. Zero hourly billing surprises.',
              agency: 'Hourly Retainers',
              agencyDesc: 'Open-ended billing that penalizes efficiency.'
            },
            {
              studio: '100% Commercial IP',
              studioDesc: 'Immediate transfer of all source code upon milestone completion.',
              agency: 'Hostage Licensing',
              agencyDesc: 'Withheld repositories or punitive buyout clauses.'
            },
            {
              studio: 'Direct Architect Access',
              studioDesc: 'You speak directly with the engineers writing your system.',
              agency: 'Account Managers',
              agencyDesc: 'Non-technical middlemen translating your requirements.'
            },
            {
              studio: 'Verified Staging Output',
              studioDesc: 'You do not pay an invoice until the code is running on staging.',
              agency: 'Upfront Capital Risk',
              agencyDesc: 'Blind payments required before any code is delivered.'
            }
          ].map((item, idx) => (
            <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 editorial-border-b last:border-b-0 bg-paper">
              
              <div className="p-6 sm:p-8 editorial-border-r sm:border-r border-b sm:border-b-0">
                <div className="flex items-start gap-4">
                  <span className="font-sans-mono text-[10px] text-ink mt-1">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-serif-headline text-lg text-ink mb-2">{item.studio}</h3>
                    <p className="font-sans-body text-sm text-graphite leading-relaxed">{item.studioDesc}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-stone/30">
                <div className="flex items-start gap-4 opacity-70">
                  <span className="font-sans-mono text-[10px] text-graphite mt-1">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-serif-headline text-lg text-graphite line-through decoration-1 decoration-graphite/40 mb-2">
                      {item.agency}
                    </h3>
                    <p className="font-sans-body text-sm text-graphite leading-relaxed">{item.agencyDesc}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
