import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateShoppingListItemDto {
  @ApiProperty({
    example: 'Milk',
    description: 'The name of the shopping list item',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
