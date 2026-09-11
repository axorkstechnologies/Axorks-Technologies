import React, { useState } from 'react';
import { useNavigate } from '../router/Router';
import { FAQ_ITEMS } from '../data/mockData';
import { Send, CheckCircle2, MessageSquare, Mail, ChevronDown, ArrowRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'AI Automation & Intelligent Systems',
    budget: '$1,000 to $3,000 (Milestone Delivery)',
    scope: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<string | null>('faq-1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { fullName, email, phone, service, budget, scope } = formState;
    const body = `Full Name: ${fullName}%0AEmail: ${email}%0APhone/WhatsApp: ${phone}%0AService Category: ${service}%0ABudget Target: ${budget}%0A%0AProject Scope & Requirements:%0A${scope}`;
    window.open(`mailto:contact@axorks.com?subject=New Architecture Inquiry: ${fullName}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="w-full pt-8 pb-20 lg:pb-28">
      {/* Header Banner */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[var(--gold)] mb-4">
            <button onClick={() => navigate('/')} className="hover:underline cursor-pointer">Home</button>
            <span>/</span>
            <span>Contact &amp; Proposals</span>
          </div>

          <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Request a Fixed-Price Proposal.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed font-normal">
            Projects start from $1,000. Share your system requirements below to receive an itemized technical scope, milestone schedule, and transparent commercial proposal from senior engineering within 24 hours.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-2 border border-[var(--gold)]/30 text-xs uppercase text-[var(--gold)] tracking-widest font-semibold font-mono-code">
            <span>24-Hour Technical Proposal Turnaround</span>
          </div>
        </div>
      </section>

      {/* Main Intake Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ─── Proposal Intake Form on Refined Soft-Ivory Luxury Surface ─── */}
          <div className="lg:col-span-7 surface-ivory rounded-3xl p-6 sm:p-8 lg:p-10 spatial-card shadow-2xl border border-[rgba(214,207,195,0.85)]">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[rgba(214,207,195,0.7)]">
              <div>
                <h2 className="font-headline text-xl sm:text-2xl font-bold text-[#0A0F1D]">
                  Project Inquiry &amp; Scope Brief
                </h2>
                <p className="text-xs text-[#475569] font-mono-code mt-0.5 font-medium">
                  Milestone-backed delivery • Zero hourly surprises
                </p>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-md bg-[#0F172A] text-white text-[10px] font-mono-code font-bold uppercase tracking-wider">
                Fixed-Price Proposal
              </span>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#058A5E]/15 text-[#058A5E] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-display-hero text-2xl font-bold text-[#0A0F1D]">
                  Proposal Request Dispatched
                </h3>
                <p className="text-sm text-[#1E293B] max-w-md mx-auto">
                  Your project requirements have been prepared. An architect from AXORKS Technologies will review your specifications and contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-[#0F172A] text-white text-xs font-headline font-bold uppercase tracking-wider hover:bg-[#1E293B] transition-colors cursor-pointer"
                >
                  Submit Another Scope
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-headline font-bold uppercase tracking-wider text-[#0A0F1D] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      placeholder="e.g. Tariq Malik"
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(203,195,182,0.9)] bg-white text-[#0A0F1D] placeholder-[#64748B] text-sm focus:outline-none focus:ring-2 focus:ring-[#B48310] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-headline font-bold uppercase tracking-wider text-[#0A0F1D] mb-1.5">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. tariq@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(203,195,182,0.9)] bg-white text-[#0A0F1D] placeholder-[#64748B] text-sm focus:outline-none focus:ring-2 focus:ring-[#B48310] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-headline font-bold uppercase tracking-wider text-[#0A0F1D] mb-1.5">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="e.g. +92 300 1234567"
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(203,195,182,0.9)] bg-white text-[#0A0F1D] placeholder-[#64748B] text-sm focus:outline-none focus:ring-2 focus:ring-[#B48310] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-headline font-bold uppercase tracking-wider text-[#0A0F1D] mb-1.5">
                      Primary Service Category
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(203,195,182,0.9)] bg-white text-[#0A0F1D] text-sm focus:outline-none focus:ring-2 focus:ring-[#B48310] transition-all cursor-pointer"
                    >
                      <option value="AI Automation & Intelligent Systems">AI Automation &amp; Intelligent Systems</option>
                      <option value="Custom Web Applications">Custom Web Applications</option>
                      <option value="Web3 & Decentralized Applications">Web3 &amp; Decentralized Applications</option>
                      <option value="Mobile Apps">Mobile Apps</option>
                      <option value="Ongoing Support & Infrastructure">Ongoing Support &amp; Infrastructure</option>
                      <option value="Proprietary Product Development">Proprietary Product Development</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-headline font-bold uppercase tracking-wider text-[#0A0F1D] mb-1.5">
                    Budget Target (Milestone-Based)
                  </label>
                  <select
                    value={formState.budget}
                    onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(203,195,182,0.9)] bg-white text-[#0A0F1D] text-sm focus:outline-none focus:ring-2 focus:ring-[#B48310] transition-all cursor-pointer"
                  >
                    <option value="$1,000 to $3,000 (Starter / MVP Milestone)">$1,000 to $3,000 (Starter / MVP Milestone)</option>
                    <option value="$3,000 to $7,500 (Production System)">$3,000 to $7,500 (Production System)</option>
                    <option value="$7,500 to $15,000+ (Enterprise Platform)">$7,500 to $15,000+ (Enterprise Platform)</option>
                    <option value="Undetermined / Scoping Required">Undetermined / Scoping Required</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-headline font-bold uppercase tracking-wider text-[#0A0F1D] mb-1.5">
                    Project Scope &amp; Functional Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.scope}
                    onChange={(e) => setFormState({ ...formState, scope: e.target.value })}
                    placeholder="Briefly describe what you need built, key technical features, desired delivery timeline, or any reference systems..."
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(203,195,182,0.9)] bg-white text-[#0A0F1D] placeholder-[#64748B] text-sm focus:outline-none focus:ring-2 focus:ring-[#B48310] transition-all resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#0F172A] text-white text-xs font-headline font-bold uppercase tracking-wider hover:bg-[#1E293B] transition-all shadow-xl cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Dispatch Proposal Request</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <div className="mt-3 text-center text-[11px] font-mono-code text-[#475569]">
                    <span>Direct email dispatch to contact@axorks.com</span>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* ─── Direct Channels & FAQ Accordion (5 Cols) ──────────────────── */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct WhatsApp Callout */}
            <div className="glass-2 holographic-edge rounded-3xl p-6 sm:p-7 spatial-card border-[var(--emerald)]/35 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-[var(--emerald)]/15 border border-[var(--emerald)]/40 flex items-center justify-center text-[var(--emerald)]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-base text-[var(--text-primary)]">
                    Fast Direct WhatsApp
                  </h3>
                  <p className="text-xs text-[var(--emerald)] font-mono-code font-semibold">
                    Live Engineering Chat
                  </p>
                </div>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                Skip the form and message our engineering leadership directly on WhatsApp for instant project scoping.
              </p>
              <a
                href="https://wa.me/923141030223"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[var(--emerald)] text-[#030712] font-headline font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#0D9668] transition-all shadow-md cursor-pointer"
              >
                <span>WhatsApp: +92 314 103 0223</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Email Card */}
            <a
              href="mailto:contact@axorks.com?subject=Project%20Inquiry%20-%20AXORKS%20Technologies"
              target="_blank"
              rel="noopener noreferrer"
              className="block glass-2 holographic-edge rounded-3xl p-6 sm:p-7 spatial-card border-[var(--gold)]/35 hover:border-[var(--gold)] shadow-xl transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 rounded-2xl bg-[var(--gold)]/15 border border-[var(--gold)]/40 flex items-center justify-center text-[var(--gold)] group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-base text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors">
                    Direct Email
                  </h3>
                  <p className="text-xs text-[var(--gold)] font-mono-code font-semibold">
                    contact@axorks.com
                  </p>
                </div>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Send RFPs, architectural diagrams, and project documents directly to our leadership.
              </p>
            </a>

            {/* FAQ Accordion */}
            <div className="space-y-2.5 pt-2">
              <h3 className="font-headline text-lg font-bold text-[var(--text-primary)] mb-3 px-1">
                Frequently Asked Questions
              </h3>

              {FAQ_ITEMS.map((faq) => {
                const isOpen = expandedFaq === faq.id;

                return (
                  <div
                    key={faq.id}
                    className="glass-2 rounded-2xl border border-[var(--glass-border)] overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : faq.id)}
                      className="w-full px-5 py-3.5 text-left flex items-center justify-between gap-3 text-xs font-headline font-bold text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[var(--gold)] shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-4 text-xs text-[var(--text-secondary)] leading-relaxed border-t border-[var(--glass-border)]/50 pt-2.5">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
