import React from 'react';
import { Mail, Briefcase, CheckCircle2, ArrowRight, Shield } from 'lucide-react';

interface CareerRole {
  id: string;
  title: string;
  experience: string;
  category: string;
  scope: string;
  requirements: string[];
  accent: 'gold' | 'emerald' | 'violet' | 'cyan' | 'wine';
}

const CAREER_ROLES: CareerRole[] = [
  {
    id: 'bdo-sales',
    title: 'Business Development Officers & Sales Executives',
    experience: 'Minimum 3+ Years Experience',
    category: 'Commercial & Growth',
    scope:
      'Lead international client qualification, enterprise proposal synthesis, and commercial negotiations for bespoke engineering engagements.',
    requirements: [
      'Documented B2B software sales track record with North American and European enterprise clients',
      'Strong technical literacy in custom software, AI automations, and cloud delivery models',
      'Experience authoring milestone-based technical proposals and scope definitions',
    ],
    accent: 'gold',
  },
  {
    id: 'fullstack-dev',
    title: 'Software Engineers / Full-Stack Developers',
    experience: '3–5 Years Experience',
    category: 'Core Engineering',
    scope:
      'Design, architect, and ship high-throughput web applications, microservices, and secure relational database architectures.',
    requirements: [
      'Deep proficiency in TypeScript, React, Next.js, Node.js, and PostgreSQL',
      'Proven expertise designing clean REST and GraphQL APIs with role-based access control',
      'Experience with Docker, CI/CD automated deployment pipelines, and cloud infrastructure',
    ],
    accent: 'emerald',
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Application Developers (Flutter / Native)',
    experience: '3–5 Years Experience',
    category: 'Mobile Engineering',
    scope:
      'Build native-performance cross-platform iOS and Android applications with smooth animations and resilient offline-first data sync.',
    requirements: [
      'Advanced Flutter and Dart architecture (Bloc / Riverpod / clean architecture)',
      'Native iOS/Android platform bridging, background execution, and push notifications',
      'Published production applications on Apple App Store and Google Play Store',
    ],
    accent: 'violet',
  },
  {
    id: 'web-dev',
    title: 'Web Developers',
    experience: '3–5 Years Experience',
    category: 'Frontend & Systems',
    scope:
      'Engineer responsive, accessible, high-performance web interfaces and design systems with micro-interactions and liquid layouts.',
    requirements: [
      'Mastery of modern CSS, Tailwind CSS, semantic HTML5, and Core Web Vitals optimization',
      'Solid component-driven development with React, TypeScript, and state management',
      'Experience implementing complex e-commerce, portal, and dashboard interfaces',
    ],
    accent: 'cyan',
  },
  {
    id: 'ai-engineer',
    title: 'AI Engineers & Neural Networks Engineers',
    experience: '3–5 Years Experience',
    category: 'Applied AI & Neural Systems',
    scope:
      'Architect autonomous multi-agent pipelines, RAG systems, vector embeddings, and domain-specific fine-tuned neural models.',
    requirements: [
      'Hands-on experience with LLM orchestration frameworks, LangChain/LlamaIndex, and Vector DBs',
      'Strong background in PyTorch, Python, model quantization, and production inference optimization',
      'Proven delivery of operational enterprise automation workflows or document intelligence',
    ],
    accent: 'wine',
  },
  {
    id: 'web3-dev',
    title: 'Web3 / Blockchain Developers (including Smart Contracts)',
    experience: '3–5 Years Experience',
    category: 'Decentralized Systems',
    scope:
      'Develop, audit, and deploy secure smart contracts, DeFi protocols, tokenomics architectures, and decentralized integrations.',
    requirements: [
      'Deep expertise in Solidity, Hardhat/Foundry, EVM architecture, and smart contract security',
      'Experience integrating wallet providers, ethers.js/viem, and indexers (The Graph)',
      'Track record of mainnet contract deployments with zero critical vulnerabilities',
    ],
    accent: 'gold',
  },
];

