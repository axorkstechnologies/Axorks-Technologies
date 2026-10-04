import React from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { useRouter } from '../router/Router';

export const StudioTeam: React.FC = () => {
  const { navigate } = useRouter();
  const leadership = TEAM_MEMBERS.slice(0, 4);

  return (
    <section className="w-full py-32 lg:py-48 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto surface-light">
      
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-px bg-[var(--color-clay)]"></span>
            <span className="font-sans-mono text-[var(--color-text-secondary-light)]">
              The Architects
            </span>
          </div>
          <h2 className="font-serif-display text-5xl sm:text-6xl lg:text-7xl text-[var(--color-text-primary-light)] leading-[1.05] mb-8">
            Engineered by senior practitioners.
          </h2>
          <p className="font-sans-body text-xl text-[var(--color-text-secondary-light)] leading-relaxed max-w-2xl">
            We do not employ junior developers or account managers. Every system is built directly by domain experts in AI, Full-Stack, and Web3 architectures.
          </p>
        </div>
        <button
          onClick={() => navigate('/team')}
          className="font-sans-mono text-[var(--color-text-primary-light)] border-b border-[var(--color-text-primary-light)] pb-2 hover:text-[var(--color-bronze)] hover:border-[var(--color-bronze)] transition-colors"
        >
          View Full Roster
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-clay)] border border-light">
        {leadership.map((member) => (
          <div key={member.id} className="surface-light flex flex-col h-full group">
            <div className="w-full aspect-[4/5] relative overflow-hidden bg-[var(--color-parchment)]">
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name}
                  className={`w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 ${
                    member.name === 'Yousuf' ? 'object-[26%_40%]' : 'object-center'
                  }`}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-sans-mono text-[var(--color-text-secondary-light)]">
                  Image Unavailable
                </div>
              )}
            </div>
            <div className="p-8 border-t border-light">
              <h3 className="font-serif-headline text-3xl text-[var(--color-text-primary-light)] mb-3">{member.name}</h3>
              <p className="font-sans-mono text-[var(--color-bronze-light)] mb-6">
                {member.role}
              </p>
              <p className="font-sans-body text-base text-[var(--color-text-secondary-light)] leading-relaxed line-clamp-3">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
