'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { MotionWrapper } from '@/components/animation/motion-wrapper';
import { AnimatePresence, motion } from 'framer-motion';

const founders = [
  {
    id: 'rosa',
    name: 'Rosa Azevedo',
    image: PlaceHolderImages.find((p) => p.id === 'testimonial-1'),
    bio1: 'Formada em Administração de Empresas e pós-graduada em Gestão de Projetos pela FAE Business School. Com liderança em áreas de GRC e dentro deste ecossistema nas frentes de gestão de riscos, Regulatório, Canal Ético, Prevenção a Fraudes, Due Diligence e PLD-FT.',
    bio2: 'Com mais de 20 anos de experiência, atuou em grandes e médias empresas, desenvolvendo uma visão estratégica e prática sobre os desafios do mundo corporativo. Sua vivência real com exaustão profissional foi um dos principais impulsionadores para a criação do Pulso ASAP.'
  },
  {
    id: 'helga',
    name: 'Helga Orue',
    image: PlaceHolderImages.find((p) => p.id === 'testimonial-3'),
    bio1: 'Formada em Administração de Empresas pela PUC-Pr e pós-graduada em Contabilidade e com Master em compliance pela PUC de Buenos Aires. Com atuação em prevenção a fraudes, compliance e controles internos.',
    bio2: 'Traz uma bagagem sólida na implementação de programas de integridade e na criação de culturas organizacionais éticas. Sua expertise contribui para a abordagem equilibrada do Pulso ASAP, que une o bem-estar dos colaboradores com a robustez da governança corporativa.'
  },
];

export function AboutSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % founders.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + founders.length) % founders.length
    );
  };

  const currentFounder = founders[currentIndex];

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section id="sobre" className="py-20 sm:py-32 bg-secondary/30">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna da Imagem */}
          <MotionWrapper className="relative w-5/6 mx-auto aspect-[4/5] rounded-lg overflow-hidden">
            <AnimatePresence mode="wait">
              {currentFounder.image && (
                <motion.div
                  key={currentFounder.id}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={imageVariants}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentFounder.image.imageUrl}
                    alt={currentFounder.name}
                    fill
                    className="object-cover"
                    data-ai-hint={currentFounder.image.imageHint}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </MotionWrapper>

          {/* Coluna de Texto */}
          <div className="flex flex-col justify-center h-full">
             <MotionWrapper>
               <h2 className="text-5xl md:text-7xl font-bold text-foreground uppercase tracking-tighter">
                QUEM SOMOS
              </h2>
              <hr className="border-t-2 border-primary w-24 mt-4 mb-8" />
            </MotionWrapper>

            <div className="relative overflow-hidden min-h-[350px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentFounder.id}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={textVariants}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        <p className="text-foreground/80">{currentFounder.bio1}</p>
                        <p className="text-foreground/80">{currentFounder.bio2}</p>
                    </motion.div>
                </AnimatePresence>
            </div>


            <div className="flex items-center gap-4 mt-8">
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
          </div>
        </div>
      </Container>
    </section>
  );
}
