"use client";

import { DIALOG_TYPES, useUiStore } from "@/shared/store/ui.store";
import { ManageMembersDialog } from "@/features/groups/subfeatures/manage-members/manage-members-dialog.component";
import { RenameGroupDialog } from "@/features/groups/subfeatures/rename-group/rename-group-dialog";
import { DeleteGroupDialog } from "@/features/groups/subfeatures/delete-group/delete-group-dialog.component";
import { CreateGroupDialog } from "@/features/groups/subfeatures/create-group/create-group-dialog.component";

export function DialogManager() {
  const { dialogState, closeDialog } = useUiStore();

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      closeDialog();
    }
  };

  const commonProps = {
    open: !!dialogState.type,
    onOpenChange: handleOpenChange,
  };

  if (!dialogState.type) {
    return null;
  }

  switch (dialogState.type) {
    case DIALOG_TYPES.MANAGE_MEMBERS:
      return (
        <ManageMembersDialog {...commonProps} group={dialogState.props.group} />
      );
    case DIALOG_TYPES.RENAME_GROUP:
      return (
        <RenameGroupDialog {...commonProps} group={dialogState.props.group} />
      );
    case DIALOG_TYPES.DELETE_GROUP:
      return (
        <DeleteGroupDialog {...commonProps} group={dialogState.props.group} />
      );
    case DIALOG_TYPES.CREATE_GROUP:
      return <CreateGroupDialog {...commonProps} />;
    default:
      return null;
  }
}
