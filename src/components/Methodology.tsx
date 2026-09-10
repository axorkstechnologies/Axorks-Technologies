import React from 'react';
import { Compass, FileText, Zap, Rocket } from 'lucide-react';

export const Methodology: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Architectural Discovery',
      badge: 'Free Session • 48h Turnaround',
      numColor: 'text-[#F5C761]',
      icon: <Compass className="w-6 h-6 text-[#94A3B8]" />,
      description:
        'We review your operational hurdles, map out system data topologies, verify third-party APIs, and produce an iron-clad technical specification document before any contracts.'
    },
    {
      num: '02',
      title: 'Fixed-Price Proposal',
      badge: 'Zero Scope Creep',
      numColor: 'text-[#10B981]',
      icon: <FileText className="w-6 h-6 text-[#94A3B8]" />,
      description:
        'You receive a milestone-by-milestone quote with precise pricing, deliverable deadlines, and staging sign-off criteria. You only release milestone payments upon verification.'
    },
    {
      num: '03',
      title: 'High-Velocity Sprint',
      badge: 'Direct Engineer Channel',
      numColor: 'text-[#8B5CF6]',
      icon: <Zap className="w-6 h-6 text-[#94A3B8]" />,
      description:
        'Direct communication via Slack or WhatsApp with the senior engineers writing your code. Weekly testable builds deployed to staging environments for instantaneous feedback.'
    },
    {
      num: '04',
      title: 'Launch & 30-Day SLA',
      badge: 'Full IP & Code Handoff',
      numColor: 'text-[#FDE68A]',
      icon: <Rocket className="w-6 h-6 text-[#94A3B8]" />,
      description:
        'Zero-downtime production cutover, clean repository transfer with full intellectual property copyright, automated CI/CD pipelines, and 30 days of warranty support included.'
    }
  ];

  return (
    <section className="w-full bg-[#080D1A] py-20 px-4 lg:px-8 border-y border-white/[0.06]" id="methodology">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase text-[#F5C761] tracking-wider font-semibold font-mono">
            Predictable Execution Methodology
          </div>
          <h2 className="mt-2 font-display-hero text-3xl md:text-4xl lg:text-[44px] text-white font-bold tracking-tight">
            Engineering Discipline from Discovery to Production
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#CBD5E1]">
            No vague sprints. No unaccounted billing hours. We break every project into firm architectural phases with strict deliverable milestones. Projects start from $1,000.
          </p>
        </div>

        {/* 4 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 sm:p-7 rounded-2xl chromatic-border bg-[#0E1628]/70 space-y-4 shadow-md backdrop-blur-xl transition-all duration-300 hover:border-[#F5C761]/40"
            >
              <div className="flex items-center justify-between">
                <span className={`font-display-hero text-3xl sm:text-4xl font-bold ${step.numColor}`}>
                  {step.num}
                </span>
                {step.icon}
              </div>

              <div>
                <div className="text-lg font-bold text-white font-display-hero">
                  {step.title}
                </div>
                <div className="font-mono text-[11px] text-[#10B981] uppercase mt-1">
                  {step.badge}
                </div>
              </div>

              <p className="text-sm text-[#CBD5E1] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
