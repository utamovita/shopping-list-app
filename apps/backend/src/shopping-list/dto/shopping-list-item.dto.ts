import { ApiProperty } from '@nestjs/swagger';
import { createZodDto } from 'nestjs-zod';
import {
  createShoppingListItemSchema,
  updateShoppingListItemSchema,
} from '@repo/schemas';

export class CreateShoppingListItemDto extends createZodDto(
  createShoppingListItemSchema,
) {
  @ApiProperty({
    example: 'Milk',
    description: 'The name of the shopping list item',
  })
  name: string;
}

export class UpdateShoppingListItemDto extends createZodDto(
  updateShoppingListItemSchema,
) {
  @ApiProperty({
    example: true,
    description: 'The completion status of the shopping list item',
  })
  completed: boolean;
}
