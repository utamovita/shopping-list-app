import { ApiProperty } from '@nestjs/swagger';
import { createZodDto } from 'nestjs-zod';
import {
  createShoppingListItemSchema,
  updateShoppingListItemBodySchema,
  shoppingListItemParamsSchema,
} from '@repo/schemas';

export class CreateShoppingListItemDto extends createZodDto(
  createShoppingListItemSchema,
) {
  @ApiProperty({
    example: 'Milk',
    description: 'The name of the shopping list item',
  })
  name!: string;
}

export class UpdateShoppingListItemDto extends createZodDto(
  updateShoppingListItemBodySchema,
) {
  @ApiProperty({
    example: true,
    description: 'The completion status of the shopping list item',
  })
  completed!: boolean;
}

export class ShoppingListItemParamsDto extends createZodDto(
  shoppingListItemParamsSchema,
) {}
