import { apiClient } from "@/lib/api/api-client";
import { loginSchema, registerSchema } from "../schemas/auth.schema";
import { AuthResponseType } from "@repo/validation-schemas/auth.schema";
import { API_PATHS } from "@repo/config/paths";

import { z } from "zod";

export const authApi = {
  login: async (values: z.infer<typeof loginSchema>) => {
    return apiClient.post<AuthResponseType>(API_PATHS.auth.login, values);
  },
  register: async (values: z.infer<typeof registerSchema>) => {
    return apiClient.post<AuthResponseType>(API_PATHS.auth.register, values);
  },
};
