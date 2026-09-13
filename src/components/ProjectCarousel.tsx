import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectImage } from '../types';

interface ProjectCarouselProps {
  images: ProjectImage[];
  projectTitle: string;
  systemUrl?: string;
  badgeText?: string;
  accentColor?: string;
  aspectRatioClass?: string;
  className?: string;
  showChromeHeader?: boolean;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  images,
  projectTitle,
  systemUrl,
  badgeText,
  accentColor = 'var(--gold)',
  aspectRatioClass = 'aspect-[16/10] sm:aspect-[16/9.5]',
  className = '',
  showChromeHeader = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  if (!images || images.length === 0) {
    return null;
  }

  const prevSlide = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className={`overflow-hidden rounded-2xl bg-[#070C18] border border-white/15 shadow-2xl relative select-none group/carousel ${className}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Chrome Status Header */}
      {showChromeHeader && (
        <div className="flex items-center justify-between px-3.5 sm:px-4 py-2 sm:py-2.5 bg-[#0A1020] border-b border-white/[0.08] text-[10px] sm:text-[11px] font-mono-code text-white/50">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/70 shrink-0" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/70 shrink-0" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/70 shrink-0" />
            {systemUrl && (
              <span className="ml-2 sm:ml-3 text-white/60 truncate">
                {systemUrl}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 shrink-0 ml-2">
            {badgeText && (
              <span className="font-bold text-[10px] uppercase hidden xs:inline tracking-wider" style={{ color: accentColor }}>
                {badgeText}
              </span>
            )}
            <span className="text-[10px] font-mono-code text-white/50 bg-white/[0.05] px-2 py-0.5 rounded border border-white/10 font-semibold">
              {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      )}

      {/* Main Image Stage: Fully Contained with object-contain */}
      <div className={`relative w-full ${aspectRatioClass} bg-[#040711] flex items-center justify-center p-2 sm:p-3.5 overflow-hidden`}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 p-2 sm:p-3.5 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
              idx === currentIndex ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-contain object-center block max-w-full max-h-full"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}

        {/* Minimal Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              aria-label={`Previous screenshot for ${projectTitle}`}
              className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all shadow-lg cursor-pointer hover:scale-105 active:scale-95 opacity-80 hover:opacity-100"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 -ml-0.5" />
            </button>

            <button
              onClick={nextSlide}
              aria-label={`Next screenshot for ${projectTitle}`}
              className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all shadow-lg cursor-pointer hover:scale-105 active:scale-95 opacity-80 hover:opacity-100"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 -mr-0.5" />
            </button>
          </>
        )}

        {/* Subtle Navigation Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-2.5 sm:bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 shadow-md">
            {images.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={(e) => goToSlide(dotIdx, e)}
                aria-label={`Go to screenshot ${dotIdx + 1} of ${projectTitle}`}
                className={`transition-all duration-300 cursor-pointer rounded-full ${
                  dotIdx === currentIndex
                    ? 'w-5 sm:w-6 h-1.5 sm:h-2'
                    : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/40 hover:bg-white/70'
                }`}
                style={{
                  backgroundColor: dotIdx === currentIndex ? accentColor : undefined,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
