'use client';

import type { Metadata } from 'next';
import { useEffect } from 'react';
import { ClientProvider } from './client-provider';
import { FirebaseClientProvider } from '@/firebase';
import { LanguageProvider, useLanguage } from '@/context/language-context';
import './globals.css';

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
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* A metatag de descrição será atualizada dinamicamente */}
        <meta name="description" content="Promovendo saúde e bem-estar no ambiente de trabalho." />
        <link rel="icon" href="/favicon.ico?v=4" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400;1,9..40,500;1,9..40,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@400;700&display=swap" rel="stylesheet" />
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
