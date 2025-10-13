import { apiClient } from "@/shared/lib/api/api-client";
import { API_PATHS } from "@repo/config";
import type { GroupWithDetails } from "@repo/types";
import { UpdateGroupDto } from "@repo/schemas";
import type { Group, Role } from "@repo/database";

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
  removeMember: async ({
    groupId,
    memberId,
  }: {
    groupId: string;
    memberId: string;
  }) => {
    return apiClient.delete<void>(
      `${API_PATHS.groups}/${groupId}/members/${memberId}`,
    );
  },
  updateMemberRole: async ({
    groupId,
    memberId,
    role,
  }: {
    groupId: string;
    memberId: string;
    role: Role;
  }) => {
    return apiClient.patch<Group>(
      `${API_PATHS.groups}/${groupId}/members/${memberId}`,
      { role },
    );
  },
};
