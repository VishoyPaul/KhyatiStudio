import { motion } from 'motion/react';
import { Palette, Image, FileText } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Palette,
      title: 'Clean Branding & Logos',
      description:
        `Crafting distinct visual identities and custom vector logos designed to make a memorable first impression. From monogram designs to essential brand assets, I build cohesive elements that serve as the foundation of your business's visual story.`,
    },
    {
      icon: Image,
      title: 'Social Media\nCreatives',
      description:
        'Elevating your digital presence with engaging graphics, carousel designs, and aesthetic grid layouts. I focus on creating scroll-stopping visuals that align with your personal brand and effectively connect with your target audience.',
      offset: true,
    },
    {
      icon: FileText,
      title: 'Custom Canva\nTemplates',
      description:
        'Empowering independent brands and creators with bespoke, easily editable templates. I design reusable layouts that allow you to maintain an organized, beautiful, and consistent aesthetic across all your platforms with absolute ease.',
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-[rgba(200,164,159,0.2)] px-6 md:px-20 flex justify-center"
      style={{
        paddingTop: '115px',
        paddingBottom: '160px',
      }}
    >
      <div className="max-w-[1350px] w-full mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="w-full font-['Playfair_Display'] font-semibold text-[36px] md:text-[48px] leading-[42px] md:leading-[56px] text-[#2D0004] text-center"
          style={{
            marginTop: '40px',
            marginBottom: '80px',
          }}
        >
          Specialized Offerings
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full mx-auto items-end">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="relative w-full backdrop-blur-[10px] bg-[rgba(163,124,90,0.2)] border border-[rgba(255,255,255,0.1)] rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:shadow-[0px_10px_20px_0px_rgba(0,0,0,0.14)] transition-all duration-300 min-h-[320px] md:min-h-0"
                style={{
                  height: service.offset ? '352px' : '400px',
                }}
              >
                <Icon
                  className="absolute w-6 h-6 md:w-7 md:h-7 text-[#2D0004]"
                  strokeWidth={1.5}
                  style={{
                    top: '40px',
                    left: '40px',
                  }}
                />

                <div
                  className="absolute flex flex-col text-left"
                  style={{
                    top: '90px',
                    left: '24px',
                    right: '24px',
                  }}
                >
                  <h3
                    className="font-['Playfair_Display'] font-medium text-[26px] md:text-[32px] leading-[34px] md:leading-[40px] text-[#2D0004] whitespace-pre-line"
                    style={{
                      marginBottom: '15px',
                    }}
                  >
                    {service.title}
                  </h3>

                  <p className="font-['Helvetica'] text-[15px] md:text-[17px] leading-[26px] md:leading-[28px] text-[#544242]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}