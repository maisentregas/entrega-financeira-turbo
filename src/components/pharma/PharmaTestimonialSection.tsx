import React from "react";
import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
export const PharmaTestimonialSection = () => {
  return <section className="py-20 bg-pharma-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 bg-pharma-green-light border-pharma-green/30 relative overflow-hidden">
            {/* Decorative quote icon */}
            <div className="absolute top-6 left-6">
              <Quote className="h-12 w-12 text-pharma-green/30" />
            </div>
            
            <div className="relative z-10 text-center space-y-8">
              {/* Star rating */}
              <div className="flex items-center justify-center space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />)}
              </div>
              
              {/* Testimonial text */}
              <blockquote className="text-2xl md:text-3xl font-medium text-pharma-black leading-relaxed">
                "Depois que automatizamos com a Mais Entregas, o cliente parou de ligar cobrando entrega. 
                O entregador sabe o que fazer, a farmácia foca em vender, e a gestão roda no automático."
              </blockquote>
              
              {/* Author */}
              <div className="space-y-2">
                <div className="font-bold text-pharma-green text-xl">
                  Juliana S.
                </div>
                <div className="text-pharma-black/70">
                  Gerente da FarmaVida Salvador
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-pharma-green/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-pharma-green/10 rounded-full translate-x-10 -translate-y-10"></div>
          </Card>

          {/* Additional social proof */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-pharma-green mb-2">100+</div>
              <div className="text-pharma-black/70">Farmácias atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pharma-green mb-2">900k+</div>
              <div className="text-pharma-black/70">Entregas realizadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pharma-green mb-2">98%</div>
              <div className="text-pharma-black/70">Satisfação dos clientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};