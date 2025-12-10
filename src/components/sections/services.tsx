'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { MotionWrapper } from '@/components/animation/motion-wrapper';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/context/language-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export function ServicesSection() {
  const { translations } = useLanguage();
  const t = translations.services;

  const services = t.items;

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
  };

  const cardVariants = (delay: number) => ({
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 1, ease: [0.25, 1, 0.5, 1], delay } 
    },
  });

  return (
    <section id="servicos" className="py-20 sm:py-32 bg-secondary/40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <MotionWrapper variants={titleVariants}>
            <h2 className="text-5xl md:text-7xl font-normal text-foreground uppercase leading-tight">
              {t.title}
            </h2>
          </MotionWrapper>
          <MotionWrapper variants={textVariants}>
            <p className="text-lg text-foreground/80">
              {t.description}
            </p>
             <Button variant="link" size="lg" className="mt-4 p-0 text-base text-primary hover:text-accent">
                {t.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
          </MotionWrapper>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service: any, index: number) => {
            const serviceImage = PlaceHolderImages.find((p) => p.id === service.imageId);
            return (
              <MotionWrapper key={service.id} variants={cardVariants(0.2 + index * 0.2)}>
                <Card className="h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
                  {serviceImage && (
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={serviceImage.imageUrl}
                        alt={service.title}
                        fill
                        className="object-cover"
                        data-ai-hint={serviceImage.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </MotionWrapper>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
