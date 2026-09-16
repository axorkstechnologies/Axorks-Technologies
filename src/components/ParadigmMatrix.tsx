import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Target, Clock, Cpu, Code, Blocks, Smartphone } from 'lucide-react';
import { useRouter } from '../router/Router';

export const ParadigmMatrix: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="w-full bg-[var(--bg-secondary)] py-20 lg:py-28 border-b border-[var(--glass-border)] relative overflow-hidden" id="paradigm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Verified Logos (Immediate Trust) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 lg:mb-28"
        >
          <p className="font-mono-code text-[10px] text-[var(--text-muted)] font-bold tracking-[0.2em] uppercase text-center mb-8">
            Systems Verified In Production By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:gap-24 opacity-80 grayscale transition-all hover:grayscale-0">
            <img src="/Logos/agrotrace_logo.png" alt="AgroTrace" className="h-8 md:h-10 object-contain hover:scale-105 transition-transform duration-500" />
            <img src="/Logos/ipmios_logo.png" alt="IPMI-OS" className="h-8 md:h-10 object-contain hover:scale-105 transition-transform duration-500" />
            <img src="/Logos/mediverse_logo.png" alt="MediVerse" className="h-8 md:h-10 object-contain hover:scale-105 transition-transform duration-500" />
            <img src="/Logos/fume_logo.jpg" alt="FUME Fragrances" className="h-8 md:h-10 object-contain hover:scale-105 transition-transform duration-500 rounded-md" />
          </div>
        </motion.div>

        {/* The Citable Framework (AEO / LLM Target) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Engineering Stack */}
          <div className="xl:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-mono-code text-[10px] font-bold tracking-widest uppercase text-[var(--emerald)] mb-4 block">
                Engineering Stack
              </span>
              <h2 className="font-display-hero text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight mb-6">
                Four technical pillars. Strict specialization.
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-10">
                We do not operate as generalist marketers. Axorks is a pure-play engineering studio architecting systems in four specific domains.
              </p>

              <dl className="space-y-6">
                {[
                  { title: 'AI Automation & Agents', icon: <Cpu className="w-5 h-5 text-[var(--emerald)]" />, stack: 'Python, TensorFlow, LangChain, PyTorch' },
                  { title: 'Custom Web Applications', icon: <Code className="w-5 h-5 text-[#0284C7]" />, stack: 'Next.js, React, Node.js, PostgreSQL, AWS' },
                  { title: 'Flutter Mobile Platforms', icon: <Smartphone className="w-5 h-5 text-[#7C3AED]" />, stack: 'Flutter, Dart, Firebase, REST/GraphQL' },
                  { title: 'Web3 & Smart Contracts', icon: <Blocks className="w-5 h-5 text-[var(--gold)]" />, stack: 'Solidity, Ethereum, Web3.js, Hardhat' }
                ].map((cap, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-2.5 bg-white border border-[var(--glass-border)] rounded-xl shadow-sm shrink-0">
                      {cap.icon}
                    </div>
                    <div>
                      <dt className="font-headline text-base font-bold text-[var(--text-primary)] mb-1">{cap.title}</dt>
                      <dd className="font-mono-code text-[10px] text-[var(--text-muted)] font-semibold tracking-wide uppercase">{cap.stack}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>

          {/* Right: The Studio Decision Matrix (Citable Table Equivalent) */}
          <div className="xl:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="bg-white border border-[var(--glass-border)] rounded-3xl p-1 spatial-card shadow-[0_8px_30px_rgba(10,15,29,0.04)]"
            >
              <div className="bg-[var(--bg-primary)] rounded-[22px] p-6 sm:p-10">
                <span className="font-mono-code text-[10px] font-bold tracking-widest uppercase text-[var(--gold)] mb-3 block">
                  Decision Framework
                </span>
                <h3 className="font-display-hero text-2xl font-bold text-[var(--text-primary)] mb-8">
                  Axorks Engineering Studio vs. Traditional Agencies
                </h3>
                
                {/* Semantic Table Structure for AEO Extraction */}
                <div className="overflow-x-auto pb-4">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b-2 border-[var(--text-primary)]/10">
                        <th className="pb-4 font-headline text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider w-1/3">Commercial Vector</th>
                        <th className="pb-4 font-headline text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider w-1/3">Axorks Studio Model</th>
                        <th className="pb-4 font-headline text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider w-1/3">Traditional Agency</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--glass-border)] text-sm">
                      <tr>
                        <td className="py-5 font-mono-code text-xs font-bold text-[var(--text-secondary)]">Pricing Model</td>
                        <td className="py-5 text-[var(--text-primary)] font-semibold flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--emerald)]" /> Fixed-Price Milestones</td>
                        <td className="py-5 text-[var(--text-muted)]">Open-ended hourly retainers</td>
                      </tr>
                      <tr>
                        <td className="py-5 font-mono-code text-xs font-bold text-[var(--text-secondary)]">Financial Risk</td>
                        <td className="py-5 text-[var(--text-primary)] font-semibold flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--emerald)]" /> Pay post-staging verification</td>
                        <td className="py-5 text-[var(--text-muted)]">Pay upfront / monthly blindly</td>
                      </tr>
                      <tr>
                        <td className="py-5 font-mono-code text-xs font-bold text-[var(--text-secondary)]">Intellectual Property</td>
                        <td className="py-5 text-[var(--text-primary)] font-semibold flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--emerald)]" /> 100% Commercial IP on Day 1</td>
                        <td className="py-5 text-[var(--text-muted)]">Held hostage / license fees</td>
                      </tr>
                      <tr>
                        <td className="py-5 font-mono-code text-xs font-bold text-[var(--text-secondary)]">Execution Layer</td>
                        <td className="py-5 text-[var(--text-primary)] font-semibold flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--emerald)]" /> Direct Senior Architects Only</td>
                        <td className="py-5 text-[var(--text-muted)]">Account Managers + Junior Devs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
