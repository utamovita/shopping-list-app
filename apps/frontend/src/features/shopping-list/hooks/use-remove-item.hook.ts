"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleError } from "@/shared/lib/error/handle-error";
import { shoppingListApi } from "../api/shopping-list.api";

export function useRemoveItem(groupId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (itemId: string) =>
      shoppingListApi.removeItem({ groupId, itemId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shopping-list", groupId] });
    },
    onError: (error) => {
      handleError({ error });
    },
  });
}
