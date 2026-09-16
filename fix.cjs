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
      <div className={\`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] rounded-2xl w-full max-w-6xl \${
        scrolled 
          ? 'bg-white/85 backdrop-blur-xl border border-[var(--text-primary)]/10 shadow-[0_8px_30px_rgba(10,15,29,0.08)] py-3 px-4 sm:px-6' 
          : 'bg-[#0A0F1D]/60 backdrop-blur-md border border-white/10 py-4 px-4 sm:px-8'
      }\`}>
        <div className="flex items-center justify-between">
          
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 group text-left cursor-pointer"
            aria-label="AXORKS Home"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-[var(--gold)]/40 shadow-[0_0_15px_rgba(201,151,46,0.2)] bg-[#111622] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
              <img
                src="/Logos/axorks_monogram.png"
                alt="AXORKS emblem"
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col">
              <span className={\`font-headline text-lg sm:text-xl font-extrabold tracking-widest transition-colors leading-none \${
                scrolled ? 'text-[var(--text-primary)]' : 'text-white'
              }\`}>
                AXORKS
              </span>
              <span className={\`text-[8px] sm:text-[9px] font-mono-code tracking-widest uppercase mt-0.5 \${
                scrolled ? 'text-[var(--text-muted)]' : 'text-white/60'
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
                  ? 'bg-[var(--text-primary)] text-white hover:bg-[#1E293B] shadow-md' 
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
            className="absolute top-[80px] left-4 right-4 pointer-events-auto bg-white/95 backdrop-blur-xl border border-[var(--glass-border)] rounded-2xl shadow-2xl overflow-hidden"
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
                className="w-full flex items-center justify-between px-4 py-3.5 bg-[var(--text-primary)] text-white rounded-xl font-headline text-xs font-bold tracking-wider uppercase"
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

const teamCode = fs.readFileSync('src/components/StudioTeam.tsx', 'utf8');
const fixedTeam = teamCode.replace(/member\.id === 'yousaf-piryani' \? 'object-\[26%_40%\]' : 'object-center'/g, "member.id === 'yousaf-piryani' ? 'object-[26%_40%]' : 'object-center'");
fs.writeFileSync('src/components/StudioTeam.tsx', fixedTeam);

const teamPageCode = fs.readFileSync('src/pages/TeamPage.tsx', 'utf8');
const fixedTeamPage = teamPageCode.replace(/member\.id === 'yousaf-piryani' \? 'object-\[26%_40%\]' : 'object-\[50%_15%\]'/g, "member.id === 'yousaf-piryani' ? 'object-[26%_40%]' : 'object-[50%_15%]'");
fs.writeFileSync('src/pages/TeamPage.tsx', fixedTeamPage);

console.log('Fixed syntax errors');
