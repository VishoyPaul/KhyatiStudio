'use client';
import { motion, useTransform, MotionValue } from 'motion/react';

interface MeshBackgroundProps {
  scrollYProgress: MotionValue<number>;
}

export default function MeshBackground({ scrollYProgress }: MeshBackgroundProps) {
  const y1 = '0%';
  const y2 = '0%';

  return (
    <div className="fixed inset-0 bg-[#EEE4DA] overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-64 -top-64 w-[1024px] h-[4237px] rounded-[1315px] opacity-60 blur-[60px]"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(89, 23, 27, 0.4) 0%, rgba(89, 23, 27, 0) 70%)`
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute -right-32 -bottom-64 w-[1152px] h-[4767px] rounded-[1480px] opacity-60 blur-[60px]"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(254, 215, 184, 0.5) 0%, rgba(254, 215, 184, 0) 70%)`
          }}
        />
      </motion.div>

      <div
        className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px'
        }}
      />
    </div>
  );
}
