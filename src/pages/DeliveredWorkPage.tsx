import React, { useState } from 'react';
import { PROJECTS } from '../data/mockData';
import { useNavigate } from '../router/Router';
import { Maximize2, X, ArrowRight } from 'lucide-react';

export const DeliveredWorkPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState<Record<string, number>>({
    agrotrace: 0,
    'ipmi-os': 0,
    mediverse: 0,
    fume: 0,
  });

  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; title: string } | null>(null);

  const handleSelectImage = (projectId: string, index: number) => {
    setSelectedImages((prev) => ({ ...prev, [projectId]: index }));
  };

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
            Platforms we have architected, developed, and deployed into live commercial operations. Every case study below is backed by deployed software. Click any viewport to inspect full-resolution interfaces.
          </p>
        </div>
      </section>

      {/* Case Studies — Varied Editorial Layout Rhythm (Break Identical Grid Pattern) */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">

          {/* ─── CASE STUDY 01: AGROTRACE (Flagship Hero Layout — Expansive Media Viewport) ─── */}
          <div className="glass-2 holographic-edge rounded-3xl overflow-hidden spatial-card p-6 sm:p-8 lg:p-10 border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.7)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[var(--glass-border)] mb-6">
              <div>
                <span className="font-mono-code text-xs text-[var(--emerald)] font-bold tracking-widest uppercase">
                  CASE STUDY 01 // ENTERPRISE SUPPLY CHAIN &amp; LOGISTICS
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

            {/* Expansive Full-Width Browser Frame — Maximum Uncropped Screenshot Space */}
            <div className="overflow-hidden rounded-2xl bg-[#070C18] border border-white/15 mb-6 shadow-2xl">
              {/* Chrome Status Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0A1020] border-b border-white/[0.08] text-[11px] font-mono-code text-white/50">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/70" />
                  <span className="ml-3 text-white/60">agrotrace.live.system // sindh-punjab-corridor</span>
                </div>
                <button
                  onClick={() => setLightboxImage({ src: agrotrace.images[selectedImages.agrotrace || 0].src, alt: agrotrace.images[selectedImages.agrotrace || 0].alt, title: agrotrace.title })}
                  className="flex items-center gap-1 text-[var(--emerald)] hover:underline cursor-pointer"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Expand High-Res</span>
                </button>
              </div>

              {/* Main Image Stage — Strictly Contained */}
              <div
                className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] max-h-[580px] overflow-hidden bg-[#040711] group cursor-pointer"
                onClick={() => setLightboxImage({ src: agrotrace.images[selectedImages.agrotrace || 0].src, alt: agrotrace.images[selectedImages.agrotrace || 0].alt, title: agrotrace.title })}
              >
                <img
                  src={agrotrace.images[selectedImages.agrotrace || 0].src}
                  alt={agrotrace.images[selectedImages.agrotrace || 0].alt}
                  className="w-full h-full object-cover object-top block transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>

              {/* Thumbnail Selector Rail */}
              <div className="px-4 py-3 bg-[#0A1020]/90 border-t border-white/[0.08] flex items-center gap-3 overflow-x-auto gallery-scroll">
                <span className="text-[10px] font-mono-code text-[var(--text-muted)] uppercase shrink-0 font-semibold">
                  Verified Views ({agrotrace.images.length}):
                </span>
                {agrotrace.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectImage('agrotrace', idx)}
                    className={`shrink-0 w-20 sm:w-24 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      (selectedImages.agrotrace || 0) === idx
                        ? 'border-[var(--emerald)] ring-2 ring-[var(--emerald)]/40 opacity-100'
                        : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
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
              {/* Media Viewport (7 Cols) — Strictly Contained Browser Frame */}
              <div className="lg:col-span-7 overflow-hidden rounded-2xl bg-[#070C18] border border-white/15 p-2 sm:p-3">
                <div className="flex items-center justify-between pb-2 px-2 border-b border-white/[0.08] mb-2 text-[10px] font-mono-code text-white/50">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/70" />
                    <span className="ml-2 text-white/60">ipmi-os.ai-decision-engine</span>
                  </div>
                  <button
                    onClick={() => setLightboxImage({ src: ipmi.images[selectedImages['ipmi-os'] || 0].src, alt: ipmi.images[selectedImages['ipmi-os'] || 0].alt, title: ipmi.title })}
                    className="flex items-center gap-1 text-[var(--gold)] hover:underline cursor-pointer"
                  >
                    <Maximize2 className="w-3 h-3" />
                    <span>Expand</span>
                  </button>
                </div>

                <div
                  className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-[#040711] group cursor-pointer"
                  onClick={() => setLightboxImage({ src: ipmi.images[selectedImages['ipmi-os'] || 0].src, alt: ipmi.images[selectedImages['ipmi-os'] || 0].alt, title: ipmi.title })}
                >
                  <img
                    src={ipmi.images[selectedImages['ipmi-os'] || 0].src}
                    alt={ipmi.images[selectedImages['ipmi-os'] || 0].alt}
                    className="w-full h-full object-cover object-top block transition-transform duration-500 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                </div>

                {/* Thumbnails */}
                <div className="mt-3 pt-2 border-t border-white/[0.08] flex items-center gap-2 overflow-x-auto gallery-scroll">
                  <span className="text-[10px] font-mono-code text-[var(--text-muted)] uppercase shrink-0 font-semibold mr-1">
                    Screens ({ipmi.images.length}):
                  </span>
                  {ipmi.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectImage('ipmi-os', idx)}
                      className={`shrink-0 w-16 sm:w-20 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        (selectedImages['ipmi-os'] || 0) === idx
                          ? 'border-[var(--gold)] ring-2 ring-[var(--gold)]/40 opacity-100'
                          : 'border-transparent opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Case Study Summary (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <span className="font-mono-code text-xs text-[var(--gold)] font-bold tracking-widest uppercase">
                    CASE STUDY 02 // FINTECH &amp; ALGORITHMIC AI
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
                    CASE STUDY 03 // HEALTHCARE AI &amp; TELEMEDICINE
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

              {/* Media Viewport (7 Cols on Right) — Only 2 Authentic Screenshots */}
              <div className="lg:col-span-7 overflow-hidden rounded-2xl bg-[#070C18] border border-white/15 p-2 sm:p-3">
                <div className="flex items-center justify-between pb-2 px-2 border-b border-white/[0.08] mb-2 text-[10px] font-mono-code text-white/50">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/70" />
                    <span className="ml-2 text-white/60">mediverse.clinical.platform</span>
                  </div>
                  <button
                    onClick={() => setLightboxImage({ src: mediverse.images[selectedImages.mediverse || 0].src, alt: mediverse.images[selectedImages.mediverse || 0].alt, title: mediverse.title })}
                    className="flex items-center gap-1 text-[#A78BFA] hover:underline cursor-pointer"
                  >
                    <Maximize2 className="w-3 h-3" />
                    <span>Expand</span>
                  </button>
                </div>

                <div
                  className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-[#040711] group cursor-pointer"
                  onClick={() => setLightboxImage({ src: mediverse.images[selectedImages.mediverse || 0].src, alt: mediverse.images[selectedImages.mediverse || 0].alt, title: mediverse.title })}
                >
                  <img
                    src={mediverse.images[selectedImages.mediverse || 0].src}
                    alt={mediverse.images[selectedImages.mediverse || 0].alt}
                    className="w-full h-full object-cover object-top block transition-transform duration-500 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                </div>

                {/* Filtered Curated 2 Screenshots */}
                <div className="mt-3 pt-2 border-t border-white/[0.08] flex items-center gap-2">
                  <span className="text-[10px] font-mono-code text-[var(--text-muted)] uppercase shrink-0 font-semibold mr-1">
                    Authentic Production Views:
                  </span>
                  {mediverse.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectImage('mediverse', idx)}
                      className={`shrink-0 w-20 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        (selectedImages.mediverse || 0) === idx
                          ? 'border-[#A78BFA] ring-2 ring-[#A78BFA]/40 opacity-100'
                          : 'border-transparent opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>


          {/* ─── CASE STUDY 04: FUME FRAGRANCES (Luxury E-Commerce Spread) ─── */}
          <div className="glass-2 holographic-edge rounded-3xl overflow-hidden spatial-card p-6 sm:p-8 lg:p-10 border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.7)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Media Viewport */}
              <div className="lg:col-span-7 overflow-hidden rounded-2xl bg-[#070C18] border border-white/15 p-2 sm:p-3">
                <div className="flex items-center justify-between pb-2 px-2 border-b border-white/[0.08] mb-2 text-[10px] font-mono-code text-white/50">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/70" />
                    <span className="ml-2 text-white/60">fume-fragrances.storefront</span>
                  </div>
                  <button
                    onClick={() => setLightboxImage({ src: fume.images[selectedImages.fume || 0].src, alt: fume.images[selectedImages.fume || 0].alt, title: fume.title })}
                    className="flex items-center gap-1 text-[#F43F5E] hover:underline cursor-pointer"
                  >
                    <Maximize2 className="w-3 h-3" />
                    <span>Expand</span>
                  </button>
                </div>

                <div
                  className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-[#040711] group cursor-pointer"
                  onClick={() => setLightboxImage({ src: fume.images[selectedImages.fume || 0].src, alt: fume.images[selectedImages.fume || 0].alt, title: fume.title })}
                >
                  <img
                    src={fume.images[selectedImages.fume || 0].src}
                    alt={fume.images[selectedImages.fume || 0].alt}
                    className="w-full h-full object-cover object-center block transition-transform duration-500 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                </div>

                {/* Thumbnails */}
                <div className="mt-3 pt-2 border-t border-white/[0.08] flex items-center gap-2 overflow-x-auto gallery-scroll">
                  <span className="text-[10px] font-mono-code text-[var(--text-muted)] uppercase shrink-0 font-semibold mr-1">
                    Design Views ({fume.images.length}):
                  </span>
                  {fume.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectImage('fume', idx)}
                      className={`shrink-0 w-16 sm:w-20 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        (selectedImages.fume || 0) === idx
                          ? 'border-[#F43F5E] ring-2 ring-[#F43F5E]/40 opacity-100'
                          : 'border-transparent opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Case Study Summary */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <span className="font-mono-code text-xs text-[#F43F5E] font-bold tracking-widest uppercase">
                    CASE STUDY 04 // LUXURY BRAND &amp; COMMERCE
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

      {/* Lightbox Modal — High-Resolution Full-Screen Uncropped Inspection */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[92vh] glass-2 rounded-3xl overflow-hidden p-3 sm:p-5 shadow-2xl border border-white/20 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 px-2 border-b border-[var(--glass-border)] mb-3">
              <div>
                <h4 className="font-headline font-bold text-base text-white">
                  {lightboxImage.title} // SCREENSHOT ARCHITECTURAL INSPECTION
                </h4>
                <p className="text-xs text-[var(--text-muted)] font-mono-code">
                  {lightboxImage.alt}
                </p>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="w-9 h-9 rounded-xl glass-2 border-[var(--glass-border)] flex items-center justify-center text-white hover:text-[var(--gold)] transition-colors cursor-pointer"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden flex-1 max-h-[80vh] flex items-center justify-center bg-black/80">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="max-w-full max-h-[78vh] object-contain rounded-xl block"
              />
            </div>
          </div>
        </div>
      )}

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

