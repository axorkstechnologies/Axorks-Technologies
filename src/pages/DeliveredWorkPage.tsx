import React from 'react';
import { PROJECTS } from '../data/mockData';
import { useNavigate } from '../router/Router';
import { ArrowRight } from 'lucide-react';
import { ProjectCarousel } from '../components/ProjectCarousel';

export const DeliveredWorkPage: React.FC = () => {
  const navigate = useNavigate();

  const agrotrace = PROJECTS.find((p) => p.id === 'agrotrace') || PROJECTS[0];
  const ipmi = PROJECTS.find((p) => p.id === 'ipmi-os') || PROJECTS[1];
  const mediverse = PROJECTS.find((p) => p.id === 'mediverse') || PROJECTS[2];
  const fume = PROJECTS.find((p) => p.id === 'fume') || PROJECTS[3];

  return (
    <div className="w-full pt-8 pb-20 lg:pb-28">
      {/* Header Banner */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[var(--gold)] mb-4">
            <button onClick={() => navigate('/')} className="hover:underline cursor-pointer">Home</button>
            <span>/</span>
            <span>Delivered Work</span>
          </div>

          <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Delivered Work &amp; Production Systems.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed font-normal">
            Platforms we have architected, developed, and deployed into live commercial operations. Every case study below is backed by deployed production software.
          </p>
        </div>
      </section>

      {/* Case Studies: Varied Editorial Layout Rhythm */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">

          {/* CASE STUDY 01: AGROTRACE (Flagship Hero Layout) */}
          <div className="glass-2 holographic-edge rounded-3xl overflow-hidden spatial-card p-6 sm:p-8 lg:p-10 border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.7)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[var(--glass-border)] mb-6">
              <div>
                <span className="font-mono-code text-xs text-[var(--emerald)] font-bold tracking-widest uppercase">
                  Enterprise Supply Chain &amp; Logistics
                </span>
                <h2 className="font-display-hero text-3xl sm:text-4xl font-extrabold text-white mt-1">
                  {agrotrace.title}
                </h2>
                <p className="text-sm font-headline text-[var(--emerald)] font-semibold mt-1">
                  {agrotrace.tagline}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono-code uppercase font-bold bg-[var(--emerald)]/15 text-[var(--emerald)] border border-[var(--emerald)]/30">
                  {agrotrace.categoryBadge}
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono-code uppercase font-semibold text-white bg-black/70 border border-white/20">
                  {agrotrace.statusBadge}
                </span>
              </div>
            </div>

            {/* Expansive Full-Width Slideshow Frame */}
            <div className="mb-6">
              <ProjectCarousel
                images={agrotrace.images}
                projectTitle={agrotrace.title}
                systemUrl="agrotrace.live.system · Sindh-Punjab Corridor"
                badgeText="Live Telemetry"
                accentColor="var(--emerald)"
                aspectRatioClass="aspect-[16/9] sm:aspect-[16/8.5] max-h-[580px]"
              />
            </div>

            {/* Asymmetric 2-Column Debrief Below */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-headline text-lg font-bold text-white">
                  Architectural Scope &amp; Deployment
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                  {agrotrace.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {agrotrace.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono-code text-[var(--text-muted)] bg-white/[0.04] border border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                {/* Measurable Metrics on Soft-Ivory Luxury Surface */}
                <div className="surface-ivory rounded-2xl p-5">
                  <div className="grid grid-cols-2 gap-4">
                    {agrotrace.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="font-display-hero text-3xl font-extrabold text-[#0A0F1D]">
                          {m.value}
                        </div>
                        <div className="text-[11px] font-mono-code text-[#475569] uppercase mt-0.5 font-medium">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => navigate('/contact')}
                  className="w-full py-3.5 rounded-xl glass-2 border border-[var(--glass-border)] hover:border-[var(--emerald)] text-xs font-headline font-bold uppercase tracking-wider text-white hover:text-[var(--emerald)] transition-all cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <span>Request Scope Like AgroTrace</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>


          {/* ─── CASE STUDY 02: IPMI-OS 2.0 (Asymmetric 7/5 Telemetry Split) ─── */}
          <div className="glass-2 holographic-edge rounded-3xl overflow-hidden spatial-card p-6 sm:p-8 lg:p-10 border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.7)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Media Viewport (7 Cols): Slideshow Frame */}
              <div className="lg:col-span-7">
                <ProjectCarousel
                  images={ipmi.images}
                  projectTitle={ipmi.title}
                  systemUrl="ipmi-os.ai-decision-engine"
                  badgeText="Algorithmic AI"
                  accentColor="var(--gold)"
                  aspectRatioClass="aspect-[16/10]"
                />
              </div>

              {/* Case Study Summary (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <span className="font-mono-code text-xs text-[var(--gold)] font-bold tracking-widest uppercase">
                    Fintech &amp; Algorithmic AI
                  </span>
                  <h2 className="font-display-hero text-3xl font-bold text-white mt-1">
                    {ipmi.title}
                  </h2>
                  <p className="text-sm font-headline text-[var(--gold)] font-semibold mt-1">
                    {ipmi.tagline}
                  </p>
                  <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                    {ipmi.description}
                  </p>

                  <div className="mt-5 surface-ivory rounded-2xl p-5">
                    <div className="grid grid-cols-2 gap-4">
                      {ipmi.metrics.map((m, idx) => (
                        <div key={idx}>
                          <div className="font-display-hero text-2xl font-extrabold text-[#0A0F1D]">
                            {m.value}
                          </div>
                          <div className="text-[10px] font-mono-code text-[#475569] uppercase mt-0.5 font-medium">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {ipmi.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono-code text-[var(--text-muted)] bg-white/[0.04] border border-white/[0.08]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => navigate('/contact')}
                  className="w-full py-3.5 rounded-xl glass-2 border border-[var(--glass-border)] hover:border-[var(--gold)] text-xs font-headline font-bold uppercase tracking-wider text-white hover:text-[var(--gold)] transition-all cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <span>Request Scope Like IPMI-OS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>


          {/* ─── CASE STUDY 03: MEDIVERSE (Curated 2 Screenshots Only • Reverse 5/7 Split) ─── */}
          <div className="glass-2 holographic-edge rounded-3xl overflow-hidden spatial-card p-6 sm:p-8 lg:p-10 border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.7)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Case Study Details (5 Cols on Left) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <span className="font-mono-code text-xs text-[#A78BFA] font-bold tracking-widest uppercase">
                    Healthcare AI &amp; Telemedicine
                  </span>
                  <h2 className="font-display-hero text-3xl font-bold text-white mt-1">
                    {mediverse.title}
                  </h2>
                  <p className="text-sm font-headline text-[#A78BFA] font-semibold mt-1">
                    {mediverse.tagline}
                  </p>
                  <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                    {mediverse.description}
                  </p>

                  <div className="mt-5 surface-ivory rounded-2xl p-5">
                    <div className="grid grid-cols-2 gap-4">
                      {mediverse.metrics.map((m, idx) => (
                        <div key={idx}>
                          <div className="font-display-hero text-2xl font-extrabold text-[#0A0F1D]">
                            {m.value}
                          </div>
                          <div className="text-[10px] font-mono-code text-[#475569] uppercase mt-0.5 font-medium">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {mediverse.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono-code text-[var(--text-muted)] bg-white/[0.04] border border-white/[0.08]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => navigate('/contact')}
                  className="w-full py-3.5 rounded-xl glass-2 border border-[var(--glass-border)] hover:border-[#A78BFA] text-xs font-headline font-bold uppercase tracking-wider text-white hover:text-[#A78BFA] transition-all cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <span>Request Scope Like MediVerse</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Media Viewport (7 Cols on Right): Slideshow Frame */}
              <div className="lg:col-span-7">
                <ProjectCarousel
                  images={mediverse.images}
                  projectTitle={mediverse.title}
                  systemUrl="mediverse.clinical.platform"
                  badgeText="Clinical Health"
                  accentColor="#A78BFA"
                  aspectRatioClass="aspect-[16/10]"
                />
              </div>
            </div>
          </div>


          {/* ─── CASE STUDY 04: FUME FRAGRANCES (Luxury E-Commerce Spread) ─── */}
          <div className="glass-2 holographic-edge rounded-3xl overflow-hidden spatial-card p-6 sm:p-8 lg:p-10 border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.7)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Media Viewport */}
              <div className="lg:col-span-7">
                <ProjectCarousel
                  images={fume.images}
                  projectTitle={fume.title}
                  systemUrl="fume-fragrances.storefront"
                  badgeText="Luxury Storefront"
                  accentColor="#F43F5E"
                  aspectRatioClass="aspect-[16/10]"
                />
              </div>

              {/* Case Study Summary */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <span className="font-mono-code text-xs text-[#F43F5E] font-bold tracking-widest uppercase">
                    Luxury Brand &amp; E-Commerce
                  </span>
                  <h2 className="font-display-hero text-3xl font-bold text-white mt-1">
                    {fume.title}
                  </h2>
                  <p className="text-sm font-headline text-[#F43F5E] font-semibold mt-1">
                    {fume.tagline}
                  </p>
                  <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                    {fume.description}
                  </p>

                  <div className="mt-5 surface-ivory rounded-2xl p-5">
                    <div className="grid grid-cols-2 gap-4">
                      {fume.metrics.map((m, idx) => (
                        <div key={idx}>
                          <div className="font-display-hero text-2xl font-extrabold text-[#0A0F1D]">
                            {m.value}
                          </div>
                          <div className="text-[10px] font-mono-code text-[#475569] uppercase mt-0.5 font-medium">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {fume.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono-code text-[var(--text-muted)] bg-white/[0.04] border border-white/[0.08]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => navigate('/contact')}
                  className="w-full py-3.5 rounded-xl glass-2 border border-[var(--glass-border)] hover:border-[#F43F5E] text-xs font-headline font-bold uppercase tracking-wider text-white hover:text-[#F43F5E] transition-all cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <span>Request E-Commerce Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom Conversion Strip */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto surface-ivory rounded-3xl p-8 sm:p-12 spatial-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display-hero text-2xl sm:text-3xl font-extrabold text-[#0A0F1D]">
              Need an enterprise system architected to this standard?
            </h3>
            <p className="text-sm text-[#1E293B] mt-1 font-normal">
              Fixed-price milestones starting from $1,000. Full intellectual property transfer on completion.
            </p>
          </div>

          <button
            onClick={() => navigate('/contact')}
            className="shrink-0 px-8 py-4 rounded-xl bg-[#0F172A] text-white text-xs font-headline font-bold uppercase tracking-wider hover:bg-[#1E293B] transition-all cursor-pointer shadow-lg"
          >
            Book Free Discovery Call
          </button>
        </div>
      </section>
    </div>
  );
};

