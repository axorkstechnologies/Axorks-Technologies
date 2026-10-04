import React, { useState, useEffect } from 'react';
import { useRouter, RoutePath } from '../router/Router';

interface HeaderProps {
  onOpenDiscovery?: () => void;
}

const NAV_LINKS: { label: string; path: RoutePath }[] = [
  { label: 'Services', path: '/services' },
  { label: 'Work', path: '/work' },
  { label: 'Protocol', path: '/process' },
  { label: 'Architects', path: '/team' },
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

  const isHome = currentPath === '/';
  const isTransparent = isHome && !scrolled;

  // The Header is entirely solid except at the absolute top of the homepage (Hero).
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ${
        isTransparent 
          ? 'bg-transparent border-b border-transparent' 
          : 'surface-dark border-b border-dark'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto relative z-10">
        <div className="flex items-center justify-between h-24">
          
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 cursor-pointer outline-none"
            aria-label="AXORKS Home"
          >
            <div className="flex flex-col">
              <span className="font-serif-headline text-2xl text-[var(--color-text-primary-dark)] leading-none tracking-tight">
                Axorks Studio.
              </span>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`font-sans-mono transition-colors ${
                    isActive ? 'text-[var(--color-text-primary-dark)]' : 'text-[var(--color-text-secondary-dark)] hover:text-[var(--color-text-primary-dark)]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href="https://wa.me/923141030223"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans-mono text-[var(--color-text-secondary-dark)] hover:text-[var(--color-text-primary-dark)] transition-colors flex items-center gap-2"
            >
              WhatsApp Inquiry
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <button onClick={handleCta} className="bg-[var(--color-text-primary-dark)] text-[var(--color-obsidian)] font-sans-mono py-3 px-6 hover:bg-[var(--color-bronze)] hover:text-[var(--color-text-primary-dark)] transition-colors">
              Book Discovery Call
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[var(--color-text-primary-dark)] p-2 outline-none"
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

      {isOpen && (
        <div className="absolute top-24 left-0 right-0 surface-dark border-b border-dark">
          <div className="flex flex-col p-4 max-w-[1600px] mx-auto">
            {NAV_LINKS.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className="text-left py-4 font-sans-mono text-[var(--color-text-primary-dark)] border-b border-dark"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-6 pb-2 flex flex-col gap-4">
              <button onClick={handleCta} className="bg-[var(--color-text-primary-dark)] text-[var(--color-obsidian)] font-sans-mono py-3 w-full">
                Book Discovery Call
              </button>
              <a
                href="https://wa.me/923141030223"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--color-text-primary-dark)] text-[var(--color-text-primary-dark)] font-sans-mono py-3 w-full text-center"
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
