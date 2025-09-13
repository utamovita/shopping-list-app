"use client";

import { CustomDialog } from "@/shared/ui/custom-dialog.component";
import { Group } from "@repo/types/api";
import { Button } from "@/shared/ui/button";
import { useDeleteGroup } from "../hooks/use-delete-group.hook";

type DeleteGroupDialogProps = {
  group: Group;
  children: React.ReactNode;
};

export function DeleteGroupDialog({ group, children }: DeleteGroupDialogProps) {
  const { mutate, isPending } = useDeleteGroup();

  const handleDelete = () => {
    mutate(group.id);
  };

  return (
    <CustomDialog
      trigger={children}
      title="Usuń grupę"
      description={`Czy na pewno chcesz usunąć grupę "${group.name}"? Tej operacji nie można cofnąć.`}
    >
      <div className="flex justify-end gap-2 mt-4">
        <Button
          variant="destructive"
          onClick={handleDelete}
          isLoading={isPending}
        >
          Tak, usuń
        </Button>
      </div>
    </CustomDialog>
  );
}
