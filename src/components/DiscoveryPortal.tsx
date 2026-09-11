import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data/mockData';
import { Mail, MessageSquare, Send, ChevronDown, Sparkles, CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';

export const DiscoveryPortal: React.FC = () => {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Custom Web Application',
    budget: '$1,000 - $3,000 (Starter Milestone)',
    scope: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<string | null>('faq-1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { fullName, email, phone, service, budget, scope } = formState;
    const body = `Full Name: ${fullName}%0AEmail: ${email}%0APhone/WhatsApp: ${phone}%0AService Category: ${service}%0ABudget Target: ${budget}%0A%0AProject Scope & Requirements:%0A${scope}`;
    window.open(`mailto:contact@axorks.com?subject=New Architecture Inquiry — ${fullName}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative bg-[var(--bg-secondary)]/30 border-t border-white/[0.06]" id="contact">
      {/* Ambient Caustic Blob */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#10B981]/10 via-[#F5C761]/6 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-2 border-[#F5C761]/30 text-xs uppercase text-[#F5C761] tracking-widest font-semibold font-mono-code mb-4 shadow-[0_0_20px_rgba(245,199,97,0.15)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>24-Hour Response Guaranteed</span>
          </div>

          <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[52px] text-[var(--text-primary)] font-extrabold tracking-tight">
            Start Your Project With{' '}
            <span className="bg-gradient-to-r from-[#F5C761] via-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
              Confidence.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed font-normal">
            Projects start from $1,000. Tell us what you want to build, and our senior engineering team will produce a comprehensive fixed-price milestone proposal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ─── Frictionless Proposal Form (7 Cols) ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-2 holographic-edge rounded-3xl p-6 sm:p-8 lg:p-10 spatial-card shadow-[0_24px_70px_rgba(0,0,0,0.8)]"
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
              <div>
                <h3 className="font-headline text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                  Architectural Discovery Proposal
                </h3>
                <p className="text-xs text-[var(--text-muted)] font-mono-code mt-0.5">
                  Milestone-backed agreements • 100% IP ownership
                </p>
              </div>

              <span className="px-3 py-1 rounded-full bg-[#10B981]/15 text-[#6EE7B7] text-[11px] font-mono-code border border-[#10B981]/30 hidden sm:inline-block">
                Projects from $1,000
              </span>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold font-mono-code mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.fullName}
                      onChange={(e) => setFormState((prev) => ({ ...prev, fullName: e.target.value }))}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#030712]/80 border border-white/[0.08] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[#F5C761]/60 focus:ring-1 focus:ring-[#F5C761]/60 transition-all placeholder:text-[var(--text-muted)]/50"
                      placeholder="e.g. Alexander Vance"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold font-mono-code mb-2">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#030712]/80 border border-white/[0.08] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[#F5C761]/60 focus:ring-1 focus:ring-[#F5C761]/60 transition-all placeholder:text-[var(--text-muted)]/50"
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
                      className="w-full px-4 py-3.5 rounded-xl bg-[#030712]/80 border border-white/[0.08] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[#F5C761]/60 focus:ring-1 focus:ring-[#F5C761]/60 transition-all placeholder:text-[var(--text-muted)]/50"
                      placeholder="+92 300 000 0000"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold font-mono-code mb-2">
                      Service Domain
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState((prev) => ({ ...prev, service: e.target.value }))}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#030712]/80 border border-white/[0.08] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[#F5C761]/60 transition-all cursor-pointer"
                    >
                      <option value="Custom Web Application">Custom Web Application</option>
                      <option value="AI Automation & Multi-AI Workflows">AI Automation &amp; Multi-AI</option>
                      <option value="Mobile App (Flutter / iOS / Android)">Mobile App (Flutter / Native)</option>
                      <option value="Web3 & Blockchain Systems">Web3 &amp; Smart Contracts</option>
                      <option value="Ongoing Engineering SLA & Support">Ongoing Support &amp; Maintenance</option>
                      <option value="Proprietary Product Development">Product Development</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold font-mono-code mb-2">
                    Estimated Budget Target (Projects from $1,000)
                  </label>
                  <select
                    value={formState.budget}
                    onChange={(e) => setFormState((prev) => ({ ...prev, budget: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#030712]/80 border border-white/[0.08] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[#F5C761]/60 transition-all cursor-pointer"
                  >
                    <option value="$1,000 - $3,000 (Starter Milestone)">$1,000 – $3,000 (Starter Milestone / MVP)</option>
                    <option value="$3,000 - $8,000 (Production Scale)">$3,000 – $8,000 (Production Web / Mobile)</option>
                    <option value="$8,000 - $15,000 (Enterprise Workflow)">$8,000 – $15,000 (Complex Multi-AI / Web3)</option>
                    <option value="$15,000+ (Comprehensive Platform)">$15,000+ (Full Platform Architecture)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold font-mono-code mb-2">
                    Project Scope &amp; Target Outcomes *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.scope}
                    onChange={(e) => setFormState((prev) => ({ ...prev, scope: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#030712]/80 border border-white/[0.08] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[#F5C761]/60 focus:ring-1 focus:ring-[#F5C761]/60 transition-all placeholder:text-[var(--text-muted)]/50 resize-none"
                    placeholder="Briefly describe what you're building, key features, target timeline, or current technical bottlenecks..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full magnetic-btn inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] text-sm font-headline font-bold uppercase tracking-wider glow-gold-jewel cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry for 24-Hour Review</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[var(--text-muted)] font-mono-code">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Direct email dispatch to contact@axorks.com</span>
                </div>
              </form>
            ) : (
              <div className="text-center py-14 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center mx-auto text-[#10B981]">
                  <Send className="w-7 h-7" />
                </div>
                <h4 className="font-display-hero text-2xl font-bold text-[var(--text-primary)]">
                  Inquiry Dispatched Successfully
                </h4>
                <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
                  Muhammad Mujahid and our senior systems architects have received your requirements. Expect an initial technical evaluation within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase font-mono-code text-[#F5C761] underline mt-4 cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </motion.div>

          {/* ─── Fast-Track WhatsApp & Interactive FAQ (5 Cols) ───────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct WhatsApp VIP Gateway */}
            <div className="glass-2 holographic-edge rounded-3xl p-6 sm:p-7 spatial-card border-[#10B981]/35 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-[#10B981]/15 border border-[#10B981]/40 flex items-center justify-center text-[#10B981]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-base text-[var(--text-primary)]">
                    Fast-Track Engineering WhatsApp
                  </h4>
                  <p className="text-xs text-[#6EE7B7] font-mono-code">
                    Typical response: Sub-15 minutes
                  </p>
                </div>
              </div>

              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                Prefer immediate synchronous communication? Jump directly into a chat with our engineering desk in Karachi &amp; Islamabad.
              </p>

              <a
                href="https://wa.me/923141030223"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full magnetic-btn inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#054E38]/80 hover:bg-[#065F46] border border-[#10B981]/40 text-[#A7F3D0] text-xs font-mono-code font-bold uppercase tracking-wider transition-all shadow-md"
              >
                <span>Chat on WhatsApp: +92 314 103 0223</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Email Card */}
            <div className="glass-2 holographic-edge rounded-3xl p-6 sm:p-7 spatial-card border-[#F5C761]/35 shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 rounded-2xl bg-[#F5C761]/15 border border-[#F5C761]/40 flex items-center justify-center text-[#F5C761]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-base text-[var(--text-primary)]">
                    Direct Studio Email
                  </h4>
                  <p className="text-xs text-[#FDE68A] font-mono-code">
                    contact@axorks.com
                  </p>
                </div>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Send RFPs, architectural diagrams, and NDA requests directly to our leadership desk.
              </p>
            </div>

            {/* Interactive Spring FAQ Accordion */}
            <div className="space-y-2.5">
              <h4 className="font-headline text-lg font-bold text-[var(--text-primary)] mb-3 px-1">
                Engineering FAQ
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
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-3 text-sm font-headline font-semibold text-[var(--text-primary)] hover:text-[#F5C761] transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[var(--text-muted)] transition-transform duration-300 shrink-0 ${
                          isOpen ? 'rotate-180 text-[#F5C761]' : ''
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
                          <p className="px-5 pb-5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal border-t border-white/[0.04] pt-3">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
