import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, TrendingUp } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
export const HeroSection = () => {
  const handleCTAClick = () => {
    const ctaSection = document.getElementById("final-cta");
    ctaSection?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative overflow-hidden bg-gradient-hero pt-20 pb-32">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">O Financeiro das suas entregas ainda está sendo feito de forma manual através de planilhas?</h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                Chega de erros, estresse e descontrole.<br />
                Com a MaisEntregas, você automatiza os pagamentos dos seus entregadores e as cobranças dos seus clientes — com tecnologia em tempo real.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" onClick={handleCTAClick} className="group">
                Quero automatizar agora
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <Card className="p-4 bg-white/10 border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-9">
                  <Clock className="h-8 w-8 text-warning" />
                  <div>
                    <p className="text-2xl font-bold text-primary-foreground">90%</p>
                    <p className="text-sm text-primary-foreground/80">Redução de tempo</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 bg-white/10 border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-success" />
                  <div>
                    <p className="text-2xl font-bold text-primary-foreground">99%</p>
                    <p className="text-sm text-primary-foreground/80">Menos erros</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-primary-light/20 rounded-2xl blur-3xl"></div>
            <img src={heroDashboard} alt="Dashboard MaisEntregas" className="relative rounded-2xl shadow-hero w-full h-auto" />
          </div>
        </div>
      </div>
    </section>;
};