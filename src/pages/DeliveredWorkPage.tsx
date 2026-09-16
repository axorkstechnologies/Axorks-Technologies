import React from 'react';
import { PROJECTS } from '../data/mockData';
import { useRouter } from '../router/Router';
import { ProjectCarousel } from '../components/ProjectCarousel';

export const DeliveredWorkPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="w-full pt-28 pb-20 lg:pb-28 bg-[var(--bg-primary)]">
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[var(--gold)] mb-4">
            <button onClick={() => navigate('/')} className="hover:underline cursor-pointer">Home</button>
            <span>/</span>
            <span>Verified Work</span>
          </div>

          <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Production Artifacts.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            Systems running in production. Built on fixed-price milestones with 100% intellectual property transfer.
          </p>
        </div>
      </section>

      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto space-y-24">
          {PROJECTS.map((project, idx) => (
            <ProjectCarousel
              key={project.id}
              images={project.images}
              projectTitle={project.title}
              
              badgeText={project.tags?.[0]}
              accentColor={idx % 2 === 0 ? 'var(--gold)' : 'var(--emerald)'}
            />
          ))}
        </div>
      </section>
    </div>
  );
};