import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Container } from '@/components/layout/container';
import { HeartHandshake, Users, Zap, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: HeartHandshake,
    title: 'Cultura Corporativa Forte',
    description:
      'Fortaleça os laços da sua equipe e crie um ambiente de trabalho mais unido e colaborativo.',
  },
  {
    icon: Users,
    title: 'Retenção de Talentos',
    description:
      'Invista no bem-estar dos seus colaboradores e veja a taxa de retenção de talentos aumentar.',
  },
  {
    icon: Zap,
    title: 'Aumento da Produtividade',
    description:
      'Colaboradores felizes e saudáveis são mais produtivos e engajados com os objetivos da empresa.',
  },
  {
    icon: Award,
    title: 'Equilíbrio Emocional',
    description:
      'Ofereça ferramentas para que seus funcionários alcancem um melhor equilíbrio entre vida pessoal e profissional.',
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 sm:py-32">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Vantagens que Transformam
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Descubra como a PulsoASAP pode beneficiar tanto a sua empresa quanto seus colaboradores, criando um ciclo virtuoso de crescimento e bem-estar.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <benefit.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <CardTitle className="mt-4 text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
