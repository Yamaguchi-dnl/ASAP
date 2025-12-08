'use client';

import React, { useState } from 'react';
import { Container } from '@/components/layout/container';
import { MotionWrapper } from '@/components/animation/motion-wrapper';
import { Check, Target, Building, Users, Handshake, Brain, Shield, Zap, Lightbulb, ArrowLeft, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/context/language-context';


export function OurApproachSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { translations } = useLanguage();
  const approachData = translations.ourApproach.slides;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % approachData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + approachData.length) % approachData.length
    );
  };

  const currentSlide = approachData[currentIndex];
  const slideImage = PlaceHolderImages.find((p) => p.id === currentSlide.imageId);
  
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };
  
  const renderContent = (slide: typeof currentSlide) => {
    switch (slide.id) {
      case 'approach':
        return (
          <>
            <p className="mt-4 text-lg text-foreground/80">{slide.description}</p>
            <ul className="space-y-4 mt-8">
              {(slide.points as string[]).map((point, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className='text-foreground/90'>{point}</span>
                </li>
              ))}
            </ul>
          </>
        );
      case 'delivery':
        const delivery = slide as any;
        return (
          <>
            <p className='text-left mt-4 text-primary font-semibold'>{delivery.reputation}</p>
            <p className="mt-2 text-base text-foreground/80 text-left">{delivery.description}</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="h-full bg-background/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg text-foreground">
                    <Building className="h-6 w-6 text-primary" />
                    {delivery.forCompanies.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {delivery.forCompanies.points.map((point: string, index: number) => (
                      <li key={index} className="flex items-start"><Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" /><span>{point}</span></li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="h-full bg-background/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg text-foreground">
                    <Users className="h-6 w-6 text-primary" />
                    {delivery.forEmployees.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {delivery.forEmployees.points.map((point: string, index: number) => (
                       <li key={index} className="flex items-start"><Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" /><span>{point}</span></li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </>
        );
      case 'pillars':
        return (
          <ul className="space-y-4 mt-8">
            {(slide.points as string[]).map((pillar, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className='text-foreground/90'>{pillar}</span>
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  }


  return (
    <section id="nossa-abordagem" className="py-20 sm:py-32 bg-background text-foreground">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          <div className="flex flex-col justify-between h-full py-8">
            <div className='relative overflow-hidden min-h-[450px]'>
               <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={contentVariants}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <h2 className="text-4xl md:text-6xl font-normal text-foreground">
                    {currentSlide.title}
                  </h2>
                  <div className="mt-4">{renderContent(currentSlide)}</div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-border">
                <div className='flex items-center gap-2'>
                    <span className="text-sm font-semibold">{`0${currentIndex + 1}`}</span>
                    <div className='w-20 h-px bg-border'>
                        <motion.div className='h-px bg-primary' style={{width: `${((currentIndex + 1) / approachData.length) * 100}%`}}/>
                    </div>
                    <span className="text-sm text-muted-foreground">{`0${approachData.length}`}</span>
                </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrev}
                  className="rounded-full h-12 w-12 border-primary text-primary hover:bg-primary/10"
                  aria-label="Slide anterior"
                >
                  <ArrowLeft size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  className="rounded-full h-12 w-12 border-primary text-primary hover:bg-primary/10"
                   aria-label="Próximo slide"
                >
                  <ArrowRight size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden h-full hidden lg:block">
             <AnimatePresence mode="wait">
              {slideImage && (
                <motion.div
                  key={currentSlide.id}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={imageVariants}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slideImage.imageUrl}
                    alt={currentSlide.title}
                    fill
                    className="object-cover"
                    data-ai-hint={slideImage.imageHint}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
