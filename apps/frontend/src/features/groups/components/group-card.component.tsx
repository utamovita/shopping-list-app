"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import type { Group } from "@repo/types/api";
import { MoreVertical, Users, List } from "lucide-react";
import Link from "next/link";
import { APP_PATHS } from "@repo/config/paths";
import { useTranslation } from "react-i18next";

type GroupCardProps = {
  group: Group;
};

export function GroupCard({ group }: GroupCardProps) {
  const { t } = useTranslation();

  return (
    <Link href={APP_PATHS.dashboardGroup(group.id)} className="block">
      <Card className="hover:border-primary transition-colors">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg">{group.name}</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-1 rounded-md hover:bg-accent">
                <MoreVertical className="h-5 w-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                {t("common:group.changeName")}
              </DropdownMenuItem>
              <DropdownMenuItem>
                {t("common:group.manageMembers")}
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">
                {t("common:group.delete")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <List className="h-4 w-4" />
              <span>
                {group._count.shoppingItems}
                {t("common:group.itemsAmount")}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>
                {group.members.length}
                {t("common:group.membersAmount")}
              </span>
            </div>
          </div>
        </CardContent>
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
    </Link>
  );
}
