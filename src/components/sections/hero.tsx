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
          <p className="text-lg md:text-xl text-white mb-4">
            Atuamos com soluções integradas que fortalecem a cultura corporativa e impulsionam transformações profissionais que sustentam ambientes de trabalho mais saudáveis no curto, médio e longo prazos.
          </p>
          <h1 className="text-8xl sm:text-9xl md:text-[160px] font-black tracking-tighter text-white uppercase leading-none">
            PULSOASAP
          </h1>
        </div>
        <div className="text-left text-white max-w-md md:ml-auto">
          <p>
            A PulsoASAP é uma consultoria especializada em promover a saúde mental e o bem-estar no ambiente de trabalho. Acreditamos que o sucesso de uma empresa está diretamente ligado à felicidade e ao equilíbrio de seus colaboradores.
          </p>
          <p className="mt-4">
            Através de mentorias, workshops e programas de desenvolvimento, ajudamos a construir culturas corporativas mais fortes, aumentar a produtividade e reter os melhores talentos.
          </p>
        </div>
      </Container>
    </section>
  );
}
