'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { MotionWrapper } from '../animation/motion-wrapper';

export function HeroSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0 },
    },
  };

  const h1Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const pVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const pointVariant = {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.8 },
    },
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
      <Container className="relative z-10 h-full">
        <motion.div
          style={{ opacity, scale }}
          className="absolute bottom-24 md:bottom-32 left-4 sm:left-6 lg:left-8 text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={pVariants}
            className="text-base font-medium text-white max-w-sm md:max-w-2xl"
          >
            Gestão de Riscos e Compliance para <br />
            prevenir a exaustão profissional.
          </motion.p>
          <motion.h1
            variants={h1Variants}
            className="text-[100px] sm:text-[140px] md:text-[180px] font-bold text-white uppercase leading-[0.8]"
          >
            PULSO
            <br />
            ASAP
            <motion.span variants={pointVariant} className="text-accent inline-block">
              .
            </motion.span>
          </motion.h1>
        </motion.div>
      </Container>
    </section>
  );
}
