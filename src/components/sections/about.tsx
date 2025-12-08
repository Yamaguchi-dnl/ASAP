
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { AnimatePresence, motion, type Variants } from 'framer-motion';

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
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] }
  },
  exit: { opacity: 0, x: 50, transition: { duration: 0.7, ease: 'easeIn' } },
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.98, transition: { duration: 0.4, ease: 'easeIn' } },
};

const bioParagraphsVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
    exit: { transition: { staggerChildren: 0.15, staggerDirection: -1 } },
}

const bioParagraphVariant: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.4, ease: 'easeIn' } },
}

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

  return (
    <motion.section 
      id="sobre" 
      className="py-20 sm:py-32 bg-secondary/30"
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
              {currentFounder.image && (
                <motion.div
                  key={currentFounder.id}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={imageVariants}
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
          </motion.div>

          {/* Coluna de Texto */}
          <div className="flex flex-col justify-between h-full min-h-[550px]">
             <motion.div variants={textContentVariants}>
               <h2 className="text-4xl md:text-6xl font-normal text-foreground">
                Quem somos
              </h2>
              <hr className="border-t-2 border-primary w-24 mt-4 mb-8" />
            </motion.div>

            <div className="relative overflow-hidden min-h-[350px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentFounder.id}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={{ visible: { transition: { staggerChildren: 0.2 } }, exit: {} }}
                    >
                        <motion.h3 className="text-2xl font-bold text-foreground mb-6" variants={founderNameVariants}>
                          {currentFounder.name}
                        </motion.h3>
                        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={bioParagraphsVariants}>
                            <motion.p className="text-foreground/80" variants={bioParagraphVariant}>{currentFounder.bio1}</motion.p>
                            <motion.p className="text-foreground/80" variants={bioParagraphVariant}>{currentFounder.bio2}</motion.p>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <motion.div className="flex items-center justify-between mt-8 pt-4 border-t border-border" variants={textContentVariants}>
                <div className='flex items-center gap-2'>
                    <span className="text-sm font-semibold">{`0${currentIndex + 1}`}</span>
                    <div className='w-20 h-px bg-border'>
                        <motion.div className='h-px bg-primary' style={{width: `${((currentIndex + 1) / founders.length) * 100}%`}}/>
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
