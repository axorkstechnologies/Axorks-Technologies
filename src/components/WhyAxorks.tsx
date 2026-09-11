import React from 'react';
import { WHY_ITEMS } from '../data/mockData';
import { Tag, ShieldCheck, Users, Building2, Clock, Key, CheckCircle, MapPin, Sparkles } from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string; style?: React.CSSProperties }>> = {
  Tag, ShieldCheck, Users, Building2, Clock, Key,
};

const ACCENTS: Record<string, { color: string; border: string; bg: string }> = {
  gold: { color: '#F5C761', border: 'border-[#F5C761]/30', bg: 'rgba(245, 199, 97, 0.12)' },
  emerald: { color: '#10B981', border: 'border-[#10B981]/30', bg: 'rgba(16, 185, 129, 0.12)' },
  violet: { color: '#8B5CF6', border: 'border-[#8B5CF6]/30', bg: 'rgba(139, 92, 246, 0.12)' },
  wine: { color: '#BE123C', border: 'border-[#BE123C]/30', bg: 'rgba(190, 18, 60, 0.12)' },
};

export const WhyAxorks: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative bg-[var(--bg-secondary)]/30 border-y border-white/[0.06]" id="why-axorks">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header — Commercial Transparency */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-2 border-[#F5C761]/30 text-xs uppercase text-[#F5C761] tracking-widest font-semibold font-mono-code mb-3.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Commercial Transparency</span>
          </div>

          <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[48px] text-[var(--text-primary)] font-extrabold tracking-tight">
            Predictable Delivery. Zero Surprises.
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed font-normal">
            Why growing companies choose AXORKS over traditional agency markups or unvetted freelancers. Clear proposals, direct builder communication, and milestone accountability.
          </p>
        </div>

        {/* 6 Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 spatial-stage">
          {WHY_ITEMS.map((item) => {
            const IconComponent = ICON_MAP[item.icon] || Tag;
            const accent = ACCENTS[item.accent] || ACCENTS.gold;

            return (
              <div
                key={item.id}
                className="glass-2 holographic-edge rounded-3xl p-7 flex flex-col justify-between spatial-card relative overflow-hidden"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: accent.bg,
                      border: `1px solid ${accent.color}40`,
                    }}
                  >
                    <IconComponent className="w-5 h-5" style={{ color: accent.color }} />
                  </div>

                  <h3
                    className="font-headline text-lg sm:text-xl font-bold mb-2 tracking-tight"
                    style={{ color: accent.color }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono-code text-[var(--text-muted)]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Standard Contract Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Office Verification Card */}
        <div className="mt-12 rounded-3xl overflow-hidden glass-2 holographic-edge max-w-5xl mx-auto shadow-2xl spatial-card">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
            <div className="md:col-span-7 relative h-[260px] sm:h-[320px] overflow-hidden bg-[#030712]">
              <img
                src="/Images/Axorks_Office.jpeg"
                alt="AXORKS Technologies engineering studio in Karachi and Islamabad"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-transparent to-transparent md:hidden" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#030712] hidden md:block" />

              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#030712]/85 backdrop-blur-xl border border-[#10B981]/40 text-[#6EE7B7] text-[11px] font-mono-code flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  Real Physical Offices
                </span>
              </div>
            </div>

            <div className="md:col-span-5 p-6 sm:p-8 lg:p-10 space-y-4">
              <div className="text-[11px] uppercase tracking-wider font-mono-code text-[#F5C761] font-semibold">
                Registered Corporate Entity
              </div>

              <h3 className="font-display-hero text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                Axorks Pvt Limited
              </h3>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Registered private software company operating real engineering offices in Karachi &amp; Islamabad, Pakistan. Serving clients worldwide.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/[0.06] text-xs font-mono-code text-[var(--text-muted)]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Karachi: Commercial Tech Sector</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  <span>Islamabad: Blue Area Business Zone</span>
                </div>
              </div>

              <div className="pt-1">
                <a
                  href="https://wa.me/923141030223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-headline font-bold uppercase tracking-wider text-[#F5C761] hover:underline"
                >
                  <span>Connect with Engineering on WhatsApp &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
