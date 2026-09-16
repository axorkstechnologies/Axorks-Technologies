import React from 'react';
import { ArrowRight, MessageSquare, MapPin } from 'lucide-react';
import { useRouter } from '../router/Router';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { navigate } = useRouter();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer className="w-full border-t border-[var(--glass-border)] pt-20 pb-10 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-[var(--gold)]/40 bg-[#111622] flex items-center justify-center shrink-0">
                <img src="/Logos/axorks_monogram.png" alt="AXORKS emblem" className="w-full h-full object-contain p-0.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-lg font-extrabold tracking-widest text-[var(--text-primary)] leading-none">
                  AXORKS
                </span>
                <span className="text-[8px] font-mono-code text-[var(--text-muted)] tracking-widest uppercase mt-0.5">
                  TECHNOLOGIES
                </span>
              </div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm mb-8">
              AI-first software engineering studio. Custom web applications, autonomous AI systems, and Flutter mobile platforms.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com/company/axorks-technologies" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors text-sm font-headline uppercase tracking-wider font-semibold">LinkedIn</a>
              <span className="text-[var(--text-muted)] opacity-50">•</span>
              <a href="https://github.com/YousufPiryani" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors text-sm font-headline uppercase tracking-wider font-semibold">GitHub</a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-mono-code text-[10px] font-bold uppercase tracking-widest text-[var(--gold)] mb-6">Studio</h4>
            <ul className="space-y-4">
              <li><a href="/services" onClick={(e) => handleNavClick(e, '/services')} className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors">Capabilities</a></li>
              <li><a href="/work" onClick={(e) => handleNavClick(e, '/work')} className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors">Verified Work</a></li>
              <li><a href="/process" onClick={(e) => handleNavClick(e, '/process')} className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors">Delivery Process</a></li>
              <li><a href="/team" onClick={(e) => handleNavClick(e, '/team')} className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors">Engineering Team</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-mono-code text-[10px] font-bold uppercase tracking-widest text-[var(--emerald)] mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="/blog" onClick={(e) => handleNavClick(e, '/blog')} className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors">Insights & Architecture</a></li>
              <li><a href="/careers" onClick={(e) => handleNavClick(e, '/careers')} className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors">Careers</a></li>
              <li><a href="/privacy" onClick={(e) => handleNavClick(e, '/privacy')} className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" onClick={(e) => handleNavClick(e, '/terms')} className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-mono-code text-[10px] font-bold uppercase tracking-widest text-[#0284C7] mb-6">Direct Access</h4>
            <ul className="space-y-4 mb-6">
              <li>
                <a href="mailto:contact@axorks.com" className="group flex items-center gap-3">
                  <span className="text-sm text-[var(--text-secondary)] group-hover:text-white transition-colors">contact@axorks.com</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/923141030223" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
                  <span className="text-sm text-[var(--text-secondary)] group-hover:text-[#0D9488] transition-colors">+92 314 103 0223</span>
                </a>
              </li>
            </ul>
            <div className="flex flex-col gap-2 pt-6 border-t border-[var(--glass-border)]">
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-mono-code">
                <MapPin className="w-3.5 h-3.5" /> Karachi, Pakistan
              </div>
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-mono-code">
                <MapPin className="w-3.5 h-3.5" /> Islamabad, Pakistan
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-[var(--glass-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[var(--text-muted)]">
            &copy; {currentYear} Axorks Pvt Limited. All rights reserved.
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs font-mono-code text-center">
            <span className="text-[#38BDF8] font-semibold">
              Serving USA &bull; UK &bull; Europe &bull; Saudi Arabia &bull; UAE &bull; Kuwait &bull; Bahrain
            </span>
            <span className="hidden sm:inline text-[var(--text-muted)] opacity-50">|</span>
            <span className="text-[var(--text-muted)]">Registered Private Software Company</span>
            <span className="hidden sm:inline text-[var(--text-muted)] opacity-50">•</span>
            <span className="text-[var(--text-muted)]">Karachi &amp; Islamabad</span>
          </div>
        </div>
      </div>
    </footer>
  );
};