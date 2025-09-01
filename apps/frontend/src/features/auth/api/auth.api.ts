import { apiClient } from "@/lib/api/api-client";
import { loginSchema, registerSchema } from "../schemas/auth.schema";
import { AuthResponseType } from "@repo/validation-schemas/auth.schema";

import { z } from "zod";

export const authApi = {
  login: async (values: z.infer<typeof loginSchema>) => {
    return apiClient.post<AuthResponseType>("/auth/login", values);
  },
  register: async (values: z.infer<typeof registerSchema>) => {
    return apiClient.post<AuthResponseType>("/auth/register", values);
  },
};
