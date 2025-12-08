import { HeroSection } from '@/components/sections/hero';
import { BenefitsSection } from '@/components/sections/benefits';
import { AboutSection } from '@/components/sections/about';
import { ServicesSection } from '@/components/sections/services';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { SponsorshipSection } from '@/components/sections/sponsorship';
import { ContactSection } from '@/components/sections/contact';
import { OurApproachSection } from '@/components/sections/our-approach';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="relative z-10 bg-white">
        <BenefitsSection />
        <AboutSection />
        <OurApproachSection />
        <ServicesSection />
        <TestimonialsSection />
        <SponsorshipSection />
        <ContactSection />
      </div>
    </>
  );
}
