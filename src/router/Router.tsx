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
      '/team': 'Engineering Team and Leadership | AXORKS Technologies',
      '/about': 'About Axorks: Studio Profile and Leadership | AXORKS Technologies',
      '/careers': 'Selective Practice and Senior Engineering Roles | AXORKS Technologies',
      '/contact': 'Request a Fixed-Price Proposal | AXORKS Technologies',
      '/blog': 'Engineering Insights and Architecture | AXORKS Technologies',
    };

    const descriptions: Record<RoutePath, string> = {
      '/': 'AI automation and custom software for growing companies. Projects from $1,000 with fixed-price milestones. Offices in Karachi and Islamabad.',
      '/services': 'Intelligent AI automation, custom web applications, Web3 smart contracts, and cross-platform mobile systems built with fixed-price proposals.',
      '/work': 'Production case studies in enterprise supply chains, algorithmic trading, healthcare AI, and luxury e-commerce delivered by Axorks.',
      '/process': 'Our 4-phase milestone framework. You verify working software on private staging before releasing milestone payments. Zero hourly billing surprises.',
      '/team': 'Meet the engineering leadership, AI researchers, and full-stack developers at Axorks Technologies. Work directly with experienced practitioners.',
      '/about': 'Axorks Technologies studio profile, architectural rigor, fixed-price philosophy, and executive leadership in Karachi and Islamabad.',
      '/careers': 'Selective engineering and commercial roles at Axorks Technologies. Minimum 3+ years experience. Direct partner review.',
      '/contact': 'Request an itemized fixed-price proposal for your custom system. 24-hour turnaround from senior engineering leadership.',
      '/blog': 'Technical architecture insights, AI automation guides, and commercial engineering governance by Axorks Technologies.',
    };

    document.title = titles[path] || titles['/'];

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', descriptions[path] || descriptions['/']);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const canonicalUrl = path === '/' ? 'https://axorks.com' : `https://axorks.com${path}`;
      canonical.setAttribute('href', canonicalUrl);
    }
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
