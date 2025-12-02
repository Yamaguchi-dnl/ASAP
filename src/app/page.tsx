import { HeroSection } from '@/components/sections/hero';
import { BenefitsSection } from '@/components/sections/benefits';
import { ServicesSection } from '@/components/sections/services';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { SponsorshipSection } from '@/components/sections/sponsorship';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="relative z-10 bg-white">
        <BenefitsSection />
        <ServicesSection />
        <TestimonialsSection />
        <SponsorshipSection />
        <ContactSection />
      </div>
    </>
  );
}
