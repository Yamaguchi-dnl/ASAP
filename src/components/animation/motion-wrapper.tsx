'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

type MotionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  initial?: string;
  whileInView?: string;
  viewport?: { once?: boolean; amount?: number };
  transition?: object;
};

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function MotionWrapper({
  children,
  className,
  variants = defaultVariants,
  initial = 'hidden',
  whileInView = 'visible',
  viewport = { once: true, amount: 0.2 },
  transition = { duration: 0.6, ease: 'easeOut' },
}: MotionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewport);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial={initial}
      animate={isInView ? whileInView : initial}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
