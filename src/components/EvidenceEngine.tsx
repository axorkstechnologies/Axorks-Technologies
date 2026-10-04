import React from 'react';
import { PROJECTS, CLIENT_STORIES } from '../data/mockData';

export const EvidenceEngine: React.FC = () => {
  return (
    <section className="w-full py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto bg-paper">
      
      <div className="mb-20 max-w-2xl">
        <span className="font-sans-mono text-[10px] text-graphite uppercase tracking-widest mb-6 block">
          Verified Deployments
        </span>
        <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.1] mb-6">
          Architectural rigor proven in production environments.
        </h2>
      </div>

      <div className="flex flex-col gap-32">
        {PROJECTS.map((project, idx) => {
          const story = CLIENT_STORIES[idx]; 
          return (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
              
              {/* Image / Proof Block (No rounded corners, pure structural) */}
              <div className="lg:col-span-7 bg-stone editorial-border p-4 sm:p-8 flex flex-col justify-center relative">
                <div className="absolute top-4 left-4 font-sans-mono text-[10px] text-graphite uppercase tracking-widest">
                  Artifact {idx + 1}.0
                </div>
                {/* Embedded Video/Image */}
                <div className="w-full aspect-[4/3] sm:aspect-video relative overflow-hidden mt-8">
                  {project.images && project.images[0] ? (
                    <img 
                      src={project.images[0]?.src} 
                      alt={project.title}
                      className="w-full h-full object-cover object-top editorial-border"
                    />
                  ) : (
                    <div className="w-full h-full bg-graphite/10 flex items-center justify-center font-sans-mono text-xs text-graphite">
                      System Interface Preview
                    </div>
                  )}
                </div>
              </div>

              {/* Editorial Text Block */}
              <div className="lg:col-span-5 flex flex-col justify-center py-6">
                
                <h3 className="font-serif-headline text-3xl sm:text-4xl text-ink mb-6">
                  {project.title}
                </h3>
                
                <div className="mb-8 editorial-border-l pl-6 border-graphite/30">
                  <span className="font-sans-mono text-[10px] text-graphite uppercase tracking-widest block mb-2">
                    System Architecture
                  </span>
                  <p className="font-sans-body text-sm text-graphite leading-relaxed">
                    {story?.solution || project.tagline}
                  </p>
                </div>

                <div className="bg-stone/50 p-6 editorial-border">
                  <span className="font-sans-mono text-[10px] text-oxblood uppercase tracking-widest block mb-4">
                    Executive Outcome
                  </span>
                  <p className="font-serif-display text-xl text-ink italic leading-snug mb-4">
                    "{story?.testimonial || 'Significant operational efficiency achieved through deterministic software architecture.'}"
                  </p>
                  <div className="flex flex-col">
                    <span className="font-sans-body font-semibold text-sm text-ink">{project.clientAuthor}</span>
                    <span className="font-sans-mono text-[10px] text-graphite uppercase">{project.clientRole}, {story?.clientName}</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags?.slice(0, 4).map(tech => (
                    <span key={tech} className="px-3 py-1 editorial-border font-sans-mono text-[10px] text-graphite uppercase bg-paper">
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
