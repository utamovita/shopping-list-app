import { renderHook, act } from "@testing-library/react";
import { useLogout } from "./use-logout.hook";
import { useAuthStore } from "@/shared/store/auth.store";
import { useRouter } from "next/navigation";
import { APP_PATHS } from "@repo/config";

jest.mock("@/shared/store/auth.store");
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const mockUseAuthStore = useAuthStore as unknown as jest.Mock;
const mockUseRouter = useRouter as jest.Mock;

describe("useLogout", () => {
  const mockLogoutFn = jest.fn();
  const mockRouterPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    mockUseAuthStore.mockImplementation((selector) =>
      selector({ logout: mockLogoutFn }),
    );

    mockUseRouter.mockReturnValue({
      push: mockRouterPush,
    });
  });

  it("should call the logout function from the store and redirect to the login page", () => {
    const { result } = renderHook(() => useLogout());

    act(() => {
      result.current.handleLogout();
    });

    expect(mockLogoutFn).toHaveBeenCalledTimes(1);

    expect(mockRouterPush).toHaveBeenCalledTimes(1);
    expect(mockRouterPush).toHaveBeenCalledWith(APP_PATHS.login);
  });
});
