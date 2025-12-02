import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-center">
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
      <div className="absolute inset-0 bg-black/50" />
      <Container className="relative z-10 flex flex-col items-center text-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-primary-foreground drop-shadow-lg">
            Cultivando Pessoas, Colhendo Resultados.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90">
            Promovemos saúde, bem-estar e alta performance em empresas que se importam. Descubra nossas soluções de mentoria e desenvolvimento profissional.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-yellow-400 to-amber-500 text-accent-foreground shadow-lg hover:opacity-90 transition-opacity transform hover:scale-105">
              <a href="#servicos">
                Nossas Soluções
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
