import React from 'react';
import { BarChart3, ShoppingCart, DollarSign, Users } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: BarChart3,
      title: "Gestão de Milhas",
      description: "Acompanhamos e organizamos suas milhas para que você não perca prazos nem oportunidades.",
      color: "blue",
      features: ["Controle de validade", "Relatórios detalhados", "Alertas automáticos"]
    },
    {
      icon: ShoppingCart,
      title: "Compra de Milhas",
      description: "Precisa de milhas para uma viagem ou negócio? Temos as melhores cotações do mercado.",
      color: "emerald",
      features: ["Melhores preços", "Transferência segura", "Suporte completo"]
    },
    {
      icon: DollarSign,
      title: "Venda de Milhas",
      description: "Vendemos suas milhas com segurança, agilidade e pagamento garantido.",
      color: "purple",
      features: ["Pagamento rápido", "Processo seguro", "Valores justos"]
    },
    {
      icon: Users,
      title: "Consultoria Personalizada",
      description: "Não sabe o que fazer com suas milhas? Cuidamos de tudo por você.",
      color: "orange",
      features: ["Análise gratuita", "Estratégia personalizada", "Acompanhamento contínuo"]
    }
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      border: "border-blue-200",
      gradient: "from-blue-500 to-blue-600"
    },
    emerald: {
      bg: "bg-emerald-100",
      text: "text-emerald-600",
      border: "border-emerald-200",
      gradient: "from-emerald-500 to-emerald-600"
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-600",
      border: "border-purple-200",
      gradient: "from-purple-500 to-purple-600"
    },
    orange: {
      bg: "bg-orange-100",
      text: "text-orange-600",
      border: "border-orange-200",
      gradient: "from-orange-500 to-orange-600"
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              O que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">fazemos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferecemos soluções completas para gestão de milhas aéreas, 
              sempre com transparência, segurança e atendimento humanizado.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const colors = colorClasses[service.color];
              
              return (
                <div 
                  key={index}
                  className="group bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-700"
                >
                  <div className="space-y-6">
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-8 h-8 ${colors.text}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 pl-22">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className={`w-2 h-2 bg-gradient-to-r ${colors.gradient} rounded-full`}></div>
                          <span className="text-gray-200 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <div className={`h-1 bg-gradient-to-r ${colors.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}