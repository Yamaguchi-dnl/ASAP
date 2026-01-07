'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const TO_EMAIL = 'Danielyamaguchi409@gmail.com';
const FROM_EMAIL = 'onboarding@resend.dev'; 

const ContactFormSchema = z.object({
  formType: z.enum(['empresa', 'profissional']),
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
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
type ContactFormData = z.infer<typeof ContactFormSchema>;


export async function sendEmailAction(data: ContactFormData): Promise<{ success: boolean; message: string; }> {
  const validatedFields = ContactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return { success: false, message: 'Dados inválidos.' };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  // Simple email for testing, based on your example
  const emailHtml = `<p>it works! Contact from ${data.name} (${data.email}).</p>`;

  try {
    await resend.emails.send({
      from: `PulsoASAP <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      subject: 'Teste de envio - PulsoASAP',
      html: emailHtml,
    });

    return { success: true, message: 'E-mail enviado com sucesso.' };
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return { success: false, message: 'Falha ao enviar o e-mail.' };
  }
}
