'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { MotionWrapper } from '@/components/animation/motion-wrapper';

export function HeroSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
      <Container className="relative z-10 flex h-full items-end pb-32">
        <motion.div style={{ y }} className="text-left max-w-4xl">
          <MotionWrapper
            variants={textVariants}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <p className="text-base font-medium text-white">
              Gestão de Riscos e Compliance para prevenir a exaustão
              profissional.
            </p>
          </MotionWrapper>
          <MotionWrapper
            variants={titleVariants}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
            <h1 className="text-[180px] font-bold text-white uppercase leading-none">
              PULSO<br />ASAP<span className='text-primary'>.</span>
            </h1>
          </MotionWrapper>
          <MotionWrapper
            variants={textVariants}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          >
            <p className="mt-6 text-base md:text-lg text-white">
              Atuamos com soluções integradas que fortalecem a cultura
              corporativa e impulsionam transformações profissionais que
              sustentam ambientes de trabalho mais saudáveis no curto, médio e
              longo prazos.
            </p>
          </MotionWrapper>
        </motion.div>
      </Container>
    </section>
  );
}
