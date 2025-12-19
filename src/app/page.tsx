'use client';

import { HeroSection } from '@/components/sections/hero';
import { BenefitsSection } from '@/components/sections/benefits';
import { AboutSection } from '@/components/sections/about';
import { ServicesSection } from '@/components/sections/services';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { SponsorshipSection } from '@/components/sections/sponsorship';
import { ContactSection } from '@/components/sections/contact';
import { OurApproachSection } from '@/components/sections/our-approach';
import { InfiniteMovingWords } from '@/components/ui/infinite-moving-words';

export default function Home() {
  const words = [
    'AÇÃO', 'SUSTENTABILIDADE', 'AUTOCONHECIMENTO', 'PROPÓSITO',
    'COMPLIANCE', 'GESTÃO DE RISCOS', 'GOVERNANÇA', 'BEM-ESTAR',
    'PARCERIAS', 'CULTURA CORPORATIVA', 'REPUTAÇÃO'
  ];

  return (
    <>
      <HeroSection />
      <div className="relative z-10 bg-white overflow-x-hidden">
        <BenefitsSection />
        <InfiniteMovingWords words={words} />
        <OurApproachSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <SponsorshipSection />
        <ContactSection />
      </div>
    </>
  );
}
