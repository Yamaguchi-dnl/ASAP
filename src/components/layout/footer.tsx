import { Twitter, Linkedin, Instagram, FileText, Mail, Globe } from 'lucide-react';
import { Container } from './container';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold">PulsoASAP</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Acesse nossas redes:
            </p>
            <div className="flex gap-4 mt-4">
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
          </div>
          <div>
            <h3 className="text-lg font-bold">Links Úteis</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#" className="flex items-center gap-2 hover:underline">
                  <FileText size={16} /> Código de ética e de conduta
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 hover:underline">
                  <Mail size={16} /> Newsletters
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Contato</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
               <li className="flex items-center gap-2">
                <Mail size={16} /> contato@projetoasap.com.br
              </li>
              <li className="flex items-center gap-2">
                <Globe size={16} /> www.projetoasap.com.br
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-xs text-muted-foreground">
            CNPJ XX.XXX.XXX-XX
          </p>
          <p className="text-xs text-muted-foreground mt-2 sm:mt-0">
            &copy; {new Date().getFullYear()} PulsoASAP. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
