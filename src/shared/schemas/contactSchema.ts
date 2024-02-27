import { string } from "yup";
import * as yup from "yup";

const phoneRegExp =
  /^(\+[1-9]{1,4}[ \\-]*|\([0-9]{2,3}\)[ \\-]*|[0-9]{2,4}[ \\-]*)?[0-9]{11}$/;

export const contactFormSchema = yup.object({
  name: string().required("Nome é obrigatório"),
  whatsapp: string()
    .matches(phoneRegExp, "Número de telefone inválido")
    .required("Whatsapp é obrigatório"),
  email: string().notRequired().email("Email inválido"),
  cnpj: string()
    .notRequired()
    .test("len", "CNPJ deve ter 14 caracteres", function (val) {
      if (val === undefined) return true;
      return val?.length === 14;
    }),
});
