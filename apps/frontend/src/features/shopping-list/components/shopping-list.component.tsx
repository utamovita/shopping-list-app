import { useDnd } from "@/features/shopping-list/subfeatures/reorder-item/use-dnd.hook";
import { AlertFallback } from "@/shared/ui/alert";
import { DndWrapper } from "@/features/shopping-list/subfeatures/reorder-item/dnd-wrapper.component";
import { SortableShoppingListItem } from "@/features/shopping-list/components/sortable-shopping-list-item.component";
import { useUpdateItem } from "@/features/shopping-list/subfeatures/edit-item/use-update-item.hook";
import { useTranslation } from "react-i18next";

type ShoppingListViewProps = {
  groupId: string;
};

function ShoppingList({ groupId }: ShoppingListViewProps) {
  const { isError, items } = useDnd(groupId);
  const { mutate: updateItem } = useUpdateItem(groupId);
  const { t } = useTranslation("common");

  if (isError) {
    return <AlertFallback />;
  }

  return (
    <>
      {items.length > 0 ? (
        <DndWrapper groupId={groupId}>
          <ul className="border border-b-0 rounded-md">
            {items.map((item) => (
              <SortableShoppingListItem
                key={item.id}
                item={item}
                onToggle={(itemId, completed) =>
                  updateItem({ itemId, completed })
                }
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
