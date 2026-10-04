import React from 'react';
import { useRouter } from '../router/Router';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-paper editorial-border-t pt-20 pb-10">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex flex-col mb-8">
              <span className="font-serif-headline text-2xl text-ink leading-none tracking-tight">
                Axorks Studio.
              </span>
              <span className="font-sans-mono text-[9px] text-graphite mt-1">
                Engineering
              </span>
            </div>
            <p className="font-sans-body text-sm text-graphite max-w-sm leading-relaxed mb-8">
              A specialized software engineering studio building production-grade web applications, AI systems, and mobile platforms.
            </p>
            <div className="flex flex-col gap-2">
              <span className="font-sans-mono text-[10px] text-graphite uppercase tracking-widest">
                Direct Contact
              </span>
              <a href="mailto:hello@axorks.com" className="font-serif-headline text-lg text-ink hover:text-oxblood transition-colors">
                hello@axorks.com
              </a>
              <a href="https://wa.me/923141030223" className="font-serif-headline text-lg text-ink hover:text-oxblood transition-colors">
                +92 314 103 0223
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div className="flex flex-col gap-6">
              <span className="font-sans-mono text-[10px] text-ink uppercase tracking-widest font-bold">
                Studio
              </span>
              <div className="flex flex-col gap-4 font-sans-body text-sm text-graphite">
                <button onClick={() => navigate('/services')} className="text-left hover:text-ink transition-colors">Expertise</button>
                <button onClick={() => navigate('/work')} className="text-left hover:text-ink transition-colors">Deployments</button>
                <button onClick={() => navigate('/process')} className="text-left hover:text-ink transition-colors">Protocol</button>
                <button onClick={() => navigate('/team')} className="text-left hover:text-ink transition-colors">Architects</button>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <span className="font-sans-mono text-[10px] text-ink uppercase tracking-widest font-bold">
                Locations
              </span>
              <div className="flex flex-col gap-4 font-sans-body text-sm text-graphite">
                <span className="text-left">Islamabad, PK</span>
                <span className="text-left">Karachi, PK</span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <span className="font-sans-mono text-[10px] text-ink uppercase tracking-widest font-bold">
                Legal
              </span>
              <div className="flex flex-col gap-4 font-sans-body text-sm text-graphite">
                <button onClick={() => navigate('/terms')} className="text-left hover:text-ink transition-colors">Terms of Service</button>
                <button onClick={() => navigate('/privacy')} className="text-left hover:text-ink transition-colors">Privacy Policy</button>
                <button onClick={() => navigate('/careers')} className="text-left hover:text-ink transition-colors">Careers</button>
              </div>
            </div>
          </div>
          
        </div>

        <div className="editorial-border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans-body text-xs text-graphite">
            &copy; {currentYear} Axorks Technologies (Pvt) Ltd. All rights reserved.
          </p>
          <div className="font-sans-mono text-[9px] text-graphite uppercase tracking-widest">
            Engineering Excellence
          </div>
        </div>

      </div>
    </footer>
  );
};
