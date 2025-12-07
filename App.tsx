import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { ThreeBackground } from './components/ThreeBackground';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolling, setIsScrolling] = useState(false);

  // Unified function to handle navigation clicks
  const scrollToSection = (id) => {
    // 1. Disable the scroll spy temporarily
    setIsScrolling(true);
    
    // 2. Immediately update the active section so the nav color changes
    setActiveSection(id);

    // 3. Perform the scroll
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'hero') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 4. Re-enable the scroll spy after the animation is likely finished (1 second)
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  // Scroll Spy Effect
  useEffect(() => {
    const handleScroll = () => {
      // If we are manually scrolling (user clicked a link), ignore scroll events
      if (isScrolling) return;

      const sections = ['hero', 'experience', 'skills', 'contact'];
      
      // Find which section is currently most visible
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Returns true if the top of the section is within the top third of the screen
          return rect.top >= -100 && rect.top <= window.innerHeight / 3;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]); // Re-run effect if isScrolling changes

  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-50">
      
      {/* 1. Background Layer */}
      <div className="fixed inset-0 z-0">
        <ThreeBackground />
      </div>

      {/* 2. Navigation Layer */}
      {/* Pass the new scrollToSection handler instead of setActiveSection */}
      <Navigation activeSection={activeSection} onNavClick={scrollToSection} />

      {/* 3. Main Content Layer */}
      <main className="relative z-10 container mx-auto px-6 flex flex-col gap-16 md:gap-24 pb-24">
        
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
          <Hero />
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24">
          <ExperienceSection />
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-24">
          <SkillsSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24 mb-20">
          <ContactSection />
        </section>

      </main>
      <div className="relative z-10 container mx-auto px-6">
        <footer className="text-slate-600 text-sm py-8 border-t border-slate-800/50 text-center">
            <p>© {new Date().getFullYear()} Justin Feinman | Engineered with React & Three.js</p>
        </footer>
      </div>
    </div>
  );
}

export default App;