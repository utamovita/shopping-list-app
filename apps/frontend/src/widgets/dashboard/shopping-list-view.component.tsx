"use client";

import { useShoppingListItems } from "@/features/shopping-list/hooks/use-shopping-list-items.hook";
import { AlertFallback } from "@/shared/ui/alert";
import { SpinnerOverlay } from "@/shared/ui/spinner";
import { AddItemForm } from "@/features/shopping-list/components/add-item-form.component";
import { useRemoveItem } from "@/features/shopping-list/hooks/use-remove-item.hook";
import { Button } from "@/shared/ui/button";
import { Trash2 } from "lucide-react";
import { useGroupSocket } from "@/features/shopping-list/hooks/use-group-socket.hook";

type ShoppingListViewProps = {
  groupId: string;
};

export function ShoppingListView({ groupId }: ShoppingListViewProps) {
  const { data: items, isLoading, isError } = useShoppingListItems(groupId);
  const { mutate: removeItem, isPending: isRemoving } = useRemoveItem(groupId);
  useGroupSocket(groupId);

  if (isLoading) {
    return <SpinnerOverlay variant="container" />;
  }

  if (isError || !items) {
    return <AlertFallback />;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Lista Zakupów</h2>

      <AddItemForm groupId={groupId} />

      <div className="border rounded-md">
        {items.data.length > 0 ? (
          <ul>
            {items.data.map((item, index) => (
              <li
                key={item.id}
                className="flex items-center p-4 border-b last:border-b-0"
              >
                <span className="flex-grow">{item.name}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.id)}
                  disabled={isRemoving}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-muted-foreground p-8">
            Ta lista jest jeszcze pusta. Dodaj pierwszy produkt!
          </p>
        )}
      </div>
    </div>
  );
}
