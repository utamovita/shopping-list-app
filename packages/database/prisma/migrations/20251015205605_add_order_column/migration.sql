-- AlterTable
ALTER TABLE "public"."ShoppingListItem" ADD COLUMN     "order" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE INDEX "ShoppingListItem_groupId_order_idx" ON "public"."ShoppingListItem"("groupId", "order");
