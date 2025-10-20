import { useMutation, useQueryClient } from "@tanstack/react-query";
import { shoppingListApi } from "../../api/shopping-list.api";
import { handleError } from "@/shared/lib/error/handle-error";
import type { ShoppingListItem } from "@repo/database";

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

      const previousItems =
        queryClient.getQueryData<ShoppingListItem[]>(queryKey);

      queryClient.setQueryData<ShoppingListItem[]>(queryKey, optimisticItems);

      return { previousItems };
    },

    onError: (_err, _variables, context) => {
      if (context?.previousItems) {
        queryClient.setQueryData(queryKey, context.previousItems);
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
