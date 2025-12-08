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

const approachData = [
  {
    id: 'approach',
    title: 'Nossa Abordagem',
    image: PlaceHolderImages.find((p) => p.id === 'service-workshop'),
    content: (
      <>
        <p className="mt-4 text-lg text-foreground/80">
          Com presença no Brasil e na Espanha, o Pulso ASAP (Ação, Sustentabilidade, Autoconhecimento e Propósito) surgiu da necessidade de abordar o tema de exaustão profissional de maneira clara, objetiva e aplicável ao dia a dia corporativo.
        </p>
        <ul className="space-y-4 mt-8">
          {[
            'Vivência real de exaustão profissional de uma das fundadoras.',
            'Mais de 20 anos de atuação em ambiente corporativo.',
            'Experiência profissional nas áreas de Compliance, Gestão de Riscos, Canal Ético e Controles internos.',
            'Metodologia com abordagem tripla: emocional, estratégica e cultural.',
            'Soluções personalizadas para o cliente, seja empresa ou colaborador.',
          ].map((point, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
              <span className='text-foreground/90'>{point}</span>
            </li>
          ))}
        </ul>
      </>
    )
  },
  {
    id: 'delivery',
    title: 'O que entregamos?',
    image: PlaceHolderImages.find((p) => p.id === 'service-consulting'),
    content: (
      <>
        <p className='text-left mt-4 text-primary font-semibold'>Reputação positiva</p>
        <p className="mt-2 text-base text-foreground/80 text-left">
          Partimos da premissa de que pessoas são o principal ativo de qualquer organização. Por isso, acreditamos que uma mudança verdadeira precisa contemplar, de forma equilibrada, ambos os lados dessa balança:
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="h-full bg-background/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg text-foreground">
                <Building className="h-6 w-6 text-primary" />
                Para Empresas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start"><Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" /><span>Obrigatoriedades Regulatórias</span></li>
                <li className="flex items-start"><Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" /><span>Gestão de Riscos e Compliance</span></li>
                <li className="flex items-start"><Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" /><span>Melhores práticas</span></li>
              </ul>
            </CardContent>
          </Card>
          <Card className="h-full bg-background/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg text-foreground">
                <Users className="h-6 w-6 text-primary" />
                Para Funcionários
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start"><Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" /><span>Autoconhecimento</span></li>
                <li className="flex items-start"><Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" /><span>Autoresponsabilidade</span></li>
                <li className="flex items-start"><Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" /><span>Inteligência Emocional</span></li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </>
    )
  },
  {
    id: 'pillars',
    title: 'Nossos Pilares',
    image: PlaceHolderImages.find((p) => p.id === 'service-mentorship'),
    content: (
       <ul className="space-y-4 mt-8">
        {[
          'Liderança consciente (Tone at the top e Cuidar de quem cuida)',
          'GRC: Governança, Riscos e Compliance',
          'Gestão responsável de pessoas',
          'Cultura organizacional saudável e engajadora',
          'Autoconsciência e desenvolvimento pessoal (Indivíduo)',
          'Eficiência e inovação nos processos',
        ].map((pillar, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
            <span className='text-foreground/90'>{pillar}</span>
          </li>
        ))}
      </ul>
    )
  }
];

export function OurApproachSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % approachData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + approachData.length) % approachData.length
    );
  };

  const currentSlide = approachData[currentIndex];

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
                  <div className="mt-4">{currentSlide.content}</div>
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
              {currentSlide.image && (
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
                    src={currentSlide.image.imageUrl}
                    alt={currentSlide.title}
                    fill
                    className="object-cover"
                    data-ai-hint={currentSlide.image.imageHint}
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
