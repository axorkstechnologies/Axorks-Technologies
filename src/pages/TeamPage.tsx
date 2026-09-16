import React from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { useRouter } from '../router/Router';
import { Linkedin } from 'lucide-react';

export const TeamPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="w-full pt-28 pb-20 lg:pb-28 bg-[var(--bg-primary)]">
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[var(--gold)] mb-4">
            <button onClick={() => navigate('/')} className="hover:underline cursor-pointer">Home</button>
            <span>/</span>
            <span>Studio Team</span>
          </div>

          <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
            The Engineering Studio.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            10-person core team operating from Karachi and Islamabad. Direct access to senior architects. Zero junior delegation.
          </p>
        </div>
      </section>

      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="bg-white border border-[var(--glass-border)] rounded-3xl p-6 spatial-card flex flex-col items-center text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden mb-6 bg-[var(--bg-primary)] border-2 border-[var(--glass-border)]">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className={`w-full h-full object-cover ${member.id === 'yousaf-piryani' ? 'object-[26%_40%]' : 'object-[50%_15%]'}`} 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-3xl font-headline font-bold text-[var(--text-muted)]">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>
              <h3 className="font-headline text-lg font-bold text-[var(--text-primary)] mb-1">
                {member.name}
              </h3>
              <p className="text-[10px] font-mono-code text-[var(--emerald)] font-bold uppercase tracking-wider mb-4">
                {member.role}
              </p>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6 line-clamp-4">
                {member.description}
              </p>
              <div className="mt-auto pt-4 w-full border-t border-[var(--glass-border)] flex justify-center gap-4">
                
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="dark-surface mt-12">
        <section className="w-full bg-[var(--bg-primary)] py-20 lg:py-28 relative border-t border-[var(--glass-border)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display-hero text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Need dedicated engineering capacity?
            </h2>
            <button 
              onClick={() => navigate('/contact')}
              className="magnetic-btn px-8 py-4 bg-[var(--gold)] text-[#0A0F1D] rounded-xl font-headline font-bold text-sm uppercase tracking-wider"
            >
              Discuss Team Augmentation
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};