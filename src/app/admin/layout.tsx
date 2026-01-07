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
    <>
      {children}
      <Toaster />
    </>
  );
}
