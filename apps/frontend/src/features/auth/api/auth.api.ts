import { apiClient } from "@/shared/lib/api/api-client";
import {
  type LoginDto,
  type RegisterDto,
  AuthResponseType,
} from "@repo/schemas";
import { API_PATHS } from "@repo/config";

export const authApi = {
  login: async (values: LoginDto) => {
    return apiClient.post<AuthResponseType>(API_PATHS.auth.login, values);
  },
  register: async (values: RegisterDto) => {
    return apiClient.post<AuthResponseType>(API_PATHS.auth.register, values);
  },
  logout: async () => {
    return apiClient.post<null>(API_PATHS.auth.logout, {});
  },
  refresh: async (refreshToken: string) => {
    return apiClient.post<AuthResponseType>(
      API_PATHS.auth.refresh,
      {},
      {
        headers: { Authorization: `Bearer ${refreshToken}` },
      },
    );
  },
};
