"use client";

import { useShoppingListItems } from "@/features/shopping-list/hooks/use-shopping-list-items.hook";
import { AlertFallback } from "@/shared/ui/alert";
import { AddItemForm } from "@/features/shopping-list/components/add-item-form.component";
import { useRemoveItem } from "@/features/shopping-list/hooks/use-remove-item.hook";
import { useGroupSocket } from "@/features/shopping-list/hooks/use-group-socket.hook";
import { useUpdateItem } from "@/features/shopping-list/hooks/use-update-item.hook";
import { useTranslation } from "react-i18next";
import { ShoppingListItemComponent } from "@/features/shopping-list/components/shopping-list-item.component";

type ShoppingListViewProps = {
  groupId: string;
};

export function ShoppingListView({ groupId }: ShoppingListViewProps) {
  const { data: items, isError } = useShoppingListItems(groupId);
  const { mutate: removeItem } = useRemoveItem(groupId);
  const { mutate: updateItem } = useUpdateItem(groupId);
  const { t } = useTranslation("common");
  useGroupSocket(groupId);

  if (isError) {
    return <AlertFallback />;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">{t("shoppingList.mainTitle")}</h2>
      <AddItemForm groupId={groupId} />
      <div className="border rounded-md">
        {items && items.data.length > 0 ? (
          <ul>
            {items.data.map((item) => (
              <ShoppingListItemComponent
                key={item.id}
                item={item}
                onToggle={(itemId, completed) =>
                  updateItem({ itemId, completed })
                }
                onRemove={(itemId) => removeItem(itemId)}
              />
            ))}
          </ul>
        ) : (
          <p className="text-center text-muted-foreground p-8">
            {t("shoppingList.noItems")}
          </p>
        )}
      </div>
    </div>
  );
}
