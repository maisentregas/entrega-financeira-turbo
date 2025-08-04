import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowRight, Building2, Phone, User, Loader2, CheckCircle, Clock, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { rdstationService } from "@/services/rdstation";
export const PharmaFinalCTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    whatsapp: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company || !formData.whatsapp) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await rdstationService.submitLead(formData);
      if (result.success) {
        toast({
          title: "Solicitação enviada com sucesso!",
          description: "Nossa equipe entrará em contato em breve para apresentar a solução."
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          whatsapp: ""
        });
      } else {
        toast({
          title: "Erro ao enviar solicitação",
          description: result.error || "Tente novamente em alguns instantes.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar solicitação",
        description: "Verifique sua conexão e tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return <section id="pharma-final-cta" className="py-20 bg-gradient-to-br from-pharma-green to-pharma-green-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Sua farmácia merece uma operação logística 
              <span className="text-pharma-white"> moderna</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Dê o próximo passo para um delivery mais rápido, confiável e fácil de gerenciar.
              Automatize agora e veja a diferença.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <Card className="p-8 bg-white">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-pharma-black mb-2">
                    Quero automatizar agora
                  </h3>
                  <p className="text-pharma-black/70">
                    Receba uma demonstração personalizada da nossa plataforma
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input type="text" name="name" placeholder="Seu nome completo" value={formData.name} onChange={handleInputChange} required className="pl-10 h-12" />
                  </div>
                  
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input type="email" name="email" placeholder="Seu melhor e-mail" value={formData.email} onChange={handleInputChange} required className="pl-10 h-12" />
                  </div>
                  
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input type="text" name="company" placeholder="Nome da sua farmácia" value={formData.company} onChange={handleInputChange} required className="pl-10 h-12" />
                  </div>
                  
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input type="tel" name="whatsapp" placeholder="WhatsApp para contato" value={formData.whatsapp} onChange={handleInputChange} required className="pl-10 h-12" />
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-pharma-green hover:bg-pharma-green-dark text-white font-semibold h-12">
                    {isSubmitting ? <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </> : <>
                        Quero automatizar meu delivery
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>}
                  </Button>
                </form>
              </div>
            </Card>

            {/* Stats and benefits */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Por que escolher a Mais Entregas?
                </h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <Card className="p-6 bg-white/10 border-white/20 backdrop-blur-sm">
                    <div className="flex items-center space-x-3">
                      <Building2 className="h-8 w-8 text-white" />
                      <div>
                        <div className="text-2xl font-bold text-white">100+</div>
                        <div className="text-sm text-white/80">Farmácias servidas</div>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 bg-white/10 border-white/20 backdrop-blur-sm">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-8 w-8 text-white" />
                      <div>
                        <div className="text-2xl font-bold text-white">50%</div>
                        <div className="text-sm text-white/80">Redução no tempo de entrega</div>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 bg-white/10 border-white/20 backdrop-blur-sm">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-8 w-8 text-white" />
                      <div>
                        <div className="text-2xl font-bold text-white">95%</div>
                        <div className="text-sm text-white/80">Menos erros</div>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 bg-white/10 border-white/20 backdrop-blur-sm">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-8 w-8 text-white" />
                      <div>
                        <div className="text-2xl font-bold text-white">98%</div>
                        <div className="text-sm text-white/80">Satisfação</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <Card className="p-6 bg-white/10 border-white/20 backdrop-blur-sm">
                <h4 className="font-bold text-white mb-3">O que você recebe:</h4>
                <div className="space-y-2 text-white/90">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-white" />
                    <span className="text-sm">Demonstração personalizada</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-white" />
                    <span className="text-sm">Análise da sua operação atual</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-white" />
                    <span className="text-sm">Proposta de implementação</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-white" />
                    <span className="text-sm">Suporte especializado</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};