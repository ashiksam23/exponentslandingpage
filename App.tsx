import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/sections/Footer';
import { Home } from './components/pages/Home';
import { BlogPost } from './components/pages/BlogPost';

function App() {
  // Default to dark mode
  const [isDark, setIsDark] = useState(true);
  
  // Custom Hash Router State
  const [currentPage, setCurrentPage] = useState<'home' | 'blueprint'>(() => {
    if (typeof window !== 'undefined') {
      // Check if the URL has #blueprint
      return window.location.hash === '#blueprint' ? 'blueprint' : 'home';
    }
    return 'home';
  });

  // Toggle handler
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Navigation Handler using Hash
  const navigateTo = (page: 'home' | 'blueprint') => {
    if (page === 'home') {
      window.location.hash = '';
      window.scrollTo(0, 0);
    } else {
      window.location.hash = 'blueprint';
      window.scrollTo(0, 0);
    }
    setCurrentPage(page);
  };

  // Listen for browser back/forward buttons (Hash Change)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#blueprint') {
        setCurrentPage('blueprint');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
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

      <Footer />
    </main>
  );
}

export default App;