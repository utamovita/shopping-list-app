import { Checkbox } from "@/shared/ui/checkbox";
import { cn } from "@/shared/lib/utils";
import type { ShoppingListItem } from "@repo/database";
import React from "react";
import { RemoveItem } from "@/features/shopping-list/subfeatures/remove-item/remove-item.component";
import { EditItem } from "@/features/shopping-list/subfeatures/edit-item/edit-item.component";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useUpdateItem } from "@/features/shopping-list/subfeatures/edit-item/use-update-item.hook";

type ShoppingListItemProps = {
  item: ShoppingListItem;
};

export const ShoppingListItemComponent = ({ item }: ShoppingListItemProps) => {
  const { t } = useTranslation("common");
  const { mutate: updateItem } = useUpdateItem(item.groupId);

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

  const onToggle = (checked: boolean) => {
    updateItem({ itemId: item.id, completed: checked });
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className="flex items-center p-4 border-b last-border-b-0 gap-4 bg-background"
    >
      <Checkbox
        id={item.id}
        checked={item.completed}
        onCheckedChange={(checked) => onToggle(!!checked)}
      />
      <label
        htmlFor={item.id}
        className={cn(
          "flex-grow cursor-pointer",
          item.completed && "line-through text-muted-foreground",
        )}
      >
        {item.name}
        {item.quantity > 1 && (
          <span className="ml-2 text-muted-foreground font-bold">
            (x{item.quantity})
          </span>
        )}
      </label>

      <div
        {...attributes}
        {...listeners}
        className="cursor-grab touch-none p-2"
        aria-label={t("shoppingList.dragHandleLabel", {
          itemName: item.name,
        })}
      >
        <GripVertical className="h-5 w-5 text-muted-foreground" />
      </div>

      <EditItem item={item} />
      <RemoveItem item={item} />
    </li>
  );
};
