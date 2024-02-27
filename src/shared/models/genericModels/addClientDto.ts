export interface AddClientDto {
  name: string;
  email: string | null;
  whatsapp: string;
  cnpj: number | null;
  updatedAt: Date;
}
