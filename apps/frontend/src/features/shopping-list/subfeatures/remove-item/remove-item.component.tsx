import { Button } from "@/shared/ui/button";
import { Trash2 } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { useRemoveItem } from "@/features/shopping-list/subfeatures/remove-item/use-remove-item.hook";
import type { ShoppingListItem } from "@repo/database";

type RemoveItemProps = {
  item: ShoppingListItem;
};

function RemoveItem({ item }: RemoveItemProps) {
  const { t } = useTranslation("common");
  const { mutate: onRemove } = useRemoveItem(item.groupId);

  return (
    <Button
      variant="ghost"
      size="icon"
      role={"button"}
      onClick={() => onRemove(item.id)}
      aria-label={t("shoppingList.remove-item", { itemName: item.name })}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <Trash2 className="h-4 w-4 text-destructive" />
    </Button>
  );
}

export { RemoveItem };
