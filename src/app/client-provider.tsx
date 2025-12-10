'use client';

import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FaqSection } from '@/components/sections/faq';
import { LanguageProvider } from '@/context/language-context';

export function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div className="font-body antialiased text-foreground">
        <Header />
        <main className="pt-20">{children}</main>
        <div className="hidden md:block">
          <FaqSection />
        </div>
        <Footer />
        <Toaster />
      </div>
    </LanguageProvider>
  );
}
