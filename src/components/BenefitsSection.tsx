import { Card } from "@/components/ui/card";
import { 
  Building2, 
  User, 
  Clock, 
  TrendingDown, 
  Eye, 
  Zap, 
  FileText, 
  CreditCard 
} from "lucide-react";

export const BenefitsSection = () => {
  const companyBenefits = [
    {
      icon: Clock,
      title: "Mais tempo para focar na operação",
      description: "Elimine tarefas manuais e dedique-se ao que realmente importa"
    },
    {
      icon: TrendingDown,
      title: "Redução de erros, retrabalho e brigas",
      description: "Processos automatizados eliminam falhas humanas"
    },
    {
      icon: Eye,
      title: "Previsibilidade de caixa e controle total",
      description: "Visibilidade completa do fluxo financeiro em tempo real"
    }
  ];

  const deliveryBenefits = [
    {
      icon: Zap,
      title: "Pagamento ágil e confiável",
      description: "Receba seus valores rapidamente e sem complicações"
    },
    {
      icon: FileText,
      title: "Extrato atualizado no app",
      description: "Acompanhe seus ganhos e histórico em tempo real"
    },
    {
      icon: CreditCard,
      title: "Possibilidade de antecipar recebimentos",
      description: "Solicite antecipação quando precisar de dinheiro"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ganhos para quem gere e para quem entrega
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Benefícios que transformam a experiência de todos os envolvidos
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Para a empresa */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-3 mb-6">
                <Building2 className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-primary">Para a empresa</h3>
              </div>
            </div>
            
            <div className="space-y-4">
              {companyBenefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-primary-light/50 border-primary/20 hover:shadow-card transition-all duration-200 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-light rounded-lg">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Para o entregador */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-3 mb-6">
                <User className="h-8 w-8 text-success" />
                <h3 className="text-2xl font-bold text-success">Para o entregador</h3>
              </div>
            </div>
            
            <div className="space-y-4">
              {deliveryBenefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-success-light/50 border-success/20 hover:shadow-card transition-all duration-200 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-success-light rounded-lg">
                      <benefit.icon className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-success mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};