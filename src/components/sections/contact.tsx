'use client';

import { useState, useEffect } from 'react';
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

const formSchema = z.object({
  formType: z.enum(['empresa', 'profissional']),
  name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  phone: z.string().optional(),
  service: z.string().optional(),
  companyName: z.string().optional(),
  employeeCount: z.string().optional(),
  companySite: z.string().optional(),
  challenge: z.string().optional(),
  goal: z.string().optional(),
  details: z.string().optional(),
  howYouFoundUs: z.string().optional(),
  role: z.string().optional(),
  department: z.string().optional(),
  companyTime: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const [activeTab, setActiveTab] = useState<'empresa' | 'profissional'>('empresa');
  const { toast } = useToast();
  const { translations } = useLanguage();
  const t = translations.contact;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      formType: activeTab,
      name: '',
      email: '',
      phone: '',
      service: '',
      companyName: '',
      employeeCount: '',
      companySite: '',
      challenge: '',
      goal: '',
      details: '',
      howYouFoundUs: '',
      role: '',
      department: '',
      companyTime: '',
    },
  });
  
  useEffect(() => {
    form.reset();
    form.setValue('formType', activeTab);
    if(activeTab === 'empresa') {
      form.setValue('service', t.form.service.options[0].value);
    }
  }, [activeTab, form, t.form.service.options]);


  const onSubmit = (data: FormValues) => {
    console.log(data);
    toast({
      title: t.toast.title,
      description: t.toast.description,
    });
    form.reset();
    form.setValue('formType', activeTab);
    if(activeTab === 'empresa') {
      form.setValue('service', t.form.service.options[0].value);
    }
  };
  
  const handleTabChange = (value: string) => {
    const tab = value as 'empresa' | 'profissional';
    setActiveTab(tab);
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const formInputStyles = "bg-transparent border-primary-foreground/50 placeholder:text-primary-foreground/70 focus:border-accent text-base text-primary-foreground";
  const formLabelStyles = "text-primary-foreground";

  return (
    <section id="contato" className="py-20 sm:py-32 bg-primary text-primary-foreground">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <MotionWrapper variants={titleVariants}>
              <h2 className="text-3xl md:text-5xl font-normal text-primary-foreground leading-tight font-headline">
                {t.title}
              </h2>
              <hr className="border-t-2 border-accent w-24 mt-4 mb-8" />
            </MotionWrapper>
            <MotionWrapper variants={textVariants} transition={{ delay: 0.2 }}>
              <p className="mt-6 text-base text-primary-foreground/80">
                {t.subtitle}
              </p>
            </MotionWrapper>
          </div>

          <MotionWrapper variants={textVariants} transition={{ delay: 0.4 }}>
            <div className="w-full">
              <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-primary-foreground/20 text-primary-foreground">
                  <TabsTrigger value="empresa" className='data-[state=active]:bg-background data-[state=active]:text-foreground'>Para Empresas</TabsTrigger>
                  <TabsTrigger value="profissional" className='data-[state=active]:bg-background data-[state=active]:text-foreground'>Para Profissionais</TabsTrigger>
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
                                  {t.form.service.options.map((option: { value: string; label: string; }) => (
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
                    <TabsContent value="profissional" forceMount hidden={activeTab !== 'profissional'}>
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
                          name="challenge"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel className={formLabelStyles}>Descreva o principal desafio que você está enfrentando</FormLabel>
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
                       <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105">
                        {t.form.submitButton}
                      </Button>
                    </div>
                  </form>
                </Form>
              </Tabs>
            </div>
          </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}
