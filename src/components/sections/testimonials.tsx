'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
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
      className="py-20 sm:py-32 bg-gray-900 text-white"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <MotionWrapper variants={titleVariants}>
              <h2 className="text-5xl md:text-6xl font-normal text-white">
                O que Nossos Clientes Dizem
              </h2>
            </MotionWrapper>
            <MotionWrapper variants={textVariants} transition={{ delay: 0.2 }}>
              <p className="mt-4 text-lg text-white/80">
                Histórias reais de quem já foi transformado pela nossa
                metodologia e abordagem única.
              </p>
            </MotionWrapper>
          </div>
          <div className="lg:col-span-2">
            <MotionWrapper variants={textVariants} transition={{ delay: 0.4 }}>
              <Carousel
                plugins={[plugin.current]}
                opts={{
                  align: 'start',
                  loop: true,
                }}
                orientation="vertical"
                className="w-full h-80"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent className="-mt-4 h-full">
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="pt-4 basis-1/3">
                      <div className="p-1 h-full">
                        <Card className="h-full flex flex-col justify-center bg-gray-800/50 border-gray-700 text-white shadow-lg">
                          <CardContent className="p-6">
                            <blockquote className="text-base italic border-l-4 border-primary pl-4 mb-4">
                             {testimonial.quote}
                            </blockquote>
                            <footer className="mt-4">
                              <p className="font-bold text-sm">{testimonial.name}</p>
                              <p className="text-xs text-white/70">
                                {testimonial.title}
                              </p>
                            </footer>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </MotionWrapper>
          </div>
        </div>
      </Container>
    </section>
  );
}
