import React from 'react';
import { PROJECTS, CLIENT_STORIES } from '../data/mockData';

export const EvidenceEngine: React.FC = () => {
  return (
    <section className="w-full py-32 lg:py-48 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto surface-light texture-noise">
      
      <div className="mb-24 md:mb-32 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <span className="w-8 h-px bg-[var(--color-clay)]"></span>
          <span className="font-sans-mono text-[var(--color-text-secondary-light)]">
            Verified Deployments
          </span>
        </div>
        <h2 className="font-serif-display text-5xl sm:text-6xl lg:text-7xl text-[var(--color-text-primary-light)] leading-[1.05]">
          Architectural rigor proven in production environments.
        </h2>
      </div>

      <div className="flex flex-col gap-32 md:gap-48">
        {PROJECTS.map((project, idx) => {
          const story = CLIENT_STORIES[idx]; 
          return (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              
              {/* Image / Proof Block (Edge-to-Edge Architectural) */}
              <div className={`lg:col-span-7 aspect-[4/3] relative border border-light overflow-hidden bg-[var(--color-parchment)] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                {project.images && project.images[0] ? (
                  <img 
                    src={project.images[0]?.src} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-sans-mono text-[var(--color-text-secondary-light)]">
                    Artifact Not Found
                  </div>
                )}
                <div className="absolute top-0 left-0 bg-[var(--color-obsidian)] text-[var(--color-alabaster)] px-4 py-2 font-sans-mono border-b border-r border-dark">
                  0{idx + 1}
                </div>
              </div>

              {/* Editorial Text Block */}
              <div className={`lg:col-span-5 flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                
                <h3 className="font-serif-headline text-4xl sm:text-5xl text-[var(--color-text-primary-light)] mb-8">
                  {project.title}
                </h3>
                
                <div className="mb-10 pl-6 border-l-2 border-[var(--color-bronze)]">
                  <p className="font-sans-body text-lg text-[var(--color-text-secondary-light)] leading-relaxed">
                    {story?.solution || project.tagline}
                  </p>
                </div>

                <div className="bg-[var(--color-parchment)] p-8 border border-light mb-10">
                  <span className="font-sans-mono text-[var(--color-bronze-light)] block mb-4">
                    Executive Outcome
                  </span>
                  <p className="font-serif-display text-2xl text-[var(--color-text-primary-light)] italic leading-snug mb-6">
                    "{story?.testimonial || 'Deterministic performance achieved through rigid system architecture.'}"
                  </p>
                  <div className="flex flex-col">
                    <span className="font-sans-body font-bold text-[var(--color-text-primary-light)]">{project.clientAuthor}</span>
                    <span className="font-sans-mono text-[var(--color-text-secondary-light)]">{project.clientRole}, {story?.clientName}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.tags?.slice(0, 4).map(tech => (
                    <span key={tech} className="px-4 py-2 border border-light font-sans-mono text-[var(--color-text-primary-light)] bg-transparent">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
