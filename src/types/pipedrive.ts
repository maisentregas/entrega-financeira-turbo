export interface PipedriveConfig {
  apiToken: string;
  companyDomain: string;
}

export interface PipedrivePersonData {
  name: string;
  org_name?: string;
  phone?: string[];
  email?: string[];
}

export interface PipedriveDealData {
  title: string;
  person_id: number;
  org_id?: number;
  value?: number;
  currency?: string;
  stage_id?: number;
  pipeline_id?: number;
  custom_fields?: Record<string, any>;
}

export interface PipedriveResponse<T> {
  success: boolean;
  data: T;
  additional_data?: any;
}

export interface PipedrivePerson {
  id: number;
  name: string;
  org_id?: number;
  phone?: Array<{ value: string; primary: boolean }>;
  email?: Array<{ value: string; primary: boolean }>;
}

export interface PipedriveDeal {
  id: number;
  title: string;
  person_id: number;
  org_id?: number;
  value: number;
  currency: string;
  stage_id: number;
  pipeline_id: number;
}

export interface PipedriveError {
  success: false;
  error: string;
  error_code?: number;
  error_detail?: string;
}

export interface LeadFormData {
  name: string;
  company: string;
  whatsapp: string;
}