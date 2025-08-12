import React from 'react';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Vim do seu site CafiMilhas');
    window.open(`https://wa.me/5511994478908?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 hover:scale-110 transform transition-all duration-300 group animate-pulse hover:animate-none drop-shadow-2xl block md:hidden"
      aria-label="Falar no WhatsApp"
    >
      <img 
        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/826ba9497_b8238c849_V9v8ZSeJ-e1XyzdZ.png"
        alt="WhatsApp"
        className="w-16 h-16 group-hover:scale-105 transition-transform duration-300"
      />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Fale conosco no WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </button>
  );
}