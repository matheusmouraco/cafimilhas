import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Plane } from "lucide-react";

export default function HeroSection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Vim do seu site CafiMilhas');
    window.open(`https://wa.me/5511994478908?text=${message}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/cafimilhas/', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-emerald-800 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/gplay.png')"}}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent"></div>

      <div className="relative container mx-auto px-6 py-20 lg:py-32 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/89f4abacc_cafimilhas-Prancheta-1.png" 
              alt="CafiMilhas" 
              className="h-24 lg:h-28 w-auto"
            />
          </div>

          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              Transforme <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">milhas</span>
              <br className="hidden sm:block" /> em oportunidades
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Gestão, compra e venda de milhas com 
              <span className="font-semibold text-blue-300"> segurança</span> e 
              <span className="font-semibold text-emerald-300"> propósito</span>.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-10">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="group bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-10 py-7 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <MessageCircle className="w-7 h-7 mr-3 group-hover:scale-110 transition-transform" />
              Fale com um Especialista
            </Button>
          </div>

          {/* Contact info */}
          <div className="pt-12 space-y-3 text-gray-300">
            <div className="flex items-center justify-center gap-2">
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 hover:text-green-400 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span className="font-medium">WhatsApp: +55 11 99447-8908</span>
              </button>
            </div>
            <div className="flex items-center justify-center gap-2">
              <button 
                onClick={handleInstagramClick}
                className="flex items-center gap-2 hover:text-pink-400 transition-colors cursor-pointer"
              >
                <span className="w-5 h-5 text-pink-400 font-bold text-center leading-5">@</span>
                <span className="font-medium">Instagram: @cafimilhas</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}