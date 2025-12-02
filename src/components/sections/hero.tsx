import Image from 'next/image';
import { Container } from '@/components/layout/container';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-center bg-black">
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
      <Container className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
           <h1 className="text-8xl sm:text-9xl md:text-[160px] font-black tracking-tighter text-white uppercase leading-none">
            PULSOASAP
          </h1>
          <p className="text-lg md:text-xl text-white">
            Atuamos com soluções integradas que fortalecem a cultura corporativa e impulsionam transformações profissionais que sustentam ambientes de trabalho mais saudáveis no curto, médio e longo prazos.
          </p>
        </div>
        <div className="text-left text-white max-w-md md:ml-auto">
          
          
        </div>
      </Container>
    </section>
  );
}
