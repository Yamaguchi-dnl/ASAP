import { FirebaseClientProvider } from '@/firebase';
import { Toaster } from '@/components/ui/toaster';
import '../globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin | PulsoASAP',
  description: 'Área de administração do site PulsoASAP.',
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico?v=4" type="image/x-icon" />
      </head>
      <body>
        <FirebaseClientProvider>
          {children}
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
