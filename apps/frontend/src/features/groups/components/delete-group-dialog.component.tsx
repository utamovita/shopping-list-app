"use client";

import { CustomDialog } from "@/shared/ui/custom-dialog.component";
import { Group } from "@repo/types";
import { Button } from "@/shared/ui/button";
import { useDeleteGroup } from "../hooks/use-delete-group.hook";
import { useTranslation } from "react-i18next";

type DeleteGroupDialogProps = {
  group: Group;
  children: React.ReactNode;
};

export function DeleteGroupDialog({ group, children }: DeleteGroupDialogProps) {
  const { mutate, isPending } = useDeleteGroup();
  const { t } = useTranslation("common");
  const handleDelete = () => {
    mutate(group.id);
  };

  return (
    <CustomDialog
      trigger={children}
      title={t("group.delete")}
      description={t("group.deleteGroupPrompt", { groupName: group.name })}
    >
      <div className="flex justify-end gap-2 mt-4">
        <Button
          variant="destructive"
          onClick={handleDelete}
          isLoading={isPending}
        >
          {t("yesDelete")}
        </Button>
      </div>
    </CustomDialog>
  );
}
