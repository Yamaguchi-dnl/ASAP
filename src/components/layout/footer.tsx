'use client';

import {
  Youtube,
  Linkedin,
  Instagram,
  FileText,
  Mail,
  Globe,
  BookText,
} from 'lucide-react';
import { Container } from './container';
import Link from 'next/link';
import { MotionWrapper } from '@/components/animation/motion-wrapper';
import { useLanguage } from '@/context/language-context';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FaqAccordion } from '@/components/sections/faq-accordion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

export function Footer() {
  const { translations } = useLanguage();
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);


  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <Container className="px-6 lg:px-8">
        <MotionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="inline-block mb-4 -ml-10">
                <div className="relative h-12 w-32">
                    <Image
                      src="https://ik.imagekit.io/leosmc2zb/PULSOASAP/ASAP%20-%20VETORIZADO%20E%20SEM%20FUNDO.png?updatedAt=1765460286444"
                      alt="PulsoASAP Logo"
                      fill
                      className="object-contain"
                    />
                </div>
              </Link>
              <p className="mt-2 text-sm text-muted-foreground">
                {translations.footer.social}
              </p>
              <div className="flex gap-4 mt-4">
                 <a
                  href="https://www.instagram.com/pulso_asap?igsh=MTI2ZmM1c2prNmFoZQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity"
                >
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/pulso-asap/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity"
                >
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://youtube.com/@pulsoasap?si=uzDkL6zfaRDkS0nT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity"
                >
                  <Youtube size={20} />
                  <span className="sr-only">YouTube</span>
                </a>
                <a
                  href="https://www.tiktok.com/@pulsoasap?_r=1&_t=ZS-92dCS9VaqEn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity"
                >
                  <TikTokIcon className="h-5 w-5" />
                  <span className="sr-only">TikTok</span>
                </a>
              </div>
            </div>
            <div className="hidden md:block space-y-4">
              <h3 className="text-lg font-bold">
                {translations.footer.usefulLinks}
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <FileText size={16} /> {translations.footer.codeOfConduct}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <Mail size={16} /> {translations.footer.newsletters}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <BookText size={16} /> {translations.footer.manuals}
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
          <div className="md:hidden mt-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="text-base font-semibold">
                  {translations.footer.usefulLinks}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-4 text-sm pl-2 pt-2">
                    <li>
                      <Link
                        href="#"
                        className="flex items-center gap-2 hover:underline"
                      >
                        <FileText size={16} />{' '}
                        {translations.footer.codeOfConduct}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex items-center gap-2 hover:underline"
                      >
                        <Mail size={16} /> {translations.footer.newsletters}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex items-center gap-2 hover:underline"
                      >
                        <BookText size={16} /> {translations.footer.manuals}
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-none">
                <AccordionTrigger className="text-base font-semibold">
                  {translations.faq.title}
                </AccordionTrigger>
                <AccordionContent>
                  <FaqAccordion />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mt-8 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-xs text-muted-foreground">CNPJ XX.XXX.XXX-XX</p>
            <p className="text-xs text-muted-foreground mt-2 sm:mt-0">
              &copy; {year} {translations.footer.copy}
            </p>
          </div>
        </MotionWrapper>
      </Container>
    </footer>
  );
}