const ACCENT_STYLES: Record<string, { badgeBg: string; badgeColor: string; border: string; glow: string }> = {
  gold: {
    badgeBg: 'rgba(245, 199, 97, 0.12)',
    badgeColor: 'var(--gold)',
    border: 'rgba(245, 199, 97, 0.35)',
    glow: 'rgba(245, 199, 97, 0.25)',
  },
  emerald: {
    badgeBg: 'rgba(16, 185, 129, 0.12)',
    badgeColor: 'var(--emerald)',
    border: 'rgba(16, 185, 129, 0.35)',
    glow: 'rgba(16, 185, 129, 0.25)',
  },
  violet: {
    badgeBg: 'rgba(139, 92, 246, 0.12)',
    badgeColor: 'var(--violet)',
    border: 'rgba(139, 92, 246, 0.35)',
    glow: 'rgba(139, 92, 246, 0.25)',
  },
  cyan: {
    badgeBg: 'rgba(6, 182, 212, 0.12)',
    badgeColor: 'var(--cyan)',
    border: 'rgba(6, 182, 212, 0.35)',
    glow: 'rgba(6, 182, 212, 0.25)',
  },
  wine: {
    badgeBg: 'rgba(190, 18, 60, 0.12)',
    badgeColor: 'var(--wine)',
    border: 'rgba(190, 18, 60, 0.35)',
    glow: 'rgba(190, 18, 60, 0.25)',
  },
};

export const Careers: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative" id="careers">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header — Selective & Professional */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-2 border-[var(--gold)]/30 text-xs uppercase text-[var(--gold)] tracking-widest font-semibold font-mono-code mb-3.5">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Selective Engineering Practice</span>
          </div>

          <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[48px] text-[var(--text-primary)] font-extrabold tracking-tight">
            Professional Practice Opportunities.
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed font-normal">
            AXORKS Technologies maintains a disciplined studio culture centered on architectural rigor, direct client engagement, and high-impact deliverables. We selectively review senior practitioners with verified commercial experience.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-2 border border-[var(--glass-border)] text-xs font-mono-code text-[var(--text-muted)]">
            <Shield className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span>Direct submission to senior leadership:</span>
            <a
              href="mailto:careers@axorks.com?subject=Senior%20Engineering%20Role%20Inquiry%20%E2%80%94%20AXORKS%20Technologies"
              className="text-[var(--gold)] font-bold hover:underline"
            >
              careers@axorks.com
            </a>
          </div>
        </div>

        {/* 6 Career Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 spatial-stage">
          {CAREER_ROLES.map((role) => {
            const style = ACCENT_STYLES[role.accent] || ACCENT_STYLES.gold;

            return (
              <div
                key={role.id}
                className="glass-2 holographic-edge rounded-3xl p-7 flex flex-col justify-between spatial-card relative overflow-hidden transition-all duration-300 group"
              >
                <div>
                  {/* Category & Experience Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[var(--text-muted)]">
                      {role.category}
                    </span>

                    <span
                      className="text-[10px] font-mono-code font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border"
                      style={{
                        backgroundColor: style.badgeBg,
                        color: style.badgeColor,
                        borderColor: style.border,
                      }}
                    >
                      {role.experience}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="font-headline text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-3 leading-snug">
                    {role.title}
                  </h3>

                  {/* Scope Description */}
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 font-normal">
                    {role.scope}
                  </p>

                  {/* Core Requirements */}
                  <div className="space-y-2 pt-1 border-t border-[var(--glass-border)] mb-6">
                    <span className="block text-[11px] font-mono-code uppercase text-[var(--text-muted)] tracking-wider pt-2 font-semibold">
                      Required Background
                    </span>
                    {role.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                        <CheckCircle2
                          className="w-3.5 h-3.5 mt-0.5 shrink-0"
                          style={{ color: style.badgeColor }}
                        />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-4 border-t border-[var(--glass-border)] flex items-center justify-between">
                  <span className="text-[11px] font-mono-code text-[var(--text-muted)]">
                    Direct Partner Review
                  </span>

                  <a
                    href={`mailto:careers@axorks.com?subject=Application:%20${encodeURIComponent(role.title)}%20—%20AXORKS%20Technologies`}
                    className="inline-flex items-center gap-1.5 text-xs font-headline font-bold uppercase tracking-wider transition-colors"
                    style={{ color: style.badgeColor }}
                  >
                    <span>Submit Credentials</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Application Note & Intake Box */}
        <div className="mt-12 rounded-2xl glass-2 p-6 max-w-3xl mx-auto border border-[var(--glass-border)] flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <h4 className="font-headline text-sm font-bold text-[var(--text-primary)]">
              Submitting Your Credentials
            </h4>
            <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-xl">
              Include your CV, GitHub repository or production project links, and documented architectural impact. Every qualifying submission receives a response from leadership.
            </p>
          </div>

          <a
            href="mailto:careers@axorks.com?subject=Senior%20Practice%20Submission%20%E2%80%94%20AXORKS%20Technologies"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] text-xs font-headline font-bold uppercase tracking-wider magnetic-btn shadow-md cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>careers@axorks.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};
