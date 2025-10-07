"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { handleError } from "@/shared/lib/error/handle-error";
import { invitationsApi } from "@/features/groups/api/invitations.api";
import { useTranslation } from "react-i18next";

export function useAcceptInvitation() {
  const { t } = useTranslation("common");
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: invitationsApi.accept,
    onSuccess: () => {
      toast.success(t("invitation.joinedMsg"));
      queryClient.invalidateQueries({ queryKey: ["invitations", "received"] });
      queryClient.invalidateQueries({ queryKey: ["groups"] });
    },
    onError: (error) => handleError({ error }),
  });
}
