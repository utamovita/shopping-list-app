import { apiClient } from "@/shared/lib/api/api-client";
import { API_PATHS } from "@repo/config";
import { Invitation } from "@repo/types";
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
      API_PATHS.invitations.groupInvitations(groupId),
      data,
    );
    return response.data;
  },
  getReceived: async () => {
    const response = await apiClient.get<Invitation[]>(
      API_PATHS.invitations.received,
    );
    return response.data;
  },

  accept: async (invitationId: string) => {
    const response = await apiClient.post<null>(
      API_PATHS.invitations.accept(invitationId),
      {},
    );
    return response.data;
  },

  decline: async (invitationId: string) => {
    const response = await apiClient.post<null>(
      API_PATHS.invitations.decline(invitationId),
      {},
    );
    return response.data;
  },
};
