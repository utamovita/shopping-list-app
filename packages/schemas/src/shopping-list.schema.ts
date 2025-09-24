import { z } from "zod";

export const createShoppingListItemSchema = z.object({
  name: z.string().min(1, { message: "validation:required" }),
});

export const shoppingListItemParamsSchema = z.object({
  groupId: z.string(),
  itemId: z.string(),
});

export const updateShoppingListItemBodySchema = z.object({
  completed: z.boolean(),
});

export const updateShoppingListItemSchema = shoppingListItemParamsSchema.extend(
  updateShoppingListItemBodySchema.shape,
);

export type CreateShoppingListItemDto = z.infer<
  typeof createShoppingListItemSchema
>;
export type UpdateShoppingListItemDto = z.infer<
  typeof updateShoppingListItemSchema
>;

export type ShoppingListItemParams = z.infer<
  typeof shoppingListItemParamsSchema
>;
