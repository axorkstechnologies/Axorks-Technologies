import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/mockData';
import { ChevronDown, MapPin, Building2, HelpCircle } from 'lucide-react';

export const CorporateOffices: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="w-full bg-[#080D1A] py-20 px-4 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Physical Dual Offices */}
        <div>
          <div className="mb-10">
            <div className="text-xs uppercase text-[#F5C761] tracking-wider font-semibold font-mono">
              Registered Corporate Entity
            </div>
            <h2 className="mt-2 font-display-hero text-3xl md:text-4xl lg:text-[44px] text-white font-bold tracking-tight">
              Dual Engineering Studios • Axorks Pvt Limited
            </h2>
            <p className="mt-2 text-sm md:text-base text-[#CBD5E1]">
              Legally registered private limited software engineering corporation with permanent facilities in Pakistan's primary commercial hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Karachi Studio Card */}
            <div className="rounded-2xl chromatic-border bg-[#0E1628]/80 overflow-hidden shadow-xl group transition-all hover:border-[#F5C761]/50">
              <div
                className="w-full h-52 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAqiffgiCnXAnoO01NK9t063NlKevINFN8jtfVbF9d0KM_yWxNzElKLS58CP33tlt2Ri-VEV9yDAS5xrk7977SsonxTvNquzWZtF8SH3TNCjSjOaj0kcx6025iCMpPy41FafBFMtcF2Y6J1VgQxnS2GPF9iffIuhcotx2DbVpCCezImuHNPUUhQewtseDQBL5OtrJ6M7rtXeQr30M4xGVS4wWOSlcCDnfb9MCvkihrlCRqReFQFawUI')`
                }}
              />
              <div className="p-6 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="font-display-hero text-xl font-bold text-[#F5C761]">
                    Karachi Engineering Studio
                  </div>
                  <span className="font-mono text-[11px] text-[#10B981] uppercase font-semibold bg-[#044E38]/40 px-2.5 py-0.5 rounded border border-[#10B981]/25">
                    Commercial Headquarters
                  </span>
                </div>
                <p className="text-sm text-[#CBD5E1] flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#F5C761] shrink-0" />
                  <span>Tech Corridor • Shahrah-e-Faisal / Clifton, Karachi, Pakistan.</span>
                </p>
                <div className="pt-2 font-mono text-[12px] text-[#94A3B8]">
                  Focus: Cloud Infrastructure, AI Vector Microservices &amp; Financial Telemetry.
                </div>
              </div>
            </div>

            {/* Islamabad Studio Card */}
            <div className="rounded-2xl chromatic-border bg-[#0E1628]/80 overflow-hidden shadow-xl group transition-all hover:border-[#10B981]/50">
              <div
                className="w-full h-52 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFV_hvyOHZ9lMrbj53gFiTQIS3JiFcC7X9c0fjCGqjldJqiuduZnKuThR3I-f-NcBiaQnGfcdOeDVXo_pqQoDus79zc4bSV3hDTmy1ix7e-WTgytxMbtN8-n2Q_B-GbiU1SDR5z2MZ6h8O8ok0MDVodD8wHSIvXFJCb-I4vhqkFDTlUP2ClTd7nDP8o7LD6AWA4u3HzYsDbawvMnNxSlM7eIVuhjs34sgbsQTd1CRzqHk9UzOUwgen')`
                }}
              />
              <div className="p-6 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="font-display-hero text-xl font-bold text-[#10B981]">
                    Islamabad R&amp;D Studio
                  </div>
                  <span className="font-mono text-[11px] text-[#10B981] uppercase font-semibold bg-[#044E38]/40 px-2.5 py-0.5 rounded border border-[#10B981]/25">
                    Autonomous AI Lab
                  </span>
                </div>
                <p className="text-sm text-[#CBD5E1] flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Cyber Center • Blue Area, Islamabad, Pakistan.</span>
                </p>
                <div className="pt-2 font-mono text-[12px] text-[#94A3B8]">
                  Focus: Autonomous LLM Agent Frameworks &amp; Mobile Systems Engineering.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Technical FAQ Accordion */}
        <div className="pt-6">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <div className="text-xs uppercase text-[#F5C761] font-semibold tracking-wider font-mono">
              Clear Answers
            </div>
            <h3 className="mt-2 font-display-hero text-2xl sm:text-3xl font-bold text-white">
              Frequently Asked Architectural Questions
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openFaq === item.id;

              return (
                <div
                  key={item.id}
                  className="rounded-xl chromatic-border bg-[#0E1628]/90 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-white hover:text-[#F5C761] transition-colors cursor-pointer"
                  >
                    <span className="font-display-hero text-base sm:text-lg font-semibold">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#F5C761] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-[#CBD5E1] leading-relaxed border-t border-white/[0.04] pt-3">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
