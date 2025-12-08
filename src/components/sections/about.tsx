import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check } from 'lucide-react';
import { MotionWrapper } from '@/components/animation/motion-wrapper';

export function AboutSection() {
  const rosaImage = PlaceHolderImages.find(p => p.id === 'testimonial-1');
  const helgaImage = PlaceHolderImages.find(p => p.id === 'testimonial-3');

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="sobre" className="py-20 sm:py-32 bg-secondary/30">
      <Container>
        <div className="max-w-4xl mx-auto">
          <MotionWrapper variants={titleVariants} className="text-center">
            <h2 className="text-4xl md:text-6xl font-normal text-foreground">
              Quem Somos
            </h2>
          </MotionWrapper>
          <MotionWrapper variants={textVariants} transition={{delay: 0.2}}>
            <p className="mt-6 text-center text-foreground/80 text-lg">
              Com presença no Brasil e na Espanha, o Pulso ASAP (Ação, Sustentabilidade, Autoconhecimento e Propósito) surgiu da necessidade de abordar o tema de exaustão profissional de maneira clara, objetiva e aplicável ao dia a dia corporativo.
            </p>
          </MotionWrapper>
          <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {[
              'Vivência real de exaustão profissional de uma das fundadoras.',
              'Mais de 20 anos de atuação em ambiente corporativo.',
              'Experiência profissional nas áreas de Compliance, Gestão de Riscos, Canal Ético e Controles internos.',
              'Metodologia com abordagem tripla: emocional, estratégica e cultural.',
              'Soluções personalizadas para o cliente, seja empresa ou colaborador.'
            ].map((item, index) => (
                <MotionWrapper key={item} variants={textVariants} transition={{delay: 0.4 + index * 0.1}}>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              </MotionWrapper>
            ))}
          </ul>
        </div>
        
        <div className="mt-24">
          <MotionWrapper variants={titleVariants} className="text-center">
            <h3 className="text-3xl md:text-4xl font-normal text-foreground">O que entregamos? Reputação positiva</h3>
             <p className="mt-4 max-w-3xl mx-auto text-foreground/80 text-base">
              Partimos da premissa de que pessoas são o principal ativo de qualquer organização. Por isso, acreditamos que uma mudança verdadeira precisa contemplar, de forma equilibrada, ambos os lados dessa balança:
            </p>
          </MotionWrapper>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <MotionWrapper variants={textVariants} transition={{delay: 0.2}}>
              <div className="bg-background p-8 rounded-lg shadow-lg h-full">
                <h4 className="text-2xl font-bold text-foreground mb-4">Empresas:</h4>
                <ul className="space-y-3">
                  {['Obrigatoriedades Regulatórias', 'Gestão de Riscos e Compliance', 'Melhores práticas'].map(item => (
                    <li key={item} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionWrapper>
             <MotionWrapper variants={textVariants} transition={{delay: 0.4}}>
              <div className="bg-background p-8 rounded-lg shadow-lg h-full">
                <h4 className="text-2xl font-bold text-foreground mb-4">Funcionários:</h4>
                <ul className="space-y-3">
                  {['Autoconhecimento', 'Autoresponsabilidade', 'Inteligência Emocional'].map(item => (
                    <li key={item} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionWrapper>
          </div>
        </div>

        <div className="mt-24">
          <MotionWrapper variants={titleVariants} className="text-center">
             <h3 className="text-3xl md:text-4xl font-normal text-foreground">Sócias</h3>
          </MotionWrapper>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <MotionWrapper variants={textVariants} transition={{delay: 0.2}}>
              <div className="text-center lg:text-left flex flex-col lg:flex-row items-center gap-6">
                {rosaImage && <Image src={rosaImage.imageUrl} alt="Rosa Azevedo" width={120} height={120} className="rounded-full object-cover flex-shrink-0" />}
                <div>
                  <h4 className="text-xl font-bold">Rosa Azevedo</h4>
                  <p className="mt-2 text-foreground/80 text-sm">Formada em Administração de Empresas e pós-graduada em Gestão de Projetos pela FAE Business School. Com liderança em áreas de GRC e dentro deste ecossistema nas frentes de gestão de riscos, Regulatório, Canal Ético, Prevenção a Fraudes, Due Diligence e PLD-FT.</p>
                </div>
              </div>
            </MotionWrapper>
             <MotionWrapper variants={textVariants} transition={{delay: 0.4}}>
               <div className="text-center lg:text-left flex flex-col lg:flex-row items-center gap-6">
                {helgaImage && <Image src={helgaImage.imageUrl} alt="Helga Orue" width={120} height={120} className="rounded-full object-cover flex-shrink-0" />}
                <div>
                  <h4 className="text-xl font-bold">Helga Orue</h4>
                  <p className="mt-2 text-foreground/80 text-sm">Formada em Administração de Empresas pela PUC-Pr e pós-graduada em Contabilidade e com Master em compliance pela PUC de Buenos Aires. Com atuação em prevenção a fraudes, compliance e controles internos.</p>
                </div>
              </div>
            </MotionWrapper>
          </div>
           <MotionWrapper variants={textVariants} transition={{delay: 0.6}} className="text-center mt-8">
              <p className="text-foreground/80 text-sm italic">Ambas com mais de 20 anos de experiência em com atuação em grandes e médias empresas.</p>
           </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}
