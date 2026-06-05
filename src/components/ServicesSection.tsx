import { motion } from 'motion/react';
import { Palette, Image, FileText } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Palette,
      title: 'Strategic\nBranding',
      description: 'Crafting visual identities that tell a compelling story and resonate with your audience. From signature logos to comprehensive guidelines, we build cohesive brand worlds rooted in intentional design.'
    },
    {
      icon: Image,
      title: 'Social Media\nCreatives',
      description: 'Elevating your digital presence with scroll-stopping graphics, carousel designs, and cohesive grid aesthetics tailored for luxury markets.',
      offset: true
    },
    {
      icon: FileText,
      title: 'Premium Canva\nTemplates',
      description: 'Empowering your team with bespoke, editable templates that maintain strict brand consistency without sacrificing high-end appeal.'
    }
  ];

  return (
    <section 
      id="services" 
      className="relative bg-[rgba(200,164,159,0.2)] px-20 flex justify-center" 
      style={{ paddingTop: '115px', paddingBottom: '160px' }}
    >
      <div className="max-w-[1350px] w-full mx-auto flex flex-col items-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="w-full font-['Playfair_Display'] font-semibold text-[48px] leading-[56px] text-[#2D0004] text-center"
          style={{ marginTop: '40px', marginBottom: '100px' }}
        >
          Specialized Offerings
        </motion.h2>

        {/* ADDED: items-end to anchor the bottom edges of the cards to a single line */}
        <div className="grid grid-cols-3 gap-8 w-full mx-auto items-end">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                // REMOVED: h-[450px] from the class string
                className="relative w-full backdrop-blur-[10px] bg-[rgba(163,124,90,0.2)] border border-[rgba(255,255,255,0.1)] rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:shadow-[0px_10px_20px_0px_rgba(0,0,0,0.14)] transition-all duration-300"
                // CHANGED: The offset card is now 402px tall, while the regular cards are 450px
                style={{ height: service.offset ? '352px' : '400px' }}
              >
                <Icon 
                  className="absolute w-7 h-7 text-[#2D0004]" 
                  strokeWidth={1.5} 
                  style={{ top: '40px', left: '40px' }} 
                />

                {/* THE TEXT BLOCK */}
                <div 
                  className="absolute flex flex-col text-left" 
                  style={{ top: '90px', left: '40px', right: '40px' }}
                >
                  <h3 
                    className="font-['Playfair_Display'] font-medium text-[32px] leading-[40px] text-[#2D0004] whitespace-pre-line"
                    style={{ marginBottom: '15px' }}
                  >
                    {service.title}
                  </h3>

                  <p className="font-['Helvetica'] text-[17px] leading-[28px] text-[#544242]">
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