import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/sections/Footer';
import { Home } from './components/pages/Home';
import { BlogPost } from './components/pages/BlogPost';

function App() {
  // Default to dark mode
  const [isDark, setIsDark] = useState(true);
  
  // Custom Routing State - Initialized from URL for deep linking support
  const [currentPage, setCurrentPage] = useState<'home' | 'blueprint'>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname === '/blueprint' ? 'blueprint' : 'home';
    }
    return 'home';
  });

  // Toggle handler
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Navigation Handler
  const navigateTo = (page: 'home' | 'blueprint') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
    
    // Update URL history for "fake" routing
    const path = page === 'home' ? '/' : '/blueprint';
    window.history.pushState({ page }, '', path);
  };

  // Handle Browser Back Button
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
      } else {
        // Fallback based on URL
        const path = window.location.pathname;
        if (path === '/blueprint') setCurrentPage('blueprint');
        else setCurrentPage('home');
      }
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

      <Footer />
    </main>
  );
}

export default App;