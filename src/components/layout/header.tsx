'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';
import { Container } from './container';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { language, setLanguage, translations } = useLanguage();

  const navLinks = translations.header.navLinks;

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'pt-BR' ? 'es' : 'pt-BR');
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-primary shadow-md' : 'bg-transparent'
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center -ml-4 md:ml-0">
            <div className="relative h-12 w-32">
              <Image
                src="https://ik.imagekit.io/leosmc2zb/PULSOASAP/ASAP%20-%20VETORIZADO%20E%20SEM%20FUNDO.png"
                alt="PulsoASAP Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  'text-white hover:text-accent'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div
            className="hidden md:flex items-center gap-4"
            style={{ minWidth: '220px', justifyContent: 'flex-end' }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="rounded-full text-white hover:text-accent hover:bg-white/20"
            >
              {language === 'pt-BR' ? 'ES' : 'PT'}
            </Button>
            <Button
              variant="outline"
              className="rounded-full bg-transparent border-white text-white hover:text-accent hover:border-accent"
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
                  className="text-white hover:text-accent hover:bg-white/20"
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
                    <div className="h-12 w-32 relative">
                      <Image
                        src="https://ik.imagekit.io/leosmc2zb/PULSOASAP/ASAP%20-%20VETORIZADO%20E%20SEM%20FUNDO.png"
                        alt="PulsoASAP Logo"
                        fill
                        className="object-contain"
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
                    {language === 'pt-BR'
                      ? 'Cambiar a Español'
                      : 'Mudar para Português'}
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
      </Container>
    </header>
  );
}
