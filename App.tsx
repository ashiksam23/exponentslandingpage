import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Diagnosis } from './components/sections/Diagnosis';
import { Proof } from './components/sections/Proof';
import { Quantification } from './components/sections/Quantification';
import { Pricing } from './components/sections/Pricing';
import { Footer } from './components/sections/Footer';
import { StickyCTA } from './components/layout/StickyCTA';

function App() {
  // Default to dark mode
  const [isDark, setIsDark] = useState(true);

  // Toggle handler
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Effect to apply the 'dark' class to the html element
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
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      {/* Section 2: The OS Advantage / Diagnosis */}
      <Diagnosis />
      {/* Section 3: The System / Proof */}
      <Proof />
      {/* Section 4: Benefits / Quantification */}
      <Quantification />
      {/* Section 5: Pricing */}
      <Pricing />
      <Footer />
      <StickyCTA />
    </main>
  );
}

export default App;