import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Settings, CheckCircle2, XCircle, ExternalLink } from "lucide-react";
import { usePipedrive } from "@/hooks/usePipedrive";
import { PipedriveConfig as PipedriveConfigType } from "@/types/pipedrive";

interface PipedriveConfigProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PipedriveConfig = ({ open, onOpenChange }: PipedriveConfigProps) => {
  const { isValidating, validateAndSaveConfig } = usePipedrive();
  const [formData, setFormData] = useState<PipedriveConfigType>({
    apiToken: '',
    companyDomain: ''
  });
  const [validationResult, setValidationResult] = useState<{ success?: boolean; error?: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Limpar resultado de validação anterior
    setValidationResult(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.apiToken.trim() || !formData.companyDomain.trim()) {
      setValidationResult({ 
        success: false, 
        error: 'Por favor, preencha todos os campos' 
      });
      return;
    }

    const result = await validateAndSaveConfig(formData);
    setValidationResult(result);
    
    if (result.success) {
      setTimeout(() => {
        onOpenChange(false);
        setValidationResult(null);
        setFormData({ apiToken: '', companyDomain: '' });
      }, 1500);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Configurar Pipedrive
          </DialogTitle>
          <DialogDescription>
            Configure sua integração com o Pipedrive para receber leads automaticamente.
          </DialogDescription>
        </DialogHeader>

        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Dados de Conexão</CardTitle>
              <CardDescription>
                Você pode encontrar essas informações nas configurações da sua conta Pipedrive.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="companyDomain">Domínio da Empresa</Label>
                <Input
                  id="companyDomain"
                  name="companyDomain"
                  placeholder="exemplo: minhaempresa"
                  value={formData.companyDomain}
                  onChange={handleInputChange}
                  disabled={isValidating}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Apenas o nome, sem ".pipedrive.com"
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="apiToken">Token da API</Label>
                <Input
                  id="apiToken"
                  name="apiToken"
                  type="password"
                  placeholder="Seu token da API do Pipedrive"
                  value={formData.apiToken}
                  onChange={handleInputChange}
                  disabled={isValidating}
                  required
                />
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <span>Encontre em: Configurações → API → Token</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </div>

              {validationResult && (
                <Alert variant={validationResult.success ? "default" : "destructive"}>
                  <div className="flex items-center gap-2">
                    {validationResult.success ? (
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                    ) : (
                      <XCircle className="h-4 w-4" />
                    )}
                    <AlertDescription>
                      {validationResult.success 
                        ? "Conexão validada com sucesso! Configuração salva."
                        : validationResult.error
                      }
                    </AlertDescription>
                  </div>
                </Alert>
              )}
            </CardContent>
            
            <CardFooter className="gap-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => onOpenChange(false)}
                disabled={isValidating}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button 
                type="submit" 
                disabled={isValidating || !formData.apiToken.trim() || !formData.companyDomain.trim()}
                className="flex-1"
              >
                {isValidating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Validando...
                  </>
                ) : (
                  'Salvar e Testar'
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </DialogContent>
    </Dialog>
  );
};