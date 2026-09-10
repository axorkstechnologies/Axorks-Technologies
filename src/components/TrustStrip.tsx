import React from 'react';
import { Globe, DollarSign, Clock } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="w-full bg-[#080D1A] py-12 px-4 lg:px-8 border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* High-Assurance Badges Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8 border-b border-white/[0.06]">
          {/* Badge 1 */}
          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#0E1628]/70 border border-[#F5C761]/20 backdrop-blur-md shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-[#F5C761]/10 border border-[#F5C761]/30 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(245,199,97,0.15)]">
              <Globe className="w-5 h-5 text-[#F5C761]" />
            </div>
            <div>
              <div className="text-lg font-semibold text-[#F5C761]">Global Reach</div>
              <div className="text-sm text-[#CBD5E1]">Clients across US, UK, EU &amp; GCC region</div>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#0E1628]/70 border border-[#10B981]/25 backdrop-blur-md shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-[#044E38]/40 border border-[#10B981]/30 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
              <DollarSign className="w-5 h-5 text-[#10B981]" />
            </div>
            <div>
              <div className="text-lg font-semibold text-[#10B981]">100% Fixed-Price</div>
              <div className="text-sm text-[#CBD5E1]">Projects start from $1,000 • Zero scope creep</div>
            </div>
          </div>

          {/* Badge 3 */}
          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#0E1628]/70 border border-[#581C87]/30 backdrop-blur-md shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-[#581C87]/20 border border-[#581C87]/40 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(88,28,135,0.2)]">
              <Clock className="w-5 h-5 text-[#8B5CF6]" />
            </div>
            <div>
              <div className="text-lg font-semibold text-[#8B5CF6]">Synchronous Overlap</div>
              <div className="text-sm text-[#CBD5E1]">Direct lead architect hours: UTC-5 to UTC+5</div>
            </div>
          </div>
        </div>

        {/* Numeric Benchmarks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
          <div className="space-y-1">
            <div className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5C761] tracking-tight">
              48ms
            </div>
            <div className="font-mono text-[11px] text-[#94A3B8] uppercase tracking-wider">
              Avg AI Pipeline Latency
            </div>
            <div className="text-xs text-[#CBD5E1]">Benchmarked on production multi-tenant RAG</div>
          </div>

          <div className="space-y-1">
            <div className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10B981] tracking-tight">
              99.98%
            </div>
            <div className="font-mono text-[11px] text-[#94A3B8] uppercase tracking-wider">
              Measured System Uptime
            </div>
            <div className="text-xs text-[#CBD5E1]">Zero unplanned infrastructure outages</div>
          </div>

          <div className="space-y-1">
            <div className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FDFBF7] tracking-tight">
              $4.2M+
            </div>
            <div className="font-mono text-[11px] text-[#94A3B8] uppercase tracking-wider">
              Client Capital Saved
            </div>
            <div className="text-xs text-[#CBD5E1]">Automating repetitive operational overhead</div>
          </div>

          <div className="space-y-1">
            <div className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10B981] tracking-tight">
              2-4 Wks
            </div>
            <div className="font-mono text-[11px] text-[#94A3B8] uppercase tracking-wider">
              Sprint-to-Production
            </div>
            <div className="text-xs text-[#CBD5E1]">Average MVP and pilot deployment cycle</div>
          </div>
        </div>
      </div>
    </section>
  );
};
