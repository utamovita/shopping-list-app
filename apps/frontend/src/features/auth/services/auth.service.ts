import { authApi } from "../api/auth.api";
import { loginSchema, registerSchema } from "../schemas/auth.schema";
import { authResponseSchema } from "@repo/validation-schemas/auth.schema";
import { z } from "zod";

export const authService = {
  login: async (values: z.infer<typeof loginSchema>) => {
    const response = await authApi.login(values);
    const serverResponse = response.data;

    const validatedData = authResponseSchema.parse(serverResponse.data);

    return {
      ...serverResponse,
      data: validatedData,
    };
  },

  register: async (values: z.infer<typeof registerSchema>) => {
    const response = await authApi.register(values);
    const serverResponse = response.data;

    const validatedData = authResponseSchema.parse(serverResponse.data);

    return {
      ...serverResponse,
      data: validatedData,
    };
  },
};
