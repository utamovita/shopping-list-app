"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleError } from "@/shared/lib/error/handle-error";
import { shoppingListApi } from "../../api/shopping-list.api";
import { SuccessResponse } from "@repo/types";
import { ShoppingListItem } from "@repo/database";

export function useRemoveItem(groupId: string) {
  const queryClient = useQueryClient();
  const queryKey = ["shopping-list", groupId];

  return useMutation({
    mutationFn: (itemId: string) =>
      shoppingListApi.removeItem({ groupId, itemId }),

    onMutate: async (itemIdToRemove: string) => {
      await queryClient.cancelQueries({ queryKey });

      const previousItems =
        queryClient.getQueryData<SuccessResponse<ShoppingListItem[]>>(queryKey);

      if (!previousItems) {
        return;
      }

      const newItemsData = previousItems.data.filter(
        (item) => item.id !== itemIdToRemove,
      );

      queryClient.setQueryData<SuccessResponse<ShoppingListItem[]>>(queryKey, {
        ...previousItems,
        data: newItemsData,
      });

      return { previousItems };
    },

    onError: (error, _variables, context) => {
      if (context?.previousItems) {
        queryClient.setQueryData(queryKey, context.previousItems);
      }
      handleError({ error, showToast: true });
    },

    onSettled: () => {
      void queryClient.invalidateQueries({ queryKey });
    },
  });
}
