'use client';

import Link from 'next/link';

const WhatsAppIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="white" 
        stroke="white" 
        strokeWidth="0" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);


export function WhatsAppButton() {
  const phoneNumber = "5511999999999"; // Substitua pelo número de telefone desejado
  const message = "Olá! Gostaria de saber mais sobre os serviços da PulsoASAP."; // Mensagem padrão
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center animate-bounce"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <WhatsAppIcon />
    </Link>
  );
}
