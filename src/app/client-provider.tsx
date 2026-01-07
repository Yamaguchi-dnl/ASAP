'use client';

import { usePathname } from 'next/navigation';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FaqSection } from '@/components/sections/faq';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import './globals.css';

export function ClientProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith('/admin') || pathname.startsWith('/login');

  if (isAuthPage) {
    return (
      <>
        {children}
        <Toaster />
      </>
    );
  }

  return (
    <div className="font-body antialiased text-foreground">
      <Header />
      <main className="pt-20">{children}</main>
      <div className="hidden md:block">
        <FaqSection />
      </div>
      <Footer />
      <Toaster />
      <WhatsAppButton />
    </div>
  );
}
