import { apiClient } from "@/shared/lib/api/api-client";
import { API_PATHS } from "@repo/config";
import type { GroupWithDetails } from "@repo/types";

type CreateGroupDto = {
  name: string;
};

export const groupsApi = {
  getAll: async () => {
    const response = await apiClient.get<GroupWithDetails[]>(API_PATHS.groups);
    return response.data;
  },
  create: async (data: CreateGroupDto) => {
    const response = await apiClient.post<GroupWithDetails>(
      API_PATHS.groups,
      data,
    );
    return response.data;
  },
  remove: async (groupId: string) => {
    const response = await apiClient.delete<void>(
      `${API_PATHS.groups}/${groupId}`,
    );
    return response.data;
  },
};
