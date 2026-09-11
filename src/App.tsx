import React from 'react';
import { RouterProvider, useRouter } from './router/Router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { DeliveredWorkPage } from './pages/DeliveredWorkPage';
import { ProcessPage } from './pages/ProcessPage';
import { TeamPage } from './pages/TeamPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { path, navigate } = useRouter();

  const renderActivePage = () => {
    switch (path) {
      case '/services':
        return <ServicesPage />;
      case '/work':
        return <DeliveredWorkPage />;
      case '/process':
        return <ProcessPage />;
      case '/team':
        return <TeamPage />;
      case '/careers':
        return <CareersPage />;
      case '/contact':
        return <ContactPage />;
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen selection:bg-[#F5C761] selection:text-[#2A1800] font-sans flex flex-col justify-between">
      <Header onOpenDiscovery={() => navigate('/contact')} />

      <main className="w-full pt-[76px] flex-1">
        {renderActivePage()}
      </main>

      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
