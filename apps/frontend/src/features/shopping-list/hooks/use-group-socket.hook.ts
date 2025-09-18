"use client";

import { useEffect } from "react";
import { socket } from "@/shared/lib/socket";
import { useQueryClient } from "@tanstack/react-query";
import { EVENT_NAME } from "@repo/config";

export function useGroupSocket(groupId: string) {
  const queryClient = useQueryClient();

  useEffect(() => {
    const onUpdate = (payload: { groupId: string }) => {
      if (payload.groupId === groupId) {
        queryClient.invalidateQueries({ queryKey: ["shopping-list", groupId] });
      }
    };

    socket.on(EVENT_NAME.shoppingListUpdated, onUpdate);
    socket.emit(EVENT_NAME.joinGroup, groupId);

    return () => {
      socket.emit(EVENT_NAME.leaveGroup, groupId);
      socket.off(EVENT_NAME.shoppingListUpdated, onUpdate);
    };
  }, [groupId, queryClient]);
}
