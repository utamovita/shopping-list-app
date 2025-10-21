import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { closestCenter, DndContext } from "@dnd-kit/core";
import { useShoppingList } from "@/features/shopping-list/hooks/use-shopping-list.hook";

type DndWrapperProps = {
  children: React.ReactNode;
  groupId: string;
};

function DndWrapper({ children, groupId }: DndWrapperProps) {
  const { sensors, items, handleDragEnd } = useShoppingList(groupId);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  );
}

export { DndWrapper };
