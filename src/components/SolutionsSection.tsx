import { Card } from "@/components/ui/card";
import { 
  RefreshCcw, 
  Zap, 
  CreditCard, 
  TrendingUp 
} from "lucide-react";
import automationFlow from "@/assets/automation-flow.jpg";

export const SolutionsSection = () => {
  const solutions = [
    {
      icon: RefreshCcw,
      title: "Lançamentos automáticos",
      description: "Cada corrida atualiza os extratos do cliente e do entregador em tempo real."
    },
    {
      icon: Zap,
      title: "Pagamento automático",
      description: "Você aprova os pagamentos com 1 clique. O valor cai direto na conta do entregador."
    },
    {
      icon: CreditCard,
      title: "Cobrança automatizada",
      description: "Boletos e pix são enviados aos clientes com controle de faturas e confirmação automática."
    },
    {
      icon: TrendingUp,
      title: "Pagamento antecipado",
      description: "Entregadores podem solicitar antecipação direto no app — e isso pode se tornar uma nova fonte de receita para você."
    }
  ];

  return (
    <section className="py-20 bg-success-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-success mb-4">
            Automatize a gestão financeira das suas entregas de ponta a ponta
          </h2>
          <p className="text-lg text-success/80 max-w-2xl mx-auto">
            Transforme sua operação com automação inteligente
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Solutions Cards */}
          <div className="grid gap-6">
            {solutions.map((solution, index) => (
              <Card 
                key={index} 
                className="p-6 bg-white border-success/20 hover:shadow-card transition-all duration-200 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-success-light rounded-lg">
                    <solution.icon className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-success mb-2 text-lg">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-success/20 rounded-2xl blur-3xl"></div>
            <img 
              src={automationFlow} 
              alt="Fluxo de automação" 
              className="relative rounded-2xl shadow-card w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};