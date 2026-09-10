import React, { useState } from 'react';
import { ArrowRight, Menu, X, MessageCircle, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenDiscovery: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDiscovery }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Delivered Systems', href: '#proof-of-work' },
    { name: 'Accelerators', href: '#products' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Founder & CEO', href: '#leadership' },
    { name: 'Compare', href: '#why-axorks' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-[#060913]/85 border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.65)] transition-all">
      <div className="h-20 max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Architecture Core Tag */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex items-center gap-2 p-1.5 rounded-xl bg-[#0E1628]/70 border border-[#F5C761]/30 backdrop-blur-md shadow-[0_0_15px_rgba(245,199,97,0.12)] hover:border-[#F5C761]/60 transition-all"
          >
            <img
              src="https://lh3.googleusercontent.com/aida/AEtjO1WqNLtUj-8pABOwtymLOxpfAuCi_pY6_W6igZ6MmcBDA0L2KY3v_xHm84fNt7e0wXwFPfVqyPy7ArAtzaJ5WJ9kYpxBxfUf6yd289uhJH6pPhDSP3tzmQ0t_DQxaXq9mZoZ7JPgwU1ksb0HaCJBmvfZmlCRSY-pQ91yZYTGK514Qk_OVBN1YG-Zn6FxOlFxd80uq11-dYwWPWiNAqDSPNasokYC22we2EjwWTEHZtaStylWn-1ikH27OIc"
              alt="AXORKS Technologies Brand Logo"
              className="h-9 w-auto object-contain"
            />
          </a>

          <span className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141F36]/90 border border-[#F5C761]/25 text-[#FDE68A] text-[11px] font-mono tracking-widest uppercase shadow-[0_0_12px_rgba(245,199,97,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            2026 ARCHITECTURE CORE
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[12px] font-semibold tracking-wider uppercase">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#CBD5E1] hover:text-[#F5C761] transition-colors py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F5C761] transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Header Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Direct WhatsApp Pill */}
          <a
            href="https://wa.me/923141030223"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141F36]/80 border border-[#10B981]/35 hover:border-[#10B981] hover:bg-[#044E38]/25 text-white font-mono text-[12px] transition-all shadow-[0_0_12px_rgba(16,185,129,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
            </span>
            <span className="text-[#6EE7B7] font-medium">+92 314 103 0223</span>
          </a>

          {/* Book Discovery Call Button */}
          <button
            onClick={onOpenDiscovery}
            className="relative group overflow-hidden px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] text-[12px] uppercase font-bold tracking-wider transition-all duration-300 glow-gold-box hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2 text-[#2A1800]">
              <span>Book Discovery Call</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FDE68A] via-[#F5C761] to-[#6EE7B7] opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-xl bg-[#0E1628] border border-white/10 text-white hover:border-[#F5C761]/40"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/[0.08] bg-[#060913]/98 backdrop-blur-3xl px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex items-center gap-2 pb-3 border-b border-white/[0.06] text-[12px] text-[#FDE68A] font-mono uppercase">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            Direct Access to Senior Architects
          </div>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-[#CBD5E1] hover:text-[#F5C761] transition-colors py-1.5 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-3">
            <a
              href="https://wa.me/923141030223"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0E1628] border border-[#10B981]/40 text-[#6EE7B7] font-mono text-[13px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: +92 314 103 0223</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiscovery();
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] text-[13px] uppercase font-bold tracking-wider glow-gold-box"
            >
              Book Discovery Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
