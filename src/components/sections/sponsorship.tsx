'use client';

import { MotionWrapper } from '@/components/animation/motion-wrapper';
import { Container } from '../layout/container';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

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
      <Container>
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
            <MotionWrapper key={tier.name} variants={textVariants} transition={{ delay: 0.4 + index * 0.2 }} className="flex">
              <div className="group w-full" tabIndex={0}>
                <Card className={cn("min-h-[500px] overflow-hidden shadow-lg transition-all duration-300 flex flex-col bg-card border-border/50 relative rounded-lg",
                  "focus-within:shadow-2xl hover:shadow-2xl"
                )}>
                  <div className="relative flex-grow">
                    <Image
                      src={tier.logoUrl}
                      alt={tier.name}
                      fill
                      className={cn(
                        "object-contain transition-all duration-500 p-8",
                        "group-focus-within:scale-105 group-hover:scale-105"
                      )}
                    />
                     <div className="absolute inset-0 bg-white/95 opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                  </div>
                  
                  <div className="absolute inset-0 flex flex-col h-full p-8 justify-end bg-gradient-to-t from-white via-white/0 to-transparent opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <div className="opacity-0 max-h-0 group-focus-within:opacity-100 group-focus-within:max-h-full group-hover:opacity-100 group-hover:max-h-full transition-all duration-500 ease-in-out overflow-hidden text-foreground">
                       <h3 className="text-3xl font-bold text-primary mb-4">
                        Apoiador {tier.name}
                      </h3>
                       <p className="text-foreground/80 text-base mt-4">{tier.description}</p>
                      <ul className="mt-6 space-y-3">
                        {tier.benefits.map((benefit: string, i: number) => (
                          <li key={i} className="flex items-start text-sm">
                            <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/90">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        variant="outline"
                        className="mt-8 rounded-full bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground hidden md:inline-flex"
                        asChild
                      >
                         <a href="#contato">{t.cta}</a>
                      </Button>
                    </div>
                  </div>
                  <div className="relative p-8 pt-0 transition-opacity duration-300 group-focus-within:opacity-0 group-hover:opacity-0">
                    <Button asChild variant="link" className="p-0 h-auto text-2xl font-bold text-primary hover:text-primary/80 hover:no-underline text-center">
                      <Link href="#contato">
                        <span className="block">Apoiador</span>
                        <span className="block">{tier.name}</span>
                      </Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper variants={textVariants} transition={{ delay: 0.8 }} className="mt-12 text-center block md:hidden">
          <Button 
            size="lg"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
              <a href="#contato">{t.cta}</a>
          </Button>
        </MotionWrapper>

        <MotionWrapper variants={textVariants} transition={{ delay: 1 }}>
          <p className="text-center mt-12 text-sm text-muted-foreground italic">{t.note}</p>
        </MotionWrapper>
        {t.sponsors && t.sponsors.length > 0 && (
          <MotionWrapper variants={textVariants} transition={{ delay: 1.2 }}>
            <div className="mt-16 text-center">
              <h3 className="text-xl font-bold text-foreground">{t.ourSponsors}</h3>
              <div className="mt-8 flex justify-center items-center gap-8 flex-wrap">
                {t.sponsors.map((sponsor: { name: string; logoUrl: string; }, index: number) => (
                   <div key={index} className="h-16 w-32 relative">
                     <Image
                        src={sponsor.logoUrl}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                      />
                   </div>
                ))}
              </div>
            </div>
          </MotionWrapper>
        )}
      </Container>
    </section>
  );
}
