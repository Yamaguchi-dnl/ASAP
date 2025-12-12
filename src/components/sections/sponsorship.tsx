'use client';

import { MotionWrapper } from '@/components/animation/motion-wrapper';
import { Container } from '../layout/container';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';

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
            <h2 className="text-3xl md:text-5xl font-bold text-foreground uppercase font-headline">
              {t.title}
            </h2>
            <hr className="border-t-2 border-primary w-24 mt-4 mb-8 mx-auto" />
          </MotionWrapper>
          <MotionWrapper variants={textVariants} transition={{ delay: 0.2 }}>
            <p className="mt-4 text-lg text-foreground/80">
              {t.subtitle}
            </p>
          </MotionWrapper>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {t.tiers.map((tier, index) => (
            <MotionWrapper key={tier.name} variants={textVariants} transition={{ delay: 0.4 + index * 0.2 }}>
            <Card  className={`flex flex-col justify-center items-center shadow-lg hover:shadow-2xl transition-all duration-300 h-48 hover:-translate-y-1.5 ${tier.isPopular ? 'border-primary border-2 relative' : 'bg-secondary'}`}>
               {tier.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 text-sm font-bold rounded-full">
                  {t.mostPopular}
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">{tier.name}</CardTitle>
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
