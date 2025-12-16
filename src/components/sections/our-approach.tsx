'use client';

import React, { useState } from 'react';
import { Container } from '@/components/layout/container';
import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/context/language-context';
import { Building, Users, ArrowLeft, ArrowRight } from 'lucide-react';

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1], // expo.out
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 60, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1], // expo.out
    },
  },
  exit: {
    opacity: 0,
    x: -60,
    filter: 'blur(10px)',
    transition: {
      duration: 0.8,
      ease: [0.64, 0, 0.78, 0], // ease-in-quad
    },
  },
};

const textContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1], // expo.out
    },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  }
};

const listVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const footerVariants: Variants = {
    hidden: { opacity: 0, y: 15},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            delay: 0.8,
            ease: [0.37, 0, 0.63, 1] // sine.out
        }
    }
}


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
  
  const renderContent = (slide: typeof currentSlide) => {
    switch (slide.id) {
      case 'approach':
        return (
          <>
            <motion.p className="mt-4 text-lg text-foreground/80" variants={contentVariants}>{slide.description}</motion.p>
            <motion.ul className="space-y-4 mt-8" variants={listVariants}>
              {(slide.points as string[]).map((point, index) => (
                <motion.li key={index} className="flex items-start" variants={listItemVariants}>
                  <motion.div initial={{scale: 0.6}} animate={{scale: 1}} transition={{type: 'spring', stiffness: 400, damping: 15, delay: 0.2 + index * 0.12}}>
                    <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  </motion.div>
                  <span className='text-foreground/90'>{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </>
        );
      case 'delivery':
        const delivery = slide as any;
        return (
          <>
            <motion.p className='text-left mt-4 text-primary font-semibold' variants={contentVariants}>{delivery.reputation}</motion.p>
            <motion.p className="mt-2 text-base text-foreground/80 text-left" variants={contentVariants} transition={{delay: 0.3}}>{delivery.description}</motion.p>
            <motion.div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4" variants={listVariants}>
              <motion.div variants={listItemVariants}>
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
              </motion.div>
              <motion.div variants={listItemVariants}>
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
              </motion.div>
            </motion.div>
          </>
        );
      case 'pillars':
        return (
          <motion.ul className="space-y-4 mt-8" variants={listVariants}>
            {(slide.points as string[]).map((pillar, index) => (
              <motion.li key={index} className="flex items-start" variants={listItemVariants}>
                 <motion.div initial={{scale: 0.6}} animate={{scale: 1}} transition={{type: 'spring', stiffness: 400, damping: 15, delay: 0.2 + index * 0.12}}>
                    <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  </motion.div>
                <span className='text-foreground/90'>{pillar}</span>
              </motion.li>
            ))}
          </motion.ul>
        );
      default:
        return null;
    }
  }


  return (
    <motion.section 
      id="nossa-abordagem" 
      className="py-20 sm:py-32 bg-secondary/30 text-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <Container className="px-6 lg:px-8">
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
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase font-headline">
                    {currentSlide.title}
                  </h2>
                  <motion.hr 
                    className="border-t-2 border-primary w-24 mt-4 mb-8" 
                    initial={{scaleX: 0, originX: 0}} 
                    animate={{scaleX: 1, transition: {duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1]}}} 
                  />
                  {renderContent(currentSlide)}
                </motion.div>
              </AnimatePresence>
            </div>
            
            <motion.div className="flex items-center justify-between mt-8 pt-4 border-t border-border" variants={footerVariants}>
                <div className='flex items-center gap-2'>
                    <span className="text-sm font-semibold">{`0${currentIndex + 1}`}</span>
                    <div className='w-20 h-px bg-border overflow-hidden rounded-full'>
                        <motion.div 
                          className='h-px bg-primary' 
                          initial={{ width: '0%'}}
                          animate={{ width: `${((currentIndex + 1) / approachData.length) * 100}%`}}
                          transition={{ duration: 0.9, ease: [0.37, 0, 0.63, 1]}}
                        />
                    </div>
                    <span className="text-sm text-muted-foreground">{`0${approachData.length}`}</span>
                </div>
              <div className="flex items-center gap-4">
                <motion.div whileHover={{scale: 1.08}} transition={{type: 'spring', stiffness: 300}}>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handlePrev}
                    className="rounded-full h-12 w-12 border-primary text-primary hover:bg-primary/10 group"
                    aria-label="Slide anterior"
                  >
                    <ArrowLeft size={20} className='transition-transform duration-300 group-hover:-translate-x-0.5' />
                  </Button>
                </motion.div>
                 <motion.div whileHover={{scale: 1.08}} transition={{type: 'spring', stiffness: 300}}>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleNext}
                    className="rounded-full h-12 w-12 border-primary text-primary hover:bg-primary/10 group"
                    aria-label="Próximo slide"
                  >
                    <ArrowRight size={20} className='transition-transform duration-300 group-hover:translate-x-0.5'/>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <motion.div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden h-full hidden lg:block" variants={imageContainerVariants}>
             <AnimatePresence mode="wait">
              {slideImage && (
                <motion.div
                  key={currentSlide.id}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={imageVariants}
                  className="absolute inset-0"
                >
                  <Image
                    src={slideImage.imageUrl}
                    alt={currentSlide.title}
                    fill
                    className="object-cover"
                    data-ai-hint={slideImage.imageHint}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
