"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { handleError } from "@/shared/lib/error/handle-error";
import { groupsApi } from "@/features/groups/api/groups.api";
import { useUiStore } from "@/shared/store/ui.store";

export function useDeleteGroup() {
  const queryClient = useQueryClient();
  const { t } = useTranslation(["common"]);
  const { closeDialog } = useUiStore();

  return useMutation({
    mutationFn: (groupId: string) => groupsApi.remove(groupId),
    onSuccess: (response) => {
      if (response?.message) {
        toast.success(t(response.message));
      } else {
        toast.success(t("group.deleteSuccess"));
      }
      queryClient.invalidateQueries({ queryKey: ["groups"] });
      closeDialog();
    },
    onError: (error) => {
      handleError({ error });
    },
  });
}
