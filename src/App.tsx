import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { WhyAxorks } from './components/WhyAxorks';
import { Team } from './components/Team';
import { DiscoveryPortal } from './components/DiscoveryPortal';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen selection:bg-[#F5C761] selection:text-[#2A1800] font-sans">
      <Header onOpenDiscovery={scrollToContact} />

      <main className="w-full pt-[72px]">
        {/* 1. Cinematic Hero */}
        <Hero onOpenDiscovery={scrollToContact} />

        {/* 2. Trust / Results Strip */}
        <TrustStrip />

        {/* 3. What We Build — Services */}
        <Services />

        {/* 4. Selected Work — Projects & Case Studies */}
        <Projects />

        {/* 5. How We Work — Process */}
        <Process />

        {/* 6. Why AXORKS — Value Propositions */}
        <WhyAxorks />

        {/* 7. The Team */}
        <Team />

        {/* 8. Contact — Discovery Portal + FAQ */}
        <DiscoveryPortal />
      </main>

      <Footer />
    </div>
  );
}
