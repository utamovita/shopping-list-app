"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { groupsApi } from "../../api/groups.api";
import { useTranslation } from "react-i18next";
import { handleError } from "@/shared/lib/error/handle-error";

export function useCreateGroup() {
  const queryClient = useQueryClient();
  const { t } = useTranslation(["common"]);

  return useMutation({
    mutationFn: groupsApi.create,
    onSuccess: (response) => {
      if (response.message) {
        toast.success(t(response.message));
      }
      queryClient.invalidateQueries({ queryKey: ["groups"] });
    },
    onError: (error) => {
      handleError({ error });
    },
  });
}
