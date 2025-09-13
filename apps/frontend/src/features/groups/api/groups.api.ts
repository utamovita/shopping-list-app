import { apiClient } from "@/shared/lib/api/api-client";
import { API_PATHS } from "@repo/config/paths";
import type { Group } from "@repo/types/api";

type CreateGroupDto = {
  name: string;
};

export const groupsApi = {
  getAll: async () => {
    const response = await apiClient.get<Group[]>(API_PATHS.groups);
    return response.data;
  },
  create: async (data: CreateGroupDto) => {
    const response = await apiClient.post<Group>(API_PATHS.groups, data);
    return response.data;
  },
  remove: async (groupId: string) => {
    const response = await apiClient.delete<void>(
      `${API_PATHS.groups}/${groupId}`,
    );
    return response.data;
  },
};
