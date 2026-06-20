'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navigation({
  activeSection,
  onNavigate,
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Me' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavigation = (section: string) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        h-[75px]
        backdrop-blur-[40px]
        bg-[rgba(255,255,255,0.08)]
        border-b border-[rgba(255,255,255,0.15)]
        shadow-[0_8px_32px_rgba(0,0,0,0.06)]
      "
    >
      <div className="max-w-[1450px] mx-auto h-full px-6 md:px-8 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavigation('home')}
          className="
            relative
            ml-4
            lg:left-16
            font-['Playfair_Display']
            font-medium
            text-[20px]
            sm:text-[24px]
            md:text-[28px]
            lg:text-[32px]
            leading-none
            tracking-[-1.2px]
            text-[#2D0004]
            hover:opacity-80
            transition-opacity
          "
        >
          Khyati Studio
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-14">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`
                font-sans
                font-medium
                text-[12px]
                lg:text-[13px]
                tracking-[2px]
                lg:tracking-[3px]
                uppercase
                transition-all
                pb-1
                ${
                  activeSection === item.id
                    ? 'text-[#2D0004] border-b border-[#2D0004]'
                    : 'text-[#544242] hover:text-[#2D0004]'
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#2D0004] mr-4"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          backdrop-blur-[40px]
          bg-[rgba(255,255,255,0.12)]
          border-b border-[rgba(255,255,255,0.15)]
          ${
            mobileMenuOpen
              ? 'max-h-[400px] opacity-100'
              : 'max-h-0 opacity-0'
          }
        `}
      >
        <div className="flex flex-col px-6 py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`
                py-4
                text-left
                font-medium
                text-[13px]
                tracking-[2px]
                uppercase
                border-b border-[rgba(0,0,0,0.08)]
                transition-all
                ${
                  activeSection === item.id
                    ? 'text-[#2D0004]'
                    : 'text-[#544242] hover:text-[#2D0004]'
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}