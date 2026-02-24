'use client';

import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/sections/hero';
import { BenefitsSection } from '@/components/sections/benefits';
import { InfiniteMovingWords } from '@/components/ui/infinite-moving-words';

// Carregamento dinâmico para seções abaixo da dobra para reduzir o bundle inicial de JS e melhorar o PageSpeed
const AboutSection = dynamic(() => import('@/components/sections/about').then(mod => mod.AboutSection), { ssr: false });
const ServicesSection = dynamic(() => import('@/components/sections/services').then(mod => mod.ServicesSection), { ssr: false });
const TestimonialsSection = dynamic(() => import('@/components/sections/testimonials').then(mod => mod.TestimonialsSection), { ssr: false });
const SponsorshipSection = dynamic(() => import('@/components/sections/sponsorship').then(mod => mod.SponsorshipSection), { ssr: false });
const ContactSection = dynamic(() => import('@/components/sections/contact').then(mod => mod.ContactSection), { ssr: false });
const OurApproachSection = dynamic(() => import('@/components/sections/our-approach').then(mod => mod.OurApproachSection), { ssr: false });

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
