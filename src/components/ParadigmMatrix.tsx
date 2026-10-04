import React from 'react';

export const ParadigmMatrix: React.FC = () => {
  return (
    <section className="w-full py-24 lg:py-40 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto surface-dark border-b border-dark">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 xl:gap-24 items-start">
        
        {/* Left: Manifesto */}
        <div className="xl:col-span-5">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-px bg-[var(--color-bronze)]"></span>
            <span className="font-sans-mono text-[var(--color-bronze)]">
              Operational Paradigm
            </span>
          </div>
          <h2 className="font-serif-headline text-4xl sm:text-5xl lg:text-6xl text-[var(--color-text-primary-dark)] mb-8 leading-[1.1]">
            The engineering studio alternative.
          </h2>
          <p className="font-sans-body text-lg text-[var(--color-text-secondary-dark)] leading-relaxed mb-8">
            We reject the bloated account management models of traditional digital agencies. Every platform is architected and executed directly by principal engineers under strict fixed-price milestones. 
          </p>
          <p className="font-sans-body text-lg text-[var(--color-text-primary-dark)] leading-relaxed">
            You pay for production code, not overhead.
          </p>
        </div>

        {/* Right: Structural Comparison */}
        <div className="xl:col-span-7 w-full border border-dark">
          
          <div className="grid grid-cols-2 border-b border-dark surface-dark-elevated">
            <div className="p-6 sm:p-8 border-r border-dark">
              <span className="font-sans-mono text-[var(--color-text-primary-dark)] font-bold">
                Axorks Studio Model
              </span>
            </div>
            <div className="p-6 sm:p-8">
              <span className="font-sans-mono text-[var(--color-text-secondary-dark)]">
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
            }
          ].map((item, idx) => (
            <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 border-b border-dark last:border-b-0 surface-dark">
              
              <div className="p-8 border-r border-dark border-b sm:border-b-0 relative">
                <div className="absolute top-8 right-8 text-[var(--color-text-secondary-dark)] font-sans-mono opacity-30">
                  0{idx + 1}
                </div>
                <h3 className="font-serif-headline text-2xl text-[var(--color-text-primary-dark)] mb-4">{item.studio}</h3>
                <p className="font-sans-body text-base text-[var(--color-text-secondary-dark)] leading-relaxed pr-8">{item.studioDesc}</p>
              </div>

              <div className="p-8 surface-dark-elevated">
                <h3 className="font-serif-headline text-2xl text-[var(--color-text-secondary-dark)] line-through decoration-1 decoration-[var(--color-border-dark)] mb-4">
                  {item.agency}
                </h3>
                <p className="font-sans-body text-base text-[var(--color-text-secondary-dark)] opacity-70 leading-relaxed">{item.agencyDesc}</p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
