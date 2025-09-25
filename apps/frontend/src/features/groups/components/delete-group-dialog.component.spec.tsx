import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { DeleteGroupDialog } from "./delete-group-dialog.component";
import { useDeleteGroup } from "../hooks/use-delete-group.hook";
import type { GroupWithDetails } from "@repo/types";

jest.mock("../hooks/use-delete-group.hook");

const mockUseDeleteGroup = useDeleteGroup as jest.Mock;

const mockGroup: GroupWithDetails = {
  id: "group-123",
  name: "Test Group Name",
  members: [],
  _count: {
    shoppingItems: 0,
  },
};

describe("DeleteGroupDialog", () => {
  const mockMutate = jest.fn();

  beforeEach(() => {
    mockMutate.mockClear();
    mockUseDeleteGroup.mockReturnValue({
      mutate: mockMutate,
      isPending: false,
    });
  });

  it("should open the dialog and display group name when trigger is clicked", async () => {
    render(
      <DeleteGroupDialog group={mockGroup}>
        <button>Open Dialog</button>
      </DeleteGroupDialog>,
    );

    await userEvent.click(screen.getByRole("button", { name: "Open Dialog" }));

    expect(
      await screen.findByRole("heading", { name: "group.delete" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("group.deleteGroupPrompt_Test Group Name"),
    ).toBeInTheDocument();
  });

  it("should call mutate with the correct group id when delete is confirmed", async () => {
    render(
      <DeleteGroupDialog group={mockGroup}>
        <button>Open Dialog</button>
      </DeleteGroupDialog>,
    );

    await userEvent.click(screen.getByRole("button", { name: "Open Dialog" }));
    await userEvent.click(
      await screen.findByRole("button", { name: "yesDelete" }),
    );

    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledWith("group-123");
    });
  });

  it("should disable the delete button when isPending is true", async () => {
    mockUseDeleteGroup.mockReturnValue({
      mutate: mockMutate,
      isPending: true,
    });

    render(
      <DeleteGroupDialog group={mockGroup}>
        <button>Open Dialog</button>
      </DeleteGroupDialog>,
    );

    await userEvent.click(screen.getByRole("button", { name: "Open Dialog" }));
    const deleteButton = await screen.findByRole("button", {
      name: "yesDelete",
    });

    expect(deleteButton).toBeDisabled();
  });

  it("should have no accessibility violations when open", async () => {
    render(
      <DeleteGroupDialog group={mockGroup}>
        <button>Open Dialog</button>
      </DeleteGroupDialog>,
    );

    await userEvent.click(screen.getByRole("button", { name: "Open Dialog" }));
    const dialog = await screen.findByRole("dialog");
    const results = await axe(dialog);

    expect(results).toHaveNoViolations();
  });
});
