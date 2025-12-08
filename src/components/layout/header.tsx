'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { language, setLanguage, translations } = useLanguage();

  const navLinks = translations.header.navLinks;

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'pt-BR' ? 'es' : 'pt-BR');
  };

  return (
    <header className={cn(
      "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300",
    )}>
      <div
        className={cn(
          'flex h-16 items-center justify-between rounded-full px-6 transition-all duration-300',
          isScrolled ? 'bg-background/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'
        )}
      >
        <Link href="/" className="flex items-center justify-center">
          <div className="h-12 w-12 bg-white rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src="https://ik.imagekit.io/leosmc2zb/PULSOASAP/363c9083d_5.png"
              alt="PulsoASAP Logo"
              width={120}
              height={40}
              className="object-cover"
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div
          className="hidden md:flex items-center gap-4"
          style={{ width: '220px', justifyContent: 'flex-end' }}
        >
           <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="rounded-full text-foreground hover:bg-primary/10"
            >
              {language === 'pt-BR' ? 'ES' : 'PT'}
            </Button>
          <Button
            variant="outline"
            className="rounded-full border-primary text-primary hover:bg-primary/10 hover:text-primary bg-transparent"
            asChild
          >
            <a href="#contato">{translations.header.contactButton}</a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-accent/10 text-foreground"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-background text-foreground p-0"
            >
              <div className="flex justify-between items-center p-4 border-b">
                <Link
                  href="/"
                  className="flex items-center justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="h-12 w-12 bg-white rounded-lg overflow-hidden flex items-center justify-center">
                    <Image
                      src="https://ik.imagekit.io/leosmc2zb/PULSOASAP/363c9083d_5.png"
                      alt="PulsoASAP Logo"
                      width={120}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Fechar menu</span>
                </Button>
              </div>
              <nav className="flex flex-col gap-6 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                 <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    toggleLanguage();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full"
                >
                  {language === 'pt-BR' ? 'Cambiar a Español' : 'Mudar para Português'}
                </Button>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-accent-foreground hover:opacity-90 transition-opacity"
                >
                  <a
                    href="#contato"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {translations.header.contactButtonMobile}
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
