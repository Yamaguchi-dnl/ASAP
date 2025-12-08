'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, type ReactNode, FC } from 'react';
import { cn } from '@/lib/utils';

interface TextRevealOnScrollProps {
  children: ReactNode;
  className?: string;
}

const TextRevealOnScroll: FC<TextRevealOnScrollProps> = ({
  children,
  className,
}) => {
  const targetRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = children?.toString().split(' ') || [];

  return (
    <h2 ref={targetRef} className={cn('text-4xl md:text-5xl font-normal leading-tight', className)}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </h2>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <span className="relative inline-block mr-3 mt-3">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

export default TextRevealOnScroll;
