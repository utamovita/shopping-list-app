import { z } from "zod";

export const authResponseSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

export type AuthResponseType = z.infer<typeof authResponseSchema>;

export const loginSchema = z.object({
  email: z.string().email({ message: "validation:email.invalid" }),
  password: z.string().min(1, { message: "validation:password.required" }),
});

export const registerSchema = loginSchema.extend({
  email: z.string().email({ message: "validation:email.invalid" }),
  username: z.string().min(3, {
    message: JSON.stringify({
      key: "validation:name.minLength",
      values: { count: 3 },
    }),
  }),
  password: z.string().min(8, {
    message: JSON.stringify({
      key: "validation:password.minLength",
      values: { count: 8 },
    }),
  }),
});

export type LoginDto = z.infer<typeof loginSchema>;
export type RegisterDto = z.infer<typeof registerSchema>;
