import React from 'react';

export const ServicesPage: React.FC = () => {
  return (
    <div className="w-full pt-32 pb-20 lg:pt-40 lg:pb-32 bg-paper min-h-[80vh]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif-display text-4xl sm:text-5xl text-ink mb-12">Engineering Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 editorial-border-t pt-12">
           <div className="flex flex-col">
             <h2 className="font-serif-headline text-2xl text-ink mb-4">AI Automation & Agents</h2>
             <p className="font-sans-body text-graphite">Multi-agent LLM systems, RAG architectures, and custom neural networks.</p>
           </div>
           <div className="flex flex-col">
             <h2 className="font-serif-headline text-2xl text-ink mb-4">Custom Web Applications</h2>
             <p className="font-sans-body text-graphite">Scalable SaaS platforms, React, Next.js, Node.js, and advanced PostgreSQL schema design.</p>
           </div>
           <div className="flex flex-col">
             <h2 className="font-serif-headline text-2xl text-ink mb-4">Flutter Mobile Platforms</h2>
             <p className="font-sans-body text-graphite">Native-feeling iOS and Android systems. Advanced state management and offline-first sync.</p>
           </div>
           <div className="flex flex-col">
             <h2 className="font-serif-headline text-2xl text-ink mb-4">Web3 & Smart Contracts</h2>
             <p className="font-sans-body text-graphite">Decentralized applications, audited smart contracts, and DeFi protocols.</p>
           </div>
        </div>
      </div>
    </div>
  );
};
