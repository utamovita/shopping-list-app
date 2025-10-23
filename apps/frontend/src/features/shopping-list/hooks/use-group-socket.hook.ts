import { useEffect } from "react";
import { socket } from "@/shared/lib/socket";
import { useQueryClient } from "@tanstack/react-query";
import { EVENT_NAME } from "@repo/config";
import type { ShoppingListItem } from "@repo/database";
import type { SuccessResponse } from "@repo/types";

export function useGroupSocket(groupId: string) {
  const queryClient = useQueryClient();
  const queryKey = ["shopping-list", groupId];

  useEffect(() => {
    const onUpdate = (payload: { groupId: string }) => {
      if (payload.groupId === groupId) {
        void queryClient.invalidateQueries({ queryKey });
      }
    };

    const onSoftDeleted = (payload: { itemId: string; groupId: string }) => {
      if (payload.groupId === groupId) {
        queryClient.setQueryData<SuccessResponse<ShoppingListItem[]>>(
          queryKey,
          (oldData) => {
            if (!oldData) return oldData;
            return {
              ...oldData,
              data: oldData.data.filter((item) => item.id !== payload.itemId),
            };
          },
        );
      }
    };

    const onRestored = (payload: { itemId: string; groupId: string }) => {
      if (payload.groupId === groupId) {
        void queryClient.invalidateQueries({ queryKey });
      }
    };

    socket.on(EVENT_NAME.shoppingListUpdated, onUpdate);
    socket.on(EVENT_NAME.itemSoftDeleted, onSoftDeleted);
    socket.on(EVENT_NAME.itemRestored, onRestored);
    socket.emit(EVENT_NAME.joinGroup, groupId);

    return () => {
      socket.emit(EVENT_NAME.leaveGroup, groupId);
      socket.off(EVENT_NAME.shoppingListUpdated, onUpdate);
      socket.off(EVENT_NAME.itemSoftDeleted, onSoftDeleted);
      socket.off(EVENT_NAME.itemRestored, onRestored);
    };
  }, [groupId, queryClient, queryKey]);
}
