import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Work from '../components/home/Work';
import Gallery from '../components/home/Gallery';
import ResumeSection from '../components/home/ResumeSection';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';

export default function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="bg-[#1B2D1C] text-white">
      <Hero scrollToSection={scrollToSection} />
      <About scrollToSection={scrollToSection} />
      <Work />
      <Gallery />
      <ResumeSection />
      <Testimonials />
      <Contact />
    </div>
  );
}
