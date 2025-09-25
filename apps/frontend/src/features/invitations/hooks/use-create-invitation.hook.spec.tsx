import { renderHook, waitFor } from "@testing-library/react";
import { useCreateInvitation } from "./use-create-invitation.hook";
import { invitationsApi } from "../api/invitations.api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { toast } from "sonner";
import type { SuccessResponse } from "@repo/types";
import type { Invitation } from "@repo/database";

jest.mock("../api/invitations.api");
jest.mock("sonner");
jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

const mockInvitationsApi = invitationsApi as jest.Mocked<typeof invitationsApi>;

describe("useCreateInvitation", () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call invitationsApi.send and show success toast on success", async () => {
    const groupId = "group-123";
    const dto = { email: "test@example.com" };

    const mockResponse: SuccessResponse<Invitation> = {
      success: true,
      data: {
        id: "inv-123",
        email: "test@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
        groupId: "group-123",
        invitedByUserId: "user-123",
      },
      message: "invitations.sentSuccess",
    };
    mockInvitationsApi.send.mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useCreateInvitation(groupId), {
      wrapper,
    });

    result.current.mutate(dto);

    await waitFor(() => {
      expect(mockInvitationsApi.send).toHaveBeenCalledWith({
        groupId,
        data: dto,
      });
    });

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith("invitations.sentSuccess");
    });
  });
});
