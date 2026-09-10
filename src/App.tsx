import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Capabilities } from './components/Capabilities';
import { CaseStudies } from './components/CaseStudies';
import { Accelerators } from './components/Accelerators';
import { Methodology } from './components/Methodology';
import { Leadership } from './components/Leadership';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { DiscoveryPortal } from './components/DiscoveryPortal';
import { CorporateOffices } from './components/CorporateOffices';
import { Footer } from './components/Footer';
import { ArchitectureModal } from './components/ArchitectureModal';
import { ProductDemoModal } from './components/ProductDemoModal';
import { CapabilityModal } from './components/CapabilityModal';
import { CaseStudy, ServiceCapability, AcceleratorProduct } from './types';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceCapability | null>(null);
  const [selectedProductDemo, setSelectedProductDemo] = useState<AcceleratorProduct | null>(null);
  const [portalServiceKey, setPortalServiceKey] = useState<string>('webapp');

  const scrollToDiscovery = (serviceId?: string) => {
    if (serviceId) {
      // Map service ID to proposal form radio options
      if (serviceId.includes('ai')) {
        setPortalServiceKey('ai');
      } else if (serviceId.includes('mobile')) {
        setPortalServiceKey('mobile');
      } else if (serviceId.includes('devops')) {
        setPortalServiceKey('devops');
      } else {
        setPortalServiceKey('webapp');
      }
    }

    const portal = document.getElementById('discovery-portal');
    if (portal) {
      portal.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#060913] text-[#F1F5F9] min-h-screen selection:bg-[#F5C761] selection:text-[#2A1800] overflow-x-hidden font-sans">
      {/* Fixed Frosted Navigation Header */}
      <Header onOpenDiscovery={() => scrollToDiscovery()} />

      {/* Main Page Layout */}
      <main className="w-full pt-20">
        {/* 1. Hero Section with WebGL Kinetic Liquid Shader & 2026 Telemetry Console */}
        <Hero onOpenDiscovery={() => scrollToDiscovery()} />

        {/* 2. Real Results & Trust Benchmarks Strip */}
        <TrustStrip />

        {/* 3. Precision Engineering Capabilities Bento Grid */}
        <Capabilities
          onSelectService={(svc) => setSelectedService(svc)}
          onOpenDiscoveryWithService={(svcId) => scrollToDiscovery(svcId)}
        />

        {/* 4. Delivered Architectures & Case Studies Proof of Work */}
        <CaseStudies onOpenCaseStudy={(cs) => setSelectedCaseStudy(cs)} />

        {/* 5. Proprietary Accelerators & Starter Intellectual Property */}
        <Accelerators
          onOpenDemo={(prod) => setSelectedProductDemo(prod)}
          onOpenDiscovery={() => scrollToDiscovery('product-demo')}
        />

        {/* 6. 4-Stage Transparent Execution Methodology */}
        <Methodology />

        {/* 7. Sole Founder & Leadership Spotlight (Muhammad Mujahid) */}
        <Leadership />

        {/* 8. Traditional Agencies vs. AXORKS Studio Comparison Matrix */}
        <ComparisonMatrix />

        {/* 9. High-Conversion Proposal & Discovery Portal */}
        <DiscoveryPortal key={portalServiceKey} initialService={portalServiceKey} />

        {/* 10. Registered Corporate Entity, Physical Dual Offices & FAQ */}
        <CorporateOffices />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      {selectedCaseStudy && (
        <ArchitectureModal
          caseStudy={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          onCommission={() => {
            setSelectedCaseStudy(null);
            scrollToDiscovery();
          }}
        />
      )}

      {selectedService && (
        <CapabilityModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onCommission={(svcId) => {
            setSelectedService(null);
            scrollToDiscovery(svcId);
          }}
        />
      )}

      {selectedProductDemo && (
        <ProductDemoModal
          product={selectedProductDemo}
          onClose={() => setSelectedProductDemo(null)}
          onOpenDiscovery={() => {
            setSelectedProductDemo(null);
            scrollToDiscovery('product-demo');
          }}
        />
      )}
    </div>
  );
}

