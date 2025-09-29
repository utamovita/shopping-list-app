"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { handleError } from "@/shared/lib/error/handle-error";
import { groupsApi } from "../api/groups.api";
import { UpdateGroupDto } from "@repo/schemas";

type UpdateGroupData = {
  groupId: string;
  data: UpdateGroupDto;
};

export function useUpdateGroup() {
  const queryClient = useQueryClient();
  const { t } = useTranslation(["common"]);

  return useMutation({
    mutationFn: (updateData: UpdateGroupData) => groupsApi.update(updateData),
    onSuccess: () => {
      toast.success(t("group.changeNameDialog.success"));
      queryClient.invalidateQueries({ queryKey: ["groups"] });
    },
    onError: (error) => {
      handleError({ error });
    },
  });
}
