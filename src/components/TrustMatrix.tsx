import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Clock, Code2 } from 'lucide-react';

export const TrustMatrix: React.FC = () => {
  return (
    <section className="w-full bg-[var(--bg-primary)] border-b border-[var(--glass-border)] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Social Proof Logos */}
        <div className="mb-16">
          <p className="font-mono-code text-[10px] text-[var(--text-muted)] font-bold tracking-[0.2em] uppercase text-center mb-8">
            Verified In Production By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:gap-24 opacity-80 grayscale transition-all hover:grayscale-0">
            <img src="/Logos/agrotrace_logo.png" alt="AgroTrace" className="h-8 md:h-10 object-contain hover:scale-105 transition-transform" />
            <img src="/Logos/ipmios_logo.png" alt="IPMI-OS" className="h-8 md:h-10 object-contain hover:scale-105 transition-transform" />
            <img src="/Logos/mediverse_logo.png" alt="MediVerse" className="h-8 md:h-10 object-contain hover:scale-105 transition-transform" />
            <img src="/Logos/fume_logo.jpg" alt="FUME Fragrances" className="h-8 md:h-10 object-contain hover:scale-105 transition-transform rounded-md" />
          </div>
        </div>

        {/* Commercial Risk-Reversal Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            {
              icon: <Target className="w-5 h-5 text-[var(--gold)]" />,
              title: "Fixed-Price Milestones",
              desc: "Proposals within 24h. Projects from ,000. You know the exact investment before any code is written."
            },
            {
              icon: <ShieldCheck className="w-5 h-5 text-[var(--emerald)]" />,
              title: "100% IP Ownership",
              desc: "Complete commercial rights and source code handed over upon project completion. No lock-in."
            },
            {
              icon: <Code2 className="w-5 h-5 text-[#0284C7]" />,
              title: "Pay Post-Verification",
              desc: "Funds are tied strictly to milestones. You inspect working staging builds before invoices are cleared."
            },
            {
              icon: <Clock className="w-5 h-5 text-[#7C3AED]" />,
              title: "Senior Hands Only",
              desc: "Direct execution by lead architects in Karachi & Islamabad. Zero junior delegation or non-technical layers."
            }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col p-6 rounded-2xl bg-white border border-[#0A0F1D]/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 p-2.5 rounded-xl bg-[var(--bg-primary)] inline-flex w-fit">
                {item.icon}
              </div>
              <h3 className="font-headline text-sm font-bold text-[var(--text-primary)] mb-2 uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};