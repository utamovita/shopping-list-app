import { apiClient } from "@/shared/lib/api/api-client";
import { API_PATHS } from "@repo/config/paths";
import type { Group } from "@repo/types/api";

export const groupsApi = {
  getAll: async () => {
    const response = await apiClient.get<Group[]>(API_PATHS.groups);
    return response.data;
  },
};
