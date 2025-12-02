import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/layout/container';
import { Check } from 'lucide-react';
import { Button } from '../ui/button';

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

  return (
    <section id="beneficios" className="py-20 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <h2 className="text-5xl md:text-6xl font-normal text-foreground">
            Vantagens que <br /> Transformam
          </h2>
          <div>
            <p className="text-lg text-foreground/80">
              Descubra como a PulsoASAP pode beneficiar tanto a sua empresa
              quanto seus colaboradores, criando um ciclo virtuoso de
              crescimento e bem-estar.
            </p>
            <Button variant="outline" size="lg" className="mt-4 rounded-full">
              Saiba mais &rarr;
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-primary">
            Funcionários que as empresas querem manter
          </h3>
          <h3 className="text-2xl font-bold text-primary">
            Empresas onde os profissionais querem trabalhar
          </h3>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondary/30 p-8 rounded-lg">
            <h4 className="text-2xl font-bold text-foreground mb-6">
              📌 Para Empresas:
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
          <div className="bg-secondary/30 p-8 rounded-lg">
            <h4 className="text-2xl font-bold text-foreground mb-6">
              📌 Para Colaboradores:
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
        </div>
      </Container>
    </section>
  );
}
