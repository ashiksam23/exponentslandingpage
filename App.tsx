import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/sections/Footer';
import { Home } from './components/pages/Home';
import { BlogPost } from './components/pages/BlogPost';
import { CaseStudies } from './components/pages/CaseStudies';
import { Blog } from './components/pages/Blog';
import { PostSovereignty } from './components/pages/PostSovereignty';
import { PostCoS } from './components/pages/PostCoS';

function App() {
  // Default to dark mode
  const [isDark, setIsDark] = useState(true);

  // Custom Hash Router State
  const [currentPage, setCurrentPage] = useState<'home' | 'blueprint' | 'casestudies' | 'blog' | 'post-sovereignty' | 'post-cos'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash === '#blueprint') return 'blueprint';
      if (hash === '#casestudies') return 'casestudies';
      if (hash === '#blog') return 'blog';
      if (hash === '#post-sovereignty') return 'post-sovereignty';
      if (hash === '#post-cos') return 'post-cos';
      return 'home';
    }
    return 'home';
  });

  // Toggle handler
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Navigation Handler using Hash
  const navigateTo = (page: 'home' | 'blueprint' | 'casestudies' | 'blog' | 'post-sovereignty' | 'post-cos') => {
    if (page === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = page;
    }
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  // Listen for browser back/forward buttons (Hash Change)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      let page = 'home';

      if (hash === '#blueprint') {
        setCurrentPage('blueprint');
        page = 'blueprint';
      } else if (hash === '#casestudies') {
        setCurrentPage('casestudies');
        page = 'casestudies';
      } else if (hash === '#blog') {
        setCurrentPage('blog');
        page = 'blog';
      } else if (hash === '#post-sovereignty') {
        setCurrentPage('post-sovereignty');
        page = 'post-sovereignty';
      } else if (hash === '#post-cos') {
        setCurrentPage('post-cos');
        page = 'post-cos';
      } else {
        setCurrentPage('home');
      }
      window.scrollTo(0, 0);

      // Track Page View
      import('./utils/analytics').then(({ Analytics }) => {
        Analytics.pageView(page);
      });
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check in case of deep linking
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
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