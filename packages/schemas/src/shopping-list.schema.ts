import { z } from "zod";

export const createShoppingListItemSchema = z.object({
  name: z.string().min(1, { message: "validation:required" }),
  quantity: z.number().int().positive().optional().default(1),
});

export const shoppingListItemParamsSchema = z.object({
  groupId: z.string(),
  itemId: z.string(),
});

export const updateShoppingListItemBodySchema = z.object({
  name: z.string().min(1).optional(),
  quantity: z.number().int().positive().optional(),
  completed: z.boolean().optional(),
});

export const updateShoppingListItemSchema = shoppingListItemParamsSchema.extend(
  updateShoppingListItemBodySchema.shape,
);

export const removeShoppingListItemsSchema = z.object({
  itemIds: z.array(z.string()).min(1),
});

export type CreateShoppingListItemDto = z.infer<
  typeof createShoppingListItemSchema
>;
export type UpdateShoppingListItemDto = z.infer<
  typeof updateShoppingListItemSchema
>;

export type ShoppingListItemParams = z.infer<
  typeof shoppingListItemParamsSchema
>;

export const reorderShoppingListSchema = z.object({
  items: z.array(
    z.object({
      id: z.string(),
      order: z.number(),
    }),
  ),
});
