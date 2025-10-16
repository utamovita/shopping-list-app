import { apiClient } from "@/shared/lib/api/api-client";
import { API_PATHS } from "@repo/config";
import type { ShoppingListItem } from "@repo/database";
import {
  CreateShoppingListItemDto,
  ShoppingListItemParams,
  UpdateShoppingListItemDto,
} from "@repo/schemas";

export const shoppingListApi = {
  getItems: async (groupId: string) => {
    const response = await apiClient.get<ShoppingListItem[]>(
      API_PATHS.shoppingList(groupId),
    );
    return response.data;
  },
  addItem: async ({
    groupId,
    name,
    quantity,
  }: {
    groupId: string;
  } & CreateShoppingListItemDto) => {
    const response = await apiClient.post<ShoppingListItem>(
      API_PATHS.shoppingList(groupId),
      { name, quantity },
    );
    return response.data;
  },
  removeItem: async ({ groupId, itemId }: ShoppingListItemParams) => {
    const response = await apiClient.delete<void>(
      `${API_PATHS.shoppingList(groupId)}/${itemId}`,
    );
    return response.data;
  },
  updateItem: async ({
    groupId,
    itemId,
    completed,
  }: UpdateShoppingListItemDto) => {
    const response = await apiClient.patch<ShoppingListItem>(
      `${API_PATHS.shoppingList(groupId)}/${itemId}`,
      { completed },
    );
    return response.data;
  },
  reorderItems: async ({
    groupId,
    items,
  }: {
    groupId: string;
    items: { id: string; order: number }[];
  }) => {
    const response = await apiClient.patch<{ success: boolean }>(
      `${API_PATHS.shoppingList(groupId)}/reorder`,
      { items },
    );
    return response.data;
  },
};
