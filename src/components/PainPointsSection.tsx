import { Card } from "@/components/ui/card";
import { 
  FileSpreadsheet, 
  Clock, 
  Calculator, 
  CreditCard, 
  ShieldAlert 
} from "lucide-react";

export const PainPointsSection = () => {
  const painPoints = [
    {
      icon: FileSpreadsheet,
      title: "Horas perdidas em planilhas manuais",
      description: "Tempo precioso desperdiçado com controles manuais e cálculos repetitivos"
    },
    {
      icon: Clock,
      title: "Clientes que demoram para pagar",
      description: "Cobranças demoradas e muitas dúvidas sobre valores e prazos"
    },
    {
      icon: Calculator,
      title: "Erros de cálculo e discussões com entregadores",
      description: "Conflitos frequentes sobre valores, comissões e pagamentos"
    },
    {
      icon: CreditCard,
      title: "Custos altos com PIX, boletos, NF",
      description: "Taxas e burocracias que consomem sua margem de lucro"
    },
    {
      icon: ShieldAlert,
      title: "Falta de controle e risco de fraudes",
      description: "Ausência de rastreabilidade e vulnerabilidades no processo"
    }
  ];

  return (
    <section className="py-20 bg-destructive-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-destructive mb-4">
            Você enfrenta esses problemas na sua rotina?
          </h2>
          <p className="text-lg text-destructive/80 max-w-2xl mx-auto">
            Sabemos o quanto é frustrante lidar com esses desafios diariamente
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <Card 
              key={index} 
              className="p-6 bg-white border-destructive/20 hover:shadow-card transition-all duration-200 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-destructive-light rounded-lg">
                  <point.icon className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-destructive mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};