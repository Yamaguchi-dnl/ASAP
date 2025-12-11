'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Container } from "@/components/layout/container"
import { MotionWrapper } from "@/components/animation/motion-wrapper"
import { useLanguage } from "@/context/language-context";

export function FaqSection() {
  const { translations } = useLanguage();
  const faqs = translations.faq.items;
  
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
            <h2 className="text-3xl md:text-5xl font-normal text-foreground uppercase">
              {translations.faq.title}
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
