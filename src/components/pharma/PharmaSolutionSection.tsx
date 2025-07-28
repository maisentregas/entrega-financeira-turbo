import React from "react";
import { Card } from "@/components/ui/card";
import { 
  Zap, 
  MapPin, 
  DollarSign, 
  CreditCard, 
  BarChart3,
  CheckCircle
} from "lucide-react";

export const PharmaSolutionSection = () => {
  const solutions = [
    {
      icon: Zap,
      title: "Entrega rápida e automatizada",
      description: "Criação de corridas por integração com outros sistemas ou 1 clique, com roteirização automática",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: MapPin,
      title: "Rastreamento e visibilidade total",
      description: "Status atualizado em tempo real dos entregadores e previsão de chegada de cada entrega no painel e no app",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: DollarSign,
      title: "Controle financeiro automatizado",
      description: "Comissão calculada automaticamente + extrato para o entregador",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: CreditCard,
      title: "Pagamento simplificado com maquininha inteligente",
      description: "Entregador cobra no local e não precisa voltar para devolver a máquina",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: BarChart3,
      title: "Relatórios e dados estratégicos",
      description: "Você sabe o que está funcionando e o que precisa mudar",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section className="py-20 bg-pharma-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pharma-green-light px-4 py-2 rounded-full mb-6">
            <CheckCircle className="h-5 w-5 text-pharma-green" />
            <span className="text-pharma-green font-semibold">Nossa solução</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-pharma-black mb-4">
            Como a Mais Entregas resolve 
            <span className="text-pharma-green"> tudo isso?</span>
          </h2>
          <p className="text-lg text-pharma-black/80 max-w-3xl mx-auto">
            Uma plataforma completa que automatiza todo o processo de delivery da sua farmácia, 
            do pedido até a entrega final
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="p-8 bg-white border-pharma-green/20 hover:shadow-card hover:border-pharma-green/40 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                <div className={`h-16 w-16 ${solution.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className={`h-8 w-8 ${solution.color}`} />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-pharma-black mb-3 leading-tight">
                    {solution.title}
                  </h3>
                  <p className="text-pharma-black/70 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-pharma-green-light border-pharma-green/30 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-pharma-green">
                Resultado: Operação 100% automatizada
              </h3>
              <p className="text-lg text-pharma-black/80">
                Sua farmácia funciona no automático, sem estresse, sem retrabalho, 
                com clientes satisfeitos e entregadores motivados.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};