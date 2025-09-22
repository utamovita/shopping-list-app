import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useUpdateItem } from "./use-update-item.hook";
import { shoppingListApi } from "../api/shopping-list.api";
import type { ReactNode } from "react";
import type { ShoppingListItem, SuccessResponse } from "@repo/types";

jest.mock("../api/shopping-list.api");

const mockShoppingListApi = shoppingListApi as jest.Mocked<
  typeof shoppingListApi
>;

const mockItems: SuccessResponse<ShoppingListItem[]> = {
  success: true,
  message: "Items fetched successfully",
  data: [
    {
      id: "1",
      name: "Milk",
      completed: false,
      groupId: "group-1",
      addedBy: "user-1",
      createdAt: new Date(),
    },
    {
      id: "2",
      name: "Bread",
      completed: true,
      groupId: "group-1",
      addedBy: "user-1",
      createdAt: new Date(),
    },
  ],
};

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  return { wrapper, queryClient };
};

describe("useUpdateItem", () => {
  const groupId = "group-1";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should optimistically update the item in the cache on mutate", async () => {
    const { wrapper, queryClient } = createWrapper();
    const queryKey = ["shopping-list", groupId];
    queryClient.setQueryData(queryKey, { ...mockItems });

    const { result } = renderHook(() => useUpdateItem(groupId), { wrapper });

    result.current.mutate({ itemId: "1", completed: true });

    await waitFor(() => {
      const updatedData =
        queryClient.getQueryData<SuccessResponse<ShoppingListItem[]>>(queryKey);
      const updatedItem = updatedData?.data.find((item) => item.id === "1");
      expect(updatedItem?.completed).toBe(true);
    });
  });

  it("should revert the optimistic update on error", async () => {
    const errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    const error = new Error("Failed to update");
    mockShoppingListApi.updateItem.mockRejectedValue(error);

    const { wrapper, queryClient } = createWrapper();
    const queryKey = ["shopping-list", groupId];
    queryClient.setQueryData(queryKey, { ...mockItems });

    const { result } = renderHook(() => useUpdateItem(groupId), { wrapper });

    result.current.mutate({ itemId: "1", completed: true });

    await waitFor(() => {
      const revertedData =
        queryClient.getQueryData<SuccessResponse<ShoppingListItem[]>>(queryKey);
      const revertedItem = revertedData?.data.find((item) => item.id === "1");
      expect(revertedItem?.completed).toBe(false);
    });

    errorSpy.mockRestore();
  });

  it("should invalidate queries on settled", async () => {
    mockShoppingListApi.updateItem.mockResolvedValue({
      success: true,
      message: "Item updated",
      data: { ...mockItems.data[0], completed: true },
    });
    const { wrapper, queryClient } = createWrapper();
    const queryKey = ["shopping-list", groupId];
    queryClient.setQueryData(queryKey, { ...mockItems });
    const invalidateQueriesSpy = jest.spyOn(queryClient, "invalidateQueries");

    const { result } = renderHook(() => useUpdateItem(groupId), { wrapper });

    result.current.mutate({ itemId: "1", completed: true });

    await waitFor(() => {
      expect(invalidateQueriesSpy).toHaveBeenCalledWith({ queryKey });
    });
  });
});
