const fs = require('fs');

const studioTeam = `import React from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { ArrowRight, Linkedin } from 'lucide-react';
import { useRouter } from '../router/Router';

export const StudioTeam: React.FC = () => {
  const { navigate } = useRouter();
  
  const founder = TEAM_MEMBERS.find(m => m.id === 'mujahid') || TEAM_MEMBERS[0];
  const featured = [
    TEAM_MEMBERS.find(m => m.id === 'yousaf-piryani'),
    TEAM_MEMBERS.find(m => m.id === 'faisal'),
    TEAM_MEMBERS.find(m => m.id === 'farwa')
  ].filter(Boolean) as typeof TEAM_MEMBERS;

  return (
    <section className="w-full bg-[var(--bg-secondary)] py-20 lg:py-28" id="studio-team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="font-mono-code text-[10px] font-bold tracking-widest uppercase text-[var(--gold)] mb-4 block">
              The Engineering Studio
            </span>
            <h2 className="font-display-hero text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight">
              Direct access to senior practitioners. Zero junior delegation.
            </h2>
          </div>
          <button 
            onClick={() => navigate('/team')}
            className="inline-flex items-center gap-2 text-sm font-headline font-bold text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors uppercase tracking-wider"
          >
            View Full 10-Person Roster <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 bg-white border border-[var(--glass-border)] rounded-3xl p-6 sm:p-8 spatial-card flex flex-col sm:flex-row lg:flex-col gap-6 lg:gap-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 shrink-0 rounded-2xl overflow-hidden border-2 border-[var(--bg-primary)] shadow-sm">
              <img src={founder.imageUrl} alt={founder.name} className="w-full h-full object-cover object-[50%_15%]" />
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold text-[var(--text-primary)] mb-1">
                {founder.name}
              </h3>
              <p className="text-xs font-mono-code text-[var(--emerald)] font-bold mb-4">
                {founder.role}
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Leading the architectural vision and technical delivery at Axorks. Every client partners directly with Mujahid to lock scope, ensure rigorous staging verification, and guarantee production-grade deployments.
              </p>
              <a href="https://linkedin.com/in/muhammad-mujahid-15949a202" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-headline font-bold text-[#0284C7] hover:text-[#0A0F1D] transition-colors uppercase tracking-wider">
                <Linkedin className="w-4 h-4" /> Connect with Founder
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featured.map((member) => (
              <div key={member.id} className="bg-white border border-[var(--glass-border)] rounded-2xl p-6 spatial-card flex items-start gap-4">
                <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden bg-[var(--bg-primary)] border border-[var(--glass-border)] shadow-sm">
                  {member.imageUrl ? (
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className={\`w-full h-full object-cover \${member.id === 'yousaf-piryani' ? 'object-[26%_40%]' : 'object-center'}\`} 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xl font-headline font-bold text-[var(--text-muted)]">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-headline text-base font-bold text-[var(--text-primary)] mb-1">
                    {member.name}
                  </h4>
                  <p className="text-[10px] font-mono-code text-[var(--text-muted)] font-bold uppercase tracking-wider mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] leading-snug line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
            
            <div className="bg-[var(--text-primary)] rounded-2xl p-6 spatial-card flex flex-col justify-center items-center text-center">
              <h4 className="font-headline text-base font-bold text-white mb-2">
                Need a dedicated team?
              </h4>
              <p className="text-xs text-[var(--text-muted-dark)] mb-4">
                Scale your engineering capacity with Axorks dedicated developer allocations.
              </p>
              <button onClick={() => navigate('/contact')} className="text-xs font-mono-code font-bold text-[var(--gold)] hover:text-white transition-colors underline decoration-[var(--gold)] underline-offset-4">
                Discuss Team Augmentation
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};`;
fs.writeFileSync('src/components/StudioTeam.tsx', studioTeam);


const teamPage = `import React from 'react';
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
                {member.imageUrl ? (
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className={\`w-full h-full object-cover \${member.id === 'yousaf-piryani' ? 'object-[26%_40%]' : 'object-[50%_15%]'}\`} 
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
                {member.bio}
              </p>
              <div className="mt-auto pt-4 w-full border-t border-[var(--glass-border)] flex justify-center gap-4">
                {member.linkedinUrl && (
                  <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[#0284C7] transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
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
};`;
fs.writeFileSync('src/pages/TeamPage.tsx', teamPage);

console.log('Fixed syntax templates');
