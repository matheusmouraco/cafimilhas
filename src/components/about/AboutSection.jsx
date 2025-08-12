import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              CafiMilhas: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Milhas com propósito</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                Somos uma empresa cristã que acredita que prosperar com 
                <span className="font-semibold text-blue-700"> honestidade</span> é possível. 
                Ajudamos você a gerir, vender ou comprar milhas com 
                <span className="font-semibold text-emerald-700"> segurança</span>, 
                clareza e suporte humanizado.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-8 rounded-2xl border-l-4 border-blue-500">
                <blockquote className="text-lg italic text-gray-700 leading-relaxed">
                  "E tudo quanto fizerdes, fazei-o de todo o coração, como ao Senhor."
                </blockquote>
                <cite className="block mt-3 text-blue-700 font-semibold">— Colossenses 3:23</cite>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Com Propósito</h3>
                  <p className="text-sm text-gray-600 mt-1">Valores cristãos em cada atendimento</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Segurança</h3>
                  <p className="text-sm text-gray-600 mt-1">Transações protegidas e confiáveis</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Humanizado</h3>
                  <p className="text-sm text-gray-600 mt-1">Atendimento personalizado e cuidadoso</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-500 to-emerald-500 rounded-3xl p-1">
                <div className="bg-white rounded-3xl p-8 h-full">
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-4xl">🙏</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Nossa Missão</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Transformar a gestão de milhas em uma experiência segura, transparente e alinhada com valores cristãos, 
                      ajudando nossos clientes a alcançar seus objetivos de viagem com integridade e excelência.
                    </p>
                    
                    <div className="pt-4 space-y-3 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Transparência total nos processos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span>Atendimento baseado em valores cristãos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Compromisso com a satisfação do cliente</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}