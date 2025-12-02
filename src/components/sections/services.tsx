import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

interface Service {
  id: string;
  title: string;
  description: string;
  image: ImagePlaceholder | undefined;
}

const services: Service[] = [
  {
    id: 'service-workshop',
    title: 'Palestras e Workshops',
    description: 'Eventos dinâmicos sobre liderança, comunicação, saúde mental e muito mais, adaptados para a sua equipe.',
    image: PlaceHolderImages.find(p => p.id === 'service-workshop'),
  },
  {
    id: 'service-mentorship',
    title: 'Mentoria Individual',
    description: 'Programas de mentoria personalizados para acelerar o desenvolvimento de carreira e habilidades dos colaboradores.',
    image: PlaceHolderImages.find(p => p.id === 'service-mentorship'),
  },
  {
    id: 'service-wellness',
    title: 'Programas de Bem-Estar',
    description: 'Iniciativas completas focadas na saúde física e mental, promovendo um estilo de vida equilibrado.',
    image: PlaceHolderImages.find(p => p.id === 'service-wellness'),
  },
  {
    id: 'service-consulting',
    title: 'Consultoria de RH',
    description: 'Apoio estratégico para o seu RH na criação de políticas e programas de desenvolvimento humano e organizacional.',
    image: PlaceHolderImages.find(p => p.id === 'service-consulting'),
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 sm:py-32">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-normal text-foreground">
            Nossos Produtos e Serviços
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Oferecemos um portfólio completo de soluções para impulsionar o potencial humano na sua organização.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row">
              <div className="sm:w-1/3">
                {service.image && (
                    <div className="aspect-w-1 aspect-h-1 h-full">
                        <Image
                            src={service.image.imageUrl}
                            alt={service.image.description}
                            data-ai-hint={service.image.imageHint}
                            width={600}
                            height={400}
                            className="object-cover h-full w-full"
                        />
                    </div>
                )}
              </div>
              <div className="sm:w-2/3 flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                    <Button variant="link" className="p-0">Saiba mais &rarr;</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
