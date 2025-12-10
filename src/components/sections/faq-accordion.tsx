'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useLanguage } from "@/context/language-context";

export function FaqAccordion() {
  const { translations } = useLanguage();
  const faqs = translations.faq.items;
  
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-sm text-left">{faq.question}</AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
