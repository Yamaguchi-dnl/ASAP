import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

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
            <h2 className="text-5xl md:text-6xl font-normal text-foreground">
              Nossa Jornada
            </h2>
            <hr className="my-8 border-foreground/30" />
            <div className="text-foreground/80 text-base space-y-6">
                <p>Com presença no Brasil e na Espanha, o Pulso ASAP (Ação, Sustentabilidade, Autoconhecimento e Propósito) surgiu da necessidade de abordar o tema de exaustão profissional de maneira clara, objetiva e aplicável ao dia a dia corporativo.</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Vivência real de exaustão profissional de uma das fundadoras.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Mais de 20 anos de atuação em ambiente corporativo.</span>
                </li>
                 <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Experiência profissional nas áreas de Compliance, Gestão de Riscos, Canal Ético e Controles internos.</span>
                </li>
                 <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Metodologia com abordagem tripla: emocional, estratégica e cultural.</span>
                </li>
                 <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Soluções personalizadas para o cliente, seja empresa ou colaborador.</span>
                </li>
              </ul>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">O que entregamos?</h3>
                <p><span className="font-bold">Reputação positiva:</span> Partimos da premissa de que pessoas são o principal ativo de qualquer organização. Por isso, acreditamos que uma mudança verdadeira precisa contemplar, de forma equilibrada, ambos os lados dessa balança.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
