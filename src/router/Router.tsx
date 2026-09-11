import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type RoutePath = '/' | '/services' | '/work' | '/process' | '/about' | '/team' | '/careers' | '/contact' | '/blog';

interface RouterContextType {
  path: RoutePath;
  navigate: (to: RoutePath, state?: { slug?: string }) => void;
  postSlug: string | null;
  setPostSlug: (slug: string | null) => void;
}

const RouterContext = createContext<RouterContextType>({
  path: '/',
  navigate: () => {},
  postSlug: null,
  setPostSlug: () => {},
});

const VALID_PATHS: RoutePath[] = ['/', '/services', '/work', '/process', '/about', '/team', '/careers', '/contact', '/blog'];

const normalizePath = (pathname: string): { path: RoutePath; slug: string | null } => {
  const clean = pathname.toLowerCase().replace(/\/$/, '') || '/';
  
  // Handle /blog/:slug
  if (clean.startsWith('/blog/')) {
    const slug = clean.replace('/blog/', '');
    return { path: '/blog', slug };
  }

  if (VALID_PATHS.includes(clean as RoutePath)) {
    return { path: clean as RoutePath, slug: null };
  }
  // Handle alias redirects or fallback
  if (clean === '/home') return { path: '/', slug: null };
  if (clean === '/projects' || clean === '/portfolio') return { path: '/work', slug: null };
  if (clean === '/jobs' || clean === '/career') return { path: '/careers', slug: null };
  if (clean === '/team') return { path: '/about', slug: null };
  return { path: '/', slug: null };
};

interface RouterProviderProps {
  children: ReactNode;
}

export const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => {
  const initial = typeof window !== 'undefined' ? normalizePath(window.location.pathname) : { path: '/' as RoutePath, slug: null };
  const [path, setPath] = useState<RoutePath>(initial.path);
  const [postSlug, setPostSlug] = useState<string | null>(initial.slug);

  const navigate = (to: RoutePath, state?: { slug?: string }) => {
    if (to === path && (!state || state.slug === postSlug)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetUrl = state?.slug ? `/blog/${state.slug}` : to;
    window.history.pushState({}, '', targetUrl);
    setPath(to);
    setPostSlug(state?.slug || null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const handlePopState = () => {
      const parsed = normalizePath(window.location.pathname);
      setPath(parsed.path);
      setPostSlug(parsed.slug);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync document title and meta per page (Strictly zero em dashes or en dashes)
  useEffect(() => {
    const titles: Record<RoutePath, string> = {
      '/': 'AXORKS Technologies | AI Automation and Custom Software Studio | From $1,000',
      '/services': 'Capabilities and Engineering Services | AXORKS Technologies',
      '/work': 'Delivered Work and Production Case Studies | AXORKS Technologies',
      '/process': 'How We Work: Milestone Execution Blueprint | AXORKS Technologies',
      '/about': 'About Axorks: Studio Profile and Leadership | AXORKS Technologies',
      '/team': 'About Axorks: Studio Profile and Leadership | AXORKS Technologies',
      '/careers': 'Selective Practice and Senior Engineering Roles | AXORKS Technologies',
      '/contact': 'Request a Fixed-Price Proposal | AXORKS Technologies',
      '/blog': 'Engineering Insights and Architecture | AXORKS Technologies',
    };
    document.title = titles[path] || titles['/'];
  }, [path]);

  return (
    <RouterContext.Provider value={{ path, navigate, postSlug, setPostSlug }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);
export const useNavigate = () => useContext(RouterContext).navigate;
export const usePath = () => useContext(RouterContext).path;
