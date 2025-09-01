import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "validation:email.invalid" }),
  password: z.string().min(1, { message: "validation:password.required" }),
});

export const registerSchema = loginSchema.extend({
  username: z.string().min(3, { message: "validation:name.minLength" }),
  password: z.string().min(8, { message: "validation:password.minLength" }),
});
