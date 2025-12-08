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

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'A mentoria me fez olhar para minha carreira com uma visão muito mais estratégica e madura. Foi um verdadeiro divisor de águas. A metodologia é prática, humana e profundamente transformadora, ao unir autoconhecimento com direcionamentos de carreira. Sem dúvida, o melhor investimento que fiz.',
    name: 'Dafini Boldrini',
    title: 'participante do programa ASAP Essencial',
  },
  {
    quote:
      'O programa de mentoria foi um divisor de águas na minha carreira. Consegui clareza e confiança para assumir novos desafios.',
    name: 'Marcos Andrade',
    title: 'Desenvolvedor Sênior, FinSolutions',
  },
  {
    quote:
      'Nunca imaginei que investir em bem-estar traria tanto retorno em produtividade. A PulsoASAP foi essencial nesse processo.',
    name: 'Beatriz Lima',
    title: 'CEO, Creative Co.',
  },
];

export function TestimonialsSection() {
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
              <h2 className="text-4xl md:text-6xl font-normal text-foreground">
                O que Nossos Clientes Dizem
              </h2>
            </MotionWrapper>
            <MotionWrapper variants={textVariants} transition={{ delay: 0.2 }}>
              <p className="mt-4 text-lg text-foreground/80">
                Histórias reais de quem já foi transformado pela nossa
                metodologia e abordagem única.
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
                className="w-full"
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
                <CarouselPrevious className="absolute left-[-20px] top-1/2 -translate-y-1/2 hidden lg:flex" />
                <CarouselNext className="absolute right-[-20px] top-1/2 -translate-y-1/2 hidden lg:flex" />
              </Carousel>
            </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}
