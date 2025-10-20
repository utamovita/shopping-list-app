import {
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
import { useEffect, useState } from "react";
import { useShoppingListItems } from "@/features/shopping-list/hooks/use-shopping-list-items.hook";
import type { ShoppingListItem } from "@repo/database";
import { useReorderItems } from "@/features/shopping-list/subfeatures/reorder-item/use-reorder-items.hook";

function useDnd(groupId: string) {
  const [items, setItems] = useState<ShoppingListItem[]>([]);
  const { mutate: reorderItems } = useReorderItems(groupId);

  const { data: serverItems, isError } = useShoppingListItems(groupId);

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

  return {
    items,
    sensors,
    handleDragEnd,
    isError,
  };
}

export { useDnd };
