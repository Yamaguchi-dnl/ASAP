'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';
import { Container } from './container';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FlagIcon } from '@/components/ui/flag-icon';
import { useScrollDirection } from '@/hooks/use-scroll-direction';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { language, setLanguage, translations } = useLanguage();
  const scrollDirection = useScrollDirection();

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

  const handleLanguageChange = (lang: 'pt-BR' | 'es') => {
    setLanguage(lang);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled ? 'bg-primary shadow-md' : 'bg-transparent',
        scrollDirection === 'down' ? '-top-24' : 'top-0'
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center -ml-10">
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
                  'text-base font-medium transition-colors text-white font-headline uppercase',
                )}
              >
                {isScrolled ? (
                  <span className="text-white hover:text-white/80">
                    {link.label}
                  </span>
                ) : (
                  <span className="hover:text-white/80">{link.label}</span>
                )}
              </Link>
            ))}
          </nav>

          <div
            className="hidden md:flex items-center gap-4"
            style={{ minWidth: '220px', justifyContent: 'flex-end' }}
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-white hover:bg-white/20 hover:text-white"
                >
                  <FlagIcon country={language === 'pt-BR' ? 'br' : 'es'} />
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40 bg-background/80 backdrop-blur-sm">
                <DropdownMenuItem onClick={() => handleLanguageChange('pt-BR')}>
                  <FlagIcon country="br" className="mr-2" />
                  <span>Português (BR)</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('es')}>
                  <FlagIcon country="es" className="mr-2" />
                  <span>Español</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="outline"
              className="rounded-full bg-transparent border-white text-white hover:bg-white hover:text-primary"
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
                <SheetTitle className="sr-only">Menu Principal</SheetTitle>
                <div className="py-4 px-4 border-b">
                  <Link
                    href="/"
                    className="flex"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="h-12 w-32 relative -ml-4">
                      <Image
                        src="https://ik.imagekit.io/leosmc2zb/PULSOASAP/2.jpg?updatedAt=1766181749842"
                        alt="PulsoASAP Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>
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
                  <div className="grid grid-cols-1 gap-2">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => {
                        handleLanguageChange('pt-BR');
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full"
                    >
                      <FlagIcon country="br" className="mr-2" /> PT-BR
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => {
                        handleLanguageChange('es');
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full"
                    >
                      <FlagIcon country="es" className="mr-2" /> ES
                    </Button>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
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
