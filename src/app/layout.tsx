'use client';

import { useEffect } from 'react';
import { ClientProvider } from './client-provider';
import { FirebaseClientProvider } from '@/firebase';
import { LanguageProvider, useLanguage } from '@/context/language-context';
import { DM_Sans, Antonio } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const antonio = Antonio({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-antonio',
});

function AppLayout({ children }: { children: React.ReactNode }) {
  const { language, translations } = useLanguage();

  useEffect(() => {
    if (document.documentElement.lang !== language) {
      document.documentElement.lang = language;
    }
    if (translations.metadata) {
      document.title = translations.metadata.title;
      const descriptionTag = document.querySelector('meta[name="description"]');
      if (descriptionTag) {
        descriptionTag.setAttribute('content', translations.metadata.description);
      }
    }
  }, [language, translations]);

  return <ClientProvider>{children}</ClientProvider>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${dmSans.variable} ${antonio.variable}`}>
      <head>
        <meta name="description" content="Promovendo saúde e bem-estar no ambiente de trabalho." />
        <link rel="icon" href="/favicon.ico?v=4" type="image/x-icon" />
      </head>
      <body>
        <FirebaseClientProvider>
          <LanguageProvider>
            <AppLayout>{children}</AppLayout>
          </LanguageProvider>
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
