import React from 'react';
import { CLIENT_STORIES } from '../data/mockData';
import { Quote, CheckCircle2, ArrowRight } from 'lucide-react';
import { useRouter } from '../router/Router';

export const ClientStories: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative bg-[var(--bg-secondary)]" id="stories">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="font-mono-code text-[10px] font-bold tracking-widest uppercase text-[var(--gold)] mb-4 block">
            Client Outcomes
          </span>
          <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] font-extrabold tracking-tight leading-tight">
            Real business problems.<br />Clear engineered outcomes.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {CLIENT_STORIES.map((story) => {
            return (
              <div
                key={story.id}
                className="bg-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between spatial-card border border-[var(--glass-border)] shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 pb-6 mb-6 border-b border-[var(--glass-border)]">
                    <div className="flex flex-col">
                      <span className="font-headline text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                        {story.clientName}
                      </span>
                      <span className="font-mono-code text-[10px] text-[var(--text-muted)] font-bold tracking-wider uppercase mt-1">
                        {story.industry}
                      </span>
                    </div>
                    {story.logo && (
                      <div className="h-10 w-24 flex items-center justify-end shrink-0">
                        <img src={story.logo} alt={story.clientName} className="h-full object-contain object-right grayscale opacity-70" />
                      </div>
                    )}
                  </div>

                  <h3 className="font-headline text-xl sm:text-2xl font-bold text-[var(--text-primary)] leading-snug mb-6">
                    "{story.headline}"
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="text-[11px] font-mono-code text-[var(--text-muted)] uppercase tracking-wider font-bold mb-1">
                        The Problem
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {story.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-mono-code text-[var(--text-muted)] uppercase tracking-wider font-bold mb-1">
                        Our Solution
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {story.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[var(--glass-border)]">
                  <div className="relative pl-6">
                    <Quote className="absolute left-0 top-0 w-4 h-4 text-[var(--gold)]/40" />
                    <p className="text-sm font-headline italic text-[var(--text-primary)] leading-relaxed mb-4 font-medium">
                      "{story.testimonial}"
                    </p>
                    <div className="flex flex-col">
                      
                      
                    </div>
                  </div>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="mt-8 w-full py-3 bg-[var(--bg-primary)] border border-[var(--glass-border)] text-[var(--text-primary)] rounded-xl text-xs font-headline font-bold tracking-wider uppercase hover:bg-[#0A0F1D] hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    Request Similar System <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};