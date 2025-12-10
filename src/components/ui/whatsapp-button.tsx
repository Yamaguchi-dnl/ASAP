'use client';

import Link from 'next/link';

const WhatsAppIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="white"
    >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.459L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.433-9.89-9.889-9.89-5.452 0-9.887 4.434-9.889 9.891.001 2.235.654 4.385 1.873 6.081l-1.179 4.244h.005l4.253-1.177h.005zM12 5.335c3.67 0 6.662 2.992 6.662 6.663 0 1.83-1.49 3.6-2.16 4.3-.67 1.05-1.13 1.05-3.33 1.05h-.67c-2.2 0-3.33-.67-3.33-1.33 0-.67.67-.67 1.33-.67h.67c.67 0 1.33-.67 1.33-1.33s-.67-1.33-1.33-1.33h-1.33c-1.33 0-2.67-.67-3.33-2-.67-1.33.67-2.67 1.33-3.33s1.33-1.33 2-1.33h.67c.67 0 1.33.67 1.33 1.33s-.67 1.33-1.33 1.33h-.67c-.67 0-1 .67-1 1.33s.33 1.33 1 1.33h2.67c1.33 0 2 .67 2 1.33s-.67 1.33-1.33 1.33h-2.67c-2.2 0-3.33-1.33-3.33-3.33s1.13-4.67 3.33-4.67h2z"/>
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
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <WhatsAppIcon />
    </Link>
  );
}
