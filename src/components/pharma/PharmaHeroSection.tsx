import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, TrendingUp, MapPin } from "lucide-react";
import pharmaAppMockup from "@/assets/pharma-app-mockup.jpg";
import maisentregasLogo from "@/assets/maisentregas-gradient-logo.png";

export const PharmaHeroSection = () => {
  const handleCTAClick = () => {
    document.getElementById("pharma-final-cta")?.scrollIntoView({ 
      behavior: "smooth" 
    });
  };

  return (
    <section className="relative bg-gradient-to-br from-pharma-green to-pharma-green-dark text-white py-20 md:py-32 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-pharma-black opacity-10"></div>
      
      {/* Logo positioned in top-right */}
      <div className="absolute top-6 right-6 z-20">
        <img 
          src={maisentregasLogo} 
          alt="MaisEntregas" 
          className="h-12 md:h-16"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Seu delivery está crescendo - e pode crescer 
                <span className="text-pharma-white"> muito mais!</span>
              </h1>
              <p className="text-xl md:text-2xl text-pharma-white/90 leading-relaxed">
                Mas gerenciar as entregas e entregadores ainda é uma dor de cabeça?
              </p>
              <div className="space-y-4 text-lg md:text-xl">
                <p className="text-pharma-white/95">
                  Com a <strong>Mais Entregas</strong>, sua farmácia automatiza todo o processo de entrega:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-pharma-white" />
                    <span>Rotas otimizadas (menos tempo, menos distâncias)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-pharma-white" />
                    <span>Rastreamento em tempo real + previsões de chegada</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-5 w-5 text-pharma-white" />
                    <span>Controle financeiro dos entregadores</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="h-5 w-5 text-pharma-white" />
                    <span>Experiência impecável para o cliente, com status automáticos pelo WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleCTAClick}
                size="lg" 
                className="bg-pharma-white text-pharma-green hover:bg-pharma-white/90 font-semibold text-lg px-8 py-6 h-auto shadow-hero"
              >
                Quero modernizar meu delivery agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <Card className="bg-pharma-white/10 border-pharma-white/20 p-6 backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <Clock className="h-8 w-8 text-pharma-white" />
                  <div>
                    <div className="text-2xl font-bold text-pharma-white">60%</div>
                    <div className="text-sm text-pharma-white/80">Redução no tempo de entrega</div>
                  </div>
                </div>
              </Card>
              <Card className="bg-pharma-white/10 border-pharma-white/20 p-6 backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-8 w-8 text-pharma-white" />
                  <div>
                    <div className="text-2xl font-bold text-pharma-white">85%</div>
                    <div className="text-sm text-pharma-white/80">Redução de erros operacionais</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src={pharmaAppMockup} 
                alt="App de gestão de entregas farmacêuticas" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-hero"
              />
            </div>
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-pharma-green-dark/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};