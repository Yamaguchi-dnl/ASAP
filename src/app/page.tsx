
'use client';

import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/sections/hero';

// Otimização: Carregamento dinâmico para todas as seções abaixo da dobra (fold).
// Mantemos o SSR habilitado (padrão) para que o HTML inicial seja rico, 
// melhorando o SEO e o tempo de exibição de conteúdo (FCP), 
// enquanto reduzimos o tamanho do JavaScript inicial que o navegador precisa processar.
const BenefitsSection = dynamic(() => import('@/components/sections/benefits').then(mod => mod.BenefitsSection));
const InfiniteMovingWords = dynamic(() => import('@/components/ui/infinite-moving-words').then(mod => mod.InfiniteMovingWords));
const OurApproachSection = dynamic(() => import('@/components/sections/our-approach').then(mod => mod.OurApproachSection));
const AboutSection = dynamic(() => import('@/components/sections/about').then(mod => mod.AboutSection));
const ServicesSection = dynamic(() => import('@/components/sections/services').then(mod => mod.ServicesSection));
const TestimonialsSection = dynamic(() => import('@/components/sections/testimonials').then(mod => mod.TestimonialsSection));
const SponsorshipSection = dynamic(() => import('@/components/sections/sponsorship').then(mod => mod.SponsorshipSection));
const ContactSection = dynamic(() => import('@/components/sections/contact').then(mod => mod.ContactSection));

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
