/*
  Warnings:

  - Added the required column `order` to the `ShoppingListItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."ShoppingListItem" ADD COLUMN     "order" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "ShoppingListItem_groupId_order_idx" ON "public"."ShoppingListItem"("groupId", "order");
