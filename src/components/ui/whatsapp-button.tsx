'use client';

import Link from 'next/link';
import Image from 'next/image';

export function WhatsAppButton() {
  const phoneNumber = "5541988339307"; // Substitua pelo número de telefone desejado
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
      <Image
        src="https://ik.imagekit.io/leosmc2zb/PULSOASAP/Novo%20Projeto.png"
        alt="WhatsApp"
        width={32}
        height={32}
      />
    </Link>
  );
}
