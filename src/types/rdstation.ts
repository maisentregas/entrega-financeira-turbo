export interface RDStationConfig {
  apiKey: string;
  identifier: string;
}

export interface RDStationConversionData {
  token_rdstation: string;
  identificador: string;
  email: string;
  nome: string;
  empresa: string;
  telefone: string;
}

export interface RDStationResponse {
  success: boolean;
  message?: string;
}

export interface LeadFormData {
  name: string;
  email: string;
  company: string;
  whatsapp: string;
}