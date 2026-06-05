'use client';

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

const handleNavigate = (section: string) => {
  const element = document.getElementById(section);

  if (!element) return;

  let offset = 0;

  if (section === 'work') {
    offset = 0; // adjust this value
  }

  if (section === 'services') {
    offset = 0; // adjust this value
  }

  if (section === 'contact') {
    offset = -30; // adjust this value
  }

  const top =
    element.getBoundingClientRect().top +
    window.pageYOffset -
    offset;

  window.scrollTo({
    top,
    behavior: 'smooth',
  });
};

  return (
    <main className="relative">
      <MeshBackground scrollYProgress={scrollYProgress} />

      <Navigation
        activeSection="home"
        onNavigate={handleNavigate}
      />

      <Hero />
      <WorkSection />
      <ServicesSection />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}