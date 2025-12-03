import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Container } from "@/components/layout/container"
import { MotionWrapper } from "@/components/animation/motion-wrapper"

const faqs = [
  {
    question: "O Pulso ASAP é um programa terapêutico?",
    answer: "O Pulso ASAP não oferece serviços terapêuticos. Toda a metodologia é fundamentada em GRC e em desenvolvimento profissional, sem caráter clínico."
  },
  {
    question: "O que significa ASAP?",
    answer: "No contexto utilizado pela empresa, ASAP significa Ação, Sustentabilidade, Autoconhecimento e Propósito. Esses pilares orientam todas as práticas e métodos aplicados pela empresa."
  },
  {
    question: "O Pulso ASAP atende empresas fora do Brasil?",
    answer: "Sim. Trabalhamos em português, espanhol e inglês. Realizamos atendimentos presenciais no Brasil e na Espanha. Para outras localidades, basta entrar em contato com nossa equipe para avaliarmos a melhor forma de atendimento."
  },
  {
    question: "Existe benefícios para clientes que contratam mais de um serviço?",
    answer: "Sim, entre em contato com nossa equipe de atendimento."
  },
  {
    question: "É possível medir o retorno sobre o investimento (ROI) do treinamento?",
    answer: "Sim. Podemos auxiliar na definição de indicadores de resultado e acompanhar impactos no engajamento e bem-estar da equipe."
  },
  {
    question: "Como o conteúdo é adaptado para diferentes níveis hierárquicos ou áreas da empresa?",
    answer: "O conteúdo é customizado após o alinhamento inicial, considerando as necessidades da empresa, da equipe, do setor ou do profissional."
  },
  {
    question: "As informações da minha empresa são tratadas com confidencialidade?",
    answer: "Sim. Todas as informações compartilhadas são tratadas com rigor ético e confidencialidade, de acordo com práticas de LGPD, GRC e compliance."
  }
];

export function FaqSection() {
  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="faq" className="py-20 sm:py-32 bg-secondary/30">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <MotionWrapper variants={titleVariants}>
            <h2 className="text-5xl md:text-6xl font-normal text-foreground">
              Perguntas Frequentes
            </h2>
          </MotionWrapper>
        </div>
        <MotionWrapper variants={textVariants} transition={{ delay: 0.2 }}>
          <div className="mt-16 max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}
