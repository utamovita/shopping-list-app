"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { handleError } from "@/shared/lib/error/handle-error";
import { invitationsApi } from "../api/invitations.api";
import { CreateInvitationDto } from "@repo/schemas";

export function useCreateInvitation(groupId: string) {
  const { t } = useTranslation(["common"]);

  return useMutation({
    mutationFn: (data: CreateInvitationDto) =>
      invitationsApi.send({ groupId, data }),
    onSuccess: () => {
      toast.success(t("invitations.sentSuccess"));
    },
    onError: (error) => {
      handleError({ error });
    },
  });
}
