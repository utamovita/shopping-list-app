"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { handleError } from "@/shared/lib/error/handle-error";
import { groupsApi } from "../api/groups.api";

export function useDeleteGroup() {
  const queryClient = useQueryClient();
  const { t } = useTranslation(["common"]);

  return useMutation({
    mutationFn: (groupId: string) => groupsApi.remove(groupId),
    onSuccess: (response) => {
      if (response?.message) {
        toast.success(t(response.message));
      } else {
        toast.success("Grupa została usunięta.");
      }
      queryClient.invalidateQueries({ queryKey: ["groups"] });
    },
    onError: (error) => {
      handleError({ error });
    },
  });
}
