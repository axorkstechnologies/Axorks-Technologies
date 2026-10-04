import React, { useState, useEffect } from 'react';
import { useRouter, RoutePath } from '../router/Router';

interface HeaderProps {
  onOpenDiscovery?: () => void;
}

const NAV_LINKS: { label: string; path: RoutePath }[] = [
  { label: 'Services', path: '/services' },
  { label: 'Work', path: '/work' },
  { label: 'Process', path: '/process' },
  { label: 'Team', path: '/team' },
  { label: 'Careers', path: '/careers' }
];

export const Header: React.FC<HeaderProps> = ({ onOpenDiscovery }) => {
  const { path: currentPath, navigate } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (path: RoutePath) => {
    setIsOpen(false);
    navigate(path);
  };

  const handleCta = () => {
    setIsOpen(false);
    if (onOpenDiscovery) {
      onOpenDiscovery();
    } else {
      navigate('/contact');
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200 bg-paper ${
        scrolled ? 'editorial-border-b' : 'border-b border-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between h-20">
          
          {/* Typographic Logo (No rounded graphics) */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 cursor-pointer outline-none"
            aria-label="AXORKS Home"
          >
            <div className="flex flex-col">
              <span className="font-serif-headline text-xl text-ink leading-none tracking-tight">
                Axorks Studio.
              </span>
              <span className="font-sans-mono text-[9px] text-graphite mt-1">
                Engineering
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-xs font-sans-mono uppercase tracking-widest transition-colors ${
                    isActive ? 'text-ink border-b border-ink pb-1' : 'text-graphite hover:text-ink pb-1'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/923141030223"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sans-mono text-graphite hover:text-ink transition-colors uppercase tracking-widest flex items-center gap-2"
            >
              WhatsApp
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <div className="w-px h-4 bg-[var(--color-border)] mx-2"></div>
            <button onClick={handleCta} className="btn-primary py-2.5 px-5">
              Book Discovery Call
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-ink p-2 outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-paper editorial-border-b shadow-none">
          <div className="flex flex-col p-4 max-w-[1600px] mx-auto">
            {NAV_LINKS.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className="text-left py-4 text-sm font-sans-mono text-ink editorial-border-b"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-6 pb-2 flex flex-col gap-4">
              <button onClick={handleCta} className="btn-primary w-full">
                Book Discovery Call
              </button>
              <a
                href="https://wa.me/923141030223"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
