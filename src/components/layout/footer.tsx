'use client';

import { Twitter, Linkedin, Instagram, FileText, Mail, Globe, ChevronDown } from 'lucide-react';
import { Container } from './container';
import Link from 'next/link';
import { MotionWrapper } from '@/components/animation/motion-wrapper';
import { useLanguage } from '@/context/language-context';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FaqAccordion } from '@/components/sections/faq-accordion';


export function Footer() {
  const { translations } = useLanguage();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <Container>
        <MotionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold">PulsoASAP</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {translations.footer.social}
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
            <div className="hidden md:block space-y-4">
              <h3 className="text-lg font-bold">{translations.footer.usefulLinks}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="flex items-center gap-2 hover:underline">
                    <FileText size={16} /> {translations.footer.codeOfConduct}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center gap-2 hover:underline">
                    <Mail size={16} /> {translations.footer.newsletters}
                  </Link>
                </li>
              </ul>
            </div>
             <div className="space-y-4">
              <h3 className="text-lg font-bold">{translations.footer.contact}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                 <li className="flex items-center gap-2">
                  <Mail size={16} /> contato@projetoasap.com.br
                </li>
                <li className="flex items-center gap-2">
                  <Globe size={16} /> www.projetoasap.com.br
                </li>
              </ul>
            </div>
          </div>
          
          {/* Mobile Accordion */}
          <div className="md:hidden mt-8 border-t border-border pt-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className='text-base font-semibold'>{translations.footer.usefulLinks}</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-4 text-sm pl-2 pt-2">
                    <li>
                      <Link href="#" className="flex items-center gap-2 hover:underline">
                        <FileText size={16} /> {translations.footer.codeOfConduct}
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="flex items-center gap-2 hover:underline">
                        <Mail size={16} /> {translations.footer.newsletters}
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className='text-base font-semibold'>{translations.faq.title}</AccordionTrigger>
                <AccordionContent>
                  <FaqAccordion />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mt-8 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-xs text-muted-foreground">
              CNPJ XX.XXX.XXX-XX
            </p>
            <p className="text-xs text-muted-foreground mt-2 sm:mt-0">
              &copy; {new Date().getFullYear()} {translations.footer.copy}
            </p>
          </div>
        </MotionWrapper>
      </Container>
    </footer>
  );
}
