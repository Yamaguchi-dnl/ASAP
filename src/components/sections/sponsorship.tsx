'use client';

import { MotionWrapper } from '@/components/animation/motion-wrapper';
import { Container } from '../layout/container';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export function SponsorshipSection() {
    const { translations } = useLanguage();
    const t = translations.sponsorship;

    const titleVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    };

    const textVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    };
    
  return (
    <section id="apoiador" className="py-20 sm:py-32 bg-background">
      <Container className="px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
           <MotionWrapper variants={titleVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-headline uppercase">
              {t.title}
            </h2>
            <hr className="border-t-2 border-primary w-24 mt-4 mb-8 mx-auto" />
          </MotionWrapper>
          <MotionWrapper variants={textVariants} transition={{ delay: 0.2 }}>
            <p className="mt-4 text-xl text-foreground/80">
              {t.subtitle}
            </p>
          </MotionWrapper>
        </div>
        <div className="mt-16 mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.tiers.map((tier: any, index: number) => (
            <MotionWrapper key={tier.name} variants={textVariants} transition={{ delay: 0.4 + index * 0.2 }}>
              <div className="group" tabIndex={0}>
                <Card  className={cn("h-[500px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col bg-card relative rounded-lg border",
                "group-focus-within:shadow-2xl group-focus-within:-translate-y-1.5"
                )}>
                  <Image
                    src={tier.logoUrl}
                    alt={tier.name}
                    fill
                    className="object-cover transition-transform duration-500 opacity-5 group-hover:scale-105 group-focus-within:scale-105"
                  />
                  <div className="relative flex flex-col h-full p-8 text-foreground justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-primary transition-all duration-500">{tier.name}</h3>
                      <p className="text-foreground/80 text-base mt-4">{tier.description}</p>
                    </div>
                    
                    <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-full group-focus-within:opacity-100 group-focus-within:max-h-full transition-all duration-500 overflow-hidden">
                      <ul className="mt-6 space-y-3">
                        {tier.benefits.map((benefit: string, i: number) => (
                          <li key={i} className="flex items-start text-sm">
                            <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        variant="default"
                        className="mt-8 rounded-full"
                        asChild
                      >
                         <a href="#contato">{t.cta}</a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </MotionWrapper>
          ))}
        </div>
        <MotionWrapper variants={textVariants} transition={{ delay: 1 }}>
          <p className="text-center mt-12 text-sm text-muted-foreground italic">{t.note}</p>
        </MotionWrapper>
        <MotionWrapper variants={textVariants} transition={{ delay: 1.2 }}>
          <div className="mt-16 text-center">
             <h3 className="text-xl font-bold text-foreground">{t.ourSponsors}</h3>
             <div className="mt-8 flex justify-center items-center gap-8 flex-wrap">
                <div className="h-16 w-32 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">Logo</div>
                <div className="h-16 w-32 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">Logo</div>
                <div className="h-16 w-32 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">Logo</div>
             </div>
          </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}
