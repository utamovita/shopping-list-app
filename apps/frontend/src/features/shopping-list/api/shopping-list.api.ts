import { apiClient } from "@/shared/lib/api/api-client";
import { API_PATHS } from "@repo/config";
import type { ShoppingListItem } from "@repo/types/api";

export const shoppingListApi = {
  getItems: async (groupId: string) => {
    const response = await apiClient.get<ShoppingListItem[]>(
      API_PATHS.shoppingList(groupId),
    );
    return response.data;
  },
  addItem: async ({ groupId, name }: { groupId: string; name: string }) => {
    const response = await apiClient.post<ShoppingListItem>(
      API_PATHS.shoppingList(groupId),
      { name },
    );
    return response.data;
  },
  removeItem: async ({
    groupId,
    itemId,
  }: {
    groupId: string;
    itemId: string;
  }) => {
    const response = await apiClient.delete<void>(
      `${API_PATHS.shoppingList(groupId)}/${itemId}`,
    );
    return response.data;
  },
  updateItem: async ({
    groupId,
    itemId,
    completed,
  }: {
    groupId: string;
    itemId: string;
    completed: boolean;
  }) => {
    const response = await apiClient.patch<ShoppingListItem>(
      `${API_PATHS.shoppingList(groupId)}/${itemId}`,
      { completed },
    );
    return response.data;
  },
};
