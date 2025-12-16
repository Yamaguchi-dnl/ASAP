'use client';

import { MotionWrapper } from '@/components/animation/motion-wrapper';
import { Container } from '../layout/container';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';
import Image from 'next/image';

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
        <div className="mt-16 mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.tiers.map((tier: any, index: number) => (
            <MotionWrapper key={tier.name} variants={textVariants} transition={{ delay: 0.4 + index * 0.2 }}>
            <Card  className="flex flex-col justify-center items-center shadow-lg hover:shadow-2xl transition-all duration-300 h-64 hover:-translate-y-1.5 p-6 bg-background border">
              <CardHeader className="text-center items-center">
                 <div className="relative h-24 w-60">
                    <Image
                      src={tier.logoUrl}
                      alt={tier.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold mt-4">{tier.name}</CardTitle>
              </CardHeader>
            </Card>
            </MotionWrapper>
          ))}
        </div>
        <MotionWrapper variants={textVariants} transition={{ delay: 1 }}>
          <p className="text-center mt-8 text-sm text-muted-foreground italic">{t.note}</p>
        </MotionWrapper>
        <MotionWrapper variants={textVariants} transition={{ delay: 1.2 }}>
          <div className="mt-12 text-center">
             <h3 className="text-xl font-bold text-foreground">{t.ourSponsors}</h3>
             <div className="mt-8 flex justify-center items-center gap-8 flex-wrap">
                {/* Espaço para logos de patrocinadores */}
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
