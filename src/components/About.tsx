'use client';
import { motion } from 'motion/react';

export default function AboutSection() {
  return (
    // Main Section: Defines overall padding and background color
    <section
      id="about"
      className="relative bg-[#EEE4DA] px-8 lg:px-20"
      style={{ paddingTop: '140px', paddingBottom: '200px' }}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Grid Layout: Handles responsiveness (1 column mobile, 12 columns desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Image Column: Animated using Framer Motion */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="col-span-1 lg:col-start-2 lg:col-span-4 relative rounded-[32px] overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_10px_10px_-5px_rgba(0,0,0,0.04)] aspect-[4/5]"
          >
            <img
              src="/images/photo.jpeg"
              alt="My Portrait"
              className="w-full h-full object-cover"
            />
            {/* Overlay for subtle color blending */}
            <div className="absolute inset-0 bg-[#2D0004]/5 mix-blend-multiply" />
          </motion.div>

          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="col-span-1 lg:col-start-6 lg:col-span-7"
          >
            {/* Headline: Uses Playfair Display via inline style */}
            <h2
              className="text-[48px] lg:text-[50px] leading-[1.1] text-[#3A1F1D]"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                marginBottom: '30px',
              }}
            >
              The Creative Behind the<br />Canvas
            </h2>

            {/* Paragraph Grouping with container-level spacing */}
            <div style={{ marginBottom: '30px' }}>
              <p
                className="mb-6 text-[16px] lg:text-[18px] leading-[1.8] text-[#544242]"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 400,
                  wordSpacing: '4px',
                  letterSpacing: '0.5px',
                  marginBottom: '24px',
                }}
              >
                I believe that true luxury lies in restraint. My approach to design merges the structural discipline of editorial fashion magazines with the fluid, immersive qualities of modern digital interfaces.
              </p>

              <p
                className="text-[16px] lg:text-[18px] leading-[1.8] text-[#544242]"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 400,
                  wordSpacing: '4px',
                  letterSpacing: '0.5px',
                }}
              >
                With over a decade of experience partnering with high-end lifestyle brands, I specialize in stripping away the unnecessary to reveal the core essence of a brand's narrative. Every pixel, every margin, and every typographical choice is an intentional step towards creating a timeless visual identity.
              </p>
            </div>

            {/* Call to Action: Resume Button */}
            <div className="pt-8">
              <button className="border-b-2 border-[#3A1F1D] pb-1 hover:opacity-70 transition-opacity">
                <span
                  className="text-[12px] leading-[16px] tracking-[2px] uppercase text-[#3A1F1D]"
                  style={{ fontFamily: '"Inter", sans-serif', fontWeight: 600 }}
                >
                  View Resume
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}