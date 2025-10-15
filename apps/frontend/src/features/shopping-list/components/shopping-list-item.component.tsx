import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { cn } from "@/shared/lib/utils";
import type { ShoppingListItem } from "@repo/database";
import { Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import React from "react";

type ShoppingListItemProps = {
  item: ShoppingListItem;
  onToggle: (id: string, completed: boolean) => void;
  onRemove: (id: string) => void;
  dragHandle: React.ReactNode;
  style?: React.CSSProperties;
};

export const ShoppingListItemComponent = React.forwardRef<
  HTMLLIElement,
  ShoppingListItemProps
>(({ item, onToggle, onRemove, dragHandle, style }, ref) => {
  const { t } = useTranslation("common");

  return (
    <li
      ref={ref}
      style={style}
      className="flex items-center p-4 border-b last-border-b-0 gap-4 bg-background"
    >
      {dragHandle}
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
      </label>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onRemove(item.id)}
        aria-label={t("shoppingList.removeItem", { itemName: item.name })}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <Trash2 className="h-4 w-4 text-destructive" />
      </Button>
    </li>
  );
});

ShoppingListItemComponent.displayName = "ShoppingListItemComponent";
