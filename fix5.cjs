const fs = require('fs');

const headerCode = `import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageSquare, ArrowRight } from 'lucide-react';
import { useRouter, RoutePath } from '../router/Router';

interface HeaderProps {
  onOpenDiscovery?: () => void;
}

const NAV_LINKS: { label: string; path: RoutePath }[] = [
  { label: 'Services', path: '/services' },
  { label: 'Work', path: '/work' },
  { label: 'Process', path: '/process' },
  { label: 'Team', path: '/team' },
  { label: 'Contact', path: '/contact' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenDiscovery }) => {
  const { path: currentPath, navigate } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
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
    <header className="fixed top-4 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">
      <div className={\`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-2xl w-full max-w-6xl \${
        scrolled 
          ? 'bg-[#FAF8F5]/85 backdrop-blur-xl border border-[#0A0F1D]/5 shadow-[0_8px_30px_rgba(10,15,29,0.06)] py-3 px-4 sm:px-6' 
          : 'bg-[#0A0F1D]/60 backdrop-blur-md border border-white/10 py-4 px-4 sm:px-8'
      }\`}>
        <div className="flex items-center justify-between">
          
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 group text-left cursor-pointer"
            aria-label="AXORKS Home"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-[10px] overflow-hidden border border-[#C9972E]/30 bg-[#0A0F1D] shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
              <img
                src="/Logos/axorks_monogram.png"
                alt="AXORKS emblem"
                className="w-full h-full object-contain p-1.5"
              />
            </div>
            <div className="flex flex-col">
              <span className={\`font-headline text-lg sm:text-xl font-extrabold tracking-widest transition-colors leading-none \${
                scrolled ? 'text-[#0A0F1D]' : 'text-white'
              }\`}>
                AXORKS
              </span>
              <span className={\`text-[8px] sm:text-[9px] font-mono-code tracking-widest uppercase mt-0.5 \${
                scrolled ? 'text-[#64748B]' : 'text-white/60'
              }\`}>
                TECHNOLOGIES
              </span>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={\`px-4 py-2 text-[11px] font-headline uppercase tracking-wider transition-all rounded-lg cursor-pointer \${
                    scrolled
                      ? (isActive ? 'bg-[#0A0F1D]/5 text-[#0A0F1D] font-bold' : 'text-[#334155] hover:text-[#0A0F1D] hover:bg-[#0A0F1D]/5 font-semibold')
                      : (isActive ? 'bg-white/10 text-white font-bold' : 'text-white/70 hover:text-white hover:bg-white/5 font-semibold')
                  }\`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/923141030223"
              target="_blank"
              rel="noopener noreferrer"
              className={\`p-2 rounded-lg transition-colors flex items-center justify-center \${
                scrolled ? 'text-[#0D9488] bg-[#0D9488]/10 hover:bg-[#0D9488]/20' : 'text-white bg-white/10 hover:bg-white/20'
              }\`}
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={handleCta}
              className={\`magnetic-btn px-5 py-2.5 rounded-xl font-headline text-[11px] uppercase tracking-wider font-bold transition-all flex items-center gap-2 \${
                scrolled 
                  ? 'bg-[#0A0F1D] text-white hover:bg-[#1E293B] shadow-md' 
                  : 'bg-[var(--gold)] text-[#0A0F1D] hover:bg-[var(--gold-light)] shadow-[0_0_20px_rgba(201,151,46,0.3)]'
              }\`}
            >
              <span>Book Discovery Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={\`lg:hidden p-2 rounded-lg transition-colors \${
              scrolled ? 'text-[#0A0F1D] hover:bg-[#0A0F1D]/5' : 'text-white hover:bg-white/10'
            }\`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[80px] left-4 right-4 pointer-events-auto bg-[#FAF8F5]/95 backdrop-blur-xl border border-[#0A0F1D]/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={\`w-full text-left px-4 py-3 rounded-xl text-sm font-headline tracking-wide uppercase transition-colors \${
                    currentPath === link.path ? 'bg-[#0A0F1D]/5 text-[#0A0F1D] font-bold' : 'text-[#334155] font-semibold hover:bg-[#0A0F1D]/5'
                  }\`}
                >
                  {link.label}
                </button>
              ))}
              <div className="h-px bg-[#0A0F1D]/10 my-2" />
              <button
                onClick={handleCta}
                className="w-full flex items-center justify-between px-4 py-3.5 bg-[#0A0F1D] text-white rounded-xl font-headline text-xs font-bold tracking-wider uppercase"
              >
                <span>Book Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/923141030223"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-3 bg-[#0D9488]/10 text-[#0D9488] rounded-xl font-headline text-xs font-bold tracking-wider uppercase"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: +92 314 103 0223</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};`;
fs.writeFileSync('src/components/Header.tsx', headerCode);

// Fix Footer Logo
let footerCode = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footerCode = footerCode.replace(
  /w-8 h-8 rounded-lg overflow-hidden border border-\\[var\(--gold\)\\]\/40 bg-\\[#111622\\] flex items-center justify-center shrink-0/,
  'w-9 h-9 rounded-[10px] overflow-hidden border border-[#C9972E]/30 bg-[#0A0F1D] shadow-sm flex items-center justify-center shrink-0 p-1.5'
);
footerCode = footerCode.replace(
  /className=\\"w-full h-full object-contain p-0\.5\\"/,
  'className=\\"w-full h-full object-contain\\"'
);
fs.writeFileSync('src/components/Footer.tsx', footerCode);

// Fix low contrast in HomePage Escalation Block
let homeCode = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');
homeCode = homeCode.replace(
  /text-\[var\(--text-muted-dark\)\\]/g,
  'text-white/80 font-medium'
);
fs.writeFileSync('src/pages/HomePage.tsx', homeCode);

console.log('Fixed Header, Footer, and HomePage contrast');
