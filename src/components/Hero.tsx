'use client';

import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
    },
  }),
};

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        px-4
        sm:px-6
        md:px-12
        lg:px-20
        pt-12
        md:pt-16
        pb-20
      "
    >
      <div
        className="
          max-w-[1200px]
          w-full
          mx-auto
          flex
          flex-col
          items-center
          justify-center
          text-center
          gap-6
        "
      >
        {/* Hero Heading */}
        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeIn}
          className="
            font-serif
            font-bold
            tracking-tight
            text-[#2D0004]
            text-[42px]
            leading-[1]
            sm:text-[56px]
            md:text-[72px]
            lg:text-[72px]
            whitespace-nowrap
          "
        >
          KHYATI PAUL
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeIn}
          className="
            max-w-[700px]
            mx-auto
            px-2
            text-[#544242]
            text-[16px]
            sm:text-[18px]
            leading-7
          "
        >
          Graphic Designer crafting thoughtful brands, social media visuals,
          and digital experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.4}
          variants={fadeIn}
          className="
            flex
            flex-row
            justify-center
            gap-4
            pt-2
            flex-wrap
          "
        >
          <button
            onClick={() => scrollToSection('work')}
            className="
              w-[150px]
              sm:w-[160px]
              h-[56px]
              rounded-[10px]
              bg-[#2D0004]
              text-white
              text-[14px]
              font-semibold
              tracking-[0.15em]
              uppercase
              shadow-lg
              transition-all
              duration-150
              ease-out
              hover:bg-[#4D0E13]
              hover:scale-105
            "
          >
            View Work
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="
              w-[150px]
              sm:w-[160px]
              h-[56px]
              rounded-[10px]
              border
              border-[#2D0004]
              text-[#2D0004]
              text-[14px]
              font-semibold
              tracking-[0.15em]
              uppercase
              transition-all
              duration-150
              ease-out
              hover:scale-105
              hover:bg-[#D6C6BC]
              hover:border-[#0A0001]
              hover:text-[#0A0001]
            "
          >
            Contact
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => scrollToSection('work')}
        className="
          absolute
          bottom-8
          md:bottom-12
          left-1/2
          -translate-x-1/2
          animate-bounce
        "
      >
        <ChevronDown className="w-8 h-8 text-[#4D0E13]" />
      </motion.button>
    </section>
  );
}