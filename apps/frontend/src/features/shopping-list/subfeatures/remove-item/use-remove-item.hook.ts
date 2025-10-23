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

const UNDO_DELAY = 2000;
const REMOVE_TOAST_ID = "remove-item-toast";

export function useRemoveItem(groupId: string) {
  const queryClient = useQueryClient();
  const { t } = useTranslation("common");
  const queryKey = ["shopping-list", groupId];

  const timersMapRef = useRef(new Map<string, NodeJS.Timeout>());
  const lastRemovedItemRef = useRef<ShoppingListItem | null>(null);

  const restoreItemToCache = useCallback(
    (itemToRestore: ShoppingListItem) => {
      queryClient.setQueryData<SuccessResponse<ShoppingListItem[]>>(
        queryKey,
        (oldData) => {
          if (!oldData) return oldData;

          const itemExists = oldData.data.some(
            (item) => item.id === itemToRestore.id,
          );
          if (itemExists) return oldData;

          return {
            ...oldData,
            data: [...oldData.data, itemToRestore].sort(
              (a, b) =>
                new Date(a.createdAt).getTime() -
                new Date(b.createdAt).getTime(),
            ),
          };
        },
      );
    },
    [queryClient, queryKey],
  );

  const deleteMutation = useMutation({
    mutationFn: (item: ShoppingListItem) =>
      shoppingListApi.removeItem({ groupId, itemId: item.id }),
    onError: (error, itemFailedToRemove) => {
      restoreItemToCache(itemFailedToRemove);
      handleError({ error, showToast: true });
    },
  });

  const initiateRemove = (itemToRemove: ShoppingListItem) => {
    if (timersMapRef.current.has(itemToRemove.id)) {
      clearTimeout(timersMapRef.current.get(itemToRemove.id)!);
    }

    lastRemovedItemRef.current = itemToRemove;

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

    const timerId = setTimeout(() => {
      deleteMutation.mutate(itemToRemove);
      timersMapRef.current.delete(itemToRemove.id);
      if (lastRemovedItemRef.current?.id === itemToRemove.id) {
        lastRemovedItemRef.current = null;
      }
    }, UNDO_DELAY);

    timersMapRef.current.set(itemToRemove.id, timerId);

    toast.success(
      t("shoppingList.itemRemovedMsg", { itemName: itemToRemove.name }),
      {
        id: REMOVE_TOAST_ID,
        duration: UNDO_DELAY,
        action: {
          label: t("shoppingList.undo"),
          onClick: () => {
            const itemToRestore = lastRemovedItemRef.current;
            if (!itemToRestore) return;

            const timerToClear = timersMapRef.current.get(itemToRestore.id);
            if (timerToClear) {
              clearTimeout(timerToClear);
              timersMapRef.current.delete(itemToRestore.id);
            }

            restoreItemToCache(itemToRestore);

            socket.emit(EVENT_NAME.itemRestore, {
              itemId: itemToRestore.id,
              groupId,
            });

            lastRemovedItemRef.current = null;
          },
        },
        onDismiss: () => {
          if (lastRemovedItemRef.current?.id === itemToRemove.id) {
            lastRemovedItemRef.current = null;
          }
        },
        onAutoClose: () => {
          if (lastRemovedItemRef.current?.id === itemToRemove.id) {
            lastRemovedItemRef.current = null;
          }
        },
      },
    );
  };

  return { mutate: initiateRemove, isPending: deleteMutation.isPending };
}
