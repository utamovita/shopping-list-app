"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { handleError } from "@/shared/lib/error/handle-error";
import { invitationsApi } from "../api/invitations.api";
import { useTranslation } from "react-i18next";

export function useDeclineInvitation() {
  const { t } = useTranslation("common");

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: invitationsApi.decline,
    onSuccess: () => {
      toast.info(t("invitation.declinedMsg"));
      queryClient.invalidateQueries({ queryKey: ["invitations", "received"] });
    },
    onError: (error) => handleError({ error }),
  });
}
