'use client';

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Container } from '@/components/layout/container';
import { MotionWrapper } from '@/components/animation/motion-wrapper';
import { useLanguage } from '@/context/language-context';

export function TestimonialsSection() {
  const { translations } = useLanguage();
  const t = translations.testimonials;
  const testimonials = t.items;

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section
      id="depoimentos"
      className="py-20 sm:py-32 bg-background"
    >
      <Container>
        <div className="max-w-4xl mx-auto text-center">
            <MotionWrapper variants={titleVariants}>
              <h2 className="text-4xl md:text-6xl font-normal text-foreground uppercase">
                {t.title}
              </h2>
            </MotionWrapper>
            <MotionWrapper variants={textVariants} transition={{ delay: 0.2 }}>
              <p className="mt-4 text-lg text-foreground/80">
                {t.subtitle}
              </p>
            </MotionWrapper>
        </div>
        <div className="mt-16">
            <MotionWrapper variants={textVariants} transition={{ delay: 0.4 }}>
              <Carousel
                plugins={[plugin.current]}
                opts={{
                  align: 'start',
                  loop: true,
                }}
                className="w-full max-w-4xl mx-auto"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div className="p-4 text-center">
                        <blockquote className="max-w-3xl mx-auto text-xl md:text-3xl font-semibold text-foreground leading-snug">
                          “{testimonial.quote}”
                        </blockquote>
                        <footer className="mt-6">
                          <p className="font-semibold text-lg text-foreground/90">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.title}
                          </p>
                        </footer>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:flex h-12 w-12 rounded-full border-primary text-primary hover:bg-primary/10" />
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex h-12 w-12 rounded-full border-primary text-primary hover:bg-primary/10" />
              </Carousel>
            </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}
