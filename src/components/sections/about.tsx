'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { useLanguage } from '@/context/language-context';

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
      ease: 'easeOut',
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: -50, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] }
  },
  exit: { opacity: 0, x: 50, filter: 'blur(10px)', transition: { duration: 0.7, ease: 'easeIn' } },
};

const textContentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const founderNameVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1, ease: 'easeOut' } },
};

const bioParagraphsVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

const bioParagraphVariant: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export function AboutSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { translations } = useLanguage();
  const founders = translations.about.founders;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % founders.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + founders.length) % founders.length
    );
  };

  const currentFounder = founders[currentIndex];
  const founderImage = PlaceHolderImages.find((p) => p.id === currentFounder.imageId);

  return (
    <motion.section 
      id="lideranca" 
      className="py-12 sm:py-16 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna da Imagem */}
          <motion.div className="relative w-5/6 mx-auto aspect-[4/5] rounded-lg overflow-hidden" variants={imageVariants}>
            <AnimatePresence mode="wait">
              {founderImage && (
                <motion.div
                  key={currentFounder.id}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={imageVariants}
                  className="absolute inset-0"
                >
                  <Image
                    src={founderImage.imageUrl}
                    alt={currentFounder.name}
                    fill
                    className="object-cover"
                    data-ai-hint={founderImage.imageHint}
                    sizes="(max-width: 768px) 80vw, 40vw"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Coluna de Texto */}
          <div className="flex flex-col justify-between h-full">
             <motion.div variants={textContentVariants}>
               <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase font-headline">
                {translations.about.title}
              </h2>
              <hr className="border-t-2 border-primary w-24 mt-4 mb-8" />
            </motion.div>

            <motion.div 
              className="relative overflow-hidden min-h-[250px] md:min-h-0"
              key={currentFounder.id}
              initial="hidden"
              animate="visible"
              variants={bioParagraphsVariants}
            >
                <motion.h3 className="text-2xl font-bold text-foreground mb-4" variants={founderNameVariants}>
                  {currentFounder.name}
                </motion.h3>
                <motion.p className="text-foreground/80" variants={bioParagraphVariant}>{currentFounder.bio1}</motion.p>
                <motion.p className="text-foreground/80 mt-2" variants={bioParagraphVariant}>{currentFounder.bio2}</motion.p>
            </motion.div>

            <motion.div className="flex items-center justify-between mt-8 pt-4 border-t border-border" variants={textContentVariants}>
                <div className='flex items-center gap-2'>
                    <span className="text-sm font-semibold">{`0${currentIndex + 1}`}</span>
                    <div className='w-20 h-px bg-border'>
                        <motion.div 
                          className='h-px bg-primary' 
                          initial={{width: `${((currentIndex) / founders.length) * 100}%`}}
                          animate={{width: `${((currentIndex + 1) / founders.length) * 100}%`}}
                          transition={{ duration: 0.6, ease: 'easeOut' }}
                        />
                    </div>
                    <span className="text-sm text-muted-foreground">{`0${founders.length}`}</span>
                </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrev}
                  className="rounded-full h-12 w-12 border-primary text-primary hover:bg-primary/10"
                >
                  <ArrowLeft size={20} />
                  <span className="sr-only">Anterior</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  className="rounded-full h-12 w-12 border-primary text-primary hover:bg-primary/10"
                >
                  <ArrowRight size={20} />
                  <span className="sr-only">Próximo</span>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
