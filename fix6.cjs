const fs = require('fs');

let globalDeliveryCode = fs.readFileSync('src/components/GlobalDelivery.tsx', 'utf8');

// The section is currently bg-[var(--bg-primary)] which maps to light. We need to wrap it in `.dark-surface`
// However, since it's a standalone component, we can either wrap its internal `<section>` with `.dark-surface`, 
// or let the caller (HomePage) do it. Wrapping inside `GlobalDelivery.tsx` is better so it always appears dark.

// First, wrap the return inside <div className="dark-surface"> ... </div>
globalDeliveryCode = globalDeliveryCode.replace(
  /<section className="w-full bg-\\[var\(--bg-primary\)\\] py-20 lg:py-28 relative border-t border-\\[var\(--glass-border\)\\]" id="global-delivery">/,
  `<div className="dark-surface">
    <section className="w-full bg-[var(--bg-primary)] py-20 lg:py-28 relative border-y border-white/10" id="global-delivery">`
);

// Close the wrapper
globalDeliveryCode = globalDeliveryCode.replace(
  /<\/section>\s*<\/div>\s*<\/section>\s*\);\s*};/m, // Wait, regex is risky. Let's do simple string replace at the end
  ''
); // Actually let's just do a clean replace

const replacement = `
    <div className="dark-surface">
      <section className="w-full bg-[var(--bg-primary)] py-20 lg:py-28 relative border-y border-white/10" id="global-delivery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left: Milestone Process */}
            <div className="lg:col-span-5">
              <span className="font-mono-code text-[10px] font-bold tracking-widest uppercase text-[var(--gold)] mb-4 block">
                Delivery Protocol
              </span>
              <h2 className="font-display-hero text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight mb-8">
                Predictable milestone execution.
              </h2>
              
              <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-3.5 before:w-px before:bg-white/10">
                {[
                  { step: '01', title: 'Technical Discovery', desc: 'Direct technical scoping with senior architects. No sales pitches.' },
                  { step: '02', title: '24-Hour Proposal', desc: 'Fixed-price contract, rigid timeline, and milestone definitions delivered in 24 hours.' },
                  { step: '03', title: 'Staging Verification', desc: 'You test functioning software on live staging servers before any milestone invoice is paid.' },
                  { step: '04', title: 'IP Handover', desc: 'Production deployment and 100% commercial intellectual property transfer.' }
                ].map((item, idx) => (
                  <div key={idx} className="relative pl-10">
                    <div className="absolute left-0 top-0.5 w-7 h-7 bg-[var(--bg-secondary)] border border-white/10 rounded-full flex items-center justify-center font-mono-code text-[10px] font-bold text-[var(--text-primary)] shadow-sm">
                      {item.step}
                    </div>
                    <h4 className="font-headline text-sm font-bold text-[var(--text-primary)] uppercase tracking-wide mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Global Reach & Offices */}
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="bg-[var(--bg-secondary)] border border-white/5 p-8 sm:p-10 rounded-3xl spatial-card shadow-lg">
                <Globe className="w-10 h-10 text-[#0284C7] mb-6" />
                <h3 className="font-display-hero text-2xl font-bold text-[var(--text-primary)] mb-4">
                  Global delivery. Local proximity.
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8">
                  Operating from registered offices in Karachi and Islamabad, we provide a massive strategic advantage to international founders. You get elite engineering talent without the Western agency premium, secured by strict IP laws and immediate time-zone overlap.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center gap-2 mb-2 text-[var(--emerald)]">
                      <Clock className="w-4 h-4" />
                      <span className="font-headline text-xs font-bold uppercase tracking-wider">GCC Markets</span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Near-zero time delta (1-2 hours) with Saudi Arabia, UAE, Kuwait, and Bahrain. Rapid synchronous execution.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center gap-2 mb-2 text-[var(--gold)]">
                      <MapPin className="w-4 h-4" />
                      <span className="font-headline text-xs font-bold uppercase tracking-wider">US, UK & Europe</span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Overlapping operational windows for daily stand-ups and continuous deployment pipelines while you sleep.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                  <span className="text-xs font-mono-code text-[var(--text-muted)] font-semibold">Offices:</span>
                  <span className="text-xs font-headline font-bold text-[var(--text-primary)] uppercase tracking-wider bg-white/10 px-3 py-1.5 rounded-md">Karachi</span>
                  <span className="text-xs font-headline font-bold text-[var(--text-primary)] uppercase tracking-wider bg-white/10 px-3 py-1.5 rounded-md">Islamabad</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};
`
globalDeliveryCode = globalDeliveryCode.substring(0, globalDeliveryCode.indexOf('<section className="w-full')) + replacement;
fs.writeFileSync('src/components/GlobalDelivery.tsx', globalDeliveryCode);

console.log('GlobalDelivery set to dark-surface');
