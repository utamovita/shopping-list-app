import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "validation:email.invalid" }),
  password: z.string().min(1, { message: "validation:password.required" }),
});

export const registerSchema = loginSchema.extend({
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
