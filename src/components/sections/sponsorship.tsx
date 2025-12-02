import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Container } from '../layout/container';

const tiers = [
  {
    name: 'Prata',
    price: 'Cota',
    features: [
      'Logo no site',
      'Agradecimento em eventos',
      '1 Workshop gratuito',
    ],
    isPopular: false,
  },
  {
    name: 'Ouro',
    price: 'Cota',
    features: [
      'Todos os benefícios Prata',
      'Destaque em redes sociais',
      'Participação em 1 mentoria',
      'Selo "Empresa Amiga"',
    ],
    isPopular: true,
  },
  {
    name: 'Master',
    price: 'Cota',
    features: [
      'Todos os benefícios Ouro',
      'Parceria estratégica',
      'Evento exclusivo para sua empresa',
      'Relatório de impacto',
    ],
    isPopular: false,
  },
];

export function SponsorshipSection() {
  return (
    <section id="patrocinio" className="py-20 sm:py-32">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Seja um Patrocinador
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Associe sua marca à promoção de um ambiente de trabalho saudável e valorize o capital humano.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 ${tier.isPopular ? 'border-primary border-2 relative' : ''}`}>
               {tier.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 text-sm font-bold rounded-full">
                  Mais Popular
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-headline">{tier.name}</CardTitle>
                <CardDescription className="text-lg">{tier.price}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button size="lg" className={`w-full ${tier.isPopular ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-accent-foreground' : 'bg-primary'}`}>
                  Quero Patrocinar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
