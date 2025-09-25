"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import type { Group } from "@repo/types";
import { MoreVertical } from "lucide-react";
import { useTranslation } from "react-i18next";
import { DeleteGroupDialog } from "./delete-group-dialog.component";
import { CreateInvitationDialog } from "@/features/invitations/components/create-invitation-dialog.component";

type GroupCardActionsProps = {
  group: Group;
};

export function GroupCardActions({ group }: GroupCardActionsProps) {
  const { t } = useTranslation("common");

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
          <DropdownMenuItem>{t("group.changeName")}</DropdownMenuItem>
          <CreateInvitationDialog group={group}>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              {t("group.manageMembers")}
            </DropdownMenuItem>
          </CreateInvitationDialog>
          <DeleteGroupDialog group={group}>
            <DropdownMenuItem
              onSelect={(e) => e.preventDefault()}
              className="text-destructive focus:bg-destructive/10 focus:text-destructive"
            >
              {t("group.delete")}
            </DropdownMenuItem>
          </DeleteGroupDialog>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
