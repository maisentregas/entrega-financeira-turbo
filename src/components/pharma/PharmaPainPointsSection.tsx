import React from "react";
import { Card } from "@/components/ui/card";
import { 
  Truck, 
  Phone, 
  MapPin, 
  CreditCard, 
  Users, 
  Clock,
  AlertTriangle,
  FileText,
  Headphones
} from "lucide-react";

export const PharmaPainPointsSection = () => {
  const painCategories = [
    {
      title: "Problemas com Entregadores",
      icon: Truck,
      color: "text-red-600",
      bgColor: "bg-red-50",
      problems: [
        "Sem controle após a saída do entregador",
        "Precisa ligar para saber o status",
        "Rotas longas e improdutivas",
        "Dificuldade no pagamento e planilhas",
        "Entregador precisa voltar só para devolver maquininha"
      ]
    },
    {
      title: "Experiência do Cliente Final",
      icon: Users,
      color: "text-orange-600", 
      bgColor: "bg-orange-50",
      problems: [
        "Entregas lentas, atrasadas ou sem status",
        "Medo de perder o cliente por falta de resposta",
        "Entregadores despreparados ou sem cuidado",
        "Comprovação feita por papel, sem segurança"
      ]
    },
    {
      title: "Gestão Estressante",
      icon: AlertTriangle,
      color: "text-purple-600",
      bgColor: "bg-purple-50", 
      problems: [
        "Atrasos e retrabalho diários",
        "Muito tempo perdido no WhatsApp e telefone",
        "Falta de dados para tomar decisões",
        "Estresse no time e insatisfação do cliente"
      ]
    }
  ];

  return (
    <section className="py-20 bg-pharma-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-100 px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <span className="text-red-600 font-semibold">Desafios comuns</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-pharma-black mb-4">
            Você enfrenta esses 
            <span className="text-red-600"> desafios?</span>
          </h2>
          <p className="text-lg text-pharma-black/80 max-w-2xl mx-auto">
            Sabemos o quanto é frustrante lidar com esses problemas diariamente no seu delivery farmacêutico
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {painCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-8 bg-white border-red-200 hover:shadow-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-6">
                <div className="text-center">
                  <div className={`h-16 w-16 ${category.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-pharma-black mb-2">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.problems.map((problem, problemIndex) => (
                    <div key={problemIndex} className="flex items-start space-x-3">
                      <div className={`h-2 w-2 ${category.bgColor} rounded-full mt-2 flex-shrink-0`}></div>
                      <p className="text-pharma-black/80 text-sm leading-relaxed">
                        {problem}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-pharma-black/70 max-w-3xl mx-auto">
            Se você se identificou com esses problemas, <strong className="text-pharma-green">você não está sozinho</strong>. 
            A boa notícia é que existe uma solução completa e automatizada para todos eles.
          </p>
        </div>
      </div>
    </section>
  );
};