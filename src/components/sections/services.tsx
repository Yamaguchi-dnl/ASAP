'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { MotionWrapper } from '@/components/animation/motion-wrapper';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/context/language-context';

export function ServicesSection() {
  const { translations } = useLanguage();
  const t = translations.services; // Assuming 'services' content is now for 'palestras'

  // Find images for the grid
  const image1 = PlaceHolderImages.find((p) => p.id === 'event-image-1');
  const image2 = PlaceHolderImages.find((p) => p.id === 'event-image-2');
  const image3 = PlaceHolderImages.find((p) => p.id === 'event-image-3');

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

  const imageVariants = (delay: number) => ({
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

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {image1 && (
                <MotionWrapper variants={imageVariants(0.2)} className="w-full aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                        src={image1.imageUrl}
                        alt={image1.description}
                        width={600}
                        height={450}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        data-ai-hint={image1.imageHint}
                    />
                </MotionWrapper>
            )}
             {image2 && (
                <MotionWrapper variants={imageVariants(0.4)} className="w-full aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                        src={image2.imageUrl}
                        alt={image2.description}
                        width={600}
                        height={450}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        data-ai-hint={image2.imageHint}
                    />
                </MotionWrapper>
            )}
             {image3 && (
                <MotionWrapper variants={imageVariants(0.6)} className="w-full aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                        src={image3.imageUrl}
                        alt={image3.description}
                        width={600}
                        height={450}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        data-ai-hint={image3.imageHint}
                    />
                </MotionWrapper>
            )}
        </div>
      </Container>
    </section>
  );
}
