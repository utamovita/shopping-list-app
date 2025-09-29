import { apiClient } from "@/shared/lib/api/api-client";
import { API_PATHS } from "@repo/config";
import type { GroupWithDetails } from "@repo/types";
import { UpdateGroupDto } from "@repo/schemas";
import { Group } from "@repo/database";

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
  update: async ({
    groupId,
    data,
  }: {
    groupId: string;
    data: UpdateGroupDto;
  }) => {
    const response = await apiClient.patch<Group>(
      `${API_PATHS.groups}/${groupId}`,
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
