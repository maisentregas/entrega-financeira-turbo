import { 
  PipedriveConfig, 
  PipedrivePersonData, 
  PipedriveDealData, 
  PipedriveResponse, 
  PipedrivePerson, 
  PipedriveDeal,
  PipedriveError,
  LeadFormData 
} from '@/types/pipedrive';

class PipedriveService {
  private config: PipedriveConfig | null = null;

  setConfig(config: PipedriveConfig) {
    this.config = config;
    localStorage.setItem('pipedrive_config', JSON.stringify(config));
  }

  getConfig(): PipedriveConfig | null {
    if (this.config) return this.config;
    
    const saved = localStorage.getItem('pipedrive_config');
    if (saved) {
      this.config = JSON.parse(saved);
      return this.config;
    }
    
    return null;
  }

  clearConfig() {
    this.config = null;
    localStorage.removeItem('pipedrive_config');
  }

  isConfigured(): boolean {
    return !!this.getConfig();
  }

  private getApiUrl(endpoint: string): string {
    const config = this.getConfig();
    if (!config) throw new Error('Pipedrive não configurado');
    
    return `https://${config.companyDomain}.pipedrive.com/api/v1/${endpoint}?api_token=${config.apiToken}`;
  }

  async validateConnection(): Promise<{ success: boolean; error?: string }> {
    try {
      const config = this.getConfig();
      if (!config) {
        return { success: false, error: 'Configuração não encontrada' };
      }

      const response = await fetch(this.getApiUrl('users/me'));
      const data = await response.json();

      if (!response.ok) {
        return { 
          success: false, 
          error: data.error || 'Token inválido ou domínio incorreto' 
        };
      }

      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: 'Erro de conexão. Verifique sua internet e tente novamente.' 
      };
    }
  }

  async createPerson(personData: PipedrivePersonData): Promise<PipedrivePerson> {
    try {
      const response = await fetch(this.getApiUrl('persons'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(personData),
      });

      const data: PipedriveResponse<PipedrivePerson> | PipedriveError = await response.json();

      if (!response.ok || !data.success) {
        const error = data as PipedriveError;
        throw new Error(error.error || 'Erro ao criar pessoa no Pipedrive');
      }

      const successData = data as PipedriveResponse<PipedrivePerson>;
      return successData.data;
    } catch (error) {
      console.error('Erro ao criar pessoa:', error);
      throw error;
    }
  }

  async createDeal(dealData: PipedriveDealData): Promise<PipedriveDeal> {
    try {
      const response = await fetch(this.getApiUrl('deals'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dealData),
      });

      const data: PipedriveResponse<PipedriveDeal> | PipedriveError = await response.json();

      if (!response.ok || !data.success) {
        const error = data as PipedriveError;
        throw new Error(error.error || 'Erro ao criar negócio no Pipedrive');
      }

      const successData = data as PipedriveResponse<PipedriveDeal>;
      return successData.data;
    } catch (error) {
      console.error('Erro ao criar negócio:', error);
      throw error;
    }
  }

  async submitLead(formData: LeadFormData): Promise<{ success: boolean; error?: string }> {
    try {
      // 1. Criar pessoa
      const personData: PipedrivePersonData = {
        name: formData.name,
        org_name: formData.company,
        phone: formData.whatsapp ? [formData.whatsapp] : undefined,
      };

      const person = await this.createPerson(personData);

      // 2. Criar negócio/lead
      const dealData: PipedriveDealData = {
        title: `Lead: ${formData.name} - ${formData.company}`,
        person_id: person.id,
        org_id: person.org_id,
        custom_fields: {
          source: 'LP ME - Financeiro automatizado'
        }
      };

      await this.createDeal(dealData);

      return { success: true };
    } catch (error) {
      console.error('Erro ao enviar lead:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Erro desconhecido' 
      };
    }
  }
}

export const pipedriveService = new PipedriveService();