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
    { title: 'Gestão de pessoas', icon: <Handshake /> },
    { title: 'Cultura organizacional', icon: <Zap /> },
    { title: 'Autoconsciência', icon: <Brain /> },
    { title: 'Inovação nos processos', icon: <Lightbulb /> },
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
        <div className="bg-secondary/30 p-8 sm:p-12 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Coluna da Esquerda */}
            <div className="flex flex-col gap-10">
              <MotionWrapper variants={titleVariants}>
                 <h2 className="text-4xl md:text-6xl font-normal text-foreground">Nossa Abordagem</h2>
                <p className="mt-4 text-lg text-foreground/80">
                  Com presença no Brasil e na Espanha, o Pulso ASAP (Ação, Sustentabilidade, Autoconhecimento e Propósito) surgiu da necessidade de abordar o tema de exaustão profissional de maneira clara, objetiva e aplicável ao dia a dia corporativo.
                </p>
              </MotionWrapper>

              <MotionWrapper variants={textVariants} transition={{ delay: 0.2 }}>
                <div>
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
            </div>
            
            {/* Coluna da Direita */}
            <div className="flex flex-col gap-10">
              {/* O que entregamos */}
              <MotionWrapper variants={titleVariants} transition={{ delay: 0.4 }}>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground text-left uppercase tracking-tighter">O que entregamos?</h3>
                  <p className='text-left mt-1 text-primary font-semibold'>Reputação positiva</p>
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
                </div>
              </MotionWrapper>

              {/* Nossos Pilares */}
              <MotionWrapper variants={titleVariants} transition={{ delay: 0.6 }}>
                 <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground text-left uppercase tracking-tighter">Nossos Pilares</h3>
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {pillars.map((pillar, index) => (
                            <Card key={index} className="bg-background/50 border-primary/20 text-center p-3">
                                <div className="text-primary mx-auto w-fit mb-1">
                                    {React.cloneElement(pillar.icon, { size: 24 })}
                                </div>
                                <p className='font-medium text-foreground text-sm'>{pillar.title}</p>
                            </Card>
                        ))}
                    </div>
                 </div>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
