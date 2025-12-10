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

  const services = [
    {
      id: 'mentoria',
      imageId: 'event-image-1',
    },
    {
      id: 'consultoria',
      imageId: 'event-image-2',
    },
    {
      id: 'workshops',
      imageId: 'event-image-3',
    },
  ];

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 } },
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
              <h2 className="text-5xl md:text-7xl font-extrabold text-foreground uppercase leading-none tracking-tight">
                {t.title.line1}
                <br />
                {t.title.line2}
              </h2>
            </MotionWrapper>

            <div className="space-y-6">
                <MotionWrapper variants={textVariants}>
                    <p className="text-base text-foreground/80">
                        {t.description.paragraph1}
                    </p>
                    <p className="text-base text-foreground/80 mt-4">
                        {t.description.paragraph2}
                    </p>
                </MotionWrapper>
                <MotionWrapper variants={buttonVariants}>
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full hover:bg-primary/10 bg-transparent border-foreground text-foreground hover:text-primary hover:border-primary"
                    >
                        {t.cta}
                    </Button>
                </MotionWrapper>
            </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const serviceImage = PlaceHolderImages.find((p) => p.id === service.imageId);
            return (
              <MotionWrapper key={service.id} variants={cardVariants(0.4 + index * 0.2)}>
                <Card className="h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {serviceImage && (
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={serviceImage.imageUrl}
                        alt={serviceImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={serviceImage.imageHint}
                      />
                    </div>
                  )}
                </Card>
              </MotionWrapper>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
