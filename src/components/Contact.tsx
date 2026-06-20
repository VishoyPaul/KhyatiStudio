'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function ContactSection() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Inquiry sent successfully!');
      
      setFormData({
        name: '',
        email: '',
        projectType: '',
        message: '',
      });
    } else {
      alert('Failed to send inquiry.');
    }
  } catch (error) {
    console.error(error);
    alert('Something went wrong.');
  }
};

  return (
    // Main Section: Full height container for the contact form
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-60 py-40"
      style={{
    minHeight: '120vh',
    paddingTop: '0px',
    paddingBottom: '100px',
  }}
    >
      {/* Animated wrapper for the form card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        style={{
          marginTop: '70px',
          width: '900px',
          minHeight: '600px',
        }}
        className="backdrop-blur-[10px] bg-[rgba(216,196,172,0.4)] border border-[rgba(255,255,255,0.2)] rounded-xl shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]"
      >
        {/* Inner content wrapper for internal spacing */}
        <div
          style={{
            paddingTop: '80px',
            paddingBottom: '80px',
            paddingLeft: '90px',
            paddingRight: '90px',
          }}
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2
              className="font-['Playfair_Display'] font-semibold text-[48px] leading-[56px] text-[#2D0004]"
              style={{ marginBottom: '24px' }}
            >
              Let's Create Together
            </h2>

            <p className="font-['Helvetica'] text-[16px] leading-[28px] text-[#544242]">
              Open for collaborative design & development.
            </p>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
              paddingLeft: '0px',
              paddingRight: '0px',
            }}
          >
            {/* Name and Email Row */}
            <div
              className="grid grid-cols-2"
              style={{
                columnGap: '40px',
                marginTop: '20px',
              }}
            >
              {/* Name Field */}
              <div className="space-y-2">
                <label className="font-['Helvetica'] font-semibold text-[12px] leading-[16px] tracking-[1.8px] uppercase text-[#544242]">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Jane Doe"
                  className="w-full px-3 py-3 bg-transparent border-b border-[#6B7280] font-['Helvetica'] text-[16px] text-[#2D0004] placeholder:text-[#6B7280] focus:border-[#4D0E13] focus:outline-none transition-colors"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="font-['Helvetica'] font-semibold text-[12px] leading-[16px] tracking-[1.8px] uppercase text-[#544242]">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="jane@example.com"
                  className="w-full px-3 py-3 bg-transparent border-b border-[#6B7280] font-['Helvetica'] text-[16px] text-[#2D0004] placeholder:text-[#6B7280] focus:border-[#4D0E13] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Project Type Select Field */}
            <div className="space-y-2">
              <label className="font-['Helvetica'] font-semibold text-[12px] leading-[16px] tracking-[1.8px] uppercase text-[#544242]">
                Project Type
              </label>

              <div className="relative">
                <select
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      projectType: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 bg-transparent border-b border-[#4D0E13] font-['Helvetica'] text-[16px] leading-[28px] text-[#2D0004] focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="">Select an option</option>
                  <option value="branding">Branding Design</option>
                  <option value="social">Social Media Design</option>
                  <option value="canva">Canva Templates</option>
                  <option value="other">Other</option>
                </select>

                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 text-[#6B7280] pointer-events-none" />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="space-y-2">
              <label className="font-['Helvetica'] font-semibold text-[12px] leading-[16px] tracking-[1.8px] uppercase text-[#544242]">
                Message
              </label>

              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell me about your vision..."
                rows={4}
                className="w-full px-3 py-2 bg-transparent border-b border-[#4D0E13] font-['Helvetica'] text-[16px] leading-[28px] text-[#2D0004] placeholder:text-[#6B7280] focus:outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: '100%',
                height: '50px',
              }}
              className="w-full bg-[#2D0004] py-4 rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-[#4D0E13] transition-all hover:scale-[1.02]"
            >
              <span className="font-['Helvetica'] font-semibold text-[12px] leading-[16px] tracking-[1.8px] uppercase text-white">
                Send Inquiry
              </span>
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}