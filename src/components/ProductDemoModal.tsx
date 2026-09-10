import React, { useState } from 'react';
import { AcceleratorProduct } from '../types';
import { X, Play, CheckCircle2, ArrowRight, FileText, Database, Shield, Zap } from 'lucide-react';

interface ProductDemoModalProps {
  product: AcceleratorProduct | null;
  onClose: () => void;
  onOpenDiscovery: () => void;
}

export const ProductDemoModal: React.FC<ProductDemoModalProps> = ({
  product,
  onClose,
  onOpenDiscovery
}) => {
  if (!product) return null;

  const isFlux = product.id === 'flux-engine';

  // FluxEngine state
  const [isProcessing, setIsProcessing] = useState(false);
  const [hasProcessed, setHasProcessed] = useState(true);

  // OmniPortal state
  const [activeTenant, setActiveTenant] = useState<'enterprise' | 'growth'>('enterprise');

  const runFluxDemo = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setHasProcessed(true);
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl chromatic-border bg-[#0B1120] p-6 sm:p-8 shadow-2xl border border-white/10 text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close demo"
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#141F36] hover:bg-[#1B2947] text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5 pr-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-[#141F36] text-[#F5C761] font-mono text-[11px] uppercase border border-[#F5C761]/30">
              Interactive Accelerator Sandbox
            </span>
            <span className="text-xs text-[#10B981] font-mono font-semibold">● Ready Production Harness</span>
          </div>

          <h3 className="font-display-hero text-2xl sm:text-3xl font-bold text-white">
            {product.title} Live Interactive Demo
          </h3>
          <p className="text-sm text-[#CBD5E1]">{product.category}</p>
        </div>

        {/* Interactive Sandbox Body */}
        <div className="mt-6 p-5 rounded-xl bg-[#060913] border border-white/[0.08] space-y-5">
          {isFlux ? (
            /* FluxEngine Interactive Demo */
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 font-mono text-xs text-[#CBD5E1]">
                  <FileText className="w-4 h-4 text-[#F5C761]" />
                  <span>Payload: Sample Freight Invoice (PDF Stream)</span>
                </div>

                <button
                  onClick={runFluxDemo}
                  disabled={isProcessing}
                  className="px-4 py-1.5 rounded-lg bg-[#F5C761] hover:bg-[#FDE68A] text-[#2A1800] font-mono text-xs uppercase font-bold flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span>Parsing Stream...</span>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Re-Run Extraction</span>
                    </>
                  )}
                </button>
              </div>

              {/* Extraction Metrics */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-[#0E1628] border border-white/[0.04] text-center">
                  <div className="text-[10px] text-[#94A3B8] uppercase font-mono">Parsing Time</div>
                  <div className="text-lg font-bold text-[#10B981] font-mono">38.2 ms</div>
                </div>
                <div className="p-3 rounded-lg bg-[#0E1628] border border-white/[0.04] text-center">
                  <div className="text-[10px] text-[#94A3B8] uppercase font-mono">Confidence Score</div>
                  <div className="text-lg font-bold text-[#F5C761] font-mono">99.8%</div>
                </div>
                <div className="p-3 rounded-lg bg-[#0E1628] border border-white/[0.04] text-center">
                  <div className="text-[10px] text-[#94A3B8] uppercase font-mono">Schema Integrity</div>
                  <div className="text-lg font-bold text-white font-mono">100% Typed</div>
                </div>
              </div>

              {/* JSON Output Viewer */}
              <div className="p-4 rounded-lg bg-[#04070F] border border-white/[0.06] font-mono text-[11px] text-[#CBD5E1] space-y-1 overflow-x-auto">
                <div className="text-[#94A3B8] pb-1 border-b border-white/[0.04]">
                  // Normalized JSON Output &amp; Database Target Sync:
                </div>
                <div>{'{'}</div>
                <div className="pl-4">
                  <span className="text-[#8B5CF6]">"invoice_id"</span>: <span className="text-[#10B981]">"AXR-2026-90412"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#8B5CF6]">"vendor_name"</span>: <span className="text-[#10B981]">"Emirates Logistics Corp"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#8B5CF6]">"amount_subtotal"</span>: <span className="text-[#F5C761]">42850.00</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#8B5CF6]">"tax_jurisdiction"</span>: <span className="text-[#10B981]">"GCC_VAT_5PCT"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#8B5CF6]">"line_items_count"</span>: <span className="text-[#F5C761]">14</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#8B5CF6]">"audit_verdict"</span>: <span className="text-[#10B981]">"AUTO_APPROVED_WITHOUT_HUMAN_INTERVENTION"</span>
                </div>
                <div>{'}'}</div>
              </div>
            </div>
          ) : (
            /* OmniPortal Core Interactive Demo */
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 font-mono text-xs text-[#CBD5E1]">
                  <Database className="w-4 h-4 text-[#8B5CF6]" />
                  <span>Tenant Schema Partitioning Simulation</span>
                </div>

                <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#0E1628] border border-white/[0.06]">
                  <button
                    onClick={() => setActiveTenant('enterprise')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                      activeTenant === 'enterprise'
                        ? 'bg-[#8B5CF6] text-white font-bold'
                        : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    Tenant: Apex Corp (Tier 3)
                  </button>
                  <button
                    onClick={() => setActiveTenant('growth')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                      activeTenant === 'growth'
                        ? 'bg-[#8B5CF6] text-white font-bold'
                        : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    Tenant: Beta Labs (Tier 1)
                  </button>
                </div>
              </div>

              {/* Active Tenant Live Data */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3.5 rounded-lg bg-[#0E1628] border border-white/[0.04] space-y-1">
                  <div className="text-[10px] text-[#94A3B8] uppercase">Stripe Meter Billing</div>
                  <div className="text-white font-semibold">
                    {activeTenant === 'enterprise' ? '$12,450 / month' : '$1,200 / month'}
                  </div>
                  <div className="text-[10px] text-[#10B981]">Auto-invoice synced</div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#0E1628] border border-white/[0.04] space-y-1">
                  <div className="text-[10px] text-[#94A3B8] uppercase">Database Isolation</div>
                  <div className="text-white font-semibold">
                    {activeTenant === 'enterprise' ? 'Dedicated Schema (RLS)' : 'Shared Schema (RLS)'}
                  </div>
                  <div className="text-[10px] text-[#8B5CF6]">SOC-2 Partitioned</div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#0E1628] border border-white/[0.04] space-y-1">
                  <div className="text-[10px] text-[#94A3B8] uppercase">Seats Allocated</div>
                  <div className="text-white font-semibold">
                    {activeTenant === 'enterprise' ? '128 / 500 Active' : '8 / 15 Active'}
                  </div>
                  <div className="text-[10px] text-[#F5C761]">SAML / SSO Active</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="mt-6 pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
            <Zap className="w-4 h-4 text-[#F5C761]" />
            <span>Ready for integration into your next milestone project</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenDiscovery();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] font-mono text-xs uppercase font-bold tracking-wider glow-gold-box hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Commission Platform with this Harness</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
