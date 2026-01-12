'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Container } from '../layout/container';
import { MotionWrapper } from '@/components/animation/motion-wrapper';
import { useLanguage } from '@/context/language-context';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Label } from '@/components/ui/label';
import { useFirestore } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';

// Define a type for the form data
type ContactFormData = {
  formType: 'empresa' | 'profissional';
  name: string;
  email: string;
  phone?: string;
  service?: string;
  companyName?: string;
  employeeCount?: string;
  companySite?: string;
  challenge?: string;
  goal?: string;
  details?: string;
  howYouFoundUs?: string;
  role?: string;
  department?: string;
  companyTime?: string;
};


export function ContactSection() {
  const [activeTab, setActiveTab] = useState<'empresa' | 'profissional'>('empresa');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState('');
  const { translations } = useLanguage();
  const t = translations.contact;
  const firestore = useFirestore();

  const initialFormState: ContactFormData = {
      formType: activeTab,
      name: '',
      email: '',
      phone: '',
      service: activeTab === 'empresa' ? t.form.service.options[0].value : t.form.service.mentorshipOptions[0].value,
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
  };

  const [formData, setFormData] = useState<ContactFormData>(initialFormState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleTabChange = (value: string) => {
    const newTab = value as 'empresa' | 'profissional';
    setActiveTab(newTab);
    setFormData({
        ...initialFormState,
        formType: newTab,
        service: newTab === 'empresa' 
            ? t.form.service.options[0].value 
            : t.form.service.mentorshipOptions[0].value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const submissionsCollection = collection(firestore, 'contactFormSubmissions');
      await addDoc(submissionsCollection, {
        ...formData,
        submissionDate: new Date().toISOString(),
      });

      setShowConfirmation(true);
      setFormData({
          ...initialFormState,
          formType: activeTab,
          service: activeTab === 'empresa' 
              ? t.form.service.options[0].value 
              : t.form.service.mentorshipOptions[0].value,
      });
    } catch (error) {
       console.error("Error adding document: ", error);
       setError(error instanceof Error ? error.message : "Houve um problema ao enviar sua mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
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
  const tProf = translations.contact.form_professional;


  return (
    <section id="contato" className="py-20 sm:py-32 bg-primary text-primary-foreground">
      <Container className="px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-start">
          <div className="lg:sticky lg:top-24 self-start">
            <MotionWrapper variants={titleVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight font-headline uppercase">
                {t.title}
              </h2>
              <hr className="border-t-2 border-accent w-24 mt-4 mb-8" />
            </MotionWrapper>
            <MotionWrapper variants={textVariants} transition={{ delay: 0.2 }}>
              <p className="mt-6 text-xl text-primary-foreground/80">
                {t.subtitle}
              </p>
            </MotionWrapper>
          </div>

          <MotionWrapper variants={textVariants} transition={{ delay: 0.4 }}>
            <div className="w-full">
              <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-primary-foreground/20 text-primary-foreground">
                  <TabsTrigger value="empresa" className='data-[state=active]:bg-background data-[state=active]:text-foreground'>{t.tabs.company}</TabsTrigger>
                  <TabsTrigger value="profissional" className='data-[state=active]:bg-background data-[state=active]:text-foreground'>{t.tabs.professional}</TabsTrigger>
                </TabsList>
                
                  <form onSubmit={handleSubmit} className="mt-6">
                    <TabsContent value="empresa" forceMount hidden={activeTab !== 'empresa'}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label className={formLabelStyles}>{t.form.name.label}</Label>
                            <Input name="name" placeholder={t.form.name.placeholder} value={formData.name} onChange={handleInputChange} className={formInputStyles} required />
                        </div>
                        <div className="space-y-2">
                            <Label className={formLabelStyles}>{t.form.email.label}</Label>
                            <Input name="email" type="email" placeholder={t.form.email.placeholder} value={formData.email} onChange={handleInputChange} className={formInputStyles} required/>
                        </div>
                        <div className="space-y-2">
                            <Label className={formLabelStyles}>{t.form.phone.label}</Label>
                            <Input name="phone" placeholder={t.form.phone.placeholder} value={formData.phone} onChange={handleInputChange} className={formInputStyles}/>
                        </div>
                        <div className="space-y-2">
                            <Label className={formLabelStyles}>{t.form.service.label}</Label>
                            <Select name="service" onValueChange={(value) => handleSelectChange('service', value)} value={formData.service}>
                                <SelectTrigger className={formInputStyles}>
                                    <SelectValue placeholder={t.form.service.placeholder} />
                                </SelectTrigger>
                                <SelectContent>
                                    {t.form.service.options.map((option: { value: string; label: string; }) => (
                                        <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label className={formLabelStyles}>{t.form.companyName.label}</Label>
                            <Input name="companyName" placeholder={t.form.companyName.placeholder} value={formData.companyName} onChange={handleInputChange} className={formInputStyles}/>
                        </div>
                        <div className="space-y-2">
                            <Label className={formLabelStyles}>{t.form.employeeCount.label}</Label>
                            <Input name="employeeCount" placeholder={t.form.employeeCount.placeholder} value={formData.employeeCount} onChange={handleInputChange} className={formInputStyles}/>
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <Label className={formLabelStyles}>{t.form.companySite.label}</Label>
                            <Input name="companySite" placeholder={t.form.companySite.placeholder} value={formData.companySite} onChange={handleInputChange} className={formInputStyles}/>
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <Label className={formLabelStyles}>{t.form.challenge.label}</Label>
                            <Textarea name="challenge" placeholder={t.form.challenge.placeholder} value={formData.challenge} onChange={handleInputChange} className={formInputStyles} />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <Label className={formLabelStyles}>{t.form.goal.label}</Label>
                            <Textarea name="goal" placeholder={t.form.goal.placeholder} value={formData.goal} onChange={handleInputChange} className={formInputStyles} />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <Label className={formLabelStyles}>{t.form.details.label}</Label>
                            <Textarea name="details" placeholder={t.form.details.placeholder} value={formData.details} onChange={handleInputChange} className={formInputStyles} />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <Label className={formLabelStyles}>{t.form.howYouFoundUs.label}</Label>
                            <Select name="howYouFoundUs" onValueChange={(value) => handleSelectChange('howYouFoundUs', value)} value={formData.howYouFoundUs}>
                                <SelectTrigger className={formInputStyles}>
                                    <SelectValue placeholder={t.form.howYouFoundUs.placeholder} />
                                </SelectTrigger>
                                <SelectContent>
                                    {t.form.howYouFoundUs.options.map((option: { value: string; label: string; }) => (
                                        <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="profissional" forceMount hidden={activeTab !== 'profissional'}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label className={formLabelStyles}>{tProf.name.label}</Label>
                            <Input name="name" placeholder={tProf.name.placeholder} value={formData.name} onChange={handleInputChange} className={formInputStyles} required />
                        </div>
                         <div className="space-y-2">
                            <Label className={formLabelStyles}>{tProf.email.label}</Label>
                            <Input name="email" type="email" placeholder={tProf.email.placeholder} value={formData.email} onChange={handleInputChange} className={formInputStyles} required />
                        </div>
                        <div className="space-y-2">
                            <Label className={formLabelStyles}>{tProf.phone.label}</Label>
                            <Input name="phone" placeholder={tProf.phone.placeholder} value={formData.phone} onChange={handleInputChange} className={formInputStyles}/>
                        </div>
                        <div className="space-y-2">
                            <Label className={formLabelStyles}>{tProf.service.label}</Label>
                            <Select name="service" onValueChange={(value) => handleSelectChange('service', value)} value={formData.service}>
                                <SelectTrigger className={formInputStyles}>
                                    <SelectValue placeholder={tProf.service.placeholder} />
                                </SelectTrigger>
                                <SelectContent>
                                  {t.form.service.mentorshipOptions.map((option: { value: string; label: string; }) => (
                                     <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                                  ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label className={formLabelStyles}>{tProf.companyName.label}</Label>
                            <Input name="companyName" placeholder={tProf.companyName.placeholder} value={formData.companyName} onChange={handleInputChange} className={formInputStyles}/>
                        </div>
                        <div className="space-y-2">
                            <Label className={formLabelStyles}>{tProf.role.label}</Label>
                            <Input name="role" placeholder={tProf.role.placeholder} value={formData.role} onChange={handleInputChange} className={formInputStyles}/>
                        </div>
                        <div className="space-y-2">
                            <Label className={formLabelStyles}>{tProf.department.label}</Label>
                            <Input name="department" placeholder={tProf.department.placeholder} value={formData.department} onChange={handleInputChange} className={formInputStyles}/>
                        </div>
                        <div className="space-y-2">
                            <Label className={formLabelStyles}>{tProf.companyTime.label}</Label>
                            <Input name="companyTime" placeholder={tProf.companyTime.placeholder} value={formData.companyTime} onChange={handleInputChange} className={formInputStyles}/>
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <Label className={formLabelStyles}>{tProf.challenge.label}</Label>
                            <Textarea name="challenge" placeholder={tProf.challenge.placeholder} value={formData.challenge} onChange={handleInputChange} className={formInputStyles} />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <Label className={formLabelStyles}>{tProf.goal.label}</Label>
                            <Textarea name="goal" placeholder={tProf.goal.placeholder} value={formData.goal} onChange={handleInputChange} className={formInputStyles} />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <Label className={formLabelStyles}>{tProf.howYouFoundUs.label}</Label>
                             <Select name="howYouFoundUs" onValueChange={(value) => handleSelectChange('howYouFoundUs', value)} value={formData.howYouFoundUs}>
                                <SelectTrigger className={formInputStyles}>
                                    <SelectValue placeholder={tProf.howYouFoundUs.placeholder} />
                                </SelectTrigger>
                                <SelectContent>
                                  {tProf.howYouFoundUs.options.map((option: { value: string; label: string; }) => (
                                     <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                                  ))}
                                </SelectContent>
                            </Select>
                        </div>
                      </div>
                    </TabsContent>
                    {error && <p className="mt-4 text-sm font-medium text-destructive">{error}</p>}
                    <div className="mt-8 md:col-span-2">
                       <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                           t.form.submitButton
                        )}
                      </Button>
                    </div>
                  </form>
              </Tabs>
            </div>
          </MotionWrapper>
        </div>
      </Container>
       <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t.toast.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {t.toast.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowConfirmation(false)}>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
