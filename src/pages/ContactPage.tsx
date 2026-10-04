import React from 'react';

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full pt-32 pb-20 lg:pt-40 lg:pb-32 bg-paper min-h-[80vh]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif-display text-4xl sm:text-5xl text-ink mb-12">Initiate Engagement</h1>
        <div className="editorial-border-t pt-12 flex flex-col gap-8 max-w-lg">
           <p className="font-sans-body text-graphite">We respond to all technical inquiries within 24 hours with a strict fixed-price scoping outline.</p>
           
           <a href="mailto:hello@axorks.com" className="font-serif-headline text-2xl text-ink hover:text-oxblood transition-colors">
              hello@axorks.com
           </a>
           <a href="https://wa.me/923141030223" className="font-serif-headline text-2xl text-ink hover:text-oxblood transition-colors">
              WhatsApp: +92 314 103 0223
           </a>
        </div>
      </div>
    </div>
  );
};
