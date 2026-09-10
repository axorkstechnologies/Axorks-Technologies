import React from 'react';
import { MessageSquare, Mail, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#04070F] text-[#CBD5E1] border-t border-white/[0.08] py-14 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1WqNLtUj-8pABOwtymLOxpfAuCi_pY6_W6igZ6MmcBDA0L2KY3v_xHm84fNt7e0wXwFPfVqyPy7ArAtzaJ5WJ9kYpxBxfUf6yd289uhJH6pPhDSP3tzmQ0t_DQxaXq9mZoZ7JPgwU1ksb0HaCJBmvfZmlCRSY-pQ91yZYTGK514Qk_OVBN1YG-Zn6FxOlFxd80uq11-dYwWPWiNAqDSPNasokYC22we2EjwWTEHZtaStylWn-1ikH27OIc"
                alt="AXORKS Technologies"
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-[#94A3B8] max-w-sm leading-relaxed">
              Architecting high-yield custom web platforms, intelligent autonomous AI agents, and enterprise mobile software. 100% fixed-price milestone contracts.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#10B981]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>COMMISSIONS OPEN • PROJECTS START FROM $1,000</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-white uppercase font-bold tracking-wider">Navigation</div>
            <ul className="space-y-2">
              <li>
                <a href="#capabilities" className="hover:text-[#F5C761] transition-colors">
                  Engineering Capabilities
                </a>
              </li>
              <li>
                <a href="#proof-of-work" className="hover:text-[#F5C761] transition-colors">
                  Delivered Architectures
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#F5C761] transition-colors">
                  Proprietary Accelerators
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-[#F5C761] transition-colors">
                  4-Stage Methodology
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-[#F5C761] transition-colors">
                  Founder &amp; CEO
                </a>
              </li>
              <li>
                <a href="#why-axorks" className="hover:text-[#F5C761] transition-colors">
                  Traditional Agency Comparison
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Locations */}
          <div className="lg:col-span-4 space-y-3 font-mono text-xs">
            <div className="text-white uppercase font-bold tracking-wider">Direct Access</div>
            <div className="space-y-2 text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F5C761]" />
                <a href="mailto:contact@axorks.com" className="hover:text-white transition-colors">
                  contact@axorks.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#10B981]" />
                <a
                  href="https://wa.me/923141030223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +92 314 103 0223 (WhatsApp Desk)
                </a>
              </div>
              <div className="pt-2 text-[11px] leading-relaxed">
                <div>HQ: Shahrah-e-Faisal / Clifton, Karachi</div>
                <div>R&amp;D: Cyber Center, Blue Area, Islamabad</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>© 2026 Axorks Pvt Limited. Registered Software Corporation.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
