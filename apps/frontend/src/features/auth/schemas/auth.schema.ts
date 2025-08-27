import * as z from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: 'Niepoprawny adres email.' }),
  password: z.string().min(1, { message: 'Hasło jest wymagane.' }),
});

export const registerSchema = loginSchema.extend({
  username: z.string().min(3, { message: 'Nazwa musi mieć co najmniej 3 znaki.' }),
  password: z
    .string()
    .min(8, { message: 'Hasło musi mieć co najmniej 8 znaków.' }),
});