import { render, screen, waitFor } from "@testing-library/react";
import { ShoppingListView } from "./shopping-list-view.component";
import { useShoppingListItems } from "@/features/shopping-list/hooks/use-shopping-list-items.hook";
import { useRemoveItem } from "@/features/shopping-list/hooks/use-remove-item.hook";
import { useUpdateItem } from "@/features/shopping-list/hooks/use-update-item.hook";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { ShoppingListItem, SuccessResponse } from "@repo/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

jest.mock("@/features/shopping-list/hooks/use-shopping-list-items.hook");
jest.mock("@/features/shopping-list/hooks/use-remove-item.hook");
jest.mock("@/features/shopping-list/hooks/use-update-item.hook");
jest.mock("@/features/shopping-list/hooks/use-group-socket.hook");

const mockUseShoppingListItems = useShoppingListItems as jest.Mock;
const mockUseRemoveItem = useRemoveItem as jest.Mock;
const mockUseUpdateItem = useUpdateItem as jest.Mock;

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

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

const TestWrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = createTestQueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("ShoppingListView", () => {
  const mockRemoveItem = jest.fn();
  const mockUpdateItem = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseRemoveItem.mockReturnValue({ mutate: mockRemoveItem });
    mockUseUpdateItem.mockReturnValue({ mutate: mockUpdateItem });
  });

  it("should render a spinner while loading", () => {
    mockUseShoppingListItems.mockReturnValue({ isLoading: true });
    render(<ShoppingListView groupId="group-1" />, { wrapper: TestWrapper });

    expect(screen.getByTestId("spinner-overlay")).toBeInTheDocument();
  });

  it("should render an error message on error", () => {
    mockUseShoppingListItems.mockReturnValue({ isError: true });
    render(<ShoppingListView groupId="group-1" />, { wrapper: TestWrapper });

    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("should render a message when there are no items", () => {
    mockUseShoppingListItems.mockReturnValue({
      isLoading: false,
      isError: false,
      data: { ...mockItems, data: [] },
    });
    render(<ShoppingListView groupId="group-1" />, { wrapper: TestWrapper });

    expect(screen.getByText("shoppingList.noItems")).toBeInTheDocument();
  });

  it("should render the list of items correctly", () => {
    mockUseShoppingListItems.mockReturnValue({
      isLoading: false,
      isError: false,
      data: mockItems,
    });
    render(<ShoppingListView groupId="group-1" />, { wrapper: TestWrapper });

    expect(screen.getByText("Milk")).toBeInTheDocument();
    expect(screen.getByText("Bread")).toBeInTheDocument();
    expect(screen.getByLabelText("Bread")).toBeChecked();
    expect(screen.getByLabelText("Milk")).not.toBeChecked();
  });

  it("should call updateItem when a checkbox is clicked", async () => {
    mockUseShoppingListItems.mockReturnValue({ data: mockItems });
    render(<ShoppingListView groupId="group-1" />, { wrapper: TestWrapper });

    const milkCheckbox = screen.getByLabelText("Milk");
    await userEvent.click(milkCheckbox);

    await waitFor(() => {
      expect(mockUpdateItem).toHaveBeenCalledWith({
        itemId: "1",
        completed: true,
      });
    });
  });

  it("should call removeItem when the delete button is clicked", async () => {
    mockUseShoppingListItems.mockReturnValue({ data: mockItems });
    render(<ShoppingListView groupId="group-1" />, { wrapper: TestWrapper });

    const deleteButton = screen.getByRole("button", {
      name: "shoppingList.removeItem_Milk",
    });
    await userEvent.click(deleteButton);

    await waitFor(() => {
      expect(mockRemoveItem).toHaveBeenCalledWith("1");
    });
  });

  it("should have no accessibility violations", async () => {
    mockUseShoppingListItems.mockReturnValue({ data: mockItems });
    const { container } = render(<ShoppingListView groupId="group-1" />, {
      wrapper: TestWrapper,
    });
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
