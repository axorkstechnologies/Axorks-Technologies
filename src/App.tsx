import React, { useState } from 'react';
import { RouterProvider, useRouter } from './router/Router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DiscoveryPortal } from './components/DiscoveryPortal';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { DeliveredWorkPage } from './pages/DeliveredWorkPage';
import { ProcessPage } from './pages/ProcessPage';
import { AboutPage } from './pages/AboutPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { TeamPage } from './pages/TeamPage';

const AppContent: React.FC = () => {
  const { path } = useRouter();
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);

  const renderPage = () => {
    switch (path) {
      case '/':
        return <HomePage />;
      case '/services':
        return <ServicesPage />;
      case '/work':
        return <DeliveredWorkPage />;
      case '/process':
        return <ProcessPage />;
      case '/about':
        return <AboutPage />;
      case '/team':
        return <TeamPage />;
      case '/blog':
        return <BlogPage />;
      case '/careers':
        return <CareersPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative w-full overflow-x-hidden">
      <Header onOpenDiscovery={() => setIsDiscoveryOpen(true)} />
      
      <main className="flex-1 w-full flex flex-col relative z-0">
        {renderPage()}
      </main>

      <div className="dark-surface">
        <Footer />
      </div>

      <DiscoveryPortal 
        isOpen={isDiscoveryOpen} 
        onClose={() => setIsDiscoveryOpen(false)} 
      />
    </div>
  );
};

function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

export default App;
