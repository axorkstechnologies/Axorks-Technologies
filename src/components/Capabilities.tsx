import React from 'react';
import { SERVICES } from '../data/mockData';
import { ServiceCapability } from '../types';
import { Globe, Bot, Smartphone, Terminal, ArrowRight, CheckCircle } from 'lucide-react';

interface CapabilitiesProps {
  onSelectService: (service: ServiceCapability) => void;
  onOpenDiscoveryWithService: (serviceId: string) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({
  onSelectService,
  onOpenDiscoveryWithService
}) => {
  const getIcon = (id: string, colorClass: string) => {
    switch (id) {
      case 'web-apps':
        return <Globe className={`w-6 h-6 ${colorClass}`} />;
      case 'ai-automation':
        return <Bot className={`w-6 h-6 ${colorClass}`} />;
      case 'mobile-apps':
        return <Smartphone className={`w-6 h-6 ${colorClass}`} />;
      case 'devops-sla':
      default:
        return <Terminal className={`w-6 h-6 ${colorClass}`} />;
    }
  };

  const getBorderHoverClass = (colorAccent: string) => {
    switch (colorAccent) {
      case 'gold':
        return 'hover:border-[#F5C761]/60';
      case 'emerald':
        return 'hover:border-[#10B981]/60';
      case 'violet':
        return 'hover:border-[#8B5CF6]/60';
      case 'wine':
      default:
        return 'hover:border-[#F43F5E]/60';
    }
  };

  const getThemeColors = (colorAccent: string) => {
    switch (colorAccent) {
      case 'gold':
        return {
          titleColor: 'text-[#F5C761]',
          bgLight: 'bg-[#F5C761]/10',
          borderLight: 'border-[#F5C761]/30',
          badgeBg: 'bg-[#141F36]',
          badgeText: 'text-[#F5C761]',
          badgeBorder: 'border-[#F5C761]/30',
          buttonText: 'text-[#F5C761]'
        };
      case 'emerald':
        return {
          titleColor: 'text-[#10B981]',
          bgLight: 'bg-[#044E38]/40',
          borderLight: 'border-[#10B981]/30',
          badgeBg: 'bg-[#141F36]',
          badgeText: 'text-[#10B981]',
          badgeBorder: 'border-[#10B981]/30',
          buttonText: 'text-[#10B981]'
        };
      case 'violet':
        return {
          titleColor: 'text-[#8B5CF6]',
          bgLight: 'bg-[#581C87]/25',
          borderLight: 'border-[#8B5CF6]/40',
          badgeBg: 'bg-[#141F36]',
          badgeText: 'text-[#8B5CF6]',
          badgeBorder: 'border-[#8B5CF6]/30',
          buttonText: 'text-[#8B5CF6]'
        };
      case 'wine':
      default:
        return {
          titleColor: 'text-[#F5C761]',
          bgLight: 'bg-[#881337]/20',
          borderLight: 'border-[#9F1239]/40',
          badgeBg: 'bg-[#141F36]',
          badgeText: 'text-[#FDA4AF]',
          badgeBorder: 'border-[#9F1239]/40',
          buttonText: 'text-[#F5C761]'
        };
    }
  };

  return (
    <section className="w-full px-4 lg:px-8 py-20" id="capabilities">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase text-[#F5C761] font-semibold tracking-wider font-mono">
              Precision Engineering Capabilities
            </div>
            <h2 className="mt-2 font-display-hero text-3xl md:text-4xl lg:text-[44px] text-white font-bold tracking-tight">
              Architected for Scalability. Priced by Milestone.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm md:text-base text-[#CBD5E1] leading-relaxed">
              We do not charge open-ended retainers for junior developers. Every AXORKS initiative is led directly by senior architects with guaranteed milestones. Projects start from $1,000.
            </p>
          </div>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const theme = getThemeColors(service.colorAccent);

            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl chromatic-border bg-[#0E1628]/75 p-6 sm:p-8 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.55)] hover:shadow-2xl transition-all duration-300 ${getBorderHoverClass(
                  service.colorAccent
                )}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${theme.bgLight} border ${theme.borderLight} flex items-center justify-center shadow-md`}
                  >
                    {getIcon(service.id, theme.titleColor)}
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full ${theme.badgeBg} border ${theme.badgeBorder} ${theme.badgeText} font-mono text-[12px] uppercase font-semibold`}
                  >
                    {service.priceTag}
                  </div>
                </div>

                <h3 className={`mt-6 font-display-hero text-2xl sm:text-[28px] font-bold ${theme.titleColor}`}>
                  {service.title}
                </h3>

                <p className="mt-2.5 text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                  {service.description}
                </p>

                {/* Core Technologies Badges */}
                <div className="mt-5 space-y-2">
                  <div className="text-[11px] uppercase tracking-wider text-[#94A3B8] font-mono">
                    Core Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#1B2947]/90 border border-white/[0.06] font-mono text-[11px] text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specific highlight features */}
                <div className="mt-4 pt-3 border-t border-white/[0.04] space-y-1.5 hidden sm:block">
                  {service.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#94A3B8]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs text-[#94A3B8]">
                    Baseline: Projects start from $1,000
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onSelectService(service)}
                      className="text-xs uppercase font-mono text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
                    >
                      Inspect Specs
                    </button>
                    <button
                      onClick={() => onOpenDiscoveryWithService(service.id)}
                      className={`inline-flex items-center gap-1 text-[12px] uppercase tracking-wider font-semibold hover:underline cursor-pointer ${theme.buttonText}`}
                    >
                      <span>Commission</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
