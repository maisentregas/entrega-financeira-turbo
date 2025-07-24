import { 
  RDStationConfig, 
  RDStationConversionData, 
  RDStationResponse,
  LeadFormData 
} from '@/types/rdstation';

class RDStationService {
  private config: RDStationConfig = {
    apiKey: '37a351a3ab81bd4b6f4254cb82b7c832',
    identifier: 'LP financeiro automatizado'
  };

  private readonly baseUrl = 'https://www.rdstation.com.br/api/1.3/conversions';

  async submitLead(formData: LeadFormData): Promise<{ success: boolean; error?: string }> {
    try {
      const conversionData: RDStationConversionData = {
        token_rdstation: this.config.apiKey,
        identificador: this.config.identifier,
        email: formData.email,
        nome: formData.name,
        empresa: formData.company,
        telefone: formData.whatsapp
      };

      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(conversionData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Erro na resposta do RD Station:', response.status, errorText);
        return { 
          success: false, 
          error: 'Erro ao enviar dados para RD Station. Tente novamente.' 
        };
      }

      const data = await response.json();
      
      return { success: true };
    } catch (error) {
      console.error('Erro ao enviar lead para RD Station:', error);
      return { 
        success: false, 
        error: 'Erro de conexão. Verifique sua internet e tente novamente.' 
      };
    }
  }
}

export const rdstationService = new RDStationService();