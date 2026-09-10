import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FAQ_ITEMS } from '../data/mockData';
import { ArrowRight, Mail, MessageSquare, Send, ChevronDown } from 'lucide-react';

export const DiscoveryPortal: React.FC = () => {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'webapp',
    scope: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { fullName, email, scope } = formState;
    const body = `Name: ${fullName}%0AEmail: ${email}%0APhone: ${formState.phone}%0AService: ${formState.service}%0A%0AProject Brief:%0A${scope}`;
    window.open(`mailto:contact@axorks.com?subject=Project Inquiry from ${fullName}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section className="w-full px-4 lg:px-8 py-20 lg:py-28 border-t border-[var(--border-subtle)]" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-xs uppercase text-[#F5C761] tracking-wider font-semibold font-mono-code">
            Start Your Project
          </div>
          <h2 className="mt-3 font-display-hero text-3xl md:text-4xl lg:text-[48px] text-[var(--text-primary)] font-bold tracking-tight">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-[#F5C761] to-[#10B981] bg-clip-text text-transparent">
              Remarkable.
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)] text-base lg:text-lg">
            Every project starts with a free discovery call. Tell us what you need, and we'll respond within 24 hours with a clear proposal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-6 sm:p-8 chromatic-border"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.fullName}
                    onChange={(e) => setFormState(prev => ({ ...prev, fullName: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)]/80 border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[#F5C761]/50 focus:shadow-[0_0_15px_rgba(245,199,97,0.1)] transition-all placeholder:text-[var(--text-muted)]/50"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)]/80 border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[#F5C761]/50 transition-all placeholder:text-[var(--text-muted)]/50"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-2">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)]/80 border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[#F5C761]/50 transition-all placeholder:text-[var(--text-muted)]/50"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-2">
                    Service Interest
                  </label>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState(prev => ({ ...prev, service: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)]/80 border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[#F5C761]/50 transition-all cursor-pointer"
                  >
                    <option value="webapp">Custom Web Application</option>
                    <option value="ai">AI Automation & Integrations</option>
                    <option value="mobile">Mobile App (Flutter/iOS/Android)</option>
                    <option value="web3">Web3 & Blockchain</option>
                    <option value="support">Ongoing Support & Maintenance</option>
                    <option value="product">Product Development</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-2">
                    Project Brief *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.scope}
                    onChange={(e) => setFormState(prev => ({ ...prev, scope: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)]/80 border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[#F5C761]/50 transition-all placeholder:text-[var(--text-muted)]/50 resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full magnetic-btn inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] text-[13px] uppercase font-bold tracking-wider glow-gold-box cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Inquiry</span>
                </button>

                <p className="text-center text-[11px] text-[var(--text-muted)]">
                  We respond to every inquiry within 24 hours.
                </p>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#10B981]/20 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-[#10B981]" />
                </div>
                <h3 className="font-headline text-xl font-bold text-[var(--text-primary)]">
                  Inquiry Sent!
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  We'll get back to you within 24 hours with a clear proposal.
                </p>
              </div>
            )}
          </motion.div>

          {/* Right Column: Direct Contact + FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Direct Contact Cards */}
            <div className="space-y-3">
              <h3 className="font-headline text-lg font-bold text-[var(--text-primary)] mb-4">
                Or reach us directly
              </h3>

              <a
                href="mailto:contact@axorks.com"
                className="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-[#F5C761]/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F5C761]/10 border border-[#F5C761]/30 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#F5C761]" />
                </div>
                <div>
                  <div className="text-[11px] uppercase text-[var(--text-muted)] font-mono-code">Email</div>
                  <div className="font-mono-code text-sm text-[var(--text-primary)] group-hover:text-[#F5C761] transition-colors">
                    contact@axorks.com
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/923141030223"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-[#10B981]/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-[#10B981]" />
                </div>
                <div>
                  <div className="text-[11px] uppercase text-[var(--text-muted)] font-mono-code">WhatsApp / Phone</div>
                  <div className="font-mono-code text-sm text-[var(--text-primary)] group-hover:text-[#10B981] transition-colors">
                    +92 314 103 0223
                  </div>
                </div>
              </a>
            </div>

            {/* FAQ Accordion */}
            <div>
              <h3 className="font-headline text-lg font-bold text-[var(--text-primary)] mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-2">
                {FAQ_ITEMS.map((faq) => (
                  <div key={faq.id} className="glass-card rounded-xl overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                      className="w-full text-left px-4 py-3.5 flex items-center justify-between gap-3 cursor-pointer hover:bg-[var(--bg-tertiary)]/50 transition-colors"
                    >
                      <span className="text-sm font-medium text-[var(--text-primary)]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 text-[var(--text-muted)] transition-transform duration-300 ${
                          expandedFaq === faq.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedFaq === faq.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="px-4 pb-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
