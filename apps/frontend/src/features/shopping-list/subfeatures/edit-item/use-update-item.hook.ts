"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleError } from "@/shared/lib/error/handle-error";
import { shoppingListApi } from "../../api/shopping-list.api";
import type { SuccessResponse } from "@repo/types";
import type { UpdateShoppingListItemDto } from "@repo/schemas";
import type { ShoppingListItem } from "@repo/database";

type UpdateItemVariables = {
  itemId: string;
} & Partial<Omit<UpdateShoppingListItemDto, "groupId" | "itemId">>;

export function useUpdateItem(groupId: string) {
  const queryClient = useQueryClient();
  const queryKey = ["shopping-list", groupId];

  return useMutation({
    mutationFn: (variables: UpdateItemVariables) => {
      const { itemId, ...data } = variables;
      return shoppingListApi.updateItem({ groupId, itemId, data });
    },

    onMutate: async (variables: UpdateItemVariables) => {
      await queryClient.cancelQueries({ queryKey });

      const previousItemsResponse =
        queryClient.getQueryData<SuccessResponse<ShoppingListItem[]>>(queryKey);

      if (!previousItemsResponse) {
        return { previousItemsResponse: null };
      }

      const newItemsData = previousItemsResponse.data.map((item) =>
        item.id === variables.itemId ? { ...item, ...variables } : item,
      );

      queryClient.setQueryData<SuccessResponse<ShoppingListItem[]>>(queryKey, {
        ...previousItemsResponse,
        data: newItemsData,
      });

      return { previousItemsResponse };
    },
    onError: (error, _variables, context) => {
      if (context?.previousItemsResponse) {
        queryClient.setQueryData(queryKey, context.previousItemsResponse);
      }
      handleError({ error, showToast: true });
    },
    onSettled: () => {
      void queryClient.invalidateQueries({ queryKey });
    },
  });
}
