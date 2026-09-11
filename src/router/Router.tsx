import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type RoutePath = '/' | '/services' | '/work' | '/process' | '/team' | '/careers' | '/contact';

interface RouterContextType {
  path: RoutePath;
  navigate: (to: RoutePath) => void;
}

const RouterContext = createContext<RouterContextType>({
  path: '/',
  navigate: () => {},
});

const VALID_PATHS: RoutePath[] = ['/', '/services', '/work', '/process', '/team', '/careers', '/contact'];

const normalizePath = (pathname: string): RoutePath => {
  const clean = pathname.toLowerCase().replace(/\/$/, '') || '/';
  if (VALID_PATHS.includes(clean as RoutePath)) {
    return clean as RoutePath;
  }
  // Handle alias redirects or fallback
  if (clean === '/home') return '/';
  if (clean === '/projects' || clean === '/portfolio') return '/work';
  if (clean === '/jobs' || clean === '/career') return '/careers';
  if (clean === '/about') return '/team';
  return '/';
};

interface RouterProviderProps {
  children: ReactNode;
}

export const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => {
  const [path, setPath] = useState<RoutePath>(() => {
    if (typeof window !== 'undefined') {
      return normalizePath(window.location.pathname);
    }
    return '/';
  });

  const navigate = (to: RoutePath) => {
    if (to === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState({}, '', to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const handlePopState = () => {
      setPath(normalizePath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync document title and meta per page
  useEffect(() => {
    const titles: Record<RoutePath, string> = {
      '/': 'AXORKS Technologies — Custom Software, AI Automation & Web3 Systems | From $1,000',
      '/services': 'Capabilities & Engineering Services — AXORKS Technologies',
      '/work': 'Delivered Work & Production Case Studies — AXORKS Technologies',
      '/process': 'How We Work: Milestone-Based Execution Blueprint — AXORKS Technologies',
      '/team': 'Senior Engineering Team & Leadership — AXORKS Technologies',
      '/careers': 'Selective Practice & Senior Engineering Roles — AXORKS Technologies',
      '/contact': 'Request a Fixed-Price Proposal — AXORKS Technologies',
    };
    document.title = titles[path] || titles['/'];
  }, [path]);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);
export const useNavigate = () => useContext(RouterContext).navigate;
export const usePath = () => useContext(RouterContext).path;
