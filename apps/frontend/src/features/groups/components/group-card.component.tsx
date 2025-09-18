"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import type { Group } from "@repo/types";
import { Users, List } from "lucide-react";
import Link from "next/link";
import { APP_PATHS } from "@repo/config";
import { useTranslation } from "react-i18next";
import { GroupCardActions } from "./group-card-actions.component";

type GroupCardProps = {
  group: Group;
};

export function GroupCard({ group }: GroupCardProps) {
  const { t } = useTranslation("common");

  return (
    <Card className="flex flex-col justify-between">
      <Link
        href={APP_PATHS.dashboardGroup(group.id)}
        className="block flex-grow"
      >
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg">{group.name}</CardTitle>
          <GroupCardActions group={group} />
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <List className="h-4 w-4" />
              <span>
                {group._count.shoppingItems} {t("group.itemsAmount")}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>
                {group.members.length} {t("group.membersAmount")}
              </span>
            </div>
          </div>
        </CardContent>
      </Link>
      <CardFooter>
        <div className="flex -space-x-2 overflow-hidden">
          {group.members.map(({ user }) => (
            <Avatar
              key={user.id}
              className="h-8 w-8 border-2 border-background"
            >
              <AvatarFallback>
                {user.name?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
