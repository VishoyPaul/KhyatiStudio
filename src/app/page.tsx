'use client';

import { useState, useEffect } from 'react';
import { useScroll } from 'motion/react';

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Contact from "@/components/Contact";
import MeshBackground from "@/components/MeshBackground";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  const { scrollYProgress } = useScroll();
  
  // 1. Setup dynamic state to track the active section
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (!element) return;

    // Immediately update the active section visually on click
    setActiveSection(section);

    let offset = 0;
    if (section === 'work') offset = 0;
    if (section === 'services') offset = 0;
    if (section === 'contact') offset = -30;

    const top =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  // 2. Automatically update active section when scrolling
  useEffect(() => {
    const sectionIds = ['home', 'work', 'services', 'about', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Triggers when a section passes the middle of the viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative">
      <MeshBackground scrollYProgress={scrollYProgress} />

      {/* 3. Pass the dynamic state here instead of hardcoded "home" */}
      <Navigation
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* 4. Wrapped components in containers with explicit IDs to match navigation */}
      <div id="home"><Hero /></div>
      <div id="work"><WorkSection /></div>
      <div id="services"><ServicesSection /></div>
      <div id="about"><About /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </main>
  );
}