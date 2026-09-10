import React, { useState, useEffect } from 'react';
import { HeroShader } from './HeroShader';
import { ArrowRight, Tag, MapPin, CheckCircle2, ShieldAlert, Cpu, Zap, Activity } from 'lucide-react';

interface HeroProps {
  onOpenDiscovery: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiscovery }) => {
  const [activePipelineTab, setActivePipelineTab] = useState<'pipeline' | 'rag' | 'security'>('pipeline');
  const [latency, setLatency] = useState(38.4);
  const [eventsCount, setEventsCount] = useState(14820);

  // Subtle live telemetry pulse for authentic production terminal feel
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency((prev) => {
        const delta = (Math.random() - 0.5) * 1.8;
        return Number(Math.max(34.2, Math.min(42.8, prev + delta)).toFixed(1));
      });
      setEventsCount((prev) => prev + Math.floor(Math.random() * 8 + 3));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden px-4 lg:px-8 pt-16 pb-24 lg:pt-20 lg:pb-28">
      {/* Dynamic Procedural WebGL Liquid Shader */}
      <HeroShader />

      {/* Radial lighting blur overlays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[640px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F5C761]/15 via-[#881337]/10 to-transparent pointer-events-none blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E1628]/90 border border-[#10B981]/30 backdrop-blur-2xl shadow-[0_0_25px_rgba(16,185,129,0.25)]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-80" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]" />
          </span>
          <span className="text-[11px] sm:text-[12px] uppercase tracking-widest text-[#F5C761] font-semibold font-mono">
            🟢 AVAILABLE FOR NEW COMMISSIONS — DIRECT ACCESS TO SENIOR ARCHITECTS
          </span>
        </div>

        {/* Hero Main Headline */}
        <h1 className="mt-6 max-w-5xl font-display-hero text-4xl sm:text-5xl md:text-6xl lg:text-[68px] text-[#FDFBF7] tracking-tight font-extrabold drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] leading-[1.12]">
          Architecting High-Yield Software &amp; Autonomous AI Systems.
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-5 max-w-3xl text-base md:text-lg lg:text-xl text-[#CBD5E1] leading-relaxed drop-shadow font-normal">
          AXORKS is a specialized engineering studio delivering custom web platforms, intelligent AI automation pipelines, and enterprise-grade mobile systems. Fixed-price milestone contracts. Direct access to leadership. Zero middlemen.
        </p>

        {/* Value Metrics Pill Row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <div className="px-4 py-2 rounded-full bg-[#0E1628]/90 border border-[#F5C761]/40 text-[#F5C761] font-mono text-[12px] uppercase tracking-wider shadow-[0_0_20px_rgba(245,199,97,0.2)] flex items-center gap-2">
            <Tag className="w-3.5 h-3.5 text-[#F5C761]" />
            <span className="font-bold text-[#FDE68A]">PROJECTS START FROM $1,000</span>
          </div>

          <div className="px-4 py-2 rounded-full bg-[#0E1628]/85 border border-white/10 text-[#F1F5F9] font-mono text-[12px] uppercase tracking-wider shadow-sm">
            100% FIXED-PRICE MILESTONES
          </div>

          <div className="px-4 py-2 rounded-full bg-[#0E1628]/85 border border-white/10 text-[#F1F5F9] font-mono text-[12px] uppercase tracking-wider shadow-sm">
            DIRECT SENIOR ARCHITECTS
          </div>

          <div className="px-4 py-2 rounded-full bg-[#0E1628]/85 border border-[#10B981]/40 text-[#6EE7B7] font-mono text-[12px] uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
            <span>OFFICES IN KARACHI &amp; ISLAMABAD</span>
          </div>
        </div>

        {/* Primary CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenDiscovery}
            className="relative group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#2A1800] text-[13px] uppercase font-bold tracking-wider transition-all duration-300 glow-gold-box hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2 text-[#2A1800]">
              <span>Book Free Architecture Discovery Call</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FDE68A] via-[#F5C761] to-[#6EE7B7] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <a
            href="https://wa.me/923141030223"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#0E1628]/80 hover:bg-[#141F36] border border-[#10B981]/30 backdrop-blur-xl text-white text-[13px] uppercase font-semibold tracking-wider transition-all shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:border-[#10B981]/60"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]" />
            </span>
            <span>Direct WhatsApp: +92 314 103 0223</span>
          </a>
        </div>

        {/* Live Interactive 2026 Telemetry Console */}
        <div className="mt-14 w-full max-w-5xl rounded-2xl chromatic-border bg-[#0B1120]/95 p-4 md:p-6 shadow-[0_24px_64px_rgba(0,0,0,0.9)] backdrop-blur-3xl text-left relative overflow-hidden">
          {/* Top glowing gradient line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F5C761] via-[#10B981] to-[#581C87]" />

          {/* Terminal Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]/80 shadow-[0_0_8px_#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#F5C761]/90 shadow-[0_0_8px_rgba(245,199,97,0.8)]" />
              <div className="w-3 h-3 rounded-full bg-[#10B981]/90 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span className="ml-3 font-mono text-[12px] text-[#94A3B8] font-semibold tracking-wider">
                AXORKS_CORE_TELEMETRY // v5.2.0-PROD
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1 text-[#6EE7B7] font-mono text-[11px] uppercase tracking-wider bg-[#044E38]/50 px-2.5 py-1 rounded-md border border-[#10B981]/30 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                <Zap className="w-3 h-3 text-[#10B981]" /> Pipeline Active
              </span>
              <span className="font-mono text-[11px] text-[#94A3B8] hidden sm:inline">
                Cluster: Asia-South (KHI-01 / ISB-02)
              </span>
            </div>
          </div>

          {/* Interactive Pipeline Tabs */}
          <div className="flex items-center gap-2 pt-3 pb-2 overflow-x-auto">
            <button
              onClick={() => setActivePipelineTab('pipeline')}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activePipelineTab === 'pipeline'
                  ? 'bg-[#141F36] border border-[#F5C761]/50 text-[#F5C761] font-bold shadow-sm'
                  : 'bg-transparent text-[#94A3B8] hover:text-white border border-transparent'
              }`}
            >
              1. Autonomous Dispatcher
            </button>
            <button
              onClick={() => setActivePipelineTab('rag')}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activePipelineTab === 'rag'
                  ? 'bg-[#141F36] border border-[#10B981]/50 text-[#10B981] font-bold shadow-sm'
                  : 'bg-transparent text-[#94A3B8] hover:text-white border border-transparent'
              }`}
            >
              2. Vector RAG Engine
            </button>
            <button
              onClick={() => setActivePipelineTab('security')}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activePipelineTab === 'security'
                  ? 'bg-[#141F36] border border-[#8B5CF6]/50 text-[#8B5CF6] font-bold shadow-sm'
                  : 'bg-transparent text-[#94A3B8] hover:text-white border border-transparent'
              }`}
            >
              3. eBPF Security Guard
            </button>
          </div>

          {/* Terminal Body Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-3">
            {/* Code Inset Left */}
            <div className="lg:col-span-7 rounded-xl bg-[#060913]/95 border border-white/[0.06] p-4 font-mono text-[12px] space-y-2 text-[#CBD5E1] overflow-x-auto relative shadow-inner">
              {activePipelineTab === 'pipeline' && (
                <>
                  <div className="text-[#94A3B8] flex items-center justify-between pb-1.5 border-b border-white/[0.04]">
                    <span className="text-[#FDE68A]">// Autonomous Microservice Pipeline Layer</span>
                    <span className="text-[10px] text-white/40 uppercase">HTTP/3 QUIC • eBPF Guarded</span>
                  </div>
                  <div className="text-white pt-1">
                    <span className="text-[#8B5CF6] font-semibold">async function</span>{' '}
                    <span className="text-[#F5C761] font-bold">dispatchAgentPipeline</span>
                    (envelope: <span className="text-[#6EE7B7]">TelemetryEnvelope</span>) {'{'}
                  </div>
                  <div className="pl-4 text-[#94A3B8]">
                    // Step 1: Sub-millisecond vector similarity routing &amp; guardrails
                  </div>
                  <div className="pl-4 text-white">
                    <span className="text-[#8B5CF6]">const</span> embeddings ={' '}
                    <span className="text-[#8B5CF6]">await</span> axorksEngine.
                    <span className="text-[#EAB308]">vectorize</span>(envelope.stream);
                  </div>
                  <div className="pl-4 text-white">
                    <span className="text-[#8B5CF6]">const</span> route ={' '}
                    <span className="text-[#8B5CF6]">await</span> axorksCluster.
                    <span className="text-[#EAB308]">resolveOptimalModel</span>(embeddings.confidence);
                  </div>
                  <div className="pl-4 text-[#94A3B8]">
                    // Step 2: Zero-lock parallel execution with deterministic state sync
                  </div>
                  <div className="pl-4 text-white">
                    <span className="text-[#8B5CF6]">return</span> <span className="text-[#F5C761] font-semibold">await</span>{' '}
                    route.<span className="text-[#EAB308]">commitMilestone</span>({'{ '}
                    status: <span className="text-[#10B981]">'DELIVERED'</span>, latency:{' '}
                    <span className="text-[#F5C761]">{latency}</span>
                    {' }'});
                  </div>
                  <div className="text-white">{'}'}</div>
                </>
              )}

              {activePipelineTab === 'rag' && (
                <>
                  <div className="text-[#94A3B8] flex items-center justify-between pb-1.5 border-b border-white/[0.04]">
                    <span className="text-[#6EE7B7]">// Vector RAG Semantic Engine Layer</span>
                    <span className="text-[10px] text-white/40 uppercase">HNSW Graph • pgvector</span>
                  </div>
                  <div className="text-white pt-1">
                    <span className="text-[#8B5CF6] font-semibold">export const</span>{' '}
                    <span className="text-[#10B981] font-bold">retrieveDomainContext</span> ={' '}
                    <span className="text-[#8B5CF6]">async</span> (query: <span className="text-[#6EE7B7]">string</span>) =&gt; {'{'}
                  </div>
                  <div className="pl-4 text-white">
                    <span className="text-[#8B5CF6]">const</span> index ={' '}
                    <span className="text-[#8B5CF6]">await</span> vectorCluster.
                    <span className="text-[#EAB308]">queryTopK</span>({'{ '}
                    k: <span className="text-[#F5C761]">8</span>, minScore: <span className="text-[#F5C761]">0.89</span>
                    {' }'});
                  </div>
                  <div className="pl-4 text-[#94A3B8]">
                    // Guardrail validation: Filter hallucinations &amp; verify sources
                  </div>
                  <div className="pl-4 text-white">
                    <span className="text-[#8B5CF6]">return</span> axorksSafetyGuard.
                    <span className="text-[#EAB308]">enforceContextBoundaries</span>(index.chunks);
                  </div>
                  <div className="text-white">{'}'}</div>
                </>
              )}

              {activePipelineTab === 'security' && (
                <>
                  <div className="text-[#94A3B8] flex items-center justify-between pb-1.5 border-b border-white/[0.04]">
                    <span className="text-[#8B5CF6]">// Zero-Trust Kernel Ingress Inspection</span>
                    <span className="text-[10px] text-white/40 uppercase">eBPF RingBuffer • SOC-2</span>
                  </div>
                  <div className="text-white pt-1">
                    <span className="text-[#8B5CF6] font-semibold">struct</span>{' '}
                    <span className="text-[#8B5CF6] font-bold">bpf_tunnel_key</span> key = {'{ 0 };'}
                  </div>
                  <div className="pl-4 text-white">
                    bpf_tail_call(ctx, &amp;axorks_security_progs, PROTO_QUIC_VERIFY);
                  </div>
                  <div className="pl-4 text-[#94A3B8]">
                    // Enforce tenant memory boundary isolation &amp; anti-spoofing
                  </div>
                  <div className="pl-4 text-white">
                    <span className="text-[#10B981]">return</span> TC_ACT_OK;
                  </div>
                </>
              )}

              <div className="pt-2 border-t border-white/[0.04] text-[#10B981] flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                  <span className="text-[#6EE7B7]">
                    Micro-cluster operational • {eventsCount.toLocaleString()} events routed / 60s
                  </span>
                </div>
                <span className="text-[#94A3B8]">P99: 41.2ms</span>
              </div>
            </div>

            {/* Telemetry Stats Right */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-3">
              <div className="p-4 rounded-xl bg-[#0E1628] border border-[#F5C761]/25 shadow-sm relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#F5C761]/10 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#94A3B8]">
                    Average AI Pipeline Latency
                  </span>
                  <span className="text-[#10B981] font-mono text-[11px] bg-[#044E38]/50 px-2 py-0.5 rounded border border-[#10B981]/25">
                    -18% vs P95
                  </span>
                </div>
                <div className="mt-1 font-display-hero text-4xl text-[#F5C761] font-bold tracking-tight">
                  {latency} ms
                </div>
                <div className="mt-2 w-full bg-[#1B2947] rounded-full h-1.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#F5C761] via-[#10B981] to-[#8B5CF6] h-full w-[88%]" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0E1628] border border-[#10B981]/25 shadow-sm relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-[#10B981]/10 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#94A3B8]">
                    Code Coverage &amp; Audits
                  </span>
                  <span className="text-[#6EE7B7] font-mono text-[11px] bg-[#044E38]/50 px-2 py-0.5 rounded border border-[#10B981]/25">
                    Zero Vulnerabilities
                  </span>
                </div>
                <div className="mt-1 font-display-hero text-4xl text-white font-bold tracking-tight">
                  100% Pass
                </div>
                <div className="mt-2 flex items-center gap-2 text-[#94A3B8] font-mono text-[10px]">
                  <span>SOC-2 Ready</span> • <span>HIPAA Guarded</span> • <span>Next.js 15 Tested</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#141F36]/90 border border-[#F5C761]/35 flex items-center justify-between text-white shadow-[0_0_15px_rgba(245,199,97,0.1)]">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-[#F5C761]" />
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#FDFBF7]">
                    Founder Code Oversight
                  </span>
                </div>
                <span className="text-[#F5C761] font-mono text-[11px] font-semibold">
                  ACTIVE // M. MUJAHID
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
