import { Card } from "@/components/ui/card";
import { CheckCircle, Smartphone } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";

export const ProofSection = () => {
  return (
    <section className="py-20 bg-primary-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Transparência para todos
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Veja como o entregador enxerga os valores no app — sem ruídos, sem erro
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* App Mockup */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl"></div>
            <div className="relative">
              <img 
                src={appMockup} 
                alt="App MaisEntregas - Extrato do entregador" 
                className="relative rounded-3xl shadow-hero w-full max-w-md mx-auto h-auto"
              />
            </div>
          </div>
          
          {/* Features */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <Smartphone className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-primary">
                Entregador acompanha tudo em tempo real
              </h3>
            </div>
            
            <div className="space-y-4">
              {[
                "Extrato detalhado com todas as corridas",
                "Valores claros e transparentes",
                "Histórico completo de pagamentos",
                "Notificações em tempo real",
                "Possibilidade de antecipação",
                "Interface intuitiva e fácil de usar"
              ].map((feature, index) => (
                <Card 
                  key={index} 
                  className="p-4 bg-white border-primary/20 hover:shadow-card transition-all duration-200 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <p className="text-foreground font-medium">{feature}</p>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-primary/10 rounded-lg border-l-4 border-primary">
              <p className="text-primary font-semibold italic">
                "Sem dúvidas, sem ruído. Tudo transparente e visível para todos os envolvidos."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};