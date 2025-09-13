"use client";

import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/shared/store/auth.store";
import { shoppingListApi } from "../api/shopping-list.api";

export function useShoppingListItems(groupId: string) {
  const token = useAuthStore((state) => state.token);

  return useQuery({
    queryKey: ["shopping-list", groupId],
    queryFn: () => shoppingListApi.getItems(groupId),
    enabled: !!token,
  });
}
