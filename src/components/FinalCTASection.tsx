import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowRight, Building2, Phone, User, Settings, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { usePipedrive } from "@/hooks/usePipedrive";
import { PipedriveConfig } from "@/components/PipedriveConfig";
import { pipedriveService } from "@/services/pipedrive";

export const FinalCTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    whatsapp: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPipedriveConfig, setShowPipedriveConfig] = useState(false);
  
  const { toast } = useToast();
  const { isConfigured } = usePipedrive();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verificar se Pipedrive está configurado
    if (!isConfigured) {
      setShowPipedriveConfig(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await pipedriveService.submitLead(formData);
      
      if (result.success) {
        toast({
          title: "Lead enviado com sucesso!",
          description: "Seu interesse foi registrado no Pipedrive. Entraremos em contato em breve."
        });

        // Resetar formulário
        setFormData({
          name: "",
          company: "",
          whatsapp: ""
        });
      } else {
        throw new Error(result.error || 'Erro desconhecido');
      }
    } catch (error) {
      console.error('Erro ao enviar lead:', error);
      toast({
        title: "Erro ao enviar dados",
        description: "Não foi possível enviar para o Pipedrive. Tente novamente ou entre em contato conosco.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="final-cta" className="py-20 bg-gradient-hero">
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
                  <Input 
                    type="text" 
                    name="name" 
                    placeholder="Seu nome completo" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    required 
                    className="pl-10 h-12" 
                  />
                </div>
                
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    type="text" 
                    name="company" 
                    placeholder="Nome da sua empresa" 
                    value={formData.company} 
                    onChange={handleInputChange} 
                    required 
                    className="pl-10 h-12" 
                  />
                </div>
                
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    type="tel" 
                    name="whatsapp" 
                    placeholder="WhatsApp (11) 99999-9999" 
                    value={formData.whatsapp} 
                    onChange={handleInputChange} 
                    required 
                    className="pl-10 h-12" 
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                variant="cta" 
                size="xl" 
                className="w-full group" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Quero automatizar o financeiro das minhas entregas agora
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
              
              {!isConfigured && (
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-2" 
                  onClick={() => setShowPipedriveConfig(true)}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Configurar Pipedrive
                </Button>
              )}
              
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
      
      <PipedriveConfig 
        open={showPipedriveConfig} 
        onOpenChange={setShowPipedriveConfig} 
      />
    </section>
  );
};
