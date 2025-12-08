'use client';

import React from 'react';
import { Container } from '@/components/layout/container';
import { MotionWrapper } from '@/components/animation/motion-wrapper';
import { Check, Target, Building, Users, Handshake, Brain, Shield, Zap, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const keyPoints = [
  'Vivência real de exaustão profissional de uma das fundadoras.',
  'Mais de 20 anos de atuação em ambiente corporativo.',
  'Experiência profissional nas áreas de Compliance, Gestão de Riscos, Canal Ético e Controles internos.',
  'Metodologia com abordagem tripla: emocional, estratégica e cultural.',
  'Soluções personalizadas para o cliente, seja empresa ou colaborador.',
];

const pillars = [
    { title: 'Liderança consciente', icon: <Target /> },
    { title: 'GRC: Governança, Riscos e Compliance', icon: <Shield /> },
    { title: 'Gestão responsável de pessoas', icon: <Handshake /> },
    { title: 'Cultura organizacional saudável', icon: <Zap /> },
    { title: 'Autoconsciência e desenvolvimento', icon: <Brain /> },
    { title: 'Eficiência e inovação nos processos', icon: <Lightbulb /> },
];

export function OurApproachSection() {
  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="nossa-abordagem" className="py-20 sm:py-32 bg-background">
      <Container>
        <MotionWrapper variants={titleVariants}>
          <p className="text-lg text-foreground/80 max-w-4xl mx-auto text-center">
            Com presença no Brasil e na Espanha, o Pulso ASAP (Ação, Sustentabilidade, Autoconhecimento e Propósito) surgiu da necessidade de abordar o tema de exaustão profissional de maneira clara, objetiva e aplicável ao dia a dia corporativo.
          </p>
        </MotionWrapper>

        <MotionWrapper variants={textVariants} transition={{ delay: 0.2 }}>
          <div className="mt-12 max-w-2xl mx-auto">
            <ul className="space-y-4">
              {keyPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className='text-foreground/90'>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </MotionWrapper>

        <div className="mt-20 max-w-5xl mx-auto">
            <MotionWrapper variants={titleVariants} transition={{ delay: 0.4 }}>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center uppercase tracking-tighter">O que entregamos?</h2>
                <p className='text-center mt-2 text-primary font-semibold text-lg'>Reputação positiva</p>
                 <p className="mt-4 text-lg text-foreground/80 max-w-4xl mx-auto text-center">
                   Partimos da premissa de que pessoas são o principal ativo de qualquer organização. Por isso, acreditamos que uma mudança verdadeira precisa contemplar, de forma equilibrada, ambos os lados dessa balança:
                </p>
            </MotionWrapper>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <MotionWrapper variants={textVariants} transition={{ delay: 0.6 }}>
                    <Card className="h-full bg-secondary/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-4 text-2xl text-foreground">
                                <Building className="h-8 w-8 text-primary" />
                                Para Empresas
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                             <ul className="space-y-3">
                                <li className="flex items-start"><Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Obrigatoriedades Regulatórias</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Gestão de Riscos e Compliance</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Melhores práticas</span></li>
                             </ul>
                        </CardContent>
                    </Card>
                </MotionWrapper>
                 <MotionWrapper variants={textVariants} transition={{ delay: 0.8 }}>
                    <Card className="h-full bg-secondary/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-4 text-2xl text-foreground">
                                <Users className="h-8 w-8 text-primary" />
                                Para Funcionários
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                <li className="flex items-start"><Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Autoconhecimento</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Autoresponsabilidade</span></li>
                                <li className="flex items-start"><Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Inteligência Emocional</span></li>
                             </ul>
                        </CardContent>
                    </Card>
                </MotionWrapper>
            </div>
        </div>
        
         <div className="mt-20 max-w-5xl mx-auto">
            <MotionWrapper variants={titleVariants} transition={{ delay: 1 }}>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center uppercase tracking-tighter">Nossos Pilares</h2>
            </MotionWrapper>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
                {pillars.map((pillar, index) => (
                    <MotionWrapper key={index} variants={textVariants} transition={{ delay: 1.2 + index * 0.1 }}>
                        <Card className="h-full bg-primary/10 border-primary/20 text-center p-4">
                             <div className="text-primary mx-auto w-fit mb-2">
                                {React.cloneElement(pillar.icon, { size: 32 })}
                             </div>
                             <p className='font-medium text-foreground'>{pillar.title}</p>
                        </Card>
                    </MotionWrapper>
                ))}
            </div>
         </div>

      </Container>
    </section>
  );
}
