import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleError } from "@/shared/lib/error/handle-error";
import { shoppingListApi } from "../../api/shopping-list.api";
import type { SuccessResponse } from "@repo/types";
import type { ShoppingListItem } from "@repo/database";
import { useRef } from "react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { socket } from "@/shared/lib/socket";
import { EVENT_NAME } from "@repo/config";

const UNDO_DELAY = 4000;

export function useRemoveItem(groupId: string) {
  const queryClient = useQueryClient();
  const { t } = useTranslation("common");
  const queryKey = ["shopping-list", groupId];

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const toastIdRef = useRef<string | number | undefined>(undefined);

  const deleteMutation = useMutation({
    mutationFn: (itemId: string) =>
      shoppingListApi.removeItem({ groupId, itemId }),

    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey });
      const previousItems =
        queryClient.getQueryData<SuccessResponse<ShoppingListItem[]>>(queryKey);
      return { previousItems };
    },
    onError: (error, _itemId, context) => {
      if (context?.previousItems) {
        queryClient.setQueryData(queryKey, context.previousItems);
      }
      handleError({ error, showToast: true });
    },

    onSettled: () => {
      void queryClient.invalidateQueries({ queryKey });
    },
  });

  const initiateRemove = (itemToRemove: ShoppingListItem) => {
    if (toastIdRef.current) {
      toast.dismiss(toastIdRef.current);
    }
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    queryClient.setQueryData<SuccessResponse<ShoppingListItem[]>>(
      queryKey,
      (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          data: oldData.data.filter((item) => item.id !== itemToRemove.id),
        };
      },
    );

    socket.emit(EVENT_NAME.itemSoftDelete, {
      itemId: itemToRemove.id,
      groupId,
    });

    timerRef.current = setTimeout(() => {
      deleteMutation.mutate(itemToRemove.id);
      toastIdRef.current = undefined;
    }, UNDO_DELAY);

    toastIdRef.current = toast.success(
      t("shoppingList.itemRemovedMsg", { itemName: itemToRemove.name }),
      {
        action: {
          label: t("shoppingList.undo"),
          onClick: () => {
            if (timerRef.current) {
              clearTimeout(timerRef.current);
            }

            void queryClient.invalidateQueries({ queryKey });

            socket.emit(EVENT_NAME.itemRestore, {
              itemId: itemToRemove.id,
              groupId,
            });
          },
        },
        duration: UNDO_DELAY,
        onAutoClose: () => {
          toastIdRef.current = undefined;
        },
        onDismiss: () => {
          toastIdRef.current = undefined;
        },
      },
    );
  };

  return { mutate: initiateRemove, isPending: deleteMutation.isPending };
}
