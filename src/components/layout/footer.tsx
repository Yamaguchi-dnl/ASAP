import { Twitter, Linkedin, Instagram } from 'lucide-react';
import { Container } from './container';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <Container className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} PulsoASAP. Todos os direitos reservados.
        </p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="hover:opacity-75 transition-opacity">
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="hover:opacity-75 transition-opacity">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="hover:opacity-75 transition-opacity">
            <Instagram size={20} />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
