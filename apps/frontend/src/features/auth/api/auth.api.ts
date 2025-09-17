import { apiClient } from "@/shared/lib/api/api-client";
import {
  type LoginDto,
  type RegisterDto,
} from "../../../../../../packages/validation-schemas/src/auth.schema";
import { AuthResponseType } from "../../../../../../packages/validation-schemas/src/auth.schema";
import { API_PATHS } from "@repo/config/paths";

import { z } from "zod";

export const authApi = {
  login: async (values: LoginDto) => {
    return apiClient.post<AuthResponseType>(API_PATHS.auth.login, values);
  },
  register: async (values: RegisterDto) => {
    return apiClient.post<AuthResponseType>(API_PATHS.auth.register, values);
  },
};
