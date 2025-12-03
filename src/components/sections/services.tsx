'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Container } from '@/components/layout/container';
import { MotionWrapper } from '@/components/animation/motion-wrapper';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowRight } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  subItems: string[];
  cta: string;
}

const services: Service[] = [
  {
    id: 'produto-asap',
    title: 'Produto ASAP',
    description: 'Livro: Crachá Atômico: Pré-lançamento: fevereiro de 2026. Um relato profundo sobre os bastidores da rotina corporativa, a exaustão profissional e autoconhecimento.',
    subItems: [],
    cta: 'Quero ser avisado do lançamento',
  },
  {
    id: 'mentoria-asap',
    title: 'Mentoria ASAP',
    description: 'Sem receitas mágicas ou fórmulas prontas. Nossa metodologia foi criada para oferecer uma experiência de mentoria personalizada, alinhada aos objetivos e ao momento de cada profissional.',
    subItems: ['ASAP Essencial', 'ASAP Social', 'ASAP Evolution', 'ASAP Anônimos'],
    cta: 'Explore as opções',
  },
  {
    id: 'palestra-asap',
    title: 'Palestra ASAP',
    description: 'Trata-se de uma jornada estruturada de reflexão e expansão de consciência sobre comportamento, estratégia de carreira, relações e responsabilidade compartilhada.',
    subItems: ['Crachá Atômico', 'Corporativa', 'Áreas Redflag'],
    cta: 'Explore as opções',
  },
  {
    id: 'solucoes-asap',
    title: 'Soluções Regulatórias ASAP',
    description: 'Atuamos na interseção entre gestão de riscos, compliance e cultura organizacional, oferecendo diagnósticos precisos, implantações eficientes e práticas que fortalecem a responsabilidade institucional.',
    subItems: ['DRPS NR1', 'Implantação NR1', 'Assessment GRC'],
    cta: 'Conheça nossas soluções',
  },
  {
    id: 'treinamento-asap',
    title: 'Treinamento ASAP',
    description: 'Uma metodologia criada para atuar diretamente em comportamentos, práticas e percepções que impactam a segurança, a ética e a cultura corporativa.',
    subItems: ['Treinamento Interventivos'],
    cta: 'Conheça nossa opção',
  }
];

export function ServicesSection() {
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
    <section id="servicos" className="py-20 sm:py-32">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
           <MotionWrapper variants={titleVariants}>
            <h2 className="text-5xl md:text-6xl font-normal text-foreground">
              Nossos Produtos e Serviços
            </h2>
          </MotionWrapper>
        </div>
        <MotionWrapper variants={textVariants} transition={{ delay: 0.4 }}>
        <Carousel
            plugins={[plugin.current]}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full mt-16"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
          <CarouselContent>
            {services.map((service) => (
              <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3">
                 <div className="p-4 h-full">
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full hover:-translate-y-1.5 bg-blue-50/30 border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-base mb-4">
                        {service.description}
                      </CardDescription>
                      {service.subItems.length > 0 && (
                        <ul className="space-y-2 text-sm text-foreground">
                            {service.subItems.map(item => (
                                <li key={item} className="font-medium">{item}</li>
                            ))}
                        </ul>
                      )}
                    </CardContent>
                    <CardFooter>
                        <Button variant="link" className="p-0 text-primary">
                          {service.cta} <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex" />
        </Carousel>
        </MotionWrapper>
      </Container>
    </section>
  );
}
