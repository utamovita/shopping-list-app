import { ApiProperty } from '@nestjs/swagger';
import {
  createShoppingListItemSchema,
  reorderShoppingListSchema,
  shoppingListItemParamsSchema,
  updateShoppingListItemBodySchema,
} from '@repo/schemas';
import { createZodDto } from 'nestjs-zod';

export class CreateShoppingListItemDto extends createZodDto(
  createShoppingListItemSchema,
) {
  @ApiProperty({
    example: 'Milk',
    description: 'The name of the shopping list item',
  })
  name!: string;
  @ApiProperty({
    example: 1,
    description: 'The quantity of the shopping list item',
  })
  quantity!: number;
}

export class UpdateShoppingListItemDto extends createZodDto(
  updateShoppingListItemBodySchema,
) {
  @ApiProperty({
    example: 'Fresh Milk',
    description: 'The new name of the shopping list item',
    required: false,
  })
  name?: string;

  @ApiProperty({
    example: 2,
    description: 'The new quantity of the shopping list item',
    required: false,
  })
  quantity?: number;

  @ApiProperty({
    example: true,
    description: 'The completion status of the shopping list item',
    required: false,
  })
  completed?: boolean;
}

export class ShoppingListItemParamsDto extends createZodDto(
  shoppingListItemParamsSchema,
) {}

export class ReorderShoppingListDto extends createZodDto(
  reorderShoppingListSchema,
) {}
