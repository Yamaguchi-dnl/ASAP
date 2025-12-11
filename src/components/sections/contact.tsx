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
import { MotionWrapper } from '@/components/animation/motion-wrapper';
import { useLanguage } from '@/context/language-context';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const companyFormSchema = z.object({
  formType: z.literal('empresa'),
  name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  phone: z.string().optional(),
  service: z.string({ required_error: 'Por favor, selecione um serviço.' }),
  companyName: z.string().optional(),
  employeeCount: z.string().optional(),
  companySite: z.string().optional(),
  challenge: z.string().optional(),
  goal: z.string().optional(),
  details: z.string().optional(),
  howYouFoundUs: z.string().optional(),
});

const collaboratorFormSchema = z.object({
  formType: z.literal('colaborador'),
  name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  role: z.string().min(2, { message: 'O cargo deve ter pelo menos 2 caracteres.' }),
  department: z.string().optional(),
  companyTime: z.string().optional(),
  description: z.string().min(10, { message: 'A descrição deve ter pelo menos 10 caracteres.' }),
});

const formSchema = z.discriminatedUnion('formType', [companyFormSchema, collaboratorFormSchema]);
type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const [activeTab, setActiveTab] = useState<'empresa' | 'colaborador'>('empresa');
  const { toast } = useToast();
  const { translations } = useLanguage();
  const t = translations.contact;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      formType: activeTab,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    toast({
      title: t.toast.title,
      description: t.toast.description,
    });
    form.reset();
    form.setValue('formType', activeTab);
  };
  
  const handleTabChange = (value: string) => {
    const tab = value as 'empresa' | 'colaborador';
    setActiveTab(tab);
    form.reset();
    form.setValue('formType', tab);
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const formInputStyles = "bg-transparent border-white/50 placeholder:text-primary-foreground/60 focus:border-white text-base";
  const formLabelStyles = "text-primary-foreground";

  return (
    <section id="contato" className="py-20 sm:py-32 bg-primary text-primary-foreground">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <MotionWrapper variants={titleVariants}>
            <h2 className="text-4xl md:text-6xl font-normal text-primary-foreground">{t.title}</h2>
          </MotionWrapper>
          <MotionWrapper variants={textVariants} transition={{ delay: 0.2 }}>
            <p className="mt-4 text-lg text-primary-foreground/80">
              {t.subtitle}
            </p>
          </MotionWrapper>
        </div>
        <MotionWrapper variants={textVariants} transition={{ delay: 0.4 }}>
        <div className="mt-16 max-w-3xl mx-auto">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-primary-foreground/20 text-primary-foreground">
                <TabsTrigger value="empresa" className='data-[state=active]:bg-background data-[state=active]:text-foreground'>Para Empresas</TabsTrigger>
                <TabsTrigger value="colaborador" className='data-[state=active]:bg-background data-[state=active]:text-foreground'>Para Colaboradores</TabsTrigger>
            </TabsList>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6">
                <TabsContent value="empresa" forceMount hidden={activeTab !== 'empresa'}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={formLabelStyles}>{t.form.name.label}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.form.name.placeholder} {...field} className={formInputStyles} />
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
                          <FormLabel className={formLabelStyles}>{t.form.email.label}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.form.email.placeholder} {...field} className={formInputStyles}/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={formLabelStyles}>{t.form.phone.label}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.form.phone.placeholder} {...field} className={formInputStyles}/>
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
                          <FormLabel className={formLabelStyles}>{t.form.service.label}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className={formInputStyles}>
                                <SelectValue placeholder={t.form.service.placeholder} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {t.form.service.options.map(option => (
                                 <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={formLabelStyles}>{t.form.companyName.label}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.form.companyName.placeholder} {...field} className={formInputStyles}/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="employeeCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={formLabelStyles}>{t.form.employeeCount.label}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.form.employeeCount.placeholder} {...field} className={formInputStyles}/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="companySite"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel className={formLabelStyles}>{t.form.companySite.label}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.form.companySite.placeholder} {...field} className={formInputStyles}/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="challenge"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel className={formLabelStyles}>{t.form.challenge.label}</FormLabel>
                          <FormControl>
                            <Textarea placeholder={t.form.challenge.placeholder} {...field} className={formInputStyles} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="goal"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel className={formLabelStyles}>{t.form.goal.label}</FormLabel>
                          <FormControl>
                            <Textarea placeholder={t.form.goal.placeholder} {...field} className={formInputStyles} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="details"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel className={formLabelStyles}>{t.form.details.label}</FormLabel>
                          <FormControl>
                            <Textarea placeholder={t.form.details.placeholder} {...field} className={formInputStyles} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="howYouFoundUs"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel className={formLabelStyles}>{t.form.howYouFoundUs.label}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.form.howYouFoundUs.placeholder} {...field} className={formInputStyles} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="colaborador" forceMount hidden={activeTab !== 'colaborador'}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={formLabelStyles}>Nome completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome completo" {...field} className={formInputStyles} />
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
                          <FormLabel className={formLabelStyles}>E-mail</FormLabel>
                          <FormControl>
                            <Input placeholder="seu@email.com" {...field} className={formInputStyles} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={formLabelStyles}>Cargo ou função</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu cargo" {...field} className={formInputStyles} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="department"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={formLabelStyles}>Setor</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu setor" {...field} className={formInputStyles} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="companyTime"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel className={formLabelStyles}>Tempo de empresa</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: 2 anos" {...field} className={formInputStyles} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel className={formLabelStyles}>Descrição do problema, dúvida ou solicitação</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Descreva aqui..." {...field} className={formInputStyles} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </TabsContent>
                <div className="mt-8 md:col-span-2">
                   <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-accent-foreground hover:opacity-90 transition-all duration-300 hover:scale-105">
                    {t.form.submitButton}
                  </Button>
                </div>
              </form>
            </Form>
          </Tabs>
        </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}

    