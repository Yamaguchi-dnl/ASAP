'use server';
/**
 * @fileOverview Fluxo para enviar e-mail de contato usando Resend.
 *
 * - sendContactEmail - Função que lida com o envio do e-mail de contato.
 * - ContactFormSchema - O schema de entrada para a função de envio.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/ai/emails/contact-form-email';
import React from 'react';


// Defina o email do destinatário aqui
const TO_EMAIL = 'Danielyamaguchi409@gmail.com';
const FROM_EMAIL = 'onboarding@resend.dev'; // O Resend requer um domínio verificado em produção

// Schema Zod para validação dos dados do formulário
export const ContactFormSchema = z.object({
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
export type ContactFormData = z.infer<typeof ContactFormSchema>;

// Tool (ferramenta) para enviar o e-mail
const emailSender = ai.defineTool(
  {
    name: 'emailSender',
    description: 'Envia um e-mail de contato',
    inputSchema: ContactFormSchema,
    outputSchema: z.void(),
  },
  async (data) => {
    // A API Key do Resend será lida das variáveis de ambiente do ambiente de execução.
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    try {
      await resend.emails.send({
        from: `PulsoASAP <${FROM_EMAIL}>`,
        to: TO_EMAIL,
        subject: `Novo Contato (${data.formType === 'empresa' ? 'Empresa' : 'Profissional'}): ${data.name}`,
        reply_to: data.email,
        react: React.createElement(ContactFormEmail, data),
      });
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      // Lançar um erro aqui fará com que o fluxo falhe,
      // o que pode ser capturado no lado do cliente.
      throw new Error('Falha ao enviar o e-mail.');
    }
  }
);

// Flow (fluxo) principal que usa a ferramenta de envio de e-mail
const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: ContactFormSchema,
    outputSchema: z.object({ success: z.boolean(), message: z.string() }),
  },
  async (data) => {
    try {
      await emailSender(data);
      return { success: true, message: 'E-mail enviado com sucesso.' };
    } catch (error: any) {
      return { success: false, message: error.message || 'Falha ao enviar e-mail.' };
    }
  }
);

// Função exportada para ser chamada pelo cliente
export async function sendContactEmail(data: ContactFormData) {
  return await sendEmailFlow(data);
}
