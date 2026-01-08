'use client';

import { ArrowRight } from 'lucide-react';
import TextRevealOnScroll from '@/components/animation/text-reveal-on-scroll';
import { MotionWrapper } from '@/components/animation/motion-wrapper';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/context/language-context';
import Link from 'next/link';

export function BenefitsSection() {
  const { translations } = useLanguage();

  return (
    <section id="beneficios" className="py-20 sm:py-32 bg-primary text-primary-foreground overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="px-6 lg:px-0">
            <TextRevealOnScroll>
              {translations.benefits.title.line1}
              {translations.benefits.title.line2}
            </TextRevealOnScroll>
             <Button asChild variant="link" size="lg" className="mt-4 p-0 h-auto text-base text-left whitespace-normal text-primary-foreground hover:text-accent">
                <Link href="#servicos">
                    {translations.benefits.exploreSolutions}{' '}
                    <ArrowRight className="ml-2 h-4 w-4 inline-block" />
                </Link>
              </Button>
          </div>

          <MotionWrapper transition={{ delay: 0.2 }}>
            <Tabs defaultValue="empresas" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-primary-foreground/20 text-primary-foreground">
                <TabsTrigger value="empresas" className='data-[state=active]:bg-background data-[state=active]:text-foreground'>
                  {translations.benefits.tabs.companies}
                </TabsTrigger>
                <TabsTrigger value="profissionais" className='data-[state=active]:bg-background data-[state=active]:text-foreground'>
                  {translations.benefits.tabs.professionals}
                </TabsTrigger>
              </TabsList>
              <TabsContent value="empresas">
                <div className="bg-background text-foreground p-8 rounded-lg h-full transition-transform duration-300 hover:-translate-y-1.5 mt-4">
                  <ul className="space-y-4">
                    {translations.benefits.benefitsForCompanies.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="h-2 w-2 bg-primary rounded-full mr-3 mt-2.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="profissionais">
                <div className="bg-background text-foreground p-8 rounded-lg h-full transition-transform duration-300 hover:-translate-y-1.5 mt-4">
                  <ul className="space-y-4">
                    {translations.benefits.benefitsForProfessionals.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="h-2 w-2 bg-primary rounded-full mr-3 mt-2.5 flex-shrink-0" />
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
