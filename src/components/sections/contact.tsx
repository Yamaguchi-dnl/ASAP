'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Container } from '../layout/container';

const formSchema = z.discriminatedUnion('contactType', [
  z.object({
    contactType: z.literal('individual'),
    name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
    email: z.string().email({ message: 'Por favor, insira um email válido.' }),
    message: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' }),
  }),
  z.object({
    contactType: z.literal('company'),
    companyName: z.string().min(2, { message: 'O nome da empresa deve ter pelo menos 2 caracteres.' }),
    contactPerson: z.string().min(2, { message: 'O nome do contato deve ter pelo menos 2 caracteres.' }),
    email: z.string().email({ message: 'Por favor, insira um email válido.' }),
    service: z.string({ required_error: 'Por favor, selecione um serviço.' }),
    message: z.string().optional(),
  }),
]);

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const [contactType, setContactType] = useState<'individual' | 'company'>('individual');

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contactType: 'individual',
      name: '',
      email: '',
      message: '',
    },
  });

  const handleContactTypeChange = (value: 'individual' | 'company') => {
    setContactType(value);
    form.reset();
    form.setValue('contactType', value);
  };
  
  const onSubmit = (data: FormValues) => {
    console.log(data);
    toast({
      title: 'Mensagem enviada com sucesso!',
      description: 'Obrigado por entrar em contato. Retornaremos em breve.',
    });
    form.reset();
    form.setValue('contactType', contactType);
  };

  return (
    <section id="contato" className="py-20 sm:py-32">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-normal text-foreground">Entre em Contato</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Estamos prontos para ajudar. Preencha o formulário e nossa equipe entrará em contato.
          </p>
        </div>
        <div className="mt-16 max-w-2xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="contactType"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Você é:</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={(value: 'individual' | 'company') => {
                          field.onChange(value);
                          handleContactTypeChange(value);
                        }}
                        defaultValue={field.value}
                        className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="individual" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Pessoa Física (buscando mentoria)
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="company" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Empresa (serviços ou patrocínio)
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {contactType === 'individual' ? (
                <>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome completo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="seu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Conte-nos um pouco sobre o que você busca..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              ) : (
                <>
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome da Empresa</FormLabel>
                        <FormControl>
                          <Input placeholder="Nome da sua empresa" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contactPerson"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome do Contato</FormLabel>
                        <FormControl>
                          <Input placeholder="Quem é o responsável pelo contato" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Corporativo</FormLabel>
                        <FormControl>
                          <Input placeholder="contato@suaempresa.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Interesse Principal</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione um serviço de interesse" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="workshops">Palestras e Workshops</SelectItem>
                            <SelectItem value="mentoria_corp">Mentoria Corporativa</SelectItem>
                            <SelectItem value="bem_estar">Programas de Bem-estar</SelectItem>
                            <SelectItem value="consultoria">Consultoria de RH</SelectItem>
                            <SelectItem value="patrocinio">Patrocínio</SelectItem>
                            <SelectItem value="outros">Outros</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
               <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-accent-foreground hover:opacity-90 transition-opacity">
                Enviar Mensagem
              </Button>
            </form>
          </Form>
        </div>
      </Container>
    </section>
  );
}
