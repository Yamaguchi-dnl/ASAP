'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Container } from './container';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#patrocinio', label: 'Patrocínio' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = cn(
    'sticky top-0 z-50 transition-colors duration-300',
    isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
  );

  const linkColor = isScrolled ? 'text-foreground' : 'text-white';

  return (
    <header className={headerClasses}>
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className={cn("text-2xl font-normal font-headline", linkColor)}
          >
            PulsoASAP
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  linkColor
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center" style={{width: '150px', justifyContent: 'flex-end'}}>
             <Button variant="outline" className={cn('border-white text-white hover:bg-white/10 hover:text-white', isScrolled ? 'border-primary text-primary hover:bg-primary/10 hover:text-primary bg-background' : 'bg-transparent')} asChild>
              <a href="#contato">Entrar em contato</a>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn('hover:bg-white/10', linkColor)}
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
                    className="text-2xl font-bold font-headline text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    PulsoASAP
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
                    asChild
                    className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-accent-foreground hover:opacity-90 transition-opacity"
                  >
                    <a
                      href="#contato"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Fale Conosco
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
