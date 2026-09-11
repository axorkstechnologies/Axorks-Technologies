import React from 'react';
import { Mail, MessageSquare, MapPin, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[var(--bg-secondary)]/80 backdrop-blur-2xl relative z-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#F5C761] to-[#D97706] flex items-center justify-center">
                <span className="text-[#2A1800] font-bold text-sm font-headline">A</span>
              </div>
              <span className="font-headline text-xl font-bold text-[var(--text-primary)]">
                AXORKS
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              Axorks Pvt Limited — a registered private software engineering studio. Building custom web applications, AI automations, mobile apps, and Web3 systems.
            </p>
            <div className="flex items-center gap-2 text-[#F5C761] font-mono-code text-xs font-semibold">
              <span>Projects from $1,000</span>
              <span className="text-[var(--text-muted)]">•</span>
              <span>Fixed-Price</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Services', id: 'services' },
                { label: 'Selected Work', id: 'work' },
                { label: 'How We Work', id: 'process' },
                { label: 'Our Team', id: 'team' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-[var(--text-secondary)] hover:text-[#F5C761] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                'Custom Web Applications',
                'AI Automation & Integrations',
                'Mobile Apps (Flutter)',
                'Web3 & Blockchain',
                'Ongoing Support',
                'Product Development',
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-[var(--text-secondary)]">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contact@axorks.com" className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[#F5C761] transition-colors">
                  <Mail className="w-4 h-4 text-[#F5C761]" />
                  <span>contact@axorks.com</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/923141030223" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[#10B981] transition-colors">
                  <MessageSquare className="w-4 h-4 text-[#10B981]" />
                  <span>+92 314 103 0223</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <MapPin className="w-4 h-4 text-[#8B5CF6] mt-0.5 shrink-0" />
                <span>Karachi &amp; Islamabad, Pakistan</span>
              </li>
            </ul>

            <a
              href="https://wa.me/923141030223"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] text-[11px] uppercase font-bold tracking-wider magnetic-btn cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[var(--text-muted)]">
            © {currentYear} Axorks Pvt Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
            <span>Registered Private Company</span>
            <span>•</span>
            <span>Karachi &amp; Islamabad</span>
          </div>
        </div>
      </div>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://axorks.com/#org',
                name: 'AXORKS Technologies',
                legalName: 'Axorks Pvt Limited',
                url: 'https://axorks.com',
                email: 'contact@axorks.com',
                telephone: '+923141030223',
                description: 'Registered private software engineering studio building custom web applications, AI automations, mobile apps, and Web3 systems.',
                foundingDate: '2023',
                founder: {
                  '@type': 'Person',
                  name: 'Muhammad Mujahid',
                  jobTitle: 'Founder & CEO / Chief Systems Architect',
                },
                address: [
                  {
                    '@type': 'PostalAddress',
                    addressLocality: 'Karachi',
                    addressCountry: 'PK',
                  },
                  {
                    '@type': 'PostalAddress',
                    addressLocality: 'Islamabad',
                    addressCountry: 'PK',
                  },
                ],
                sameAs: [],
              },
              {
                '@type': 'LocalBusiness',
                name: 'AXORKS Technologies',
                telephone: '+923141030223',
                email: 'contact@axorks.com',
                priceRange: 'From $1,000',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Karachi',
                  addressCountry: 'PK',
                },
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'How do fixed-price milestone contracts work at AXORKS?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Before writing a single line of code, we produce a comprehensive Technical Specification Document. Projects start from $1,000. You review and test builds on staging before approving payment for each milestone.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do I get 100% intellectual property ownership?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. All source code, design assets, database schemas, and documentation are transferred to your repositories under full commercial ownership.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What is the minimum engagement to work with AXORKS?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Projects start from $1,000. Every project receives a clear fixed-price proposal before development begins.',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
    </footer>
  );
};
