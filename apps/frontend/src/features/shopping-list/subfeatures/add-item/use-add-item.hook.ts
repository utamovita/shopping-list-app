"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleError } from "@/shared/lib/error/handle-error";
import { shoppingListApi } from "../../api/shopping-list.api";
import { CreateShoppingListItemDto } from "@repo/schemas";

export function useAddItem(groupId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateShoppingListItemDto) =>
      shoppingListApi.addItem({ groupId, ...data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shopping-list", groupId] });
    },
    onError: (error) => {
      handleError({ error });
    },
  });
}
