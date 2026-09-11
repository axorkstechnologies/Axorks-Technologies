import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenDiscovery: () => void;
}

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Delivered Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Team', href: '#team' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenDiscovery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'glass-2 border-b border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.6)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[76px]">
        {/* Official Metallic Logo & Wordmark — Fully Visible & Perfectly Framed */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          {/* Approved 3D Metallic Gunmetal & Gold AX Emblem */}
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden border border-[#F5C761]/45 shadow-[0_0_20px_rgba(245,199,97,0.25)] bg-[#111622] flex items-center justify-center group-hover:border-[#F5C761] transition-all shrink-0">
            <img
              src="/Logos/axorks_monogram.png"
              alt="AXORKS Technologies official metallic emblem"
              className="w-full h-full object-contain p-0.5 transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-headline text-lg sm:text-xl font-extrabold tracking-widest text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors leading-none">
              AXORKS
            </span>
            <span className="text-[9px] font-mono-code text-[var(--text-muted)] tracking-widest uppercase mt-0.5">
              TECHNOLOGIES
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-2 text-xs font-headline font-semibold text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors uppercase tracking-wider cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3.5">
          <button
            onClick={onOpenDiscovery}
            className="magnetic-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] text-xs font-headline font-bold uppercase tracking-wider glow-gold-jewel cursor-pointer shadow-lg"
          >
            <span>Book Free Discovery Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-xl glass-2 border-white/10 flex items-center justify-center text-[var(--text-primary)] hover:text-[var(--gold)] transition-all cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden glass-2 border-t border-white/[0.08]"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 rounded-xl text-[var(--text-secondary)] hover:text-[var(--gold)] hover:bg-white/[0.04] transition-all text-xs font-headline font-semibold uppercase tracking-wider cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ))}

              <div className="pt-3 mt-2 border-t border-white/[0.06]">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenDiscovery();
                  }}
                  className="w-full magnetic-btn inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] text-xs font-headline font-bold uppercase tracking-wider cursor-pointer shadow-lg"
                >
                  <span>Book Free Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
