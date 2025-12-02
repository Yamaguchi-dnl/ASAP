import { Container } from '@/components/layout/container';
import { Check } from 'lucide-react';
import { Button } from '../ui/button';
import { MotionWrapper } from '@/components/animation/motion-wrapper';

export function BenefitsSection() {
  const benefitsForCompanies = [
    'Cultura corporativa mais sólida, ética, coerente e sustentável.',
    'Redução de custos com turnover, absenteísmo e improdutividade.',
    'Redução de riscos organizacionais ligados à exaustão, clima e relações de trabalho.',
    'Equipes mais estáveis, preparadas e alinhadas às prioridades estratégicas.',
    'Melhoria consistente na reputação, confiança interna e marca empregadora.',
  ];

  const benefitsForEmployees = [
    'Maior equilíbrio emocional e capacidade de lidar com pressão e incertezas.',
    'Clareza sobre limites, prioridades e expectativas no trabalho.',
    'Fortalecimento da autonomia, da responsabilidade e da confiança pessoal.',
    'Melhor comunicação, relações mais saudáveis e menos conflitos.',
    'Evolução profissional alinhada ao propósito, às habilidades e ao momento de carreira.',
  ];

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="beneficios" className="py-20 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <MotionWrapper variants={titleVariants}>
            <h2 className="text-5xl md:text-6xl font-normal text-foreground">
              Vantagens que <br /> Transformam
            </h2>
          </MotionWrapper>
          <div>
            <MotionWrapper variants={textVariants} transition={{ delay: 0.2 }}>
              <p className="text-lg text-foreground/80">
                Descubra como a PulsoASAP pode beneficiar tanto a sua empresa
                quanto seus colaboradores, criando um ciclo virtuoso de
                crescimento e bem-estar.
              </p>
            </MotionWrapper>
            <MotionWrapper variants={textVariants} transition={{ delay: 0.4 }}>
               <Button variant="outline" size="lg" className="mt-4 rounded-full">
                Saiba mais &rarr;
              </Button>
            </MotionWrapper>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <MotionWrapper variants={cardVariants} transition={{ delay: 0.2 }}>
            <div className="bg-blue-50/50 border-2 border-blue-200 p-8 rounded-lg h-full transition-transform duration-300 hover:-translate-y-1.5">
              <h4 className="text-2xl font-bold text-foreground mb-6">
                Para Empresas:
              </h4>
              <ul className="space-y-4">
                {benefitsForCompanies.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionWrapper>
          <MotionWrapper variants={cardVariants} transition={{ delay: 0.4 }}>
            <div className="bg-blue-50/50 border-2 border-blue-200 p-8 rounded-lg h-full transition-transform duration-300 hover:-translate-y-1.5">
              <h4 className="text-2xl font-bold text-foreground mb-6">
                Para Colaboradores:
              </h4>
              <ul className="space-y-4">
                {benefitsForEmployees.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}
