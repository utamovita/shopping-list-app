"use client";

import { useEffect } from "react";
import { socket } from "@/shared/lib/socket";
import { useQueryClient } from "@tanstack/react-query";

export function useGroupSocket(groupId: string) {
  const queryClient = useQueryClient();

  useEffect(() => {
    const onUpdate = (payload: { groupId: string }) => {
      if (payload.groupId === groupId) {
        queryClient.invalidateQueries({ queryKey: ["shopping-list", groupId] });
      }
    };

    socket.on("shopping_list_updated", onUpdate);
    socket.emit("join_group", groupId);

    return () => {
      socket.emit("leave_group", groupId);
      socket.off("shopping_list_updated", onUpdate);
    };
  }, [groupId, queryClient]);
}
