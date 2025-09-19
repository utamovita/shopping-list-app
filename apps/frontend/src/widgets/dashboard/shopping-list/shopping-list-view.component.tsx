"use client";

import { useShoppingListItems } from "@/features/shopping-list/hooks/use-shopping-list-items.hook";
import { AlertFallback } from "@/shared/ui/alert";
import { SpinnerOverlay } from "@/shared/ui/spinner";
import { AddItemForm } from "@/features/shopping-list/components/add-item-form.component";
import { useRemoveItem } from "@/features/shopping-list/hooks/use-remove-item.hook";
import { Button } from "@/shared/ui/button";
import { Trash2 } from "lucide-react";
import { useGroupSocket } from "@/features/shopping-list/hooks/use-group-socket.hook";
import { cn } from "@/shared/lib/utils";
import { useUpdateItem } from "@/features/shopping-list/hooks/use-update-item.hook";
import { Checkbox } from "@/shared/ui/checkbox";
import { useTranslation } from "react-i18next";

type ShoppingListViewProps = {
  groupId: string;
};

export function ShoppingListView({ groupId }: ShoppingListViewProps) {
  const { data: items, isLoading, isError } = useShoppingListItems(groupId);
  const { mutate: removeItem } = useRemoveItem(groupId);
  const { mutate: updateItem } = useUpdateItem(groupId);
  const { t } = useTranslation("common");
  useGroupSocket(groupId);

  if (isLoading) {
    return <SpinnerOverlay variant="container" />;
  }

  if (isError || !items) {
    return <AlertFallback />;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">{t("shoppingList.mainTitle")}</h2>
      <AddItemForm groupId={groupId} />
      <div className="border rounded-md">
        {items.data.length > 0 ? (
          <ul>
            {items.data.map((item) => (
              <li
                key={item.id}
                className="flex items-center p-4 border-b last:border-b-0 gap-4"
              >
                <Checkbox
                  id={item.id}
                  checked={item.completed}
                  onCheckedChange={(checked) =>
                    updateItem({ itemId: item.id, completed: !!checked })
                  }
                />
                <label
                  htmlFor={item.id}
                  className={cn(
                    "flex-grow cursor-pointer",
                    item.completed && "line-through text-muted-foreground",
                  )}
                >
                  {item.name}
                </label>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.id)}
                  aria-label={t("shoppingList.removeItem", {
                    itemName: item.name,
                  })}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </li>
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
