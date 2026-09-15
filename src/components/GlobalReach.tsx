import React from 'react';
import { Globe, Clock, ShieldCheck, DollarSign, ArrowRight, MessageSquare } from 'lucide-react';
import { useNavigate } from '../router/Router';

export const GlobalReach: React.FC = () => {
  const navigate = useNavigate();

  const regions = [
    {
      region: 'Gulf Cooperation Council (GCC)',
      countries: 'Saudi Arabia • UAE • Kuwait • Bahrain',
      focus: 'Vision 2030 & Digital Modernization',
      benefit: 'Cost-efficient senior software engineering matching Gulf business hours with zero agency bloat.',
      accent: 'var(--emerald)',
    },
    {
      region: 'North America',
      countries: 'United States • Canada',
      focus: 'AI Automation & Custom Enterprise Web Apps',
      benefit: 'High-velocity sprint cycles with substantial working day overlap (EST/CST mornings).',
      accent: 'var(--gold)',
    },
    {
      region: 'United Kingdom & Europe',
      countries: 'UK • Germany • Netherlands • Switzerland',
      focus: 'SaaS Platforms, Web3 & FinTech Systems',
      benefit: 'Near-perfect timezone synchronization with London and Central European business days.',
      accent: '#38BDF8',
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative bg-[#070B18] border-y border-[var(--glass-border)]" id="global-reach">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-2 border-[#38BDF8]/40 text-xs uppercase text-[#38BDF8] tracking-widest font-semibold font-mono-code mb-3.5">
            <Globe className="w-3.5 h-3.5" />
            <span>GLOBAL ENGAGEMENTS &amp; GULF POSITIONING</span>
          </div>

          <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[46px] text-white font-extrabold tracking-tight leading-tight">
            Serving USA, UK, Europe, Saudi Arabia, UAE, Kuwait, and Bahrain.
          </h2>

          <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed font-normal">
            We engineer intelligent software systems for international startups and mid-market enterprises. Built with full commercial IP ownership, fixed-price milestone security, and direct senior engineer communication.
          </p>
        </div>

        {/* 3 Regional Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {regions.map((reg, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl glass-2 border-white/10 hover:border-white/25 transition-all flex flex-col justify-between group spatial-card shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className="font-mono-code text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border"
                    style={{ color: reg.accent, borderColor: reg.accent, backgroundColor: 'rgba(0,0,0,0.3)' }}
                  >
                    {reg.region}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                </div>

                <h3 className="font-headline text-lg sm:text-xl font-bold text-white mb-2">
                  {reg.countries}
                </h3>

                <div className="text-xs font-mono-code text-[var(--gold)] mb-4 font-semibold">
                  {reg.focus}
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {reg.benefit}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono-code text-[var(--text-muted)]">
                <span>Direct Slack &amp; WhatsApp</span>
                <span className="text-white">Active</span>
              </div>
            </div>
          ))}
        </div>

        {/* Gulf Strategic Advantage Banner */}
        <div className="p-8 sm:p-10 lg:p-12 rounded-3xl surface-ivory text-[#0A0F1D] spatial-card shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8">
              <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#059669] block mb-2">
                Why Gulf Companies Choose Axorks
              </span>
              <h3 className="font-display-hero text-2xl sm:text-3xl font-extrabold text-[#0A0F1D] tracking-tight leading-snug mb-4">
                The smart software development partner for Saudi Arabia, UAE, Kuwait, and Bahrain.
              </h3>
              <p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-6">
                In line with Saudi Vision 2030 and UAE digital acceleration initiatives, Gulf businesses require top-tier AI automation and custom software without the excessive overhead of local agency retainers. Axorks delivers senior software engineering with full time-zone alignment, cultural understanding, and fixed-price milestone guarantees.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono-code text-[#0A0F1D]">
                <div className="p-3.5 rounded-xl bg-black/[0.04] border border-black/[0.08]">
                  <Clock className="w-4 h-4 text-[#D97706] mb-1" />
                  <strong>Zero Time Gap:</strong> PKT is only +2 hours ahead of Riyadh, Dubai, and Kuwait.
                </div>
                <div className="p-3.5 rounded-xl bg-black/[0.04] border border-black/[0.08]">
                  <ShieldCheck className="w-4 h-4 text-[#059669] mb-1" />
                  <strong>100% Commercial IP:</strong> Full copyright and repository transfer with NDA protection.
                </div>
                <div className="p-3.5 rounded-xl bg-black/[0.04] border border-black/[0.08]">
                  <DollarSign className="w-4 h-4 text-[#2563EB] mb-1" />
                  <strong>Milestone Invoicing:</strong> Fixed milestones billed in USD, SAR, or AED.
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3.5">
              <button
                onClick={() => navigate('/contact')}
                className="w-full py-4 px-6 rounded-xl bg-[#0F172A] text-white text-xs font-headline font-bold uppercase tracking-wider hover:bg-[#1E293B] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Book Free Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/923141030223"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-headline font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
              </a>

              <span className="text-center text-[11px] font-mono-code text-[#64748B]">
                Direct response within 24 hours guaranteed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};