import joi from "joi";

export const registrationSchema = joi.object({
  name: joi
    .string()
    .min(1)
    .required()
    .regex(/^[a-záéíóúâêîôûã][a-záéíóúâêîôûã]*(?: [a-záéíóúâêîôûã]+)*$/i)
    .messages({
      "string.pattern.base":
        "O campo nome precisa ser válido, verifique espaços em branco ou caracteres especiais.",
      "any.required": "O campo nome é obrigatório.",
      "string.empty": "O campo nome não pode ser vazio.",
      "string.min": "O campo nome precisa ter ao menos 1 caractere.",
    }),
  email: joi.string().email().required().messages({
    "string.email": "O campo email precisar ser válido.",
    "any.required": "O campo email é obrigatório.",
    "string.empty": "O campo email não pode ser vazio.",
  }),
  cpf: joi.string().min(11).messages({
    "string.empty": "O campo cpf não pode ser vazio.",
    "string.min": "O campo cpf precisar ter no mínimo 11 caracteres.",
  }),
  senha: joi.string().min(1).required().messages({
    "any.required": "O campo senha é obrigatório.",
    "string.empty": "O campo senha não pode ser vazio.",
    "string.min": "O campo senha precisar ter no mínimo 1 caractere.",
  }),
});
