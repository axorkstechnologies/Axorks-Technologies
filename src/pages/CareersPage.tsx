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
      description: 'Design and deploy multi-agent LLM systems, RAG architectures, and custom neural networks for enterprise clients. Strong Python, LangChain, and PyTorch foundation required.'
    },
    {
      id: 'full-stack-lead',
      title: 'Principal Full-Stack Engineer',
      category: 'Web Engineering',
      experience: '7+ Years',
      description: 'Lead end-to-end architecture for highly scalable SaaS platforms. Deep expertise in React, Next.js, Node.js, and advanced PostgreSQL schema design.'
    },
    {
      id: 'flutter-principal',
      title: 'Senior Flutter Developer',
      category: 'Mobile Engineering',
      experience: '4+ Years',
      description: 'Build native-feeling iOS and Android systems. Advanced state management, custom painting, platform channels, and offline-first database synchronization.'
    }
  ];

  return (
    <div className="w-full pt-32 pb-20 lg:pt-40 lg:pb-32 bg-paper">
      
      {/* Hero */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto mb-24">
        <div className="flex items-center gap-4 text-xs font-sans-mono text-graphite mb-10">
          <button onClick={() => navigate('/')} className="hover:text-ink transition-colors uppercase tracking-widest">Home</button>
          <span>/</span>
          <span className="text-ink uppercase tracking-widest">Careers</span>
        </div>

        <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-7xl text-ink leading-[1.1] mb-8 max-w-4xl">
          We only hire senior practitioners.
        </h1>

        <p className="font-sans-body text-base sm:text-lg lg:text-xl text-graphite max-w-2xl leading-relaxed">
          Axorks is an engineering studio, not a typical agency. We operate with zero junior delegation and zero non-technical layers. If you are an architect who writes production code, you belong here.
        </p>
      </section>

      {/* Core Tenets */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 editorial-border bg-stone">
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
            <div key={idx} className="p-8 sm:p-12 editorial-border-r last:border-r-0 bg-paper">
              <div className="w-8 h-px bg-oxblood mb-8" />
              <h3 className="font-serif-headline text-2xl text-ink mb-4">{item.title}</h3>
              <p className="font-sans-body text-sm text-graphite leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Roles */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto mb-24">
        <div className="mb-16">
          <span className="font-sans-mono text-[10px] text-graphite uppercase tracking-widest mb-4 block">
            Current Openings
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-ink">
            Roles in Karachi & Islamabad
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px editorial-border bg-border">
          {openRoles.map((role) => (
            <div key={role.id} className="p-8 sm:p-12 bg-paper flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="font-sans-mono text-[10px] text-graphite uppercase tracking-widest block">
                    {role.category}
                  </span>
                  <span className="px-3 py-1 bg-stone text-ink font-sans-mono text-[10px] uppercase font-bold tracking-widest editorial-border">
                    {role.experience}
                  </span>
                </div>
                
                <h3 className="font-serif-headline text-2xl sm:text-3xl text-ink mb-6">
                  {role.title}
                </h3>

                <p className="font-sans-body text-sm text-graphite leading-relaxed mb-12">
                  {role.description}
                </p>
              </div>

              <a 
                href="mailto:careers@axorks.com"
                className="font-sans-mono text-xs text-ink uppercase tracking-widest editorial-border-b border-ink pb-1 w-max hover:text-oxblood hover:border-oxblood transition-colors"
              >
                Apply via Email
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Hiring Process */}
      <div className="bg-ink text-paper w-full editorial-border-t border-graphite/30">
        <section className="w-full py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="font-serif-display text-3xl sm:text-4xl text-paper mb-6">
              Transparent Evaluation.
            </h2>
            <p className="font-sans-body text-sm text-graphite leading-relaxed">
              We respect your time. Our hiring protocol is entirely technical and transparent. No brain-teasers, no whiteboard algorithms—just real system architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Code Review', desc: 'Submit an open-source PR, personal repository, or past project for our architects to review.' },
              { step: '02', title: 'Architecture Call', desc: 'A 45-minute deep technical discussion regarding your stack, state management, and cloud infrastructure.' },
              { step: '03', title: 'Paid Trial', desc: 'A short, paid freelance milestone to evaluate communication and production code quality.' },
              { step: '04', title: 'Direct Offer', desc: 'Immediate offer for a full-time senior role at our Karachi or Islamabad offices.' }
            ].map((item, idx) => (
              <div key={idx} className="editorial-border-t border-graphite/30 pt-6">
                <div className="font-sans-mono text-sm text-graphite mb-6">{item.step}</div>
                <h4 className="font-serif-headline text-xl text-paper mb-4">{item.title}</h4>
                <p className="font-sans-body text-xs text-graphite leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

    </div>
  );
};
