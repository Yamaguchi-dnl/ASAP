'use client';

import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FaqSection } from '@/components/sections/faq';
import { LanguageProvider } from '@/context/language-context';

export function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      <main className="pt-20">{children}</main>
      <FaqSection />
      <Footer />
      <Toaster />
    </LanguageProvider>
  );
}
