import { useEffect } from 'react';
import { Navbar, Footer } from './components/layout';
import { Hero, About, Skills, Projects, Education, Resume, Contact } from './pages';
import { useTheme } from './hooks/useTheme';
import { DS_CONFIG } from './utils/constants';

export default function App() {
  useTheme(); // initialises theme class on <html>

  // Apply default theme class on first mount
  useEffect(() => {
    const root = document.documentElement;
    const saved = localStorage.getItem('portfolio-theme') || DS_CONFIG.defaultTheme;
    if (saved === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: 'var(--bg-base)', color: 'var(--text-primary)' }}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[600] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold focus:bg-[var(--color-accent)] focus:text-navy-900"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
