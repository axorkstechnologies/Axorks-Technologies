import React from 'react';
import { TEAM_MEMBERS } from '../data/mockData';

export const TeamPage: React.FC = () => {
  return (
    <div className="w-full pt-32 pb-20 lg:pt-40 lg:pb-32 bg-paper min-h-[80vh]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif-display text-4xl sm:text-5xl text-ink mb-12">The Architects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border editorial-border">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="bg-paper p-8 flex flex-col">
              <h3 className="font-serif-headline text-xl text-ink mb-2">{member.name}</h3>
              <p className="font-sans-mono text-[10px] text-graphite uppercase tracking-widest mb-4">
                {member.role}
              </p>
              <p className="font-sans-body text-sm text-graphite leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
