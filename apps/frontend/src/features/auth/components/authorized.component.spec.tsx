import { render, screen, waitFor } from "@testing-library/react";
import { Authorized } from "./authorized.component";
import { useAuthStore } from "@/shared/store/auth.store";
import { useIsMounted } from "@/shared/hooks/use-has-mounted.hook";
import { useRouter } from "next/navigation";
import { APP_PATHS } from "@repo/config";

jest.mock("@/shared/store/auth.store");
jest.mock("@/shared/hooks/use-has-mounted.hook");
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const mockUseAuthStore = useAuthStore as unknown as jest.Mock;
const mockUseIsMounted = useIsMounted as jest.Mock;
const mockUseRouter = useRouter as jest.Mock;

describe("Authorized Component", () => {
  const mockReplace = jest.fn();

  beforeEach(() => {
    mockReplace.mockClear();
    mockUseRouter.mockReturnValue({
      replace: mockReplace,
    });
  });

  describe("when user is NOT authenticated", () => {
    beforeEach(() => {
      mockUseAuthStore.mockImplementation((selector) =>
        selector({ accessToken: null }),
      );
    });

    it("should render spinner when not mounted yet", () => {
      mockUseIsMounted.mockReturnValue(false);
      render(<Authorized>Protected Content</Authorized>);

      expect(screen.getByTestId("spinner-overlay")).toBeInTheDocument();
      expect(screen.queryByText("Protected Content")).not.toBeInTheDocument();
    });

    it("should redirect to login page after mounting", async () => {
      mockUseIsMounted.mockReturnValue(true);
      render(<Authorized>Protected Content</Authorized>);

      await waitFor(() => {
        expect(mockReplace).toHaveBeenCalledWith(APP_PATHS.login);
      });

      expect(screen.getByTestId("spinner-overlay")).toBeInTheDocument();
      expect(screen.queryByText("Protected Content")).not.toBeInTheDocument();
    });
  });

  describe("when user IS authenticated", () => {
    beforeEach(() => {
      mockUseAuthStore.mockImplementation((selector) =>
        selector({ accessToken: "fake-jwt-token" }),
      );
    });

    it("should render spinner when not mounted yet", () => {
      mockUseIsMounted.mockReturnValue(false);
      render(<Authorized>Protected Content</Authorized>);

      expect(screen.getByTestId("spinner-overlay")).toBeInTheDocument();
      expect(screen.queryByText("Protected Content")).not.toBeInTheDocument();
    });

    it("should render children after mounting and not redirect", async () => {
      mockUseIsMounted.mockReturnValue(true);
      render(<Authorized>Protected Content</Authorized>);

      expect(await screen.findByText("Protected Content")).toBeInTheDocument();
      expect(mockReplace).not.toHaveBeenCalled();
      expect(screen.queryByTestId("spinner-overlay")).not.toBeInTheDocument();
    });
  });
});
