import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleError } from "@/shared/lib/error/handle-error";
import { shoppingListApi } from "../../api/shopping-list.api";
import type { SuccessResponse } from "@repo/types";
import type { ShoppingListItem } from "@repo/database";
import { useRef, useCallback } from "react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { socket } from "@/shared/lib/socket";
import { EVENT_NAME } from "@repo/config";

const UNDO_DELAY = 3000;
const REMOVE_TOAST_ID = "remove-items-toast";

export function useRemoveItem(groupId: string) {
  const queryClient = useQueryClient();
  const { t } = useTranslation("common");
  const queryKey = ["shopping-list", groupId];

  const removalTimerRef = useRef<NodeJS.Timeout | null>(null);
  const itemsToRemoveRef = useRef<ShoppingListItem[]>([]);
  const itemToUndoRef = useRef<ShoppingListItem | null>(null);

  const restoreItemsToCache = useCallback(
    (itemsToRestore: ShoppingListItem[]) => {
      queryClient.setQueryData<SuccessResponse<ShoppingListItem[]>>(
        queryKey,
        (oldData) => {
          if (!oldData) return oldData;
          const existingIds = new Set(oldData.data.map((item) => item.id));
          const newItems = itemsToRestore.filter(
            (item) => !existingIds.has(item.id),
          );
          if (newItems.length === 0) return oldData;

          return {
            ...oldData,
            data: [...oldData.data, ...newItems].sort(
              (a, b) => a.order - b.order,
            ),
          };
        },
      );
    },
    [queryClient, queryKey],
  );

  const deleteMutation = useMutation({
    mutationFn: (items: ShoppingListItem[]) =>
      shoppingListApi.removeItems({
        groupId,
        itemIds: items.map((item) => item.id),
      }),
    onError: (error, itemsFailedToRemove) => {
      restoreItemsToCache(itemsFailedToRemove);
      handleError({ error, showToast: true });
    },
  });

  const initiateRemove = (itemToRemove: ShoppingListItem) => {
    if (removalTimerRef.current) {
      clearTimeout(removalTimerRef.current);
    }

    if (!itemsToRemoveRef.current.some((i) => i.id === itemToRemove.id)) {
      itemsToRemoveRef.current.push(itemToRemove);
    }
    itemToUndoRef.current = itemToRemove;

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

    removalTimerRef.current = setTimeout(() => {
      if (itemsToRemoveRef.current.length > 0) {
        deleteMutation.mutate([...itemsToRemoveRef.current]);
        itemsToRemoveRef.current = [];
        itemToUndoRef.current = null;
        toast.dismiss(REMOVE_TOAST_ID);
      }
    }, UNDO_DELAY);

    const count = itemsToRemoveRef.current.length;
    console.log(removalTimerRef);
    console.log(itemsToRemoveRef);
    console.log(itemToRemove);
    console.log(itemToUndoRef);

    console.log(count);
    toast.success(
      t("shoppingList.itemRemovedMsg", { itemName: itemToRemove.name }),
      {
        id: REMOVE_TOAST_ID,
        duration: UNDO_DELAY - 500,
        dismissible: true,
        action: {
          label: t("shoppingList.undo"),
          onClick: () => {
            const itemToRestore = itemToUndoRef.current;
            if (!itemToRestore) return;

            restoreItemsToCache([itemToRestore]);
            socket.emit(EVENT_NAME.itemRestore, {
              itemId: itemToRestore.id,
              groupId,
            });

            itemsToRemoveRef.current = itemsToRemoveRef.current.filter(
              (item) => item.id !== itemToRestore.id,
            );
            itemToUndoRef.current = null;
          },
        },
      },
    );
  };

  return { mutate: initiateRemove, isPending: deleteMutation.isPending };
}
