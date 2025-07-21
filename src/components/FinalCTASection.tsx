import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowRight, Building2, Phone, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
export const FinalCTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    whatsapp: ""
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulação de envio do formulário
    toast({
      title: "Interesse registrado!",
      description: "Entraremos em contato em breve para mostrar como automatizar seu financeiro."
    });

    // Resetar formulário
    setFormData({
      name: "",
      company: "",
      whatsapp: ""
    });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="final-cta" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Se você tem uma empresa que faz entregas com frota própria — seja farmácia, restaurante, autopeças, distribuidora, varejista, transportadora, ou qualquer empresa que faz as suas próprias entregas — essa automação é pra você.
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Não perca mais tempo com planilhas e controles manuais. Automatize agora!
            </p>
          </div>
          
          <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-hero max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Quero automatizar o financeiro das minhas entregas agora
                </h3>
                <p className="text-muted-foreground">
                  Preencha os dados abaixo e descubra como transformar sua gestão
                </p>
              </div>
              
              <div className="grid gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input type="text" name="name" placeholder="Seu nome completo" value={formData.name} onChange={handleInputChange} required className="pl-10 h-12" />
                </div>
                
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input type="text" name="company" placeholder="Nome da sua empresa" value={formData.company} onChange={handleInputChange} required className="pl-10 h-12" />
                </div>
                
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input type="tel" name="whatsapp" placeholder="WhatsApp (11) 99999-9999" value={formData.whatsapp} onChange={handleInputChange} required className="pl-10 h-12" />
                </div>
              </div>
              
              <Button type="submit" variant="cta" size="xl" className="w-full group">
                Quero automatizar o financeiro das minhas entregas agora
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Ao enviar, você concorda em receber contato da nossa equipe para apresentar a solução.
              </p>
            </form>
          </Card>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="text-primary-foreground">
              <div className="text-3xl font-bold mb-2">+300</div>
              <div className="text-sm opacity-90">Empresas atendidas</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-3xl font-bold mb-2">90%</div>
              <div className="text-sm opacity-90">Redução de tempo</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-3xl font-bold mb-2">99%</div>
              <div className="text-sm opacity-90">Redução de erros e fraudes</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};