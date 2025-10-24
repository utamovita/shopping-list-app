import { apiClient } from "@/shared/lib/api/api-client";
import { API_PATHS } from "@repo/config";
import type { ShoppingListItem } from "@repo/database";
import {
  CreateShoppingListItemDto,
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
  removeItems: async ({
    groupId,
    itemIds,
  }: {
    groupId: string;
    itemIds: string[];
  }) => {
    const response = await apiClient.post<void>(
      `${API_PATHS.shoppingList(groupId)}/remove`,
      { itemIds },
    );
    return response.data;
  },
  updateItem: async ({
    groupId,
    itemId,
    data,
  }: {
    groupId: string;
    itemId: string;
    data: Partial<Omit<UpdateShoppingListItemDto, "groupId" | "itemId">>;
  }) => {
    const response = await apiClient.patch<ShoppingListItem>(
      `${API_PATHS.shoppingList(groupId)}/${itemId}`,
      data,
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
