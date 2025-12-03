'use client';

import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Container } from '@/components/layout/container';
import {
  PlaceHolderImages,
  type ImagePlaceholder,
} from '@/lib/placeholder-images';
import { MotionWrapper } from '@/components/animation/motion-wrapper';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: ImagePlaceholder | undefined;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'A parceria com a PulsoASAP revolucionou nossa cultura interna. Nossos colaboradores estão mais engajados e felizes.',
    name: 'Juliana Costa',
    title: 'Diretora de RH, Tech Inova',
    avatar: PlaceHolderImages.find((p) => p.id === 'testimonial-1'),
  },
  {
    quote:
      'O programa de mentoria foi um divisor de águas na minha carreira. Consegui clareza e confiança para assumir novos desafios.',
    name: 'Marcos Andrade',
    title: 'Desenvolvedor Sênior, FinSolutions',
    avatar: PlaceHolderImages.find((p) => p.id === 'testimonial-2'),
  },
  {
    quote:
      'Nunca imaginei que investir em bem-estar traria tanto retorno em produtividade. A PulsoASAP foi essencial nesse processo.',
    name: 'Beatriz Lima',
    title: 'CEO, Creative Co.',
    avatar: PlaceHolderImages.find((p) => p.id === 'testimonial-3'),
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
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section id="depoimentos" className="py-20 sm:py-32">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <MotionWrapper variants={titleVariants}>
            <h2 className="text-5xl md:text-6xl font-normal text-foreground">
              O que Nossos Clientes Dizem
            </h2>
          </MotionWrapper>
          <MotionWrapper variants={textVariants} transition={{ delay: 0.2 }}>
            <p className="mt-4 text-lg text-foreground/80">
              Histórias reais de quem já foi transformado pela nossa
              metodologia.
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
            className="w-full max-w-4xl mx-auto mt-16"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/2 flex"
                >
                  <div className="p-1 w-full">
                    <Card className="h-full flex flex-col justify-between p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1.5">
                      <CardContent className="p-0">
                        <p className="text-lg italic text-foreground/90">
                          "{testimonial.quote}"
                        </p>
                      </CardContent>
                      <CardFooter className="p-0 mt-6 flex items-center gap-4">
                        {testimonial.avatar && (
                          <Avatar>
                            <AvatarImage
                              src={testimonial.avatar.imageUrl}
                              alt={testimonial.name}
                              data-ai-hint={testimonial.avatar.imageHint}
                            />
                            <AvatarFallback>
                              {testimonial.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm text-foreground/70">
                            {testimonial.title}
                          </p>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </MotionWrapper>
      </Container>
    </section>
  );
}
