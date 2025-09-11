"use client";

import { CreateGroupForm } from "./create-group-form.component";
import { CustomDialog } from "@/shared/ui/custom-dialog.component";
import { useTranslation } from "react-i18next";

export function CreateGroupDialog({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation("common");
  return (
    <CustomDialog
      trigger={children}
      title={t("group.createNew")}
      description={t("group.createNewDescription")}
    >
      <CreateGroupForm />
    </CustomDialog>
  );
}
