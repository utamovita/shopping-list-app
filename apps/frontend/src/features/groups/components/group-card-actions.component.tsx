"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { useTranslation } from "react-i18next";
import { GroupWithDetails } from "@repo/types";
import { Role } from "@repo/database";
import { DIALOG_TYPES, useUiStore } from "@/shared/store/ui.store";

type GroupCardActionsProps = {
  group: GroupWithDetails;
};

export function GroupCardActions({ group }: GroupCardActionsProps) {
  const { t } = useTranslation("common");
  const openDialog = useUiStore((state) => state.openDialog);

  if (group.currentUserRole !== Role.ADMIN) {
    return null;
  }

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
      className="relative z-10"
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="p-1 rounded-md hover:bg-accent">
            <MoreVertical className="h-5 w-5" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => openDialog(DIALOG_TYPES.RENAME_GROUP, { group })}
          >
            {t("group.changeName")}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => openDialog(DIALOG_TYPES.MANAGE_MEMBERS, { group })}
          >
            {t("group.manageMembers.title")}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => openDialog(DIALOG_TYPES.DELETE_GROUP, { group })}
            className="text-destructive focus:bg-destructive/10 focus:text-destructive"
          >
            {t("group.delete")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
