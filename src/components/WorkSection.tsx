'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

// ==========================================
// Types & Interfaces
// ==========================================
type Project = {
  id: number;
  title: string;
  category: string;
  subcategory: string;
  image: string;
  size: 'large' | 'tall' | 'medium';
  description?: string;
};

export default function WorkSection() {
  // ==========================================
  // State Management
  // ==========================================
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // ==========================================
  // Data: Filters
  // ==========================================
  const filters: string[] = [
    'All',
    'Branding',
    'Social Media',
    'Canva',
    'Posters',
  ];

  // ==========================================
  // Data: Projects Portfolio
  // ==========================================
  const projects: Project[] = [
    {
      id: 1,
      title: "L'Essence Branding",
      category: 'Branding',
      subcategory: 'Branding / Art Direction',
      image: '/images/branding.jpg',
      size: 'large',
      description:
        'A comprehensive visual identity blending classic editorial aesthetics with modern luxury sensibilities.',
    },
    {
      id: 2,
      title: 'Vanguard Exhibition',
      category: 'Posters',
      subcategory: 'Poster Design',
      image: '/images/poster.jpg',
      size: 'tall',
    },
    {
      id: 3,
      title: 'Aura Social',
      category: 'Social Media',
      subcategory: 'Social Media',
      image: '/images/social.jpg',
      size: 'medium',
    },
    {
      id: 4,
      title: 'Nomad Creator Kit',
      category: 'Canva',
      subcategory: 'Canva Templates',
      image: '/images/canva.jpg',
      size: 'medium',
    },
  ];

  // ==========================================
  // Derived State: Filtering Logic
  // ==========================================
  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // ==========================================
  // Render
  // ==========================================
  return (
    <section
      id="work"
      style={{ paddingTop: '165px' }}
      /* Parent section: w-full and flex centering */
      className="relative w-full bg-[#D8C4AC] px-6 md:px-12 lg:px-20 pb-64 flex justify-center"
    >
      {/* Main Container: Flex column to stack and center content */}
      <div className="w-full max-w-[1365px] flex flex-col items-center">
        
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3 w-full"
        >
          <h2 className="font-['Playfair_Display'] text-[52px] leading-[80px] font-bold tracking-tight text-[#2D0004] text-center">
            Selected Works
          </h2>

          <p className="max-w-[700px] text-[18px] leading-8 text-[#544242] text-center">
            A curated collection of branding, social media, and visual design projects.
          </p>

          {/* --- Filter Buttons --- */}
          <div 
            className="flex flex-wrap justify-center gap-4" 
            style={{ marginTop: '25px' }} 
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                /* Forcing exact padding with inline styles */
                style={{ paddingLeft: '16px', paddingRight: '16px' }} 
                className={`
                  h-[40px]
                  rounded-full
                  border
                  transition-all
                  duration-300
                  font-sans
                  font-medium
                  text-[13px]
                  tracking-[3px]
                  uppercase
                  ${
                    activeFilter === filter
                      ? 'bg-[rgba(45,0,4,0.05)] border-[rgba(45,0,4,0.2)] text-[#2D0004]'
                      : 'border-[rgba(45,0,4,0.15)] text-[#544242] hover:bg-[rgba(45,0,4,0.03)]'
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Space Between Filters and Grid */}
        <div className="h-12 w-full"></div>

        {/* --- Bento Grid Section --- */}
        {/* Responsive grid that relies on the parent's max-w-[1365px] for centering */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[832px]">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1, // Staggered entrance animation
              }}
              className={`
                group relative overflow-hidden rounded-2xl
                shadow-lg cursor-pointer bg-[#D7C3AB]

                /* Dynamic sizing classes based on project.size */
                ${
                  project.size === 'large'
                    ? 'lg:col-span-2 h-[400px]'
                    : ''
                }
                ${
                  project.size === 'tall'
                    ? 'lg:row-span-2 h-[832px]'
                    : ''
                }
                ${
                  project.size === 'medium'
                    ? 'h-[400px]'
                    : ''
                }
              `}
            >
              {/* Project Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(45,0,4,0.85)] via-[rgba(45,0,4,0.25)] to-transparent" />

              {/* Text Content Container */}
              <div 
                className="absolute bottom-0 left-0 right-0"
                /* Forcing specific padding with inline styles to prevent left-edge hugging */
                style={{ paddingLeft: '30px', paddingRight: '48px', paddingBottom: '30px' }}
              >
                <h3 className="font-['Playfair_Display'] font-medium text-[28px] md:text-[32px] leading-tight text-white mb-2">
                  {project.title}
                </h3>

                <p className="font-['Inter'] font-semibold text-[12px] tracking-[1.8px] uppercase text-white/80">
                  {project.subcategory}
                </p>

                {/* Optional Description (reveals on hover) */}
                {project.description && (
                  <p className="font-['Inter'] text-[15px] leading-6 text-white/90 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-[450px]">
                    {project.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Spacer pushing the next section down */}
        <div className="h-[120px] w-full"></div>
      </div>
    </section>
  );
}