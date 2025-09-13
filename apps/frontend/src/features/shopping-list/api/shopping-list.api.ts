import { apiClient } from "@/shared/lib/api/api-client";
import { API_PATHS } from "@repo/config/paths";
import type { ShoppingListItem } from "@repo/types/api";

export const shoppingListApi = {
  getItems: async (groupId: string) => {
    const response = await apiClient.get<ShoppingListItem[]>(
      API_PATHS.shoppingList(groupId),
    );
    return response.data;
  },
};
