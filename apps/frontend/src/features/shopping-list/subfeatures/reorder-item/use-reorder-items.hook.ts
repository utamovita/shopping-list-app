import { useMutation, useQueryClient } from "@tanstack/react-query";
import { shoppingListApi } from "../../api/shopping-list.api";
import { handleError } from "@/shared/lib/error/handle-error";
import type { ShoppingListItem } from "@repo/database";
import type { SuccessResponse } from "@repo/types";

type ReorderVariables = {
  optimisticItems: ShoppingListItem[];
  payloadToApi: { id: string; order: number }[];
};

export function useReorderItems(groupId: string) {
  const queryClient = useQueryClient();
  const queryKey = ["shopping-list", groupId];

  return useMutation({
    mutationFn: ({ payloadToApi }: ReorderVariables) =>
      shoppingListApi.reorderItems({ groupId, items: payloadToApi }),

    onMutate: async ({ optimisticItems }: ReorderVariables) => {
      await queryClient.cancelQueries({ queryKey });

      const previousItemsResponse =
        queryClient.getQueryData<SuccessResponse<ShoppingListItem[]>>(queryKey);

      if (previousItemsResponse) {
        queryClient.setQueryData<SuccessResponse<ShoppingListItem[]>>(
          queryKey,
          {
            ...previousItemsResponse,
            data: optimisticItems,
          },
        );
      }

      return { previousItemsResponse };
    },

    onError: (_err, _variables, context) => {
      if (context?.previousItemsResponse) {
        queryClient.setQueryData(queryKey, context.previousItemsResponse);
      }
      handleError({
        error: new Error("Failed to reorder items"),
        showToast: true,
      });
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
}
