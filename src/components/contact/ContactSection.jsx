import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Vim do seu site CafiMilhas');
    window.open(`https://wa.me/5511994478908?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-3xl p-12 shadow-2xl text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Pronto para começar?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Quer vender, comprar ou gerenciar suas milhas com segurança e propósito? 
              Fale com um de nossos especialistas e descubra a melhor solução para você.
            </p>
            <div className="mt-10 hidden md:block">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-7 text-xl font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-7 h-7 mr-3" />
                Falar com um Especialista
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}