"use client";

import { useEffect, useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { useShoppingListItems } from "@/features/shopping-list/hooks/use-shopping-list-items.hook";
import { AlertFallback } from "@/shared/ui/alert";
import { AddItemForm } from "@/features/shopping-list/components/add-item-form.component";
import { useRemoveItem } from "@/features/shopping-list/hooks/use-remove-item.hook";
import { useGroupSocket } from "@/features/shopping-list/hooks/use-group-socket.hook";
import { useUpdateItem } from "@/features/shopping-list/hooks/use-update-item.hook";
import { useTranslation } from "react-i18next";
import { SortableShoppingListItem } from "@/features/shopping-list/components/sortable-shopping-list-item.component";
import type { ShoppingListItem } from "@repo/database";
import { useReorderItems } from "@/features/shopping-list/hooks/use-reorder-items.hook";

type ShoppingListViewProps = {
  groupId: string;
};

export function ShoppingListView({ groupId }: ShoppingListViewProps) {
  const { data: serverItems, isError } = useShoppingListItems(groupId);
  const [items, setItems] = useState<ShoppingListItem[]>([]);

  const { mutate: removeItem } = useRemoveItem(groupId);
  const { mutate: updateItem } = useUpdateItem(groupId);
  const { mutate: reorderItems } = useReorderItems(groupId);
  const { t } = useTranslation("common");
  useGroupSocket(groupId);

  useEffect(() => {
    if (serverItems?.data) {
      setItems(serverItems.data);
    }
  }, [serverItems]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setItems((currentItems) => {
        const oldIndex = currentItems.findIndex(
          (item) => item.id === active.id,
        );
        const newIndex = currentItems.findIndex((item) => item.id === over.id);
        const reorderedItems = arrayMove(currentItems, oldIndex, newIndex);

        const payloadToApi = reorderedItems.map((item, index) => ({
          id: item.id,
          order: index,
        }));

        reorderItems({
          optimisticItems: reorderedItems,
          payloadToApi: payloadToApi,
        });

        return reorderedItems;
      });
    }
  }

  if (isError) {
    return <AlertFallback />;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">{t("shoppingList.mainTitle")}</h2>
      <AddItemForm groupId={groupId} />
      <div className="border rounded-md">
        {items.length > 0 ? (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={items}
              strategy={verticalListSortingStrategy}
            >
              <ul>
                {items.map((item) => (
                  <SortableShoppingListItem
                    key={item.id}
                    item={item}
                    onToggle={(itemId, completed) =>
                      updateItem({ itemId, completed })
                    }
                    onRemove={(itemId) => removeItem(itemId)}
                  />
                ))}
              </ul>
            </SortableContext>
          </DndContext>
        ) : (
          <p className="text-center text-muted-foreground p-8">
            {t("shoppingList.noItems")}
          </p>
        )}
      </div>
    </div>
  );
}
