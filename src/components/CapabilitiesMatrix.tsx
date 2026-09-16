import React from 'react';
import { SERVICES } from '../data/mockData';
import { ArrowRight, Cpu, Code, Smartphone, Blocks, CheckCircle2 } from 'lucide-react';
import { useRouter } from '../router/Router';

export const CapabilitiesMatrix: React.FC = () => {
  const { navigate } = useRouter();

  const capabilities = [
    {
      id: 'ai-sys',
      title: 'AI Automation & Agents',
      icon: <Cpu className="w-5 h-5 text-[var(--emerald)]" />,
      stack: 'Python, TensorFlow, LangChain, OpenAI, PyTorch',
      useCase: 'Eliminate manual workflows and automate complex decision-making with multi-agent systems.'
    },
    {
      id: 'web-apps',
      title: 'Custom Web Applications',
      icon: <Code className="w-5 h-5 text-[#0284C7]" />,
      stack: 'Next.js, React, Node.js, PostgreSQL, AWS',
      useCase: 'High-performance enterprise dashboards, SaaS platforms, and secure B2B portals.'
    },
    {
      id: 'mobile',
      title: 'Flutter Mobile Platforms',
      icon: <Smartphone className="w-5 h-5 text-[#7C3AED]" />,
      stack: 'Flutter, Dart, Firebase, REST/GraphQL APIs',
      useCase: 'Native iOS and Android applications built from a single high-performance codebase.'
    },
    {
      id: 'web3',
      title: 'Web3 & Smart Contracts',
      icon: <Blocks className="w-5 h-5 text-[var(--gold)]" />,
      stack: 'Solidity, Ethereum, Web3.js, Hardhat',
      useCase: 'Secure decentralized applications, tokenomics architecture, and ledger integrations.'
    }
  ];

  return (
    <section className="w-full bg-[var(--bg-secondary)] py-20 lg:py-28" id="capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* AEO/LLM Citable Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono-code text-[10px] font-bold tracking-widest uppercase text-[var(--text-muted)] mb-4 block">
            Technical Architecture
          </span>
          <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mb-6 leading-tight">
            Engineering capabilities defined by technical depth.
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            We do not operate as generalist marketers. Axorks is a pure-play engineering studio. 
            We architect and deploy production-grade software using strict frameworks across four technical pillars.
          </p>
        </div>

        {/* Semantic Definition List for LLMs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <dl className="space-y-6">
            {capabilities.map((cap) => (
              <div key={cap.id} className="p-6 sm:p-8 bg-white border border-[var(--glass-border)] rounded-2xl shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
                  {cap.icon}
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[var(--bg-primary)] rounded-lg">
                    {cap.icon}
                  </div>
                  <dt className="font-headline text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                    {cap.title}
                  </dt>
                </div>
                
                <dd>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {cap.useCase}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-mono-code text-[var(--text-primary)] font-semibold bg-[var(--bg-primary)] px-3 py-2 rounded-md w-fit">
                    <span className="text-[var(--text-muted)]">Stack:</span> {cap.stack}
                  </div>
                </dd>
              </div>
            ))}
          </dl>

          {/* Decision Matrix: Agency vs Studio */}
          <div className="lg:pl-8">
            <div className="p-8 sm:p-10 bg-[#0A0F1D] text-white rounded-3xl spatial-card relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--gold)] via-[var(--emerald)] to-[#0284C7]" />
              
              <h3 className="font-display-hero text-2xl font-bold mb-8">The Studio Difference</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[var(--emerald)] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-headline text-sm font-bold text-white uppercase tracking-wider mb-1">No Hourly Retainers</h4>
                    <p className="text-xs text-[var(--text-muted-dark)] leading-relaxed">Scope is locked upfront. You never pay for our learning curve or idle hours.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[var(--emerald)] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-headline text-sm font-bold text-white uppercase tracking-wider mb-1">Zero Non-Technical Layers</h4>
                    <p className="text-xs text-[var(--text-muted-dark)] leading-relaxed">No account managers. You interface directly with the architects writing your system.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[var(--emerald)] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-headline text-sm font-bold text-white uppercase tracking-wider mb-1">Milestone Verification</h4>
                    <p className="text-xs text-[var(--text-muted-dark)] leading-relaxed">Payments are locked to delivered, functional staging builds. Total financial safety.</p>
                  </div>
                </li>
              </ul>

              <button 
                onClick={() => navigate('/services')}
                className="mt-10 inline-flex items-center gap-2 text-sm font-headline font-bold text-[var(--gold)] hover:text-white transition-colors"
              >
                View full service catalog <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};