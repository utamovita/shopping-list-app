import { Checkbox } from "@/shared/ui/checkbox";
import { cn } from "@/shared/lib/utils";
import type { ShoppingListItem } from "@repo/database";

import React from "react";
import { RemoveItem } from "@/features/shopping-list/subfeatures/remove-item/remove-item.component";
import { EditItem } from "@/features/shopping-list/subfeatures/edit-item/edit-item.component";

type ShoppingListItemProps = {
  item: ShoppingListItem;
  onToggle: (id: string, completed: boolean) => void;
  dragHandle: React.ReactNode;
  style?: React.CSSProperties;
};

export const ShoppingListItemComponent = React.forwardRef<
  HTMLLIElement,
  ShoppingListItemProps
>(({ item, onToggle, dragHandle, style }, ref) => {
  return (
    <li
      ref={ref}
      style={style}
      className="flex items-center p-4 border-b last-border-b-0 gap-4 bg-background"
    >
      <Checkbox
        id={item.id}
        checked={item.completed}
        onCheckedChange={(checked) => onToggle(item.id, !!checked)}
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
      {dragHandle}
      <EditItem item={item} />
      <RemoveItem item={item} />
    </li>
  );
});

ShoppingListItemComponent.displayName = "ShoppingListItemComponent";
