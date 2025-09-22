import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { AddItemForm } from "./add-item-form.component";
import { useAddItem } from "../hooks/use-add-item.hook";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

jest.mock("../hooks/use-add-item.hook");

const mockUseAddItem = useAddItem as jest.Mock;

const TestWrapper = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("AddItemForm", () => {
  const mockMutate = jest.fn();
  const groupId = "group-123";

  beforeEach(() => {
    mockMutate.mockClear();
    mockUseAddItem.mockReturnValue({
      mutate: mockMutate,
      isPending: false,
    });
  });

  it("should render the form elements correctly", () => {
    render(<AddItemForm groupId={groupId} />, { wrapper: TestWrapper });
    expect(
      screen.getByPlaceholderText("shoppingList.addItemPlaceholder"),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "add" })).toBeInTheDocument();
  });

  it("should call mutate with correct arguments when form is submitted", async () => {
    render(<AddItemForm groupId={groupId} />, { wrapper: TestWrapper });

    const input = screen.getByPlaceholderText(
      "shoppingList.addItemPlaceholder",
    );
    const submitButton = screen.getByRole("button", { name: "add" });

    await userEvent.type(input, "New Shopping Item");
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledWith(
        "New Shopping Item",
        expect.anything(),
      );
    });
  });

  it("should disable form elements when isPending is true", () => {
    mockUseAddItem.mockReturnValue({
      mutate: mockMutate,
      isPending: true,
    });
    render(<AddItemForm groupId={groupId} />, { wrapper: TestWrapper });

    expect(
      screen.getByPlaceholderText("shoppingList.addItemPlaceholder"),
    ).toBeDisabled();
    expect(screen.getByRole("button", { name: "add" })).toBeDisabled();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<AddItemForm groupId={groupId} />, {
      wrapper: TestWrapper,
    });
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
