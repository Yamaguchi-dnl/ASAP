import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-primary/70" />
      <Container className="relative z-10 flex h-full items-center">
        <div className="max-w-3xl text-left">
          <h1 className="text-[48px] leading-tight sm:text-[64px] md:text-[92px] font-extrabold tracking-tighter text-primary-foreground drop-shadow-md">
            Transformando Ambientes de Trabalho, Cuidando de Pessoas.
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/90">
            Promovemos saúde, bem-estar e alta performance em empresas que se importam. Descubra nossas soluções de mentoria e desenvolvimento profissional.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-yellow-400 to-amber-500 text-accent-foreground shadow-lg hover:opacity-90 transition-opacity transform hover:scale-105">
              <a href="#servicos">Conheça Nossas Soluções</a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
