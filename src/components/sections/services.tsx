'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { MotionWrapper } from '@/components/animation/motion-wrapper';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/context/language-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ServicesSection() {
  const { translations } = useLanguage();
  const t = translations.services;

  const services = t.items;

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
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
        <MotionWrapper variants={titleVariants} className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-normal text-foreground">
              {t.title}
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              {t.description}
            </p>
        </MotionWrapper>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
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
