import { Button } from "@/shared/ui/button";
import { Edit3 } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import type { ShoppingListItem } from "@repo/database";

type RemoveItemProps = {
  item: ShoppingListItem;
};

function EditItem({ item }: RemoveItemProps) {
  const { t } = useTranslation("common");
  // const {  } = useUpdateItem();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => console.log("dupa")}
      aria-label={t("shoppingList.edit-item", { itemName: item.name })}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <Edit3 className="h-4 w-4 text-muted-foreground" />
    </Button>
  );
}

export { EditItem };
