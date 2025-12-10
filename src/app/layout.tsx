import type { Metadata } from 'next';
import './globals.css';
import { ClientProvider } from './client-provider';

export const metadata: Metadata = {
  title: 'PulsoASAP',
  description: 'Promovendo saúde e bem-estar no ambiente de trabalho.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,700,800,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased text-foreground">
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
