"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleError } from "@/shared/lib/error/handle-error";
import { shoppingListApi } from "../api/shopping-list.api";
import type { SuccessResponse } from "@repo/types";
import type { UpdateShoppingListItemDto } from "@repo/schemas";
import type { ShoppingListItem } from "@repo/database";

type UpdateItemVariables = Omit<UpdateShoppingListItemDto, "groupId">;

export function useUpdateItem(groupId: string) {
  const queryClient = useQueryClient();
  const queryKey = ["shopping-list", groupId];

  return useMutation({
    mutationFn: (variables: UpdateItemVariables) =>
      shoppingListApi.updateItem({ ...variables, groupId }),

    onMutate: async (variables: UpdateItemVariables) => {
      await queryClient.cancelQueries({ queryKey });

      const previousItems =
        queryClient.getQueryData<SuccessResponse<ShoppingListItem[]>>(queryKey);

      if (!previousItems) {
        return;
      }

      const newItemsData = previousItems.data.map((item) =>
        item.id === variables.itemId
          ? ({ ...item, completed: variables.completed } as ShoppingListItem)
          : item,
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
