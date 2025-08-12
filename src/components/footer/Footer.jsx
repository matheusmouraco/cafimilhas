import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Vim do seu site CafiMilhas');
    window.open(`https://wa.me/5511994478908?text=${message}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/cafimilhas/', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 mb-12 text-center lg:text-left">
            {/* Logo and description */}
            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-3">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/89f4abacc_cafimilhas-Prancheta-1.png" 
                  alt="CafiMilhas" 
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                CafiMilhas — Gestão de Milhas com Propósito. 
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <h3 className="text-xl font-bold">Contato</h3>
              <div className="space-y-3 text-gray-300">
                <button 
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-2 hover:text-green-400 transition-colors cursor-pointer"
                >
                  📱 WhatsApp: +55 11 99447-8908
                </button>
                <button 
                  onClick={handleInstagramClick}
                  className="flex items-center gap-2 hover:text-pink-400 transition-colors cursor-pointer"
                >
                  📸 Instagram: @cafimilhas
                </button>
              </div>
            </div>

            {/* Bible verse */}
            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <h3 className="text-xl font-bold">Nosso Fundamento</h3>
              <div className="bg-gradient-to-br from-blue-900/50 to-emerald-900/50 p-6 rounded-2xl border border-blue-800 w-full">
                <blockquote className="text-gray-200 italic leading-relaxed mb-3">
                  "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento."
                </blockquote>
                <cite className="text-blue-400 font-semibold">— Provérbios 3:5</cite>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <div className="text-sm text-gray-400">
              <p>© 2025 CafiMilhas. Todos os direitos reservados.</p>
              <p>CNPJ: 56.689.612/0001-98</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}