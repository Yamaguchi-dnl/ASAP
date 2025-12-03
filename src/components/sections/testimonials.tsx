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
      'A parceria com a PulsoASAP revolucionou nossa cultura interna. Nossos colaboradores estão mais engajados e felizes.',
    name: 'Juliana Costa',
    title: 'Diretora de RH, Tech Inova',
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
  {
    quote:
      'As palestras são transformadoras. A equipe ficou muito mais consciente sobre a importância do equilíbrio e da comunicação.',
    name: 'Carlos Santos',
    title: 'Gerente de Projetos, BuildFast',
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
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section
      id="depoimentos"
      className="py-20 sm:py-32 bg-gray-900 text-white"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-md">
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
              <CarouselContent className="h-full -mt-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pt-4 basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="h-full flex flex-col justify-center bg-gray-800/50 border-gray-700 text-white shadow-lg">
                        <CardContent className="p-6 flex flex-col justify-center flex-grow">
                          <blockquote className="text-base italic border-l-4 border-primary pl-4">
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
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 text-white bg-transparent hover:bg-white/10 border-white/50" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 text-white bg-transparent hover:bg-white/10 border-white/50" />
            </Carousel>
          </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}
