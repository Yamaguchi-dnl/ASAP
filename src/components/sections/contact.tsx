'use client';

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

const formSchema = z.object({
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

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const { translations } = useLanguage();
  const t = translations.contact;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });
  
  const onSubmit = (data: FormValues) => {
    console.log(data);
    toast({
      title: t.toast.title,
      description: t.toast.description,
    });
    form.reset();
  };
  
  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contato" className="py-20 sm:py-32">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <MotionWrapper variants={titleVariants}>
            <h2 className="text-4xl md:text-6xl font-normal text-foreground">{t.title}</h2>
          </MotionWrapper>
          <MotionWrapper variants={textVariants} transition={{ delay: 0.2 }}>
            <p className="mt-4 text-lg text-foreground/80">
              {t.subtitle}
            </p>
          </MotionWrapper>
        </div>
        <MotionWrapper variants={textVariants} transition={{ delay: 0.4 }}>
        <div className="mt-16 max-w-3xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.form.name.label}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.form.name.placeholder} {...field} />
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
                    <FormLabel>{t.form.email.label}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.form.email.placeholder} {...field} />
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
                    <FormLabel>{t.form.phone.label}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.form.phone.placeholder} {...field} />
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
                    <FormLabel>{t.form.service.label}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
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
                    <FormLabel>{t.form.companyName.label}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.form.companyName.placeholder} {...field} />
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
                    <FormLabel>{t.form.employeeCount.label}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.form.employeeCount.placeholder} {...field} />
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
                    <FormLabel>{t.form.companySite.label}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.form.companySite.placeholder} {...field} />
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
                    <FormLabel>{t.form.challenge.label}</FormLabel>
                    <FormControl>
                      <Textarea placeholder={t.form.challenge.placeholder} {...field} />
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
                    <FormLabel>{t.form.goal.label}</FormLabel>
                    <FormControl>
                      <Textarea placeholder={t.form.goal.placeholder} {...field} />
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
                    <FormLabel>{t.form.details.label}</FormLabel>
                    <FormControl>
                      <Textarea placeholder={t.form.details.placeholder} {...field} />
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
                    <FormLabel>{t.form.howYouFoundUs.label}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.form.howYouFoundUs.placeholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="md:col-span-2">
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-accent-foreground hover:opacity-90 transition-all duration-300 hover:scale-105">
                  {t.form.submitButton}
                </Button>
              </div>
            </form>
          </Form>
        </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}
