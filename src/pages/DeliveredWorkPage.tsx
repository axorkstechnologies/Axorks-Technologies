import React, { useState } from 'react';
import { PROJECTS } from '../data/mockData';
import { useNavigate } from '../router/Router';
import { Maximize2, X, CheckCircle2, ArrowRight } from 'lucide-react';

const ACCENT_COLORS: Record<string, {
  color: string;
  glow: string;
  badgeBg: string;
}> = {
  emerald: {
    color: 'var(--emerald)',
    glow: 'rgba(16, 185, 129, 0.25)',
    badgeBg: 'rgba(16, 185, 129, 0.15)',
  },
  gold: {
    color: 'var(--gold)',
    glow: 'rgba(245, 199, 97, 0.25)',
    badgeBg: 'rgba(245, 199, 97, 0.15)',
  },
  violet: {
    color: 'var(--violet)',
    glow: 'rgba(139, 92, 246, 0.25)',
    badgeBg: 'rgba(139, 92, 246, 0.15)',
  },
  wine: {
    color: 'var(--wine)',
    glow: 'rgba(190, 18, 60, 0.25)',
    badgeBg: 'rgba(190, 18, 60, 0.15)',
  },
};

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

  return (
    <div className="w-full pt-8 pb-20 lg:pb-28">
      {/* Header Banner */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[var(--emerald)] mb-4">
            <button onClick={() => navigate('/')} className="hover:underline cursor-pointer">Home</button>
            <span>/</span>
            <span>Delivered Work</span>
          </div>

          <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Delivered Work &amp; Production Systems.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            Platforms we have architected, built, and launched into live commercial operation. Every screenshot represents verifiable code deployed to production. Click any preview to inspect high-resolution architecture.
          </p>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
          {PROJECTS.map((project, index) => {
            const currentImgIndex = selectedImages[project.id] ?? 0;
            const currentImage = project.images[currentImgIndex];
            const accent = ACCENT_COLORS[project.accent] || ACCENT_COLORS.gold;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={project.id}
                className="glass-2 holographic-edge rounded-3xl overflow-hidden spatial-card shadow-[0_24px_64px_rgba(0,0,0,0.7)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 w-full overflow-hidden">
                  {/* Media Viewport (7 Cols) — Strictly Contained */}
                  <div
                    className={`min-w-0 lg:col-span-7 flex flex-col justify-between p-4 sm:p-6 bg-[var(--bg-card)]/40 overflow-hidden ${
                      isReversed ? 'lg:order-last' : 'lg:order-first'
                    }`}
                  >
                    {/* Main Image Frame — Guaranteed Container Containment */}
                    <div
                      className="relative w-full aspect-[16/9] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-[#050A14] group cursor-pointer border border-[var(--glass-border)] shrink-0"
                      onClick={() => setLightboxImage({ src: currentImage.src, alt: currentImage.alt, title: project.title })}
                    >
                      <img
                        src={currentImage.src}
                        alt={currentImage.alt}
                        className="w-full h-full object-cover object-top block transition-opacity duration-300 group-hover:opacity-95"
                        loading="lazy"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      {/* Status Badges */}
                      <div className="absolute top-3.5 left-3.5 flex flex-wrap items-center gap-2">
                        <span
                          className="px-3 py-1 rounded-full text-[10px] font-mono-code uppercase font-bold backdrop-blur-xl border"
                          style={{
                            backgroundColor: accent.badgeBg,
                            color: accent.color,
                            borderColor: accent.color,
                          }}
                        >
                          {project.categoryBadge}
                        </span>
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono-code uppercase font-semibold text-white bg-black/75 backdrop-blur-xl border border-white/20">
                          {project.statusBadge}
                        </span>
                      </div>

                      {/* Expand Button */}
                      <div className="absolute bottom-3.5 right-3.5 w-9 h-9 rounded-xl glass-2 border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white shadow-lg">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Screenshot Selector Thumbnails */}
                    <div className="mt-4 pt-3 border-t border-[var(--glass-border)] flex items-center gap-2 overflow-x-auto gallery-scroll pb-1">
                      <span className="text-[10px] font-mono-code text-[var(--text-muted)] uppercase shrink-0 mr-1 font-semibold">
                        Screens ({project.images.length}):
                      </span>
                      {project.images.map((img, imgIdx) => (
                        <button
                          key={imgIdx}
                          onClick={() => handleSelectImage(project.id, imgIdx)}
                          className={`shrink-0 w-16 sm:w-20 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all cursor-pointer relative ${
                            currentImgIndex === imgIdx
                              ? 'shadow-md ring-2 ring-[var(--gold)]/40'
                              : 'opacity-60 hover:opacity-100 border-transparent'
                          }`}
                          style={{
                            borderColor: currentImgIndex === imgIdx ? accent.color : 'transparent',
                          }}
                          aria-label={`View screenshot ${imgIdx + 1}`}
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover block"
                            loading="lazy"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Case Study Details & Measurable Metrics (5 Cols) */}
                  <div className="min-w-0 lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
                          DELIVERED PLATFORM 0{index + 1}
                        </span>
                        <CheckCircle2 className="w-4 h-4" style={{ color: accent.color }} />
                      </div>

                      <h2
                        className="font-display-hero text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
                        style={{ color: accent.color }}
                      >
                        {project.title}
                      </h2>

                      <p className="mt-1 text-sm font-headline font-semibold text-[var(--text-primary)]">
                        {project.tagline}
                      </p>

                      <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* Measurable Metrics on Refined Soft-Ivory Luxury Surface */}
                      <div className="mt-6 surface-ivory rounded-2xl p-4 sm:p-5">
                        <div className="grid grid-cols-2 gap-4">
                          {project.metrics.map((metric, mIdx) => (
                            <div key={mIdx}>
                              <div className="font-display-hero text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0A0F1D]">
                                {metric.value}
                              </div>
                              <div className="text-[11px] text-[#475569] uppercase tracking-wider font-mono-code mt-0.5 font-medium">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technical Architecture Tags */}
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-mono-code text-[var(--text-muted)] bg-white/[0.04] border border-white/[0.08]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[var(--glass-border)]">
                      <button
                        onClick={() => navigate('/contact')}
                        className="w-full py-3 rounded-xl glass-2 border border-[var(--glass-border)] hover:border-[var(--gold)] text-xs font-headline font-bold uppercase tracking-wider text-[var(--text-primary)] hover:text-[var(--gold)] transition-all cursor-pointer flex items-center justify-center gap-2 group/btn"
                      >
                        <span>Request Architecture Briefing Like {project.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] glass-2 rounded-3xl overflow-hidden p-3 sm:p-5 shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 px-2 border-b border-[var(--glass-border)] mb-3">
              <div>
                <h4 className="font-headline font-bold text-base text-white">
                  {lightboxImage.title} // SCREENSHOT INSPECTION
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

            <div className="relative rounded-2xl overflow-hidden max-h-[78vh] flex items-center justify-center bg-black/60">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="max-w-full max-h-[78vh] object-contain rounded-xl"
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
              Need a production system built to this standard?
            </h3>
            <p className="text-sm text-[#1E293B] mt-1">
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
