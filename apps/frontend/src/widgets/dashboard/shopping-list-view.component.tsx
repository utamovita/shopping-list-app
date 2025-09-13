"use client";

import { useShoppingListItems } from "@/features/shopping-list/hooks/use-shopping-list-items.hook";
import { AlertFallback } from "@/shared/ui/alert";
import { SpinnerOverlay } from "@/shared/ui/spinner";

type ShoppingListViewProps = {
  groupId: string;
};

export function ShoppingListView({ groupId }: ShoppingListViewProps) {
  const { data: items, isLoading, isError } = useShoppingListItems(groupId);

  if (isLoading) {
    return <SpinnerOverlay variant="container" />;
  }

  if (isError || !items) {
    return <AlertFallback />;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Lista Zakupów</h2>
      {items.data.length > 0 ? (
        <ul>
          {items.data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Ta lista jest jeszcze pusta. Dodaj pierwszy produkt!</p>
      )}
      {/* TODO: Dodać formularz dodawania produktu */}
    </div>
  );
}
