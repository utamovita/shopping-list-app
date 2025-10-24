import { AlertFallback } from "@/shared/ui/alert";
import { DndWrapper } from "@/features/shopping-list/subfeatures/reorder-item/dnd-wrapper.component";
import { useTranslation } from "react-i18next";
import { useShoppingList } from "@/features/shopping-list/hooks/use-shopping-list.hook";
import { ShoppingListItemComponent } from "./shopping-list-item.component";
import { SpinnerOverlay } from "@/shared/ui/spinner";
import { useRemoveItem } from "@/features/shopping-list/subfeatures/remove-item/use-remove-item.hook";

type ShoppingListProps = {
  groupId: string;
};

function ShoppingList({ groupId }: ShoppingListProps) {
  const { isError, isLoading, items } = useShoppingList(groupId);
  const { t } = useTranslation("common");
  const { mutate: onRemove } = useRemoveItem(groupId);

  if (isLoading) {
    return <SpinnerOverlay variant="container" />;
  }

  if (isError) {
    return <AlertFallback />;
  }

  return (
    <>
      {items.length > 0 ? (
        <DndWrapper groupId={groupId}>
          <ul className="border border-b-0 rounded-md">
            {items.map((item) => (
              <ShoppingListItemComponent
                key={item.id}
                item={item}
                onRemove={onRemove}
              />
            ))}
          </ul>
        </DndWrapper>
      ) : (
        <p className="text-center text-muted-foreground p-8">
          {t("shoppingList.noItems")}
        </p>
      )}
    </>
  );
}

export { ShoppingList };
