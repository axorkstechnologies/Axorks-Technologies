import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Team } from './components/Team';
import { Careers } from './components/Careers';
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
        {/* 1. Hero */}
        <Hero onOpenDiscovery={scrollToContact} />

        {/* 2. What We Build — Services */}
        <Services />

        {/* 3. Selected Work — Projects & Case Studies */}
        <Projects />

        {/* 4. How We Work — Process */}
        <Process />

        {/* 5. Team */}
        <Team />

        {/* 6. Careers */}
        <Careers />

        {/* 7. Contact / Proposal Form + WhatsApp */}
        <DiscoveryPortal />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
