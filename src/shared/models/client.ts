export interface Client {
  id: string;
  name: string;
  email: string | null;
  whatsapp: string;
  cnpj: number | null;
  updatedAt: Date;
}
