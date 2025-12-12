'use client';

import React, { useRef, type ReactNode, FC } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextRevealOnScrollProps {
  children: ReactNode[];
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

  const lines = React.Children.toArray(children).map(child =>
    typeof child === 'string' ? child.trim().split(' ') : []
  );
  
  const words = lines.flat();

  let wordCount = 0;
  const firstLineLength = lines[0] ? lines[0].length : 0;

  return (
    <div>
      <h2 ref={targetRef} className={cn('text-3xl md:text-5xl font-headline font-normal leading-tight', className)}>
        {lines.map((line, lineIndex) => (
          <span key={lineIndex} className="block">
            {line.map((word, wordIndex) => {
              const start = (wordCount) / words.length;
              const end = (wordCount + 1) / words.length;
              wordCount++;
              const isAccent = lineIndex === 1;
              return (
                <Word key={wordIndex} progress={scrollYProgress} range={[start, end]} isAccent={isAccent}>
                  {word}
                </Word>
              );
            })}
          </span>
        ))}
      </h2>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
  isAccent?: boolean;
}

const Word: FC<WordProps> = ({ children, progress, range, isAccent = false }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <span className="relative inline-block mr-3 mt-3">
      <span className={cn("absolute opacity-10", isAccent ? "text-accent" : "text-primary-foreground")}>{children}</span>
      <motion.span style={{ opacity: opacity }} className={cn(isAccent ? "text-accent" : "text-primary-foreground")}>{children}</motion.span>
    </span>
  );
};

export default TextRevealOnScroll;
