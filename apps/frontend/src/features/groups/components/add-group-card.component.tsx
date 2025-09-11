"use client";

import { Card, CardContent } from "@/shared/ui/card";
import { PlusCircle } from "lucide-react";
import { CreateGroupDialog } from "./create-group-dialog.component";
import { useTranslation } from "react-i18next";

export function AddGroupCard() {
  const { t } = useTranslation();

  return (
    <CreateGroupDialog>
      <button className="w-full h-full">
        <Card className="h-full border-2 border-dashed hover:border-primary transition-colors flex items-center justify-center cursor-pointer">
          <CardContent className="p-6">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <PlusCircle className="h-10 w-10" />
              <span>{t("common:group.createNew")}</span>
            </div>
          </CardContent>
        </Card>
      </button>
    </CreateGroupDialog>
  );
}
