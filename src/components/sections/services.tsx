'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { MotionWrapper } from '@/components/animation/motion-wrapper';
import { useLanguage } from '@/context/language-context';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function ServicesSection() {
  const { translations } = useLanguage();
  const t = translations.services;

  const services = t.items;

  const plugin = React.useRef(
    Autoplay({ delay: 7000, stopOnInteraction: true })
  );

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
  };

  return (
    <section id="servicos" className="py-20 sm:py-32 bg-primary text-primary-foreground">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <MotionWrapper variants={titleVariants} className="lg:sticky lg:top-32">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight uppercase font-headline">
              {t.title.line1}<br />{t.title.line2}
            </h2>
             <hr className="border-t-2 border-accent w-24 mt-4 mb-8" />
          </MotionWrapper>
          <MotionWrapper variants={textVariants}>
            <p className="text-xl text-primary-foreground/80 mt-2">
              {t.description}
            </p>
            <Button 
              variant="outline"
              className="mt-6 rounded-full bg-white text-primary hover:bg-white/90"
              asChild
            >
                <a href="#contato">
                    {t.ctaButton}
                </a>
            </Button>
          </MotionWrapper>
        </div>
        
        <div className="mt-16 relative">
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
             <div className="flex justify-end mt-8 relative gap-2">
                <CarouselPrevious className="static h-12 w-12 rounded-full border-white text-white bg-transparent hover:bg-white/10" />
                <CarouselNext className="static h-12 w-12 rounded-full border-white text-white bg-transparent hover:bg-white/10" />
            </div>

            <CarouselContent className="-ml-4 mt-4">
              {services.map((service: any) => {
                 const serviceImage = PlaceHolderImages.find((p) => p.id === service.imageId);
                return (
                  <CarouselItem key={service.id} className="pl-4 basis-[90%] sm:basis-4/5 md:basis-1/2 lg:basis-1/3 group">
                    <Card className="h-[450px] overflow-hidden shadow-md transition-all duration-500 flex flex-col bg-card/80 backdrop-blur-sm border-border/50 relative rounded-lg">
                      {serviceImage && (
                        <Image
                          src={serviceImage.imageUrl}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          data-ai-hint={serviceImage.imageHint}
                        />
                      )}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-500" />
                      
                      <div className="relative flex flex-col h-full p-6 text-white justify-end">
                        <h3 className="text-2xl font-bold transition-all duration-500 group-hover:mb-2">{service.title}</h3>
                        
                        <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-full transition-all duration-500 overflow-hidden">
                           <p className="text-white/80 text-sm mt-2">{service.description}</p>
                            {service.subItems && service.subItems.length > 0 && (
                              <ul className="mt-4 space-y-2 text-sm">
                                {service.subItems.map((item: string, i: number) => (
                                  <li key={i} className="font-medium text-white/90">{item}</li>
                                ))}
                              </ul>
                            )}
                          <Button 
                            variant="outline"
                            className="mt-6 rounded-full bg-transparent border-white text-white hover:bg-white hover:text-primary"
                            asChild
                          >
                             <a href="#contato">{service.cta}</a>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </Container>
    </section>
  );
}
