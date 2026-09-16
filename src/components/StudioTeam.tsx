import React from 'react';
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
              <img src={founder.image} alt={founder.name} className="w-full h-full object-cover object-[50%_15%]" />
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
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className={`w-full h-full object-cover ${member.id === 'yousaf-piryani' ? 'object-[26%_40%]' : 'object-center'}`} 
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
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
            
            <div className="bg-[var(--text-primary)] rounded-2xl p-6 spatial-card flex flex-col justify-center items-center text-center">
              <h4 className="font-headline text-base font-bold text-white mb-2">
                Need a dedicated team?
              </h4>
              <p className="text-xs text-white/80 font-medium mb-4">
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
};