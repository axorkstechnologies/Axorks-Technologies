import React from 'react';
import { PROJECTS } from '../data/mockData';

export const DeliveredWorkPage: React.FC = () => {
  return (
    <div className="w-full pt-32 pb-20 lg:pt-40 lg:pb-32 bg-paper min-h-[80vh]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif-display text-4xl sm:text-5xl text-ink mb-12">Verified Deployments</h1>
        <div className="flex flex-col gap-16 editorial-border-t pt-12">
          {PROJECTS.map((project) => (
             <div key={project.id} className="flex flex-col md:flex-row gap-8 editorial-border-b pb-12">
               <div className="md:w-1/3">
                 <h3 className="font-serif-headline text-2xl text-ink mb-2">{project.title}</h3>
                 <p className="font-sans-mono text-[10px] text-graphite uppercase tracking-widest mb-4">{project.clientAuthor}</p>
               </div>
               <div className="md:w-2/3">
                 <p className="font-sans-body text-sm text-graphite leading-relaxed mb-6">{project.tagline}</p>
                 <div className="flex gap-2 flex-wrap">
                   {project.tags?.slice(0,4).map(t => (
                     <span key={t} className="px-3 py-1 editorial-border font-sans-mono text-[10px] text-graphite uppercase">{t}</span>
                   ))}
                 </div>
               </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};
