import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ShoppingListItemComponent } from "./shopping-list-item.component";
import type { ShoppingListItem } from "@repo/database";
import { GripVertical } from "lucide-react";
import { useTranslation } from "react-i18next";

type SortableShoppingListItemProps = {
  item: ShoppingListItem;
  onToggle: (id: string, completed: boolean) => void;
  onRemove: (id: string) => void;
};

export function SortableShoppingListItem({
  item,
  ...props
}: SortableShoppingListItemProps) {
  const { t } = useTranslation("common");

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : undefined,
    position: "relative" as const,
  };

  return (
    <ShoppingListItemComponent
      ref={setNodeRef}
      style={style}
      item={item}
      {...props}
      dragHandle={
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab touch-none"
          aria-label={t("shoppingList.dragHandleLabel", {
            itemName: item.name,
          })}
        >
          <GripVertical className="h-5 w-5 text-muted-foreground" />
        </div>
      }
    />
  );
}
