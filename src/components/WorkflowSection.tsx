import { Card } from "@/components/ui/card";
import { 
  ArrowRight, 
  Play, 
  RefreshCcw, 
  CreditCard, 
  BarChart3, 
  Repeat 
} from "lucide-react";

export const WorkflowSection = () => {
  const workflowSteps = [
    {
      icon: Play,
      title: "Corrida gerada",
      description: "Valores lançados no extrato",
      color: "text-primary"
    },
    {
      icon: RefreshCcw,
      title: "Extratos atualizados automaticamente",
      description: "Em tempo real para todos os envolvidos",
      color: "text-success"
    },
    {
      icon: CreditCard,
      title: "Cobrança ao cliente + pagamento ao entregador",
      description: "Ocorrem automaticamente",
      color: "text-warning"
    },
    {
      icon: BarChart3,
      title: "Acompanhamento completo via extrato",
      description: "Controle total do fluxo financeiro",
      color: "text-destructive"
    },
    {
      icon: Repeat,
      title: "Ciclo reinicia automaticamente",
      description: "De forma contínua",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como funciona na prática?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um fluxo simples que revoluciona sua gestão financeira
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-6 bg-white hover:shadow-card transition-all duration-200 animate-fade-in h-full">
                  <div className="text-center space-y-4">
                    <div className="mx-auto w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center">
                      <step.icon className={`h-8 w-8 ${step.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
                
                {/* Arrow for connection (hidden on mobile) */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};