import { renderHook, waitFor } from "@testing-library/react";
import { useUpdateGroup } from "./use-update-group.hook";
import { groupsApi } from "../api/groups.api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { toast } from "sonner";
import type { GroupWithDetails, SuccessResponse } from "@repo/types";

jest.mock("../api/groups.api");
jest.mock("sonner");
jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

const mockGroupsApi = groupsApi as jest.Mocked<typeof groupsApi>;

describe("useUpdateGroup", () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call groupsApi.update and show success toast on success", async () => {
    const updateData = {
      groupId: "group-123",
      data: { name: "New Group Name" },
    };

    const mockResponse: SuccessResponse<GroupWithDetails> = {
      success: true,
      data: {
        id: updateData.groupId,
        name: updateData.data.name,
        createdAt: new Date(),
        updatedAt: new Date(),
        _count: { shoppingItems: 0 },
        members: [],
      },
      message: "group.changeNameDialog.success",
    };
    mockGroupsApi.update.mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useUpdateGroup(), { wrapper });

    result.current.mutate(updateData);

    await waitFor(() => {
      expect(mockGroupsApi.update).toHaveBeenCalledWith(updateData);
    });

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith(
        "group.changeNameDialog.success",
      );
    });
  });
});
