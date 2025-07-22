import { useState, useEffect } from 'react';
import { pipedriveService } from '@/services/pipedrive';
import { PipedriveConfig } from '@/types/pipedrive';

export const usePipedrive = () => {
  const [isConfigured, setIsConfigured] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [config, setConfig] = useState<PipedriveConfig | null>(null);

  useEffect(() => {
    const savedConfig = pipedriveService.getConfig();
    if (savedConfig) {
      setConfig(savedConfig);
      setIsConfigured(true);
    }
  }, []);

  const validateAndSaveConfig = async (newConfig: PipedriveConfig): Promise<{ success: boolean; error?: string }> => {
    setIsValidating(true);
    
    try {
      // Temporariamente definir configuração para teste
      pipedriveService.setConfig(newConfig);
      
      const validation = await pipedriveService.validateConnection();
      
      if (validation.success) {
        setConfig(newConfig);
        setIsConfigured(true);
        return { success: true };
      } else {
        // Limpar configuração inválida
        pipedriveService.clearConfig();
        return { success: false, error: validation.error };
      }
    } catch (error) {
      // Limpar configuração em caso de erro
      pipedriveService.clearConfig();
      return { 
        success: false, 
        error: 'Erro ao validar configuração' 
      };
    } finally {
      setIsValidating(false);
    }
  };

  const clearConfig = () => {
    pipedriveService.clearConfig();
    setConfig(null);
    setIsConfigured(false);
  };

  return {
    isConfigured,
    isValidating,
    config,
    validateAndSaveConfig,
    clearConfig,
  };
};