'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/container';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { MotionWrapper } from '@/components/animation/motion-wrapper';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TextRevealOnScroll from '@/components/animation/text-reveal-on-scroll';

export function BenefitsSection() {
  const benefitsForCompanies = [
    'Cultura corporativa mais sólida, ética, coerente e sustentável.',
    'Redução de custos com turnover, absenteísmo e improdutividade.',
    'Redução de riscos organizacionais ligados à exaustão, clima e relações de trabalho.',
    'Equipes mais estáveis, preparadas e alinhadas às prioridades estratégicas.',
    'Melhoria consistente na reputação, confiança interna e marca empregadora.',
  ];

  const benefitsForEmployees = [
    'Maior equilíbrio emocional e capacidade de lidar com pressão e incertezas.',
    'Clareza sobre limites, prioridades e expectativas no trabalho.',
    'Fortalecimento da autonomia, da responsabilidade e da confiança pessoal.',
    'Melhor comunicação, relações mais saudáveis e menos conflitos.',
    'Evolução profissional alinhada ao propósito, às habilidades e ao momento de carreira.',
  ];

  return (
    <section id="beneficios" className="py-20 sm:py-32 bg-primary text-primary-foreground">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <TextRevealOnScroll>
              {'Funcionários que as empresas querem manter.'}
              {'Empresas onde os profissionais querem trabalhar.'}
            </TextRevealOnScroll>
             <Button variant="link" size="lg" className="mt-4 p-0 text-base text-primary-foreground hover:text-accent">
                Explore as soluções que tornam esses benefícios possíveis{' '}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
          </div>

          <MotionWrapper transition={{ delay: 0.2 }}>
            <Tabs defaultValue="empresas" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-primary-foreground/20 text-primary-foreground">
                <TabsTrigger value="empresas" className='data-[state=active]:bg-background data-[state=active]:text-foreground'>Para Empresas</TabsTrigger>
                <TabsTrigger value="colaboradores" className='data-[state=active]:bg-background data-[state=active]:text-foreground'>Para Colaboradores</TabsTrigger>
              </TabsList>
              <TabsContent value="empresas">
                <div className="bg-background text-foreground p-8 rounded-lg h-full transition-transform duration-300 hover:-translate-y-1.5 mt-4">
                  <ul className="space-y-4">
                    {benefitsForCompanies.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="colaboradores">
                <div className="bg-background text-foreground p-8 rounded-lg h-full transition-transform duration-300 hover:-translate-y-1.5 mt-4">
                  <ul className="space-y-4">
                    {benefitsForEmployees.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}
