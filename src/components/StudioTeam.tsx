import React from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { useRouter } from '../router/Router';

export const StudioTeam: React.FC = () => {
  const { navigate } = useRouter();

  const leadership = TEAM_MEMBERS.slice(0, 4);

  return (
    <section className="w-full py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto bg-paper">
      
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <span className="font-sans-mono text-[10px] text-graphite uppercase tracking-widest mb-6 block">
            The Architects
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.1] mb-6">
            Engineered by senior practitioners.
          </h2>
          <p className="font-sans-body text-base text-graphite leading-relaxed">
            We do not employ junior developers or account managers. Every system is built directly by domain experts in AI, Full-Stack, and Web3 architectures.
          </p>
        </div>
        <button
          onClick={() => navigate('/team')}
          className="font-sans-mono text-xs text-ink uppercase tracking-widest editorial-border-b border-ink pb-1 hover:text-oxblood hover:border-oxblood transition-colors"
        >
          View Full Roster
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border editorial-border">
        {leadership.map((member) => (
          <div key={member.id} className="bg-paper flex flex-col h-full group">
            <div className="w-full aspect-square relative overflow-hidden bg-stone">
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name}
                  className={`w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 ${
                    member.name === 'Yousuf' ? 'object-[26%_40%]' : 'object-center'
                  }`}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-sans-mono text-[10px] text-graphite">
                  No Image Available
                </div>
              )}
            </div>
            <div className="p-6 editorial-border-t">
              <h3 className="font-serif-headline text-xl text-ink mb-2">{member.name}</h3>
              <p className="font-sans-mono text-[10px] text-graphite uppercase tracking-widest mb-4">
                {member.role}
              </p>
              <p className="font-sans-body text-sm text-graphite leading-relaxed line-clamp-3">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
