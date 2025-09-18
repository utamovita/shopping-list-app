"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleError } from "@/shared/lib/error/handle-error";
import { shoppingListApi } from "../api/shopping-list.api";
import type { ShoppingListItem, SuccessResponse } from "@repo/types";

export function useUpdateItem(groupId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (item: { itemId: string; completed: boolean }) =>
      shoppingListApi.updateItem({ groupId, ...item }),
    onMutate: async (updatedItem) => {
      await queryClient.cancelQueries({ queryKey: ["shopping-list", groupId] });
      const previousItems = queryClient.getQueryData<
        SuccessResponse<ShoppingListItem[]>
      >(["shopping-list", groupId]);

      queryClient.setQueryData<SuccessResponse<ShoppingListItem[]>>(
        ["shopping-list", groupId],
        (old) => ({
          ...old!,
          data: old!.data.map((item) =>
            item.id === updatedItem.itemId
              ? { ...item, completed: updatedItem.completed }
              : item,
          ),
        }),
      );
      return { previousItems };
    },
    onError: (err, variables, context) => {
      if (context?.previousItems) {
        queryClient.setQueryData(
          ["shopping-list", groupId],
          context.previousItems,
        );
      }
      handleError({ error: err, showToast: true });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["shopping-list", groupId] });
    },
  });
}
