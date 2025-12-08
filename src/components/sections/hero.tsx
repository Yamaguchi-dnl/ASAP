'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/layout/container';

export function HeroSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section
      id="home"
      ref={targetRef}
      className="sticky top-0 h-screen min-h-[700px] w-full -mt-20"
    >
      <div className="absolute inset-0 z-0 bg-black overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover opacity-20"
        >
          <source
            src="https://ik.imagekit.io/leosmc2zb/PULSOASAP/1202%20(1).mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <Container className="relative z-10 h-full">
        <motion.div
          style={{ opacity, scale }}
          className="absolute bottom-32 left-4 sm:left-6 lg:left-8 text-left"
        >
          <p className="text-base font-medium text-white max-w-2xl">
            Gestão de Riscos e Compliance para <br />prevenir a exaustão
            profissional.
          </p>
          <h1 className="text-[180px] font-bold text-white uppercase leading-[0.8]">
            PULSO<br />ASAP<span className='text-primary'>.</span>
          </h1>
        </motion.div>
      </Container>
    </section>
  );
}
