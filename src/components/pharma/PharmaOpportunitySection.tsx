import React from "react";
import { TrendingUp, Target, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export const PharmaOpportunitySection = () => {
  return (
    <section className="py-20 bg-pharma-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-pharma-green-light px-4 py-2 rounded-full">
              <TrendingUp className="h-5 w-5 text-pharma-green" />
              <span className="text-pharma-green font-semibold">Oportunidade de mercado</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-pharma-black">
              Delivery farmacêutico: de tendência a 
              <span className="text-pharma-green"> necessidade</span>
            </h2>
            
            <div className="text-lg text-pharma-black/80 leading-relaxed space-y-4">
              <p>
                O delivery de medicamentos já representa um dos canais que mais crescem no setor farmacêutico. 
                Mas fazer isso de forma improvisada pode gerar mais prejuízos que resultados ou uma grande perda de oportunidades.
              </p>
              <p className="text-xl font-semibold text-pharma-green">
                Com a tecnologia certa, sua farmácia se destaca pelo serviço, reduz custos e fideliza clientes.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 border-pharma-green/20 hover:shadow-card transition-all duration-300">
              <div className="space-y-4">
                <div className="h-12 w-12 bg-pharma-green-light rounded-lg flex items-center justify-center mx-auto">
                  <TrendingUp className="h-6 w-6 text-pharma-green" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-pharma-black mb-2">Crescimento Acelerado</h3>
                  <p className="text-pharma-black/70 text-sm">
                    Delivery farmacêutico cresce 40% ao ano no Brasil
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-pharma-green/20 hover:shadow-card transition-all duration-300">
              <div className="space-y-4">
                <div className="h-12 w-12 bg-pharma-green-light rounded-lg flex items-center justify-center mx-auto">
                  <Target className="h-6 w-6 text-pharma-green" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-pharma-black mb-2">Diferenciação Competitiva</h3>
                  <p className="text-pharma-black/70 text-sm">
                    Serviço rápido e confiável fideliza clientes
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-pharma-green/20 hover:shadow-card transition-all duration-300">
              <div className="space-y-4">
                <div className="h-12 w-12 bg-pharma-green-light rounded-lg flex items-center justify-center mx-auto">
                  <CheckCircle className="h-6 w-6 text-pharma-green" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-pharma-black mb-2">Margem de Lucro</h3>
                  <p className="text-pharma-black/70 text-sm">
                    Otimização de rotas reduz custos operacionais
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};