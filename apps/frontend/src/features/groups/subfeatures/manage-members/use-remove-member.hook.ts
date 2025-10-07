"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { handleError } from "@/shared/lib/error/handle-error";
import { groupsApi } from "@/features/groups/api/groups.api";
import { useTranslation } from "react-i18next";

export function useRemoveMember() {
  const queryClient = useQueryClient();
  const { t } = useTranslation("common");

  return useMutation({
    mutationFn: groupsApi.removeMember,
    onSuccess: () => {
      toast.success(t("group.manageMembers.removeMemberSuccess"));
      queryClient.invalidateQueries({ queryKey: ["groups"] });
    },
    onError: (error) => {
      handleError({ error });
    },
  });
}
