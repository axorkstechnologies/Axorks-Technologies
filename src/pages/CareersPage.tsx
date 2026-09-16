import React from 'react';
import { useRouter } from '../router/Router';
import { ArrowRight, Code2, Cpu, Smartphone, Database, TerminalSquare, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const CareersPage: React.FC = () => {
  const { navigate } = useRouter();

  const openRoles = [
    {
      id: 'ai-architect',
      title: 'AI Automation Architect',
      category: 'Artificial Intelligence',
      experience: '5+ Years',
      icon: <Cpu className="w-5 h-5 text-[var(--emerald)]" />,
      description: 'Design and deploy multi-agent LLM systems, RAG architectures, and custom neural networks for enterprise clients. Strong Python, LangChain, and PyTorch foundation required.'
    },
    {
      id: 'full-stack-lead',
      title: 'Principal Full-Stack Engineer',
      category: 'Web Engineering',
      experience: '7+ Years',
      icon: <Database className="w-5 h-5 text-[#0284C7]" />,
      description: 'Lead end-to-end architecture for highly scalable SaaS platforms. Deep expertise in React, Next.js, Node.js, and advanced PostgreSQL schema design.'
    },
    {
      id: 'flutter-principal',
      title: 'Senior Flutter Developer',
      category: 'Mobile Engineering',
      experience: '4+ Years',
      icon: <Smartphone className="w-5 h-5 text-[#7C3AED]" />,
      description: 'Build native-feeling iOS and Android systems. Advanced state management, custom painting, platform channels, and offline-first database synchronization.'
    }
  ];

  return (
    <div className="w-full pt-28 pb-20 lg:pb-32 bg-[var(--bg-primary)]">
      
      {/* 1. Hero (Light, Color-Rich Premium) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 text-xs font-mono-code text-[var(--gold)] mb-6">
              <button onClick={() => navigate('/')} className="hover:underline cursor-pointer">Home</button>
              <span>/</span>
              <span>Careers</span>
            </div>

            <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.1] mb-8">
              We only hire <br className="hidden lg:block" />
              senior practitioners.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] max-w-3xl leading-relaxed font-normal">
              Axorks is an engineering studio, not a typical agency. We operate with zero junior delegation and zero non-technical layers. If you are an architect who writes production code, you belong here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Core Tenets */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-[var(--bg-secondary)] border-y border-[var(--glass-border)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {[
            {
              title: "Direct Client Authority",
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
            <div key={idx} className="relative">
              <div className="w-12 h-1 bg-[var(--gold)] mb-6" />
              <h3 className="font-headline text-lg font-bold text-[var(--text-primary)] mb-3">{item.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Open Roles */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="font-mono-code text-[10px] font-bold tracking-widest uppercase text-[var(--emerald)] mb-4 block">
              Current Openings
            </span>
            <h2 className="font-display-hero text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Roles in Karachi & Islamabad
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openRoles.map((role) => (
              <motion.div 
                key={role.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-[var(--glass-border)] rounded-3xl p-8 sm:p-10 spatial-card shadow-sm group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-[var(--bg-primary)] rounded-xl border border-[var(--glass-border)] group-hover:scale-110 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                    {role.icon}
                  </div>
                  <span className="px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-primary)] text-[10px] font-mono-code uppercase font-bold tracking-wider rounded-md border border-[var(--glass-border)]">
                    {role.experience}
                  </span>
                </div>
                
                <div className="mb-6">
                  <span className="text-[10px] font-mono-code text-[var(--text-muted)] font-bold uppercase tracking-wider mb-2 block">
                    {role.category}
                  </span>
                  <h3 className="font-headline text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                    {role.title}
                  </h3>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8 h-auto lg:h-16">
                  {role.description}
                </p>

                <a 
                  href="mailto:careers@axorks.com"
                  className="inline-flex items-center gap-2 text-xs font-headline font-bold text-[var(--text-primary)] uppercase tracking-wider hover:text-[var(--gold)] transition-colors"
                >
                  Apply via Email <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Hiring Process (Dark Punctuation) */}
      <div className="dark-surface">
        <section className="w-full bg-[var(--bg-primary)] py-20 lg:py-28 relative border-t border-[var(--glass-border)] overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--gold)]/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl mb-16">
              <h2 className="font-display-hero text-3xl sm:text-4xl font-extrabold text-white mb-6">
                Transparent Evaluation.
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                We respect your time. Our hiring protocol is entirely technical and transparent. No brain-teasers, no whiteboard algorithms—just real system architecture.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Code Review', desc: 'Submit an open-source PR, personal repository, or past project for our architects to review.' },
                { step: '02', title: 'Architecture Call', desc: 'A 45-minute deep technical discussion regarding your stack, state management, and cloud infrastructure.' },
                { step: '03', title: 'Paid Trial', desc: 'A short, paid freelance milestone to evaluate communication and production code quality.' },
                { step: '04', title: 'Direct Offer', desc: 'Immediate offer for a full-time senior role at our Karachi or Islamabad offices.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-[var(--bg-secondary)] border border-white/5 p-6 rounded-2xl">
                  <div className="text-[var(--gold)] font-mono-code text-sm font-bold mb-4">{item.step}</div>
                  <h4 className="font-headline text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};
