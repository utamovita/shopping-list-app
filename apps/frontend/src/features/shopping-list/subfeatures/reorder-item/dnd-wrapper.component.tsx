import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { closestCenter, DndContext } from "@dnd-kit/core";
import { useDnd } from "@/features/shopping-list/subfeatures/reorder-item/use-dnd.hook";

type DndWrapperProps = {
  children: React.ReactNode;
  groupId: string;
};

function DndWrapper({ children, groupId }: DndWrapperProps) {
  const { sensors, items, handleDragEnd } = useDnd(groupId);

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
