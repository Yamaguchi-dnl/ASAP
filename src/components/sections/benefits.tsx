'use client';

import { ArrowRight, Check } from 'lucide-react';
import TextRevealOnScroll from '@/components/animation/text-reveal-on-scroll';
import { MotionWrapper } from '@/components/animation/motion-wrapper';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/context/language-context';

export function BenefitsSection() {
  const { translations } = useLanguage();

  return (
    <section id="beneficios" className="py-20 sm:py-32 bg-primary text-primary-foreground">
      <Container className="px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <TextRevealOnScroll>
              {translations.benefits.title.line1}
              {translations.benefits.title.line2}
            </TextRevealOnScroll>
             <Button variant="link" size="lg" className="mt-4 p-0 text-base text-primary-foreground hover:text-accent">
                {translations.benefits.exploreSolutions}{' '}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
          </div>

          <MotionWrapper transition={{ delay: 0.2 }}>
            <Tabs defaultValue="empresas" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-primary-foreground/20 text-primary-foreground">
                <TabsTrigger value="empresas" className='data-[state=active]:bg-background data-[state=active]:text-foreground'>
                  {translations.benefits.tabs.companies}
                </TabsTrigger>
                <TabsTrigger value="colaboradores" className='data-[state=active]:bg-background data-[state=active]:text-foreground'>
                  {translations.benefits.tabs.employees}
                </TabsTrigger>
              </TabsList>
              <TabsContent value="empresas">
                <div className="bg-background text-foreground p-8 rounded-lg h-full transition-transform duration-300 hover:-translate-y-1.5 mt-4">
                  <ul className="space-y-4">
                    {translations.benefits.benefitsForCompanies.map((benefit, index) => (
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
                    {translations.benefits.benefitsForEmployees.map((benefit, index) => (
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
