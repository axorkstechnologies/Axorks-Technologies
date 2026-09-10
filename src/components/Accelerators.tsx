import React from 'react';
import { ACCELERATORS } from '../data/mockData';
import { AcceleratorProduct } from '../types';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AcceleratorsProps {
  onOpenDemo: (product: AcceleratorProduct) => void;
  onOpenDiscovery: () => void;
}

export const Accelerators: React.FC<AcceleratorsProps> = ({ onOpenDemo, onOpenDiscovery }) => {
  return (
    <section className="w-full px-4 lg:px-8 py-20" id="products">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141F36] border border-[#F5C761]/30 text-[#F5C761] text-[11px] font-mono uppercase tracking-wider shadow-[0_0_15px_rgba(245,199,97,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#F5C761]" />
            Studio Intellectual Property
          </div>
          <h2 className="mt-3 font-display-hero text-3xl md:text-4xl lg:text-[44px] text-white font-bold tracking-tight">
            Dual Model: Bespoke Engineering + Ready Accelerators
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#CBD5E1]">
            We don’t build from zero every time. Leverage battle-tested proprietary harnesses built by our architects to cut development costs by up to 60%.
          </p>
        </div>

        {/* Accelerators Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ACCELERATORS.map((product) => {
            const isEmerald = product.id === 'omniportal-core';

            return (
              <div
                key={product.id}
                className="rounded-2xl chromatic-border bg-[#0E1628]/80 p-6 sm:p-8 backdrop-blur-xl shadow-xl flex flex-col justify-between transition-all hover:border-[#F5C761]/40"
              >
                <div>
                  {/* Top Bar with Badge */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl ${
                          isEmerald
                            ? 'bg-gradient-to-tr from-[#581C87] to-[#8B5CF6] text-white'
                            : 'bg-gradient-to-tr from-[#F5C761] to-[#D97706] text-[#2A1800]'
                        } flex items-center justify-center font-bold text-lg shadow-md font-mono`}
                      >
                        {product.code}
                      </div>
                      <div>
                        <h3
                          className={`font-display-hero text-xl sm:text-2xl font-bold ${
                            isEmerald ? 'text-[#10B981]' : 'text-[#F5C761]'
                          }`}
                        >
                          {product.title}
                        </h3>
                        <div className="font-mono text-[12px] text-[#94A3B8]">
                          {product.category}
                        </div>
                      </div>
                    </div>

                    <span
                      className={`px-2.5 py-1 rounded bg-[#141F36] border ${
                        isEmerald
                          ? 'border-[#8B5CF6]/35 text-[#8B5CF6]'
                          : 'border-[#10B981]/35 text-[#10B981]'
                      } font-mono text-[11px] font-semibold`}
                    >
                      {product.badge}
                    </span>
                  </div>

                  <p className="mt-5 text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                    {product.description}
                  </p>

                  {/* Benchmark Stats Inset */}
                  <div className="mt-6 space-y-2.5 p-4 rounded-xl bg-[#04070F]/90 border border-white/[0.04]">
                    {product.stats.map((stat, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between font-mono text-[12px] gap-2"
                      >
                        <span className="text-[#94A3B8]">{stat.label}:</span>
                        <span
                          className={`font-semibold ${
                            stat.highlight
                              ? 'text-[#10B981]'
                              : sIdx === 2
                              ? isEmerald
                                ? 'text-[#F5C761]'
                                : 'text-white'
                              : 'text-white'
                          }`}
                        >
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Included Features List */}
                  <div className="mt-4 space-y-1.5">
                    {product.demoFeatures.slice(0, 3).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenDemo(product)}
                    className={`px-5 py-2.5 rounded-xl font-mono text-[12px] uppercase font-bold tracking-wider hover:brightness-110 transition-all cursor-pointer ${
                      isEmerald
                        ? 'bg-[#044E38] text-[#6EE7B7] glow-emerald-box border border-[#10B981]/40'
                        : 'bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] glow-gold-box'
                    }`}
                  >
                    REQUEST LIVE PRODUCT DEMO
                  </button>
                  <a
                    href="https://wa.me/923141030223"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#141F36] hover:bg-[#0E1628] border border-white/10 text-white font-mono text-[12px] uppercase font-semibold tracking-wider transition-colors"
                  >
                    EXPLORE LICENSE
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
