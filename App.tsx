import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/sections/Footer';
import { Home } from './components/pages/Home';
import { BlogPost } from './components/pages/BlogPost';
import { CaseStudies } from './components/pages/CaseStudies';
import { Blog } from './components/pages/Blog';
import { PostSovereignty } from './components/pages/PostSovereignty';
import { PostCoS } from './components/pages/PostCoS';

// Route configuration
const ROUTES: Record<string, 'home' | 'blueprint' | 'casestudies' | 'blog' | 'post-sovereignty' | 'post-cos'> = {
  '/': 'home',
  '/blueprint': 'blueprint',
  '/case-studies': 'casestudies',
  '/blog': 'blog',
  '/blog/operational-sovereignty': 'post-sovereignty',
  '/blog/ai-chief-of-staff': 'post-cos',
};

// Reverse lookup for navigation
const PAGE_TO_PATH: Record<string, string> = {
  'home': '/',
  'blueprint': '/blueprint',
  'casestudies': '/case-studies',
  'blog': '/blog',
  'post-sovereignty': '/blog/operational-sovereignty',
  'post-cos': '/blog/ai-chief-of-staff',
};

function getPageFromPath(pathname: string): 'home' | 'blueprint' | 'casestudies' | 'blog' | 'post-sovereignty' | 'post-cos' {
  return ROUTES[pathname] || 'home';
}

function App() {
  // Default to dark mode
  const [isDark, setIsDark] = useState(true);

  // Path-based Router State
  const [currentPage, setCurrentPage] = useState<'home' | 'blueprint' | 'casestudies' | 'blog' | 'post-sovereignty' | 'post-cos'>(() => {
    if (typeof window !== 'undefined') {
      return getPageFromPath(window.location.pathname);
    }
    return 'home';
  });

  // Toggle handler
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Navigation Handler using History API
  const navigateTo = (page: 'home' | 'blueprint' | 'casestudies' | 'blog' | 'post-sovereignty' | 'post-cos') => {
    const path = PAGE_TO_PATH[page] || '/';
    window.history.pushState({}, '', path);
    window.scrollTo(0, 0);
    setCurrentPage(page);

    // Track Page View
    import('./utils/analytics').then(({ Analytics }) => {
      Analytics.pageView(page);
    });
  };

  // Listen for browser back/forward buttons (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const page = getPageFromPath(window.location.pathname);
      setCurrentPage(page);
      window.scrollTo(0, 0);

      // Track Page View
      import('./utils/analytics').then(({ Analytics }) => {
        Analytics.pageView(page);
      });
    };

    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Theme Effect
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
    }
  }, [isDark]);

  return (
    <main className="w-full min-h-screen bg-white dark:bg-brand-black text-brand-black dark:text-white selection:bg-brand-red selection:text-white transition-colors duration-300">
      <Header
        isDark={isDark}
        toggleTheme={toggleTheme}
        onNavigate={navigateTo}
        currentPage={currentPage}
      />

      {currentPage === 'home' && <Home />}
      {currentPage === 'blueprint' && <BlogPost onNavigate={navigateTo} />}
      {currentPage === 'casestudies' && <CaseStudies onNavigate={navigateTo} />}
      {currentPage === 'blog' && <Blog onNavigate={navigateTo} />}
      {currentPage === 'post-sovereignty' && <PostSovereignty onNavigate={navigateTo} />}
      {currentPage === 'post-cos' && <PostCoS onNavigate={navigateTo} />}

      <Footer />
    </main>
  );
}

export default App;
