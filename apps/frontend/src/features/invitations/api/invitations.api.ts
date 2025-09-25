import { apiClient } from "@/shared/lib/api/api-client";
import { API_PATHS } from "@repo/config";
import { Invitation } from "@repo/database";
import { CreateInvitationDto } from "@repo/schemas";

export const invitationsApi = {
  send: async ({
    groupId,
    data,
  }: {
    groupId: string;
    data: CreateInvitationDto;
  }) => {
    const response = await apiClient.post<Invitation>(
      API_PATHS.invitations(groupId),
      data,
    );
    return response.data;
  },
};
