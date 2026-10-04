import React from 'react';
import { useRouter } from '../router/Router';

export const CareersPage: React.FC = () => {
  const { navigate } = useRouter();

  const openRoles = [
    {
      id: 'ai-architect',
      title: 'AI Automation Architect',
      category: 'Artificial Intelligence',
      experience: '5+ Years',
      description: 'Design and deploy multi-agent LLM systems, RAG architectures, and custom neural networks for enterprise clients.'
    },
    {
      id: 'full-stack-lead',
      title: 'Principal Full-Stack Engineer',
      category: 'Web Engineering',
      experience: '7+ Years',
      description: 'Lead end-to-end architecture for highly scalable SaaS platforms. Expertise in advanced PostgreSQL schema design.'
    },
    {
      id: 'flutter-principal',
      title: 'Senior Flutter Developer',
      category: 'Mobile Engineering',
      experience: '4+ Years',
      description: 'Build native-feeling iOS and Android systems. Advanced state management and offline-first database synchronization.'
    }
  ];

  return (
    <div className="w-full pt-32 pb-20 lg:pt-48 lg:pb-32 surface-light min-h-screen">
      
      {/* Hero */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto mb-32">
        <div className="flex items-center gap-4 mb-12">
          <button onClick={() => navigate('/')} className="font-sans-mono text-[var(--color-text-secondary-light)] hover:text-[var(--color-text-primary-light)] transition-colors">Home</button>
          <span className="text-[var(--color-text-secondary-light)]">/</span>
          <span className="font-sans-mono text-[var(--color-text-primary-light)]">Careers</span>
        </div>

        <h1 className="font-serif-display text-5xl sm:text-6xl lg:text-8xl text-[var(--color-text-primary-light)] leading-[1.05] mb-12 max-w-5xl">
          We only hire senior practitioners.
        </h1>

        <p className="font-sans-body text-xl lg:text-2xl text-[var(--color-text-secondary-light)] max-w-3xl leading-relaxed">
          Axorks is an engineering studio, not a typical agency. We operate with zero junior delegation and zero non-technical layers. If you are an architect who writes production code, you belong here.
        </p>
      </section>

      {/* Core Tenets */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-clay)] border border-light">
          {[
            {
              title: "Direct Authority",
              desc: "You interface directly with founders and enterprise leaders. No account managers translating your technical decisions."
            },
            {
              title: "No Hourly Tracking",
              desc: "We sell outcomes, not hours. Your performance is measured by the quality of your code and milestone delivery."
            },
            {
              title: "Deep Specialization",
              desc: "You are not expected to be a generalist. We hire deeply specialized talent in AI, Web3, and Full-Stack."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-10 lg:p-16 surface-light">
              <div className="w-12 h-px bg-[var(--color-bronze-light)] mb-10" />
              <h3 className="font-serif-headline text-3xl text-[var(--color-text-primary-light)] mb-6">{item.title}</h3>
              <p className="font-sans-body text-lg text-[var(--color-text-secondary-light)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Roles */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto mb-32">
        <div className="mb-20">
          <span className="font-sans-mono text-[var(--color-bronze-light)] mb-6 block">
            Current Openings
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-[var(--color-text-primary-light)]">
            Roles in Karachi & Islamabad
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--color-clay)] border border-light">
          {openRoles.map((role) => (
            <div key={role.id} className="p-10 lg:p-16 surface-light flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-10">
                  <span className="font-sans-mono text-[var(--color-text-secondary-light)] block">
                    {role.category}
                  </span>
                  <span className="px-4 py-2 bg-[var(--color-parchment)] text-[var(--color-text-primary-light)] font-sans-mono border border-light">
                    {role.experience}
                  </span>
                </div>
                
                <h3 className="font-serif-headline text-3xl sm:text-4xl text-[var(--color-text-primary-light)] mb-8">
                  {role.title}
                </h3>

                <p className="font-sans-body text-lg text-[var(--color-text-secondary-light)] leading-relaxed mb-16">
                  {role.description}
                </p>
              </div>

              <a 
                href="mailto:careers@axorks.com"
                className="font-sans-mono text-[var(--color-text-primary-light)] border-b border-[var(--color-text-primary-light)] pb-2 w-max hover:text-[var(--color-bronze)] hover:border-[var(--color-bronze)] transition-colors"
              >
                Apply via Email
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Hiring Process */}
      <div className="surface-dark texture-noise w-full border-y border-dark">
        <section className="w-full py-32 lg:py-40 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
          <div className="max-w-3xl mb-24">
            <h2 className="font-serif-display text-5xl sm:text-6xl text-[var(--color-text-primary-dark)] mb-10 leading-[1.1]">
              Transparent Evaluation.
            </h2>
            <p className="font-sans-body text-xl text-[var(--color-text-secondary-dark)] leading-relaxed">
              We respect your time. Our hiring protocol is entirely technical and transparent. No brain-teasers, no whiteboard algorithms—just real system architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { step: '01', title: 'Code Review', desc: 'Submit an open-source PR, personal repository, or past project for our architects to review.' },
              { step: '02', title: 'Architecture Call', desc: 'A 45-minute deep technical discussion regarding your stack, state management, and cloud infrastructure.' },
              { step: '03', title: 'Paid Trial', desc: 'A short, paid freelance milestone to evaluate communication and production code quality.' },
              { step: '04', title: 'Direct Offer', desc: 'Immediate offer for a full-time senior role at our Karachi or Islamabad offices.' }
            ].map((item, idx) => (
              <div key={idx} className="border-t border-dark pt-8">
                <div className="font-sans-mono text-2xl text-[var(--color-text-secondary-dark)] mb-8">{item.step}</div>
                <h4 className="font-serif-headline text-2xl text-[var(--color-text-primary-dark)] mb-6">{item.title}</h4>
                <p className="font-sans-body text-base text-[var(--color-text-secondary-dark)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

    </div>
  );
};
