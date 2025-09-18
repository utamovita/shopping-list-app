import { z } from "zod";

export const createShoppingListItemSchema = z.object({
  name: z.string().min(1, { message: "validation:required" }),
});

export const updateShoppingListItemSchema = z.object({
  completed: z.boolean(),
});

export type CreateShoppingListItemDto = z.infer<
  typeof createShoppingListItemSchema
>;
export type UpdateShoppingListItemDto = z.infer<
  typeof updateShoppingListItemSchema
>;
