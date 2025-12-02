import Image from 'next/image';
import { Container } from '@/components/layout/container';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section id="home" className="h-screen min-h-[700px] w-full">
      <div className="absolute inset-0 z-0 bg-black">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover opacity-30"
            priority
          />
        )}
      </div>
      <Container className="relative z-10 flex h-full pt-48">
        <div className="text-left max-w-2xl">
           <h1 className="text-[120px] font-normal text-white uppercase leading-none">
            PULSOASAP
          </h1>
          <p className="mt-4 text-base md:text-lg text-white">
            Atuamos com soluções integradas que fortalecem a cultura corporativa e impulsionam transformações profissionais que sustentam ambientes de trabalho mais saudáveis no curto, médio e longo prazos.
          </p>
        </div>
      </Container>
    </section>
  );
}
