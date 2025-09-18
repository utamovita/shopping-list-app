import { apiClient } from "@/shared/lib/api/api-client";
import { API_PATHS } from "@repo/config";
import { UserProfile } from "@repo/types";

export const userApi = {
  getProfile: async () => {
    const response = await apiClient.get<UserProfile>(API_PATHS.auth.profile);
    return response.data;
  },
};
