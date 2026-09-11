import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FAQ_ITEMS } from '../data/mockData';
import { Mail, MessageSquare, Send, ChevronDown, CheckCircle2, ArrowRight, Clock } from 'lucide-react';

export const DiscoveryPortal: React.FC = () => {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'AI Automation & Intelligent Systems',
    budget: '$1,000 to $3,000 (Starter Milestone)',
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
    <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative bg-[var(--bg-secondary)]/40 border-t border-[var(--glass-border)]" id="contact">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header: Conversion First */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-2 border-[var(--gold)]/30 text-xs uppercase text-[var(--gold)] tracking-widest font-semibold font-mono-code mb-3.5">
            <Clock className="w-3.5 h-3.5" />
            <span>24-Hour Proposal Turnaround</span>
          </div>

          <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[48px] text-[var(--text-primary)] font-extrabold tracking-tight">
            Request a Fixed-Price Proposal.
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed font-normal">
            Projects start from $1,000. Share your requirements below to receive an itemized technical scope, milestone breakdown, and timeline from our senior engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ─── Frictionless Proposal Intake Form (7 Cols) ─────────────────── */}
          <div className="lg:col-span-7 glass-2 holographic-edge rounded-3xl p-6 sm:p-8 lg:p-10 spatial-card shadow-[0_24px_70px_rgba(0,0,0,0.8)]">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--glass-border)]">
              <div>
                <h3 className="font-headline text-xl font-bold text-[var(--text-primary)]">
                  Project Inquiry &amp; Scope
                </h3>
                <p className="text-xs text-[var(--text-muted)] font-mono-code mt-0.5">
                  Milestone-backed delivery • Zero hourly billable lock-in
                </p>
              </div>

              <span className="px-3 py-1 rounded-full bg-[var(--emerald)]/15 text-[var(--emerald)] text-[11px] font-mono-code border border-[var(--emerald)]/30 hidden sm:inline-block font-semibold">
                Starts from $1,000
              </span>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold font-mono-code mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.fullName}
                      onChange={(e) => setFormState((prev) => ({ ...prev, fullName: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--gold)] transition-all placeholder:text-[var(--text-muted)]"
                      placeholder="e.g. Alexander Vance"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold font-mono-code mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--gold)] transition-all placeholder:text-[var(--text-muted)]"
                      placeholder="alexander@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold font-mono-code mb-2">
                      WhatsApp / Phone
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState((prev) => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--gold)] transition-all placeholder:text-[var(--text-muted)]"
                      placeholder="+92 314 103 0223"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold font-mono-code mb-2">
                      Service Needed
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState((prev) => ({ ...prev, service: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--gold)] transition-all cursor-pointer"
                    >
                      <option value="AI Automation & Intelligent Systems">AI Automation &amp; Intelligent Systems</option>
                      <option value="Custom Web Applications">Custom Web Applications</option>
                      <option value="Web3 & Decentralized Applications">Web3 &amp; Decentralized Applications</option>
                      <option value="Mobile Apps">Mobile Apps (Flutter / Native)</option>
                      <option value="Ongoing Support & Infrastructure">Ongoing Support &amp; Maintenance</option>
                      <option value="Proprietary Product Development">Proprietary Product Development</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold font-mono-code mb-2">
                    Estimated Budget Target (Projects start from $1,000)
                  </label>
                  <select
                    value={formState.budget}
                    onChange={(e) => setFormState((prev) => ({ ...prev, budget: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--gold)] transition-all cursor-pointer"
                  >
                    <option value="$1,000 to $3,000 (Starter Milestone)">$1,000 to $3,000 (Starter Milestone / MVP)</option>
                    <option value="$3,000 to $8,000 (Production Scale)">$3,000 to $8,000 (Production Web or Mobile App)</option>
                    <option value="$8,000 to $15,000 (Complex Multi-AI / Web3)">$8,000 to $15,000 (Complex Multi-AI / Web3)</option>
                    <option value="$15,000+ (Full Platform Architecture)">$15,000+ (Full Custom Architecture)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold font-mono-code mb-2">
                    Brief Description of Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.scope}
                    onChange={(e) => setFormState((prev) => ({ ...prev, scope: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--gold)] transition-all placeholder:text-[var(--text-muted)] resize-none"
                    placeholder="Describe your current goals, core features needed, or technical challenges..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full magnetic-btn inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] text-xs sm:text-sm font-headline font-bold uppercase tracking-wider glow-gold-jewel cursor-pointer shadow-xl transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Fixed-Price Proposal (24h Review)</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[var(--text-muted)] font-mono-code">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--emerald)]" />
                  <span>Direct email dispatch to contact@axorks.com</span>
                </div>
              </form>
            ) : (
              <div className="text-center py-14 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-[var(--emerald)]/20 border border-[var(--emerald)]/40 flex items-center justify-center mx-auto text-[var(--emerald)]">
                  <Send className="w-7 h-7" />
                </div>
                <h4 className="font-display-hero text-2xl font-bold text-[var(--text-primary)]">
                  Inquiry Dispatched
                </h4>
                <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
                  Our senior engineering team has received your details. We will review your requirements and follow up within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase font-mono-code text-[var(--gold)] underline mt-4 cursor-pointer"
                >
                  Submit another inquiry
                </button>
              </div>
            )}
          </div>

          {/* ─── WhatsApp & Email Fast-Track + FAQ (5 Cols) ─────────────────── */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct WhatsApp Fast Track */}
            <div className="glass-2 holographic-edge rounded-3xl p-6 sm:p-7 spatial-card border-[var(--emerald)]/35 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-[var(--emerald)]/15 border border-[var(--emerald)]/40 flex items-center justify-center text-[var(--emerald)]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-base text-[var(--text-primary)]">
                    Fast-Track on WhatsApp
                  </h4>
                  <p className="text-xs text-[var(--emerald)] font-mono-code font-semibold">
                    Direct with engineering desk
                  </p>
                </div>
              </div>

              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                Have a quick question or prefer instant messaging? Reach out directly to our team in Karachi &amp; Islamabad.
              </p>

              <a
                href="https://wa.me/923141030223"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full magnetic-btn inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#10B981] to-[#059669] text-white text-xs font-mono-code font-bold uppercase tracking-wider transition-all shadow-md"
              >
                <span>WhatsApp: +92 314 103 0223</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Email */}
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
                  <h4 className="font-headline font-bold text-base text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors">
                    Direct Email
                  </h4>
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
            <div className="space-y-2.5">
              <h4 className="font-headline text-lg font-bold text-[var(--text-primary)] mb-3 px-1">
                Frequently Asked Questions
              </h4>

              {FAQ_ITEMS.map((faq) => {
                const isOpen = expandedFaq === faq.id;

                return (
                  <div
                    key={faq.id}
                    className="glass-2 holographic-edge rounded-2xl overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : faq.id)}
                      className="w-full px-5 py-3.5 text-left flex items-center justify-between gap-3 text-sm font-headline font-semibold text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[var(--text-muted)] transition-transform duration-300 shrink-0 ${
                          isOpen ? 'rotate-180 text-[var(--gold)]' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal border-t border-[var(--glass-border)] pt-3">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
