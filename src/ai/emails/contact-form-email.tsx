import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface ContactFormEmailProps {
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
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const ContactFormEmail = ({
  formType,
  name,
  email,
  phone,
  service,
  companyName,
  employeeCount,
  companySite,
  challenge,
  goal,
  details,
  howYouFoundUs,
  role,
  department,
  companyTime,
}: ContactFormEmailProps) => (
  <Html>
    <Head />
    <Preview>Novo contato recebido de {name} através do site PulsoASAP</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>
          Novo Contato Recebido - PulsoASAP ({formType === 'empresa' ? 'Empresa' : 'Profissional'})
        </Heading>
        <Text style={paragraph}>Uma nova mensagem foi enviada através do formulário de contato do site.</Text>
        <Hr style={hr} />
        <Section>
          <Heading as="h2" style={subheading}>
            Informações do Contato
          </Heading>
          <Text style={item}>
            <strong>Nome:</strong> {name}
          </Text>
          <Text style={item}>
            <strong>Email:</strong> {email}
          </Text>
          {phone && <Text style={item}><strong>Telefone:</strong> {phone}</Text>}
        </Section>
        
        {formType === 'empresa' && (
          <Section>
            <Hr style={hr} />
            <Heading as="h2" style={subheading}>
              Detalhes da Empresa
            </Heading>
            {service && <Text style={item}><strong>Serviço de Interesse:</strong> {service}</Text>}
            {companyName && <Text style={item}><strong>Empresa:</strong> {companyName}</Text>}
            {employeeCount && <Text style={item}><strong>Nº de Funcionários:</strong> {employeeCount}</Text>}
            {companySite && <Text style={item}><strong>Site:</strong> {companySite}</Text>}
            {challenge && <Text style={item}><strong>Principal Desafio:</strong> {challenge}</Text>}
            {goal && <Text style={item}><strong>Objetivo:</strong> {goal}</Text>}
            {details && <Text style={item}><strong>Detalhes Adicionais:</strong> {details}</Text>}
            {howYouFoundUs && <Text style={item}><strong>Como conheceu:</strong> {howYouFoundUs}</Text>}
          </Section>
        )}

        {formType === 'profissional' && (
           <Section>
             <Hr style={hr} />
            <Heading as="h2" style={subheading}>
              Detalhes do Profissional
            </Heading>
             {service && <Text style={item}><strong>Serviço de Interesse:</strong> {service}</Text>}
             {companyName && <Text style={item}><strong>Empresa (Opcional):</strong> {companyName}</Text>}
             {role && <Text style={item}><strong>Cargo Atual:</strong> {role}</Text>}
             {department && <Text style={item}><strong>Área de Atuação:</strong> {department}</Text>}
             {companyTime && <Text style={item}><strong>Tempo na Empresa:</strong> {companyTime}</Text>}
             {challenge && <Text style={item}><strong>Principal Desafio:</strong> {challenge}</Text>}
             {goal && <Text style={item}><strong>Objetivo com a Mentoria:</strong> {goal}</Text>}
             {howYouFoundUs && <Text style={item}><strong>Como conheceu:</strong> {howYouFoundUs}</Text>}
           </Section>
        )}
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmail;

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  border: '1px solid #f0f0f0',
  borderRadius: '4px',
};

const heading = {
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  color: '#212529',
  padding: '0 20px',
};

const subheading = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#343a40',
    margin: '20px 0 10px 20px',
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.5',
  textAlign: 'center' as const,
  color: '#495057',
  padding: '0 20px',
};

const item = {
    fontSize: '14px',
    lineHeight: '1.4',
    color: '#495057',
    padding: '0 20px',
    margin: '4px 0',
}

const hr = {
  borderColor: '#e9ecef',
  margin: '20px 0',
};
