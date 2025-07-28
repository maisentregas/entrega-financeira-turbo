import React from "react";
import { Card } from "@/components/ui/card";
import { 
  Building2, 
  Truck, 
  TrendingDown, 
  Clock, 
  Shield, 
  Smile,
  MapPin,
  DollarSign,
  Smartphone,
  FileText
} from "lucide-react";

export const PharmaBenefitsSection = () => {
  const pharmacyBenefits = [
    {
      icon: TrendingDown,
      title: "Redução de custos com rotas e combustível",
      description: "Algoritmo inteligente otimiza trajetos automaticamente"
    },
    {
      icon: Shield,
      title: "Eliminação de retrabalho e conflitos",
      description: "Com entregadores e clientes - tudo transparente e automático"
    },
    {
      icon: Clock,
      title: "Atendimento mais rápido e previsível",
      description: "Com mais controle sobre toda a operação de delivery"
    },
    {
      icon: Smile,
      title: "Melhora no clima da equipe",
      description: "Mais foco na venda e menos tempo resolvendo problemas"
    }
  ];

  const deliveryBenefits = [
    {
      icon: Smartphone,
      title: "App com tudo automatizado",
      description: "Rotas, orientações e comprovações - tudo no celular"
    },
    {
      icon: DollarSign,
      title: "Transparência nas comissões",
      description: "Cálculo automático e extrato detalhado sempre disponível"
    },
    {
      icon: MapPin,
      title: "Antecipação de pagamento disponível",
      description: "Receba antes do prazo quando precisar"
    },
    {
      icon: FileText,
      title: "Sem papelada, sem confusão",
      description: "Tudo digital, organizado e fácil de usar"
    }
  ];

  return (
    <section className="py-20 bg-pharma-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-pharma-black mb-4">
            Ganhos para 
            <span className="text-pharma-green"> todos os lados</span>
          </h2>
          <p className="text-lg text-pharma-black/80 max-w-2xl mx-auto">
            Nossa solução beneficia tanto a farmácia quanto os entregadores, 
            criando um ecossistema de sucesso para todos
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Benefícios para a Farmácia */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-pharma-green-light px-4 py-2 rounded-full mb-4">
                <Building2 className="h-5 w-5 text-pharma-green" />
                <span className="text-pharma-green font-semibold">Para a Farmácia</span>
              </div>
              <h3 className="text-2xl font-bold text-pharma-black mb-6">
                Benefícios Estratégicos
              </h3>
            </div>
            
            <div className="space-y-6">
              {pharmacyBenefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-white border-pharma-green/20 hover:shadow-card transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-pharma-green-light rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-pharma-green" />
                    </div>
                    <div>
                      <h4 className="font-bold text-pharma-black mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-pharma-black/70 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefícios para o Entregador */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
                <Truck className="h-5 w-5 text-blue-600" />
                <span className="text-blue-600 font-semibold">Para o Entregador</span>
              </div>
              <h3 className="text-2xl font-bold text-pharma-black mb-6">
                Trabalho Facilitado
              </h3>
            </div>
            
            <div className="space-y-6">
              {deliveryBenefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-white border-blue-200 hover:shadow-card transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-pharma-black mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-pharma-black/70 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-pharma-green text-white max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                O resultado? Um ecossistema que funciona
              </h3>
              <p className="text-lg text-white/90">
                Farmácia mais eficiente, entregadores satisfeitos e clientes fidelizados. 
                Todos ganham quando o sistema é inteligente.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};