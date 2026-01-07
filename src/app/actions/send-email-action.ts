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

const generateEmailHtml = (data: ContactFormData): string => {
  let body = `
    <h1>Novo Contato Recebido - PulsoASAP (${data.formType === 'empresa' ? 'Empresa' : 'Profissional'})</h1>
    <p>Uma nova mensagem foi enviada através do formulário de contato do site.</p>
    <hr>
    <h2>Informações do Contato</h2>
    <p><strong>Nome:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    ${data.phone ? `<p><strong>Telefone:</strong> ${data.phone}</p>` : ''}
  `;

  if (data.formType === 'empresa') {
    body += `
      <hr>
      <h2>Detalhes da Empresa</h2>
      ${data.service ? `<p><strong>Serviço de Interesse:</strong> ${data.service}</p>` : ''}
      ${data.companyName ? `<p><strong>Empresa:</strong> ${data.companyName}</p>` : ''}
      ${data.employeeCount ? `<p><strong>Nº de Funcionários:</strong> ${data.employeeCount}</p>` : ''}
      ${data.companySite ? `<p><strong>Site:</strong> ${data.companySite}</p>` : ''}
      ${data.challenge ? `<p><strong>Principal Desafio:</strong> ${data.challenge}</p>` : ''}
      ${data.goal ? `<p><strong>Objetivo:</strong> ${data.goal}</p>` : ''}
      ${data.details ? `<p><strong>Detalhes Adicionais:</strong> ${data.details}</p>` : ''}
      ${data.howYouFoundUs ? `<p><strong>Como conheceu:</strong> ${data.howYouFoundUs}</p>` : ''}
    `;
  }

  if (data.formType === 'profissional') {
    body += `
      <hr>
      <h2>Detalhes do Profissional</h2>
      ${data.service ? `<p><strong>Serviço de Interesse:</strong> ${data.service}</p>` : ''}
      ${data.companyName ? `<p><strong>Empresa (Opcional):</strong> ${data.companyName}</p>` : ''}
      ${data.role ? `<p><strong>Cargo Atual:</strong> ${data.role}</p>` : ''}
      ${data.department ? `<p><strong>Área de Atuação:</strong> ${data.department}</p>` : ''}
      ${data.companyTime ? `<p><strong>Tempo na Empresa:</strong> ${data.companyTime}</p>` : ''}
      ${data.challenge ? `<p><strong>Principal Desafio:</strong> ${data.challenge}</p>` : ''}
      ${data.goal ? `<p><strong>Objetivo com a Mentoria:</strong> ${data.goal}</p>` : ''}
      ${data.howYouFoundUs ? `<p><strong>Como conheceu:</strong> ${data.howYouFoundUs}</p>` : ''}
    `;
  }

  return `
    <html>
      <head>
        <style>
          body { font-family: sans-serif; background-color: #f6f9fc; padding: 20px; }
          div { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border: 1px solid #f0f0f0; border-radius: 4px; }
          h1 { font-size: 24px; text-align: center; }
          h2 { font-size: 18px; margin-top: 20px; border-bottom: 1px solid #eee; padding-bottom: 5px; }
          p { font-size: 14px; line-height: 1.5; }
          strong { font-weight: bold; }
          hr { border: 0; border-top: 1px solid #f0f0f0; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div>
          ${body}
        </div>
      </body>
    </html>
  `;
};

export async function sendEmailAction(data: ContactFormData): Promise<{ success: boolean; message: string; }> {
  const validatedFields = ContactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return { success: false, message: 'Dados inválidos.' };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const emailHtml = generateEmailHtml(data);

  try {
    await resend.emails.send({
      from: `PulsoASAP <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      subject: `Novo Contato (${data.formType === 'empresa' ? 'Empresa' : 'Profissional'}): ${data.name}`,
      reply_to: data.email,
      html: emailHtml,
    });

    return { success: true, message: 'E-mail enviado com sucesso.' };
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return { success: false, message: 'Falha ao enviar o e-mail.' };
  }
}
