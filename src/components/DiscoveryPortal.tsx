import React, { useState } from 'react';
import {
  Globe,
  Bot,
  Smartphone,
  Terminal,
  Package,
  Layers,
  Send,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  FileCheck2
} from 'lucide-react';
import { EstimateFormState } from '../types';

interface DiscoveryPortalProps {
  initialService?: string;
}

export const DiscoveryPortal: React.FC<DiscoveryPortalProps> = ({ initialService }) => {
  const [formState, setFormState] = useState<EstimateFormState>({
    service: initialService || 'webapp',
    budget: 'tier1',
    fullName: '',
    email: '',
    phone: '',
    scope: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const capabilities = [
    { id: 'webapp', name: 'Custom Web App', icon: Globe },
    { id: 'ai', name: 'AI Automation', icon: Bot },
    { id: 'mobile', name: 'Mobile App', icon: Smartphone },
    { id: 'devops', name: 'DevOps Retainer', icon: Terminal },
    { id: 'product-demo', name: 'Product Starter Kit', icon: Package },
    { id: 'custom', name: 'Enterprise System', icon: Layers }
  ];

  const budgetTiers = [
    { id: 'tier1', range: '$1,000 – $3,000', label: 'Starter MVP', timeline: '2 to 3 weeks' },
    { id: 'tier2', range: '$3,000 – $10,000', label: 'Full Platform / Custom Suite', timeline: '3 to 5 weeks' },
    { id: 'tier3', range: '$10,000+', label: 'Enterprise Autonomous System', timeline: '6 to 10 weeks' }
  ];

  const selectedTier = budgetTiers.find((t) => t.id === formState.budget) || budgetTiers[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className="w-full px-4 lg:px-8 py-24 relative" id="discovery-portal">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Pitch & Fast Track */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5C761]/10 border border-[#F5C761]/30 text-[#F5C761] text-[12px] uppercase font-semibold font-mono shadow-[0_0_15px_rgba(245,199,97,0.15)]">
                Milestone Quote Within 24h
              </div>
              <h2 className="mt-3 font-display-hero text-3xl md:text-4xl lg:text-[44px] text-[#F5C761] font-bold tracking-tight">
                Initiate Your Architecture Discovery Call.
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#CBD5E1] leading-relaxed">
                Submit your technical requirements or operational bottleneck. CEO Muhammad Mujahid personally reviews every architecture specification. Projects start from $1,000.
              </p>
            </div>

            {/* Direct Fast Track WhatsApp Box */}
            <div className="p-6 rounded-2xl chromatic-border bg-[#0E1628]/90 space-y-3 shadow-xl backdrop-blur-xl">
              <div className="flex items-center gap-2 text-[#10B981] font-semibold">
                <MessageCircle className="w-6 h-6" />
                <span className="font-display-hero text-lg">Prefer Real-time Chat?</span>
              </div>
              <p className="text-sm text-[#CBD5E1]">
                Skip forms. Connect directly with our engineering desk on WhatsApp right now for project feasibility checks.
              </p>
              <a
                href="https://wa.me/923141030223"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase font-mono text-[#10B981] font-bold hover:underline"
              >
                <span>Chat +92 314 103 0223</span>
                <span className="text-xs">↗</span>
              </a>
            </div>

            {/* Guarantees */}
            <div className="space-y-2.5 font-mono text-[12px] text-[#94A3B8]">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Mutual Non-Disclosure Agreement (NDA) on request</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FileCheck2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Full system topology and feasibility roadmap included</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Direct engineer response (No sales qualification reps)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7 rounded-2xl chromatic-border bg-[#0B1120]/95 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-3xl">
            {submitted ? (
              <div className="space-y-6 text-center py-8">
                <div className="w-16 h-16 rounded-2xl bg-[#044E38]/60 border border-[#10B981]/50 text-[#10B981] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display-hero text-2xl sm:text-3xl font-bold text-white">
                    Architecture Specification Transmitted
                  </h3>
                  <p className="text-sm sm:text-base text-[#CBD5E1] max-w-lg mx-auto">
                    Lead architect <strong className="text-[#F5C761]">Muhammad Mujahid</strong> is reviewing your requirements. You will receive a milestone proposal and technical roadmap at{' '}
                    <span className="text-white font-mono">{formState.email || 'your email'}</span> within 24 hours.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0E1628] border border-white/[0.08] text-left max-w-md mx-auto font-mono text-xs space-y-1.5 text-[#94A3B8]">
                  <div className="flex justify-between">
                    <span>Capability:</span>
                    <span className="text-white uppercase font-semibold">{formState.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Budget Tier:</span>
                    <span className="text-[#10B981] font-semibold">{selectedTier.range}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Target Sprint:</span>
                    <span className="text-[#F5C761]">{selectedTier.timeline}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        service: 'webapp',
                        budget: 'tier1',
                        fullName: '',
                        email: '',
                        phone: '',
                        scope: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#141F36] hover:bg-[#1B2947] border border-white/10 text-white font-mono text-xs uppercase cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Select Service Needed */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase font-mono text-[#F5C761] font-semibold tracking-wider">
                    1. Select Core System Capability
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {capabilities.map((cap) => {
                      const Icon = cap.icon;
                      const isSelected = formState.service === cap.id;

                      return (
                        <button
                          key={cap.id}
                          type="button"
                          onClick={() => setFormState({ ...formState, service: cap.id })}
                          className={`p-3 rounded-xl border flex flex-col items-center text-center gap-1.5 transition-all shadow-sm cursor-pointer ${
                            isSelected
                              ? 'bg-[#F5C761] text-[#2A1800] border-[#F5C761] font-bold shadow-[0_0_15px_rgba(245,199,97,0.3)]'
                              : 'bg-[#141F36] border-white/[0.06] text-[#CBD5E1] hover:border-[#F5C761]/40'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-mono text-[11px]">{cap.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Budget Selector */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase font-mono text-[#F5C761] font-semibold tracking-wider">
                    2. Approximate Capital Allocation (Fixed Milestones • Projects start from $1,000)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {budgetTiers.map((tier) => {
                      const isSelected = formState.budget === tier.id;

                      return (
                        <button
                          key={tier.id}
                          type="button"
                          onClick={() => setFormState({ ...formState, budget: tier.id })}
                          className={`p-3 rounded-xl border text-center transition-all shadow-sm cursor-pointer ${
                            isSelected
                              ? 'bg-[#044E38] text-[#6EE7B7] border-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                              : 'bg-[#141F36] border-white/[0.06] text-[#CBD5E1] hover:border-[#10B981]/40'
                          }`}
                        >
                          <div className="font-display-hero text-[15px] font-bold">{tier.range}</div>
                          <div className="text-[11px] opacity-90 mt-0.5">{tier.label}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Contact Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block font-mono text-[11px] uppercase text-[#94A3B8]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-[#141F36]/90 border border-white/[0.08] text-white placeholder:text-[#64748B] focus:outline-none focus:border-[#F5C761] focus:bg-[#1B2947] transition-colors text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-mono text-[11px] uppercase text-[#94A3B8]">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-[#141F36]/90 border border-white/[0.08] text-white placeholder:text-[#64748B] focus:outline-none focus:border-[#F5C761] focus:bg-[#1B2947] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block font-mono text-[11px] uppercase text-[#94A3B8]">
                    WhatsApp / Direct Phone (For Instant Overlap)
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000 or +44 ..."
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl bg-[#141F36]/90 border border-white/[0.08] text-white placeholder:text-[#64748B] focus:outline-none focus:border-[#F5C761] focus:bg-[#1B2947] transition-colors text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block font-mono text-[11px] uppercase text-[#94A3B8]">
                    System Scope &amp; Target Objectives *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe your existing workflow bottlenecks, data volumes, or user problems..."
                    value={formState.scope}
                    onChange={(e) => setFormState({ ...formState, scope: e.target.value })}
                    className="w-full p-4 rounded-xl bg-[#141F36]/90 border border-white/[0.08] text-white placeholder:text-[#64748B] focus:outline-none focus:border-[#F5C761] focus:bg-[#1B2947] transition-colors text-sm resize-none"
                  />
                </div>

                {/* Estimate Preview Box */}
                <div className="p-3.5 rounded-xl bg-[#0E1628] border border-white/[0.06] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#94A3B8]">Expected Delivery Window:</span>
                  <span className="text-[#10B981] font-semibold">{selectedTier.timeline}</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] font-mono text-[13px] uppercase tracking-wider font-bold glow-gold-box hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Transmitting Specification...</span>
                  ) : (
                    <>
                      <span>Submit Architecture Spec • Receive Fixed-Price Quote in 24h</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
