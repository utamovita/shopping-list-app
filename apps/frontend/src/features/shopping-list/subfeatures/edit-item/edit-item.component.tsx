import { Button } from "@/shared/ui/button";
import { Edit3 } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

type EditItemProps = {
  onEdit: () => void;
  itemName: string;
};

function EditItem({ onEdit, itemName }: EditItemProps) {
  const { t } = useTranslation("common");

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onEdit}
      aria-label={t("shoppingList.edit-item", { itemName })}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <Edit3 className="h-4 w-4 text-muted-foreground" />
    </Button>
  );
}

export { EditItem };
