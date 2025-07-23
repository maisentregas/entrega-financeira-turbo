import { useState } from 'react';
import { pipedriveService } from '@/services/pipedrive';
import { PipedriveConfig } from '@/types/pipedrive';

export const usePipedrive = () => {
  const [isConfigured] = useState(true);
  const [isValidating] = useState(false);
  const [config] = useState<PipedriveConfig | null>(pipedriveService.getConfig());

  return {
    isConfigured,
    isValidating,
    config,
  };
};