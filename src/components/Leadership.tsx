import React from 'react';
import { Mail, MessageSquare, Linkedin, ShieldCheck, CheckCircle } from 'lucide-react';

export const Leadership: React.FC = () => {
  return (
    <section className="w-full px-4 lg:px-8 py-20" id="leadership">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl chromatic-border bg-[#0E1628]/80 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Founder Visual / Portrait Side */}
          <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden shadow-2xl bg-[#141F36] border-2 border-[#F5C761]/30 glow-gold-box">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAau5FzozZCBw4nNbY2Qf7ymQbLt5GjpPrW1IFHyD7dun2WW7CkrevcGYn_sESuKkKYJLE0Nc-1saRMzBig9SVVFLsKEG6NY5b_hWvkGwyZ4fexLcJwhXhpgSrDG0WBJubRf-aoSybanYkbaTIYIcUi0ozoU7AL1t-ac0KG7KscoaBMiP44T7xD4_eXK9sFV770ZfGbXHmtcZL5xk5WTTGLqm4ZLd9qHv9vojrAg2gd5MQBgSZnKoNv"
                alt="Muhammad Mujahid - Founder & Chief Systems Architect / CEO of AXORKS Technologies"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060913]/90 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="mt-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#044E38]/50 border border-[#10B981]/40 text-[#6EE7B7] font-mono text-[12px] shadow-[0_0_12px_rgba(16,185,129,0.15)]">
                <CheckCircle className="w-4 h-4 text-[#10B981]" />
                <span>Active Architectural Oversight</span>
              </div>
            </div>
          </div>

          {/* Founder Bio & Authority Details */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs uppercase text-[#F5C761] font-semibold tracking-wider font-mono">
              Studio Leadership
            </div>
            <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl text-[#F5C761] font-bold">
              Muhammad Mujahid
            </h2>
            <div className="text-lg sm:text-xl text-[#10B981] font-semibold font-display-hero">
              Founder &amp; Chief Systems Architect / CEO • Axorks Pvt Limited
            </div>
            <div className="text-xs text-[#94A3B8] uppercase tracking-wider font-mono">
              Bahria University • Bachelor of Science in Software Engineering
            </div>

            <p className="text-base sm:text-lg text-[#CBD5E1] italic leading-relaxed pt-1">
              “He founded AXORKS to help growing businesses solve real operational challenges through custom software and AI automations. He works directly with clients on architecture, system delivery, and engineering quality.”
            </p>

            <p className="text-sm text-[#CBD5E1] leading-relaxed">
              At AXORKS, there are no non-technical sales reps making impossible promises. Every client account has Muhammad Mujahid directly inspecting code commits, system design topologies, and production deployments.
            </p>

            {/* Direct Contact Badges Grid */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="mailto:contact@axorks.com"
                className="p-3.5 rounded-xl bg-[#141F36]/90 hover:bg-[#1B2947] border border-white/[0.06] transition-colors flex items-center gap-3 text-white group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F5C761]/10 border border-[#F5C761]/30 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#F5C761]" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] uppercase text-[#94A3B8] font-mono">Direct Email</div>
                  <div className="font-mono text-[12px] truncate font-medium group-hover:text-[#F5C761]">
                    contact@axorks.com
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/923141030223"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#141F36]/90 hover:bg-[#1B2947] border border-white/[0.06] transition-colors flex items-center gap-3 text-white group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#044E38]/40 border border-[#10B981]/30 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-[#10B981]" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] uppercase text-[#94A3B8] font-mono">Direct WhatsApp</div>
                  <div className="font-mono text-[12px] truncate font-medium group-hover:text-[#10B981]">
                    +92 314 103 0223
                  </div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/axorks"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#141F36]/90 hover:bg-[#1B2947] border border-white/[0.06] transition-colors flex items-center gap-3 text-white group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#581C87]/20 border border-[#8B5CF6]/40 flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5 text-[#8B5CF6]" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] uppercase text-[#94A3B8] font-mono">Corporate Profile</div>
                  <div className="font-mono text-[12px] truncate font-medium group-hover:text-[#8B5CF6]">
                    linkedin.com/in/axorks
                  </div>
                </div>
              </a>

              <div className="p-3.5 rounded-xl bg-[#141F36]/90 border border-[#F5C761]/25 flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-lg bg-[#F5C761]/10 border border-[#F5C761]/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#F5C761]" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] uppercase text-[#94A3B8] font-mono">Direct Guarantee</div>
                  <div className="font-mono text-[12px] text-[#10B981] font-semibold">
                    Zero Outsourced Juniors
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
