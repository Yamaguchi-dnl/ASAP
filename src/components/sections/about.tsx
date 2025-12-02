import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us');

  return (
    <section id="sobre" className="py-20 sm:py-32 bg-secondary/30">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full">
             {aboutImage && (
                <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    data-ai-hint={aboutImage.imageHint}
                    width={600}
                    height={720}
                    className="object-cover rounded-lg shadow-lg w-full h-full"
                />
            )}
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl md:text-6xl font-normal text-foreground uppercase tracking-wider">
              Nossa Jornada
            </h2>
            <hr className="my-8 border-foreground/30" />
            <div className="text-foreground/80 text-base">
              <p>
                Com presença no Brasil e na Espanha, o Pulso ASAP (Ação, Sustentabilidade, Autoconhecimento e Propósito) surgiu da necessidade de abordar o tema de exaustão profissional de maneira clara, objetiva e aplicável ao dia a dia corporativo.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
                 <Button variant="outline" size="icon">
                    <ArrowLeft className="h-4 w-4" />
                    <span className="sr-only">Anterior</span>
                </Button>
                <Button variant="outline" size="icon">
                    <ArrowRight className="h-4 w-4" />
                    <span className="sr-only">Próximo</span>
                </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
