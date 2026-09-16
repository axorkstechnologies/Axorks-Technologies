import React from 'react';
import { PROJECTS, CLIENT_STORIES } from '../data/mockData';
import { ProjectCarousel } from './ProjectCarousel';
import { Quote, ArrowRight } from 'lucide-react';
import { useRouter } from '../router/Router';
import { motion } from 'motion/react';

export const EvidenceEngine: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="w-full bg-[var(--bg-primary)] py-20 lg:py-32" id="evidence">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-24"
        >
          <span className="font-mono-code text-[10px] font-bold tracking-widest uppercase text-[var(--gold)] mb-4 block">
            Contextual Evidence
          </span>
          <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight max-w-3xl leading-tight">
            Production systems engineered for measurable business outcomes.
          </h2>
        </motion.div>

        <div className="space-y-24 lg:space-y-32">
          {PROJECTS.map((project, idx) => {
            const story = CLIENT_STORIES[idx]; // 1:1 mapping mapping perfectly
            const isEven = idx % 2 === 0;

            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col gap-10 lg:gap-16 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}
              >
                
                {/* Left/Right: The UI Artifact (Project Carousel) */}
                <div className="w-full lg:w-[55%] shrink-0">
                  <ProjectCarousel
                    images={project.images}
                    projectTitle={project.title}
                    badgeText={project.tags?.[0]}
                    accentColor={isEven ? 'var(--gold)' : 'var(--emerald)'}
                  />
                </div>

                {/* Right/Left: The Business Outcome (Client Story) */}
                <div className="w-full lg:w-[45%] flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    {story.logo && (
                      <div className="h-8 w-20 flex items-center justify-start shrink-0">
                        <img src={story.logo} alt={story.clientName} className="h-full object-contain grayscale opacity-80" />
                      </div>
                    )}
                    <span className="font-mono-code text-[10px] text-[var(--text-muted)] font-bold tracking-wider uppercase">
                      {story.industry}
                    </span>
                  </div>

                  <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[var(--text-primary)] leading-snug mb-6">
                    "{story.headline}"
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="relative pl-4 border-l-2 border-[var(--glass-border)]">
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        <strong className="text-[var(--text-primary)] font-headline tracking-wide uppercase text-[10px]">The Challenge: </strong>
                        {story.problem}
                      </p>
                    </div>
                    <div className="relative pl-4 border-l-2 border-[var(--emerald)]/30 bg-[var(--emerald)]/[0.02] py-2">
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        <strong className="text-[var(--text-primary)] font-headline tracking-wide uppercase text-[10px]">The Solution: </strong>
                        {story.solution}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[var(--glass-border)]">
                    <div className="relative pl-6 mb-6">
                      <Quote className="absolute left-0 top-0 w-4 h-4 text-[var(--gold)]/50" />
                      <p className="text-sm font-headline italic text-[var(--text-primary)] leading-relaxed mb-4 font-medium">
                        "{story.testimonial}"
                      </p>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-[var(--text-primary)]">{project.clientAuthor}</span>
                        <span className="text-[10px] font-mono-code text-[var(--text-muted)] uppercase tracking-wide">{project.clientRole}</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => navigate('/contact')}
                      className="group inline-flex items-center gap-2 text-xs font-headline font-bold text-[var(--text-primary)] uppercase tracking-wider hover:text-[var(--gold)] transition-colors"
                    >
                      Request Similar Architecture 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
