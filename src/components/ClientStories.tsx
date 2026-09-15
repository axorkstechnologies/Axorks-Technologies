import React from 'react';
import { CLIENT_STORIES } from '../data/mockData';
import { Quote, CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from '../router/Router';

export const ClientStories: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative bg-[#060A16] border-t border-[var(--glass-border)]" id="stories">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-2 border-[var(--gold)]/30 text-xs uppercase text-[var(--gold)] tracking-widest font-semibold font-mono-code mb-3.5">
            <span>CLIENT STORIES</span>
          </div>

          <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[46px] text-white font-extrabold tracking-tight leading-tight">
            Real business problems. Practical digital solutions. Clear outcomes.
          </h2>

          <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed">
            How we partner with founders and enterprise leaders to replace manual bottlenecks with reliable, automated software systems.
          </p>
        </div>

        {/* 4 Client Story Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {CLIENT_STORIES.map((story) => {
            const accentColor =
              story.accent === 'emerald'
                ? 'var(--emerald)'
                : story.accent === 'gold'
                ? 'var(--gold)'
                : story.accent === 'violet'
                ? '#A78BFA'
                : '#F43F5E';

            return (
              <div
                key={story.id}
                className="glass-2 holographic-edge rounded-3xl p-8 sm:p-10 flex flex-col justify-between spatial-card border-white/10 hover:border-white/20 transition-all shadow-xl"
              >
                <div>
                  {/* Card Header: Number, Client, Industry & Logo */}
                  <div className="flex items-center justify-between gap-4 pb-6 mb-6 border-b border-[var(--glass-border)]">
                    <div className="flex items-center gap-3">
                      <span
                        className="font-mono-code text-xs font-bold px-2.5 py-1 rounded-md bg-white/[0.05] border"
                        style={{ color: accentColor, borderColor: accentColor }}
                      >
                        {story.number}
                      </span>
                      <div>
                        <h3 className="font-headline text-lg font-bold text-white leading-none">
                          {story.clientName}
                        </h3>
                        <span className="font-mono-code text-[11px] text-[var(--text-muted)] mt-1 block">
                          {story.industry}
                        </span>
                      </div>
                    </div>

                    <div className="h-9 max-w-[130px] flex items-center bg-black/40 px-3 py-1.5 rounded-xl border border-white/10">
                      <img
                        src={story.logo}
                        alt={`${story.clientName} logo`}
                        className="max-h-6 max-w-full object-contain filter brightness-110"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Core Headline */}
                  <div className="mb-6">
                    <span className="font-display-hero text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug block">
                      &ldquo;{story.headline}&rdquo;
                    </span>
                  </div>

                  {/* Narrative Details: Problem, What Axorks Did, The Difference */}
                  <div className="space-y-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-8">
                    <div className="p-3.5 rounded-xl bg-black/30 border border-white/[0.06]">
                      <strong className="text-slate-200 font-headline uppercase text-[11px] tracking-wider block mb-1">
                        The Problem:
                      </strong>
                      <p>{story.problem}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-black/30 border border-white/[0.06]">
                      <strong className="text-[var(--gold)] font-headline uppercase text-[11px] tracking-wider block mb-1">
                        What Axorks Did:
                      </strong>
                      <p>{story.solution}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-black/30 border border-white/[0.06]">
                      <strong className="text-[var(--emerald)] font-headline uppercase text-[11px] tracking-wider block mb-1">
                        The Difference:
                      </strong>
                      <p>{story.difference}</p>
                    </div>
                  </div>

                  {/* Highlight Metric Pill (if present) */}
                  {story.highlightMetric && (
                    <div className="mb-6 p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between">
                      <div>
                        <div
                          className="font-display-hero text-3xl font-extrabold tracking-tight"
                          style={{ color: accentColor }}
                        >
                          {story.highlightMetric.value}
                        </div>
                        <div className="text-[11px] font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
                          {story.highlightMetric.label}
                        </div>
                      </div>
                      <CheckCircle2 className="w-6 h-6 text-[#10B981]" />
                    </div>
                  )}

                  {/* Option 2 Clean Text Testimonial Quote */}
                  <div className="relative p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                    <Quote className="w-5 h-5 text-[var(--gold)]/60 mb-2" />
                    <p className="text-xs sm:text-sm text-slate-200 italic font-serif leading-relaxed mb-3">
                      &ldquo;{story.testimonial}&rdquo;
                    </p>
                    <div className="flex items-center justify-between text-xs font-mono-code">
                      <span className="text-[var(--gold)] font-semibold">
                        {story.clientName}
                      </span>
                      <span className="text-[var(--text-muted)]">
                        Verified Outcome
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-8 pt-4 border-t border-[var(--glass-border)] flex items-center justify-between">
                  <span className="text-xs font-mono-code text-[var(--text-muted)]">
                    Fixed-Price Milestone Delivery
                  </span>
                  <button
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center gap-1.5 text-xs font-headline font-bold uppercase tracking-wider group cursor-pointer"
                    style={{ color: accentColor }}
                  >
                    <span>Request Similar System</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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