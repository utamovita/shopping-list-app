"use client";

import { AddItem } from "@/features/shopping-list/subfeatures/add-item/add-item.component";
import { useGroupSocket } from "@/features/shopping-list/hooks/use-group-socket.hook";
import { useTranslation } from "react-i18next";

import { ShoppingList } from "@/features/shopping-list/components/shopping-list.component";

type ShoppingListViewProps = {
  groupId: string;
};

export function ShoppingListView({ groupId }: ShoppingListViewProps) {
  const { t } = useTranslation("common");
  useGroupSocket(groupId);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">{t("shoppingList.mainTitle")}</h2>
      <AddItem groupId={groupId} />
      <ShoppingList groupId={groupId} />
    </div>
  );
}
