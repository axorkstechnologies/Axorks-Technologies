import React from 'react';
import { useRouter } from '../router/Router';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full surface-dark texture-noise border-t border-dark pt-24 pb-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex flex-col mb-10">
              <span className="font-serif-headline text-3xl text-[var(--color-text-primary-dark)] leading-none tracking-tight">
                Axorks Studio.
              </span>
            </div>
            <p className="font-sans-body text-lg text-[var(--color-text-secondary-dark)] max-w-sm leading-relaxed mb-12">
              An elite software engineering studio delivering production-grade enterprise platforms, AI architectures, and mobile systems.
            </p>
            <div className="flex flex-col gap-4">
              <span className="font-sans-mono text-[var(--color-text-secondary-dark)]">
                Direct Contact
              </span>
              <a href="mailto:hello@axorks.com" className="font-serif-headline text-2xl text-[var(--color-text-primary-dark)] hover:text-[var(--color-bronze)] transition-colors">
                hello@axorks.com
              </a>
              <a href="https://wa.me/923141030223" className="font-serif-headline text-2xl text-[var(--color-text-primary-dark)] hover:text-[var(--color-bronze)] transition-colors">
                +92 314 103 0223
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="flex flex-col gap-8">
              <span className="font-sans-mono text-[var(--color-bronze)] font-bold">
                Studio
              </span>
              <div className="flex flex-col gap-5 font-sans-body text-[var(--color-text-secondary-dark)]">
                <button onClick={() => navigate('/services')} className="text-left hover:text-[var(--color-text-primary-dark)] transition-colors">Expertise</button>
                <button onClick={() => navigate('/work')} className="text-left hover:text-[var(--color-text-primary-dark)] transition-colors">Deployments</button>
                <button onClick={() => navigate('/process')} className="text-left hover:text-[var(--color-text-primary-dark)] transition-colors">Protocol</button>
                <button onClick={() => navigate('/team')} className="text-left hover:text-[var(--color-text-primary-dark)] transition-colors">Architects</button>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <span className="font-sans-mono text-[var(--color-bronze)] font-bold">
                Locations
              </span>
              <div className="flex flex-col gap-5 font-sans-body text-[var(--color-text-secondary-dark)]">
                <span className="text-left">Islamabad, PK</span>
                <span className="text-left">Karachi, PK</span>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <span className="font-sans-mono text-[var(--color-bronze)] font-bold">
                Legal
              </span>
              <div className="flex flex-col gap-5 font-sans-body text-[var(--color-text-secondary-dark)]">
                <button onClick={() => navigate('/terms')} className="text-left hover:text-[var(--color-text-primary-dark)] transition-colors">Terms of Service</button>
                <button onClick={() => navigate('/privacy')} className="text-left hover:text-[var(--color-text-primary-dark)] transition-colors">Privacy Policy</button>
                <button onClick={() => navigate('/careers')} className="text-left hover:text-[var(--color-text-primary-dark)] transition-colors">Careers</button>
              </div>
            </div>
          </div>
          
        </div>

        <div className="border-t border-dark pt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="font-sans-body text-sm text-[var(--color-text-secondary-dark)]">
            &copy; {currentYear} Axorks Technologies (Pvt) Ltd. All rights reserved.
          </p>
          <div className="font-sans-mono text-[var(--color-text-secondary-dark)]">
            Engineering Excellence
          </div>
        </div>

      </div>
    </footer>
  );
};
